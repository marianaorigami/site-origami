
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import GeometricBackground from './GeometricBackground';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-svh flex items-center justify-center overflow-hidden ">

      <img 
        src="/background/bg.png" 
        alt="Fundo" 
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

      <GeometricBackground />

      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h1 className="text-5xl md:text-7xl font-black mb-6 animate-fadeInUp">
            Inove como uma startup.
            <br />
            <span className="text-white/90">Cresça como uma gigante.</span>
          </h1>
          
          <p className="font-extralight text-xl md:text-2xl mb-8 text-white/80 max-w-2xl mx-auto animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
            Laboratório de inovação que impulsiona grandes empresas.
            <br />
            <u>União e método de trabalho de startups reais.</u>
            
          </p>
          
          <div className="animate-fadeInUp" style={{ animationDelay: '0.4s' }}>
            <Button 
              size="lg"
              className="bg-white text-brand-green hover:bg-white/90 px-8 py-4 rounded-md text-lg font-semibold transition-all duration-200 hover:scale-105 group"
            >
              Vamos inovar juntos?
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    
    </section>
  );
};

export default Hero;
