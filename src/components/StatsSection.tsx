
import React from 'react';
import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";

const StatsSection: React.FC = () => {
  const stats = [
    { label: "Kilomètres parcourus", value: 8500, target: 10000, unit: "km" },
    { label: "Fournitures récoltées", value: 250, target: 300, unit: "kg" },
    { label: "Rallyes réalisés", value: 1, target: 3, unit: "" },
    { label: "Réparations réalisées", value: 8, target: 10, unit: "galères" },
  ];

  return (
    <section className="py-16 bg-br-blue text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Notre Impact</h2>
          <p className="text-lg opacity-90 max-w-2xl mx-auto">
            À travers nos aventures, nous créons un impact concret pour les enfants défavorisés.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white/10 backdrop-blur p-6 rounded-lg">
              <h3 className="text-xl mb-2 font-medium">{stat.label}</h3>
              <div className="flex items-end gap-1 mb-3">
                <span className="text-4xl font-bold">{stat.value}</span>
                <span className="text-lg opacity-80 mb-1">{stat.unit}</span>
              </div>
              <Progress 
                value={(stat.value / stat.target) * 100} 
                className="h-2 bg-white/30"
                // Replace indicatorClassName with className for the indicator using cn utility
                style={{ '--progress-background': '#F5D04E' } as React.CSSProperties} 
              />
              <p className="text-sm mt-2 opacity-80">Objectif: {stat.target} {stat.unit}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
