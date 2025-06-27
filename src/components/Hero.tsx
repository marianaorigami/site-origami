
import React from 'react';
import { ArrowRight } from 'lucide-react';
import GeometricBackground from './GeometricBackground';
import { Link } from 'react-router-dom';
import ButtonLink from './ui/buttonlink';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-svh flex items-center justify-center overflow-hidden ">

      <img
        src="/background/bg.png"
        alt="Fundo"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

      <div className="absolute top-0 right-0 w-64  md:top-10 md:right-10 md:w-96 md:h-96 opacity-20 animate-spin360">
        <img
          src="/background/icon_animated.png"
          alt=""
          className="w-full h-full object-contain"
        />
      </div>

      <div className="absolute w-56 left-10 bottom-20 md:bottom-56 md:left-10 md:w-72 md:h-80 opacity-15 animate-spin360">
        <img
          src="/background/icon_animated.png"
          alt=""
          className="w-full h-full object-contain"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h1 className="text-5xl md:text-7xl font-black mb-6 animate-fadeInUp">
            Inove como uma startup.
            <br />
            <span className="text-white/90">Cresça como uma gigante.</span>
          </h1>

          <p className="font-thin text-xl md:text-2xl mb-8 text-white/80 max-w-2xl mx-auto animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
            Laboratório de inovação que leva agilidade às grandes empresas.            <br />
            <u>Unindo método, criatividade e resultados reais.</u>

          </p>

          <div className="animate-fadeInUp" style={{ animationDelay: '0.4s' }}>
            <ButtonLink
              to="/contactus"
              className="bg-brand-dark font-thin text-brand-white px-8 py-4 text-lg"
            >
              Vamos inovar juntos?
            </ButtonLink> 
          </div>
        </div>
      </div>

    </section>
  );
};

export default Hero;
