import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import Header from "@/app/components/Header";
import HeroSection from "@/app/components/HeroSection";
import ExperienceSection from "@/app/components/ExperienceSection";

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
      <main className="min-h-screen max-w-screen">
        <HeroSection />
        <ExperienceSection />
        {/* Sección de vista previa de proyectos */}
        <section id="proyectos" className="py-20 bg-white">
          <div className="container mx-auto px-4 max-w-screen md:max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Proyectos Destacados
              </h2>
              <p className="text-lg text-gray-600 max-w-screen md:max-w-2xl mx-auto">
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
                    Descripción breve del proyecto y las tecnologías utilizadas.
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
        <section id="contacto" className="py-20 bg-gray-900 text-white">
          <div className="container mx-auto px-4 max-w-screen md:max-w-4xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              ¿Tienes un proyecto en mente?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Me encanta colaborar en proyectos desafiantes. Hablemos sobre cómo
              puedo ayudarte.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors shadow-lg"
            >
              Trabajemos juntos
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
