
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, MoveRight } from 'lucide-react';
import GeometricBackground from './GeometricBackground';

const CTA = () => {
  return (
    <section className="relative min-h-svh py-20 flex items-center justify-center overflow-hidden">

      <img
        src="/background/bg.png"
        alt="Fundo"
        className="absolute rotate-180 inset-0 w-full h-full object-cover z-0"
      />

      <GeometricBackground />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 animate-fadeInUp">
            Pronto para avançar com inovação estratégica?
          </h2>

          <p className="text-xl font-thin md:text-2xl mb-8 text-white/80 max-w-2xl mx-auto animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
            Damos o próximo passo ao seu lado, com método, clareza e resultados reais.
          </p>

          <div className="animate-fadeInUp" style={{ animationDelay: '0.4s' }}>
            <Button
              className="font-thin text-lg bg-brand-white hover:bg-brand-dark text-brand-gray-dark px-4 py-2 rounded-md transition-all duration-200 hover:scale-105"
            >
              Entre em contato <MoveRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
