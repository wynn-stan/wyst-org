'use client';

import clsx from 'clsx';
import { BoltIcon } from 'lucide-react';
import { motion } from 'framer-motion';

import Section from '../../(components)/Section';
import Card from '../../(components)/Card';
import { PageSectionProps } from '../page';
import Overview from './InitialPhase/Overview';
import Achievements from './InitialPhase/Achievements';
import Role from './InitialPhase/Role';

export default function InitialPhase({ className }: PageSectionProps) {
  return (
    <div className={clsx('bg-green-10', 'p-[40px] md:p-[80px]', className)}>
      <div className="max-w-5xl mx-auto">
        <Section
          Icon={<BoltIcon />}
          title="Initial Phase: Website Redesign and Development"
          childrenClassName="md:!flex-col"
        >
          <Overview />
          <Role />
          <Achievements />
        </Section>
      </div>
    </div>
  );
}
