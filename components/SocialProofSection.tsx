import React from 'react';

const testimonials = [
    {
        quote: 'A melhor loja de Belém em equipamentos, acessórios , serviços de manutenção. Loja completa de alto nível, e vendedores super competentes.',
        name: 'Thaiana Thaila',
        title: '⭐️⭐️⭐️⭐️⭐️',
    },
    {
        quote: 'Uma loja com um ótimo atendimento, os vendedores são muito competentes. Sem falar o showroom completo.',
        name: 'Daniel Jardim',
        title: '⭐️⭐️⭐️⭐️⭐️',
    },
    {
        quote: 'Espaço completo, muitos equipamentos disponíveis pra venda, excelente qualidade, serviços de manutenção e preços super acessíveis',
        name: 'Dennis Moraes',
        title: '⭐️⭐️⭐️⭐️⭐️',
    },
    {
        quote: 'Loja linda e super moderna com equipamentos, acessórios e suplementos completos! Um ótimo lugar para encontrar tudo para seu espaço fitness.',
        name: 'Andre Junior',
        title: '⭐️⭐️⭐️⭐️⭐️',
    },
    {
        quote: 'Serviço em excelência, contratamos e o serviço foi entregue no plumo. Ótimo serviço e recomendo.',
        name: 'Bergson Rodrigues',
        title: '⭐️⭐️⭐️⭐️⭐️',
    },
    {
        quote: 'Uma loja completa, com uma equipe especializada de vendedores e técnico.',
        name: 'Anderson Ferreira',
        title: '⭐️⭐️⭐️⭐️⭐️',
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
                                <p className="text-fit-orange font-semibold text-2xl">{testimonial.title}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SocialProofSection;
