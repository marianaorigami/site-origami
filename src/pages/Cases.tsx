import Footer from "@/components/Footer";
import Header from "@/components/Header";

const Cases = () => {

    const cards = [
        {
            tag: 'Manufatura',
            title: 'Transformação Digital Industrial',
            subtitle: 'IoT • Análise de Dados • Indústria 4.0',
            description: 'Desenvolvimento de sistema IoT para monitoramento em tempo real da produção.',
        },
        {
            tag: 'Tecnologia',
            title: 'Plataforma de Gestão de Inovação',
            subtitle: 'Software • Gestão • Inovação',
            description: 'Software proprietário para gerenciar portfólio de inovação e P&D.',
        },
        {
            tag: 'Energia',
            title: 'Programa de Inovação Aberta',
            subtitle: 'Inovação Aberta • Startup • P&D',
            description: 'Estruturação completa de programa de conexão com startups e academia.',
        },
        // Repetição dos mesmos cards para simular a grade da imagem
        {
            tag: 'Manufatura',
            title: 'Transformação Digital Industrial',
            subtitle: 'IoT • Análise de Dados • Indústria 4.0',
            description: 'Desenvolvimento de sistema IoT para monitoramento em tempo real da produção.',
        },
        {
            tag: 'Tecnologia',
            title: 'Plataforma de Gestão de Inovação',
            subtitle: 'Software • Gestão • Inovação',
            description: 'Software proprietário para gerenciar portfólio de inovação e P&D.',
        },
        {
            tag: 'Energia',
            title: 'Programa de Inovação Aberta',
            subtitle: 'Inovação Aberta • Startup • P&D',
            description: 'Estruturação completa de programa de conexão com startups e academia.',
        },
        {
            tag: 'Manufatura',
            title: 'Transformação Digital Industrial',
            subtitle: 'IoT • Análise de Dados • Indústria 4.0',
            description: 'Desenvolvimento de sistema IoT para monitoramento em tempo real da produção.',
        },
        {
            tag: 'Tecnologia',
            title: 'Plataforma de Gestão de Inovação',
            subtitle: 'Software • Gestão • Inovação',
            description: 'Software proprietário para gerenciar portfólio de inovação e P&D.',
        },
        {
            tag: 'Energia',
            title: 'Programa de Inovação Aberta',
            subtitle: 'Inovação Aberta • Startup • P&D',
            description: 'Estruturação completa de programa de conexão com startups e academia.',
        },
    ]

    return (
        <div className="min-h-screen bg-white">
            <Header />


            {/* Contact Form Section */}
            <section className="container mx-auto w-full pt-24 flex flex-col items-center gap-9 pb-16">

                <div className="text-center">
                    <p className="text-brand-gray">Casos que provam nosso método em ação</p>
                    <h2 className="text-4xl md:text-5xl font-black bg-text-gradient bg-clip-text text-transparent mb-12">Cases de Sucesso</h2>
                </div>


                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {cards.map((card, index) => (
                        <div
                            key={index}
                            className="bg-white p-4 flex flex-col gap-4 border rounded-md overflow-hidden hover:shadow-md transition-all duration-200 hover:scale-105 group animate-fadeInUp"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <div className="h-48 bg-gray-300"></div>
                            <div className="flex flex-col gap-8">
                                <div>
                                    <div className="text-xs font-thin text-brand-gray bg-gray-300 w-fit px-2 rounded-sm">
                                        {card.tag}
                                    </div>
                                    <h3 className="text-xl font-semibold text-brand-dark">
                                        {card.title}
                                    </h3>
                                    <p className='text-xs text-brand-gray'>{card.subtitle}</p>
                                </div>
                                <p className="mb-4 text-sm font-light leading-relaxed">
                                    {card.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <Footer />

        </div>
    );
};

export default Cases;
