
import React from 'react';

const ProjectsSection: React.FC = () => {
    return (
        <section id="projetos" className="py-20 bg-fit-dark">
            <div className="container mx-auto px-6">
                <div className="flex flex-col lg:flex-row items-center gap-12">
                    <div className="lg:w-1/2">
                        <span className="text-fit-orange font-bold uppercase tracking-wider">Projetos 3D</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-white mt-2 mb-4">Visualize Seu Espaço Antes de Construir</h2>
                        <p className="text-gray-400 text-lg mb-6 leading-relaxed">
                            Com nosso serviço de projetos 3D, transformamos suas ideias em uma representação visual detalhada. Isso permite otimizar o layout, escolher os melhores equipamentos e garantir que cada centímetro do seu espaço seja aproveitado ao máximo, evitando surpresas e custos desnecessários.
                        </p>
                        <a 
                            href="#contato" 
                            onClick={(e) => { e.preventDefault(); document.querySelector('#contato')?.scrollIntoView({ behavior: 'smooth' }); }}
                            className="bg-transparent border-2 border-fit-orange text-fit-orange font-bold py-3 px-8 rounded-full text-lg uppercase hover:bg-fit-orange hover:text-white transition-all duration-300">
                            Solicitar Projeto 3D
                        </a>
                    </div>
                    <div className="lg:w-1/2 w-full">
                        <div className="relative rounded-lg overflow-hidden shadow-2xl">
                             <img src="https://picsum.photos/seed/project3d/800/600" alt="Projeto 3D de academia" className="w-full h-auto object-cover" />
                             <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                             <div className="absolute bottom-4 left-4 p-4 text-white font-bold bg-black/30 rounded">
                                 Renderização de Academia
                             </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProjectsSection;
