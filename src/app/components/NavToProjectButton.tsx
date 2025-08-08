"use client";
import { scrollToSection } from "../lib/scrollToSection";

// Por ahora no vamos a project-${projectId} porque no se me ocurre muy bien qué hacer con la card
export default function (props: { projectId: string; applyMt: boolean }) {
  return (
    <div className={`flex justify-end ${props.applyMt ? "mt-2" : ""}`}>
      <button
        type="button"
        onClick={() => scrollToSection(`proyectos`)}
        className="cursor-pointer text-sm text-gray-600 hover:text-blue-500 dark:text-gray-50"
      >
        Ver proyectos asociados a la experiencia
      </button>
    </div>
  );
}
