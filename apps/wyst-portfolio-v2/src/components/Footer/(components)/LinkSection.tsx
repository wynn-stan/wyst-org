import Link from 'next/link';

import routes from '../../../routes';
import { external_links } from '../../../utils';
import clsx from 'clsx';
import { MoveUpRightIcon } from 'lucide-react';

export default function LinkSection() {
  /**
   * Variables
   */
  const sections = [
    {
      label: 'About',
      links: [
        { label: 'Who I am', value: routes.about },
        { label: 'My Resume', value: '' },
      ],
    },
    {
      label: 'Work',
      links: [
        { label: 'Metric Identity', value: routes.work.metric },
        { label: 'AAG Booking System', value: '' },
        { label: 'CitizenApp Jobs', value: '' },
        { label: 'FSM - Ecommerce Shop', value: '' },
      ],
    },
    {
      label: 'Contact',
      links: [
        { label: 'winstonlamptey456@gmail.com', value: external_links.mail },
        { label: 'LinkedIn', value: external_links.linkedIn },
        { label: 'Twitter', value: external_links.twitter },
      ],
    },
  ];

  return (
    <div className={clsx('grid gap-10 ', 'md:grid md:grid-cols-3 md:gap-4')}>
      {sections.map((item, key) => (
        <div className={clsx('md:max-w-[224px] space-y-4')} key={key}>
          <div
            className={clsx(
              'font-semibold text-xl',
              'border-b-[2px] border-black-200',
              'py-2'
            )}
          >
            {item.label}
          </div>
          <div className="space-y-3">
            {item.links.map((link, key) => {
              const Element = link.value ? Link : 'div';
              return (
                <Element
                  key={key}
                  className={clsx(
                    ' block w-full',
                    link.value ? 'hover:border-b hover:border-black-200' : ''
                  )}
                  href={link.value}
                >
                  <div
                    className={clsx(
                      'flex items-center gap-3',
                      link.value ? '' : 'text-black-300'
                    )}
                  >
                    <div className="w-full truncate">{link.label}</div>
                    <div>
                      <MoveUpRightIcon size={16} />
                    </div>
                  </div>
                </Element>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}
