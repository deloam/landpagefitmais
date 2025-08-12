
import React from 'react';
import faixada from '../assets/faixada.webp';

const WhoWeAreSection: React.FC = () => {
    return (
        <section id="quem-somos" className="py-20 bg-fit-dark-blue">
            <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center gap-12">
                <div className="lg:w-1/2">
                    <img src={faixada} alt="Faixada da Fit+" className="rounded-lg shadow-2xl w-full h-auto object-cover" />
                </div>
                <div className="lg:w-1/2 text-center lg:text-left">
                    <span className="text-fit-orange font-bold uppercase tracking-wider">Quem Somos</span>
                    <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4 text-white">Sua Parceira de Confiança no Mundo Fitness</h2>
                    <p className="text-gray-400 text-lg mb-4 leading-relaxed">
                        A Fit+ nasceu da paixão por transformar espaços em academias de sucesso. Com anos de experiência, nossa equipe de especialistas se dedica a oferecer soluções completas e personalizadas, desde o planejamento e montagem até a manutenção de equipamentos. Nosso compromisso é com a sua satisfação e o crescimento do seu negócio.
                    </p>
                    <p className="text-gray-400 text-lg leading-relaxed">
                        Acreditamos que cada projeto é único. Por isso, trabalhamos lado a lado com nossos clientes para entender suas necessidades e superar suas expectativas.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default WhoWeAreSection;
