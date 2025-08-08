// Secciones válidas se definene en el arreglo. as const para que tengamos una tupla con un tipo para cada elemento.
export const sections = ["inicio", "sobre-mi", "experiencia", "proyectos", "tecnologías", "contacto"] as const;

interface NavItem {
  id: (typeof sections)[number]; // La id de los elementos de navegación debe ser un elemento de sections
  label: string;
}

export const navItems: NavItem[] = [
  { id: "inicio", label: "Inicio" },
  { id: "sobre-mi", label: "Sobre mí" },
  { id: "experiencia", label: "Experiencia" },
  { id: "proyectos", label: "Proyectos" },
  { id: "tecnologías", label: "Tecnologías" },
  { id: "contacto", label: "Contacto" },
];
