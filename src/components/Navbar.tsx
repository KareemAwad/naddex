import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import clsx from 'clsx';

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={clsx(
      'fixed w-full z-50 transition-all duration-300',
      isScrolled ? 'bg-white shadow-lg py-4' : 'bg-transparent py-6'
    )}>
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center">
          <a href="#" className={clsx(
            'text-2xl font-heading font-bold tracking-tight transition-colors',
            isScrolled ? 'text-[#244E8A]' : 'text-white'
          )}>
            NADDEX SERVICES INC.
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {['About', 'Services', 'Expertise', 'Team', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className={clsx(
                  'font-medium hover:text-[#244E8A] transition-colors',
                  isScrolled ? 'text-gray-700' : 'text-white'
                )}
              >
                {item}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={clsx(
              'md:hidden p-2 rounded-lg',
              isScrolled ? 'text-gray-700' : 'text-white'
            )}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg py-4">
            <div className="container mx-auto px-6">
              <div className="flex flex-col space-y-4">
                {['About', 'Services', 'Expertise', 'Team', 'Contact'].map((item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="text-gray-700 hover:text-[#244E8A] transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item}
                  </a>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}