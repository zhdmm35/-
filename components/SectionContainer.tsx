import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface Props {
  children: React.ReactNode;
  id?: string;
  className?: string;
  delay?: number;
}

const SectionContainer: React.FC<Props> = ({ children, id, className = "", delay = 0 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id={id} ref={ref} className={`py-20 ${className}`}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.6, delay: delay, ease: "easeOut" }}
      >
        {children}
      </motion.div>
    </section>
  );
};

export default SectionContainer;