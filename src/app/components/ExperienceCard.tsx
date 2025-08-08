import React from "react";
import { Experience } from "@/app/lib/experiences";
import ResponsibilitiesSection from "@/app/components/ResponsibilitiesSection";
import NavToProjectButton from "./NavToProjectButton";

// Iconos SVG personalizados
const CalendarIcon = () => (
  <svg
    className={"w-4 h-4"}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
    />
  </svg>
);

interface ExperienceCardProps {
  experience: Experience;
  index: number;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({
  experience,
  index,
}) => {
  const getTypeColor = (type: string) => {
    switch (type) {
      case "Colaboración":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200";
      case "Práctica Profesional":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200";
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200";
    }
  };

  return (
    <div className={`lg:w-1/2 ${index % 2 === 0 ? "lg:pl-8" : "lg:pr-8"}`}>
      <div className="bg-white dark:bg-gray-900 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-6 lg:p-8 border border-gray-100 dark:border-gray-700">
        {/* Header de la tarjeta */}
        <div className="flex flex-wrap items-start justify-between mb-4">
          <div className="flex-1 min-w-0">
            <h3 className="text-xl lg:text-2xl font-bold text-gray-900 dark:text-white mb-1">
              {experience.title}
            </h3>
            <p className="text-lg font-semibold text-blue-600 dark:text-blue-400 mb-2">
              {experience.company}
            </p>
          </div>

          {/* Badge de tipo */}
          <span
            className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${getTypeColor(
              experience.type
            )} ml-2 mb-2`}
          >
            {experience.type}
          </span>
        </div>

        {/* Período de tiempo de la experiencia */}
        <div className="flex items-center justify-end gap-3 mb-4 font-semibold text-gray-800 dark:text-gray-200">
          <CalendarIcon />
          <span>{experience.period}</span>
        </div>

        {/* Descripción */}
        <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
          {experience.description}
        </p>

        {/* Responsabilidades */}
        <ResponsibilitiesSection
          responsibilities={experience.responsibilities}
        />

        {/* Tecnologías */}
        <div className="mb-4">
          <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
            Tecnologías utilizadas:
          </h4>
          <div className="flex flex-wrap gap-2">
            {experience.technologies.map((tech, idx) => (
              <span
                key={idx}
                className="px-3 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs rounded-full font-medium border border-blue-100 dark:border-blue-800"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Nota adicional si existe */}
        {experience.note && (
          <div className="mt-4 p-3 bg-amber-50 dark:bg-amber-900/20 border-l-4 border-amber-400 dark:border-amber-500 rounded-r">
            <p className="text-sm text-amber-600 dark:text-amber-200 font-medium">
              📌 {experience.note}
            </p>
          </div>
        )}

        {/* Botón para navegar hacia el proyecto, si existe un proyecto asociado a la experiencia */}
        {experience.projectId && (
          <NavToProjectButton
            projectId={experience.projectId}
            applyMt={experience.note ? true : false}
          />
        )}
      </div>
    </div>
  );
};

export default ExperienceCard;
