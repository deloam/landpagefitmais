
import React from 'react';
import { clients } from '../constants';

const ClientsSection: React.FC = () => {
    return (
        <section id="clientes" className="py-20 bg-fit-dark">
            <div className="container mx-auto px-6">
                <h2 className="text-center text-3xl font-bold text-white mb-4">Quem Confia na <span className="text-fit-orange">Fit+</span></h2>
                <p className="text-center text-gray-400 text-lg mb-12">Somos parceiros das melhores marcas e de clientes que buscam excelência.</p>
                <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8">
                    {clients.map((client, index) => (
                        <div key={index} className="flex justify-center items-center h-16">
                            <img 
                                src={client.logo} 
                                alt={client.name} 
                                className="max-h-full max-w-full object-contain filter grayscale hover:grayscale-0 brightness-200 hover:brightness-100 transition-all duration-300" 
                                style={{ height: client.name === 'Movement' ? '40px' : 'auto' }}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ClientsSection;
