// import ProjectCard from "@/components/modules/Project/ProjectCard";
// import { IProject } from "@/types";
// import { Metadata } from "next";

// export const metadata: Metadata = {
//     title: "All Projects | My Projects",
//     description: "Browse my projects"
// };

// const AllProjectPage = async () => {
//     const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/project`, {
//         next: {
//             // revalidate: 30
//             tags: ["PROJECT"]
//         },
//     });
//     const { data: projects } = await res.json();
//     console.log(projects);
//     return (
//         <div className="py-30 px-4 max-w-7xl mx-auto">
//             <h2 className="text-center text-4xl">All Projects</h2>
//             <div className="grid grid-cols-3 gap-4 mx-auto max-w-6xl my-5">
//                 {
//                     projects.map((project: IProject) => (<ProjectCard key={project.id} project={project} />))
//                 }
//             </div>
//         </div>
//     );
// };

// export default AllProjectPage;



import ProjectCard from "@/components/modules/Project/ProjectCard";
import { IProject } from "@/types";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "All Projects | My Projects",
    description: "Browse my projects"
};

async function getProjects() {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/project`, {
            next: {
                tags: ["PROJECT"]
            },
        });

        if (!res.ok) {
            console.error(`Projects API Error: ${res.status} ${res.statusText}`);
            return [];
        }

        const contentType = res.headers.get('content-type');
        if (!contentType || !contentType.includes('application/json')) {
            console.error('Expected JSON but got:', contentType);
            return [];
        }

        const data = await res.json();
        
        if (!data.data || !Array.isArray(data.data)) {
            console.error('Unexpected data structure for projects:', data);
            return [];
        }

        return data.data as IProject[];
    } catch (error) {
        console.error('Failed to fetch projects:', error);
        return [];
    }
}

const AllProjectPage = async () => {
    const projects = await getProjects();
    
    console.log('Projects data:', projects);

    return (
        <div className="py-30 px-4 max-w-7xl mx-auto">
            <h2 className="text-center text-4xl mb-8">All Projects</h2>
            
            {projects.length === 0 ? (
                <div className="text-center py-16">
                    <h3 className="text-2xl font-semibold mb-4">No projects available</h3>
                    <p className="text-muted-foreground">
                        {process.env.NODE_ENV === 'development' 
                            ? `Check if your backend is running at ${process.env.NEXT_PUBLIC_BASE_API}`
                            : 'Please check back later for project updates.'
                        }
                    </p>
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-auto max-w-6xl my-8">
                    {projects.map((project: IProject) => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </div>
            )}
        </div>
    );
};

export default AllProjectPage;