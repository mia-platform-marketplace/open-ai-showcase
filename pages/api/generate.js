import { Configuration, OpenAIApi } from "openai";
import { generatePrompt } from "./generatePrompt";

const ai_parameters = {
  model_family: process.env.MODEL_FAMILY || "text-davinci-002",
  max_tokens: +process.env.MAX_TOKENS || 1000,
  temperature: +process.env.TEMPERATURE || 0.6,
};

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

export default async function (req, res) {

  console.info('Calling OpenAI with the following parameters', ai_parameters);

  try {
    const completion = await openai.createCompletion({
      model: ai_parameters.model_family,
      prompt: generatePrompt(req.body.message),
      max_tokens: ai_parameters.max_tokens,
      temperature: ai_parameters.temperature,
      stream: false,
    }, { responseType: '' });

    res.status(200).json({ result: completion.data.choices[0].text });

  } catch (error) {
    console.error('An error occurred during OpenAI request', error);
  }
}