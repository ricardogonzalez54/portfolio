export type SectionID = 'inicio' | 'sobre-mi' | 'experiencia' | 'tecnologías' | 'contacto';
interface NavItem {
  id: SectionID;
  label: string;
}
export const navItems: NavItem[] = [
  { id: "inicio", label: "Inicio" },
  { id: "sobre-mi", label: "Sobre mí" },
  { id: "experiencia", label: "Experiencia" },
  { id: "tecnologías", label: "Tecnologías" },
  { id: "contacto", label: "Contacto" },
];
export const sections: SectionID[] = ["inicio", "sobre-mi", "experiencia",  "tecnologías", "contacto"];