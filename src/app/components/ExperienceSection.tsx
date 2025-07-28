import React from "react";

// Iconos SVG personalizados
const BriefcaseIcon = ({ className = "w-6 h-6" }) => (
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

const CalendarIcon = ({ className = "w-4 h-4" }) => (
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
      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
    />
  </svg>
);

const LocationIcon = ({ className = "w-4 h-4" }) => (
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
      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
    />
  </svg>
);

const CodeIcon = ({ className = "w-4 h-4" }) => (
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

export default function ExperienceSection() {
  const experiences = [
    {
      id: 1,
      title: "Desarrollador Frontend",
      company: "Proyecto Freelance - Sistema POS",
      period: "Enero 2025 - Presente",
      location: "Remoto / Concepción, Chile",
      type: "Freelance",
      current: true,
      description:
        "Desarrollo completo del frontend para un sistema web de punto de venta (POS) con funciones avanzadas de gestión comercial.",
      responsibilities: [
        "Desarrollo completo del frontend para sistema POS con emisión de boletas y facturas electrónicas",
        "Implementación en React + TypeScript con arquitectura de componentes reutilizables",
        "Integración de APIs RESTful para conexión con backend tributario",
        "Configuración del entorno con Vite, React Router y Axios",
        "Gestión de proyecto con GitHub y comunicación directa con cliente",
      ],
      technologies: [
        "React",
        "TypeScript",
        "Vite",
        "React Router",
        "Axios",
        "Tailwind CSS",
      ],
    },
    {
      id: 2,
      title: "Practicante Ciencia de Datos y Desarrollo",
      company: "City Lab Biobío",
      period: "Marzo 2024 - Octubre 2024",
      location: "Concepción, Chile",
      type: "Práctica Profesional",
      current: false,
      description:
        "Soporte tecnológico del sistema Cityscope y desarrollo de visualizadores de datos georreferenciados.",
      responsibilities: [
        "Soporte de sistema tecnológico Cityscope basado en sensores RFID y microservicios",
        "Procesamiento de datos georreferenciados con Python (Pandas, GeoPandas, SQLAlchemy)",
        "Desarrollo web de visor interactivo de datos espacio-temporales",
        "Implementación con HTML, CSS, JavaScript y librerías especializadas como Mapbox GL JS",
      ],
      technologies: [
        "Python",
        "Pandas",
        "GeoPandas",
        "SQLAlchemy",
        "JavaScript",
        "Mapbox GL JS",
        "HTML",
        "CSS",
      ],
    },
    {
      id: 3,
      title: "Desarrollador Frontend",
      company: "Proyecto E-commerce con Astro",
      period: "Marzo 2025 - Abril 2025",
      location: "Remoto",
      type: "Colaboración",
      current: false,
      description:
        "Implementación de frontend para e-commerce con tecnologías modernas y renderizado híbrido.",
      responsibilities: [
        "Implementación de frontend de e-commerce utilizando Astro con renderizado híbrido (SSR/SPA)",
        "Gestión de estado con Zustand y componentes interactivos con React embebido",
        "Diseño de arquitectura modular con enfoque en rendimiento y escalabilidad",
        "Estilos con Tailwind CSS para una experiencia de usuario optimizada",
      ],
      technologies: ["Astro", "React", "Zustand", "Tailwind CSS", "TypeScript"],
      note: "Proyecto pausado por decisiones del cliente",
    },
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case "Freelance":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200";
      case "Práctica Profesional":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200";
      case "Colaboración":
        return "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200";
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200";
    }
  };

  return (
    <section id="experiencia" className="bg-gray-50 dark:bg-gray-900">
      <div className="container-responsive">
        {/* Header de la sección */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <BriefcaseIcon className="w-8 h-8 text-blue-600 dark:text-blue-400 mr-3" />
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
              Experiencia Profesional
            </h2>
          </div>
          <p className="container-narrow text-lg text-gray-600 dark:text-gray-300">
            Mi trayectoria en el desarrollo frontend, desde proyectos freelance
            hasta colaboraciones en ciencia de datos y sistemas empresariales.
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

                {/* Tarjeta de experiencia */}
                <div
                  className={`lg:w-1/2 ${
                    index % 2 === 0 ? "lg:pl-8" : "lg:pr-8"
                  }`}
                >
                  <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 lg:p-8 border border-gray-100 dark:border-gray-700">
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

                    {/* Información de tiempo y ubicación */}
                    <div className="flex flex-wrap gap-4 mb-4 text-sm text-gray-600 dark:text-gray-300">
                      <div className="flex items-center">
                        <CalendarIcon className="mr-2" />
                        <span
                          className={
                            experience.current
                              ? "font-semibold text-green-600 dark:text-green-400"
                              : ""
                          }
                        >
                          {experience.period}
                        </span>
                      </div>
                      <div className="flex items-center">
                        <LocationIcon className="mr-2" />
                        <span>{experience.location}</span>
                      </div>
                    </div>

                    {/* Descripción */}
                    <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                      {experience.description}
                    </p>

                    {/* Responsabilidades */}
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-3 flex items-center">
                        <CodeIcon className="mr-2" />
                        Responsabilidades principales:
                      </h4>
                      <ul className="space-y-2">
                        {experience.responsibilities.map(
                          (responsibility, idx) => (
                            <li key={idx} className="flex items-start">
                              <span className="inline-block w-2 h-2 bg-blue-500 dark:bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                              <span className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                                {responsibility}
                              </span>
                            </li>
                          )
                        )}
                      </ul>
                    </div>

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
                        <p className="text-sm text-amber-700 dark:text-amber-300 font-medium">
                          📌 {experience.note}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Punto del timeline - solo visible en pantallas grandes */}
              <div className="hidden lg:block absolute left-1/2 top-8 transform -translate-x-1/2 w-4 h-4 bg-blue-500 dark:bg-blue-400 rounded-full border-4 border-white dark:border-gray-900 shadow-lg z-10">
                {experience.current && (
                  <div className="absolute -inset-1 bg-blue-500 dark:bg-blue-400 rounded-full animate-ping opacity-75"></div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Estadísticas rápidas */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg">
            <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">
              2+
            </div>
            <div className="text-gray-600 dark:text-gray-300 font-medium">
              Años de Experiencia
            </div>
          </div>
          <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg">
            <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">
              3
            </div>
            <div className="text-gray-600 dark:text-gray-300 font-medium">
              Proyectos Completados
            </div>
          </div>
          <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg">
            <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">
              10+
            </div>
            <div className="text-gray-600 dark:text-gray-300 font-medium">
              Tecnologías Dominadas
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
