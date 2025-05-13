
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const HeroSection: React.FC = () => {
  const scrollToDonate = () => {
    const donateSection = document.getElementById('donate');
    if (donateSection) {
      donateSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToMission = () => {
    const missionSection = document.getElementById('mission');
    if (missionSection) {
      missionSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return <div className="hero-section-4l min-h-screen flex items-center relative">
      <div className="container mx-auto px-4 py-20 text-center md:text-left">
        <div className="md:max-w-2xl animate-fade-in">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            Aventure & Solidarité
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8">
            Deux frères savoyards, une 4L emblématique et un rêve humanitaire
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Button 
              onClick={scrollToDonate} 
              className="bg-br-yellow text-black hover:bg-br-yellow/80 text-lg px-8 py-6"
            >
              Soutenir l'aventure
            </Button>
            <Button 
              onClick={scrollToMission}
              variant="outline" 
              className="border-white text-lg px-8 py-6 bg-slate-950 hover:bg-slate-800 text-gray-50"
            >
              Découvrir nos actions
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="#ffffff" fillOpacity="1" d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,224C672,245,768,267,864,261.3C960,256,1056,224,1152,202.7C1248,181,1344,171,1392,165.3L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>
    </div>;
};

export default HeroSection;
