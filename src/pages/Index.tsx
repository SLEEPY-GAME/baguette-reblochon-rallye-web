
import React from 'react';
import HeroSection from '@/components/HeroSection';
import TeamSection from '@/components/TeamSection';
import MissionSection from '@/components/MissionSection';
import StatsSection from '@/components/StatsSection';
import CallToAction from '@/components/CallToAction';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';

const Index: React.FC = () => {
  return (
    <div className="min-h-screen">
      <NavBar />
      <HeroSection />
      <MissionSection />
      <TeamSection />
      <StatsSection />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default Index;
