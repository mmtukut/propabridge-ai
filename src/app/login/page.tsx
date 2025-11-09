
'use client';

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
import { Mail, Lock, LogIn } from "lucide-react";
import Link from 'next/link';

const formSchema = z.object({
  email: z.string().email("Invalid email address."),
  password: z.string().min(8, "Password must be at least 8 characters."),
});

const GoogleIcon = () => (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M22.56 12.25C22.56 11.45 22.49 10.68 22.36 9.92H12V14.45H18.02C17.73 16.03 16.89 17.39 15.63 18.26V21.1H19.6C21.66 19.01 22.56 15.89 22.56 12.25Z" fill="#4285F4"/>
        <path d="M12 23C14.97 23 17.45 22.01 19.6 20.26L15.63 17.39C14.62 18.1 13.38 18.52 12 18.52C9.42 18.52 7.21 16.78 6.38 14.5H2.29V17.4C4.32 21.04 7.89 23 12 23Z" fill="#34A853"/>
        <path d="M6.38 14.5C6.13 13.73 6 12.89 6 12C6 11.11 6.13 10.27 6.38 9.5V6.6H2.29C1.49 8.24 1 10.06 1 12C1 13.94 1.49 15.76 2.29 17.4L6.38 14.5Z" fill="#FBBC05"/>
        <path d="M12 5.48C13.67 5.48 15.04 6.05 16.08 7.01L19.69 3.39C17.45 1.45 14.97 0 12 0C7.89 0 4.32 2.96 2.29 6.6L6.38 9.5C7.21 7.22 9.42 5.48 12 5.48Z" fill="#EA4335"/>
    </svg>
);


export default function LoginPage() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    // Here you would typically call your backend authentication service
  }

  return (
    <div className="bg-background text-foreground min-h-screen flex items-center justify-center py-20 px-4">
      <div className="w-full max-w-md">
        <Card className="bg-card/50 border-border/50 rounded-2xl p-8 backdrop-blur-sm shadow-xl">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold font-headline text-glow">Welcome Back</h1>
            <p className="text-muted-foreground mt-2">
              Sign in to access your properties and dashboard.
            </p>
          </div>
          
          <div className="space-y-4">
            <Button variant="secondary" size="lg" className="w-full">
              <GoogleIcon />
              Continue with Google
            </Button>
          </div>

          <div className="flex items-center my-6">
            <hr className="w-full border-t border-border/50" />
            <span className="px-4 text-xs font-semibold text-muted-foreground uppercase">OR</span>
            <hr className="w-full border-t border-border/50" />
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
                        <Input type="email" placeholder="john.doe@example.com" {...field} className="bg-secondary/50 rounded-lg h-12 pl-10" />
                      </div>
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
                       <div className="relative">
                        <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                        <Input type="password" placeholder="••••••••" {...field} className="bg-secondary/50 rounded-lg h-12 pl-10" />
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="text-right">
                <Link href="/forgot-password" passHref legacyBehavior>
                    <a className="text-sm font-medium text-primary hover:underline">Forgot Password?</a>
                </Link>
              </div>
              <Button type="submit" size="lg" className="w-full shadow-glow-primary hover:shadow-glow-intense">
                <LogIn className="mr-2 h-5 w-5" />
                Sign In
              </Button>
            </form>
          </Form>

          <p className="mt-8 text-center text-sm text-muted-foreground">
            Don't have an account?{' '}
            <Link href="/register" passHref legacyBehavior>
              <a className="font-semibold text-primary hover:underline">Sign up now</a>
            </Link>
          </p>
        </Card>
      </div>
    </div>
  );
}
