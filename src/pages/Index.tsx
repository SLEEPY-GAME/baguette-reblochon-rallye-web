
import React from 'react';
import HeroSection from '@/components/HeroSection';
import TeamSection from '@/components/TeamSection';
import MissionSection from '@/components/MissionSection';
import StatsSection from '@/components/StatsSection';
import CallToAction from '@/components/CallToAction';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import ServicesSection from '@/components/ServicesSection';
import ContactSection from '@/components/ContactSection';

const Index: React.FC = () => {
  return (
    <div className="min-h-screen">
      <NavBar />
      <div id="hero">
        <HeroSection />
      </div>
      <div id="mission">
        <MissionSection />
      </div>
      <div id="team">
        <TeamSection />
      </div>
      <div id="stats">
        <StatsSection />
      </div>
      <div id="services">
        <ServicesSection />
      </div>
      <div id="contact">
        <ContactSection />
      </div>
      <div id="donate">
        <CallToAction />
      </div>
      <Footer />
    </div>
  );
};

export default Index;
