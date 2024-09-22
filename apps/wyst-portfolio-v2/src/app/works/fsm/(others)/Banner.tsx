'use client';

import Image from 'next/image';
import { useState } from 'react';

import { Animated } from '../../../../components';

export default function Banner() {
  /**
   * State
   */
  const [loading, setLoading] = useState(true);

  return (
    <Animated.FadeIn
      key={String(loading)}
      className="flex justify-center px-10"
    >
      <Image
        alt="banner.png"
        src="/assets/images/works/fsm/banner.png"
        width={1770}
        height={923}
        onLoad={() => {
          setLoading(true);
        }}
      />
    </Animated.FadeIn>
  );
}
