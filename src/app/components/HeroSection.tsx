import Image from "next/image";
import Link from "next/link";

// Componentes de íconos SVG
const ReactIcon = ({ className = "w-8 h-8" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 9.861A2.139 2.139 0 1 0 12 14.139 2.139 2.139 0 1 0 12 9.861zM6.008 16.255l-.472-.12C2.018 15.246 0 13.737 0 11.996s2.018-3.25 5.536-4.139l.472-.119.133.468a23.53 23.53 0 0 0 1.363 3.578l.101.213-.101.213a23.307 23.307 0 0 0-1.363 3.578l-.133.467zM5.317 8.95c-2.674.751-4.315 1.9-4.315 3.046 0 1.145 1.641 2.294 4.315 3.046a24.95 24.95 0 0 1 1.182-3.046A24.752 24.752 0 0 1 5.317 8.95zM17.992 16.255l-.133-.469a23.357 23.357 0 0 0-1.364-3.577l-.101-.213.101-.213a23.42 23.42 0 0 0 1.364-3.578l.133-.468.473.119c3.517.889 5.535 2.398 5.535 4.14s-2.018 3.25-5.535 4.139l-.473.12zm-.491-4.259c.48 1.039.877 2.06 1.182 3.046 2.675-.752 4.315-1.901 4.315-3.046 0-1.146-1.641-2.294-4.315-3.046a24.788 24.788 0 0 1-1.182 3.046zM5.31 8.945l-.133-.467C4.188 4.992 4.488 2.494 6 1.622c1.483-.856 3.864.155 6.359 2.716l.34.349-.34.349a23.552 23.552 0 0 0-2.422 2.967l-.135.193-.235.02a23.657 23.657 0 0 0-3.785.61l-.472.119zm1.896-6.63c-.268 0-.505.058-.705.173-.994.573-1.17 2.565-.485 5.253a25.122 25.122 0 0 1 3.233-.501 24.847 24.847 0 0 1 2.052-2.544c-1.56-1.519-3.037-2.381-4.095-2.381zM16.795 22.677c-.001 0-.001 0 0 0-1.425 0-3.255-1.073-5.154-3.023l-.34-.349.34-.349a23.53 23.53 0 0 0 2.421-2.968l.135-.193.234-.02a23.63 23.63 0 0 0 3.787-.609l.472-.119.134.468c.987 3.484.688 5.983-.824 6.854a2.38 2.38 0 0 1-1.205.308zm-4.096-3.381c1.56 1.519 3.037 2.381 4.095 2.381h.001c.267 0 .505-.058.704-.173.994-.573 1.171-2.566.485-5.254a25.02 25.02 0 0 1-3.234.501 24.674 24.674 0 0 1-2.051 2.545zM18.69 8.945l-.472-.119a23.479 23.479 0 0 0-3.787-.61l-.234-.02-.135-.193a23.414 23.414 0 0 0-2.421-2.967l-.34-.349.34-.349C14.135 1.778 16.515.767 18 1.622c1.512.872 1.812 3.37.823 6.855l-.133.468zM14.75 7.24c1.142.104 2.227.273 3.234.501.686-2.688.509-4.68-.485-5.253-.988-.571-2.845.304-4.8 2.208a24.849 24.849 0 0 1 2.051 2.544zM7.206 22.677A2.38 2.38 0 0 1 6 22.369c-1.512-.871-1.812-3.369-.823-6.854l.132-.468.472.119c1.155.291 2.429.496 3.785.609l.235.02.134.193a23.596 23.596 0 0 0 2.422 2.968l.34.349-.34.349c-1.898 1.95-3.728 3.023-5.151 3.023zm-1.19-6.427c-.686 2.688-.509 4.681.485 5.254.987.563 2.843-.305 4.8-2.208a24.998 24.998 0 0 1-2.052-2.545 24.976 24.976 0 0 1-3.233-.501zM12 16.878c-.823 0-1.669-.036-2.516-.106l-.235-.02-.135-.193a30.388 30.388 0 0 1-1.35-2.122 30.354 30.354 0 0 1-1.166-2.228l-.1-.213.1-.213a30.3 30.3 0 0 1 1.166-2.228c.414-.716.869-1.43 1.35-2.122l.135-.193.235-.02a30.517 30.517 0 0 1 5.033 0l.234.02.134.193a30.472 30.472 0 0 1 1.35 2.122 30.659 30.659 0 0 1 1.166 2.228l.101.213-.101.213a30.138 30.138 0 0 1-1.166 2.228 29.889 29.889 0 0 1-1.35 2.122l-.134.193-.234.02c-.847.07-1.694.106-2.517.106zm-2.197-1.084c1.48.111 2.914.111 4.395 0a29.006 29.006 0 0 0 2.196-3.798 28.585 28.585 0 0 0 0-4.24 28.973 28.973 0 0 0-2.196-3.798c-1.481-.111-2.915-.111-4.395 0A28.708 28.708 0 0 0 7.61 7.756a28.633 28.633 0 0 0 0 4.24c.581 1.351 1.303 2.616 2.193 3.798z" />
  </svg>
);

const TypeScriptIcon = ({ className = "w-8 h-8" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z" />
  </svg>
);

const TailwindIcon = ({ className = "w-8 h-8" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C7.666,17.818,9.027,19.2,12.001,19.2c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z" />
  </svg>
);

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
                    <ReactIcon className="w-8 h-8 text-blue-500" />
                    <span className="hidden-on-mobile text-sm font-medium text-gray-700 dark:text-gray-50">
                      React
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <TypeScriptIcon className="w-8 h-8 text-blue-600" />
                    <span className="hidden-on-mobile text-sm font-medium text-gray-700 dark:text-gray-50">
                      TypeScript
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <TailwindIcon className="w-8 h-8 text-cyan-500" />
                    <span className="hidden-on-mobile text-sm font-medium text-gray-700 dark:text-gray-50">
                      Tailwind
                    </span>
                  </div>
                </div>

                <Link
                  href="/skills"
                  className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors"
                >
                  Ver todas
                  <svg
                    className="w-4 h-4"
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
