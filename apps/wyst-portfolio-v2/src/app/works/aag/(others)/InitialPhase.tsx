'use client';

import { motion } from 'framer-motion';
import { BoltIcon } from 'lucide-react';
import clsx from 'clsx';

import Achievements from './InitialPhase/Achievements';
import { Animated } from '../../../../components';
import Section from '../../(components)/Section';
import Overview from './InitialPhase/Overview';
import Card from '../../(components)/Card';
import { PageSectionProps } from '../page';
import Role from './InitialPhase/Role';

export default function InitialPhase({ className }: PageSectionProps) {
  /**
   * Variables
   */
  const sections = [Overview, Role, Achievements];

  return (
    <div className={clsx('bg-green-10', 'p-[40px] md:p-[80px]', className)}>
      <div className="max-w-5xl mx-auto">
        <Section
          Icon={<BoltIcon />}
          title="Initial Phase: Website Redesign and Development"
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
