
import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import WhoWeAreSection from './components/WhoWeAreSection';
import SolutionsSection from './components/SolutionsSection';
import ProductsSection from './components/ProductsSection';
import MaintenanceSection from './components/MaintenanceSection';
import SocialProofSection from './components/SocialProofSection';
import FaqSection from './components/FaqSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-fit-dark min-h-screen font-sans">
      <Header />
      <main>
        <HeroSection />
        <WhoWeAreSection />
        <SolutionsSection />
        <ProductsSection />
        <MaintenanceSection />
        <SocialProofSection />
        <FaqSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default App;
