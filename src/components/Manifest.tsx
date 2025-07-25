
import { ArrowRight, MoveRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import ButtonLink from './ui/buttonlink';

const Manifesto = () => {
  const principles = [
    {
      title: 'Somos curiosos, não críticos',
      description: 'Investigamos com foco no entendimento.'
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

        <div className="grid md:grid-cols-5 mx-auto mb-12">
          {principles.map((principle, index) => (
            <div
              key={index}
              className="text-center group animate-fadeInUp"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="bg-white p-6 w-full  transition-all duration-200 hover:scale-105 h-full">
                <h3 className="text-lg font-bold text-brand-gray mb-4 leading-tight">
                  {principle.title}
                </h3>
                <p className="text-brand-dark text-sm leading-relaxed">
                  {principle.description}
                </p>
              </div>
            </div>
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
