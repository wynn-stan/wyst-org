import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react';

import Data from '../(components)/data';
import clsx from 'clsx';

interface Props {
  activeSection: (typeof Data.key_solutions_and_impact)[0];
  setActiveSection: React.Dispatch<
    React.SetStateAction<(typeof Data.key_solutions_and_impact)[0]>
  >;
}

export default function Indicator({ activeSection, setActiveSection }: Props) {
  /**
   * Variables
   */
  const items = Data.key_solutions_and_impact;

  /**
   * function - get section
   */
  const getIndexOfSection = (type: 'next' | 'previous') => {
    const index = items.findIndex((item, key) => {
      return item.title === activeSection.title;
    });

    if (type === 'previous' && index === 0) return -1;
    if (type === 'next' && index === items.length - 1) return -1;

    if (type === 'next') {
      return index + 1;
    } else {
      return index - 1;
    }
  };

  /**
   * Variables
   */
  const nextSectionIndex = getIndexOfSection('next');
  const previousSectionIndex = getIndexOfSection('previous');

  return (
    <div className="flex gap-5 justify-between">
      <button
        disabled={previousSectionIndex === -1}
        className={clsx(
          'p-2 border border-black-200',
          'flex items-center justify-center rounded-full',
          previousSectionIndex === -1 && 'text-black-200'
        )}
        onClick={() => {
          setActiveSection(items[previousSectionIndex]);
        }}
      >
        <ChevronLeftIcon />
      </button>
      <div className="flex gap-3 items-center">
        {items.map((item, key) => {
          //variables
          const Icon = item.Icon;
          const isActive = item.title === activeSection.title;

          return (
            <div
              key={key}
              role="button"
              onClick={() => setActiveSection(item)}
              className={clsx('p-3', isActive && 'p-2', 'rounded-full')}
              style={{
                background: isActive
                  ? item.primary_color
                  : item.secondary_color,
                color: isActive ? 'white' : undefined,
              }}
            >
              {isActive && <Icon size={16} />}
            </div>
          );
        })}
      </div>
      <button
        disabled={nextSectionIndex === -1}
        className={clsx(
          'p-2 border border-black-200',
          'flex items-center justify-center rounded-full',
          nextSectionIndex === -1 && 'text-black-200'
        )}
        onClick={() => {
          setActiveSection(items[nextSectionIndex]);
        }}
      >
        <ChevronRightIcon />
      </button>
    </div>
  );
}
