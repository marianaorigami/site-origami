"use client";
import { MotionFade } from "@/components/MotionFade";
import { useState, useEffect } from "react";
import { motion, useAnimation, AnimatePresence } from "framer-motion";

const Services = () => {
  const circles = [{ title: "Financiamento", text: "Transformamos a inovação em realidade ao viabilizar projetos que, muitas vezes, ficariam apenas no papel por falta de recursos. Nosso time combina competências jurídicas, de inovação e contabilidade para apoiar sua empresa desde a estruturação inicial do projeto até a conquista efetiva do benefício fiscal ou da verba de financiamento. Atuamos em todo o ciclo, garantindo segurança técnica e regulatória em cada etapa e permitindo que projetos de alto risco tecnológico sejam executados sem comprometer o fluxo de caixa e com maior previsibilidade financeira." }, { title: "Operação", text: "Inovar exige disciplina. Atuamos lado a lado com sua equipe para implantar processos, treinar pessoas e estruturar uma cultura de inovação que se sustenta no longo prazo. Diferente de uma consultoria tradicional, colocamos a mão na massa, entregamos junto e deixamos um legado: profissionais preparados e processos sólidos que permanecem após nossa saída. Dessa forma, cada projeto gera aprendizado prático, consolida a mentalidade de inovação como base para resultados consistentes de negócio no futuro e quebra o paradigma de que o caminho da empresa precisa ser definido apenas pelos resultados do passado." }, { title: "Execução", text: "Transformamos ideias em soluções concretas. Conduzimos a descoberta e a entrega de novos produtos e serviços digitais utilizando metodologias de ponta — Lean Startup, Agile, 10 Types of Innovation, DevSecOps e gestão moderna de produtos. Trabalhamos com métricas claras de sucesso em cada etapa, o que aumenta exponencialmente as chances de retorno sobre cada iniciativa e permite que sua empresa lance produtos validados no mercado com mais velocidade, menor risco e maior competitividade." },];

  const [hoverIndex, setHoverIndex] = useState<number | null>(null);

  return (
    <section className="pb-8 pt-40 overflow-hidden relative" id="Services">
      <div className="container mx-auto px-6 md:px-16">
        <MotionFade className="text-center mb-24">
          <p className="text-brand-gray mb-4">
            Como realizamos a inovação na prática
          </p>
          <h2 className="text-4xl md:text-5xl font-black bg-text-gradient bg-clip-text text-transparent">
            Inovação de Ponta-a-Ponta
          </h2>
        </MotionFade>

        <AnimatePresence>
          {hoverIndex !== null && (
            <motion.div
              key="overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-30"
            />
          )}
        </AnimatePresence>

        <MotionFade delay={0.4} className="flex justify-center items-center gap-[-40px] mt-10 relative z-40">
          {circles.map((circle, index) => (
            <HoverCircle
              key={index}
              title={circle.title}
              text={circle.text}
              index={index}
              hoverIndex={hoverIndex}
              setHoverIndex={setHoverIndex}
            />
          ))}
        </MotionFade>
      </div>
    </section>
  );
};

const HoverCircle = ({ title, text, index, hoverIndex, setHoverIndex }) => {
  const controls = useAnimation();
  const isHovered = hoverIndex === index;

  useEffect(() => {
    if (isHovered) {
      controls.start({
        backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
        transition: { duration: 3, repeat: Infinity, ease: "linear" },
      });
    } else {
      controls.stop();
    }
  }, [isHovered, controls]);

  return (
    <motion.div
      className="relative flex justify-center items-center w-[450px] h-[450px] rounded-full font-bold cursor-pointer transition-all duration-500 ease-in-out"
      style={{
        background: isHovered
          ? "linear-gradient(to right, #10B981, #059669, #1C3C36)"
          : "linear-gradient(90deg, #FFFFFF, #EDEDED, #CDCDCD)",
        backgroundSize: "400% 400%",
        marginLeft: "-20px",
        border: "8px solid white",
        color: "#616161",
      }}
      animate={{
        scale: isHovered ? 1.2 : 1,
        zIndex: isHovered ? 100 : 1,
        opacity: isHovered ? 1 : 0.8,
      }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      onMouseEnter={() => setHoverIndex(index)}
      onMouseLeave={() => setHoverIndex(null)}
    >
      {isHovered ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ type: "spring", stiffness: 200, damping: 12 }}
          className="absolute text-center py-6 px-12"
          style={{ color: "#FFFFFF" }}
        >
          <h1 className="text-3xl mb-5">{title}</h1>
          <div className="font-normal text-xs">{text}</div>
        </motion.div>
      ) : (
        <span className="text-3xl font-bold">{title}</span>
      )}
    </motion.div>
  );
};

export default Services;
