'use client';

import { HTMLAttributes } from 'react';
import { Variants, motion } from 'framer-motion';

interface Props extends HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
}

export default function FadeInFromBelow({ children, className }: Props) {
  const fadeInFromBelowVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 0,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.5,
        duration: 0.5,
        type: 'spring',
      },
    },
  };

  return (
    <motion.div
      variants={fadeInFromBelowVariants}
      initial="hidden"
      animate="show"
      className={className}
    >
      {children}
    </motion.div>
  );
}
