import React from "react";
import HeroSection from "./components/HeroSection";
import ProductSection from "./components/ProductSection";
import BenefitsSection from "./components/BenefitsSection";
import PrivacyPolicySection from "./components/PrivacyPolicySection";
import CostsAndCommissions from "./components/CostsAndCommissions";
import Footer from "./components/Footer";

const App = () => {
  // Check if we're on the costs and commissions page
  const isCostsPage = window.location.pathname === '/costs-and-commissions';

  if (isCostsPage) {
    return <CostsAndCommissions />;
  }

  return (
    <div className="text-white min-h-screen flex flex-col font-sans">
      <main>
        <HeroSection />
        <section id="benefits"><BenefitsSection /></section>
        <section id="product"><ProductSection /></section>
        <section id="privacy"><PrivacyPolicySection /></section>
        <section id="footer"><Footer /></section>
      </main>
    </div>
  );
};

export default App;
