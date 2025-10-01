import BlogCard from "@/components/modules/Blogs/BlogCard";
import HomeCarousel from "@/components/modules/Home/HomeCarousel";
import { IBlog } from "@/types";

export default async function HomePage() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/blog`, {
    next: {
      // revalidate: 30,
      tags: ["BLOGS"],
    },
  });
  const { data: blogs } = await res.json();

  return (
    <div>
      <HomeCarousel />

      <h2 className="text-center text-2xl sm:text-3xl md:text-4xl font-bold mt-10">
        Featured Blogs
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto my-8 px-4">
        {blogs.slice(0, 3).map((blog: IBlog) => (
          <BlogCard key={blog?.id} blog={blog} />
        ))}
      </div>
    </div>
  );
}
