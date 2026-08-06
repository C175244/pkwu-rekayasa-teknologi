import { useState, useEffect } from 'react';
import { Menu, X, Fish } from 'lucide-react';
import { navItems } from './data';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-sm shadow-lg border-b border-border-color'
          : 'bg-white shadow-sm'
      }`}
      style={{ height: 64 }}
    >
      <div className="container-nvidia h-full flex items-center justify-between px-6 lg:px-12">
        <button
          onClick={() => scrollToSection('home')}
          className="flex items-center gap-2 text-primary font-extrabold text-lg hover:text-primary-dark transition-colors"
        >
          <Fish size={24} />
          <span>Gurame<span className="text-secondary">Bud</span></span>
        </button>

        <div className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="px-4 py-2 text-dark text-sm font-bold hover:text-primary transition-colors"
            >
              {item.label}
            </button>
          ))}
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-dark p-2 hover:text-primary transition-colors"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-b border-border-color shadow-lg">
          <div className="px-6 py-4 flex flex-col gap-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-left px-4 py-3 text-dark text-base font-bold hover:text-primary hover:bg-surface rounded-md transition-colors"
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
