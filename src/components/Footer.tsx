
import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Mail, Phone, MapPin } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-br-blue rounded-full flex items-center justify-center">
                <span className="text-white font-bold">B&R</span>
              </div>
              <span className="font-lora font-bold text-xl">Baguette et Reblochon</span>
            </div>
            <p className="text-gray-400 mb-4">
              Une aventure humanitaire savoyarde, sur les routes des rallyes pour aider les enfants défavorisés.
            </p>
            <div className="flex space-x-4">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-white">Accueil</Link></li>
              <li><Link to="/actions" className="text-gray-400 hover:text-white">Nos Actions</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-white">Nos Services</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-white">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Services</h3>
            <ul className="space-y-2">
              <li><Link to="/services#photobooth" className="text-gray-400 hover:text-white">Location de Photobooth</Link></li>
              <li><Link to="/services#tombola" className="text-gray-400 hover:text-white">Tombola Associative</Link></li>
              <li><Link to="/services#fromages" className="text-gray-400 hover:text-white">Vente de Fromages</Link></li>
              <li><Link to="/services#goodies" className="text-gray-400 hover:text-white">Goodies</Link></li>
              <li><Link to="/services#sponsors" className="text-gray-400 hover:text-white">Sponsors</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-br-yellow mt-1" />
                <span className="text-gray-400">Annecy, Haute-Savoie, France</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-br-yellow" />
                <a href="mailto:contact@baguettereblochon.fr" className="text-gray-400 hover:text-white">contact@baguettereblochon.fr</a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-br-yellow" />
                <a href="tel:+33612345678" className="text-gray-400 hover:text-white">+33 6 12 34 56 78</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Baguette et Reblochon. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
