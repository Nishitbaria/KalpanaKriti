import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req: Request) {
  try {
    const { userId } = auth();
    const body = await req.json();
    const { message } = body;

    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }
    if (!openai.apiKey) {
      console.error("OpenAI API key not found");
      return new NextResponse("Unauthorized", { status: 401 });
    }
    if (!message) {
      return new NextResponse("Message is Not Sended", { status: 400 });
    }

    const respone = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: message,
    });

    return NextResponse.json(
      {
        role: "assistant",
        content: respone.choices[0].message.content,
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    console.error(error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
