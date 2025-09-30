import ProjectDetailsCard from "@/components/modules/Project/ProjectDetailsCard";
import { getProjectById } from "@/services/ProjectServices";

const ProjectDetailsPage = async ({
    params,
}: {
    params: Promise<{ projectId: string }>;
}) => {
    const { projectId } = await params;
    const project = await getProjectById(projectId)
    return (
        <div className="py-32 px-4 max-w-7xl mx-auto">
            <ProjectDetailsCard project={project} />
        </div>
    );
};

export default ProjectDetailsPage;
