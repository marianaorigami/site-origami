
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const Manifesto = () => {
  const principles = [
    {
      title: 'Somos curiosos, não críticos',
      description: 'Investigamos causas e buscamos entender antes de julgar.'
    },
    {
      title: 'Geramos resultados que podemos provar',
      description: 'Impacto real, com dados e evidências.'
    },
    {
      title: 'Excelência técnica e disciplina',
      description: 'Entregamos com consistência e cuidado.'
    },
    {
      title: 'Energia aos compromissos',
      description: 'Foco total nas promessas que fazemos.'
    },
    {
      title: 'Pensamos grande, começamos pequeno',
      description: 'Visão de futuro com pés no chão.'
    }
  ];

  return (
    <section>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-brand-gray">A Essência que Nos Guia</p>
          <h2 className="text-4xl md:text-5xl font-black bg-text-gradient bg-clip-text text-transparent mb-12">Nosso Manifesto</h2>
        </div>

        <div className="grid md:grid-cols-5 gap-8 max-w-6xl mx-auto mb-12">
          {principles.map((principle, index) => (
            <div
              key={index}
              className="text-center group animate-fadeInUp"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="bg-white p-6  transition-all duration-200 hover:scale-105 h-full">
                <h3 className="text-lg font-bold text-brand-gray mb-4 leading-tight">
                  {principle.title}
                </h3>
                <p className="text-brand-gray text-sm leading-relaxed">
                  {principle.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button
            size="lg"
            className="bg-text-gradient font-thin text-brand-white hover:bg-white/90 px-8 py-4 rounded-md text-lg transition-all duration-200 hover:scale-105 group"
          >
            Vamos inovar juntos?
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Manifesto;
