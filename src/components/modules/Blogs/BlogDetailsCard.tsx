import { IBlog } from "@/types";
import Image from "next/image";
import { Calendar, RefreshCcw, Eye } from "lucide-react";

export default async function BlogDetailsCard({ blog }: { blog: IBlog }) {
    if (!blog) {
        return (
            <div className="py-20 text-center text-gray-500">Blog not found.</div>
        );
    }

    return (
        <main className="max-w-4xl mx-auto py-20 px-4">
            {/* Title */}
            <h1 className="text-5xl font-bold mb-6">{blog.title}</h1>

            {/* Author + Meta */}
            <div className="flex items-center gap-4 mb-8">
                {/* Author Picture */}
                {blog.author?.picture && (
                    <Image
                        src={blog.author.picture}
                        alt={blog.author.name || "Author"}
                        width={48}
                        height={48}
                        className="rounded-full border"
                    />
                )}

                <div>
                    <p className="font-semibold flex items-center gap-1">
                        {blog.author?.name || "Unknown Author"}
                    </p>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                        <span className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            {new Date(blog.createdAt).toLocaleDateString()}
                        </span>
                        <span className="flex items-center gap-1">
                            <RefreshCcw className="w-4 h-4" />
                            Updated: {new Date(blog.updatedAt).toLocaleDateString()}
                        </span>
                        <span className="flex items-center gap-1">
                            <Eye className="w-4 h-4" /> {blog.views} views
                        </span>
                    </div>
                </div>
            </div>

            {/* Blog Cover */}
            {blog.picture && (
                <div className="relative h-80 w-full overflow-hidden mb-8">
                    <Image
                        src={blog.picture}
                        alt={blog.title}
                        fill
                        className="rounded-lg object-cover shadow-md"
                        priority
                    />
                </div>
            )}

            {/* Content */}
            <article className="prose prose-lg max-w-none dark:prose-invert">
                {blog.content}
            </article>

            {/* Footer Info */}
            <div className="mt-10 text-sm text-muted-foreground border-t pt-4">
                <p>Blog ID: {blog.id}</p>
                <p>Author ID: {blog.authorId}</p>
            </div>
        </main>
    );
}
