const {GoogleGenAI} = require('@google/genai')

require('dotenv').config()

async function main() {

    const ai = new GoogleGenAI({
      apiKey: process.env.GEMINI_KEY_AI
   });

    const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: 'What is the meaning of life?',
    });

    console.log(response.text);
}

main();