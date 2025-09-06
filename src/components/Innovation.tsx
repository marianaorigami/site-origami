import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./Innovation.css";
import { MotionFade } from "./MotionFade";

export default function Innovation() {
  const [active, setActive] = useState(null);

  const sections = [
    {
      id: 1,
      title: "Financiamento da Inovação",
      description:
        "Transformamos a inovação em realidade ao viabilizar projetos que, muitas vezes, ficariam apenas no papel por falta de recursos. Nosso time combina competências jurídicas, de inovação e contabilidade para apoiar sua empresa desde a estruturação inicial do projeto até a conquista efetiva do benefício fiscal ou da verba de financiamento.",
    },
    {
      id: 2,
      title: "Operação da Inovação",
      description:
        "Inovar exige disciplina. Atuamos lado a lado com sua equipe para implantar processos, treinar pessoas e estruturar uma cultura de inovação que se sustenta no longo prazo. Diferente de uma consultoria tradicional, colocamos a mão na massa, entregamos junto e deixamos um legado: profissionais preparados e processos sólidos que permanecem após nossa saída.",
    },
    {
      id: 3,
      title: "Execução da Inovação",
      description:
        "Transformamos ideias em soluções concretas. Conduzimos a descoberta e a entrega de novos produtos e serviços digitais utilizando metodologias de ponta — Lean Startup, Agile, 10 Types of Innovation, DevSecOps e gestão moderna de produtos.",
    },
  ];

  return (
    <motion.section
      className="innovation-section"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <MotionFade className="text-center mb-8">
        <p className="text-brand-gray mb-4">
          Como realizamos a inovação na prática
        </p>
        <h2 className="text-4xl md:text-5xl font-black bg-text-gradient bg-clip-text text-transparent">
          Inovação de Ponta-a-Ponta
        </h2>
      </MotionFade>

      <div className="innovation-wrapper hidden md:flex">
        <motion.div
          className="infinite-container"
          animate={{ y: [0, -2, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        >
          <motion.img
            src="/img/infinite.svg"
            alt="Símbolo Infinito"
            className="infinite-image"
            animate={{
              filter: ["hue-rotate(0deg)", "hue-rotate(20deg)"],
            }}
            transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
          />

          <motion.button
            whileHover={{ scale: 1.1 }}
            className="node-button node-financiamento text-3xl"
            onMouseEnter={() => setActive(1)}
            onMouseLeave={() => setActive(null)}
          >
            Financiamento
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.1 }}
            className="node-button node-operacao text-3xl"
            onMouseEnter={() => setActive(2)}
            onMouseLeave={() => setActive(null)}
          >
            Operação
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.1 }}
            className="node-button node-execucao text-3xl"
            onMouseEnter={() => setActive(3)}
            onMouseLeave={() => setActive(null)}
          >
            Execução
          </motion.button>
        </motion.div>

        <AnimatePresence>
          {active && (
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 40 }}
              transition={{ duration: 0.4 }}
              className="info-box"
            >
              <h3 className="text-xl mb-4 font-black text-brand-green">
                {sections.find((s) => s.id === active)?.title}
              </h3>
              <p>{sections.find((s) => s.id === active)?.description}</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="vertical-flow md:hidden flex flex-col w-full px-4 mt-8 space-y-[-20px]">
        {sections.map((s) => (
          <motion.div
            key={s.id}
            className="circle-node"
            whileHover={{ scale: 1.05 }}
            onClick={() => setActive(s.id)}
          >
            <div className="circle-shape flex items-center justify-center">
              <p className="circle-label bg-text-gradient bg-clip-text text-transparent text-xl font-black"><span className="z-50 text-brand-gray-dark">{s.title}</span></p>
            </div>
          </motion.div>
        ))}

        <AnimatePresence>
          {active && (
            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="fixed bottom-0 left-0 w-full bg-white shadow-2xl rounded-t-2xl p-6 z-50"
            >
              <button
                className="absolute top-3 right-6 text-gray-500 font-bold"
                onClick={() => setActive(null)}
              >
                ✕
              </button>
              <h3 className="text-xl mb-4 font-black text-brand-green">
                {sections.find((s) => s.id === active)?.title}
              </h3>
              <p>{sections.find((s) => s.id === active)?.description}</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.section>
  );
}
