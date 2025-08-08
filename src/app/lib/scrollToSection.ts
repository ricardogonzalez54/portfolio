import 'client-only'

// Función para hacer scroll suave a una sección, considerando el offset el Header
export const scrollToSection = (sectionId: string) => {
    console.log("scrolleando to section yay");
    const element = document.getElementById(sectionId);

    console.log("this is section id",sectionId);
    console.log("found this element to scroll to: ",element);
    const header = document.querySelector("header");

    if (element && header) {
      const headerHeight = header.offsetHeight;
      const margin = 0; // margen adicional. Creo que sin margen de offset se ve mejor
      const offsetTop = element.offsetTop - headerHeight - margin;

      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
};