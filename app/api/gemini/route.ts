import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextResponse } from "next/server";

export async function POST(req:Request) {
  const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!)
  try {
    const model = genAI.getGenerativeModel({model: "gemini-pro"})
    const data = await req.json()
    const prompt = data.body // concatenate text for string afterwards
    const result = await model.generateContent(prompt);
    const out = await result.response.text()

    return NextResponse.json({output: out})
  } catch (error) {
    console.error(error);
  }
}