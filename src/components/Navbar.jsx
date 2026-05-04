import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "FEATURED", href: "#featured" },
    { name: "HOT", href: "#hot" },
    { name: "WATCHES", href: "#watches" },
    { name: "SHOES", href: "#shoes" },
    { name: "CATALOGUE", href: "#catalogue" },
  ];

  return (
    <header className="bg-background border-b-4 md:border-b-8 border-black sticky top-0 z-50">
      <nav className="flex justify-between items-center w-full px-4 md:px-6 py-3 md:py-4 max-w-screen-2xl mx-auto">
        <div className="flex items-center gap-4">
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="xl:hidden p-2 border-2 border-black bg-white neobrutal-shadow-sm active-press"
          >
            <span className="material-symbols-outlined align-middle">
              {isOpen ? 'close' : 'menu'}
            </span>
          </button>
          <Link to="/" className="text-xl md:text-3xl xl:text-4xl font-black text-black uppercase italic tracking-tighter font-h3 hover:bg-primary hover:text-white transition-all px-1 md:px-2">
            CHRONO & KICKS
          </Link>
        </div>
        
        <div className="hidden xl:flex gap-1 items-center">
          {navLinks.map(link => (
            <a 
              key={link.name}
              href={link.href} 
              className="font-black uppercase tracking-widest text-xs text-black border-2 border-transparent hover:border-black hover:bg-secondary-container px-4 py-2 transition-all"
            >
              {link.name}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2 md:gap-3">
          <Link to="/wishlist" className="p-1.5 md:p-2 border-2 md:border-4 border-black bg-white neobrutal-shadow-sm active-press hover:bg-primary hover:text-white transition-colors">
            <span className="material-symbols-outlined align-middle text-sm md:text-base" style={{ fontVariationSettings: "'FILL' 1" }}>favorite</span>
          </Link>
          <Link to="/cart" className="relative p-1.5 md:p-2 border-2 md:border-4 border-black bg-white neobrutal-shadow-sm active-press hover:bg-secondary-container transition-colors">
            <span className="material-symbols-outlined align-middle text-sm md:text-base">shopping_cart</span>
            <span className="absolute -top-2 -right-2 md:-top-3 md:-right-3 bg-black text-white border-2 border-white text-[8px] md:text-[10px] font-black px-1.5 md:px-2 py-0.5 md:py-1">60</span>
          </Link>
          <Link to="/login" className="hidden sm:block p-1.5 md:p-2 border-2 md:border-4 border-black bg-white neobrutal-shadow-sm active-press hover:bg-tertiary-container hover:text-white transition-colors">
            <span className="material-symbols-outlined align-middle text-sm md:text-base">person</span>
          </Link>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="xl:hidden bg-background border-b-4 border-black p-4 space-y-2 absolute w-full left-0 z-40"
          >
            {navLinks.map(link => (
              <a 
                key={link.name}
                href={link.href} 
                onClick={() => setIsOpen(false)}
                className="block font-black uppercase tracking-widest text-sm text-black border-2 border-black bg-white p-4 hover:bg-primary hover:text-white transition-all neobrutal-shadow-sm"
              >
                {link.name}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
