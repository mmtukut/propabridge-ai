'use client';

import { useState } from 'react';
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
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
import { Card } from "@/components/ui/card";
import { Mail, ArrowRight, CheckCircle } from "lucide-react";
import Link from 'next/link';

const formSchema = z.object({
  email: z.string().email("Invalid email address."),
});

export default function ForgotPasswordPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    // Here you would typically send the email to your backend
    setIsSubmitted(true);
  }

  return (
    <div className="bg-background text-foreground min-h-screen flex items-center justify-center py-20 px-4">
      <div className="w-full max-w-md">
        <Card className="bg-card/50 border-border/50 rounded-2xl p-8 backdrop-blur-sm shadow-xl">
          {!isSubmitted ? (
            <>
              <div className="text-center mb-8">
                <h1 className="text-3xl font-bold font-headline text-glow">Forgot Password?</h1>
                <p className="text-muted-foreground mt-2">
                  No problem. Enter your email and we'll send you a reset link.
                </p>
              </div>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email Address</FormLabel>
                        <FormControl>
                          <div className="relative">
                            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                            <Input 
                              type="email" 
                              placeholder="john.doe@example.com" 
                              {...field} 
                              className="bg-secondary/50 rounded-lg h-12 pl-10" 
                            />
                          </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button type="submit" size="lg" className="w-full shadow-glow-primary hover:shadow-glow-intense">
                    Send Reset Link <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </form>
              </Form>
              <div className="text-center mt-6">
                <Link href="/login" className="text-sm text-primary hover:underline">
                  Back to Login
                </Link>
              </div>
            </>
          ) : (
            <div className="text-center py-10">
              <CheckCircle className="w-20 h-20 text-primary mx-auto mb-6" />
              <h2 className="text-2xl font-bold font-headline mb-4">Check Your Email</h2>
              <p className="text-lg text-muted-foreground">
                If an account with that email exists, we've sent a password reset link to it.
              </p>
              <Button href="/login" size="lg" variant="secondary" className="mt-8">
                Back to Login
              </Button>
            </div>
          )}
        </Card>
      </div>
    </div>
  );
}
