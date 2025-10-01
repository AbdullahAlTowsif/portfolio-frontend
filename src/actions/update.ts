"use server";

import { revalidateTag } from "next/cache";
import { redirect } from "next/navigation";


export const updateBlog = async (data: FormData) => {
    const blogId = data.get('id') as string;
    console.log("blogid from update.ts", blogId);
    const blogInfo = Object.fromEntries(data.entries())

    const { id, ...updateData } = blogInfo;

    const modifiedData = {
        ...updateData,
        authorId: 1,
    }
    console.log("update", updateData);
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/blog/${blogId}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(modifiedData),
    })
    const result = await res.json();
    console.log("result", result);
    if (result?.id) {
        revalidateTag("BLOGS");
        redirect("/blogs");
    }
    return result;
}


export const updateProject = async (data: FormData) => {
    const projectInfo = Object.fromEntries(data.entries())
    const modifiedData = {
        ...projectInfo,
        techStack: projectInfo.techStack.toString().split(",").map(tech => tech.trim()),
        features: projectInfo.features.toString().split(",").map(feature => feature.trim()),
    }
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/project`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(modifiedData),
    })
    const result = await res.json();
    console.log("result", result);
    if (result?.id) {
        revalidateTag("PROJECT");
        redirect("/projects");
    }
    return result;
}
