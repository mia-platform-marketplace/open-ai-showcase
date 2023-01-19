FROM node:16.15.0-alpine as build

ARG COMMIT_SHA=<not-specified>
ENV NODE_ENV=production

WORKDIR /build-dir

COPY package.json .
COPY package-lock.json .

RUN npm install

COPY . .

RUN echo "test-openai: $COMMIT_SHA" >> ./commit.sha

########################################################################################################################

FROM node:16.15.0-alpine

LABEL maintainer="giulio" \
      name="test-openai" \
      description="Test of OpenAI." \
      eu.mia-platform.url="https://www.mia-platform.eu" \
      eu.mia-platform.version="0.1.0"

ENV NODE_ENV=production
ENV LOG_LEVEL=info
ENV SERVICE_PREFIX=/
ENV HTTP_PORT=3000

WORKDIR /home/node/app

COPY --from=build /build-dir ./


RUN chown -R node:node /home/node/app
RUN npm run build
USER node

CMD ["npm", "-s", "start"]
