import { motion } from 'framer-motion';

export default function SectionHeader({ title, subtitle, color = "bg-black", textColor = "text-white" }) {
  return (
    <motion.div 
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="mb-8 md:mb-16"
    >
      <div className={`inline-block ${color} ${textColor} border-4 border-black p-3 md:p-6 neobrutal-shadow mb-4 md:mb-6 rotate-1 max-w-[90vw] md:max-w-none`}>
        <h2 className="font-h1 text-3xl sm:text-5xl md:text-8xl uppercase leading-[0.8]">{title}</h2>
      </div>
      {subtitle && (
        <div className="bg-white border-4 border-black p-3 md:p-6 max-w-sm md:max-w-xl -mt-2 ml-4 neobrutal-shadow relative z-10 -rotate-1">
          <p className="font-h3 text-sm md:text-2xl uppercase tracking-tighter leading-none">{subtitle}</p>
        </div>
      )}
    </motion.div>
  );
}
