import Header from "@/components/Header";
import ButtonLink from "@/components/ui/buttonlink";
import Toast from "@/components/ui/toast";
import { useState } from "react";

const ContactUs = () => {
    const [form, setForm] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
    });

    const [toast, setToast] = useState<{ message: string; type: "success" | "error" } | null>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;

        if (name === "phone") {
            const maskedPhone = value
                .replace(/\D/g, "")
                .replace(/^(\d{2})(\d)/g, "($1) $2")
                .replace(/(\d{5})(\d{1,4})$/, "$1-$2")
                .substring(0, 15);

            setForm((prev) => ({ ...prev, phone: maskedPhone }));
        } else {
            setForm((prev) => ({ ...prev, [name]: value }));
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const cleanedPhone = form.phone.replace(/\D/g, "");

        const payload = {
            firstName: form.firstName,
            lastName: form.lastName,
            email: form.email,
            phone: cleanedPhone,
            message: form.message,
        };

        try {
            const response = await fetch("https://formspree.io/f/mrblpnrj", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: JSON.stringify(payload),
            });

            if (response.ok) {
                setToast({ message: "Mensagem enviada com sucesso!", type: "success" });
                setForm({
                    firstName: "",
                    lastName: "",
                    email: "",
                    phone: "",
                    message: "",
                });
            } else {
                setToast({ message: "Houve um erro ao enviar sua mensagem.", type: "error" });
            }
        } catch (error) {
            console.error("Erro no envio:", error);
            setToast({ message: "Erro de conexão ao enviar formulário.", type: "error" });
        }
    };

    return (
        <div className="bg-white font-poppins">
            <Header />

            {/* Contact Form Section */}
            <section className="mx-auto min-h-screen w-full pt-24 flex flex-col items-center gap-9 bg-text-gradient">
                <div className="text-center mb-8">
                    <p className="text-brand-white mb-4">Entenda mais sobre o universo Origami</p>
                    <h2 className="text-4xl md:text-5xl font-black text-brand-white">Vamos conversar?</h2>
                </div>

                <form
                    className="container flex flex-col items-start gap-6 w-full max-w-6xl mx-auto mb-12"
                    onSubmit={handleSubmit}
                >
                    {/* First Row - Nome and Sobrenome */}
                    <div className="flex items-start gap-6 w-full flex-col md:flex-row">
                        <div className="flex flex-col justify-center items-start gap-2 flex-1 w-full">
                            <label className="text-white text-center text-sm font-normal tracking-[-0.96px]">
                                Nome
                            </label>
                            <input
                                value={form.firstName}
                                onChange={handleChange}
                                name="firstName"
                                type="text"
                                required
                                className="flex h-[34px] px-4 py-2 justify-center items-center gap-[10px] w-full rounded-lg border border-background-secondary bg-white"
                            />
                        </div>
                        <div className="flex flex-col justify-center items-start gap-2 flex-1 w-full">
                            <label className="text-white text-center text-sm font-normal tracking-[-0.96px]">
                                Sobrenome
                            </label>
                            <input
                                value={form.lastName}
                                onChange={handleChange}
                                name="lastName"
                                type="text"
                                required
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
                                value={form.email}
                                onChange={handleChange}
                                name="email"
                                type="email"
                                required
                                className="flex h-[34px] px-4 py-2 justify-center items-center gap-[10px] w-full rounded-lg border border-background-secondary bg-white"
                            />
                        </div>
                        <div className="flex flex-col justify-center items-start gap-2 flex-1 w-full">
                            <label className="text-white text-center text-sm font-normal tracking-[-0.96px]">
                                Telefone
                            </label>
                            <input
                                value={form.phone}
                                onChange={handleChange}
                                name="phone"
                                type="tel"
                                required
                                className="flex h-[34px] px-4 py-2 justify-center items-center gap-[10px] w-full rounded-lg border border-background-secondary bg-white"
                                placeholder="(00) 00000-0000"
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
                                value={form.message}
                                onChange={handleChange}
                                name="message"
                                rows={6}
                                required
                                className="flex px-4 py-2 justify-center items-start gap-[10px] w-full rounded-lg border border-background-secondary bg-white resize-none"
                                placeholder="Digite sua mensagem..."
                            />
                        </div>
                    </div>

                    {/* Submit Button */}
                    <div className="flex justify-center items-center w-full mt-8">
                        <ButtonLink
                            type="submit"
                            className="bg-brand-dark text-brand-white"
                        >
                            Enviar mensagem
                        </ButtonLink>
                    </div>
                </form>

            </section>

            {/* Copyright */}
            <div className="flex py-2 justify-center items-center gap-[10px] w-full bg-background-secondary">
                <div className="text-text-secondary text-[8px] font-normal tracking-[-0.64px]">
                    © 2025 Origami Lab. Todos os direitos reservados.
                </div>
            </div>

            {/* Toast */}
            {toast && (
                <Toast
                    message={toast.message}
                    type={toast.type}
                    onClose={() => setToast(null)}
                />
            )}
        </div>
    );
};

export default ContactUs;
