'use client';

import { usePathname } from 'next/navigation';
import routes from '../../routes';
import { CircleUserIcon } from 'lucide-react';
import clsx from 'clsx';
import Link from 'next/link';

type TypeIcon = (props: any) => JSX.Element | React.ReactNode;

type NavLinks = {
  [key: string]: {
    label: string;
    icon: TypeIcon;
    slug: string;
  };
};

export default function Navbar() {
  /**
   * Variables
   */
  const path = usePathname();
  const path_items = path.split('/');
  const activeRoute = path_items[path_items.length - 1];

  /**
   * Nav Links
   */
  const NavLinks: NavLinks = {
    about: {
      label: 'About',
      icon: CircleUserIcon,
      slug: routes.about,
    },
    metric_project: {
      label: 'Metric Project',
      icon: () => <></>,
      slug: routes.work.metric,
    },
    aag_project: {
      label: 'AAG Project',
      icon: () => <></>,
      slug: routes.work.aag,
    },
  };
  return (
    <div
      className={clsx('rounded-full shadow-md p-2 w-fit mx-auto', 'flex gap-2')}
    >
      {Object.values(NavLinks).map((items, index) => {
        //variables
        const { icon: Icon, label, slug } = items;
        const slug_path = slug.split('/');

        const isActiveRoute = activeRoute === slug_path[slug_path.length - 1];

        return (
          <Link
            href={slug}
            key={index}
            className={clsx(
              'rounded-full flex gap-1 px-4 py-3 w-fit',
              isActiveRoute ? 'font-medium bg-black-50' : 'hover:bg-black-50'
            )}
          >
            <Icon size={20} variant={isActiveRoute ? 'solid' : 'line'} />
            <div>{label}</div>
          </Link>
        );
      })}
    </div>
  );
}
