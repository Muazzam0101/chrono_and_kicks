import { Link } from 'react-router-dom';

export default function Navbar() {
  const navLinks = [
    { name: "FEATURED", href: "#featured" },
    { name: "HOT", href: "#hot" },
    { name: "WATCHES", href: "#watches" },
    { name: "SHOES", href: "#shoes" },
    { name: "CATALOGUE", href: "#catalogue" },
  ];

  return (
    <header className="bg-background border-b-8 border-black sticky top-0 z-50">
      <nav className="flex justify-between items-center w-full px-6 py-4 max-w-screen-2xl mx-auto">
        <Link to="/" className="text-2xl md:text-4xl font-black text-black uppercase italic tracking-tighter font-h3 hover:bg-primary hover:text-white transition-all px-2">
          CHRONO & KICKS
        </Link>
        
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

        <div className="flex items-center gap-3">
          <Link to="/wishlist" className="p-2 border-4 border-black bg-white neobrutal-shadow-sm active-press hover:bg-primary hover:text-white transition-colors">
            <span className="material-symbols-outlined align-middle" style={{ fontVariationSettings: "'FILL' 1" }}>favorite</span>
          </Link>
          <Link to="/cart" className="relative p-2 border-4 border-black bg-white neobrutal-shadow-sm active-press hover:bg-secondary-container transition-colors">
            <span className="material-symbols-outlined align-middle">shopping_cart</span>
            <span className="absolute -top-3 -right-3 bg-black text-white border-2 border-white text-[10px] font-black px-2 py-1">60</span>
          </Link>
          <Link to="/login" className="p-2 border-4 border-black bg-white neobrutal-shadow-sm active-press hover:bg-tertiary-container hover:text-white transition-colors">
            <span className="material-symbols-outlined align-middle">person</span>
          </Link>
        </div>
      </nav>
    </header>
  );
}
