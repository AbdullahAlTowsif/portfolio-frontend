import BlogDetailsCard from "@/components/modules/Blogs/BlogDetailsCard";
import { getBlogById } from "@/services/BlogServices";
import { IBlog } from "@/types";

export async function generateStaticParams() {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/blog`);
    const { data: blogs } = await res.json();

    return blogs.map((blog: IBlog) => ({
        id: blog.id.toString(),
    }));
}


export const generateMetadata = async ({
    params,
}: {
    params: Promise<{ blogId: string }>;
}) => {
    const { blogId } = await params;
    const blog = await getBlogById(blogId)

    return {
        title: blog?.title,
        description: blog?.content,
    };
};

const BlogDetailsPage = async ({
    params,
}: {
    params: Promise<{ blogId: string }>;
}) => {
    const { blogId } = await params;
    const blog = await getBlogById(blogId)
    return (
        <div className="py-32 px-4 max-w-7xl mx-auto">
            <BlogDetailsCard blog={blog} />
        </div>
    );
};

export default BlogDetailsPage;
