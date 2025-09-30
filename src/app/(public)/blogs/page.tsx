import BlogCard from "@/components/modules/Blogs/BlogCard";
import { IBlog } from "@/types";
import { Metadata } from "next";

// can use metadata in server component
export const metadata: Metadata = {
    title: "All Blogs | My Blogs",
    description: "Browse my blogs"
};

const AllBlogsPage = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/blog`, {
        next: {
            // revalidate: 30
            tags: ["BLOGS"]
        },
    });
    const { data: blogs } = await res.json();
    console.log(blogs);
    return (
        <div className="py-30 px-4 max-w-7xl mx-auto">
            <h2 className="text-center text-4xl">All Blogs</h2>
            <div className="grid grid-cols-3 gap-4 mx-auto max-w-6xl my-5">
                {
                    blogs.map((blog: IBlog) => (<BlogCard key={blog.id} blog={blog} />))
                }
            </div>
        </div>
    );
};

export default AllBlogsPage;