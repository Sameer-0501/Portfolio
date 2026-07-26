import { motion } from 'framer-motion';

export const Logo = () => {
  return (
    <motion.div 
      className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-[#D9BF77] to-[#A45A3D] shadow-[0_0_15px_rgba(217,191,119,0.45)] cursor-pointer"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <span className="text-slate-950 font-extrabold text-xl drop-shadow-md tracking-tight">S</span>
    </motion.div>
  );
}
