import React from "react";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="px-6 py-20 bg-neutral-950">
      <div className="max-w-3xl mx-auto text-center">

        {/* Título */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl sm:text-5xl font-extrabold mb-4 text-white"
        >
          Entre em Contato
        </motion.h2>

        {/* Subtítulo */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-gray-200 text-lg sm:text-xl mb-12"
        >
          Agende seu horário de forma rápida e prática. Estamos prontos para te atender!
        </motion.p>

        {/* Card de contato */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="bg-neutral-900 border border-neutral-800 p-8 sm:p-12 rounded-2xl shadow-xl flex flex-col items-center gap-6 sm:gap-8"
        >
          
          <h3 className="text-2xl sm:text-3xl font-semibold text-white">WhatsApp</h3>
          
          <p className="text-gray-200 text-center sm:text-lg">
            Clique abaixo e fale com a barbearia diretamente pelo WhatsApp.
          </p>

          {/* Botão moderno */}
          <a
            href="https://wa.me/553798023911"
            target="_blank"
            rel="noreferrer"
            className="bg-gradient-to-r from-green-400 via-green-500 to-green-600 
                       text-black font-bold px-10 py-4 rounded-full text-lg sm:text-xl
                       hover:scale-105 hover:shadow-[0_0_25px_rgba(0,255,0,0.5)]
                       transition-transform duration-300 flex items-center justify-center gap-3"
          >
            <motion.span
              animate={{ y: [0, -4, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              💬
            </motion.span>
            Falar no WhatsApp
          </a>

        </motion.div>
      </div>
    </section>
  );
}
