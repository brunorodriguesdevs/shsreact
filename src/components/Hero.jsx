import React from "react";
import { motion } from "framer-motion";
import banner from "../assets/imagensobre.png";

export default function Hero() {
  const text = "Mais de 10 anos de tradição em cortes e cuidados masculinos";

  return (
    <section
      id="home"
      className="max-w-6xl mx-auto px-6 py-28 flex flex-col md:flex-row items-center gap-10"
    >
      {/* ----- TEXTO ----- */}
      <div className="md:w-1/2 flex flex-col justify-center z-10">
        {/* Título com animação de entrada */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-4xl md:text-6xl font-extrabold leading-tight text-transparent bg-clip-text 
                     bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-500"
        >
          {text.split(" ").map((word, i) => (
            <motion.span
              key={i}
              whileHover={{ scale: 1.1, letterSpacing: "3px" }}
              transition={{ type: "spring", stiffness: 300 }}
              className="inline-block mr-2"
            >
              {word}
            </motion.span>
          ))}
        </motion.h1>

        {/* Subtítulo / parágrafo com entrada */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="text-yellow-50 mt-6 text-base md:text-lg leading-relaxed"
        >
          Há mais de uma década, transformamos estilo e cuidado em experiência.
          Nosso time combina técnica, precisão e atenção aos detalhes para oferecer cortes, barbas e cuidados masculinos que valorizam sua personalidade.
        </motion.p>

        {/* Botões */}
        <div className="mt-8 flex flex-col sm:flex-row gap-4">
          <a
            href="#services"
            className="bg-barber-gold text-black px-6 py-3 rounded-full font-semibold
                       hover:scale-105 hover:shadow-lg transition-transform duration-300"
          >
            Ver Serviços
          </a>

          <a
            href="#contact"
            className="text-white border border-neutral-700 px-6 py-3 rounded-full
                       hover:text-barber-gold hover:border-barber-gold hover:scale-105
                       transition-colors transition-transform duration-300"
          >
            Agendar
          </a>
        </div>
      </div>

      {/* ----- IMAGEM COM MOVIMENTO E BORDA OVAL ----- */}
      <div className="md:w-1/2 flex justify-center">
        <motion.div
          className="rounded-full p-1"
          style={{
            background: "conic-gradient(from 0deg, #FFD700, #FFA500, #FFD700, #FFA500)",
          }}
          animate={{
            y: [0, -12, 0, 12, 0],
            rotate: [0, 3, 0, -3, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <motion.img
            src={banner}
            alt="Banner"
            className="w-52 md:w-68 object-cover rounded-full border-4 border-transparent"
          />
        </motion.div>
      </div>
    </section>
  );
}
