import { GoogleGenAI } from "@google/genai";

const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;

const ai = new GoogleGenAI({ 
  apiKey: API_KEY,
  apiVersion: "v1beta"
});

async function runChat(promptText) {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3.6-flash",
      contents: promptText,
    });

    return response.text;
  } catch (error) {
    console.error("Error communicating with Gemini API:", error);
    return "API response error. Please wait a few seconds and try again.";
  }
}

export default runChat;