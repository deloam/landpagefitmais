
import React from 'react';
import logo from '../assets/logo.webp';

const Footer: React.FC = () => {
    return (
        <footer className="bg-black py-8 text-center text-gray-500">
            <div className="container mx-auto px-6">
                <img src={logo} alt="Fit+ Logo" className="h-12 mx-auto mb-4" />
                <p className="mb-4">
                    Soluções 360° em Equipamentos Fitness
                </p>
                 <div className="flex flex-col md:flex-row justify-center md:space-x-6 space-y-2 md:space-y-0 mb-4 text-gray-400">
                    <p className="text-center">contato@fitmaisequipamentos.com.br</p>
                    <p className="text-center">(91) 99198-2367</p>
                 </div>
                <div className="flex justify-center space-x-6 mb-4">
                    <a href="https://www.instagram.com/fitmais.equipamentos/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-fit-orange transition-colors duration-300">
                        <i className="fab fa-instagram fa-2x"></i>
                    </a>
                    <a href="https://www.facebook.com/fitmaisequipamentos/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-fit-orange transition-colors duration-300">
                        <i className="fab fa-facebook-f fa-2x"></i>
                    </a>
                </div>
                <p>&copy; {new Date().getFullYear()} Fit+ Equipamentos. Todos os direitos reservados.</p>
            </div>
        </footer>
    );
};

export default Footer;
