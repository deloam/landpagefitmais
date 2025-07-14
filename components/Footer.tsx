
import React from 'react';
import logo from '../assets/logo.png';

const Footer: React.FC = () => {
    return (
        <footer className="bg-black py-8 text-center text-gray-500">
            <div className="container mx-auto px-6">
                <img src={logo} alt="Fit+ Logo" className="h-12 mx-auto mb-4" />
                <p className="mb-4">
                    Soluções 360° em Equipamentos Fitness
                </p>
                 <div className="flex justify-center space-x-6 mb-4 text-gray-400">
                    <p>contato@fitmaisequipamentos.com.br</p>
                    <p>(11) 99999-9999</p>
                 </div>
                <p>&copy; {new Date().getFullYear()} Fit+ Equipamentos. Todos os direitos reservados.</p>
            </div>
        </footer>
    );
};

export default Footer;
