// Iconos SVG personalizados
const UserIcon = ({ className }: { className: string }) => (
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
      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
    />
  </svg>
);

const CodeIcon = ({ className }: { className: string }) => (
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

const HeartIcon = ({ className }: { className: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
  </svg>
);

export default function AboutSection() {
  return (
    <section
      id="sobre-mi"
      className="bg-gradient-to-br from-gray-50 to-blue-100 dark:from-gray-900 dark:to-gray-800"
    >
      <div className="container-responsive">
        {/* Header de la sección */}
        <div className="flex items-center justify-center text-center mb-16">
          <UserIcon className="w-8 h-8 text-blue-600 dark:text-blue-400 mr-3" />
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
            Sobre Mí
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Contenido principal */}
          <div className="space-y-6">
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-2">
                Apasionado del desarrollo tecnológico, estudié
                Telecomunicaciones pero decidé enfocarme en el software,
                motivado por su capacidad de impactar positivamente la vida de
                las personas. Mi experiencia está centrada en el frontend con
                React y TypeScript. He trabajado en proyectos web como sistemas
                de punto de venta, e-commerce y visualizadores de datos. Abierto
                a la mejora continua a través de nuevas tecnologías, busco
                aportar con compromiso y un enfoque en la experiencia de usuario
                al diseño y creación de nuevas soluciones.
              </p>

              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Cuando no estoy programando, me gusta mantenerme actualizado con
                las últimas tendencias tecnológicas, contribuir a proyectos open
                source, y explorar nuevas herramientas que puedan mejorar mi
                flujo de trabajo y la calidad de mis proyectos.
              </p>
            </div>

            {/* Características destacadas */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
              <div className="flex items-center space-x-3 p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
                <CodeIcon className="w-6 h-6 text-blue-600 dark:text-blue-400 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white text-sm">
                    Clean Code
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400 text-xs">
                    Código limpio y mantenible
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-3 p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
                <HeartIcon className="w-6 h-6 text-red-500 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white text-sm">
                    UX/UI Focus
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400 text-xs">
                    Centrado en la experiencia
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Imagen o elementos visuales */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              {/* Imagen de workspace o coding setup */}
              <div className="w-80 h-80 bg-gradient-to-br from-blue-600 to-purple-700 rounded-2xl p-1 shadow-2xl">
                <div className="w-full h-full bg-gray-100 dark:bg-gray-800 rounded-xl overflow-hidden flex items-center justify-center">
                  {/* Puedes reemplazar esto con una imagen real de tu setup */}
                  <div className="text-center space-y-4">
                    <div className="w-16 h-16 bg-blue-600 rounded-full mx-auto flex items-center justify-center">
                      <CodeIcon className="w-8 h-8 text-white" />
                    </div>
                    <div className="space-y-2">
                      <div className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        Frontend Developer
                      </div>
                      <div className="text-xs text-gray-500 dark:text-gray-400">
                        React • TypeScript • Tailwind
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Elementos decorativos */}
              <div
                aria-hidden="true"
                className="absolute -top-4 -right-4 w-8 h-8 bg-purple-500 rounded-full"
              ></div>
              <div
                aria-hidden="true"
                className="absolute -bottom-4 -left-4 w-6 h-6 bg-blue-400 rounded-full"
              ></div>
              <div
                aria-hidden="true"
                className="absolute top-1/2 -left-6 w-4 h-4 bg-green-400 rounded-full"
              ></div>
            </div>
          </div>
        </div>

        {/* Stats personales */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg">
            <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">
              Curiosidad
            </div>
            <div className="text-gray-600 dark:text-gray-300 font-medium">
              Siempre aprendiendo
            </div>
          </div>

          <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg">
            <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">
              Calidad
            </div>
            <div className="text-gray-600 dark:text-gray-300 font-medium">
              Atención al detalle
            </div>
          </div>

          <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg">
            <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">
              Innovación
            </div>
            <div className="text-gray-600 dark:text-gray-300 font-medium">
              Soluciones creativas
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
