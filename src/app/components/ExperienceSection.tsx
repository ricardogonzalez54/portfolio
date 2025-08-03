import React from "react";
import { experiences } from "@/app/lib/experiences";
import ExperienceCard from "@/app/components/ExperienceCard";

// Iconos SVG personalizados
const BriefcaseIcon = ({ className }: { className: string }) => (
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
      d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0H8m8 0v2a2 2 0 01-2 2H10a2 2 0 01-2-2V8m8 0H8"
    />
  </svg>
);

export default function ExperienceSection() {
  return (
    <section
      id="experiencia"
      className="bg-gradient-to-bl from-indigo-200 to-purple-50 dark:from-black dark:to-purple-950"
    >
      <div className="container-responsive">
        {/* Header de la sección */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <BriefcaseIcon className="w-8 h-8 text-blue-600 dark:text-blue-400 mr-3" />
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
              Experiencia Profesional
            </h2>
          </div>
          <p className="container-narrow text-lg text-gray-600 dark:text-gray-300">
            Mi trayectoria en el desarrollo frontend, desde proyectos freelance
            hasta colaboraciones en plataformas de visualización de datos y
            sistemas empresariales.
          </p>
        </div>

        {/* Timeline de experiencias */}
        <div className="relative">
          {/* Línea vertical del timeline - solo visible en pantallas grandes */}
          <div className="hidden lg:block absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-gradient-to-b from-blue-200 via-blue-400 to-blue-200 dark:from-blue-800 dark:via-blue-600 dark:to-blue-800"></div>

          {experiences.map((experience, index) => (
            <div key={experience.id} className="relative mb-12 lg:mb-16">
              {/* Contenedor principal */}
              <div
                className={`lg:flex lg:items-center ${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                }`}
              >
                {/* Espacio para centrar en desktop */}
                <div className="hidden lg:block lg:w-1/2"></div>
                <ExperienceCard experience={experience} index={index} />

                {/* Punto del timeline - solo visible en pantallas grandes */}
                <div
                  aria-hidden
                  className="hidden lg:block absolute left-1/2 top-8 transform -translate-x-1/2 w-4 h-4 bg-blue-500 dark:bg-blue-400 rounded-full border-4 border-white dark:border-gray-900 shadow-lg z-10"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Estadísticas rápidas */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg">
            <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">
              +1
            </div>
            <div className="text-gray-600 dark:text-gray-300 font-medium">
              Año de Experiencia
            </div>
          </div>
          <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg">
            <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">
              +10
            </div>
            <div className="text-gray-600 dark:text-gray-300 font-medium">
              Tecnologías Aplicadas
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
