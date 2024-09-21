'use client';

import { usePathname } from 'next/navigation';
import routes from '../../routes';
import {
  BoltIcon,
  ChevronDown,
  CircleUserIcon,
  Droplet,
  FootprintsIcon,
  MedalIcon,
} from 'lucide-react';
import clsx from 'clsx';
import Link from 'next/link';
import Dropdown from '../Dropdown/Dropdown';

type TypeIcon = (props: any) => JSX.Element | React.ReactNode;

type NavItem = {
  label: string;
  icon: TypeIcon;
  slug: string;
};

type NavLinks = {
  type: 'link' | 'category';
  label?: string;
  items: NavItem[];
}[];
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
  const NavLinks: NavLinks = [
    {
      type: 'link',
      items: [{ label: 'About', icon: CircleUserIcon, slug: routes.about }],
    },
    {
      type: 'category',
      label: 'Projects',
      items: [
        {
          label: 'Metric',
          icon: BoltIcon,
          slug: routes.work.metric,
        },
        {
          label: 'All African Games',
          icon: MedalIcon,
          slug: routes.work.aag,
        },
        {
          label: 'ForeverSoleMates',
          icon: FootprintsIcon,
          slug: routes.work.fsm,
        },
      ],
    },
  ];
  return (
    <div
      className={clsx('rounded-full shadow-md p-2 w-fit mx-auto', 'flex gap-2')}
    >
      {NavLinks.map((item, index) => {
        //variables
        const isLink = item.type === 'link';

        return (
          <>
            {isLink && (
              <DirectLink item={item.items[0]} activeRoute={activeRoute} />
            )}

            {!isLink && (
              <Category
                activeRoute={activeRoute}
                label={item.label || ''}
                items={item.items}
              />
            )}
          </>
        );
      })}
    </div>
  );
}

function DirectLink({
  item,
  activeRoute,
}: {
  item: NavItem;
  activeRoute: string;
}) {
  /**
   * Variables
   */
  const { icon: Icon, label, slug } = item;
  const slug_path = slug.split('/');

  const isActiveRoute = activeRoute === slug_path[slug_path.length - 1];
  return (
    <Link
      href={slug}
      className={clsx(
        'rounded-full flex gap-1 px-4 py-3 w-fit',
        isActiveRoute ? 'font-medium bg-black-50' : 'hover:bg-black-50'
      )}
    >
      <Icon size={20} variant={isActiveRoute ? 'solid' : 'line'} />
      <div>{label}</div>
    </Link>
  );
}

function Category({
  items,
  label,
  activeRoute,
}: {
  items: NavItem[];
  label: string;
  activeRoute: string;
}) {
  return (
    <Dropdown>
      <Dropdown.Toggle
        withToggleIcon
        role="button"
        className={clsx(
          'rounded-full flex gap-1 px-4 py-3 w-fit hover:bg-black-50'
        )}
      >
        <span>{label}</span>
      </Dropdown.Toggle>
      <Dropdown.Menu flip={false} offset={[-100, 12]}>
        {items.map((item, index) => {
          const { icon: Icon, label, slug } = item;
          const slug_path = slug.split('/');

          const isActiveRoute = activeRoute === slug_path[slug_path.length - 1];

          return (
            <Link key={index} href={item.slug}>
              <Dropdown.Item
                className={clsx(
                  'flex gap-2 items-center',
                  'rounded-lg px-4 py-3',
                  isActiveRoute
                    ? 'font-medium bg-black-50'
                    : 'hover:bg-black-50'
                )}
              >
                <Icon size={20} variant={isActiveRoute ? 'solid' : 'line'} />
                <span>{item.label}</span>
              </Dropdown.Item>
            </Link>
          );
        })}
      </Dropdown.Menu>
    </Dropdown>
  );
}
