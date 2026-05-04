import { useParams, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { ALL_PRODUCTS } from '../data/products';

const FALLBACK_WATCH = "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=800";
const FALLBACK_SHOE = "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=800";

export default function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [imgSrc, setImgSrc] = useState("");
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const foundProduct = ALL_PRODUCTS.find(p => p.id === id);
    if (foundProduct) {
      setProduct(foundProduct);
      setImgSrc(foundProduct.image);
    }
  }, [id]);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background p-10">
        <div className="bg-white border-8 border-black p-20 neobrutal-shadow text-center">
          <h1 className="font-h1 text-6xl uppercase mb-8 text-primary">UNIT NOT FOUND</h1>
          <p className="font-h3 text-2xl mb-12">THE REQUESTED GEAR HAS BEEN REDACTED OR NEVER EXISTED.</p>
          <Link to="/" className="bg-black text-white px-10 py-5 font-black uppercase hover:bg-primary transition-colors">RETURN TO BASE</Link>
        </div>
      </div>
    );
  }

  const handleImageError = () => {
    setImgSrc(product.category === "CHRONO" ? FALLBACK_WATCH : FALLBACK_SHOE);
  };

  return (
    <main className="mt-8 max-w-7xl mx-auto px-6 pb-24 w-full">
      <Link to="/" className="inline-flex items-center gap-2 font-black uppercase mb-12 hover:text-primary transition-colors">
        <span className="material-symbols-outlined">arrow_back</span> BACK TO GEAR
      </Link>

      {/* Main Product Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
        {/* Left Side: Hero Image & Thumbnails */}
        <div className="space-y-8">
          <div className="bg-white border-8 border-black neobrutal-shadow overflow-hidden relative group">
            {product.tag && (
              <div className="absolute top-6 left-6 bg-primary text-white font-black px-6 py-2 border-4 border-black z-10 text-xl uppercase rotate-[-5deg]">
                {product.tag}
              </div>
            )}
            <img 
              className="w-full h-[600px] object-cover filter grayscale hover:grayscale-0 transition-all duration-500" 
              alt={product.name} 
              src={imgSrc}
              onError={handleImageError}
            />
          </div>
          <div className="grid grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((i) => (
              <button key={i} className="bg-white border-4 border-black neobrutal-shadow active-press overflow-hidden h-24 hover:border-primary transition-colors">
                 <img className="w-full h-full object-cover grayscale opacity-50 hover:opacity-100 hover:grayscale-0" alt="Detail" src={imgSrc}/>
              </button>
            ))}
          </div>
        </div>

        {/* Right Side: Details */}
        <div className="space-y-12">
          <div className="space-y-6">
            <h1 className="font-h1 text-8xl uppercase leading-[0.8] tracking-tighter">{product.name}</h1>
            <div className="inline-block bg-secondary-container border-8 border-black px-10 py-4 neobrutal-shadow-lg rotate-2">
              <span className="font-h1 text-5xl">₹{product.price.toLocaleString()}</span>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex gap-1">
              {[1,2,3,4,5].map(i => (
                <span key={i} className="material-symbols-outlined text-black scale-150" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
              ))}
            </div>
            <span className="font-black uppercase tracking-widest text-sm ml-6 bg-black text-white px-3 py-1">5.0 / 5.0 IMPACT RATING</span>
          </div>

          <div className="space-y-6">
            <span className="font-black uppercase text-xl block tracking-tighter text-black/50">CONFIGURATION:</span>
            <div className="flex gap-6">
              {["STANDARD", "HEAVY", "ELITE"].map(size => (
                <button key={size} className="bg-white border-4 border-black px-10 py-5 font-black text-xl neobrutal-shadow active-press hover:bg-primary hover:text-white transition-all">
                  {size}
                </button>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-10">
            <div className="flex items-center bg-white border-8 border-black neobrutal-shadow-sm">
              <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="px-6 py-4 hover:bg-zinc-100 transition-colors font-black text-2xl">−</button>
              <span className="px-10 py-4 font-black text-3xl border-x-8 border-black w-24 text-center">
                {quantity.toString().padStart(2, '0')}
              </span>
              <button onClick={() => setQuantity(quantity + 1)} className="px-6 py-4 hover:bg-zinc-100 transition-colors font-black text-2xl">+</button>
            </div>
            <button className="bg-white border-4 border-black p-6 neobrutal-shadow active-press flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
              <span className="material-symbols-outlined scale-150" style={{ fontVariationSettings: "'FILL' 1" }}>favorite</span>
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <button className="bg-primary text-white border-8 border-black py-8 neobrutal-shadow active-press font-h1 text-4xl uppercase hover:bg-black transition-colors">
              ADD TO GEAR
            </button>
            <button className="bg-black text-white border-8 border-black py-8 neobrutal-shadow active-press font-h1 text-4xl uppercase hover:bg-primary transition-colors">
              BUY NOW
            </button>
          </div>

          <div className="p-8 bg-surface-container border-8 border-black neobrutal-shadow-lg space-y-6">
            <div className="flex gap-6 items-center">
              <span className="material-symbols-outlined scale-125">local_shipping</span>
              <span className="font-black uppercase tracking-tight text-xl">FAST GLOBAL DEPLOYMENT AVAILABLE</span>
            </div>
            <div className="flex gap-6 items-center">
              <span className="material-symbols-outlined scale-125">verified</span>
              <span className="font-black uppercase tracking-tight text-xl">LIFETIME STRUCTURAL WARRANTY</span>
            </div>
          </div>
        </div>
      </div>

      {/* Description Box */}
      <section className="mt-40 bg-surface-container-low border-8 border-black p-20 neobrutal-shadow-lg relative overflow-hidden">
        <div className="absolute top-0 right-0 w-40 h-40 bg-black text-white font-black flex items-center justify-center uppercase rotate-45 translate-x-12 -translate-y-12 text-2xl">RAW</div>
        <h2 className="font-h1 text-6xl mb-12 uppercase underline decoration-[16px] decoration-primary">THE BLUEPRINT</h2>
        <p className="font-h3 text-3xl leading-relaxed max-w-5xl italic font-black">
          {product.description} This unit is engineered for maximum environmental resistance and aesthetic dominance. Every component has been stress-tested in the urban grid to ensure it survives the vanguard lifestyle. No compromises, only performance.
        </p>
      </section>

      {/* Specifications Table */}
      <section className="mt-40">
        <h2 className="font-h1 text-6xl mb-12 uppercase underline decoration-[16px] decoration-secondary">DATA SPECS</h2>
        <div className="border-8 border-black overflow-hidden neobrutal-shadow-lg">
          <table className="w-full text-left font-black text-2xl border-collapse">
            <tbody>
              {[
                ["MATERIAL", "INDUSTRIAL GRADE REINFORCED ALLOY"],
                ["ASSEMBLY", "ROBOTIC PRECISION FORGE"],
                ["AESTHETIC", "RAW BRUTALIST VANGUARD"],
                ["DURABILITY", "EXTREME ENVIRONMENTAL RATING"],
                ["ORIGIN", "CHRONO & KICKS LABS"]
              ].map(([key, val], idx) => (
                <tr key={key} className={`${idx % 2 === 0 ? "bg-white" : "bg-surface-container"} border-b-8 border-black last:border-b-0`}>
                  <td className="p-10 border-r-8 border-black w-1/3 bg-black text-white">{key}</td>
                  <td className="p-10 italic uppercase">{val}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </main>
  );
}
