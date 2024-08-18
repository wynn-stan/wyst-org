'use client';

import clsx from 'clsx';
import { BoltIcon } from 'lucide-react';
import { motion } from 'framer-motion';

import Section from '../../(components)/Section';
import Card from '../../(components)/Card';
import { PageSectionProps } from '../page';
import Overview from './SecondPhase/Overview';
import Role from './SecondPhase/Role';
import Systems from './SecondPhase/Systems';

export default function SecondPhase({ className }: PageSectionProps) {
  return (
    <div className={clsx('bg-yellow-10', 'p-[40px] md:p-[80px]', className)}>
      <div className="max-w-5xl mx-auto">
        <Section
          Icon={<BoltIcon />}
          title="Second Phase: Systems Development"
          childrenClassName="md:!flex-col"
        >
          <Overview />
          <Role />
          <Systems />
        </Section>
      </div>
    </div>
  );
}
