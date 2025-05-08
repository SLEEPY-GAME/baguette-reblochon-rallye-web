
import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const NavBar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
      
      // Determine which section is currently in view
      const sections = ["hero", "mission", "team", "stats", "services", "contact", "donate"];
      let currentSection = "hero";
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            currentSection = section;
            break;
          }
        }
      }
      
      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false);
  };

  const navLinks = [
    { name: "Accueil", sectionId: "hero" },
    { name: "Notre Équipe", sectionId: "team" },
    { name: "Notre Mission", sectionId: "mission" },
    { name: "Notre Impact", sectionId: "stats" },
    { name: "Nos Services", sectionId: "services" },
    { name: "Contact", sectionId: "contact" },
  ];

  return (
    <nav
      className={cn(
        "fixed w-full z-50 transition-all duration-300",
        isScrolled 
          ? "bg-white shadow-md py-2" 
          : "bg-transparent py-4"
      )}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a 
          onClick={() => scrollToSection("hero")} 
          className="flex items-center gap-2 cursor-pointer"
        >
          <div className="w-12 h-12 bg-br-blue rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-lg">B&R</span>
          </div>
          <span className={cn(
            "font-lora font-bold text-xl transition-colors",
            isScrolled ? "text-br-blue" : "text-white"
          )}>
            Baguette et Reblochon
          </span>
        </a>
        
        {/* Mobile menu button */}
        <button 
          onClick={toggleMenu}
          className="md:hidden"
        >
          <svg 
            className={cn(
              "w-6 h-6 transition-colors",
              isScrolled ? "text-br-blue" : "text-white"
            )} 
            fill="none" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth="2" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            {isMenuOpen ? (
              <path d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        {/* Desktop navigation */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a 
              key={link.sectionId} 
              onClick={() => scrollToSection(link.sectionId)}
              className={cn(
                "font-medium transition-colors hover:text-br-blue relative pb-1 cursor-pointer",
                activeSection === link.sectionId
                  ? isScrolled ? "text-br-blue" : "text-br-yellow"
                  : isScrolled ? "text-gray-700" : "text-white",
                activeSection === link.sectionId && "after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-current"
              )}
            >
              {link.name}
            </a>
          ))}
          <Button 
            className="bg-br-yellow text-black hover:bg-br-yellow/80 ml-4"
            onClick={() => window.location.href = "https://www.helloasso.com/associations/baguette-et-reblochon/formulaires/1"}
            >
            Faire un don
          </Button>
        </div>

        {/* Mobile navigation */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-white shadow-md p-4 md:hidden">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a 
                  key={link.sectionId} 
                  onClick={() => scrollToSection(link.sectionId)}
                  className={cn(
                    "font-medium transition-colors hover:text-br-blue py-2 cursor-pointer",
                    activeSection === link.sectionId ? "text-br-blue" : "text-gray-700"
                  )}
                >
                  {link.name}
                </a>
              ))}
              <Button 
                className="bg-br-yellow text-black hover:bg-br-yellow/80 w-full mt-2"
                onClick={() => scrollToSection("donate")}
              >
                Faire un don
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
