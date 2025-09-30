"use client";

import { IProject } from "@/types";
import Image from "next/image";
import { Github, ExternalLink, Calendar, Layers } from "lucide-react";

export default function ProjectCard({ project }: { project: IProject }) {

  return (
    <div className="bg-card border rounded-xl shadow-sm hover:shadow-md transition overflow-hidden flex flex-col">
      {/* Thumbnail */}
      <div className="relative w-full h-52">
        <Image
          src={project.thumbnail}
          alt={project.title}
          fill
          className="object-cover"
        />
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-grow">
        {/* Title */}
        <h3 className="text-xl font-semibold mb-2">{project.title}</h3>

        {/* Category */}
        <span className="inline-block text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded-full w-fit mb-3">
          {project.category}
        </span>

        {/* Description */}
        <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.techStack.map((tech, index) => (
            <span
              key={index}
              className="px-2 py-1 text-xs bg-muted rounded-full text-muted-foreground"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex items-center gap-4 mt-auto">
          <a
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-sm text-muted-foreground hover:text-primary"
          >
            <Github className="w-4 h-4" /> GitHub
          </a>
          <a
            href={project.liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-sm text-muted-foreground hover:text-primary"
          >
            <ExternalLink className="w-4 h-4" /> Live
          </a>
        </div>

        {/* Meta */}
        <div className="flex justify-between items-center text-xs text-muted-foreground border-t mt-4 pt-3">
          <span className="flex items-center gap-1">
            <Calendar className="w-3 h-3" />
            {new Date(project.createdAt).toLocaleDateString()}
          </span>
          <span className="flex items-center gap-1">
            <Layers className="w-3 h-3" />
            Updated {new Date(project.updatedAt).toLocaleDateString()}
          </span>
        </div>
      </div>
    </div>
  );
}
