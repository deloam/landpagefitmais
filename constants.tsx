
import { Solution, Product, Client } from './types';

// Icons
const ProjectIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-fit-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
    </svg>
);

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
        icon: <ProjectIcon />,
        title: "Projeto 3D",
        description: "Visualizamos seu espaço em 3D, otimizando cada metro quadrado para máxima funcionalidade e um layout perfeito antes de qualquer investimento."
    },
    {
        icon: <SellIcon />,
        title: "Venda de Equipamentos",
        description: "Oferecemos um portfólio completo com as melhores marcas do mercado, garantindo qualidade e durabilidade para sua academia, condomínio ou estúdio."
    },
    {
        icon: <InstallIcon />,
        title: "Instalação Profissional",
        description: "Nossa equipe especializada realiza a montagem e instalação de todos os equipamentos com segurança e precisão, deixando tudo pronto para o uso."
    },
    {
        icon: <MaintenanceIcon />,
        title: "Manutenção Preventiva",
        description: "Cuidamos da saúde dos seus equipamentos com planos de manutenção preventiva e corretiva, assegurando longevidade e a segurança de seus alunos."
    }
];

// Products Data
export const products: Product[] = [
    {
        image: "../assets/esteira.jpg",
        name: "Esteira Profissional",
        category: "Cardio"
    },
    {
        image: "../assets/eliptico.jpg",
        name: "Elíptico Magnético",
        category: "Cardio"
    },
    {
        image: "../assets/LegPress.png",
        name: "Leg Press 45º",
        category: "Musculação"
    },
    {
        image: "../assets/bicicleta.jpg",
        name: "Bicicleta de Spinning",
        category: "Cardio"
    },
    {
        image: "../assets/puxada.png",
        name: "Puxada Alta",
        category: "Musculação"
    },
    {
        image: "../assets/smith.jpg",
        name: "Máquina Smith",
        category: "Musculação"
    }
];

// Clients Data
export const clients: Client[] = [
    { logo: "https://fitmaisequipamentos.com.br/wp-content/uploads/2021/08/logo-movement.png", name: "Movement" },
    { logo: "https://fitmaisequipamentos.com.br/wp-content/uploads/2021/08/logo-total-health.png", name: "Total Health" },
    { logo: "https://fitmaisequipamentos.com.br/wp-content/uploads/2021/08/logo-embreex.png", name: "Embreex" },
    { logo: "https://fitmaisequipamentos.com.br/wp-content/uploads/2021/08/logo-kenzup.png", name: "Kenzup" },
];
