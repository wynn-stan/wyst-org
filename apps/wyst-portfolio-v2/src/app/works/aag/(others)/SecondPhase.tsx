'use client';

import clsx from 'clsx';
import { BoltIcon } from 'lucide-react';
import { motion } from 'framer-motion';

import Section from '../../(components)/Section';
import { Animated } from '../../../../components';
import Overview from './SecondPhase/Overview';
import Systems from './SecondPhase/Systems';
import Card from '../../(components)/Card';
import { PageSectionProps } from '../page';
import Role from './SecondPhase/Role';

export default function SecondPhase({ className }: PageSectionProps) {
  /**
   * Variables
   */
  const sections = [Overview, Role, Systems];

  return (
    <div className={clsx('bg-yellow-10', 'p-[40px] md:p-[80px]', className)}>
      <div className="max-w-5xl mx-auto">
        <Section
          Icon={<BoltIcon />}
          title="Second Phase: Systems Development"
          childrenClassName="md:!flex-col"
        >
          {sections.map((Section, index) => (
            <Animated.FadeInFromBelowInView key={index}>
              <Section />
            </Animated.FadeInFromBelowInView>
          ))}
        </Section>
      </div>
    </div>
  );
}
