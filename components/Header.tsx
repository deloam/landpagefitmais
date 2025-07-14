
import React, { useState, useEffect } from 'react';
import logo from '../assets/logo.png';

const Header: React.FC = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { href: '#solucoes', text: 'Soluções 360°' },
        { href: '#produtos', text: 'Produtos' },
        { href: '#projetos', text: 'Projetos 3D' },
        { href: '#contato', text: 'Contato' },
    ];

    const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
        setMobileMenuOpen(false);
    };

    return (
        <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-fit-dark/90 backdrop-blur-sm shadow-lg' : 'bg-transparent'}`}>
            <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                <a href="#hero" onClick={(e) => scrollToSection(e, '#hero')}>
                    <img src={logo} alt="Fit+ Logo" className="h-10" />
                </a>
                
                <nav className="hidden md:flex items-center space-x-8">
                    {navLinks.map((link) => (
                        <a key={link.href} href={link.href} onClick={(e) => scrollToSection(e, link.href)} className="text-gray-300 hover:text-fit-orange transition-colors duration-300 font-semibold">
                            {link.text}
                        </a>
                    ))}
                </nav>

                <div className="md:hidden">
                    <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-white focus:outline-none">
                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            {mobileMenuOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                            )}
                        </svg>
                    </button>
                </div>
            </div>
            {mobileMenuOpen && (
                <div className="md:hidden bg-fit-dark/95 backdrop-blur-sm pb-4">
                    <nav className="flex flex-col items-center space-y-4">
                        {navLinks.map((link) => (
                            <a key={link.href} href={link.href} onClick={(e) => scrollToSection(e, link.href)} className="text-gray-300 hover:text-fit-orange transition-colors duration-300 font-semibold py-2">
                                {link.text}
                            </a>
                        ))}
                    </nav>
                </div>
            )}
        </header>
    );
};

export default Header;
