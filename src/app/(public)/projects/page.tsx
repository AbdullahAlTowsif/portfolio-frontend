import ProjectCard from "@/components/modules/Project/ProjectCard";
import { IProject } from "@/types";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "All Projects | My Projects",
    description: "Browse my projects"
};

const AllProjectPage = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/project`, {
        next: {
            // revalidate: 30
            tags: ["PROJECT"]
        },
    });
    const { data: projects } = await res.json();
    console.log(projects);
    return (
        <div className="py-30 px-4 max-w-7xl mx-auto">
            <h2 className="text-center text-4xl">All Projects</h2>
            <div className="grid grid-cols-3 gap-4 mx-auto max-w-6xl my-5">
                {
                    projects.map((project: IProject) => (<ProjectCard key={project.id} project={project} />))
                }
            </div>
        </div>
    );
};

export default AllProjectPage;