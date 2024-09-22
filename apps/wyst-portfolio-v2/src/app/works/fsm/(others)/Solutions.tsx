'use client';

import { FootprintsIcon } from 'lucide-react';
import { useState } from 'react';
import clsx from 'clsx';

import Data from './(components)/data';
import Section from '../../(components)/Section';
import Sidebar from './Solutions/Sidebar';
import Content from './Solutions/Content';
import Indicator from './Solutions/Indicator';

export default function Solutions() {
  /**
   * Variables
   */
  const items = Data.key_solutions_and_impact;

  /**
   * State
   */
  const [activeSection, setActiveSection] = useState(items[0]);

  return (
    <Section
      Icon={<FootprintsIcon />}
      title="Key Impact and Solutions"
      childrenClassName="justify-center"
    >
      <div
        className={clsx(
          'grid gap-10',
          'grid-cols-1 md:grid-cols-[1fr_minmax(0px,750px)]'
        )}
      >
        <div className="hidden md:block">
          <Sidebar {...{ activeSection, setActiveSection }} />
        </div>
        <div className="flex flex-col justify-between gap-8">
          <Content {...activeSection} />
          <Indicator {...{ activeSection, setActiveSection }} />
        </div>
      </div>
    </Section>
  );
}
