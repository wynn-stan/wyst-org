'use client';

import { HTMLAttributes } from 'react';
import { Variants, motion } from 'framer-motion';

interface Props extends HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
}

export default function FadeInFromBelowInView({ children, className }: Props) {
  /**
   * Animation Variant
   */
  const containerVariants: Variants = {
    hidden: { opacity: 0, y: '50px' },
    visible: {
      opacity: 1,
      y: '0px',
      transition: {
        duration: 0.5,
        type: 'spring',
        delay: 0.2,
      },
    },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      variants={containerVariants}
      className={className}
    >
      {children}
    </motion.div>
  );
}
