
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Camera, Pizza, Gift, Euro, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ServicesSection: React.FC = () => {
  const services = [
    {
      id: "photobooth",
      icon: <Camera className="w-12 h-12 text-br-blue" />,
      title: "Location de Photobooth",
      description: "Rendez vos événements mémorables avec notre photobooth personnalisé aux couleurs de Baguette et Reblochon.",
      features: [
        "Accessoires thématiques inclus",
        "Installation et retrait compris",
        "Photos illimitées pendant l'événement",
        "Personnalisation des impressions",
        "Partage instantané sur les réseaux sociaux"
      ],
      price: "À partir de 300€ la soirée",
      image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "sponsors",
      icon: <Euro className="w-12 h-12 text-br-blue" />,
      title: "Sponsoring",
      description: "Devenez sponsor de notre équipe et bénéficiez d'une visibilité unique lors de nos aventures.",
      features: [
        "Logo sur notre véhicule",
        "Visibilité sur nos réseaux sociaux",
        "Mention dans nos communiqués de presse",
        "Contenu exclusif pour vos propres communications",
        "Déduction fiscale pour les entreprises"
      ],
      price: "Offres personnalisées",
      image: "https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    }
  ];

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Nos Services</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Pour financer notre participation au 4L Trophy et poursuivre nos actions humanitaires, nous proposons divers services et produits. Découvrez-les ci-dessous.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-12">
          {services.map((service) => (
            <Card key={service.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6">
                <div className="rounded-lg overflow-hidden h-64 md:h-auto">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-blue-50 w-12 h-12 rounded-full flex items-center justify-center">
                      {service.icon}
                    </div>
                    <h3 className="text-2xl font-bold">{service.title}</h3>
                  </div>
                  <p className="text-gray-700 mb-6">{service.description}</p>
                  
                  <h4 className="font-semibold mb-3">Ce que nous proposons :</h4>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <svg className="w-5 h-5 text-green-500 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-bold text-lg">{service.price}</span>
                    <Button onClick={scrollToContact} className="bg-br-blue hover:bg-br-blue/90">En savoir plus</Button>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
