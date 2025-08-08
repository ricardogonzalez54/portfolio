import { projectIds } from "./projects";

// Tipo para la experiencia (puedes moverlo a un archivo types.ts si prefieres)
export interface Experience {
  id: number;
  title: string;
  company: string;
  period: string;
  location?: string;
  type: string;
  description: string;
  responsibilities: string[];
  technologies: string[];
  note?: string;
  projectId?: (typeof projectIds)[number];
}

export const experiences: Experience[] = [
    {
      id: 1,
      title: "Frontend Developer",
      company: "Maderas Lawal",
      period: "Enero 2025 - Presente",
      location: "Remoto / Concepción, Chile",
      type: "Colaboración",
      description:
        `Construcción de un Sistema Web Empresarial. Este abarcó la implementación de 
        un de punto de venta (POS) con funciones avanzadas de gestión comercial, dashboards para el análisis
        de métricas empresariales, y un sistema de monitoreo de eventos.`,
      responsibilities: [
        "Encargado de la toma de decisiones de la arquitectura y tecnologías usadas por el equipo frontend.",
        "Desarrollo completo del frontend para sistema POS con emisión de boletas y facturas electrónicas.",
        "Revisiones de Pull Requests asociados a las otras funcionalidades del sistema.",
        "Configuración del entorno con Vite, React y Typescript.",
        "Integración del sistema Keycloak de autenticación utilizando protocolo OpenID Connect y librería react-oidc-context.",
        "Construcción del enrutado del sistema utilizando React Router.",
        "Desarrollo de un mock backend para testing en NodeJS.",
        "Trabajo en sincronía con equipo backend para la integración de APIs.",
        "Gestión de proyecto con GitHub y comunicación directa con cliente.",
      ],
      technologies: [
        "React",
        "TypeScript",
        "Vite",
        "Tailwind CSS",
        "React Router",
        "Axios",
        "NodeJS",
        "react-oidc-context"
      ],
      projectId: 'point-of-sale',

    },
    {
      id: 2,
      title: "Practicante Desarrollo y Ciencia de Datos",
      company: "City Lab Biobío",
      period: "Marzo 2024 - Octubre 2024",
      location: "Concepción, Chile",
      type: "Práctica Profesional",
      description:
        "Soporte tecnológico del sistema Cityscope y desarrollo de visualizadores de datos georreferenciados.",
      responsibilities: [
        "Soporte de sistema tecnológico Cityscope basado en sensores RFID y microservicios",
        "Procesamiento de datos georreferenciados con Python (Pandas, GeoPandas, SQLAlchemy)",
        "Desarrollo web de visor interactivo de datos espacio-temporales",
        "Implementación con HTML, CSS, JavaScript y librerías especializadas como Mapbox GL JS",
      ],
      technologies: [
        "Python",
        "Pandas",
        "GeoPandas",
        "SQLAlchemy",
        "JavaScript",
        "Mapbox GL JS",
        "HTML",
        "CSS",
      ],
      projectId: 'traffic-visualization',

    },
    {
      id: 3,
      title: "Astro Frontend Developer",
      company: "Freelance",
      period: "Marzo 2025 - Abril 2025",
      location: "Remoto",
      type: "Colaboración",
      description:
        "Implementación de frontend para e-commerce con tecnologías modernas y renderizado híbrido.",
      responsibilities: [
        "Implementación de frontend de e-commerce utilizando Astro con renderizado híbrido (SSR/SPA)",
        "Gestión de estado con Zustand y componentes interactivos con React embebido",
        "Diseño de arquitectura modular con enfoque en rendimiento y escalabilidad",
        "Estilos con Tailwind CSS para una experiencia de usuario optimizada",
      ],
      technologies: ["Astro", "React", "Zustand", "Tailwind CSS", "TypeScript"],
      note: "Proyecto pausado por decisiones del cliente",  
      projectId: 'ecommerce-platform',
    },
  ];