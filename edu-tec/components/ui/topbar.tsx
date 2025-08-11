"use client";
import React, { useState, useEffect } from "react"; // Importei os hooks (useState,useEffect)
import Button from "./buttons/button";
import ContactModal from "./modals/modal";
import {
  Home,
  BookOpen,
  MessageCircle,
  Menu,
  X,
  GraduationCap,
  ArrowRight
} from "lucide-react";

const TopBar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [showContactModal, setShowContactModal] = React.useState(false);

  // 2. ADICIONE OS ESTADOS PARA CONTROLAR A VISIBILIDADE
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (typeof document !== "undefined") {
      document.body.style.overflow = isMenuOpen ? "auto" : "hidden";
    }
  };

  // 3. ADICIONE O EFEITO PARA LIDAR COM O SCROLL
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Esconde a barra ao rolar para baixo e mostra ao rolar para cima
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // O 'currentScrollY > 100' evita que a barra suma com um scroll mínimo no topo
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      // Atualiza a última posição de scroll
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    // Limpa o event listener quando o componente for desmontado para evitar vazamentos de memória
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]); // O useEffect será re-executado quando `lastScrollY` mudar

  return (
    <>
      {/* 4. APLIQUE AS CLASSES DE TRANSIÇÃO E VISIBILIDADE */}
      <header
        className={`w-full h-16 bg-[#00b153] sticky top-0 z-50 backdrop-blur-sm font-poppins transition-transform duration-300 ${
          isVisible ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
          <div className="flex items-center justify-between h-full">
            {/* Logo */}
            <div>
              <a
                href="/"
                className="flex items-center space-x-2 group transition-transform duration-200 hover:scale-105 cursor-pointer"
              >
                <div className="w-8 h-8 bg-[#05365F] rounded-lg flex items-center justify-center shadow-lg">
                  <span>
                    <ArrowRight className="w-5 h-5 text-white" />
                  </span>
                </div>
                <span className="text-2xl font-poppins bg-[#05365F] bg-clip-text text-transparent">
                  EduTec
                </span>
              </a>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-1">
              <div className="relative">
                <a
                  href="/" //Referencia de onde o link te leva
                  className="flex items-center space-x-2 px-4 py-2 rounded-lg text-[#05365F] hover transition-all duration-200 font-poppins-medium group cursor-pointer"
                >
                  <Home className="w-4 h-4" />
                  <span className="shadow-black shadow-2xl">
                    Página Principal
                  </span>
                  <span className="absolute -bottom-1 left-1/2 w-0 transition-all h-0.5 bg-[#05365F] group-hover:w-3/6"></span>
                  <span className="absolute -bottom-1 right-1/2 w-0 transition-all h-0.5 bg-[#05365F] group-hover:w-3/6"></span>
                </a>
              </div>
              <div className="relative">
                <a
                  href="#cursos" //Referencia de onde o link te leva
                  className="flex items-center space-x-2 px-4 py-2 rounded-lg text-[#05365F] hover transition-all duration-200 font-poppins-medium group cursor-pointer"
                >
                  <BookOpen className="w-4 h-4" />
                  <span>Cursos</span>
                  <span className="absolute -bottom-1 left-1/2 w-0 transition-all h-0.5 bg-[#05365F] group-hover:w-3/6"></span>
                  <span className="absolute -bottom-1 right-1/2 w-0 transition-all h-0.5 bg-[#05365F] group-hover:w-3/6"></span>
                </a>
              </div>
              <div className="relative">
                <a
                  href="#contato" //Referencia de onde o link te leva
                  className="flex items-center space-x-2 px-4 py-2 rounded-lg text-[#05365F] hover transition-all duration-200 font-poppins group cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Fale conosco</span>
                  <span className="absolute -bottom-1 left-1/2 w-0 transition-all h-0.5 bg-[#05365F] group-hover:w-3/6"></span>
                  <span className="absolute -bottom-1 right-1/2 w-0 transition-all h-0.5 bg-[#05365F] group-hover:w-3/6"></span>
                </a>
              </div>
            </nav>

            {/* CTA Button & Mobile Menu */}
            <div className="flex items-center space-x-4">
              <Button
                className="hidden sm:flex bg-[#05365F] hover:text-white shadow-lg hover:shadow-xl transition duration-100 transform hover:scale-100 cursor-pointer"
                onClick={() => setShowContactModal(true)}
              >
                Começar Agora
              </Button>

              {/* Mobile Menu Button */}
              <button
                onClick={toggleMenu}
                className="md:hidden p-2 rounded-lg text-[#05365F] hover transition-colors duration-200 cursor-pointer"
                aria-label="Toggle menu"
              >
                {isMenuOpen ? (
                  <X className="w-5 h-5" />
                ) : (
                  <Menu className="w-5 h-5" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden absolute top-16 left-0 right-0 bg-[#42b577] shadow-lg">
              <nav className="flex flex-col p-4 space-y-2">
                <a
                  href="#hero" //Referencia de onde o link te leva
                  className="flex items-center space-x-3 px-4 py-3 rounded-lg text-[#05365F] hover:bg-[#00b153] transition-all duration-200 font-poppins-medium cursor-pointer"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Home className="w-5 h-5" />
                  <span>Página Principal</span>
                </a>
                <a
                  href="#cursos" //Referencia de onde o link te leva
                  className="flex items-center space-x-3 px-4 py-3 rounded-lg text-[#05365F] hover:bg-[#00b153] transition-all duration-200 font-poppins-medium cursor-pointer"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <BookOpen className="w-5 h-5" />
                  <span>Cursos</span>
                </a>
                <a
                  href="#contato" //Referencia de onde o link te leva
                  className="flex items-center space-x-3 px-4 py-3 rounded-lg text-[#05365F] hover:bg-[#00b153] transition-all duration-200 font-poppins-medium cursor-pointer"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>Fale conosco</span>
                </a>
                <div className="pt-2">
                  <Button
                    className="w-full bg-[#05365F] hover:text-white shadow-lg hover:shadow-xl transition duration-100 transform hover:scale-100 cursor-pointer"
                    onClick={() => {
                      setShowContactModal(true);
                      setIsMenuOpen(false);
                    }}
                  >
                    Começar Agora
                  </Button>
                </div>
              </nav>
            </div>
          )}
        </div>
      </header>
      <ContactModal
        isOpen={showContactModal}
        onClose={() => setShowContactModal(false)}
        selectedContent="Matrícula"
      />
    </>
  );
};

export default TopBar;
