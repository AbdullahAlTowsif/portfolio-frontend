"use client";

import { createBlog } from "@/actions/create";
import Form from "next/form";


export default function CreateBlogForm() {

    return (
        <Form
            action={createBlog}
            className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg space-y-4 w-full"
        >
            <h2 className="text-xl font-semibold mb-4">Create Blog</h2>

            {/* Title */}
            <div>
                <label className="block text-sm font-medium mb-1" htmlFor="title">
                    Title
                </label>
                <input
                    type="text"
                    id="title"
                    name="title"
                    required
                    className="w-full rounded-md border px-3 py-2 focus:ring focus:ring-blue-200"
                />
            </div>

            {/* Content */}
            <div>
                <label className="block text-sm font-medium mb-1" htmlFor="content">
                    Content
                </label>
                <textarea
                    id="content"
                    name="content"
                    rows={4}
                    required
                    className="w-full rounded-md border px-3 py-2 focus:ring focus:ring-blue-200"
                />
            </div>

            {/* Picture */}
            <div>
                <label className="block text-sm font-medium mb-1" htmlFor="picture">
                    Picture URL
                </label>
                <input
                    type="url"
                    id="picture"
                    name="picture"
                    required
                    className="w-full rounded-md border px-3 py-2 focus:ring focus:ring-blue-200"
                />
            </div>

            <button
                type="submit"
                className="w-full bg-blue-600 text-white font-medium py-2 rounded-md hover:bg-blue-700 transition"
            >
                Submit
            </button>
        </Form>
    );
}
