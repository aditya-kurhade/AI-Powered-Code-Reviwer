import { GoogleGenAI } from "@google/genai";

const genAI = new GoogleGenAI(process.env.GOOGLE_GEMINI_API_KEY);
const models = genAI.getGenerativeModel({model: "gemini-2.5-flash"});

async function generateContent(prompt) {
    const result = await models.generateContent({prompt});    
    return result.response.text;
}

models.exports = generateContent;