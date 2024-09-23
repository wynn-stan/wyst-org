'use client';

import Image from 'next/image';
import Data from '../(components)/data';
import clsx from 'clsx';
import { Animated } from '../../../../../components';
import { useEffect, useLayoutEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

type Props = (typeof Data.key_solutions_and_impact)[0];

export default function Content({
  Icon,
  description,
  imgSrc,
  primary_color,
  secondary_color,
  tags,
  title,
}: Props) {
  /**
   * State
   */
  const [loading, setIsLoading] = useState(true);
  const [loaderExited, setLoaderExited] = useState(false);

  /**
   * Effect
   */
  useLayoutEffect(() => {
    setIsLoading(true);
    setLoaderExited(false);
  }, [imgSrc]);

  return (
    <div key={title} className="space-y-8 transition-colors duration-1000">
      {/* Tags */}
      <div className="w-full overflow-auto no-scrollbar">
        <div className="flex gap-5 w-max">
          {tags.map((item, key) => {
            return (
              <div
                key={key}
                className="p-3 rounded-xl"
                style={{ background: secondary_color }}
              >
                {item}
              </div>
            );
          })}
        </div>
      </div>
      <div>
        <div
          style={{ background: primary_color }}
          className={clsx('py-5 px-3 rounded-xl', 'flex justify-center')}
        >
          <AnimatePresence
            onExitComplete={() => {
              setLoaderExited(true);
            }}
          >
            {loading && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="md:h-[325px] md:w-[350px] h-[220px] w-[240px] animate-pulse bg-black-200 rounded-lg"
              />
            )}
            hi
          </AnimatePresence>
          <motion.img
            key={String(loading && loaderExited)}
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{ duration: 0.5 }}
            width="0"
            height="0"
            sizes="100vw"
            className={clsx(
              'md:max-h-[325px] max-h-[220px] w-auto',
              (loading || !loaderExited) && 'hidden'
            )}
            src={imgSrc}
            alt="product"
            onLoad={() => {
              setIsLoading(false);
            }}
          />
        </div>
      </div>
      <div className="space-y-5">
        <h3 className="text-2xl font-medium tracking-tighter">{title}</h3>
        <div>{description}</div>
      </div>
    </div>
  );
}
