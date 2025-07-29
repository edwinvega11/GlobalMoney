import React from "react";
import Navbar from "./Navbar";

const HeroSection = () => {
  const handleCtaKeyDown = (e) => {
    if (e.key === "Enter" || e.key === " ") {
      alert("Get Started clicked!");
    }
  };

  return (
    <section
      id="hero"
      className="relative flex flex-col md:flex-row items-center justify-between min-h-[80vh] px-8 md:px-24 py-12 md:py-24 bg-gradient-to-br from-black via-blue-900 to-blue-600 overflow-hidden"
    >
      {/* Navbar overlay */}
      <div className="absolute top-0 left-0 w-full">
        <Navbar />
      </div>
      {/* Left: Text */}
      <div className="w-full md:w-1/2 flex flex-col items-start justify-center text-left z-10 mt-16 md:mt-0 animate-fade-in-up">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-4 tracking-tight">
          Bienvenido a  <span className="text-blue-300">Global Money</span>
        </h1>
        <p className="text-base sm:text-2xl max-w-lg mb-8 text-gray-200">
        En Global Money nos especializamos en la administración de Cajas de Ahorro. 
        </p>
        <p className="text-base sm:text-2xl max-w-lg mb-8 text-gray-200">
          Fundada en 2010 por un equipo de profesionales del sector bancario con más de 100+ años de experiencia combinada.
        </p>
        <p className="text-base sm:text-2xl max-w-lg mb-8 text-gray-200">
        Apoyamos a las empresas en la organización del ahorro, el control de recursos y el acceso a beneficios como anticipos y rendimientos, todo desde medios digitales.
        </p>
        
      </div>
      {/* Right: Image Placeholder */}
      <div className="w-full md:w-1/2 flex items-center justify-center mb-8 md:mb-0 z-10 animate-fade-in-up">
        <img src="/Image-2-GLS.png" />
      </div>
      {/* Optional: Decorative gradient blur */}
      <div className="absolute -top-32 -right-32 w-96 h-96 bg-blue-500 opacity-30 rounded-full blur-3xl pointer-events-none" />
    </section>
  );
};

export default HeroSection; 