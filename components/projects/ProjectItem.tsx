import React from "react";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { Project } from "@/data/projects";

interface ProjectItemProps {
  project: Project;
  index: number;
}

export function ProjectItem({ project, index }: ProjectItemProps) {
  return <ProjectCard project={project} index={index} />;
}
