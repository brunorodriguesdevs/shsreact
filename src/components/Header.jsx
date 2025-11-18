import React, { useState, useEffect } from 'react';
import logo from '../assets/LOGO.png';

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-black/90 shadow-lg' : 'bg-black/60 backdrop-blur-sm'} border-b border-neutral-800`}>
      <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <div className="flex items-center">
          <img 
            src={logo} 
            alt="SHS" 
            className="w-14 h-14 sm:w-16 sm:h-16 object-contain hover:scale-105 transition-transform duration-300"   
          />
        </div>

        {/* Menu Desktop */}
        <div className="hidden md:flex items-center gap-6">
          <a href="#home" className="nav-pill text-white">Início</a>
          <a href="#services" className="nav-pill text-white">Serviços</a>
          <a href="#testimonials" className="nav-pill text-white">Avaliações</a>
          <a href="#contact" className="nav-pill text-white">Contato</a>
        </div>

        {/* Botão Agendar Desktop */}
        <a 
          href="#contact" 
          className="ml-4 bg-barber-gold text-black px-5 py-2 rounded-full font-semibold hidden md:inline-block hover:scale-105 transition-transform duration-300 shadow-md"
        >
          Agendar
        </a>

        {/* Botão Mobile */}
        <button 
          className="md:hidden text-white"
          onClick={() => setOpen(!open)}
        >
          {open ? (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-7 h-7">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 5.25h16.5M3.75 12h16.5M3.75 18.75h16.5" />
            </svg>
          )}
        </button>
      </nav>

      {/* MENU MOBILE DROPDOWN */}
      {open && (
        <div className="md:hidden bg-neutral-900 border-t border-neutral-800 px-6 py-4 flex flex-col gap-4 animate-slide-down">
          <a onClick={() => setOpen(false)} href="#home" className="text-white">Início</a>
          <a onClick={() => setOpen(false)} href="#services" className="text-white">Serviços</a>
          <a onClick={() => setOpen(false)} href="#testimonials" className="text-white">Avaliações</a>
          <a onClick={() => setOpen(false)} href="#contact" className="text-white">Contato</a>

          <a 
            href="#contact" 
            className="bg-barber-gold text-black px-4 py-2 rounded-full font-semibold w-fit hover:scale-105 transition-transform duration-300 shadow-md"
          >
            Agendar
          </a>
        </div>
      )}

      {/* CSS Animado para dropdown */}
      <style jsx>{`
        @keyframes slide-down {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-slide-down { animation: slide-down 0.3s ease-out; }
        .nav-pill {
          position: relative;
          font-weight: 500;
          padding-bottom: 2px;
        }
        .nav-pill::after {
          content: '';
          position: absolute;
          width: 0%;
          height: 2px;
          bottom: 0;
          left: 0;
          background-color: #d4af37;
          transition: width 0.3s ease-in-out;
        }
        .nav-pill:hover::after { width: 100%; }
      `}</style>
    </header>
  );
}
