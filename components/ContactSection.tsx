
import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const ContactSection: React.FC = () => {
    const whatsappUrl = "https://wa.me/559191982367?text=Olá! Gostaria de mais informações sobre a Fit+.";

    return (
        <section id="contato" className="py-20 bg-gray-900">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-white">Fale com um <span className="text-fit-orange">Especialista</span></h2>
                    <p className="text-lg text-gray-400 mt-4 max-w-2xl mx-auto">Preencha o formulário abaixo ou clique no botão para falar diretamente conosco via WhatsApp.</p>
                </div>
                <div className="max-w-lg mx-auto bg-fit-dark p-8 rounded-lg shadow-xl">
                    <form className="space-y-6">
                        <div>
                            <label htmlFor="name" className="block text-gray-300 text-sm font-bold mb-2">Nome Completo</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-gray-700 border-gray-600 text-white"
                                placeholder="Seu nome"
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-gray-300 text-sm font-bold mb-2">E-mail</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-gray-700 border-gray-600 text-white"
                                placeholder="seu@email.com"
                            />
                        </div>
                        <div>
                            <label htmlFor="phone" className="block text-gray-300 text-sm font-bold mb-2">Telefone (WhatsApp)</label>
                            <input
                                type="tel"
                                id="phone"
                                name="phone"
                                className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-gray-700 border-gray-600 text-white"
                                placeholder="(99) 99999-9999"
                            />
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-gray-300 text-sm font-bold mb-2">Sua Mensagem</label>
                            <textarea
                                id="message"
                                name="message"
                                rows={4}
                                className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-gray-700 border-gray-600 text-white"
                                placeholder="Descreva sua necessidade..."
                            ></textarea>
                        </div>
                        <div className="flex items-center justify-between">
                            <button
                                type="submit"
                                className="bg-fit-orange text-white font-bold py-3 px-6 rounded-full text-lg uppercase hover:bg-orange-600 transition-all duration-300 shadow-lg transform hover:scale-105 w-full"
                            >
                                Enviar Mensagem
                            </button>
                        </div>
                    </form>
                    <div className="text-center mt-8">
                        <p className="text-gray-400 mb-4">Ou se preferir, fale conosco diretamente:</p>
                        <a
                            href={whatsappUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-green-500 text-white font-bold py-4 px-8 rounded-full text-lg uppercase hover:bg-green-600 transition-all duration-300 shadow-lg transform hover:scale-105 inline-flex items-center"
                        >
                            <FaWhatsapp className="mr-3 text-2xl" />
                            Chamar no WhatsApp
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;

