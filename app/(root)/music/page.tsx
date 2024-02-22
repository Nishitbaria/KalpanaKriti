"use client";
import * as z from "zod";
import Heading from "@/components/shared/Heading";
import { zodResolver } from "@hookform/resolvers/zod";
import { Music } from "lucide-react";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { musicSchema } from "@/lib/validations";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import axios from "axios";
import Empty from "@/components/shared/Empty";
import Loader from "@/components/shared/Loader";

export default function MusicPage() {
  const router = useRouter();
  const [music, setMusic] = useState<string>();

  const form = useForm<z.infer<typeof musicSchema>>({
    resolver: zodResolver(musicSchema),
    defaultValues: {
      prompt: "",
    },
  });

  const isLoading = form.formState.isSubmitting;

  const onSubmit = async (values: z.infer<typeof musicSchema>) => {
    try {
      setMusic(undefined);

      const response = await axios.post("/api/music", values);
      console.log(response);

      setMusic(response.data.audio);
      form.reset();
    } catch (error: any) {
      console.error(error);
    } finally {
      router.refresh();
    }

    console.log(values);
  };
  console.log(music);

  return (
    <div>
      <Heading
        title="Music"
        description="Turn Your Promt into a music lyrics, song or anything you want."
        icon={Music}
        iconColor="text-emerald-500"
        bgColor="bg-emerald-500/10"
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
                        placeholder="Piano Solo"
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
          {!music && !isLoading && (
            <div>
              <Empty lable="No Music Founded" />
            </div>
          )}
          {music && (
            <audio controls className="w-full mt-8">
              <source src={music} />
            </audio>
          )}
        </div>
      </div>
    </div>
  );
}
