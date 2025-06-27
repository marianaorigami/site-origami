import Header from "@/components/Header";

const ContactUs = () => {
    return (
        <div className="min-h-screen bg-white">
            <Header />


            {/* Contact Form Section */}
            <div className="w-full pt-24 flex flex-col items-center gap-9 bg-gradient-radial-brand">
                <div className="flex flex-col justify-center items-center">
                    <div className="text-white text-center font-poppins text-xs font-normal tracking-[-0.96px]">
                        Entenda mais sobre o universo Origami
                    </div>
                    <div className="text-white text-center font-poppins text-[28px] font-black leading-normal">
                        Vamos conversar?
                    </div>
                </div>

                <div className="flex flex-col items-start gap-6 w-full max-w-4xl">
                    {/* First Row - Nome and Sobrenome */}
                    <div className="flex items-start gap-6 w-full">
                        <div className="flex flex-col justify-center items-start gap-2 flex-1">
                            <label className="text-white text-center font-poppins text-xs font-normal tracking-[-0.96px]">
                                Nome
                            </label>
                            <input
                                type="text"
                                className="flex h-[34px] px-4 py-2 justify-center items-center gap-[10px] w-full rounded-lg border border-background-secondary bg-white"
                            />
                        </div>
                        <div className="flex flex-col justify-center items-start gap-2 flex-1">
                            <label className="text-white text-center font-poppins text-xs font-normal tracking-[-0.96px]">
                                Sobrenome
                            </label>
                            <input
                                type="text"
                                className="flex h-[34px] px-4 py-2 justify-center items-center gap-[10px] w-full rounded-lg border border-background-secondary bg-white"
                            />
                        </div>
                    </div>

                    {/* Second Row - Email and Telefone */}
                    <div className="flex items-start gap-6 w-full">
                        <div className="flex flex-col justify-center items-start gap-2 flex-1">
                            <label className="text-white text-center font-poppins text-xs font-normal tracking-[-0.96px]">
                                Email
                            </label>
                            <input
                                type="email"
                                className="flex h-[34px] px-4 py-2 justify-center items-center gap-[10px] w-full rounded-lg border border-background-secondary bg-white"
                            />
                        </div>
                        <div className="flex flex-col justify-center items-start gap-2 flex-1">
                            <label className="text-white text-center font-poppins text-xs font-normal tracking-[-0.96px]">
                                Telefone
                            </label>
                            <input
                                type="tel"
                                className="flex h-[34px] px-4 py-2 justify-center items-center gap-[10px] w-full rounded-lg border border-background-secondary bg-white"
                            />
                        </div>
                    </div>

                    {/* Third Row - Empresa */}
                    <div className="flex items-start gap-6 w-full">
                        <div className="flex flex-col justify-center items-start gap-2 flex-1">
                            <label className="text-white text-center font-poppins text-xs font-normal tracking-[-0.96px]">
                                Empresa
                            </label>
                            <input
                                type="text"
                                className="flex h-[34px] px-4 py-2 justify-center items-center gap-[10px] w-full rounded-lg border border-background-secondary bg-white"
                            />
                        </div>
                    </div>

                    {/* Fourth Row - Mensagem */}
                    <div className="flex items-start gap-6 w-full">
                        <div className="flex flex-col justify-center items-start gap-2 flex-1">
                            <label className="text-white text-center font-poppins text-xs font-normal tracking-[-0.96px]">
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
                    <button className="flex px-4 py-2 items-center gap-2 rounded bg-text-primary">
                        <span className="text-white font-poppins text-xs font-normal tracking-[-0.96px]">
                            Enviar mensagem
                        </span>
                    </button>
                </div>
            </div>

            {/* Copyright */}
            <div className="flex py-2 justify-center items-center gap-[10px] w-full bg-background-secondary">
                <div className="text-text-secondary font-poppins text-[8px] font-normal tracking-[-0.64px]">
                    © 2025 Origami Lab. Todos os direitos reservados.
                </div>
            </div>
        </div>
    );
};

export default ContactUs;
