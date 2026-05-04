import { motion } from 'framer-motion';

export default function SectionHeader({ title, subtitle, color = "bg-black", textColor = "text-white" }) {
  return (
    <motion.div 
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="mb-12"
    >
      <div className={`inline-block ${color} ${textColor} border-4 border-black p-4 neobrutal-shadow mb-4 rotate-1`}>
        <h2 className="font-h1 text-5xl md:text-7xl uppercase leading-none">{title}</h2>
      </div>
      {subtitle && (
        <div className="bg-white border-4 border-black p-4 max-w-xl -mt-2 ml-4 neobrutal-shadow relative z-10 -rotate-1">
          <p className="font-h3 text-xl uppercase tracking-tighter">{subtitle}</p>
        </div>
      )}
    </motion.div>
  );
}
