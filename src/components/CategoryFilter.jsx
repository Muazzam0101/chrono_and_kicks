import { motion } from 'framer-motion';

const categories = ["ALL", "CHRONO", "KICKS", "GEAR", "LIMITED", "ARCHIVE", "LATEST"];

export default function CategoryFilter({ activeCategory, setActiveCategory }) {
  return (
    <div className="w-full overflow-x-auto pb-6 no-scrollbar">
      <div className="flex gap-4 min-w-max px-4">
        {categories.map((cat, i) => (
          <motion.button
            key={cat}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.05 }}
            onClick={() => setActiveCategory(cat)}
            className={`
              px-8 py-3 font-h3 text-lg uppercase border-4 border-black transition-all
              ${activeCategory === cat 
                ? "bg-black text-white neobrutal-shadow-sm translate-x-1 translate-y-1 shadow-none" 
                : "bg-white text-black neobrutal-shadow hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]"
              }
            `}
          >
            {cat}
          </motion.button>
        ))}
      </div>
    </div>
  );
}
