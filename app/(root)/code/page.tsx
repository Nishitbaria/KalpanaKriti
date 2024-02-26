"use client";
import * as z from "zod";
import Heading from "@/components/shared/Heading";
import { zodResolver } from "@hookform/resolvers/zod";
import { Code } from "lucide-react";
import React from "react";
import { useForm } from "react-hook-form";
import { codeFormSchema } from "@/lib/validations";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { CreateChatCompletionRequestMessage } from "openai/resources/chat/index.mjs";
import axios from "axios";
import Empty from "@/components/shared/Empty";
import Loader from "@/components/shared/Loader";
import { cn } from "@/lib/utils";
import { BotAvatar } from "@/components/shared/bot-avatar";
import UserAvatar from "@/components/shared/user-avatar";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { useProModal } from "@/hooks/user-pro-modal";

export default function ConversionPage() {
  const router = useRouter();
  const proModel = useProModal();
  const [messages, setMessages] = React.useState<
    CreateChatCompletionRequestMessage[]
  >([]);

  const form = useForm<z.infer<typeof codeFormSchema>>({
    resolver: zodResolver(codeFormSchema),
    defaultValues: {
      prompt: "",
    },
  });

  const isLoading = form.formState.isSubmitting;

  const onSubmit = async (values: z.infer<typeof codeFormSchema>) => {
    try {
      const userMessage: CreateChatCompletionRequestMessage = {
        role: "user",
        content: values.prompt,
      };
      const response = await axios.post("/api/conversation", {
        message: [userMessage],
      });
      setMessages((current) => [...current, userMessage, response.data]);

      form.reset();
    } catch (error: any) {
      if (error?.response?.status === 403) {
        proModel.onOpen();
      }
      console.error(error);
    } finally {
      router.refresh();
    }

    console.log(values);
  };
  console.log(messages);

  return (
    <div>
      <Heading
        title="Code Generation"
        description="Generate code using descriptive text."
        icon={Code}
        iconColor="text-green-700"
        bgColor="bg-green-700/10"
      />
      <div className="px-4 lg:px:8">
        <div>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="roudend-md border w-full p-4 px-3 md:px-4 focus-within:shadow-sm grid grid-cols-12 gap-2"
            >
              <FormField
                name="prompt"
                render={({ field }) => (
                  <FormItem className="col-span-12 lg:col-span-10">
                    <FormControl className="m-0 p-0 ">
                      <Input
                        className="border-0  outline-none focus-visible:ring-0 focus-visible:ring-transparent"
                        disabled={isLoading}
                        placeholder="How do i can help you?"
                        {...field}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              <Button
                className="col-span-12 lg:col-span-2 w-full"
                type="submit"
                disabled={isLoading}
                size="icon"
              >
                {" "}
                Generate{" "}
              </Button>
            </form>
          </Form>
        </div>
        <div className="space-y-4 mt-4 text-black">
          {isLoading && (
            <div className="p-8 rounded-lg w-full flex items-center justify-center bg-muted">
              <Loader />
            </div>
          )}

          {messages.length === 0 && !isLoading && (
            <div>
              <Empty lable="No Conversion Started" />
            </div>
          )}

          <div className="flex flex-col-reverse gap-y-4">
            {messages.map((msg: any, index: any) => (
              <div
                key={index}
                className={cn(
                  "p-8 w-full flex items-start gap-x-8 rounded-lg text-sm font-normal dark:text-gray-900 text-white",
                  msg.role === "user"
                    ? "bg-white dark:bg-gray-700 border dark:text-white border-black/10"
                    : "bg-muted dark:text-white"
                )}
              >
                {msg.role === "user" ? <UserAvatar /> : <BotAvatar />}
                {/* <SyntaxHighlighter language="javascript" style={atomDark}> */}
                <ReactMarkdown
                  components={{
                    pre: ({ node, ...props }) => (
                      <div className="overflow-auto w-full my-2 bg-black/10 p-2 rounded-lg">
                        <pre {...props} />
                      </div>
                    ),
                    code: ({ node, ...props }) => (
                      <code
                        className="bg-black/10 dark:bg-gray-600 rounded-lg p-1 text-gray-500 dark:text-white "
                        {...props}
                      />
                    ),
                  }}
                  className="text-sm overflow-hidden leading-7 w-full"
                >
                  {msg.content || ""}
                </ReactMarkdown>
                {/* </SyntaxHighlighter> */}
              </div>
            ))}
          </div>

          {/* HightLight Messages */}
          {/* {messages.map((msg: any, index: any) => {
            const parts = msg.content.split(/(```[^```]*```)/g);
            return (
              <div
                key={index}
                className={cn(
                  "p-8 w-full flex flex-col items-start gap-x-8 rounded-lg",
                  msg.role === "user"
                    ? "bg-white border border-black/10"
                    : "bg-muted"
                )}
              >
                {msg.role === "user" ? <UserAvatar /> : <BotAvatar />}
                {parts.map((part: any, i: any) => {
                  if (part.startsWith("```") && part.endsWith("```")) {
                    const code = part.slice(3, -3);
                    return (
                      <SyntaxHighlighter
                        key={i}
                        language="javascript"
                        style={atomDark}
                        className="w-screen flex flex-col gap-y-4"
                      >
                        {code}
                      </SyntaxHighlighter>
                    );
                  } else {
                    return <span key={i}>{part}</span>;
                  }
                })}
              </div>
            );
          })} */}
        </div>
      </div>
    </div>
  );
}
