import ButtonLink from "@/components/ui/buttonlink";
import { ArrowRight } from "lucide-react";
import { useState } from "react";

export default function ContactForm() {
    const [form, setForm] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        company: "",
        message: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;

        if (name === "phone") {
            const maskedPhone = value
                .replace(/\D/g, "")
                .replace(/^(\d{2})(\d)/g, "($1) $2")
                .replace(/(\d{5})(\d{1,4})$/, "$1-$2")
                .substring(0, 15); 

            setForm({ ...form, phone: maskedPhone });
        } else {
            setForm({ ...form, [name]: value });
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const cleanedPhone = form.phone.replace(/\D/g, "");

        const formEl = document.createElement("form");
        formEl.action = "https://formspree.io/f/mrblpnrj";
        formEl.method = "POST";
        formEl.style.display = "none";

        const entries = {
            ...form,
            phone: cleanedPhone, // telefone limpo
        };

        for (const [key, value] of Object.entries(entries)) {
            const input = document.createElement("input");
            input.type = "hidden";
            input.name = key;
            input.value = value;
            formEl.appendChild(input);
        }

        document.body.appendChild(formEl);
        formEl.submit();
    };

    return (
        <section className="bg-gradient-to-r from-emerald-600 to-emerald-800 text-white py-20 px-4">
            <div className="max-w-4xl mx-auto">
                <p className="text-center text-sm">Entenda mais sobre o universo Origami</p>
                <h2 className="text-3xl font-bold text-center mb-10 text-gradient">Vamos conversar?</h2>

                <form className="space-y-6" onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols2 gap-6">
                        <div>
                            <label className="block text-sm mb-1">Nome</label>
                            <input
                                name="firstName"
                                type="text"
                                value={form.firstName}
                                onChange={handleChange}
                                className="w-full rounded-md px-4 py-2 text-black"
                                placeholder="Seu nome"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-sm mb-1">Sobrenome</label>
                            <input
                                name="lastName"
                                type="text"
                                value={form.lastName}
                                onChange={handleChange}
                                className="w-full rounded-md px-4 py-2 text-black"
                                placeholder="Seu sobrenome"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-sm mb-1">Email</label>
                            <input
                                name="email"
                                type="email"
                                value={form.email}
                                onChange={handleChange}
                                className="w-full rounded-md px-4 py-2 text-black"
                                placeholder="Seu email"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-sm mb-1">Telefone</label>
                            <input
                                name="phone"
                                type="tel"
                                value={form.phone}
                                onChange={handleChange}
                                className="w-full rounded-md px-4 py-2 text-black"
                                placeholder="(00) 00000-0000"
                                required
                            />
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm mb-1">Empresa</label>
                        <input
                            name="company"
                            type="text"
                            value={form.company}
                            onChange={handleChange}
                            className="w-full rounded-md px-4 py-2 text-black"
                            placeholder="Nome da empresa"
                        />
                    </div>

                    <div>
                        <label className="block text-sm mb-1">Mensagem</label>
                        <textarea
                            name="message"
                            rows={5}
                            value={form.message}
                            onChange={handleChange}
                            className="w-full rounded-md px-4 py-2 text-black"
                            placeholder="Escreva sua mensagem..."
                            required
                        />
                    </div>

                    <div className="text-center">
                        <ButtonLink
                            type="submit"
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

