// Las ids de los proyectos deben existir en este arreglo
export const projectIds = ['point-of-sale','dashboard','traffic-visualization','ecommerce-platform'] as const;

// Definición de tipos
export interface Technology {
  name: string;
  color: string;
}

export interface Project {
  id: (typeof projectIds)[number]; // Deben ser elementos del arreglo projectIds
  title: string;
  image: string;
  imageZoom?: 'center' | 'top' | 'bottom' | 'left' | 'right' | 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
  video: string;
  technologies: Technology[];
  description: string;
  extraDescription?: string; 
}

// Constantes de tecnologías con colores consistentes
export const ReactTech: Technology = {
  name: "React",
  color: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"
};

export const TypeScriptTech: Technology = {
  name: "TypeScript",
  color: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"
};

export const TailwindTech: Technology = {
  name: "Tailwind",
  color: "bg-cyan-100 text-cyan-800 dark:bg-cyan-900 dark:text-cyan-200"
};

export const ViteTech: Technology = {
  name: "Vite",
  color: "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200"
};

export const NodeTech: Technology = {
  name: "Node",
  color: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
};

export const ReactContextTech: Technology = {
  name: "React-Context",
  color: "bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200"
};

export const ReactOidcContextTech: Technology = {
  name: "react-oidc-context",
  color: "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200"
};

export const AxiosTech: Technology = {
  name: "Axios",
  color: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200"
};

export const PythonTech: Technology = {
  name: "Python",
  color: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
};

export const ReChartsTech: Technology = {
  name: "ReCharts",
  color: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200"
};

export const ShadCNTech: Technology = {
  name: "ShadCN",
  color: "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200"
};

export const HTMLTech: Technology = {
  name: "HTML",
  color: "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200"
};

export const CSSTech: Technology = {
  name: "CSS",
  color: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"
};

export const JavaScriptTech: Technology = {
  name: "JavaScript",
  color: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200"
};

export const FastAPITech: Technology = {
  name: "FastAPI",
  color: "bg-teal-100 text-teal-800 dark:bg-teal-900 dark:text-teal-200"
};

export const PostgreSQLTech: Technology = {
  name: "PostgreSQL",
  color: "bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200"
};

export const MapboxGLJSTech: Technology = {
  name: "MapboxGL JS",
  color: "bg-slate-100 text-slate-800 dark:bg-slate-900 dark:text-slate-200"
};

export const AstroTech: Technology = {
  name: "Astro",
  color: "bg-violet-100 text-violet-800 dark:bg-violet-900 dark:text-violet-200"
};

export const ZustandTech: Technology = {
  name: "Zustand",
  color: "bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-200"
};

// Datos de proyectos con tecnologías corregidas
export const projects: Project[] = [
  {
    id: "point-of-sale",
    title: "Punto de Venta",
    image: "/projects/images/point-of-sale.webp",
    imageZoom: 'bottom-right',
    video: "/videos/point-of-sale.webm",


    technologies: [
      ReactTech,
      TypeScriptTech,
      TailwindTech,
      ViteTech,
      NodeTech,
      ReactContextTech,
      ReactOidcContextTech,
      AxiosTech,
      PythonTech
    ],
    description: "Plataforma integral de punto de venta con emisión de documentos tributarios y gestión completa de caja.",
    extraDescription: "Incluye funcionalidades específicas como registro de ventas en tiempo real, generación de cotizaciones, sistema de devoluciones con trazabilidad, control de retiros y despachos, registro detallado de egresos e ingresos, y sistema de apertura y cierre de caja con cuadratura."
  },
  {
    id: "dashboard",
    title: "Dashboard analíticas Ventas e Inventario",
    image: "/projects/images/dashboard.webp",
    video: "/projects/videos/dashboard.webm",
    technologies: [
      ReactTech,
      TypeScriptTech,
      TailwindTech,
      ViteTech,
      ReChartsTech,
      ShadCNTech
    ],
    description: "Dashboard interactivo para análisis de métricas de ventas e inventario.",
    extraDescription: "Implementa gráficos dinámicos con múltiples tipos de visualización (barras, líneas, torta), sistema de filtrado avanzado por fechas, categorías y productos específicos. Incluye métricas de rendimiento específicas requeridas por el cliente, con comparativas históricas para la toma de decisiones estratégicas."
  },
  {
    id: "traffic-visualization",
    title: "Visualización de Datos Históricos de Tráfico",
    image: "/projects/images/traffic-visualization.webp",
    imageZoom: 'top-left',
    video: "/projects/videos/traffic-visualization.webm",
    technologies: [
      HTMLTech,
      CSSTech,
      JavaScriptTech,
      PythonTech,
      FastAPITech,
      PostgreSQLTech,
      MapboxGLJSTech
    ],
    description: "Plataforma web para visualizar y explorar datos espacio-temporales de tráfico mediante filtros y animaciones.",
    extraDescription: "El usuario puede aplicar filtros temporales para un análisis granular, o generar animaciones cronológicas que muestran la evolución del tráfico en períodos de interés."
  },
  {
    id: "ecommerce-platform",
    title: "E-commerce Platform",
    image: "/projects/images/ecommerce-project.webp",
    video: "/projects/videos/ecommerce-project.webm",
    technologies: [
      AstroTech,
      TailwindTech,
      ReactTech,
      TypeScriptTech,
      ZustandTech
    ],
    description: "Proyecto de e-commerce desarrollado con Astro, enfocado en SEO y experiencia de usuario.",
  }
];