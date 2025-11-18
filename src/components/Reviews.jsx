import React from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

import avatar from "../assets/avatar.png";

export default function Reviews() {
  const reviews = [
    {
      name: "João Silva",
      avatar: avatar,
      rating: 5,
      text: "Atendimento excelente, corte impecável e ambiente top demais. Recomendo!",
    },
    {
      name: "Marcos Andrade",
      avatar: avatar,
      rating: 4.9,
      text: "Melhor barbearia da região. Profissionais muito atenciosos e serviço de qualidade.",
    },
    {
      name: "Pedro Costa",
      avatar: avatar,
      rating: 5,
      text: "Corte rápido, bem feito e preço justo. Voltarei com certeza!",
    },
  ];

  return (
    <section id="testimonials" className="px-6 py-20 max-w-6xl mx-auto">
      <div className="text-center mb-14">
        <h2 className="text-4xl font-extrabold text-white">Avaliações</h2>
        <p className="text-gray-400 mt-3">
          A opinião dos nossos clientes sobre a experiência SHS Barber.
        </p>
      </div>

      {/* GRID */}
      <div className="grid md:grid-cols-3 gap-8">
        {reviews.map((review, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            whileHover={{ scale: 1.03 }}
            className="bg-neutral-900 border border-neutral-800 p-6 rounded-2xl shadow-lg"
          >
            {/* AVATAR */}
            <div className="flex items-center gap-3 mb-4">
              <img
                src={review.avatar}
                alt="Avatar"
                className="w-14 h-14 rounded-full border border-neutral-700 object-cover"
              />
              <div>
                <p className="text-white font-semibold">{review.name}</p>
                <div className="flex items-center text-yellow-400 gap-1">
                  {[...Array(Math.floor(review.rating))].map((_, i) => (
                    <Star key={i} size={18} fill="currentColor" />
                  ))}
                  <span className="text-sm text-gray-300 ml-1">
                    {review.rating.toFixed(1)}
                  </span>
                </div>
              </div>
            </div>

            {/* TEXTO */}
            <p className="text-gray-300 text-sm italic">"{review.text}"</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
