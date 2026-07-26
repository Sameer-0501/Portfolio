import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { LoadingScreen } from './components/LoadingScreen';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { ScrollToTop } from './components/ui/ScrollToTop';
import { HeroSection } from './sections/HeroSection';
import { AboutSection } from './sections/AboutSection';
import { SkillsSection } from './sections/SkillsSection';
import { ExperienceSection } from './sections/ExperienceSection';
import { CertificationsSection } from './sections/CertificationsSection';
import { ProjectsSection } from './sections/ProjectsSection';
import { EducationSection } from './sections/EducationSection';
import { ContactSection } from './sections/ContactSection';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-background text-textPrimary selection:bg-[#A45A3D]/40 selection:text-[#E8DAB2]">
      <AnimatePresence mode="wait">
        {isLoading ? (
          <LoadingScreen key="loading" />
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <Navbar />
            <main>
              <HeroSection />
              <AboutSection />
              <SkillsSection />
              <ExperienceSection />
              <CertificationsSection />
              <ProjectsSection />
              <EducationSection />
              <ContactSection />
            </main>
            <Footer />
            <ScrollToTop />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
