import { motion } from 'framer-motion';

export default function FeaturedStrip() {
  return (
    <section className="w-full bg-primary border-y-4 md:border-y-8 border-black py-16 md:py-24 my-16 md:my-32 overflow-hidden relative">
      {/* Background Decorative Text */}
      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center opacity-10 pointer-events-none select-none">
        <span className="font-h1 text-[15vw] md:text-[20vw] leading-none text-white whitespace-nowrap">PREMIUM GEAR</span>
      </div>

      <div className="max-w-screen-2xl mx-auto px-4 md:px-6 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 relative z-10">
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 100 }}
          className="bg-white border-4 border-black p-6 md:p-10 neobrutal-shadow md:neobrutal-shadow-lg md:rotate-2 hover:rotate-0 transition-transform"
        >
          <div className="flex flex-col h-full justify-between gap-6 md:gap-8">
            <div>
              <span className="bg-secondary-container px-3 py-1 border-2 border-black font-bold uppercase mb-4 inline-block text-xs md:text-sm">HOT DROP</span>
              <h2 className="font-h1 text-4xl md:text-7xl uppercase leading-[0.8] mb-6">URBAN <br/>VANGUARD</h2>
              <p className="font-body-lg uppercase max-w-md text-sm md:text-base">Limited edition tactical footwear designed for the concrete jungle. High durability, zero compromise.</p>
            </div>
            <button className="bg-black text-white font-h1 text-2xl md:text-4xl py-4 md:py-6 border-4 border-black hover:bg-white hover:text-black transition-colors uppercase w-full active-press">
              SECURE NOW
            </button>
          </div>
        </motion.div>

        <motion.div
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 100 }}
          className="bg-secondary-container border-4 border-black p-6 md:p-10 neobrutal-shadow md:neobrutal-shadow-lg md:-rotate-2 hover:rotate-0 transition-transform mt-0 md:mt-24"
        >
          <div className="flex flex-col h-full justify-between gap-6 md:gap-8">
            <div>
              <span className="bg-black text-white px-3 py-1 border-2 border-black font-bold uppercase mb-4 inline-block text-xs md:text-sm">COLLECTION 04</span>
              <h2 className="font-h1 text-4xl md:text-7xl uppercase leading-[0.8] mb-6">CHRONO <br/>X-100</h2>
              <p className="font-body-lg uppercase max-w-md text-sm md:text-base text-black/80">Precision engineering meets raw aesthetic. The ultimate timepiece for those who value every millisecond.</p>
            </div>
            <button className="bg-white text-black font-h1 text-2xl md:text-4xl py-4 md:py-6 border-4 border-black hover:bg-black hover:text-white transition-colors uppercase w-full active-press">
              EXPLORE
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
