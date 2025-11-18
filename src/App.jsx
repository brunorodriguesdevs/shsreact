import React from "react";
import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import Services from './components/Services.jsx'
import Reviews from './components/Reviews.jsx'   
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

export default function App(){
  return (
    <div className="min-h-screen bg-neutral-900 text-white">
      <Header />
      <main className="pt-24">
        <Hero />
        <Services />
        <Reviews />     
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
