import { projects, type Technology, type Project } from "../lib/projects";
import ProjectCard from "./ProjectCard";
import { CodeIcon } from "./ProjectCard";

export default function ProjectsSection() {
  return (
    <section
      id="proyectos"
      className="bg-gradient-to-br from-slate-50 to-blue-100 dark:from-gray-800 dark:to-gray-900"
    >
      <div className="container-responsive">
        {/* Header de la sección */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <CodeIcon className="w-8 h-8 text-blue-600 dark:text-blue-400 mr-3" />
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
              Proyectos
            </h2>
          </div>
        </div>

        {/* Grid de proyectos - 2 columnas en móvil, 4 en desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-12">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
