import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";
import OpenAI from "openai";
import { incrementApiLimit, checkApiLimit } from "@/lib/api-limit";

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

    const freeTrial = await checkApiLimit();
    if (!freeTrial) {
      return new NextResponse("Free trial has been expired", { status: 403 });
    }

    const respone = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: message,
    });
    await incrementApiLimit();

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
