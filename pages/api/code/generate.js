import { getSession } from "@auth0/nextjs-auth0";
import { Configuration,OpenAIApi } from "openai"

export default async function handler(req, res) {
    const config = new Configuration({
        apiKey: process.env.OPENAI_API_KEY,
    })
    const openai = new OpenAIApi(config)
    const {user} = await getSession(req,res)

  const { code } = req.body


    const response = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: `create a todo list for ${code}`,
        temperature: 0,
        max_tokens: 4000,
        top_p: 1,
        frequency_penalty: 0.5,
        presence_penalty: 0,
      });
      console.log(response.data.usage.total_tokens);
const token = response.data.usage.total_tokens

const data  = response.data.choices[0].text.replace(/\\n/g, "")
    res.status(200).json({ name: data,tokens:token})
  }
  