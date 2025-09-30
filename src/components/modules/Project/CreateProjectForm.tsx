"use client";

import { createProject } from "@/actions/create";
import Form from "next/form";


export default function CreateProjectForm() {

    return (
        <Form
            action={createProject}
            className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg space-y-4 w-full"
        >
            <h2 className="text-xl font-semibold mb-4">Create Project</h2>

            {/* Title */}
            <div>
                <label className="block text-sm font-medium mb-1" htmlFor="title">
                    Title
                </label>
                <input
                    type="text"
                    id="title"
                    name="title"
                    className="w-full rounded-md border px-3 py-2 focus:ring focus:ring-blue-200"
                />
            </div>

            {/* Content */}
            <div>
                <label className="block text-sm font-medium mb-1" htmlFor="description">
                    Description
                </label>
                <textarea
                    id="description"
                    name="description"
                    rows={4}
                    className="w-full rounded-md border px-3 py-2 focus:ring focus:ring-blue-200"
                />
            </div>


            {/* Tech Stack */}
            <div>
                <label className="block text-sm font-medium mb-1" htmlFor="techStack">
                    Tech Stack (comma separated)
                </label>
                <input
                    type="text"
                    id="techStack"
                    name="techStack"
                    placeholder="Next.js, React, Web Development"
                    className="w-full rounded-md border px-3 py-2 focus:ring focus:ring-blue-200"
                />
            </div>


            {/* Category */}
            <div>
                <label className="block text-sm font-medium mb-1" htmlFor="category">
                    Category
                </label>
                <input
                    type="text"
                    id="category"
                    name="category"
                    placeholder="Full Stack | MERN Stack"
                    className="w-full rounded-md border px-3 py-2 focus:ring focus:ring-blue-200"
                />
            </div>


            {/* Features */}
            <div>
                <label className="block text-sm font-medium mb-1" htmlFor="features">
                    Features (comma separated)
                </label>
                <input
                    type="text"
                    id="features"
                    name="features"
                    placeholder="feature1, feature2, feature3, ..."
                    className="w-full rounded-md border px-3 py-2 focus:ring focus:ring-blue-200"
                />
            </div>


            {/* Github Link */}
            <div>
                <label className="block text-sm font-medium mb-1" htmlFor="githubLink">
                    Github Link URL
                </label>
                <input
                    type="url"
                    id="githubLink"
                    name="githubLink"
                    className="w-full rounded-md border px-3 py-2 focus:ring focus:ring-blue-200"
                />
            </div>


            {/* Live Link */}
            <div>
                <label className="block text-sm font-medium mb-1" htmlFor="liveLink">
                    Live Link URL
                </label>
                <input
                    type="url"
                    id="liveLink"
                    name="liveLink"
                    className="w-full rounded-md border px-3 py-2 focus:ring focus:ring-blue-200"
                />
            </div>


            {/* Thumbnail */}
            <div>
                <label className="block text-sm font-medium mb-1" htmlFor="thumbnail">
                    Thumbnail URL
                </label>
                <input
                    type="url"
                    id="thumbnail"
                    name="thumbnail"
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
