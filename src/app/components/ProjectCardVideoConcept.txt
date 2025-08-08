"use client";
import type { Project, Technology } from "../lib/projects";
import { useState, useRef, useEffect } from "react";
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

// Icono de reproducir
const PlayIcon = ({ className }: { className: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M8 5v14l11-7z" />
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

export default function ProjectCard({ project }: ProjectCardProps) {
  const [showExtraDescription, setShowExtraDescription] = useState(false);
  const [imageError, setImageError] = useState(false);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [showVideo, setShowVideo] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Manejar reproducción de video
  const handleVideoPlay = () => {
    if (videoRef.current) {
      setShowVideo(true);
      setIsVideoPlaying(true);
      videoRef.current.play();
    }
  };

  const handleVideoEnd = () => {
    setIsVideoPlaying(false);
    // Opción 1: Volver a la imagen
    // setShowVideo(false);

    // Opción 2: Reiniciar el video automáticamente
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
    }
  };

  const handleVideoPause = () => {
    setIsVideoPlaying(false);
  };

  // Pausar video cuando la tarjeta sale del viewport (optimización)
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting && videoRef.current && isVideoPlaying) {
            videoRef.current.pause();
            setIsVideoPlaying(false);
          }
        });
      },
      { threshold: 0.1 }
    );

    const cardElement = document.getElementById(`project-${project.id}`);
    if (cardElement) {
      observer.observe(cardElement);
    }

    return () => observer.disconnect();
  }, [project.id, isVideoPlaying]);

  return (
    <div
      id={`project-${project.id}`}
      className={`group bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 flex flex-col ${
        showExtraDescription ? "h-auto" : "h-full sm:h-104"
      }`}
    >
      {/* Imagen/Video del proyecto */}
      <div className="relative h-40 overflow-hidden bg-gradient-to-br from-blue-100 to-indigo-200 dark:from-gray-700 dark:to-gray-600 flex-shrink-0">
        {/* Video (se muestra cuando está activo) */}
        {project.video && (
          <video
            ref={videoRef}
            className="absolute inset-0 w-full h-full object-cover"
            loop
            muted
            playsInline
            onEnded={handleVideoEnd}
            onPause={handleVideoPause}
            onPlay={() => setIsVideoPlaying(true)}
          >
            <source src={project.video} type="video/webm" />
            Tu navegador no soporta video HTML5.
          </video>
        )}

        {/* Imagen estática (se muestra por defecto o como fallback) */}
        {project.image && !imageError && !showVideo && (
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            sizes="(max-width: 768px) 50vw, 25vw"
            onError={() => setImageError(true)}
            priority={false}
          />
        )}

        {/* Fallback cuando no hay imagen */}
        {(!project.image || imageError) && !showVideo && (
          <div className="w-full h-full flex items-center justify-center text-gray-400 dark:text-gray-500 transform group-hover:scale-110 transition-transform duration-300">
            <CodeIcon className="w-12 h-12" />
          </div>
        )}

        {/* Botón de reproducir video */}
        {project.video && !showVideo && (
          <button
            type="button"
            onClick={handleVideoPlay}
            className="absolute inset-0 flex items-center justify-center bg-black/20 hover:bg-black/40 transition-all duration-300 group"
            aria-label={`Reproducir demo de ${project.title}`}
          >
            <div className="bg-white/90 hover:bg-white rounded-full p-3 transform group-hover:scale-110 transition-all duration-300 shadow-lg">
              <PlayIcon className="w-6 h-6 text-gray-800 ml-0.5" />
            </div>
          </button>
        )}

        {/* Overlay para mejor legibilidad */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent group-hover:from-black/40 transition-all duration-300 pointer-events-none" />

        {/* Indicador de video disponible */}
        {project.video && (
          <div className="absolute top-2 right-2 bg-black/60 text-white text-xs px-2 py-1 rounded-full flex items-center gap-1">
            <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
            Demo
          </div>
        )}
      </div>

      {/* Contenido de la tarjeta */}
      <div className="flex flex-col flex-1 p-4 min-h-0">
        {/* Contenido principal que crece */}
        <div className="flex-1">
          <h3 className="text-base font-bold text-gray-800 dark:text-gray-100 mb-2 group-hover:text-black dark:group-hover:text-white transition-colors duration-200 leading-tight">
            {project.title}
          </h3>

          {/* Descripción */}
          {project.description && (
            <p className="text-gray-800 dark:text-gray-300 text-xs mb-2 leading-relaxed line-clamp-3">
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
