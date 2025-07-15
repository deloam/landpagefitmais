
import React, { useRef, useEffect } from 'react';
import faixada from '../assets/faixada.jpg';

const HeroSection: React.FC = () => {
    const parallaxRef = useRef<HTMLDivElement>(null);

    const scrollToContact = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        document.querySelector('#contato')?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        const handleScroll = () => {
            if (parallaxRef.current) {
                const scrolled = window.scrollY;
                // Adjust the speed of the parallax effect (e.g., 0.5 for half speed)
                parallaxRef.current.style.backgroundPositionY = `${-scrolled * 0.3}px`;
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <section id="hero" className="relative h-screen flex items-center justify-center text-center text-white">
            <div ref={parallaxRef} className="absolute inset-0 bg-cover bg-top" style={{ backgroundImage: `url(${faixada})` }}>
                <div className="absolute inset-0 bg-black opacity-60"></div>
            </div>
            <div className="relative z-10 px-6">
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-black uppercase tracking-wider mb-4">
                    A Solução <span className="text-fit-orange">360°</span>
                </h1>
                <p className="text-lg md:text-2xl font-light max-w-3xl mx-auto mb-8">
                    Do projeto à manutenção, a Fit+ é sua parceira completa para criar e gerenciar espaços fitness de alta performance.
                </p>
                <a 
                    href="#contato" 
                    onClick={scrollToContact}
                    className="bg-fit-orange text-white font-bold py-3 px-8 rounded-full text-lg uppercase hover:bg-orange-600 transition-all duration-300 shadow-lg transform hover:scale-105">
                    Comece seu projeto
                </a>
            </div>
        </section>
    );
};

export default HeroSection;
