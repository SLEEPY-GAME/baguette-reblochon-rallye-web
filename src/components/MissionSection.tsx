
import React from 'react';
import { HandHeart, Truck, Gift } from "lucide-react";

const MissionSection: React.FC = () => {
  const missions = [
    {
      icon: <HandHeart className="w-12 h-12 text-br-blue" />,
      title: "Engagement Humanitaire",
      description: "Nous participons à des rallyes solidaires pour acheminer des fournitures scolaires, des équipements médicaux et sportifs aux enfants défavorisés."
    },
    {
      icon: <Truck className="w-12 h-12 text-br-blue" />,
      title: "Aventure & Défis",
      description: "Nous traversons déserts, montagnes et pistes inconnues pour apporter notre aide là où elle est nécessaire, en repoussant nos limites."
    },
    {
      icon: <Gift className="w-12 h-12 text-br-blue" />,
      title: "Partage & Sensibilisation",
      description: "Nous partageons notre expérience pour sensibiliser aux enjeux humanitaires et inspirer d'autres personnes à s'engager."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-br-blue font-medium">NOTRE MISSION</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">Aventure Humanitaire</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Entre les montagnes de Savoie et les dunes du désert marocain, notre mission allie passion pour l'aventure et engagement humanitaire.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {missions.map((mission, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 text-center"
            >
              <div className="bg-blue-50 w-20 h-20 mx-auto rounded-full flex items-center justify-center mb-6">
                {mission.icon}
              </div>
              <h3 className="text-xl font-bold mb-4">{mission.title}</h3>
              <p className="text-gray-600">{mission.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
