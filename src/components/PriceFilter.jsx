import { motion } from 'framer-motion';

export default function PriceFilter({ priceRange, setPriceRange }) {
  const ranges = [
    { label: "ALL PRICES", value: [0, 100000] },
    { label: "UNDER ₹10K", value: [0, 10000] },
    { label: "₹10K - ₹25K", value: [10000, 25000] },
    { label: "OVER ₹25K", value: [25000, 100000] },
  ];

  return (
    <div className="flex flex-wrap gap-4 px-4 mb-8">
      {ranges.map((range, i) => (
        <motion.button
          key={range.label}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 + (i * 0.05) }}
          onClick={() => setPriceRange(range.value)}
          className={`
            px-4 py-2 font-bold text-xs uppercase border-2 border-black transition-all
            ${JSON.stringify(priceRange) === JSON.stringify(range.value)
              ? "bg-primary text-white neobrutal-shadow-sm translate-x-0.5 translate-y-0.5 shadow-none"
              : "bg-white text-black neobrutal-shadow-sm hover:-translate-x-0.5 hover:-translate-y-0.5"
            }
          `}
        >
          {range.label}
        </motion.button>
      ))}
    </div>
  );
}
