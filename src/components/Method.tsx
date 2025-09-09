"use client";
import { Search, Lightbulb, Users, CheckCircle } from "lucide-react";
import { MotionFade } from "@/components/MotionFade";

const Method = () => {
  const steps = [
    {
      number: 1,
      icon: Search,
      title: "Imersão Estratégica",
      description:
        "Entramos na empresa, ouvimos e identificamos os desafios reais.",
    },
    {
      number: 2,
      icon: Lightbulb,
      title: "Pesquisa e Diagnóstico",
      description:
        "Analisamos cultura, processos e dados para entender o contexto com profundidade.",
    },
    {
      number: 3,
      icon: Users,
      title: "Co-criação e Implementação",
      description:
        "Desenvolvemos e entregamos soluções sob medida, com agilidade e qualidade.",
    },
    {
      number: 4,
      icon: CheckCircle,
      title: "Validação por Métricas",
      description:
        "Medimos os resultados com indicadores claros. Sucesso só vem com impacto real.",
    },
  ];

  return (
    <section className="relative py-24" id="method">
      <img
        src="/image-optimize/bg_line-1024.webp"
        srcSet="/image-optimize/bg_line-1024.webp 1024w, /image-optimize/bg_line-512.webp 512w"
        sizes="100vw"
        alt="Fundo"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

      <div className="container relative mx-auto py-16 px-4 z-40">
        <div className="text-center pb-24">
          <p className="text-white/80">As dobras que geram a solução.</p>
          <h2 className="text-4xl md:text-5xl font-black text-white">
            Método Origami
          </h2>
        </div>

        <div className="flex flex-col md:flex-row md:justify-between mx-auto relative">
          {steps.map((step, index) => (
            <MotionFade
              key={index}
              delay={index * 0.15}
              className="text-center flex flex-col items-center max-w-4xl relative"
            >
              {index < steps.length && (
                <div className="absolute hidden md:block top-5 w-full h-[2px] bg-white/30 -z-10" />
              )}

              <div className="relative bg-brand-white text-brand-dark w-10 h-10 text-xl text-center rounded-full mb-6 flex align-middle items-center justify-center">
                {step.number}
              </div>

              <h3 className="text-xl font-bold text-white mb-4">
                {step.title}
              </h3>
              <p className="text-white/80 text-sm leading-relaxed">
                {step.description}
              </p>
            </MotionFade>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Method;
