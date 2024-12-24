'use client';

import { RewindCircle } from '@phosphor-icons/react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import clsx from 'clsx';

import { routes } from '../../routes';

export default function RootNavigation({
  children,
}: {
  children: React.ReactNode;
}) {
  /**
   * Hooks
   */
  const path = usePathname();

  /**
   * Variables
   */
  const navItems = [
    {
      label: 'Ghana-In-Review',
      slug: routes.ghana_in_review.index,
      icon: RewindCircle,
    },
  ];
  return (
    <div>
      <div
        className={clsx(
          'max-w-7xl w-full mx-auto',
          'bg-gray-25',
          'p-5 lg:py-8 lg:px-10',
          'flex'
        )}
      >
        <h4 className="h4 logo-text w-full">2024Wrapped</h4>
        <div>
          {navItems.map((item, index) => {
            const Icon = item?.icon as any;
            const isActive = item.slug.includes(path);
            return (
              <Link
                key={index}
                href={item.slug}
                className={clsx(
                  'w-fit pb-2',
                  'flex gap-1 items-center',
                  isActive && 'border-b-2 border-black font-semibold'
                )}
              >
                {Icon && (
                  <div>
                    <Icon size={24} weight={isActive && 'fill'} />
                  </div>
                )}
                <p className="w-max">{item.label}</p>
              </Link>
            );
          })}
        </div>

        <div className={clsx('w-full flex justify-end', 'hidden md:flex')}>
          <div className={clsx('w-5 h-5 bg-gray-200 rounded-full')}></div>
        </div>
      </div>
      <div>{children}</div>
    </div>
  );
}
