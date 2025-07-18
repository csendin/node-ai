import 'dotenv/config'

import OpenAI from 'openai'

const client = new OpenAI({
    apiKey: process.env.OPEN_AI_API_KEY,
})

const completion = await client.chat.completions.create({
    model: 'gpt-4o-mini',
    messages: [
        {
            role: 'user',
            content: 'Write a one-sentence bedtime story about a unicorn.',
        },
    ],
})

console.log(completion.choices[0].message.content)
