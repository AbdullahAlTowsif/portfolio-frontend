// import BlogCard from "@/components/modules/Blogs/BlogCard";
// import { IBlog } from "@/types";
// import { Metadata } from "next";

// // can use metadata in server component
// export const metadata: Metadata = {
//     title: "All Blogs | My Blogs",
//     description: "Browse my blogs"
// };

// const AllBlogsPage = async () => {
//     const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/blog`, {
//         next: {
//             // revalidate: 30
//             tags: ["BLOGS"]
//         },
//     });
//     const { data: blogs } = await res.json();
//     console.log(blogs);
//     return (
//         <div className="py-30 px-4 max-w-7xl mx-auto">
//             <h2 className="text-center text-4xl">All Blogs</h2>
//             <div className="grid grid-cols-3 gap-4 mx-auto max-w-6xl my-5">
//                 {
//                     blogs.map((blog: IBlog) => (<BlogCard key={blog.id} blog={blog} />))
//                 }
//             </div>
//         </div>
//     );
// };

// export default AllBlogsPage;


import BlogCard from "@/components/modules/Blogs/BlogCard";
import { IBlog } from "@/types";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "All Blogs | My Blogs",
    description: "Browse my blogs"
};

async function getBlogs() {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/blog`, {
            next: {
                tags: ["BLOGS"]
            },
        });

        if (!res.ok) {
            console.error(`API Error: ${res.status} ${res.statusText}`);
            return [];
        }

        const contentType = res.headers.get('content-type');
        if (!contentType || !contentType.includes('application/json')) {
            console.error('Expected JSON but got:', contentType);
            return [];
        }

        const data = await res.json();
        
        if (!data.data || !Array.isArray(data.data)) {
            console.error('Unexpected data structure:', data);
            return [];
        }

        return data.data as IBlog[];
    } catch (error) {
        console.error('Failed to fetch blogs:', error);
        return [];
    }
}

const AllBlogsPage = async () => {
    const blogs = await getBlogs();
    
    console.log('Blogs data:', blogs);

    return (
        <div className="py-30 px-4 max-w-7xl mx-auto">
            <h2 className="text-center text-4xl">All Blogs</h2>
            
            {blogs.length === 0 ? (
                <div className="text-center py-16">
                    <h3 className="text-2xl font-semibold mb-4">No blogs available</h3>
                    <p className="text-muted-foreground">
                        {process.env.NODE_ENV === 'development' 
                            ? `Check if your backend is running at ${process.env.NEXT_PUBLIC_BASE_API}`
                            : 'Please check back later for new blog posts.'
                        }
                    </p>
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-auto max-w-6xl my-8">
                    {blogs.map((blog: IBlog) => (
                        <BlogCard key={blog.id} blog={blog} />
                    ))}
                </div>
            )}
        </div>
    );
};

export default AllBlogsPage;