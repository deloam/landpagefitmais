
import { Solution, Product, Client } from './types';
import esteira from './assets/esteira.webp';
import eliptico from './assets/eliptico.webp';
import legPress from './assets/LegPress.webp';
import bicicleta from './assets/bicicleta.webp';
import puxada from './assets/puxada.webp';
import smith from './assets/smith.webp';
import evolution from './assets/evolution.webp';
import movement from './assets/movement.webp';
import shedfitness from './assets/shedfitness.webp';

// Icons
const SellIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-fit-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
    </svg>
);

const InstallIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-fit-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.196-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.783-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
    </svg>
);

const MaintenanceIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-fit-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
);

// Solutions Data
export const solutions: Solution[] = [
    {
        icon: <SellIcon />,
        title: "Equipamentos de Ponta",
        description: "Acesso aos melhores equipamentos do mercado, garantindo durabilidade e performance para o seu espaço. Invista com segurança e qualidade."
    },
    {
        icon: <InstallIcon />,
        title: "Montagem e Instalação",
        description: "Nossa equipe cuida de toda a montagem e instalação, assegurando que seus equipamentos estejam prontos para uso, com segurança e eficiência."
    },
    {
        icon: <MaintenanceIcon />,
        title: "Manutenção Especializada",
        description: "Planos de manutenção preventiva e corretiva para prolongar a vida útil dos seus equipamentos e garantir a segurança dos seus usuários."
    }
];

// Products Data
export const products: Product[] = [
    {
        image: movement,
        name: "Movement"
    },
    {
        image: shedfitness,
        name: "Shed Fitness"
    },
    {
        image: evolution,
        name: "Evolution Fitness"
    }
];

// Clients Data
export const clients: Client[] = [];
