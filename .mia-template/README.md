# mia_template_service_name_placeholder
## Summary

%CUSTOM_PLUGIN_SERVICE_DESCRIPTION%

This is an example of frontend application that allows to ask to Open AI some questions or write something ( like source code, YAML, scripts...).

The application uses Next.js with React. 

This is a Free, Open Source template, under Apache2 License. Feel free to propose improvements and contribute.

## Local Development

To develop the service locally you need node.js v16+.
To run locally the application you should complete the following tasks

### Copy the env file

```shell
cp .env.example .env
```

### Configure the OpenAI Key variable named `OPENAI_API_KEY`

```shell
vi .env
```

and add your secret key from generated here [https://beta.openai.com/account/api-keys>]

### Install and Run

```shell
npm install
npm run dev
```

Then you can open the application on the local url [http://localhost:3000/](http://localhost:3000/)

## Build a Docker Image

```shell
docker build -t open-ai-showcase:0.0.1 .
```

to test it

```shell
docker run -p 3000:3000 --name open-ai-showcase open-ai-showcase:0.0.1
```

Then you can open the application on the local url [http://localhost:3000/](http://localhost:3000/)

## Usage with Mia-Platform

Open Mia-Platform Marketplace, search for 


Playground and enjoy :-)

## Configuration

You can configure the following parameters using .env file or Mia-Platform Design section:

- OPENAI_API_KEY, the secret key from [https://beta.openai.com/account/api-keys]
- MODEL_FAMILY, the one of the model listed here [https://beta.openai.com/docs/models/finding-the-right-model]. Default value is `text-davinci-002`
- MAX_TOKENS, the max number of tokens (see [https://beta.openai.com/tokenizer]). Default values is  `1000`
- TEMPERATURE, the sampling temperature (see here for details [https://towardsdatascience.com/how-to-sample-from-language-models-682bceb97277]. Default value `0.6`
[nvm]: https://github.com/creationix/nvm
[merge-request]: %GITLAB_BASE_URL%/%CUSTOM_PLUGIN_PROJECT_FULL_PATH%/merge_requests

