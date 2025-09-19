"use client";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Send} from "lucide-react";
import { useState } from "react";

const contactFormSchema = z.object({
  username: z
    .string({ message: "Kindly enter a valid name e.g John Doe" })
    .trim()
    .min(3, {
      message: "Name must be at least 3 characters.",
    }),
  email: z
    .email({
      message: "Kindly enter a valid email address e.g johndoe@gmail.com",
    })
    .trim()
    .min(1, { message: "Email should be filled in" }),
  message: z
    .string({ message: "Kindly enter a valid message" })
    .trim()
    .min(10, {
      message: "The message should be at least 50 characters.",
    }),
});

function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState("");
  const form = useForm({
    resolver: zodResolver(contactFormSchema),
    defaultValue: {
      username: "",
      email: "",
      message: "",
    },
  });

  const {
    handleSubmit,
    control,
    formState: { errors, isValid },
    reset,
  } = form;

  const onSubmit = async ({ username, email, message }) => {
    try {
      setIsSubmitting(true);
      const formData = new FormData();
      formData.append("access_key", "e296c7a1-0935-4645-b182-83422fd140e3");
      formData.append("name", username);
      formData.append("email", email);
      formData.append("message", message);
      formData.append("subject", "New Contact Form Message");

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();

      if (result.success) {
        setSubmitStatus("Message sent successfully!");
        reset();
      } else {
        console.log("result.error", result);
        setSubmitStatus("Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      setSubmitStatus("Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Form {...form}>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-8 bg-white rounded-xl shadow p-6 gap-6 "
      >
        <FormField
          control={control}
          name="username"
          render={({ field }) => (
            <FormItem className="gap-2">
              <FormLabel className="text-base">Name</FormLabel>
              <FormControl className="">
                <Input
                  placeholder="John Doe"
                  {...field}
                  className="px-4 py-3 focus-visible:ring-primary-75 focus-visible:border-primary-75 transition-all duration-500 ease-in-out border-gray-200 aria-invalid:ring-red-800 aria-invalid:border-red-800  aria-invalid:text-red-800"
                />
              </FormControl>
              {errors.username && (
                <p className="text-red-800 text-left">
                  {errors.username.message}
                </p>
              )}
            </FormItem>
          )}
        />
        <FormField
          control={control}
          name="email"
          render={({ field }) => (
            <FormItem className="gap-2">
              <FormLabel className="text-base">Email</FormLabel>
              <FormControl>
                <Input
                  placeholder="johndoe@gmail.com"
                  {...field}
                  className="px-4 py-3 focus-visible:ring-primary-75 focus-visible:border-primary-75 transition-all duration-500 ease-in-out  border-gray-200 aria-invalid:ring-red-800 aria-invalid:border-red-800  aria-invalid:text-red-800"
                />
              </FormControl>
              {errors.email && (
                <p className="text-red-800 text-left">{errors.email.message}</p>
              )}
            </FormItem>
          )}
        />
        <FormField
          control={control}
          name="message"
          render={({ field }) => (
            <FormItem className="gap-2">
              <FormLabel className="text-base">Message</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Be as descriptive as you can ..."
                  {...field}
                  className="h-32 px-4 py-3 focus-visible:ring-primary-75 focus-visible:border-primary-75 transition-all duration-500 ease-in-out border-gray-200 aria-invalid:ring-red-800 aria-invalid:border-red-800  aria-invalid:text-red-800"
                />
              </FormControl>
              {errors.message && (
                <p className="text-red-800 text-left">
                  {errors.message.message}
                </p>
              )}
            </FormItem>
          )}
        />
        <div className="flex justify-center items-center">
          <Button
            type="submit"
            size="lg"
            disabled={!isValid}
            className="text-base cursor-pointer px-5 py-3 w-2/3 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? "Sending..." : "Send Message"}
            <Send className="h-4.5 w-4.5" />
          </Button>
        </div>
        {submitStatus && (
          <p
            className={`text-center ${
              submitStatus.includes("success")
                ? "text-green-600"
                : "text-red-600"
            }`}
          >
            {submitStatus}
          </p>
        )}
      </form>
    </Form>
  );
}

export default ContactForm;
