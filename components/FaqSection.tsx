import React, { useState } from 'react';

const FaqItem = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border-b-2 border-gray-800 py-6">
            <button
                className="w-full flex justify-between items-center text-left text-lg md:text-xl font-semibold text-white focus:outline-none"
                onClick={() => setIsOpen(!isOpen)}
            >
                <span>{question}</span>
                <span className={`transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
                    <svg className="w-6 h-6 text-fit-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                </span>
            </button>
            {isOpen && (
                <div className="mt-4 text-gray-400 text-base md:text-lg">
                    <p>{answer}</p>
                </div>
            )}
        </div>
    );
};

const FaqSection: React.FC = () => {
    const faqData = [
        {
            question: 'Quais são as formas de pagamento aceitas?',
            answer: 'Aceitamos diversas formas de pagamento para facilitar sua compra, incluindo cartão de crédito (com opção de parcelamento), boleto bancário, PIX e Mercado Pago.'
        },
        {
            question: 'Qual é a política de garantia dos produtos?',
            answer: 'A garantia varia de acordo com o produto. Geralmente, equipamentos para uso residencial têm 3 anos de garantia, enquanto para uso comercial a garantia é de 1 ano. Peças de desgaste como estofados e cabos têm garantia de 3 a 6 meses. A estrutura dos equipamentos possui garantia estendida de 2 anos. A garantia cobre defeitos de fabricação, não cobrindo danos por mau uso.'
        },
        {
            question: 'Como funcionam a entrega e o frete?',
            answer: 'O frete é calculado durante a compra, com base no seu endereço. Realizamos entregas em todo o Brasil através de transportadoras parceiras. O prazo de entrega dependerá da sua localidade e da modalidade de frete escolhida.'
        },
        {
            question: 'A montagem dos equipamentos está inclusa?',
            answer: 'A montagem não está inclusa no valor dos produtos e é de responsabilidade do cliente. Oferecemos todo o suporte e manuais detalhados para facilitar a montagem.'
        },
        {
            question: 'Como posso entrar em contato para tirar dúvidas?',
            answer: 'Você pode entrar em contato conosco através do nosso WhatsApp, e-mail ou pelo formulário de contato em nosso site. Nossa equipe está pronta para te atender e tirar todas as suas dúvidas!'
        },
    ];

    return (
        <section id="faq" className="py-20 bg-fit-dark-blue">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-white">Perguntas <span className="text-fit-orange">Frequentes</span></h2>
                    <p className="text-lg text-gray-400 mt-4 max-w-2xl mx-auto">Tudo o que você precisa saber para começar seu projeto com a gente.</p>
                </div>
                <div className="max-w-4xl mx-auto">
                    {faqData.map((faq, index) => (
                        <FaqItem key={index} question={faq.question} answer={faq.answer} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FaqSection;
