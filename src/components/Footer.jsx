import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-white border-t-4 border-black mt-auto">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center w-full px-8 py-10 gap-6">
        <div className="flex flex-col items-center md:items-start gap-2">
          <div className="text-2xl font-black text-black uppercase font-h3 tracking-tighter italic">CHRONO & KICKS</div>
          <div className="font-bold uppercase text-sm text-zinc-600">©2024 CHRONO & KICKS. RAW POWER ONLY.</div>
        </div>
        <div className="flex flex-wrap justify-center gap-8">
          <Link to="#" className="font-bold uppercase text-sm text-zinc-600 hover:text-primary transition-colors">PRIVACY</Link>
          <Link to="#" className="font-bold uppercase text-sm text-zinc-600 hover:text-primary transition-colors">TERMS</Link>
          <Link to="#" className="font-bold uppercase text-sm text-zinc-600 hover:text-primary transition-colors">SHIPPING</Link>
          <Link to="#" className="font-bold uppercase text-sm text-zinc-600 hover:text-primary transition-colors">RETURNS</Link>
          <Link to="#" className="font-bold uppercase text-sm text-zinc-600 hover:text-primary transition-colors">CONTACT</Link>
        </div>
      </div>
    </footer>
  );
}
