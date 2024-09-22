'use client';

import { HTMLAttributes } from 'react';
import { Variants, motion } from 'framer-motion';

interface Props extends HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
}

export default function FadeIn({ children, className }: Props) {
  const fadeInVariants: Variants = {
    hidden: {
      opacity: 0,
    },
    show: {
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <motion.div
      variants={fadeInVariants}
      initial="hidden"
      animate="show"
      className={className}
    >
      {children}
    </motion.div>
  );
}
