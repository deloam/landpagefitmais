import React from 'react';

const testimonials = [
    {
        quote: 'A Fit+ transformou nossa academia. O projeto ficou incrível e os equipamentos são de altíssima qualidade. Nossos alunos estão amando!',
        name: 'Juliana Martins',
        title: 'Gerente da Academia PowerFit',
    },
    {
        quote: 'O processo de consultoria foi fundamental para o sucesso do nosso novo estúdio. A equipe da Fit+ é extremamente profissional e atenciosa.',
        name: 'Ricardo Almeida',
        title: 'Proprietário do Studio Core Pilates',
    },
    {
        quote: 'Nunca imaginei que seria tão fácil montar minha academia. A solução 360° da Fit+ cuidou de todos os detalhes, super recomendo!',
        name: 'Fernanda Costa',
        title: 'Empreendedora Fitness',
    },
];

const SocialProofSection: React.FC = () => {
    return (
        <section id="depoimentos" className="py-20 bg-gray-900">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-white">O que nossos <span className="text-fit-orange">Clientes Dizem</span></h2>
                    <p className="text-lg text-gray-400 mt-4 max-w-2xl mx-auto">Histórias de sucesso de quem confiou na Fit+ para construir seu sonho.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className="bg-fit-dark p-8 rounded-lg shadow-lg flex flex-col justify-between">
                            <p className="text-gray-300 text-lg italic mb-6">"{testimonial.quote}"</p>
                            <div>
                                <p className="text-white font-bold text-xl">{testimonial.name}</p>
                                <p className="text-fit-orange font-semibold">{testimonial.title}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SocialProofSection;
