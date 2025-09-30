"use server";

import { revalidateTag } from "next/cache";
import { redirect } from "next/navigation";


export const createBlog = async (data: FormData) => {
    const blogInfo = Object.fromEntries(data.entries())
    console.log(blogInfo);
    const modifiedData = {
        ...blogInfo,
        authorId: 1,
    }
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/blog`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(modifiedData),
    })
    const result = await res.json();
    console.log("result", result);
    if(result?.id) {
        revalidateTag("BLOGS");
        redirect("/blogs");
    }
    return result;
}
