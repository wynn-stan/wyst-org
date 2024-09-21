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
  const containerRef = useRef<HTMLDivElement>(null);

  /**
   * Variables
   */
  // const containerHeight = 200;
  const containerHeight = containerRef?.current?.clientHeight || 0;
  const imageSrc = {
    before: '/assets/images/works/aag/web-before-after/before.png',
    after: '/assets/images/works/aag/web-before-after/after.png',
  };
  const currentImage = section === 'before' ? imageSrc.before : imageSrc.after;

  /**
   * Function
   */
  const handleAnimationComplete = () => {
    setTimeout(() => {
      setSection((section) => (section === 'before' ? 'after' : 'before'));
      setImageIsLoaded(false);
    }, 2000);
  };

  /**
   * Effect
   */
  useEffect(() => {
    if (imageIsLoaded && imageRef.current) {
      setImageHeight(imageRef.current.clientHeight);
    }
  }, [imageIsLoaded]);

  return (
    <div
      ref={containerRef}
      className={clsx(
        `w-full h-[250px] md:h-full overflow-hidden`,
        'rounded-lg',
        'relative'
      )}
    >
      <motion.div
        key={`${String(imageIsLoaded)}-${section}`}
        initial={{ y: '0px' }}
        animate={{
          y: imageIsLoaded ? `-${imageHeight - containerHeight}px` : '0px',
        }}
        transition={{
          duration: 2,
          delay: 1.5,
        }}
        onAnimationComplete={() => {
          handleAnimationComplete();
        }}
      >
        <Image
          key={currentImage}
          ref={imageRef}
          alt="website"
          src={currentImage}
          width={600}
          height={300}
          onLoad={() => {
            setImageIsLoaded(true);
          }}
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
