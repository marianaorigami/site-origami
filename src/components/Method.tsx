
import React from 'react';
import { Search, Lightbulb, Users, CheckCircle } from 'lucide-react';

const Method = () => {
  const steps = [
    {
      number: 1,
      icon: Search,
      title: 'Imersão Estratégica',
      description: 'Fazemos com junto a identificação de mercado e necessidades negócio importante de empresas.'
    },
    {
      number: 2,
      icon: Lightbulb,
      title: 'Prototipação e Diagnóstico',
      description: 'Aceleramos a fase e protativação de desenvolvimento de sistema empresarial e negócios.'
    },
    {
      number: 3,
      icon: Users,
      title: 'Co-criação e Implementação',
      description: 'Desenvolvemos e estabelece, desenvolvendo habilidade de desenvolvimento em setores de trabalho.'
    },
    {
      number: 4,
      icon: CheckCircle,
      title: 'Validação por Métricas',
      description: 'Verificamos os escalas de Implementação dos novamente avaliação e investigação.'
    }
  ];

  return (
    <section className="relative py-24 my-24">

      <img
        src="/bg_line.png"
        alt="Fundo"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

      <div className="container relative mx-auto py-16 px-4 z-40">
        <div className="text-center pb-16">
          <p className="text-white/80">Para todos nossos métodos</p>
          <h2 className="text-4xl md:text-5xl font-black text-white">Método Origami</h2>
        </div>


        <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <div
              key={index}
              className="text-center group animate-fadeInUp flex flex-col items-center"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative bg-brand-dark text-brand-white w-7 h-7 rounded-full mb-6 flex items-start justify-center">
                {step.number}
              </div>

              <h3 className="text-xl font-bold text-white mb-4">
                {step.title}
              </h3>
              <p className="text-white/80 text-sm leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Method;
