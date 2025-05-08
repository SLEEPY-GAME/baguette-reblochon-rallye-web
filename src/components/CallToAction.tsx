
import React from 'react';
import { Button } from "@/components/ui/button";
import { Instagram, Facebook, ArrowRight } from "lucide-react";

const CallToAction: React.FC = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 bg-gradient-to-r from-br-yellow/20 to-br-blue/20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Rejoignez l'Aventure</h2>
          <p className="text-xl text-gray-700 mb-8">
            Soutenez notre participation au 4L Trophy 2025 et au 4L Alpes 2026 et aidez-nous à faire une différence pour les enfants défavorisés !
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
            <Button className="bg-br-blue hover:bg-br-blue/90 text-white px-8 py-6 text-lg"
              onClick={() => window.location.href = "https://www.helloasso.com/associations/baguette-et-reblochon/formulaires/1"}>
              Faire un don
            </Button>
            <Button 
              variant="outline" 
              className="border-br-blue text-br-blue hover:bg-br-blue/10 px-8 py-6 text-lg"
              onClick={scrollToContact}
            >
              Devenir sponsor
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
          
          <div className="flex justify-center gap-4">
            <a 
              href="https://www.instagram.com/baguette_et_reblochon/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white p-3 rounded-full shadow-md hover:shadow-lg transition-shadow"
            >
              <Instagram className="w-6 h-6 text-pink-600" />
            </a>
            <a 
              href="https://www.facebook.com/profile.php?id=61556435617265" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white p-3 rounded-full shadow-md hover:shadow-lg transition-shadow"
            >
              <Facebook className="w-6 h-6 text-blue-600" />
            </a>
            <a 
              href="https://www.helloasso.com/associations/baguette-et-reblochon" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white px-5 py-3 rounded-full shadow-md hover:shadow-lg transition-shadow flex items-center"
            >
              <span className="font-bold text-blue-700">HelloAsso</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
