import Image from "next/image";

// Icono SVG personalizado
const CogIcon = ({ className }: { className: string }) => (
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
      d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
    />
  </svg>
);

// Definición de tecnologías organizadas por categorías
const technologies = {
  frontend: [
    { name: "React", logo: "react-logo.svg" },
    { name: "Next.js", logo: "next-logo.svg" },
    { name: "TypeScript", logo: "ts-logo.svg" },
    { name: "JavaScript", logo: "js-logo.svg" },
    { name: "Tailwind CSS", logo: "tailwind-logo.svg" },
    { name: "HTML5", logo: "html-logo.svg" },
    { name: "CSS3", logo: "css-logo.svg" },
    { name: "Vite", logo: "vite-logo.svg" },
  ],
  tools: [
    { name: "Git", logo: "git-logo.svg" },
    { name: "GitHub", logo: "github-logo.svg" },
    { name: "Postman", logo: "postman-logo.svg" },
  ],
  backend: [
    { name: "Node.js", logo: "node-logo.svg" },
    { name: "Python", logo: "python-logo.svg" },
  ],
};

// Componente para una tarjeta de tecnología
interface TechnologyCardProps {
  name: string;
  logo: string;
}

const TechnologyCard = ({ name, logo }: TechnologyCardProps) => {
  return (
    <div className="group bg-transparen rounded-xl">
      <div
        className="flex flex-col items-center justify-center text-center space-y-4 rounded-lg p-5    
                      shadow-md hover:shadow-2xl                  
                      bg-gray-50 dark:bg-gray-900 
                      hover:bg-white dark:hover:bg-gray-800
                      dark:border dark:border-gray-600                     
                      transition-all duration-300 
                      "
      >
        {/* Logo */}
        <Image
          src={`/logos/${logo}`}
          alt={`Logo de ${name}`}
          width={45}
          height={45}
          className="w-10 h-10 object-contain group-hover:scale-130 transition-transform duration-300"
        />

        {/* Nombre */}
        <h3 className="font-semibold text-gray-900 dark:text-white text-base sm:text-lg">
          {name}
        </h3>
      </div>
    </div>
  );
};

// Componente para una sección de categoría
interface CategorySectionProps {
  title: string;
  description: string;
  technologies: TechnologyCardProps[];
  icon: React.ReactNode;
}

const CategorySection = ({
  title,
  description,
  technologies,
  icon,
}: CategorySectionProps) => (
  <div className="mb-16">
    <div className="ml-4 mb-6">
      <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
        {title}
      </h3>
    </div>

    <div className="grid grid-cols-4 lg:grid-cols-8 gap-2">
      {technologies.map((tech, index) => (
        <TechnologyCard key={index} name={tech.name} logo={tech.logo} />
      ))}
    </div>
  </div>
);

export default function TechnologiesSection() {
  return (
    <section
      id="tecnologías"
      className="bg-gradient-to-br from-purple-50 to-pink-100 dark:from-gray-900 dark:to-purple-950"
    >
      <div className="container-responsive">
        {/* Header de la sección */}
        <div className="flex items-center justify-center text-center mb-16">
          <CogIcon className="w-8 h-8 text-blue-600 dark:text-blue-400 mr-3" />
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
            Tecnologías
          </h2>
        </div>

        {/* Frontend Technologies */}
        <CategorySection
          title="Frontend Development"
          description="Tecnologías principales para el desarrollo de interfaces"
          technologies={technologies.frontend}
          icon={
            <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center">
              <svg
                className="w-6 h-6 text-blue-600 dark:text-blue-400"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
              </svg>
            </div>
          }
        />

        {/* Tools & Workflow */}
        <CategorySection
          title="Herramientas & Workflow"
          description="Herramientas que optimizan mi flujo de desarrollo"
          technologies={technologies.tools}
          icon={
            <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center">
              <svg
                className="w-6 h-6 text-green-600 dark:text-green-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                />
              </svg>
            </div>
          }
        />

        {/* Backend */}
        <CategorySection
          title="Backend"
          description="Tecnologías complementarias para desarrollo fullstack"
          technologies={technologies.backend}
          icon={
            <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center">
              <svg
                className="w-6 h-6 text-purple-600 dark:text-purple-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"
                />
              </svg>
            </div>
          }
        />
      </div>
    </section>
  );
}
