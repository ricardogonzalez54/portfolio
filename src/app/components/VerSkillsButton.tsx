"use client";
import { scrollToSection } from "../lib/scrollToSection";

const VerSkillsButton = () => {
  return (
    <button
      onClick={() => scrollToSection("tecnologías")}
      className="hover:cursor-pointer inline-flex items-center gap-1 px-3 py-1.5 text-sm font-medium text-black dark:text-gray-400  dark:border-gray-700 rounded-md hover:text-blue-60 dark:hover:text-gray-100 transition-all duration-200"
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
    </button>
  );
};

export default VerSkillsButton;
