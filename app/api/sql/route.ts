import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";
import Replicate from "replicate";
import { incrementApiLimit, checkApiLimit } from "@/lib/api-limit";
import { checkSubscription } from "@/lib/subsciption";

const replicate = new Replicate({
    auth: process.env.REPLICATE_API_TOKEN,
})

export async function POST(req: Request) {



    try {
        const { userId } = auth();
        const body = await req.json();
        const { prompt } = body;



        console.log(prompt);

        // if (!userId) {
        //     return new NextResponse("Unauthorized", { status: 401 });
        // }

        if (!prompt) {
            return new NextResponse("prompt is Not Sended", { status: 400 });
        }


        const result = await replicate.run(
            "joehoover/sql-generator:4077a2c492008559469467b75888710bcb4f948b87f5c0a25f297a21f544d580",
            {
                input: {
                    debug: false,
                    top_k: 50,
                    top_p: 0.9,
                    prompt: `You are a powerful text-to-SQL model. Your job is to answer questions about a database. You are given a question and context regarding one or more tables. \n\nYou must output the SQL query that answers the question.\n\n### Input:\n ${prompt} \n\n### Context:\nCREATE TABLE table_name_34 (decile VARCHAR, name VARCHAR)\n\n### Response:\n`,
                    temperature: 0.75,
                    max_new_tokens: 128,
                    min_new_tokens: -1
                }
            }
        );

        return new NextResponse(JSON.stringify(result), { status: 200 });

    } catch (error) {
        console.log(error);
    }


}