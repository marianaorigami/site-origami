
import React, { useEffect, useState } from 'react';
import { ArrowRight, Menu, MoveRight, X } from 'lucide-react';
import { Link, useLocation } from "react-router-dom";
import ButtonLink from './ui/buttonlink';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isNotHome = location.pathname !== "/";



  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Quem Somos', href: '/about' },
    { name: 'Calculadora do Bem', href: '#method' },
  ];


  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);




  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled || isNotHome ? "bg-white shadow-md text-black" : "bg-transparent text-brand-white"
      }`} >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className='flex flex-row gap-12'>
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2">
              <img className='h-8' src={scrolled || isNotHome ? "/img/logo_color.svg " : "/img/logo_white.svg"} alt="Logo" />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="hover:text-brand-green transition-colors duration-200"
                >
                  {item.name}
                </a>
              ))}
            </nav>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <ButtonLink
              to="/contactus"
              className="bg-brand-dark font-thin text-brand-white"
            >
              Inove Conosco <MoveRight className="h-4 w-4 ml-2" />
            </ButtonLink>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border animate-fadeInUp">
            <nav className="flex flex-col space-y-3">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="hover:text-brand-green transition-colors duration-200 font-medium py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <ButtonLink
                to="/contactus"
                className="bg-brand-dark font-thin text-brand-white"
              >
                Vamos inovar juntos?
              </ButtonLink>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
