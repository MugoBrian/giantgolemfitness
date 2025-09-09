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

const contactFormSchema = z.object({
  username: z.string({ message: "Kindly enter a valid name e.g John Doe" }).trim().min(3, {
    message: "Name must be at least 3 characters.",
  }),
  email: z
    .email({ message: "Kindly enter a valid email address e.g johndoe@gmail.com" })
    .trim()
    .min(1, { message: "Email should be filled in" }),
  message: z.string({ message: "Kindly enter a valid message" }).trim().min(10, {
    message: "The message should be at least 50 characters.",
  }),
});

function ContactForm() {
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
    formState: { errors },
  } = form;

  const onSubmit = (values) => {
    console.log(values);
  };

  return (
    <Form {...form}>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder="John Doe" {...field} />
              </FormControl>
              {errors.username && (
                <p className="text-red-700 text-left">
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
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="johndoe@gmail.com" {...field} />
              </FormControl>
              {errors.email && (
                <p className="text-red-700 text-left">
                  {errors.email.message}
                </p>
              )}
            </FormItem>
          )}
        />
        <FormField
          control={control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Message</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Be as descriptive as you can ..."
                  {...field}
                />
              </FormControl>
              {errors.message && (
                <p className="text-red-700 text-left">
                  {errors.message.message}
                </p>
              )}
            </FormItem>
          )}
        />
        <Button type="submit" size="lg" className="cursor-pointer">
          Submit
        </Button>
      </form>
    </Form>
  );
}

export default ContactForm;
