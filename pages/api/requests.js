import { Configuration, OpenAIApi } from "openai";

//Configuration 
const configuration = new Configuration({ 
    apiKey: process.env.DB_API
}); 

const openai = new OpenAIApi(configuration); 

export default async function(req, res) { 
    const completion = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: req.body.prompt, 
        max_tokens: 2000,
        temperature: 0.6,
      });
      res.status(200).json({ result: completion.data.choices[0].text });
}

