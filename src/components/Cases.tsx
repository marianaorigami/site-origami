
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, MoveRight } from 'lucide-react';

const Cases = () => {
  const cases = [
    {
      title: 'Transformação Digital Industrial',
      tag: "Manufatura",
      subtitle: 'IoT · Análise de Dados · Indústria 4.0',
      description: 'Desenvolvimento de sistema IoT para monitoramento em tempo real da produção.',
      image: 'bg-gray-300'
    },
    {
      title: 'Plataforma de Gestão de Inovação',
      tag: "Manufatura",
      subtitle: 'Software · Gestão · Inovação',
      description: 'Software proprietário para gerenciar portfólio de inovação e P&D.',
      image: 'bg-gray-300'
    },
    {
      title: 'Programa de Inovação Aberta',
      tag: "Manufatura",
      subtitle: 'Inovação Aberta · Startups · P&D',
      description: 'Estruturação completa de programa de conexão com startups e academia.',
      image: 'bg-gray-300'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-brand-gray mb-4">Casos que provam nosso método em ação</p>
          <h2 className="text-4xl md:text-5xl font-black bg-text-gradient bg-clip-text text-transparent">Cases de Sucesso</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {cases.map((caseItem, index) => (
            <div
              key={index}
              className="bg-white p-4 flex flex-col gap-4 border rounded-md overflow-hidden hover:shadow-md transition-all duration-200 hover:scale-105 group animate-fadeInUp"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`h-48 ${caseItem.image}`}></div>
              <div className="flex flex-col gap-8">
                <div>
                  <div className="text-xs font-thin text-brand-gray bg-gray-300 w-fit px-2 rounded-sm">
                    {caseItem.tag}
                  </div>
                  <h3 className="text-xl font-semibold text-brand-dark">
                    {caseItem.title}
                  </h3>
                  <p className='text-xs text-brand-gray'>{caseItem.subtitle}</p>
                </div>
                <p className="mb-4 text-sm font-light leading-relaxed">
                  {caseItem.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-end mt-12">
          <Button
            className="text-thin bg-brand-dark hover:bg-brand-dark text-white px-6 py-2 rounded-md transition-all duration-200 hover:scale-105"
          >
            Ver todos os cases <MoveRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Cases;
