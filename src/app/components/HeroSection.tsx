import Image from "next/image";
import Link from "next/link";
import VerSkillsButton from "./VerSkillsButton";

export default function HeroSection() {
  return (
    <>
      {/* Hero Section */}
      <section
        className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-200 dark:from-gray-800 dark:to-black"
        id="inicio"
      >
        <div className="container-responsive">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Texto principal */}
            <div className="space-y-8">
              <div className="flex flex-col justify-center items-center md:block space-y-4">
                <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-gray-50 leading-tight">
                  Hola, soy{" "}
                  <span className="text-blue-700 dark:text-blue-500">
                    Ricardo González
                  </span>
                </h1>
                {/* Imagen en dispositivos móviles */}
                <div className="md:hidden w-60 h-60 bg-gradient-to-br from-blue-700 to-blue-950 rounded-full shadow-2xl">
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

                <div className="space-y-2">
                  <h2 className="text-2xl md:text-2xl text-gray-800 dark:text-white font-medium">
                    Desarrollador Frontend
                  </h2>
                  <p className="text-base text-gray-700 dark:text-gray-100 font-medium">
                    Ingeniero en Telecomunicaciones
                  </p>
                </div>
                <p className="text-lg text-gray-600 dark:text-white">
                  Especializado en <strong>React</strong>,{" "}
                  <strong>TypeScript</strong> y <strong>TailwindCSS</strong>.
                  <br />
                  Creo experiencias web modernas, funcionales y centradas en el
                  usuario.
                </p>
              </div>

              {/* Call to actions */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-800 text-white text-xl font-medium rounded-lg hover:from-blue-400 hover:to-blue-600 transition-colors shadow-lg hover:shadow-xl"
                >
                  Contáctame
                </Link>
              </div>

              {/* Tecnologías principales con íconos */}
              <div className="flex items-center justify-between sm:justify-start">
                <div className="flex items-center gap-6">
                  <div className="flex items-center gap-2">
                    <Image
                      src="/logos/react-logo.svg"
                      alt="React"
                      width={32}
                      height={32}
                      className="w-8 h-8"
                    />
                    <span className="hidden-on-mobile text-base font-medium text-gray-700 dark:text-gray-50">
                      React
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Image
                      src="/logos/ts-logo.svg"
                      alt="TypeScript"
                      width={32}
                      height={32}
                      className="w-8 h-8"
                    />
                    <span className="hidden-on-mobile text-base font-medium text-gray-700 dark:text-gray-50">
                      TypeScript
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Image
                      src="/logos/tailwind-logo.svg"
                      alt="Tailwind CSS"
                      width={32}
                      height={32}
                      className="w-8 h-8"
                    />
                    <span className="hidden-on-mobile text-base font-medium text-gray-700 dark:text-gray-50">
                      Tailwind
                    </span>
                  </div>
                  <VerSkillsButton />
                </div>
              </div>
            </div>

            {/* Imagen en Pantallas Medianas y grandes */}
            <div className="hidden md:flex justify-center lg:justify-end">
              <div className="relative">
                <div className="w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 bg-gradient-to-br from-blue-700 to-blue-950 rounded-full p-2 shadow-2xl">
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
    </>
  );
}
