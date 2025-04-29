
import React from 'react';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { CalendarDays, FileText, Users, Truck } from 'lucide-react';
import StatsSection from '@/components/StatsSection';

const Actions: React.FC = () => {
  const pastEvents = [
    {
      title: "Collecte de fournitures scolaires",
      date: "Mai 2024",
      description: "Plus de 50kg de fournitures scolaires collectées pour les enfants du Maroc.",
      image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
    },
    {
      title: "Rallye solidaire des Alpes",
      date: "Juillet 2024",
      description: "Une traversée des Alpes pour sensibiliser aux actions humanitaires avec collecte de fonds.",
      image: "https://images.unsplash.com/photo-1500674425229-f692875b0ab7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
    },
    {
      title: "Préparation du véhicule",
      date: "Août-Septembre 2024",
      description: "Révision complète de notre 4L Marianne pour s'assurer qu'elle sera prête pour l'aventure.",
      image: "https://images.unsplash.com/photo-1617886322168-72b886573c66?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
    }
  ];

  return (
    <div className="min-h-screen">
      <NavBar />

      {/* Hero section for Actions page */}
      <div 
        className="relative pt-24 pb-20 px-4" 
        style={{
          backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('https://images.unsplash.com/photo-1469041797191-50ace28483c3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      >
        <div className="container mx-auto text-center">
          <div className="max-w-2xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Nos Actions Humanitaires
            </h1>
            <p className="text-xl text-white/90 mb-8">
              À travers les rallyes et initiatives solidaires, nous apportons notre soutien aux enfants défavorisés
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

      {/* Past Events */}
      {/* 4L Trophy 2025 */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-br-blue font-medium">NOTRE TOUT PREMIER DÉFI</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">4L Trophy 2025</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Le plus grand rallye étudiant d'Europe à vocation humanitaire. 6000 km à travers la France, l'Espagne et le Maroc pour livrer des fournitures scolaires aux enfants défavorisés.
            </p>
          </div>

          <Tabs defaultValue="about" className="max-w-4xl mx-auto">
            <TabsList className="grid grid-cols-2 md:grid-cols-4 mb-8">
              <TabsTrigger value="about">Présentation</TabsTrigger>
              <TabsTrigger value="preparation">Préparation</TabsTrigger>
              <TabsTrigger value="itinerary">Itinéraire</TabsTrigger>
              <TabsTrigger value="goals">Objectifs</TabsTrigger>
            </TabsList>
            
            <TabsContent value="about" className="bg-white p-6 rounded-lg shadow-md">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-bold mb-4">Le 4L Trophy</h3>
                  <p className="text-gray-700 mb-4">
                    Le 4L Trophy est un raid humanitaire créé en 1997 destiné aux étudiants qui sillonnent le Maroc à bord de Renault 4L pour distribuer des fournitures scolaires aux enfants les plus démunis.
                  </p>
                  <p className="text-gray-700">
                    Chaque année, plus de 1500 équipages participent à cette aventure unique, alliant défi sportif et action humanitaire.
                  </p>
                </div>
                <div className="rounded-lg overflow-hidden h-64">
                  <img 
                    src="https://images.unsplash.com/photo-1469041797191-50ace28483c3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                    alt="4L Trophy" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="preparation" className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-4">Notre Préparation</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="font-medium">Inscription</span>
                  <span className="text-green-600">Complété ✓</span>
                </div>
                <div className="w-full bg-gray-200 h-2 rounded-full">
                  <div className="bg-green-500 h-2 rounded-full" style={{ width: '100%' }}></div>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="font-medium">Révision mécanique</span>
                  <span className="text-green-600">En cours (80%)</span>
                </div>
                <div className="w-full bg-gray-200 h-2 rounded-full">
                  <div className="bg-green-500 h-2 rounded-full" style={{ width: '80%' }}></div>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="font-medium">Collecte de fournitures</span>
                  <span className="text-yellow-600">En cours (50%)</span>
                </div>
                <div className="w-full bg-gray-200 h-2 rounded-full">
                  <div className="bg-yellow-500 h-2 rounded-full" style={{ width: '50%' }}></div>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="font-medium">Recherche de sponsors</span>
                  <span className="text-yellow-600">En cours (60%)</span>
                </div>
                <div className="w-full bg-gray-200 h-2 rounded-full">
                  <div className="bg-yellow-500 h-2 rounded-full" style={{ width: '60%' }}></div>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="itinerary" className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-4">Notre Itinéraire</h3>
              <div className="space-y-4">
                <div className="flex gap-3">
                  <div className="bg-br-blue text-white px-3 py-1 rounded-full text-sm">Étape 1</div>
                  <div>
                    <h4 className="font-bold">Biarritz → Algeciras</h4>
                    <p className="text-gray-600">Traversée de la France et de l'Espagne (1500 km)</p>
                  </div>
                </div>
                
                <div className="flex gap-3">
                  <div className="bg-br-blue text-white px-3 py-1 rounded-full text-sm">Étape 2</div>
                  <div>
                    <h4 className="font-bold">Algeciras → Tanger</h4>
                    <p className="text-gray-600">Traversée du détroit de Gibraltar en ferry</p>
                  </div>
                </div>
                
                <div className="flex gap-3">
                  <div className="bg-br-blue text-white px-3 py-1 rounded-full text-sm">Étape 3</div>
                  <div>
                    <h4 className="font-bold">Tanger → Boulaajoul</h4>
                    <p className="text-gray-600">Première étape marocaine (400 km)</p>
                  </div>
                </div>
                
                <div className="flex gap-3">
                  <div className="bg-br-blue text-white px-3 py-1 rounded-full text-sm">Étape 4</div>
                  <div>
                    <h4 className="font-bold">Boulaajoul → Merzouga</h4>
                    <p className="text-gray-600">Traversée des montagnes de l'Atlas (350 km)</p>
                  </div>
                </div>
                
                <div className="flex gap-3">
                  <div className="bg-br-blue text-white px-3 py-1 rounded-full text-sm">Étape 5</div>
                  <div>
                    <h4 className="font-bold">Merzouga → Marrakech</h4>
                    <p className="text-gray-600">Traversée du désert et arrivée (450 km)</p>
                  </div>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="goals" className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-4">Nos Objectifs</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="border border-gray-200 p-4 rounded-lg">
                  <h4 className="font-bold text-lg mb-2">Objectifs Humanitaires</h4>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    <li>Livrer 100kg de fournitures scolaires</li>
                    <li>Apporter 30kg d'équipements sportifs</li>
                    <li>Fournir 20kg de matériel médical</li>
                    <li>Parrainer une école locale pendant 1 an</li>
                  </ul>
                </div>
                <div className="border border-gray-200 p-4 rounded-lg">
                  <h4 className="font-bold text-lg mb-2">Objectifs Personnels</h4>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    <li>Terminer le rallye dans sa totalité</li>
                    <li>Promouvoir l'engagement humanitaire</li>
                    <li>Partager notre expérience avec le public</li>
                    <li>Établir des contacts durables avec les communautés locales</li>
                  </ul>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Stats Section */}
      <StatsSection />

      {/* 4L Trophy 2025 */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-br-blue font-medium">NOTRE PROCHAIN DÉFI</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">4L Trophy 2025</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Le plus grand rallye étudiant d'Europe à vocation humanitaire. 6000 km à travers la France, l'Espagne et le Maroc pour livrer des fournitures scolaires aux enfants défavorisés.
            </p>
          </div>

          <Tabs defaultValue="about" className="max-w-4xl mx-auto">
            <TabsList className="grid grid-cols-2 md:grid-cols-4 mb-8">
              <TabsTrigger value="about">Présentation</TabsTrigger>
              <TabsTrigger value="preparation">Préparation</TabsTrigger>
              <TabsTrigger value="itinerary">Itinéraire</TabsTrigger>
              <TabsTrigger value="goals">Objectifs</TabsTrigger>
            </TabsList>
            
            <TabsContent value="about" className="bg-white p-6 rounded-lg shadow-md">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-bold mb-4">Le 4L Trophy</h3>
                  <p className="text-gray-700 mb-4">
                    Le 4L Trophy est un raid humanitaire créé en 1997 destiné aux étudiants qui sillonnent le Maroc à bord de Renault 4L pour distribuer des fournitures scolaires aux enfants les plus démunis.
                  </p>
                  <p className="text-gray-700">
                    Chaque année, plus de 1500 équipages participent à cette aventure unique, alliant défi sportif et action humanitaire.
                  </p>
                </div>
                <div className="rounded-lg overflow-hidden h-64">
                  <img 
                    src="https://images.unsplash.com/photo-1469041797191-50ace28483c3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                    alt="4L Trophy" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="preparation" className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-4">Notre Préparation</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="font-medium">Inscription</span>
                  <span className="text-green-600">Complété ✓</span>
                </div>
                <div className="w-full bg-gray-200 h-2 rounded-full">
                  <div className="bg-green-500 h-2 rounded-full" style={{ width: '100%' }}></div>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="font-medium">Révision mécanique</span>
                  <span className="text-green-600">En cours (80%)</span>
                </div>
                <div className="w-full bg-gray-200 h-2 rounded-full">
                  <div className="bg-green-500 h-2 rounded-full" style={{ width: '80%' }}></div>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="font-medium">Collecte de fournitures</span>
                  <span className="text-yellow-600">En cours (50%)</span>
                </div>
                <div className="w-full bg-gray-200 h-2 rounded-full">
                  <div className="bg-yellow-500 h-2 rounded-full" style={{ width: '50%' }}></div>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="font-medium">Recherche de sponsors</span>
                  <span className="text-yellow-600">En cours (60%)</span>
                </div>
                <div className="w-full bg-gray-200 h-2 rounded-full">
                  <div className="bg-yellow-500 h-2 rounded-full" style={{ width: '60%' }}></div>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="itinerary" className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-4">Notre Itinéraire</h3>
              <div className="space-y-4">
                <div className="flex gap-3">
                  <div className="bg-br-blue text-white px-3 py-1 rounded-full text-sm">Étape 1</div>
                  <div>
                    <h4 className="font-bold">Biarritz → Algeciras</h4>
                    <p className="text-gray-600">Traversée de la France et de l'Espagne (1500 km)</p>
                  </div>
                </div>
                
                <div className="flex gap-3">
                  <div className="bg-br-blue text-white px-3 py-1 rounded-full text-sm">Étape 2</div>
                  <div>
                    <h4 className="font-bold">Algeciras → Tanger</h4>
                    <p className="text-gray-600">Traversée du détroit de Gibraltar en ferry</p>
                  </div>
                </div>
                
                <div className="flex gap-3">
                  <div className="bg-br-blue text-white px-3 py-1 rounded-full text-sm">Étape 3</div>
                  <div>
                    <h4 className="font-bold">Tanger → Boulaajoul</h4>
                    <p className="text-gray-600">Première étape marocaine (400 km)</p>
                  </div>
                </div>
                
                <div className="flex gap-3">
                  <div className="bg-br-blue text-white px-3 py-1 rounded-full text-sm">Étape 4</div>
                  <div>
                    <h4 className="font-bold">Boulaajoul → Merzouga</h4>
                    <p className="text-gray-600">Traversée des montagnes de l'Atlas (350 km)</p>
                  </div>
                </div>
                
                <div className="flex gap-3">
                  <div className="bg-br-blue text-white px-3 py-1 rounded-full text-sm">Étape 5</div>
                  <div>
                    <h4 className="font-bold">Merzouga → Marrakech</h4>
                    <p className="text-gray-600">Traversée du désert et arrivée (450 km)</p>
                  </div>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="goals" className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-4">Nos Objectifs</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="border border-gray-200 p-4 rounded-lg">
                  <h4 className="font-bold text-lg mb-2">Objectifs Humanitaires</h4>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    <li>Livrer 100kg de fournitures scolaires</li>
                    <li>Apporter 30kg d'équipements sportifs</li>
                    <li>Fournir 20kg de matériel médical</li>
                    <li>Parrainer une école locale pendant 1 an</li>
                  </ul>
                </div>
                <div className="border border-gray-200 p-4 rounded-lg">
                  <h4 className="font-bold text-lg mb-2">Objectifs Personnels</h4>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    <li>Terminer le rallye dans sa totalité</li>
                    <li>Promouvoir l'engagement humanitaire</li>
                    <li>Partager notre expérience avec le public</li>
                    <li>Établir des contacts durables avec les communautés locales</li>
                  </ul>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Actions;
