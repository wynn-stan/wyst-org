import { FacebookIcon, TrophyIcon } from '@wyst/portfolio-ui';
import Section from '../../(components)/Section';
import clsx from 'clsx';
import { MoveUpRightIcon } from 'lucide-react';
import Link from 'next/link';

export default function Achievements() {
  /**
   * Variables
   */
  const list = [
    {
      header: 'Client Growth',
      value: '10+',
      description: 'organizations onboarded',
    },
    {
      header: 'Financial Impact',
      value: 'GH₵ 100M+',
      description: 'in Government savings',
      link: 'https://web.facebook.com/100044313225180/posts/478649843622119/?d=n&_rdc=1&_rdr',
    },
    {
      header: 'Service Performance',
      value: '145K+',
      description: 'verifications completed',
    },
    {
      header: 'Enhanced Functionality',
      value: '170+',
      description: 'features optimized and developed across 7 products.',
    },
  ];

  return (
    <Section
      Icon={<TrophyIcon variant="solid" />}
      title="Key Achievements and Milestones"
    >
      <div className={clsx('grid grid-cols-2 gap-10', 'lg:grid-cols-4')}>
        {list.map((item, key) => {
          const Element = item?.link ? Link : 'div';
          return (
            <Element href={item.link || ''} key={key} className="space-y-3">
              <div
                className={clsx(
                  'p-3 font-medium rounded-lg w-full bg-black-50',
                  'flex flex-wrap justify-between gap-4'
                )}
              >
                <div>{item.header}</div>
                {item?.link ? (
                  <div className="flex items-center gap-1">
                    <FacebookIcon size={20} />
                    <MoveUpRightIcon size={16} />
                  </div>
                ) : (
                  ''
                )}
              </div>
              <div className="space-y-3">
                <div className="font-medium text-3xl">{item.value}</div>
                <div className="w-14 h-[3px] bg-black-950" />
                <div className="text-sm text-black-400">{item.description}</div>
              </div>
            </Element>
          );
        })}
      </div>
    </Section>
  );
}
