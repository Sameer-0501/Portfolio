import { motion } from 'framer-motion';

export const LoadingScreen = () => {
    return (
        <motion.div
            className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-background"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
        >
            <div className="relative flex flex-col items-center justify-center">
                {/* Glow Effect */}
                <motion.div
                    className="absolute w-32 h-32 bg-[#D9BF77]/30 rounded-full blur-3xl"
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.5, 0.8, 0.5]
                    }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />

                {/* Pulsing Logo */}
                <motion.div
                    className="relative z-10 flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-[#D9BF77] via-[#A45A3D] to-[#6B4226] shadow-xl shadow-[#A45A3D]/30"
                    animate={{
                        scale: [1, 1.05, 1],
                    }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                >
                    <span className="text-4xl font-extrabold text-slate-950 tracking-tighter">S</span>
                </motion.div>

                {/* Subtle Text */}
                <motion.div
                    className="mt-8 text-sm font-medium text-[#C4B6A6] tracking-widest uppercase"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                >
                    <motion.span
                        animate={{ opacity: [0.4, 1, 0.4] }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                    >
                        Building Experience...
                    </motion.span>
                </motion.div>
            </div>
        </motion.div>
    );
};
