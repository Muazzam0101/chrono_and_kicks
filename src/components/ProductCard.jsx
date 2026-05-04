import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const FALLBACK_WATCH = "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=800";
const FALLBACK_SHOE = "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=800";

export default function ProductCard({ product, index }) {
  const getInitialImage = () => {
    if (!product.image) {
      return product.category === "CHRONO" ? FALLBACK_WATCH : FALLBACK_SHOE;
    }
    return product.image;
  };

  const [imgSrc, setImgSrc] = useState(getInitialImage());
  const [hasError, setHasError] = useState(false);

  // Update image if product prop changes
  useEffect(() => {
    setImgSrc(getInitialImage());
    setHasError(false);
  }, [product.image, product.category]);

  // Random slight rotation for that "brutalist" feel
  const rotation = index % 3 === 0 ? 'rotate-1' : index % 3 === 1 ? '-rotate-1' : 'rotate-0';

  const handleError = () => {
    if (!hasError) {
      setImgSrc(product.category === "CHRONO" ? FALLBACK_WATCH : FALLBACK_SHOE);
      setHasError(true);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.3, 
        delay: index * 0.05,
        ease: "easeOut"
      }}
      viewport={{ once: true }}
      className={`group relative bg-white border-4 border-black neobrutal-shadow transition-all ${rotation} hover:rotate-0`}
    >
      <Link to={`/product/${product.id}`} className="block">
        <div className="aspect-[4/5] border-b-4 border-black overflow-hidden relative bg-surface-container">
          {product.tag && (
            <div className="absolute top-4 left-4 bg-primary text-white font-bold px-3 py-1 border-2 border-black z-10 text-xs uppercase tracking-tighter">
              {product.tag}
            </div>
          )}
          <img 
            src={imgSrc} 
            alt={product.name} 
            onError={handleError}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 filter grayscale group-hover:grayscale-0"
          />
        </div>
        
        <div className="p-4 space-y-3">
          <div className="flex justify-between items-start gap-2">
            <h3 className="font-h3 text-xl uppercase leading-tight">{product.name}</h3>
            <span className="font-bold bg-secondary-container px-2 py-1 border-2 border-black text-sm whitespace-nowrap">
              {typeof product.price === 'number' ? `₹${product.price.toLocaleString()}` : product.price}
            </span>
          </div>
          
          <p className="text-xs font-medium text-on-surface-variant uppercase line-clamp-2">
            {product.description || "Raw engineering for the modern vanguard. Built to last, designed to impact."}
          </p>

          <button className="w-full bg-black text-white font-bold py-3 border-2 border-black hover:bg-primary hover:text-white transition-colors uppercase text-sm tracking-widest active:translate-x-1 active:translate-y-1 active:shadow-none">
            ADD TO GEAR
          </button>
        </div>
      </Link>
    </motion.div>
  );
}
