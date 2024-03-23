import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";
import OpenAI from "openai";
import { incrementApiLimit, checkApiLimit } from "@/lib/api-limit";
import { checkSubscription } from "@/lib/subsciption";
import { response } from "express";
import axios from "axios";
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req: Request) {


  const options = {
    method: 'POST',
    url: 'https://api.edenai.run/v2/image/generation',
    headers: {
      authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiOTBmMTYxY2EtY2JjZS00NTczLWE2YzEtYmRiNDRjZjIxOTA1IiwidHlwZSI6ImFwaV90b2tlbiJ9.ZQSAGuoxKrNpHRSvDWtSu06kkymof06t3v7gSktLics',
    },
    data: {
      providers: 'stabilityai',
      text: 'a red flying balloon.',
      resolution: '1024x1024',
      fallback_providers: '',
    },
  };



  try {
    const { userId } = auth();
    const body = await req.json();
    const { prompt, amount = 1, resolution = "512x512" } = body;
    console.log(openai.images.generate);
    // if (!userId) {
    //   return new NextResponse("Unauthorized", { status: 401 });
    // }
    // if (!openai.apiKey) {
    //   console.error("OpenAI API key not found");
    //   return new NextResponse("Unauthorized", { status: 401 });
    // }
    // if (!prompt) {
    //   return new NextResponse("Prompt is required", { status: 400 });
    // }

    // if (!amount) {
    //   return new NextResponse("Amount is required", { status: 400 });
    // }

    // if (!resolution) {
    //   return new NextResponse("Resolution is required", { status: 400 });
    // }
    // const isPro = await checkSubscription();
    // const freeTrial = await checkApiLimit();
    // if (!freeTrial && !isPro) {
    //   return new NextResponse("Free trial has been expired", { status: 403 });
    // }

    // const response = await openai.images.generate({
    //   prompt: prompt,
    //   n: parseInt(amount, 10),
    //   size: resolution,
    // });



    const response = await axios.request(options);


    // check if the user is pro and increment the api limit
    // if (!isPro) {
    //   await incrementApiLimit();
    // }

    return NextResponse.json(response.data);
  } catch (error) {
    console.error(error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
