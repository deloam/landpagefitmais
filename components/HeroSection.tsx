
import React, { useRef, useEffect } from 'react';
import faixada from '../assets/faixada.webp';
import { FaWhatsapp } from 'react-icons/fa';

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
            <div ref={parallaxRef} className="absolute inset-0 bg-cover bg-top md:bg-center bg-left-30" style={{ backgroundImage: `url(${faixada})` }}>
                <div className="absolute inset-0 bg-black opacity-60"></div>
            </div>
            <div className="relative z-10 px-6 bg-black bg-opacity-70 p-6 rounded-lg">
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-black uppercase tracking-wider mb-4">
                    Montamos e Mantemos Sua Academia com <span className="text-fit-orange">Excelência</span>
                </h1>
                <br/>
                <p className="text-lg md:text-2xl font-light max-w-3xl mx-auto">
                    A solução completa para você focar no que realmente<br />importa: o sucesso do seu negócio.
                </p>
                <a 
                    href="#contato" 
                    onClick={scrollToContact}
                    className="bg-green-500 text-white font-bold py-4 px-10 rounded-full text-xl uppercase hover:bg-green-600 transition-all duration-300 shadow-lg transform hover:scale-105 mt-8 inline-flex items-center">
                    <FaWhatsapp className="mr-3 text-2xl" />
                    Solicite um Orçamento Grátis
                </a>
            </div>
        </section>
    );
};

export default HeroSection;

