import Link from "next/link";

export default function ContactSection() {
  return (
    <section id="contacto" className="bg-gray-900 text-white">
      <div className="mx-auto px-4 max-w-screen md:max-w-4xl text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          ¿Tienes un proyecto en mente?
        </h2>
        <p className="text-xl text-gray-300 mb-8">
          Contáctame. Hablemos sobre cómo puedo ayudarte.
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors shadow-lg"
        >
          Trabajemos juntos
        </Link>
      </div>
    </section>
  );
}
