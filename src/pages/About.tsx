import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { MotionFade } from "@/components/MotionFade";

const About = () => {
  return (
    <div className="min-h-screen font-poppins">
      <Header />

      <section className="pt-24 px-4">
        <div className="text-center mb-16">
          <p className="text-brand-gray text-lg">Como nasceu a Origami</p>
          <h2 className="text-4xl md:text-5xl font-black bg-text-gradient bg-clip-text text-transparent">
            Quem Somos
          </h2>
        </div>

        <div className="max-w-6xl mx-auto flex flex-col gap-12">
          <MotionFade delay={0.1}>
            <div className="flex flex-col-reverse md:flex-row items-center gap-12">
              <div className="flex-1 text-black text-justify tracking-tight leading-relaxed">
                Fundada em 2023, a Origami Lab conta com o propósito de transformar negócios através da inovação com disciplina. Sediada no Centro-Oeste de Minas Gerais, somos pioneiros na região, unimos estratégia, tecnologia e design para ajudar organizações a se reinventarem frente aos desafios do presente e do futuro.
                Nosso time é liderado por profissionais com sólida experiência em projetos nacionais e internacionais:
              </div>
            </div>
          </MotionFade>

          <MotionFade delay={0.2}>
            <div className="flex flex-col md:flex-row items-center justify-between gap-12 border px-24 py-8 transition-all duration-300 hover:shadow-md">
              <div className="md:w-1/2 text-black text-justify text-lg tracking-tight leading-relaxed">
                Victor Couto, sócio-fundador, atua há mais de 15 anos liderando iniciativas de inovação e transformação digital. Com passagens por projetos no Brasil e no exterior, é especialista em usar tecnologia e design estratégico para impulsionar resultados e gerar impacto real nos negócios.               </div>
              <div className="md:w-1/2 w-full max-w-[300px] aspect-square shadow-[12px_12px_0_0_#2D4A4C]">
                <img
                  src="/people/victor_picture.jpeg"
                  alt="Victor"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </MotionFade>

          <MotionFade delay={0.3}>
            <div className="flex flex-col md:flex-row-reverse items-center justify-between gap-12 mb-12 border px-24 py-8 transition-all duration-300 hover:shadow-md">
              <div className="md:w-1/2 text-black text-justify text-lg tracking-tight leading-relaxed">
                Maria Cecília Coelho, engenheira civil com MBA em Inovação, é referência na gestão de produtos digitais. Com uma trajetória de mais de 8 anos em tecnologia, marcada pela entrega de soluções utilizadas por milhões de brasileiros e pela atuação em projetos internacionais, destaca-se por sua visão estratégica, excelência técnica e forte liderança.
              </div>
              <div className="md:w-1/2 w-full max-w-[300px] aspect-square shadow-[12px_12px_0_0_#00AF69]">
                <img
                  src="/people/cecilia_picture.jpeg"
                  alt="Maria Cecília"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </MotionFade>

          <MotionFade delay={0.4}>
            <div className="flex flex-col-reverse md:flex-row items-center gap-12 mb-16">
              <h2 className="text-3xl md:text-4xl text-center font-black bg-text-gradient bg-clip-text text-transparent">
                Trabalhamos para transformar desafios em soluções concretas, com método, visão e impacto real.
              </h2>
            </div>
          </MotionFade>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
