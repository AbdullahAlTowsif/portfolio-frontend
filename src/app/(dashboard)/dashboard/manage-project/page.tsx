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
import { IProject } from "@/types";
import toast from "react-hot-toast";

const ManageProjectPage = () => {
    const [projects, setProjects] = useState<IProject[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/project`);
                const { data } = await res.json();
                setProjects(data);
            } catch (error) {
                console.error("Error fetching projects:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchProjects();
    }, []);

    const handleDelete = async (id: number) => {
        const confirmDelete = confirm("Are you sure you want to delete this Project?");
        if (!confirmDelete) return;

        try {
            const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/project/${id}`, {
                method: "DELETE",
            });
            // console.log(res);
            if(res.ok) {
                toast.success("Project deleted successfully!")
            }

            setProjects((prev) => prev.filter((project) => project.id !== id));


        } catch (error) {
            console.error("Error deleting project:", error);
            toast.error("Project deletion failed!");
        }
    };

    return (
        <div className="py-20 px-6 max-w-7xl mx-auto">
            <h2 className="text-center text-4xl font-bold mb-10">Manage Project</h2>

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
                                    Loading projects...
                                </TableCell>
                            </TableRow>
                        ) : projects && projects.length > 0 ? (
                            projects.map((project: IProject) => (
                                <TableRow
                                    key={project.id}
                                    className="hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors"
                                >
                                    <TableCell className="text-center font-medium">
                                        {String(project.id)}
                                    </TableCell>

                                    <TableCell>
                                        <div className="flex flex-col">
                                            <span className="font-semibold text-gray-900 dark:text-gray-100">
                                                {project.title}
                                            </span>
                                        </div>
                                    </TableCell>

                                    <TableCell className="flex justify-center gap-3 py-2">
                                        <TooltipProvider>
                                            <Tooltip>
                                                <TooltipTrigger asChild>
                                                    <Link
                                                        href={`/dashboard/update-project/${project.id}`}
                                                        aria-label={`Update blog ${project.id}`}
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
                                                    <p>Edit this project</p>
                                                </TooltipContent>
                                            </Tooltip>

                                            <Tooltip>
                                                <TooltipTrigger asChild>
                                                    <Button
                                                        size="sm"
                                                        variant="destructive"
                                                        className="px-3"
                                                        aria-label={`Delete blog ${project.id}`}
                                                        onClick={() => handleDelete(project.id)}
                                                    >
                                                        <Trash2 className="h-4 w-4 mr-1" />
                                                        Delete
                                                    </Button>
                                                </TooltipTrigger>
                                                <TooltipContent>
                                                    <p>Delete this project</p>
                                                </TooltipContent>
                                            </Tooltip>
                                        </TooltipProvider>
                                    </TableCell>
                                </TableRow>
                            ))
                        ) : (
                            <TableRow>
                                <TableCell colSpan={3} className="text-center py-10 text-gray-500">
                                    No projects found.
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </div>
        </div>
    );
};

export default ManageProjectPage;
