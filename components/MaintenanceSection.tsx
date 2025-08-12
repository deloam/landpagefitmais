
import React from 'react';
import equipe from '../assets/equipe.webp';

const MaintenanceSection: React.FC = () => {
    return (
        <section id="manutencao" className="py-20 bg-gray-800/50 text-white">
            <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center gap-12">
                {/* This div will contain the introductory text and the image */}
                <div className="flex flex-col lg:w-1/2 w-full">
                    <div className="text-center lg:text-left mb-8">
                        <span className="text-fit-orange font-bold uppercase tracking-wider">Assistência Técnica</span>
                        <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">Cuidado Contínuo, Performance Máxima</h2>
                        <p className="text-gray-400 text-lg leading-relaxed">
                            Seus equipamentos são um investimento valioso. Nosso serviço de assistência técnica especializada garante que eles operem sempre com máxima eficiência e segurança.
                        </p>
                    </div>
                    <div className="w-full">
                        <img src={equipe} alt="Equipe de manutenção em equipamento de ginástica" className="rounded-lg shadow-2xl w-full h-auto object-cover" />
                    </div>
                </div>

                {/* This div will contain the list of topics */}
                <div className="lg:w-1/2 text-center lg:text-left">
                    <ul className="space-y-6 text-gray-300 text-left mx-auto max-w-md lg:max-w-none">
                        <li className="flex flex-col items-start">
                            <div className="flex items-center mb-2">
                                <span className="text-fit-orange mr-3 text-2xl">&#10003;</span>
                                <strong className="text-xl text-white">Manutenção Preventiva</strong>
                            </div>
                            <p className="ml-8 text-lg">Aumenta a vida útil dos equipamentos e previne falhas inesperadas.</p>
                        </li>
                        <li className="flex flex-col items-start">
                            <div className="flex items-center mb-2">
                                <span className="text-fit-orange mr-3 text-2xl">&#10003;</span>
                                <strong className="text-xl text-white">Manutenção Corretiva</strong>
                            </div>
                            <p className="ml-8 text-lg">Respostas rápidas para solucionar qualquer problema e minimizar o tempo de inatividade.</p>
                        </li>
                        <li className="flex flex-col items-start">
                            <div className="flex items-center mb-2">
                                <span className="text-fit-orange mr-3 text-2xl">&#10003;</span>
                                <strong className="text-xl text-white">Técnicos Certificados</strong>
                            </div>
                            <p className="ml-8 text-lg">Profissionais qualificados e experientes para cuidar do seu patrimônio.</p>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default MaintenanceSection;
