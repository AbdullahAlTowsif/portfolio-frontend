"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { signIn } from "next-auth/react";
import toast from "react-hot-toast";

const loginSchema = z.object({
    email: z.string().min(1, "Email is required").email("Invalid email address"),
    password: z
        .string()
        .min(8, "Password must be at least 8 characters")
        .refine((val) => val === "12345678", {
            message: "Password mismatch! Please enter the correct password.",
        }),
});

type LoginFormValues = z.infer<typeof loginSchema>;

export default function LoginForm() {
    const form = useForm<LoginFormValues>({
        resolver: zodResolver(loginSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    });

    // const onSubmit = async (values: FieldValues) => {
    //     try {
    //         signIn("credentials", {
    //             ...values,
    //             callbackUrl: "/dashboard",
    //         });
    //     } catch (err) {
    //         console.error(err);
    //     }
    // };

    const onSubmit = async (values: LoginFormValues) => {
        try {
            const result = await signIn("credentials", {
                ...values,
                redirect: false,
            });

            if (result?.error) {
                toast.error(result.error);
                console.error("Login failed:", result.error);
                form.setError("email", { message: "Invalid credentials" });
            } else if (result?.ok) {
                toast.success("Login Successful");
                window.location.href = "/dashboard";
            }
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-50">
            <div className="space-y-6 w-full max-w-md bg-white p-8 rounded-lg shadow-md">
                <Form {...form}>
                    <form
                        onSubmit={form.handleSubmit(onSubmit)}
                        className="space-y-6 w-full max-w-md"
                    >
                        <h2 className="text-3xl font-bold text-center">Login</h2>

                        {/* Email */}
                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Email</FormLabel>
                                    <FormControl>
                                        <Input
                                            type="email"
                                            placeholder="Enter your email"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        {/* Password */}
                        <FormField
                            control={form.control}
                            name="password"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Password</FormLabel>
                                    <FormControl>
                                        <Input
                                            type="password"
                                            placeholder="Enter your password"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <Button type="submit" className="w-full mt-2">
                            Login
                        </Button>

                        <div className="flex items-center justify-center space-x-2">
                            <div className="h-px w-16 bg-gray-300" />
                            <span className="text-sm text-gray-500">ONLY ADMIN</span>
                            <div className="h-px w-16 bg-gray-300" />
                        </div>
                    </form>
                </Form>
            </div>
        </div>
    );
}
