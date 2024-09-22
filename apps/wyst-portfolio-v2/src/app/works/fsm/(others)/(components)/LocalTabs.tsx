'use client';

import React, { HTMLAttributes, useState } from 'react';
import { FileCSVIcon } from '@wyst/portfolio-ui';
import clsx from 'clsx';

import Data, { SectionItem } from './data';
import { TypeIcon } from '../../../../../interfaces';
import { Animated } from '../../../../../components';

export interface Props {
  type: 'overview' | 'business_challenges';
}

export default function LocalTabs({ type }: Props) {
  /**
   * State
   */
  const sections = Data[type];

  const [activeTab, setActiveTab] = useState<SectionItem>(() => {
    if (type === 'overview') return Data.overview[0];
    return Data.business_challenges[0];
  });

  return (
    <div className="space-y-5">
      <Group>
        {sections.map((item, key) => {
          //variables
          const isActive = item.title === activeTab.title;
          const Icon = item.Icon;
          return (
            <Item
              Icon={Icon}
              description={item.description}
              title={item.title}
              key={key}
              isActive={isActive}
              onClick={() => {
                setActiveTab(item);
              }}
            />
          );
        })}
      </Group>

      {/* Content */}
      <div className="p-5 bg-blue-5 rounded-lg">
        <div className="bg-white px-5 py-10 rounded-md">
          <Animated.FadeIn key={activeTab.title} className=" space-y-5">
            <div className="space-y-2">
              <h3 className="text-xl font-medium tracking-tighter">
                {activeTab.title}
              </h3>
              <div className="w-full h-[1px] bg-black-200" />
            </div>
            <div>{activeTab.description}</div>
          </Animated.FadeIn>
        </div>
      </div>
    </div>
  );
}

function Group({ children }: { children: React.ReactNode }) {
  return (
    <div
      className={clsx(
        'bg-blue-5 text-blue-80',
        'flex justify-between items-center',
        'rounded-full'
      )}
    >
      {children}
    </div>
  );
}

function Item({
  Icon,
  description,
  title,
  onClick,
  isActive,
  className,
  ...props
}: {
  Icon: TypeIcon;
  title: string;
  description: string;
  isActive?: boolean;
} & HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      onClick={onClick}
      role="button"
      className={clsx(
        isActive && 'bg-blue-80 text-white',
        'hover:bg-blue-80 hover:text-white',
        'px-7 py-4 rounded-full',
        'flex justify-center items-center w-full',
        'transition duration-200',
        className
      )}
      {...props}
    >
      <Icon strokeWidth={1.5} size={24} />
    </div>
  );
}
