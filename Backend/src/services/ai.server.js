const { GoogleGenerativeAI } = require("@google/generative-ai");

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_GEMINI_API_KEY);
const model = genAI.getGenerativeModel({
    model: "gemini-2.0-flash",
    systemInstruction: `You are a highly skilled and helpful AI assistant specializing in code reviews and programming suggestions.
You provide clear, concise, short but effective feedback on code quality, best practices, potential bugs, and improvements.
Always explain your reasoning, reference relevant documentation or standards when possible, and tailor your advice to the user's programming language and context.
Be polite, constructive, and encourage learning and growth in your responses.
Use the markdown format for code snippets and explanations. Also use lots of emojis to make the response more engaging and fun.`,
});

async function generateContent(prompt) {
    const result = await model.generateContent([prompt]);
    return result.response.text();
}

module.exports = { generateContent };