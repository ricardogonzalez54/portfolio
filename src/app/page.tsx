import type { Metadata } from "next";
import Header from "@/app/components/Header";
import HeroSection from "@/app/components/HeroSection";
import AboutSection from "./components/AboutSection";
import ExperienceSection from "@/app/components/ExperienceSection";
import ProjectsSection from "./components/ProjectsSection";
import TechnologiesSection from "./components/TechnologiesSection";
import ContactSection from "./components/ContactSection";

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
        <AboutSection />
        <ExperienceSection />
        <ProjectsSection />
        <TechnologiesSection />
        <ContactSection />
      </main>
    </>
  );
}
