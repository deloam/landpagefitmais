
import React from 'react';
import { solutions } from '../constants';
import { Solution } from '../types';

const SolutionCard: React.FC<{ solution: Solution }> = ({ solution }) => {
    return (
        <div className="bg-gray-800/50 p-8 rounded-lg text-center flex flex-col items-center transform hover:-translate-y-2 transition-transform duration-300 shadow-xl backdrop-blur-sm">
            <div className="mb-4">
                {solution.icon}
            </div>
            <h3 className="text-xl font-bold text-white mb-3">{solution.title}</h3>
            <p className="text-gray-400 leading-relaxed">{solution.description}</p>
        </div>
    );
}

const SolutionsSection: React.FC = () => {
    return (
        <section id="solucoes" className="py-20 bg-fit-dark">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-white">Uma Parceria <span className="text-fit-orange">Completa</span></h2>
                    <p className="text-lg text-gray-400 mt-4 max-w-2xl mx-auto">Cuidamos de cada detalhe para que você foque no que realmente importa: o sucesso do seu negócio.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {solutions.map((solution, index) => (
                        <SolutionCard key={index} solution={solution} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SolutionsSection;
