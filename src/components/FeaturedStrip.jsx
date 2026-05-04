import { motion } from 'framer-motion';

export default function FeaturedStrip() {
  return (
    <section className="w-full bg-primary border-y-8 border-black py-20 my-20 overflow-hidden relative">
      {/* Background Decorative Text */}
      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center opacity-10 pointer-events-none select-none">
        <span className="font-h1 text-[20vw] leading-none text-white whitespace-nowrap">PREMIUM GEAR</span>
      </div>

      <div className="max-w-screen-2xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 relative z-10">
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 100 }}
          className="bg-white border-4 border-black p-8 neobrutal-shadow-lg md:rotate-2 hover:rotate-0 transition-transform"
        >
          <div className="flex flex-col h-full justify-between gap-8">
            <div>
              <span className="bg-secondary-container px-4 py-1 border-2 border-black font-bold uppercase mb-4 inline-block">HOT DROP</span>
              <h2 className="font-h1 text-6xl uppercase leading-none mb-6">URBAN <br/>VANGUARD</h2>
              <p className="font-body-lg uppercase max-w-md">Limited edition tactical footwear designed for the concrete jungle. High durability, zero compromise.</p>
            </div>
            <button className="bg-black text-white font-h1 text-3xl py-6 border-4 border-black hover:bg-white hover:text-black transition-colors uppercase w-full">
              SECURE NOW
            </button>
          </div>
        </motion.div>

        <motion.div
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 100 }}
          className="bg-secondary-container border-4 border-black p-8 neobrutal-shadow-lg md:-rotate-2 hover:rotate-0 transition-transform mt-12 md:mt-24"
        >
          <div className="flex flex-col h-full justify-between gap-8">
            <div>
              <span className="bg-black text-white px-4 py-1 border-2 border-black font-bold uppercase mb-4 inline-block">COLLECTION 04</span>
              <h2 className="font-h1 text-6xl uppercase leading-none mb-6">CHRONO <br/>X-100</h2>
              <p className="font-body-lg uppercase max-w-md text-black/80">Precision engineering meets raw aesthetic. The ultimate timepiece for those who value every millisecond.</p>
            </div>
            <button className="bg-white text-black font-h1 text-3xl py-6 border-4 border-black hover:bg-black hover:text-white transition-colors uppercase w-full">
              EXPLORE
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
