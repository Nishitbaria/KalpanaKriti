import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";
import { GoogleGenerativeAI } from "@google/generative-ai";

const API_KEY = "AIzaSyC4V14KnN4FgUHcZwbNejh8UBLuiYPuhYE"
const genai = new GoogleGenerativeAI(API_KEY);


export async function POST(req: Request) {
    try {
        const { userId } = auth();
        const body = await req.json();
        const { message } = body;

        console.log("Message: ", message);

        const model = genai.getGenerativeModel({ model: "gemini-pro" });
        const result = await model.generateContent(message);
        const response = await result.response;
        const text = response.text();

        console.log("Response: ", text);


        return NextResponse.json(
            {
                role: "assistant",
                content: text,
            },
            {
                status: 200,

            }
        )

    } catch (error) {
        console.error(error);
        return new NextResponse("Internal Server Error", { status: 500 });
    }


}

