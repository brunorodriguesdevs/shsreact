import React from 'react';
import Lottie from 'lottie-react';
import logoLoop from '../assets/logoLoop.json';

export default function Footer() {
  const hasLottie = !!logoLoop;

  return (
    <footer className="border-t border-neutral-800 py-4 sm:py-6 mt-10">
      <div className="max-w-6xl mx-auto px-6 text-center">

        {/* Logo animada menor e responsiva */}
        <div className="mx-auto mb-2 w-20 sm:w-28 opacity-80 hover:scale-105 transition-transform duration-300">
          {hasLottie ? (
            <Lottie
              animationData={logoLoop}
              loop
              autoplay
              style={{ width: 70, height: 70, margin: '0 auto' }}
            />
          ) : (
            <span className="text-white font-semibold tracking-wider text-sm sm:text-base">
              SHS BARBEARIA
            </span>
          )}
        </div>

        {/* Texto discreto */}
        <p className="text-gray-400 text-xs sm:text-sm">
          © {new Date().getFullYear()} SHS BARBEARIA • Todos os direitos reservados
        </p>

        {/* Links opcionais */}
        <div className="flex justify-center gap-4 mt-1 text-gray-400 text-xs sm:text-sm">
          <a href="/privacidade" className="hover:underline">Política de Privacidade</a>
          <a href="/contato" className="hover:underline">Contato</a>
        </div>

      </div>
    </footer>
  );
}
