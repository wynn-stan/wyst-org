import Image from 'next/image';
import Section from '../(components)/Section';
import { FootprintsIcon } from 'lucide-react';
import Overview from './(others)/Overview';

import { Animated } from '../../../components';
import clsx from 'clsx';

export default function Page() {
  return (
    <Animated.FadeInFromBelow
      className={clsx('mx-auto', 'flex flex-col gap-[80px]')}
    >
      <div>
        <Overview />
      </div>
    </Animated.FadeInFromBelow>
  );
}
