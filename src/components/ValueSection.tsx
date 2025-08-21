"use client";
import { Users, TrendingUp, Zap, GraduationCap } from 'lucide-react';
import { MotionFade } from "@/components/MotionFade";

const ValueSection = () => {
  const values = [
    {
      icon: GraduationCap,
      title: 'Capacitação',
      subtitle: 'Formamos equipes preparadas para inovar.',
      description: 'Oferecemos capacitação completa para desenvolver tecnologias de desenvolvimento, aplicações e gestão operacional na empresa.'
    },
    {
      icon: Users,
      title: 'Negócios e Gestão',
      subtitle: 'Convertendo ideias em recursos financeiros estratégicos.',
      description: 'Construímos negócios sustentáveis com performance avançada de métricas operacionais, garantindo a experiência necessária importantes.'
    },
    {
      icon: TrendingUp,
      title: 'Investimentos e Incentivos',
      subtitle: 'Criamos e gerimos oportunidades estratégicas de crescimento.',
      description: 'Acesso a fundos e investimentos focados para complementar a capacidade de investir em crescimento abrangendo soluções.'
    },
    {
      icon: Zap,
      title: 'Inovação Colaborativa',
      subtitle: 'Potencializamos soluções com parcerias inteligentes.',
      description: 'Combinamos sua empresa cliente ao universalismo e esfera logísticas que geram ideias inovadoras e criar soluções mais mais elevados que de tecnologia e desenvolvimento.'
    }
  ];

  return (
    <section className="py-20 bg-white" id='value'>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-brand-gray">Nossos caminhos para transformar grandes empresas</p>
          <h2 className="text-4xl md:text-5xl font-black bg-text-gradient bg-clip-text text-transparent md:h-16">
            Como geramos valor
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {values.map((value, index) => (
            <div className="flex items-start space-x-6 group">
              <MotionFade key={index} delay={index * 0.15} className='flex flex-col gap-8 border p-6 h-full'>
                <div className='flex flex-row gap-4 justify-between'>
                  <div className='text-brand-dark mb-3'>
                    <h3 className='font-medium text-xl'>{value.title}</h3>
                    <h3>{value.subtitle}</h3>
                  </div>

                  <div className="w-12 h-12 bg-brand-green rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                    <value.icon className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div>
                  <p className="text-brand-gray leading-relaxed">{value.description}</p>
                </div>
              </MotionFade>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValueSection;
