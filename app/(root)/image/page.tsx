"use client";
import * as z from "zod";
import Heading from "@/components/shared/Heading";
import { zodResolver } from "@hookform/resolvers/zod";
import { Download, ImageIcon, MessageSquare } from "lucide-react";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import {
  amountOptions,
  conversionFormSchema,
  imageFormSchema,
  resolutionOptions,
} from "@/lib/validations";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

import axios from "axios";
import Empty from "@/components/shared/Empty";
import Loader from "@/components/shared/Loader";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardFooter } from "@/components/ui/card";
import Image from "next/image";
import { useProModal } from "@/hooks/user-pro-modal";

export default function ConversionPage() {
  const router = useRouter();
  const [images, setImages] = useState<string[]>([]);
  const proModel = useProModal();

  const form = useForm<z.infer<typeof imageFormSchema>>({
    resolver: zodResolver(imageFormSchema),
    defaultValues: {
      prompt: "",
      amount: "1",
      resolution: "256x256",
    },
  });

  const isLoading = form.formState.isSubmitting;

  const onSubmit = async (values: z.infer<typeof imageFormSchema>) => {
    try {
      setImages([]);
      console.log(values);
      const response = await axios.post("/api/image", values);

      const urls = response.data.map((image: { url: string }) => image.url);
      setImages(urls);
      console.log(urls);
      console.log(response);
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
  console.log(images);

  return (
    <div>
      <Heading
        title="Image Generation"
        description="Turn your Prompt into an Image"
        icon={ImageIcon}
        iconColor="text-pink-700"
        bgColor="bg-pink-700/10"
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
                  <FormItem className="col-span-12 lg:col-span-">
                    <FormControl className="m-0 p-0 ">
                      <Input
                        className="border-0  outline-none focus-visible:ring-0 focus-visible:ring-transparent"
                        disabled={isLoading}
                        placeholder="A picture of a cat"
                        {...field}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />

              <FormField
                name="amount"
                control={form.control}
                render={({ field }) => (
                  <FormItem className="col-span-12 lg:col-span-2">
                    <Select
                      disabled={isLoading}
                      onValueChange={field.onChange}
                      value={field.value}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue defaultValue={field.value} />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {amountOptions.map((option) => (
                          <SelectItem key={option.value} value={option.value}>
                            {option.lable}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </FormItem>
                )}
              />
              <FormField
                name="resolution"
                control={form.control}
                render={({ field }) => (
                  <FormItem className="col-span-12 lg:col-span-2">
                    <Select
                      disabled={isLoading}
                      onValueChange={field.onChange}
                      value={field.value}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue defaultValue={field.value} />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {resolutionOptions.map((option) => (
                          <SelectItem key={option.value} value={option.value}>
                            {option.lable}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
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
            <div className="">
              <Loader />
            </div>
          )}

          {images.length === 0 && !isLoading && (
            <div>
              <Empty lable="No Conversion Started" />
            </div>
          )}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-8">
            {images.map((src) => (
              <Card key={src} className="rounded-lg overflow-hidden">
                <div className="relative aspect-square">
                  <Image fill alt="Generated" src={src} />
                </div>
                <CardFooter className="p-2">
                  <Button
                    onClick={() => window.open(src)}
                    variant="secondary"
                    className="w-full"
                  >
                    <Download className="h-4 w-4 mr-2" />
                    Download
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
