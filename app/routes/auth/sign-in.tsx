"use client";

import React from "react";
import type { Route } from "./+types/layout";
import { useForm } from "react-hook-form";
import { signInSchema } from "@/lib/schema";
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

type signInData = z.infer<typeof signInSchema>;
const SignIn = () => {
  const form = useForm<signInData>({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (values: signInData) => {
    console.log(values.email);
  };
  return (
    <div className="flex w-full h-screen justify-center items-center">
      <Card className="bg-muted gap-1 shadow-lg w-[90%] md:w-[40%] text-center rounded-xl">
        <CardHeader className="text-2xl ">Welcome Back</CardHeader>
        <CardDescription className="mb-4">
          Log in to your account
        </CardDescription>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input
                        type="email"
                        placeholder="example@email.com"
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
                        placeholder="pass@123"
                        {...field}
                        className="border-3"
                      />
                    </FormControl>
                    <>
                      <Link to={"../forgot"} className="mt-0 flex font-bold text-sm text-blue-600 text-grey-100 justify-end text-center">Forgot Password ?</Link>
                    </>
                    <FormMessage />
                  </FormItem>
                  
                )}
                
              />
              
              <Button className="bg-blue-600 px-3 py-6">Submit</Button>
            </form>
          </Form>
        </CardContent>
        <CardFooter className="flex justify-center mt-5 item-center text-gray-600">
          Don't have an account ?&nbsp;
          <Link to="../signup" className="font-bold text-blue-600">Create Account</Link>
        </CardFooter>
      </Card>
    </div>
  );
};

export default SignIn;
