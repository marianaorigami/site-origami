"use client";
import { MoveRight } from 'lucide-react';
import ButtonLink from './ui/buttonlink';
import { MotionFade } from "@/components/MotionFade";

const Manifesto = () => {
  const principles = [
    {
      title: 'Somos curiosos mais do que críticos.',
      description: 'Investigamos causas e buscamos entender antes de julgar.'
    },
    {
      title: 'Geramos resultados que podemos provar.',
      description: 'Nossos impactos são mensurados com dados e evidências reais.'
    },
    {
      title: 'Excelência técnica e disciplina.',
      description: 'Entregamos com consistência e a qualidade de quem tem experiência de verdade.'
    },
    {
      title: 'Energia aos compromissos.',
      description: 'Cumprimos nossas promessas com foco e dedicação, tanto com clientes quanto entre colegas.'
    },
    {
      title: 'Pensamos grande, começamos pequeno.',
      description: 'Temos visão de futuro, mas atuamos com ação e presença no agora.'
    }
  ];

  return (
    <section id='manifest'>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-brand-gray">A Essência que Nos Guia</p>
          <h2 className="text-4xl md:text-5xl font-black bg-text-gradient bg-clip-text text-transparent mb-12">
            Nosso Manifesto
          </h2>
        </div>

        <div className="grid md:grid-cols-5 mx-auto mb-12 gap-6">
          {principles.map((principle, index) => (
            <MotionFade
              key={index}
              delay={index * 0.15}
              className="text-center h-full"
            >
              <div className="bg-white p-6 w-full transition-all duration-200 hover:scale-105 h-full">
                <h3 className="text-lg font-bold text-brand-gray mb-4 leading-tight">
                  {principle.title}
                </h3>
                <p className="text-brand-dark text-sm leading-relaxed">
                  {principle.description}
                </p>
              </div>
            </MotionFade>
          ))}
        </div>

        <div className="text-center">
          <ButtonLink
            to="/contactus"
            className="bg-brand-dark font-thin text-brand-white"
          >
            Inove Conosco <MoveRight className="h-4 w-4 ml-2" />
          </ButtonLink>
        </div>
      </div>
    </section>
  );
};

export default Manifesto;
