import ButtonLink from "@/components/ui/buttonlink";
import { ArrowRight } from "lucide-react";

export default function ContactForm() {
    return (
        <section className="bg-gradient-to-r from-emerald-600 to-emerald-800 text-white py-20 px-4">
            <div className="max-w-4xl mx-auto">
                <p className="text-center text-sm">Entenda mais sobre o universo Origami</p>
                <h2 className="text-3xl font-bold text-center mb-10 text-gradient">
                    Vamos conversar?
                </h2>

                <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols2 gap-6">
                        <div>
                            <label className="block text-sm mb-1">Nome</label>
                            <input
                                type="text"
                                className="w-full rounded-md px-4 py-2 text-black"
                                placeholder="Seu nome"
                            />
                        </div>
                        <div>
                            <label className="block text-sm mb-1">Sobrenome</label>
                            <input
                                type="text"
                                className="w-full rounded-md px-4 py-2 text-black"
                                placeholder="Seu sobrenome"
                            />
                        </div>
                        <div>
                            <label className="block text-sm mb-1">Email</label>
                            <input
                                type="email"
                                className="w-full rounded-md px-4 py-2 text-black"
                                placeholder="Seu email"
                            />
                        </div>
                        <div>
                            <label className="block text-sm mb-1">Telefone</label>
                            <input
                                type="tel"
                                className="w-full rounded-md px-4 py-2 text-black"
                                placeholder="(00) 00000-0000"
                            />
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm mb-1">Empresa</label>
                        <input
                            type="text"
                            className="w-full rounded-md px-4 py-2 text-black"
                            placeholder="Nome da empresa"
                        />
                    </div>

                    <div>
                        <label className="block text-sm mb-1">Mensagem</label>
                        <textarea
                            rows={5}
                            className="w-full rounded-md px-4 py-2 text-black"
                            placeholder="Escreva sua mensagem..."
                        />
                    </div>

                    <div className="text-center">
                        <ButtonLink
                            to="/contactus"
                            className="bg-white font-thin text-brand-gray-dark hover:bg-white/90 px-8 py-4 rounded-md text-lg transition-all duration-200 hover:scale-105 group"
                        >
                            Vamos inovar juntos?
                            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </ButtonLink>
                    </div>
                </form>
            </div>
        </section>
    );
}
