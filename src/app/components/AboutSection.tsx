"use client";

import { useState } from "react";

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
      d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0H8m8 0v2a2 2 0 01-2 2H10a2 2 0 01-2-2V6"
    />
  </svg>
);

const LightbulbIcon = ({ className }: { className: string }) => (
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
      d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
    />
  </svg>
);

const HeartIcon = ({ className }: { className: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
  </svg>
);

const TrophyIcon = ({ className }: { className: string }) => (
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
      d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
    />
  </svg>
);

const ChevronDownIcon = ({ className }: { className: string }) => (
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
      d="M19 9l-7 7-7-7"
    />
  </svg>
);

// Datos de las tarjetas
const aboutCards = [
  {
    id: "professional",
    title: "Ámbito Profesional",
    icon: BriefcaseIcon,
    iconColor: "text-blue-600 dark:text-blue-400",
    content:
      "Soy Ricardo, un apasionado por el desarrollo tecnológico, titulado de Ingeniería Civil en Telecomunicaciones y especializado en desarrollo de software, porque creo en su capacidad de impactar positivamente la vida de las personas.",
  },
  {
    id: "logic",
    title: "Lógica y Curiosidad",
    icon: LightbulbIcon,
    iconColor: "text-yellow-600 dark:text-yellow-400",
    content:
      "Desde el colegio me fascinan las matemáticas, la física y la lógica. Siempre sentí una inclinación natural por resolver problemas, entender cómo funcionan las cosas y buscar patrones. Me considero muy estudioso y curioso; disfruto aprender por el simple placer de entender, y valoro el conocimiento en todas sus formas.",
  },
  {
    id: "interests",
    title: "Otros Intereses",
    icon: HeartIcon,
    iconColor: "text-red-500",
    content:
      "Más allá de la programación, también me interesan la filosofía, el cine, la música, los deportes electrónicos y el entrenamiento físico. Me gusta explorar distintas áreas del conocimiento y las experiencias que ofrecen distintas disciplinas.",
  },
  {
    id: "competitiveness",
    title: "Competitividad y Autoexigencia",
    icon: TrophyIcon,
    iconColor: "text-green-600 dark:text-green-400",
    content:
      "Tengo una personalidad bastante autoexigente y competitiva, lo que me impulsa a profundizar en cada disciplina que practico. Cuando algo me interesa, me involucro de verdad: investigo, practico y estudio hasta sentir que estoy haciendo las cosas con un estándar alto. Disfruto ese proceso.",
  },
];

interface AboutCardProps {
  card: (typeof aboutCards)[0];
  isOpen: boolean;
  onToggle: () => void;
}

const AboutCard = ({ card, isOpen, onToggle }: AboutCardProps) => {
  const { title, icon: Icon, iconColor, content } = card;

  return (
    <div
      className={`bg-white dark:bg-gray-900 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700 ${
        isOpen ? "h-auto" : "h-24"
      }`}
    >
      <button
        onClick={onToggle}
        className={`cursor-pointer w-full text-left hover:bg-gray-50 dark:hover:bg-gray-800 rounded-xl ${
          isOpen ? "p-6" : "p-6 h-full"
        }`}
      >
        <div className="flex items-center justify-between h-full">
          <div className="flex items-center space-x-4">
            <div className="flex-shrink-0">
              <Icon className={`w-8 h-8 ${iconColor}`} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white">
              {title}
            </h3>
          </div>
          <ChevronDownIcon
            className={`w-6 h-6 text-gray-500 dark:text-gray-400 transition-transform duration-300 flex-shrink-0 ${
              isOpen ? "rotate-180" : ""
            }`}
          />
        </div>
      </button>

      <div
        className={`overflow-hidden transition-[max-height] duration-300 ease-in-out ${
          isOpen
            ? "max-h-96 opacity-100 transition-all delay-150" // opacity se anima CON delay
            : "max-h-0 opacity-0" // opacity cambia instantáneamente, sin transition-opacity
        }`}
      >
        <div className="px-6 pb-6">
          <div className="pt-4 border-t border-gray-100 dark:border-gray-700">
            <p className="text-gray-700 dark:text-gray-200 leading-relaxed">
              {content}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function AboutSection() {
  const [openCards, setOpenCards] = useState<Set<string>>(new Set());

  const toggleCard = (cardId: string) => {
    setOpenCards((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(cardId)) {
        newSet.delete(cardId);
      } else {
        newSet.add(cardId);
      }
      return newSet;
    });
  };

  return (
    <section
      id="sobre-mi"
      className="bg-gradient-to-br from-gray-50 to-blue-100 dark:from-gray-950 dark:to-gray-800"
    >
      <div className="container-responsive">
        {/* Header de la sección */}
        <div className="flex items-center justify-center text-center mb-16">
          <UserIcon className="w-8 h-8 text-blue-600 dark:text-blue-400 mr-3" />
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
            Sobre Mí
          </h2>
        </div>

        {/* Grid de tarjetas */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {aboutCards.map((card) => (
            <AboutCard
              key={card.id}
              card={card}
              isOpen={openCards.has(card.id)}
              onToggle={() => toggleCard(card.id)}
            />
          ))}
        </div>

        {/* Texto opcional de cierre */}
        <div className="mt-16 text-center max-w-3xl mx-auto">
          <p className="text-lg text-gray-600 dark:text-gray-300 font-medium">
            Explora cada aspecto para conocer más sobre mi trayectoria y
            pasiones
          </p>
        </div>
      </div>
    </section>
  );
}
