import { IProject } from "@/types";
import Image from "next/image";
import { Github, ExternalLink, Calendar, Layers } from "lucide-react";

export default function ProjectDetailsCard({ project }: { project: IProject }) {
  console.log(project.features);
  if (!project) {
    return (
      <div className="py-20 text-center text-gray-500">Project not found.</div>
    );
  }

  return (
    <main className="max-w-5xl mx-auto py-16 px-6">
      {/* Thumbnail */}
      <div className="relative w-full h-96 mb-8">
        <Image
          src={project.thumbnail}
          alt={project.title}
          fill
          className="object-cover rounded-xl shadow-md"
          priority
        />
      </div>

      {/* Title & Category */}
      <h1 className="text-4xl font-bold mb-2">{project.title}</h1>
      <span className="inline-block text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full mb-6">
        {project.category}
      </span>

      {/* Description */}
      <p className="text-lg text-muted-foreground mb-6">{project.description}</p>

      {/* Features */}
      {project.features && (
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Key Features</h2>
          <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
            {project?.features?.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </div>
      )}

      {/* Tech Stack */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Tech Stack</h2>
        <div className="flex flex-wrap gap-2">
          {project.techStack.map((tech, index) => (
            <span
              key={index}
              className="px-3 py-1 text-xs bg-muted rounded-full text-muted-foreground"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Links */}
      <div className="flex gap-6 mb-8">
        <a
          href={project.githubLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-sm font-medium hover:text-primary transition"
        >
          <Github className="w-4 h-4" /> GitHub Repo
        </a>
        <a
          href={project.liveLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-sm font-medium hover:text-primary transition"
        >
          <ExternalLink className="w-4 h-4" /> Live Site
        </a>
      </div>

      {/* Meta Info */}
      <div className="flex flex-wrap justify-between items-center text-sm text-muted-foreground border-t pt-4">
        <span className="flex items-center gap-1">
          <Calendar className="w-4 h-4" />
          Created: {new Date(project.createdAt).toLocaleDateString()}
        </span>
        <span className="flex items-center gap-1">
          <Layers className="w-4 h-4" />
          Updated: {new Date(project.updatedAt).toLocaleDateString()}
        </span>
        <span className="text-xs">ID: {project.id}</span>
      </div>
    </main>
  );
}
