import { motion } from 'framer-motion';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import SkillsSection from '@/components/SkillsSection';
import CompetitiveProgrammingSection from '@/components/CompetitiveProgrammingSection';
import ProjectsSection from '@/components/ProjectsSection';
import LinuxRicingSection from '@/components/LinuxRicingSection';
import AISkillsSection from '@/components/AISkillsSection';
import ContactSection from '@/components/ContactSection';

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

export default function Home() {
  return (
    <div className="w-full">
      <HeroSection />
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
        variants={sectionVariants}
      >
        <AboutSection />
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
        variants={sectionVariants}
      >
        <SkillsSection />
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
        variants={sectionVariants}
      >
        <CompetitiveProgrammingSection />
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
        variants={sectionVariants}
      >
        <ProjectsSection />
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
        variants={sectionVariants}
      >
        <LinuxRicingSection />
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
        variants={sectionVariants}
      >
        <AISkillsSection />
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
        variants={sectionVariants}
      >
        <ContactSection />
      </motion.div>
    </div>
  );
}