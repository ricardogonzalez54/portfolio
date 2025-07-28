import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import Header from "@/app/components/layout/Header";

// Metadata específica para la página de inicio
export const metadata: Metadata = {
  description:
    "Desarrollador Frontend especializado en React, Next.js y TypeScript. Creando experiencias web modernas y funcionales.",
  openGraph: {
    title: "Tu Nombre - Desarrollador Frontend",
    description:
      "Desarrollador Frontend especializado en React, Next.js y TypeScript.",
    url: "https://tunombre.dev",
  },
};

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <div>
          {/* Hero Section */}
          <section
            className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100"
            id=""
          >
            <div className="container mx-auto px-4 max-w-6xl">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Texto principal */}
                <div className="space-y-8">
                  <div className="space-y-4">
                    <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
                      Hola, soy{" "}
                      <span className="text-blue-700">Ricardo González</span>
                    </h1>
                    <div className="space-y-2">
                      <h2 className="text-2xl md:text-2xl text-gray-800 font-medium">
                        Desarrollador Frontend
                      </h2>
                      <p className="text-base text-gray-700 font-medium">
                        Ingeniero Civil en Telecomunicaciones
                      </p>
                    </div>
                    <p className="text-lg text-gray-600 max-w-lg">
                      Especializado en <strong>React</strong>,{" "}
                      <strong>Next.js</strong> y <strong>TypeScript</strong>.
                      Creando experiencias web modernas, funcionales y centradas
                      en el usuario.
                    </p>
                  </div>

                  {/* Call to actions */}
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link
                      href="/contact"
                      className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-800 text-white font-medium rounded-lg hover:from-blue-400 hover:to-blue-600 transition-colors shadow-lg hover:shadow-xl"
                    >
                      Contáctame
                    </Link>
                  </div>

                  {/* Skills rápidas */}
                  <div className="flex flex-wrap gap-3">
                    {[
                      "React",
                      "Next.js",
                      "TypeScript",
                      "Tailwind CSS",
                      "Node.js",
                    ].map((skill) => (
                      <span
                        key={skill}
                        className="px-4 py-2 bg-white text-gray-700 rounded-full text-sm font-medium shadow-sm border border-gray-200"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Imagen/Avatar */}
                <div className="flex justify-center lg:justify-end">
                  <div className="relative">
                    <div className="w-80 h-80 bg-gradient-to-br from-blue-700 to-blue-950 rounded-full p-2 shadow-2xl">
                      <div className="w-full h-full bg-white rounded-full overflow-hidden">
                        <Image
                          src="/images/profile.webp"
                          alt="Ricardo González - Desarrollador Frontend"
                          width={304}
                          height={304}
                          priority
                          className="w-full h-full object-cover object-center"
                          placeholder="blur"
                          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthX5M2rQenQjRBcEMa7totqjj1P//Z"
                        />
                      </div>
                    </div>
                    {/* Elementos decorativos */}
                    <div
                      aria-hidden="true"
                      className="absolute -top-7 -right-4 w-8 h-8 bg-blue-900 rounded-full"
                    ></div>
                    <div
                      aria-hidden="true"
                      className="absolute -bottom-4 -left-4 w-7 h-7 bg-blue-300 rounded-full"
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Sección de vista previa de proyectos */}
          <section className="py-20 bg-white">
            <div className="container mx-auto px-4 max-w-6xl">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Proyectos Destacados
                </h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  Una selección de mis trabajos más recientes donde he aplicado
                  las mejores prácticas de desarrollo frontend.
                </p>
              </div>

              {/* Grid de proyectos (placeholder) */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                {[1, 2, 3].map((project) => (
                  <div
                    key={project}
                    className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow"
                  >
                    <div className="w-full h-48 bg-gradient-to-br from-blue-100 to-purple-100 rounded-lg mb-4 flex items-center justify-center">
                      <span className="text-gray-500 text-sm">
                        Proyecto {project}
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      Proyecto {project}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      Descripción breve del proyecto y las tecnologías
                      utilizadas.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
                        React
                      </span>
                      <span className="px-3 py-1 bg-green-100 text-green-800 text-xs rounded-full">
                        Next.js
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="text-center">
                <Link
                  href="/projects"
                  className="inline-flex items-center px-6 py-3 bg-gray-900 text-white font-medium rounded-lg hover:bg-gray-800 transition-colors"
                >
                  Ver todos los proyectos
                  <svg
                    className="ml-2 w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </section>

          {/* Call to action final */}
          <section className="py-20 bg-gray-900 text-white">
            <div className="container mx-auto px-4 max-w-4xl text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                ¿Tienes un proyecto en mente?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Me encanta colaborar en proyectos desafiantes. Hablemos sobre
                cómo puedo ayudarte.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors shadow-lg"
              >
                Trabajemos juntos
              </Link>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
