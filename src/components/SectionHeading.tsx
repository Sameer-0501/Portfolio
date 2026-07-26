import { motion } from 'framer-motion';

export const SectionHeading = ({ title }: { title: string }) => {
    return (
        <motion.div
            className="mb-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
        >
            <h2 className="text-3xl md:text-4xl font-bold text-textPrimary inline-block relative">
                {title}
                <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-highlight to-primaryAccent rounded-full opacity-80" />
            </h2>
        </motion.div>
    );
};
