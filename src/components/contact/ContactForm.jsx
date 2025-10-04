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
import { Loader, Send } from "lucide-react";
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

function ContactForm({ programName, onSuccess, subject }) {
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

      const response = await fetch("https://giantgolemfitness.pages.dev/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: username,
          email,
          message,
          subject: subject || `Interested in ${programName} Program`,
          programName: programName,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setSubmitStatus("Message sent successfully!");
        reset();

        // Close dialog after success
        setTimeout(() => {
          if (onSuccess) onSuccess();
        }, 1500);

      } else {
        console.log("result.error", result);
        setSubmitStatus("Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error("Submit error:", error);
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
                  className="px-4 py-3 focus-visible:ring-primary-75 focus-visible:border-primary-75 transition-all duration-300 ease-in-out border-gray-200 aria-invalid:ring-red-800 aria-invalid:border-red-800  aria-invalid:text-red-800"
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
                  className="px-4 py-3 focus-visible:ring-primary-75 focus-visible:border-primary-75 transition-all duration-300 ease-in-out  border-gray-200 aria-invalid:ring-red-800 aria-invalid:border-red-800  aria-invalid:text-red-800"
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
                  placeholder="Tell us about your fitness goals..."
                  {...field}
                  className="h-32 px-4 py-3 focus-visible:ring-primary-75 focus-visible:border-primary-75 transition-all duration-300 ease-in-out border-gray-200 aria-invalid:ring-red-800 aria-invalid:border-red-800  aria-invalid:text-red-800"
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
            {isSubmitting ? <Loader /> : "Send Message"}
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
