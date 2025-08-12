
import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const ContactSection: React.FC = () => {
    const whatsappUrl = "https://wa.me/559191982367?text=Olá! Gostaria de mais informações sobre a Fit+.";

    return (
        <section id="contato" className="py-20 bg-gray-900">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-white">Fale com um <span className="text-fit-orange">Especialista</span></h2>
                    <p className="text-lg text-gray-400 mt-4 max-w-2xl mx-auto">Clique no botão abaixo e seja redirecionado para o nosso WhatsApp.</p>
                </div>
                <div className="text-center">
                    <a
                        href={whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-green-500 text-white font-bold py-4 px-8 rounded-full text-lg uppercase hover:bg-green-600 transition-all duration-300 shadow-lg transform hover:scale-105 inline-flex items-center"
                    >
                        <FaWhatsapp className="mr-3 text-2xl" />
                        Solicitar Atendimento
                    </a>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;

