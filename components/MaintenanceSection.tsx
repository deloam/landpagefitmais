
import React from 'react';
import equipe from '../assets/equipe.jpg';

const MaintenanceSection: React.FC = () => {
    return (
        <section id="manutencao" className="py-20 bg-gray-800/50 text-white">
            <div className="container mx-auto px-6 flex flex-col lg:flex-row-reverse items-center gap-12">
                <div className="lg:w-1/2">
                    <span className="text-fit-orange font-bold uppercase tracking-wider">Assistência Técnica</span>
                    <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">Cuidado Contínuo, Performance Máxima</h2>
                    <p className="text-gray-400 text-lg mb-4 leading-relaxed">
                        Seus equipamentos são um investimento valioso. Nosso serviço de assistência técnica especializada garante que eles operem sempre com máxima eficiência e segurança.
                    </p>
                    <ul className="space-y-3 text-gray-300">
                        <li className="flex items-start">
                            <span className="text-fit-orange mr-3 mt-1">&#10003;</span>
                            <strong>Manutenção Preventiva:</strong> Aumenta a vida útil dos equipamentos e previne falhas inesperadas.
                        </li>
                        <li className="flex items-start">
                            <span className="text-fit-orange mr-3 mt-1">&#10003;</span>
                            <strong>Manutenção Corretiva:</strong> Respostas rápidas para solucionar qualquer problema e minimizar o tempo de inatividade.
                        </li>
                        <li className="flex items-start">
                            <span className="text-fit-orange mr-3 mt-1">&#10003;</span>
                            <strong>Técnicos Certificados:</strong> Profissionais qualificados e experientes para cuidar do seu patrimônio.
                        </li>
                    </ul>
                </div>
                <div className="lg:w-1/2 w-full">
                    <img src={equipe} alt="Equipe de manutenção em equipamento de ginástica" className="rounded-lg shadow-2xl w-full h-auto object-cover" />
                </div>
            </div>
        </section>
    );
};

export default MaintenanceSection;
