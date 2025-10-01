"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Edit, Trash2 } from "lucide-react";

import {
    Table,
    TableHeader,
    TableRow,
    TableHead,
    TableBody,
    TableCell,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip";
import { IBlog } from "@/types";
import toast from "react-hot-toast";

const ManageBlogPage = () => {
    const [blogs, setBlogs] = useState<IBlog[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/blog`);
                const { data } = await res.json();
                setBlogs(data);
            } catch (error) {
                console.error("Error fetching blogs:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchBlogs();
    }, []);

    const handleDelete = async (id: number) => {
        const confirmDelete = confirm("Are you sure you want to delete this blog?");
        if (!confirmDelete) return;

        try {
            const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/blog/${id}`, {
                method: "DELETE",
            });
            // console.log(res);
            if(res.ok) {
                toast.success("Blog deleted successfully!")
            }

            setBlogs((prev) => prev.filter((blog) => blog.id !== id));


        } catch (error) {
            console.error("Error deleting blog:", error);
            toast.error("Blog deletion failed!");
        }
    };

    return (
        <div className="py-20 px-6 max-w-7xl mx-auto">
            <h2 className="text-center text-4xl font-bold mb-10">Manage Blogs</h2>

            <div className="overflow-x-auto rounded-xl border shadow-lg">
                <Table className="w-full text-sm">
                    <TableHeader className="bg-gray-100 dark:bg-gray-800">
                        <TableRow>
                            <TableHead className="w-24 text-center font-semibold">ID</TableHead>
                            <TableHead className="font-semibold">Title</TableHead>
                            <TableHead className="text-center font-semibold">Actions</TableHead>
                        </TableRow>
                    </TableHeader>

                    <TableBody>
                        {loading ? (
                            <TableRow>
                                <TableCell colSpan={3} className="text-center py-10">
                                    Loading blogs...
                                </TableCell>
                            </TableRow>
                        ) : blogs && blogs.length > 0 ? (
                            blogs.map((blog: IBlog) => (
                                <TableRow
                                    key={blog.id}
                                    className="hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors"
                                >
                                    <TableCell className="text-center font-medium">
                                        {String(blog.id)}
                                    </TableCell>

                                    <TableCell>
                                        <div className="flex flex-col">
                                            <span className="font-semibold text-gray-900 dark:text-gray-100">
                                                {blog.title}
                                            </span>
                                            <span className="text-xs text-gray-500 dark:text-gray-400">
                                                {blog.author?.name
                                                    ? `By ${blog.author.name}`
                                                    : `Author ID: ${blog.authorId}`}
                                            </span>
                                        </div>
                                    </TableCell>

                                    <TableCell className="flex justify-center gap-3 py-2">
                                        <TooltipProvider>
                                            <Tooltip>
                                                <TooltipTrigger asChild>
                                                    <Link
                                                        href={`/blogs/update/${blog.id}`}
                                                        aria-label={`Update blog ${blog.id}`}
                                                    >
                                                        <Button
                                                            size="sm"
                                                            variant="outline"
                                                            className="px-3"
                                                        >
                                                            <Edit className="h-4 w-4 mr-1" />
                                                            Edit
                                                        </Button>
                                                    </Link>
                                                </TooltipTrigger>
                                                <TooltipContent>
                                                    <p>Edit this blog</p>
                                                </TooltipContent>
                                            </Tooltip>

                                            <Tooltip>
                                                <TooltipTrigger asChild>
                                                    <Button
                                                        size="sm"
                                                        variant="destructive"
                                                        className="px-3"
                                                        aria-label={`Delete blog ${blog.id}`}
                                                        onClick={() => handleDelete(blog.id)}
                                                    >
                                                        <Trash2 className="h-4 w-4 mr-1" />
                                                        Delete
                                                    </Button>
                                                </TooltipTrigger>
                                                <TooltipContent>
                                                    <p>Delete this blog</p>
                                                </TooltipContent>
                                            </Tooltip>
                                        </TooltipProvider>
                                    </TableCell>
                                </TableRow>
                            ))
                        ) : (
                            <TableRow>
                                <TableCell colSpan={3} className="text-center py-10 text-gray-500">
                                    No blogs found.
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </div>
        </div>
    );
};

export default ManageBlogPage;
