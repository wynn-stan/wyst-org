'use client';

import clsx from 'clsx';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

type TSection = 'before' | 'after';

export default function ImageShowcase() {
  /**
   * State
   */
  const [imageHeight, setImageHeight] = useState(0);
  const [imageIsLoaded, setImageIsLoaded] = useState(false);
  const [section, setSection] = useState<TSection>('before');

  /**
   * Ref
   */
  const imageRef = useRef<HTMLImageElement>(null);

  /**
   * Variables
   */
  const containerHeight = 200;
  const imageSrc = {
    before: '/assets/images/works/aag/web-before-after/before.png',
    after: '/assets/images/works/aag/web-before-after/after.png',
  };

  /**
   * Function
   */
  const handleAnimationComplete = () => {
    setTimeout(
      () =>
        setSection((section) => (section === 'before' ? 'after' : 'before')),
      2000
    );
  };

  /**
   * Effect
   */
  useEffect(() => {
    if (imageIsLoaded && imageRef.current) {
      setImageHeight(imageRef.current.clientHeight);
      console.log('setting height');
    }
  }, [imageIsLoaded, section]);

  return (
    <div
      className={clsx(
        `max-w-[300px] w-full max-h-[${containerHeight}px] overflow-hidden`,
        'rounded-lg',
        'relative'
      )}
    >
      <motion.div
        key={`${String(imageIsLoaded)}-${section}`}
        initial={{ y: '0px' }}
        animate={{ y: `-${imageHeight - containerHeight}px` }}
        transition={{
          duration: 2,
          delay: 1.5,
        }}
        onAnimationComplete={handleAnimationComplete}
      >
        <Image
          ref={imageRef}
          alt="website"
          src={section === 'before' ? imageSrc.before : imageSrc.after}
          width={600}
          height={300}
          onLoad={() => setImageIsLoaded(true)}
        />
      </motion.div>
      <div
        style={{
          background: 'rgba(0, 0, 0, 0.2)',
          backdropFilter: 'blur(6px)',
        }}
        className={clsx(
          'absolute bottom-2 left-2 rounded py-1 px-2 font-medium',
          'text-white'
        )}
      >
        {section === 'before' ? 'Before' : 'After'}
      </div>
    </div>
  );
}
