import clsx from 'clsx';
import Image from 'next/image';
import { TrophyIcon } from '@wyst/portfolio-ui';

import { Animated } from '../../../components';
import Section from '../(components)/Section';
import Card from '../(components)/Card';
import Intro from './(others)/Intro';
import InitialPhase from './(others)/InitialPhase';
import { HTMLAttributes } from 'react';
import SecondPhase from './(others)/SecondPhase';
import PillarsOfSuccess from './(others)/PillarsOfSuccess';
import ShowCase from './(others)/Showcase';
import OtherProjects from '../(components)/OtherProjects';

export interface PageSectionProps extends HTMLAttributes<HTMLDivElement> {
  prop?: string;
}

export default function Page() {
  return (
    <Animated.FadeInFromBelow
      className={clsx('mx-auto', 'flex flex-col gap-[80px]')}
    >
      <div>
        <Intro className="max-w-5xl mx-auto" />
        <InitialPhase />
        <SecondPhase />
      </div>
      <div className="max-w-5xl mx-auto space-y-[80px]">
        <div className="hidden lg:block">
          <PillarsOfSuccess />
        </div>
        <ShowCase />
      </div>
    </Animated.FadeInFromBelow>
  );
}
