
import React from 'react';
import { products } from '../constants';
import { Product } from '../types';

const ProductCard: React.FC<{ product: Product }> = ({ product }) => (
    <div className="group relative overflow-hidden rounded-lg shadow-lg">
        <img src={product.image} alt={product.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
        <div className="absolute bottom-0 left-0 p-6">
            <span className="text-xs font-semibold uppercase text-fit-orange tracking-wider">{product.category}</span>
            <h3 className="text-xl font-bold text-white mt-1">{product.name}</h3>
        </div>
    </div>
);


const ProductsSection: React.FC = () => {
    return (
        <section id="produtos" className="py-20 bg-gray-900">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-white">Equipamentos de <span className="text-fit-orange">Alta Performance</span></h2>
                    <p className="text-lg text-gray-400 mt-4 max-w-2xl mx-auto">Trabalhamos com as melhores marcas para garantir a qualidade e a satisfação que seu espaço merece.</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {products.map((product, index) => (
                        <ProductCard key={index} product={product} />
                    ))}
                </div>
                 <div className="text-center mt-12">
                    <a href="#contato" className="text-fit-orange font-semibold hover:text-orange-400 transition-colors">
                        Ver catálogo completo &rarr;
                    </a>
                </div>
            </div>
        </section>
    );
};

export default ProductsSection;
