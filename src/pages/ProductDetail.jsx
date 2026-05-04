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
      <div className="min-h-screen flex items-center justify-center bg-background p-4 md:p-10">
        <div className="bg-white border-4 md:border-8 border-black p-10 md:p-20 neobrutal-shadow text-center">
          <h1 className="font-h1 text-4xl md:text-6xl uppercase mb-6 md:mb-8 text-primary">UNIT NOT FOUND</h1>
          <p className="font-h3 text-xl md:text-2xl mb-8 md:mb-12">THE REQUESTED GEAR HAS BEEN REDACTED OR NEVER EXISTED.</p>
          <Link to="/" className="inline-block bg-black text-white px-8 md:px-10 py-4 md:py-5 font-black uppercase hover:bg-primary transition-colors">RETURN TO BASE</Link>
        </div>
      </div>
    );
  }

  const handleImageError = () => {
    setImgSrc(product.category === "CHRONO" ? FALLBACK_WATCH : FALLBACK_SHOE);
  };

  return (
    <main className="mt-4 md:mt-8 max-w-7xl mx-auto px-4 md:px-6 pb-24 w-full">
      <Link to="/" className="inline-flex items-center gap-2 font-black uppercase mb-8 md:mb-12 hover:text-primary transition-colors text-sm md:text-base">
        <span className="material-symbols-outlined text-base md:text-xl">arrow_back</span> BACK TO GEAR
      </Link>

      {/* Main Product Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-start">
        {/* Left Side: Hero Image & Thumbnails */}
        <div className="space-y-6 md:space-y-8">
          <div className="bg-white border-4 md:border-8 border-black neobrutal-shadow overflow-hidden relative group">
            {product.tag && (
              <div className="absolute top-4 left-4 md:top-6 md:left-6 bg-primary text-white font-black px-4 md:px-6 py-1 md:py-2 border-2 md:border-4 border-black z-10 text-base md:text-xl uppercase rotate-[-5deg]">
                {product.tag}
              </div>
            )}
            <img 
              className="w-full h-[400px] md:h-[600px] object-cover filter grayscale hover:grayscale-0 transition-all duration-500" 
              alt={product.name} 
              src={imgSrc}
              onError={handleImageError}
            />
          </div>
          <div className="grid grid-cols-4 gap-3 md:gap-6">
            {[1, 2, 3, 4].map((i) => (
              <button key={i} className="bg-white border-2 md:border-4 border-black neobrutal-shadow active-press overflow-hidden h-16 md:h-24 hover:border-primary transition-colors">
                 <img className="w-full h-full object-cover grayscale opacity-50 hover:opacity-100 hover:grayscale-0" alt="Detail" src={imgSrc}/>
              </button>
            ))}
          </div>
        </div>

        {/* Right Side: Details */}
        <div className="space-y-8 md:space-y-12">
          <div className="space-y-4 md:space-y-6">
            <h1 className="font-h1 text-6xl md:text-8xl uppercase leading-[0.8] tracking-tighter">{product.name}</h1>
            <div className="inline-block bg-secondary-container border-4 md:border-8 border-black px-6 md:px-10 py-2 md:py-4 neobrutal-shadow md:neobrutal-shadow-lg rotate-2">
              <span className="font-h1 text-3xl md:text-5xl">₹{product.price.toLocaleString()}</span>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <div className="flex gap-1">
              {[1,2,3,4,5].map(i => (
                <span key={i} className="material-symbols-outlined text-black scale-110 md:scale-150" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
              ))}
            </div>
            <span className="font-black uppercase tracking-widest text-[10px] md:text-sm ml-0 md:ml-6 bg-black text-white px-3 py-1">5.0 / 5.0 IMPACT RATING</span>
          </div>

          <div className="space-y-4 md:space-y-6">
            <span className="font-black uppercase text-base md:text-xl block tracking-tighter text-black/50">CONFIGURATION:</span>
            <div className="flex flex-wrap gap-3 md:gap-6">
              {["STANDARD", "HEAVY", "ELITE"].map(size => (
                <button key={size} className="bg-white border-2 md:border-4 border-black px-6 md:px-10 py-3 md:py-5 font-black text-base md:text-xl neobrutal-shadow active-press hover:bg-primary hover:text-white transition-all">
                  {size}
                </button>
              ))}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 md:gap-10">
            <div className="flex items-center bg-white border-4 md:border-8 border-black neobrutal-shadow-sm w-full sm:w-auto">
              <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="px-4 md:px-6 py-2 md:py-4 hover:bg-zinc-100 transition-colors font-black text-xl md:text-2xl flex-1 sm:flex-none">−</button>
              <span className="px-6 md:px-10 py-2 md:py-4 font-black text-xl md:text-3xl border-x-4 md:border-x-8 border-black w-20 md:w-24 text-center">
                {quantity.toString().padStart(2, '0')}
              </span>
              <button onClick={() => setQuantity(quantity + 1)} className="px-4 md:px-6 py-2 md:py-4 hover:bg-zinc-100 transition-colors font-black text-xl md:text-2xl flex-1 sm:flex-none">+</button>
            </div>
            <button className="bg-white border-2 md:border-4 border-black p-4 md:p-6 neobrutal-shadow active-press flex items-center justify-center hover:bg-primary hover:text-white transition-colors w-full sm:w-auto">
              <span className="material-symbols-outlined scale-125 md:scale-150" style={{ fontVariationSettings: "'FILL' 1" }}>favorite</span>
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
            <button className="bg-primary text-white border-4 md:border-8 border-black py-4 md:py-8 neobrutal-shadow active-press font-h1 text-2xl md:text-4xl uppercase hover:bg-black transition-colors">
              ADD TO GEAR
            </button>
            <button className="bg-black text-white border-4 md:border-8 border-black py-4 md:py-8 neobrutal-shadow active-press font-h1 text-2xl md:text-4xl uppercase hover:bg-primary transition-colors">
              BUY NOW
            </button>
          </div>

          <div className="p-4 md:p-8 bg-surface-container border-4 md:border-8 border-black neobrutal-shadow md:neobrutal-shadow-lg space-y-4 md:space-y-6">
            <div className="flex gap-4 md:gap-6 items-center">
              <span className="material-symbols-outlined scale-110 md:scale-125">local_shipping</span>
              <span className="font-black uppercase tracking-tight text-base md:text-xl">FAST GLOBAL DEPLOYMENT AVAILABLE</span>
            </div>
            <div className="flex gap-4 md:gap-6 items-center">
              <span className="material-symbols-outlined scale-110 md:scale-125">verified</span>
              <span className="font-black uppercase tracking-tight text-base md:text-xl">LIFETIME STRUCTURAL WARRANTY</span>
            </div>
          </div>
        </div>
      </div>

      {/* Description Box */}
      <section className="mt-24 md:mt-40 bg-surface-container-low border-4 md:border-8 border-black p-8 md:p-20 neobrutal-shadow md:neobrutal-shadow-lg relative overflow-hidden">
        <div className="absolute top-0 right-0 w-24 md:w-40 h-24 md:h-40 bg-black text-white font-black flex items-center justify-center uppercase rotate-45 translate-x-8 md:translate-x-12 -translate-y-8 md:-translate-y-12 text-sm md:text-2xl">RAW</div>
        <h2 className="font-h1 text-4xl md:text-6xl mb-8 md:mb-12 uppercase underline decoration-[8px] md:decoration-[16px] decoration-primary">THE BLUEPRINT</h2>
        <p className="font-h3 text-xl md:text-3xl leading-relaxed max-w-5xl italic font-black">
          {product.description} This unit is engineered for maximum environmental resistance and aesthetic dominance. Every component has been stress-tested in the urban grid to ensure it survives the vanguard lifestyle. No compromises, only performance.
        </p>
      </section>

      {/* Specifications Table */}
      <section className="mt-24 md:mt-40">
        <h2 className="font-h1 text-4xl md:text-6xl mb-8 md:mb-12 uppercase underline decoration-[8px] md:decoration-[16px] decoration-secondary">DATA SPECS</h2>
        <div className="border-4 md:border-8 border-black overflow-hidden neobrutal-shadow md:neobrutal-shadow-lg">
          <table className="w-full text-left font-black text-base md:text-2xl border-collapse">
            <tbody>
              {[
                ["MATERIAL", "INDUSTRIAL GRADE REINFORCED ALLOY"],
                ["ASSEMBLY", "ROBOTIC PRECISION FORGE"],
                ["AESTHETIC", "RAW BRUTALIST VANGUARD"],
                ["DURABILITY", "EXTREME ENVIRONMENTAL RATING"],
                ["ORIGIN", "CHRONO & KICKS LABS"]
              ].map(([key, val], idx) => (
                <tr key={key} className={`${idx % 2 === 0 ? "bg-white" : "bg-surface-container"} border-b-4 md:border-b-8 border-black last:border-b-0 flex flex-col sm:table-row`}>
                  <td className="p-4 md:p-10 border-b-4 sm:border-b-0 sm:border-r-4 md:border-r-8 border-black sm:w-1/3 bg-black text-white">{key}</td>
                  <td className="p-4 md:p-10 italic uppercase">{val}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </main>
  );
}
