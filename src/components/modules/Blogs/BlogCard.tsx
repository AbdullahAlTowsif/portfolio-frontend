import { IBlog } from "@/types";
import Image from "next/image";
import Link from "next/link";


const BlogCard = ({ blog }: { blog: IBlog }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 p-5 flex flex-col">
      {/* Blog image */}
      {blog.picture && (
        <div className="relative w-full h-52 rounded-xl overflow-hidden mb-4">
          <Image
            src={blog.picture}
            alt={blog.title}
            fill
            className="object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>
      )}

      {/* Blog content */}
      <div className="flex flex-col flex-grow">
        <h2 className="text-lg font-bold text-gray-900 dark:text-white line-clamp-2">
          {blog.title}
        </h2>
        <p className="text-sm text-gray-600 dark:text-gray-300 mt-2 line-clamp-3">
          {blog.content}
        </p>

        {/* Metadata */}
        <div className="flex items-center justify-between mt-4 text-sm text-gray-500 dark:text-gray-400">
          <span>👤 {blog.author.name}</span>
          <span>{new Date(blog.createdAt).toLocaleDateString()}</span>
        </div>

        {/* Footer actions */}
        <div className="flex items-center justify-between mt-4">
          <span className="text-xs text-gray-500 dark:text-gray-400">
            👁 {blog.views} views
          </span>
          <Link
            href={`/blogs/${blog.id}`}
            className="text-indigo-600 dark:text-indigo-400 font-medium hover:underline"
          >
            Read More →
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
