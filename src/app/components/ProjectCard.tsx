"use client";
import type { Project, Technology } from "../lib/projects";
import { useState } from "react";
import Image from "next/image";

// Icono SVG personalizado para la sección
export const CodeIcon = ({ className }: { className: string }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
    />
  </svg>
);

// Componente para la tarjeta de tecnología
interface TechBadgeProps {
  technology: Technology;
}

const TechBadge = ({ technology }: TechBadgeProps) => (
  <span
    className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${technology.color}`}
  >
    {technology.name}
  </span>
);

// Componente para la tarjeta de proyecto
interface ProjectCardProps {
  project: Project;
}

type ZoomOptions = Map<Project["imageZoom"], string>;

export default function ProjectCard({ project }: ProjectCardProps) {
  const [showExtraDescription, setShowExtraDescription] = useState(false);
  const [imageError, setImageError] = useState(false);

  const zoomOptions: ZoomOptions = new Map([
    ["center", "origin-center"],
    ["top", "origin-top"],
    ["bottom", "origin-bottom"],
    ["left", "origin-left"],
    ["right", "origin-right"],
    ["top-left", "origin-top-left"],
    ["top-right", "origin-top-right"],
    ["bottom-left", "origin-bottom-left"],
    ["bottom-right", "origin-bottom-right"],
  ]);

  return (
    <div
      id={`project-${project.id}`}
      className={`group bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 flex flex-col ${
        showExtraDescription
          ? "h-auto"
          : "h-104 sm:95 md:h-109 lg:h-120 xl:h-109"
      }`}
    >
      {/* Imagen del proyecto (a futuro implementar video) */}
      <div className="relative h-40 overflow-hidden bg-gradient-to-br from-blue-100 to-indigo-200 dark:from-gray-700 dark:to-gray-600 flex-shrink-0">
        {/* Imagen estática (se muestra por defecto o como fallback) */}
        {project.image && !imageError && (
          <Image
            src={project.image}
            alt={project.title}
            fill
            className={`object-cover transition-transform ${
              project.imageZoom
                ? zoomOptions.get(project.imageZoom)
                : "origin-center"
            } duration-300 group-hover:scale-180`}
            sizes="(max-width: 768px) 50vw, 25vw"
            onError={() => setImageError(true)}
            priority={false}
          />
        )}

        {/* Fallback cuando no hay imagen */}
        {(!project.image || imageError) && (
          <div className="w-full h-full flex items-center justify-center text-gray-400 dark:text-gray-500 transform group-hover:scale-110 transition-transform duration-300">
            <CodeIcon className="w-12 h-12" />
          </div>
        )}

        {/* Overlay para mejor legibilidad */}
        <div className="absolute inset-0 group-hover:bg-gradient-to-t group-hover:from-gray-600/10 dark:group-hover:from-white/10 group-hover:to-transparent transition-all duration-300 pointer-events-none" />
      </div>

      {/* Contenido de la tarjeta */}
      <div className="flex flex-col flex-1 p-4 min-h-0">
        {/* Contenido principal que crece */}
        <div className="flex-1">
          <h3 className="text-lg font-bold text-gray-800 dark:text-gray-100 mb-2 group-hover:text-black dark:group-hover:text-white transition-colors duration-200 leading-tight">
            {project.title}
          </h3>

          {/* Descripción */}
          {project.description && (
            <p className="text-gray-800 dark:text-gray-300 text-sm mb-2 leading-relaxed">
              {project.description}
            </p>
          )}

          {/* Descripción extra expandible */}
          {project.extraDescription && (
            <div className="mb-3">
              <div
                className={`overflow-hidden transition-all ${
                  showExtraDescription
                    ? "max-h-full duration-300"
                    : "max-h-0 duration-100"
                }`}
              >
                <p className="text-gray-800 dark:text-gray-300 text-sm pt-2 border-t border-gray-200 dark:border-gray-600 leading-relaxed">
                  {project.extraDescription}
                </p>
              </div>
              <button
                type="button"
                onClick={() => setShowExtraDescription(!showExtraDescription)}
                className="cursor-pointer mt-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-gray-300 text-sm font-medium transition-colors duration-200 flex items-center gap-1"
              >
                {showExtraDescription ? "Ver menos" : "Ver más detalles"}
                <svg
                  className={`w-3 h-3 transition-transform duration-200 ${
                    showExtraDescription ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
            </div>
          )}
        </div>

        {/* Tecnologías - siempre en la parte inferior */}
        <div className="flex flex-wrap gap-1.5 mt-auto pt-2">
          {project.technologies.map((tech, index) => (
            <TechBadge key={index} technology={tech} />
          ))}
        </div>
      </div>
    </div>
  );
}
