import React from 'react';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Camera, Gift, Pizza, Euro, Users } from 'lucide-react';

const Services: React.FC = () => {
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

  return (
    <div className="min-h-screen">
      <NavBar />

      {/* Hero section for Services page */}
      <div 
        className="relative pt-24 pb-20 px-4" 
        style={{
          backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('https://images.unsplash.com/photo-1553413077-190dd305871c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      >
        <div className="container mx-auto text-center">
          <div className="max-w-2xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Nos Services
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Découvrez comment nous finançons notre aventure humanitaire et comment vous pouvez nous soutenir
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path 
              fill="#ffffff" 
              fillOpacity="1" 
              d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,224C672,245,768,267,864,261.3C960,256,1056,224,1152,202.7C1248,181,1344,171,1392,165.3L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
        </div>
      </div>

      {/* Services Tabs */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Comment nous soutenir ?</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Pour financer notre participation au 4L Trophy et poursuivre nos actions humanitaires, nous proposons divers services et produits. Découvrez-les ci-dessous.
            </p>
          </div>

          <Tabs defaultValue={services[0].id} className="max-w-4xl mx-auto">
            <TabsList className="grid grid-cols-2 md:grid-cols-5 mb-8 overflow-auto">
              {services.map((service) => (
                <TabsTrigger key={service.id} value={service.id}>
                  <div className="flex flex-col items-center">
                    <div className="bg-blue-50 w-10 h-10 rounded-full flex items-center justify-center mb-2">
                      {React.cloneElement(service.icon, { className: "w-5 h-5 text-br-blue" })}
                    </div>
                    <span className="text-sm">{service.title}</span>
                  </div>
                </TabsTrigger>
              ))}
            </TabsList>
            
            {services.map((service) => (
              <TabsContent key={service.id} value={service.id} className="bg-white rounded-lg shadow-md">
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
                      <Button className="bg-br-blue hover:bg-br-blue/90">En savoir plus</Button>
                    </div>
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Services;
