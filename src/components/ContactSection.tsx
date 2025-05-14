
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Mail, Phone, MapPin, Loader2 } from "lucide-react";
import { toast } from "@/components/ui/use-toast";
import emailjs from 'emailjs-com';

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      const templateParams = {
        name: formData.name,
        from_email: formData.email,
        message: formData.message,
        to_email: 'baguetteetreblochon@gmail.com'
      };
      
      await emailjs.send(
        'service_1lqq3qj', // You'll need to replace with your actual service ID
        'template_dt3u8ed', // You'll need to replace with your actual template ID
        templateParams,
        'J9v33p6g2vHVk4eVr' // You'll need to replace with your actual user ID
      );
      
      toast({
        title: "Message envoyé !",
        description: "Nous vous répondrons dans les plus brefs délais.",
      });
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error("Error sending email:", error);
      toast({
        title: "Erreur",
        description: "Une erreur s'est produite lors de l'envoi de votre message. Veuillez réessayer.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };
  
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Contactez-nous</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Une question sur nos actions ? Envie de devenir sponsor ? Contactez-nous et nous vous répondrons rapidement.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <Card className="p-6 shadow-md">
            <form onSubmit={handleSubmit}>
              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Nom
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Votre nom"
                    required
                    className="w-full"
                    disabled={isLoading}
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="votre@email.com"
                    required
                    className="w-full"
                    disabled={isLoading}
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Votre message"
                    required
                    className="w-full min-h-[150px]"
                    disabled={isLoading}
                  />
                </div>
                <Button 
                  type="submit" 
                  className="w-full bg-br-blue hover:bg-br-blue/90"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Envoi en cours...
                    </>
                  ) : (
                    "Envoyer"
                  )}
                </Button>
              </div>
            </form>
          </Card>
          
          <div className="flex flex-col justify-center">
            <div className="mb-8 bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-6">Informations de contact</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-blue-50 p-3 rounded-full">
                    <MapPin className="w-6 h-6 text-br-blue" />
                  </div>
                  <div>
                    <p className="font-medium">Adresse</p>
                    <p className="text-gray-600">Antibes, France</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-blue-50 p-3 rounded-full">
                    <Mail className="w-6 h-6 text-br-blue" />
                  </div>
                  <div>
                    <p className="font-medium">Email</p>
                    <a href="mailto:baguetteetreblochon@gmail.com" className="text-br-blue hover:underline">
                      baguetteetreblochon@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-blue-50 p-3 rounded-full">
                    <Phone className="w-6 h-6 text-br-blue" />
                  </div>
                  <div>
                    <p className="font-medium">Téléphone</p>
                    <a href="tel:+33634687088" className="text-br-blue hover:underline">
                      +33 6 34 68 70 88
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="p-5 bg-br-blue text-white rounded-lg shadow-lg">
              <p className="text-lg font-semibold">Heures de disponibilité</p>
              <p className="mt-2">Du lundi au vendredi, de 9h00 à 18h00</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
