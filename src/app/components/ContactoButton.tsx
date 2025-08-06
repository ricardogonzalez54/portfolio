"use client";
import { scrollToSection } from "../lib/scrollToSection";

const ContactoButton = () => {
  return (
    <div className="flex justify-center lg:justify-start">
      <button
        onClick={() => scrollToSection("contacto")}
        className="cursor-pointer inline-flex items-center justify-center px-8 py-4 bg-gradient-to-br from-blue-950 to-blue-800 hover:from-blue-800 hover:to-blue-600 dark:from-blue-800 dark:to-blue-600 dark:hover:from-blue-600 dark:hover:to-blue-500 text-white text-xl font-medium rounded-lg transition-colors shadow-lg hover:shadow-2xl"
      >
        Contáctame
      </button>
    </div>
  );
};

export default ContactoButton;
