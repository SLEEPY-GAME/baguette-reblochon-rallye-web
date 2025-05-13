import React from 'react';
import { Card, CardContent } from "@/components/ui/card";

const TeamSection: React.FC = () => {
  const teamMembers = [
    {
      name: "Antoine",
      nickname: "Baguette",
      role: "Le mécano à la tête froide",
      description: "L'aîné, co-pilote en chef, mécanicien et cerveau de l'équipe. Baguette arrive toujours à temps pour empécher Reblochon de faire des bourdes.",
      image: "/lovable-uploads/88327f10-24ed-4b88-be47-06c43f5b0d27.png"
    },
    {
      name: "Marianne",
      nickname: "La 4L",
      role: "Notre fidèle compagne",
      description: "Plus qu'un véhicule, Marianne est le troisième membre de la fraterie. Cette 4L emblématique nous accompagne à travers montagnes, déserts et routes sinueuses depuis le début de notre aventure.",
      image: "/lovable-uploads/1eaef86a-19f2-4346-ace4-8070e77de0d7.png"
    },
    {
      name: "Julian",
      nickname: "Reblochon",
      role: "La joyeuse tornade",
      description: "Le cadet, pilote en chef, community manager et fonceur de l'équipe. Reblochon ose ! Cela nous sors bien souvent des moments difficiles mais vaut mieux le garder à l'oeil !",
      image: "/lovable-uploads/4d492a0c-ea49-48bc-adc0-211c42e3272a.png"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">Notre Équipe</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Découvrez les visages derrière Baguette et Reblochon, une fraternité savoyarde sur les routes de l'aventure humanitaire.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {teamMembers.map((member, index) => (
            <Card key={index} className="card-hover overflow-hidden border-none shadow-lg">
              <div className="h-60 overflow-hidden">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover object-center transform hover:scale-110 transition-transform duration-500"
                />
              </div>
              <CardContent className="p-6 bg-gradient-to-br from-white to-gray-50">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-bold text-gray-800">{member.name}</h3>
                  <span className="bg-br-blue/10 text-br-blue text-sm px-3 py-1 rounded-full">
                    {member.nickname}
                  </span>
                </div>
                <p className="text-sm font-medium text-br-blue mb-3">{member.role}</p>
                <p className="text-gray-600">{member.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
