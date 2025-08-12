
import React, { useState, useEffect } from 'react';
import logo from '../assets/logo.png';

const Header: React.FC = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { href: '#solucoes', text: 'Soluções 360°' },
        { href: '#quem-somos', text: 'Quem Somos' },
        { href: '#produtos', text: 'Produtos' },
        { href: '#contato', text: 'Contato' },
    ];

    const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-fit-dark/90 backdrop-blur-sm shadow-lg' : 'bg-transparent'}`}>
            <div className="container mx-auto px-6 py-4 flex justify-center md:justify-between items-center">
                <a href="#hero" onClick={(e) => scrollToSection(e, '#hero')}>
                    <img src={logo} alt="Fit+ Logo" className="h-10" />
                </a>
                
                <nav className="hidden md:flex items-center space-x-8">
                    {navLinks.map((link) => (
                        <a key={link.href} href={link.href} onClick={(e) => scrollToSection(e, link.href)} className="text-gray-300 hover:text-fit-orange transition-colors duration-300 font-semibold">
                            {link.text}
                        </a>
                    ))}
                    <a href="https://www.instagram.com/fitmaisequipamentos/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-fit-orange transition-colors duration-300">
                        <i className="fab fa-instagram fa-lg"></i>
                    </a>
                    <a href="https://www.facebook.com/fitmaisequipamentos/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-fit-orange transition-colors duration-300">
                        <i className="fab fa-facebook-f fa-lg"></i>
                    </a>
                </nav>
            </div>
        </header>
    );
};

export default Header;
