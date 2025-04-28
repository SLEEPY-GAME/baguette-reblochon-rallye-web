
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";

const TeamSection: React.FC = () => {
  const teamMembers = [
    {
      name: "Antoine",
      nickname: "Baguette",
      role: "Le technicien stratège",
      description: "L'aîné, pilote en chef, mécanicien et cerveau de l'équipe. Sa capacité à résoudre des problèmes techniques est à l'origine du surnom Baguette - toujours droit au but.",
      image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      name: "Marianne",
      nickname: "La 4L",
      role: "Notre fidèle compagne",
      description: "Plus qu'un véhicule, Marianne est le troisième membre de l'équipe. Cette 4L emblématique nous accompagne à travers montagnes, déserts et routes sinueuses depuis le début de notre aventure.",
      image: "https://images.unsplash.com/photo-1553413077-190dd305871c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      name: "Julian",
      nickname: "Reblochon",
      role: "La force tranquille",
      description: "Le cadet, co-pilote, logisticien et force tranquille du duo. Comme le fromage dont il porte le surnom, il a un caractère fort et apporte toujours du réconfort dans les moments difficiles.",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
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
