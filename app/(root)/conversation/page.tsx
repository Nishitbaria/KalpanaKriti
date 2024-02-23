"use client";
import * as z from "zod";
import Heading from "@/components/shared/Heading";
import { zodResolver } from "@hookform/resolvers/zod";
import { MessageSquare } from "lucide-react";
import React from "react";
import { useForm } from "react-hook-form";
import { conversionFormSchema } from "@/lib/validations";
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
import { useProModal } from "@/hooks/user-pro-modal";

export default function ConversionPage() {
  const router = useRouter();
  const proModel = useProModal();
  const [messages, setMessages] = React.useState<
    CreateChatCompletionRequestMessage[]
  >([]);

  const form = useForm<z.infer<typeof conversionFormSchema>>({
    resolver: zodResolver(conversionFormSchema),
    defaultValues: {
      prompt: "",
    },
  });

  const isLoading = form.formState.isSubmitting;

  const onSubmit = async (values: z.infer<typeof conversionFormSchema>) => {
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
        title="Conversation"
        description="Chat with the smartest AI - Experience the power of AI"
        icon={MessageSquare}
        iconColor="text-violet-500"
        bgColor="bg-violet-500/10"
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
                  "p-8 w-full flex items-start gap-x-8 rounded-lg",
                  msg.role === "user"
                    ? "bg-white border border-black/10"
                    : "bg-muted"
                )}
              >
                {msg.role === "user" ? <UserAvatar /> : <BotAvatar />}
                <p className="text-sm">{msg.content}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
