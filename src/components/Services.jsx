import React from "react";
import corte from "../assets/corte1.png";
import barba from "../assets/corte2.png";
import afro from "../assets/corteebarba.png";

export default function Services() {
  const services = [
    {
      title: "Corte Masculino",
      description:
        "Cortes masculinos modernos e personalizados. Degradê, tesoura ou navalha com acabamento impecável, realçando seu estilo.",
      image: corte,
      whatsapp:
        "https://wa.me/553798023911?text=Quero%20agendar%20um%20corte!"
    },
    {
      title: "Barba",
      description:
        "Design de barba preciso com navalha e lâmina profissional. Deixe seu visual limpo e elegante, com acabamento perfeito.",
      image: barba,
      whatsapp:
        "https://wa.me/553798023911?text=Quero%20agendar%20um%20serviço%20de%20barba!"
    },
    {
      title: "Barba e Cabelo",
      description:
        "Pacote completo de corte de cabelo e barba, com cuidado e estilo profissional. Economize tempo e garanta um visual impecável.",
      image: afro,
      whatsapp:
        "https://wa.me/553798023911?text=Quero%20agendar%20um%20corte%20afro!"
    },
  ];

  return (
    <section id="services" className="py-20 px-6 bg-black">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-12">
          Nossos Serviços
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-neutral-900 rounded-xl overflow-hidden shadow-lg border border-transparent transition-all duration-300 hover:scale-105 hover:border-barber-gold hover:shadow-2xl"
            >
              {/* Container parallax */}
              <div className="relative h-64 sm:h-72 md:h-80 lg:h-96 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  loading="lazy"
                  className="absolute w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 group-hover:translate-y-[-5%]"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors duration-300"></div>
              </div>

              {/* Conteúdo */}
              <div className="absolute bottom-0 left-0 right-0 p-6 text-left sm:text-center">
                <h3 className="text-xl sm:text-2xl font-bold text-white">{service.title}</h3>
                <p className="text-gray-200 text-sm sm:text-base mt-2">{service.description}</p>
                <a
                  href={service.whatsapp}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-block mt-4 bg-barber-gold text-black font-semibold px-5 py-2 rounded-full 
                             hover:scale-105 hover:shadow-md transition-transform duration-300"
                >
                  Agendar
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
