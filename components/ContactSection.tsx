
import React, { useState } from 'react';

const ContactSection: React.FC = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prevState => ({ ...prevState, [name]: value }));
    };
    
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // In a real app, this would send data to a server.
        console.log('Form data submitted:', formData);
        setSubmitted(true);
    };

    return (
        <section id="contato" className="py-20 bg-gray-900">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-white">Vamos Construir seu Projeto <span className="text-fit-orange">Juntos?</span></h2>
                    <p className="text-lg text-gray-400 mt-4 max-w-2xl mx-auto">Entre em contato e descubra como a solução 360° da Fit+ pode transformar seu espaço fitness.</p>
                </div>
                <div className="max-w-4xl mx-auto bg-fit-dark p-8 md:p-12 rounded-lg shadow-2xl">
                    {submitted ? (
                        <div className="text-center text-white py-12">
                            <h3 className="text-2xl font-bold text-fit-orange mb-2">Obrigado!</h3>
                            <p className="text-lg">Sua mensagem foi enviada com sucesso. Entraremos em contato em breve.</p>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit}>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                <div>
                                    <label htmlFor="name" className="block text-gray-300 font-semibold mb-2">Nome</label>
                                    <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required className="w-full bg-gray-800 border border-gray-700 rounded-md py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-fit-orange" />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-gray-300 font-semibold mb-2">Email</label>
                                    <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required className="w-full bg-gray-800 border border-gray-700 rounded-md py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-fit-orange" />
                                </div>
                            </div>
                            <div className="mb-6">
                                <label htmlFor="message" className="block text-gray-300 font-semibold mb-2">Mensagem</label>
                                <textarea id="message" name="message" rows={5} value={formData.message} onChange={handleChange} required className="w-full bg-gray-800 border border-gray-700 rounded-md py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-fit-orange"></textarea>
                            </div>
                            <div className="text-center">
                                <button type="submit" className="bg-fit-orange text-white font-bold py-3 px-12 rounded-full text-lg uppercase hover:bg-orange-600 transition-all duration-300 shadow-lg transform hover:scale-105">
                                    Enviar Mensagem
                                </button>
                            </div>
                        </form>
                    )}
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
