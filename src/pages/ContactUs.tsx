import Header from "@/components/Header";
import ButtonLink from "@/components/ui/buttonlink";

const ContactUs = () => {
    return (
        <div className="bg-white font-poppins">
            <Header />


            {/* Contact Form Section */}
            <section className="mx-auto min-h-screen w-full pt-24 flex flex-col items-center gap-9 bg-text-gradient">

                <div className="text-center mb-8">
                    <p className="text-brand-white mb-4">Entenda mais sobre o universo Origami</p>
                    <h2 className="text-4xl md:text-5xl font-black text-brand-white">Vamos conversar?</h2>
                </div>

                <div className="container flex flex-col items-start gap-6 w-full max-w-6xl mx-auto mb-12">

                    {/* First Row - Nome and Sobrenome */}
                    <div className="flex items-start gap-6 w-full flex-col md:flex-row">
                        <div className="flex flex-col justify-center items-start gap-2 flex-1 w-full">
                            <label className="text-white text-center text-sm font-normal tracking-[-0.96px]">
                                Nome
                            </label>
                            <input
                                type="text"
                                className="flex h-[34px] px-4 py-2 justify-center items-center gap-[10px] w-full rounded-lg border border-background-secondary bg-white"
                            />
                        </div>
                        <div className="flex flex-col justify-center items-start gap-2 flex-1 w-full">
                            <label className="text-white text-center text-sm font-normal tracking-[-0.96px]">
                                Sobrenome
                            </label>
                            <input
                                type="text"
                                className="flex h-[34px] px-4 py-2 justify-center items-center gap-[10px] w-full rounded-lg border border-background-secondary bg-white"
                            />
                        </div>
                    </div>

                    {/* Second Row - Email and Telefone */}
                    <div className="flex items-start gap-6 w-full flex-col md:flex-row">
                        <div className="flex flex-col justify-center items-start gap-2 flex-1 w-full">
                            <label className="text-white text-center text-sm font-normal tracking-[-0.96px]">
                                Email
                            </label>
                            <input
                                type="email"
                                className="flex h-[34px] px-4 py-2 justify-center items-center gap-[10px] w-full rounded-lg border border-background-secondary bg-white"
                            />
                        </div>
                        <div className="flex flex-col justify-center items-start gap-2 flex-1 w-full">
                            <label className="text-white text-center text-sm font-normal tracking-[-0.96px]">
                                Telefone
                            </label>
                            <input
                                type="tel"
                                className="flex h-[34px] px-4 py-2 justify-center items-center gap-[10px] w-full rounded-lg border border-background-secondary bg-white"
                            />
                        </div>
                    </div>

                    {/* Fourth Row - Mensagem */}
                    <div className="flex items-start gap-6 w-full">
                        <div className="flex flex-col justify-center items-start gap-2 flex-1">
                            <label className="text-white text-center text-sm font-normal tracking-[-0.96px]">
                                Mensagem
                            </label>
                            <textarea
                                rows={6}
                                className="flex px-4 py-2 justify-center items-start gap-[10px] w-full rounded-lg border border-background-secondary bg-white resize-none"
                                placeholder="Digite sua mensagem..."
                            />
                        </div>
                    </div>

                    {/* Submit Button */}
                    <div className="flex justify-center items-center w-full mt-8">
                        <ButtonLink
                            to="/"
                            className="bg-brand-dark text-brand-white"
                        >
                            Enviar mensagem
                        </ButtonLink>
                    </div>
                </div>
            </section>

            {/* Copyright */}
            <div className="flex py-2 justify-center items-center gap-[10px] w-full bg-background-secondary">
                <div className="text-text-secondary text-[8px] font-normal tracking-[-0.64px]">
                    © 2025 Origami Lab. Todos os direitos reservados.
                </div>
            </div>
        </div>
    );
};

export default ContactUs;
