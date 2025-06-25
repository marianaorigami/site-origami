
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const Cases = () => {
  const cases = [
    {
      title: 'Transformação Digital Industrial',
      tag: "Manufatura",
      subtitle: 'Indústria · Inovação',
      description: 'Desenvolvimento de sistema de dados para implementação de novas tecnologias de produção.',
      image: 'bg-gray-300'
    },
    {
      title: 'Plataforma de Gestão de Inovação',
      tag: "Manufatura",
      subtitle: 'Tecnologia · Startup',
      description: 'Plataforma inovadora para gestão de desenvolvimento e projetos de inovação.',
      image: 'bg-gray-300'
    },
    {
      title: 'Programa de Inovação Aberta',
      tag: "Manufatura",
      subtitle: 'Corporativo · Strategy',
      description: 'Hub de inovação corporativa para desenvolvimento entre múltiplas subsidiárias.',
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
              className="bg-white p-4 flex flex-col gap-4 border rounded-md overflow-hidden shadow-sm hover:shadow-md transition-all duration-200 hover:scale-105 group animate-fadeInUp"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`h-48 ${caseItem.image}`}></div>
              <div className="flex flex-col gap-8">
                <div>
                  <div className="text-xs font-light text-brand-gray bg-gray-300 w-fit px-2 rounded-sm">
                    {caseItem.tag}
                  </div>
                  <h3 className="text-xl font-medium text-brand-dark">
                    {caseItem.title}
                  </h3>
                  <p className='text-xs text-brand-gray'>{caseItem.subtitle}</p>
                </div>
                <p className="mb-4 leading-relaxed">
                  {caseItem.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            variant="outline"
            size="lg"
            className="border-brand-green text-brand-green hover:bg-brand-green hover:text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-200 hover:scale-105"
          >
            Ver todos os cases
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Cases;
