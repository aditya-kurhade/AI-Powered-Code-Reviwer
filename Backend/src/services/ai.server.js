const { GoogleGenerativeAI } = require("@google/generative-ai");

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_GEMINI_API_KEY);
const model = genAI.getGenerativeModel({
  model: "gemini-2.0-flash",
  systemInstruction: `You are a highly skilled and helpful AI assistant specializing in code reviews and programming suggestions.
You provide clear, concise, effective feedback on code quality, best practices, potential bugs, and improvements.
Always explain your reasoning, reference relevant documentation or standards when possible, and tailor your advice to the user's programming language and context.
Be polite, constructive, and encourage learning and growth in your responses.
Use the markdown format for code snippets and explanations. Also use lots of emojis to make the response more engaging and fun.`,
});

async function generateContent(prompt) {
  try {
    const result = await model.generateContent([{ text: prompt }]);
    
    // Check if candidates exist
    if (result?.candidates?.length > 0) {
      return result.candidates[0].content[0].text; // Access text properly
    } else {
      return "❌ No response received from AI.";
    }
  } catch (err) {
    console.error("Error generating content:", err);
    return `❌ Error fetching review: ${err.message}`;
  }
}

module.exports = {generateContent };
