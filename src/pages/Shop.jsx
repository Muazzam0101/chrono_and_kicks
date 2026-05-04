import { useState, useMemo, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ProductCard from '../components/ProductCard';
import CategoryFilter from '../components/CategoryFilter';
import PriceFilter from '../components/PriceFilter';
import SectionHeader from '../components/SectionHeader';
import FeaturedStrip from '../components/FeaturedStrip';
import { ALL_PRODUCTS, WATCHES, SHOES, getProductsBySection } from '../data/products';

export default function Shop() {
  const [activeCategory, setActiveCategory] = useState("ALL");
  const [priceRange, setPriceRange] = useState([0, 100000]);
  const [visibleCount, setVisibleCount] = useState(10);
  const [loading, setLoading] = useState(false);
  const sliderRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const filteredProducts = useMemo(() => {
    return ALL_PRODUCTS.filter(p => {
      const categoryMatch = activeCategory === "ALL" || p.category === activeCategory;
      const priceMatch = p.price >= priceRange[0] && p.price <= priceRange[1];
      return categoryMatch && priceMatch;
    });
  }, [activeCategory, priceRange]);

  const displayedProducts = filteredProducts.slice(0, visibleCount);

  const handleLoadMore = () => {
    setLoading(true);
    setTimeout(() => {
      setVisibleCount(prev => prev + 10);
      setLoading(false);
    }, 800);
  };

  const handleViewAll = (category) => {
    setActiveCategory(category);
    const catalogue = document.getElementById('catalogue');
    if (catalogue) {
      catalogue.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollSlider = (direction) => {
    if (sliderRef.current) {
      const scrollAmount = direction === 'left' ? -350 : 350;
      sliderRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const featured = getProductsBySection('featured');
  const hot = getProductsBySection('hot');
  const trending = getProductsBySection('trending');
  const picks = getProductsBySection('picks');
  const recommended = getProductsBySection('recommended');
  const watchAtelier = WATCHES.slice(0, 8);
  const shoeWorkshop = SHOES.slice(0, 8);

  return (
    <div className="min-h-screen bg-background text-on-background selection:bg-primary selection:text-white overflow-x-hidden">
      {/* 1. HERO SECTION */}
      <section id="hero" className="relative h-[70vh] md:h-screen flex items-center justify-center overflow-hidden border-b-4 md:border-b-8 border-black bg-surface-container">
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          className="absolute -top-40 -left-40 md:-top-60 md:-left-60 w-[50rem] md:w-[80rem] h-[50rem] md:h-[80rem] border-[20px] md:border-[40px] border-black opacity-5 pointer-events-none"
        />
        <div className="text-center z-10 px-4">
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <h1 className="font-h1 text-[16vw] md:text-[18vw] leading-[0.7] uppercase mb-8 md:mb-12 drop-shadow-[8px_8px_0px_#bc0100] md:drop-shadow-[16px_16px_0px_#bc0100] tracking-tighter">
              CHRONO<br/>& KICKS
            </h1>
          </motion.div>
          <motion.div
            initial={{ scale: 0, rotate: -20 }}
            animate={{ scale: 1, rotate: 3 }}
            transition={{ delay: 0.6, type: "spring", stiffness: 150, damping: 12 }}
            className="inline-block bg-secondary-container border-4 md:border-8 border-black p-6 md:p-12 neobrutal-shadow md:neobrutal-shadow-lg"
          >
            <p className="font-h3 text-xl md:text-4xl lg:text-7xl uppercase italic font-black tracking-widest leading-none">UNAPOLOGETIC GEAR.</p>
          </motion.div>
        </div>
        
        <div className="absolute top-5 left-5 md:top-10 md:left-10 p-3 md:p-6 border-4 md:border-8 border-black bg-white rotate-12 font-black uppercase hidden sm:block text-sm md:text-2xl">VOL. 001</div>
        <div className="absolute bottom-5 right-5 md:bottom-10 md:right-10 p-3 md:p-6 border-4 md:border-8 border-black bg-black text-white -rotate-6 font-black uppercase hidden sm:block text-sm md:text-2xl">SHIFT REALITY</div>
      </section>

      {/* 2. FEATURED THIS WEEK */}
      <section id="featured" className="max-w-screen-2xl mx-auto px-4 md:px-6 py-24 md:py-48">
        <SectionHeader title="FEATURED THIS WEEK" subtitle="The absolute essential drops defining the current era." color="bg-primary" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-20">
          {featured.map((product, i) => (
            <div key={product.id} className={i === 1 ? "md:-mt-24" : "md:mt-24"}>
              <ProductCard product={product} index={i} />
            </div>
          ))}
        </div>
      </section>

      {/* 3. HOT PRODUCTS (BUTTON SLIDER) */}
      <section id="hot" className="bg-secondary-container border-y-4 md:border-y-8 border-black py-24 md:py-48 overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-5 flex flex-col justify-between py-10">
          <div className="font-h1 text-[10vh] md:text-[20vh] leading-none whitespace-nowrap -ml-40">STAY LOUD STAY LOUD STAY LOUD</div>
          <div className="font-h1 text-[10vh] md:text-[20vh] leading-none whitespace-nowrap ml-40">RAW IMPACT RAW IMPACT RAW IMPACT</div>
        </div>
        
        <div className="max-w-screen-2xl mx-auto px-4 md:px-6 mb-12 md:mb-20 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 md:gap-10">
            <SectionHeader title="HOT PRODUCTS" subtitle="High demand. Low supply. Move fast or miss out." color="bg-black" />
            
            <div className="flex gap-2 md:gap-4 mb-4 md:mb-12">
               <button 
                onClick={() => scrollSlider('left')}
                className="bg-white border-4 md:border-8 border-black p-3 md:p-6 neobrutal-shadow hover:bg-black hover:text-white transition-all active-press"
               >
                 <span className="material-symbols-outlined scale-110 md:scale-150">arrow_back</span>
               </button>
               <button 
                onClick={() => scrollSlider('right')}
                className="bg-white border-4 md:border-8 border-black p-3 md:p-6 neobrutal-shadow hover:bg-black hover:text-white transition-all active-press"
               >
                 <span className="material-symbols-outlined scale-110 md:scale-150">arrow_forward</span>
               </button>
            </div>
          </div>
        </div>

        <div className="relative z-10 px-4 md:px-6">
          <div 
            ref={sliderRef}
            className="flex gap-6 md:gap-12 overflow-x-auto no-scrollbar snap-x snap-mandatory scroll-smooth"
          >
            {hot.map((product, i) => (
              <div 
                key={product.id} 
                className="min-w-[280px] sm:min-w-[400px] md:min-w-[600px] snap-center"
              >
                <ProductCard product={product} index={i} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. THE WATCH ATELIER */}
      <section id="watches" className="max-w-screen-2xl mx-auto px-4 md:px-6 py-24 md:py-48">
        <SectionHeader title="THE WATCH ATELIER" subtitle="A curation of 30 precision timepieces for the modern vanguard." color="bg-tertiary-container" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-12">
          {watchAtelier.map((product, i) => (
            <ProductCard key={product.id} product={product} index={i} />
          ))}
        </div>
        <div className="mt-16 md:mt-24 text-center">
          <button 
            onClick={() => handleViewAll("CHRONO")}
            className="bg-white border-4 md:border-8 border-black px-8 md:px-16 py-4 md:py-8 font-h1 text-2xl md:text-4xl uppercase neobrutal-shadow-lg hover:bg-black hover:text-white transition-all active-press-lg"
          >
            VIEW ALL 30 WATCHES
          </button>
        </div>
      </section>

      {/* 5. TRENDING THIS WEEK */}
      <section id="trending" className="bg-black text-white py-24 md:py-48 border-y-4 md:border-y-8 border-black relative">
        <div className="max-w-screen-2xl mx-auto px-4 md:px-6">
          <SectionHeader title="TRENDING NOW" subtitle="Global momentum. Pure aesthetic force." color="bg-white" textColor="text-black" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-12">
            {trending.map((product, i) => (
              <ProductCard key={product.id} product={product} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* 6. THE SHOE WORKSHOP */}
      <section id="shoes" className="max-w-screen-2xl mx-auto px-4 md:px-6 py-24 md:py-48">
        <SectionHeader title="THE SHOE WORKSHOP" subtitle="30 styles of tactical footwear built for the urban grid." color="bg-secondary-container" textColor="text-black" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-12">
          {shoeWorkshop.map((product, i) => (
            <ProductCard key={product.id} product={product} index={i} />
          ))}
        </div>
        <div className="mt-16 md:mt-24 text-center">
          <button 
            onClick={() => handleViewAll("KICKS")}
            className="bg-white border-4 md:border-8 border-black px-8 md:px-16 py-4 md:py-8 font-h1 text-2xl md:text-4xl uppercase neobrutal-shadow-lg hover:bg-black hover:text-white transition-all active-press-lg"
          >
            VIEW ALL 30 SHOES
          </button>
        </div>
      </section>

      <FeaturedStrip />

      {/* 7. TOP PICKS */}
      <section id="picks" className="bg-surface-container py-24 md:py-48 border-b-4 md:border-b-8 border-black">
        <div className="max-w-screen-2xl mx-auto px-4 md:px-6">
          <SectionHeader title="TOP PICKS" subtitle="The gold standard of our current collection." color="bg-primary" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-12">
            {picks.map((product, i) => (
              <ProductCard key={product.id} product={product} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* 8. RECOMMENDED */}
      <section id="recommended" className="max-w-screen-2xl mx-auto px-4 md:px-6 py-24 md:py-48">
        <SectionHeader title="RECOMMENDED" subtitle="Algorithmically selected for your unique profile." color="bg-black" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-12">
          {recommended.map((product, i) => (
            <ProductCard key={product.id} product={product} index={i} />
          ))}
        </div>
      </section>

      {/* 9. FULL CATALOGUE */}
      <section id="catalogue" className="bg-white py-24 md:py-48 border-t-4 md:border-t-8 border-black">
        <div className="max-w-screen-2xl mx-auto px-4 md:px-6">
          <SectionHeader title="THE FULL CATALOGUE" subtitle="Browse our complete warehouse of 60 raw units." color="bg-primary" />
          
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-10 mb-16 md:mb-32 border-4 md:border-[12px] border-black p-6 md:p-12 bg-surface-container relative">
            <div className="w-full">
              <h4 className="font-h3 text-2xl md:text-4xl uppercase mb-6 md:mb-10 flex items-center gap-4">
                <span className="material-symbols-outlined text-3xl md:text-4xl">filter_alt</span>
                REFINE SELECTION
              </h4>
              <div className="flex flex-col xl:flex-row gap-10 md:gap-20">
                <div className="flex-1">
                  <p className="font-black uppercase text-xs md:text-sm mb-4 md:mb-6 tracking-widest text-black/40">1. CHOOSE CATEGORY</p>
                  <CategoryFilter activeCategory={activeCategory} setActiveCategory={setActiveCategory} />
                </div>
                <div>
                  <p className="font-black uppercase text-xs md:text-sm mb-4 md:mb-6 tracking-widest text-black/40">2. PRICE LIMIT</p>
                  <PriceFilter priceRange={priceRange} setPriceRange={setPriceRange} />
                </div>
              </div>
            </div>
            <div className="hidden lg:block absolute -top-12 -right-8 bg-black text-white p-8 font-h1 text-5xl uppercase rotate-6 neobrutal-shadow-lg border-4 border-white">
              {filteredProducts.length} UNITS
            </div>
            <div className="lg:hidden bg-black text-white p-4 font-h1 text-2xl uppercase mt-6 text-center">
              {filteredProducts.length} UNITS FOUND
            </div>
          </div>

          <motion.div 
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-6 md:gap-10"
          >
            <AnimatePresence mode='popLayout'>
              {displayedProducts.map((product, index) => (
                <ProductCard key={product.id} product={product} index={index} />
              ))}
            </AnimatePresence>
          </motion.div>

          {visibleCount < filteredProducts.length && (
            <div className="mt-20 md:mt-40 flex justify-center">
              <button 
                onClick={handleLoadMore}
                disabled={loading}
                className={`
                  px-12 md:px-32 py-6 md:py-12 font-h1 text-3xl md:text-6xl uppercase border-4 md:border-8 border-black transition-all neobrutal-shadow-lg
                  ${loading ? "bg-gray-200 cursor-wait" : "bg-primary text-white hover:bg-black hover:text-white active-press-lg"}
                `}
              >
                {loading ? "SEARCHING..." : "FETCH MORE GEAR"}
              </button>
            </div>
          )}
        </div>
      </section>

      {/* FOOTER MARQUEE */}
      <section className="w-full bg-black py-10 md:py-20 overflow-hidden border-y-4 md:border-y-[12px] border-black">
        <div className="flex whitespace-nowrap animate-marquee">
          {[1,2,3,4,5,6,7,8].map(i => (
            <span key={i} className="text-white font-h1 text-[60px] md:text-[120px] uppercase mx-16 md:mx-32">
              • NO RULES • RAW GEAR • AUTHENTIC • VANGUARD • CHRONO & KICKS
            </span>
          ))}
        </div>
      </section>
    </div>
  );
}
