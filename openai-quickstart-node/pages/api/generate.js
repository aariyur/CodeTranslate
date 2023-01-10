import { Configuration, OpenAIApi } from 'openai';

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

export default async function (req, res) {
  const {language, code} = req.body;
  const completion = await openai.createCompletion({
    model: 'text-davinci-003',
    prompt: generatePrompt(language, code),
    temperature: 0.6,
    max_tokens: 2048,
  });
  res.status(200).json({ result: completion.data.choices[0].text });
}

function generatePrompt(language, code) {
  return `translate the following code to ${language}$ : ${code}}`;
}