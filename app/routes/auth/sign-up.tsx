"use client";

import React from "react";
import type { Route } from "./+types/layout";
import { useForm } from "react-hook-form";
import { signInSchema, signUpSchema } from "@/lib/schema";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import {
  FormControl,
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormDescription,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Link } from "react-router";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "TaskHub | Sign In" },
    { name: "Rise Together", content: "Welcome to TierUp!" },
  ];
}

type signUpData = z.infer<typeof signUpSchema>;
const SignUp = () => {
  const form = useForm<signUpData>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit = (values: signUpData) => {
    console.log(values.email);
  };
  return (
    <div className="flex w-full h-screen justify-center items-center">
      <Card className="bg-muted gap-1 shadow-lg w-[90%] md:w-[40%] text-center rounded-xl">
        <CardHeader className="text-2xl flex justify-center">
          Welcome To{" "}
          <span className="gradient-text font-bold flex">TaskHub</span>
        </CardHeader>
        <CardDescription className="mb-4">Create your account</CardDescription>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input
                        type="text"
                        placeholder="Monkey D Luffy"
                        {...field}
                        className="border-3"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input
                        type="email"
                        placeholder="luffy@onepiece.com"
                        {...field}
                        className="border-3"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input
                        type="password"
                        placeholder="*********"
                        {...field}
                        className="border-3"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="confirmPassword"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Confirm Password</FormLabel>
                    <FormControl>
                      <Input
                        type="password"
                        placeholder="*********"
                        {...field}
                        className="border-3"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button className="bg-blue-600 px-3 py-6" type={"submit"}>
                Submit
              </Button>
            </form>
          </Form>
        </CardContent>
        <CardFooter className="flex text-gray-600 justify-center mt-5 item-center">
          Already have an account ? &nbsp;
          <Link to="../signin" className="font-bold text-blue-600">
            Sign In
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
};

export default SignUp;
