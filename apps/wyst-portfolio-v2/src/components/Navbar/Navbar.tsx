// import { usePathname } from 'next/navigation';
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
  //   const path = usePathname();

  /**
   * Nav Links
   */
  const NavLinks: NavLinks = {
    about: {
      label: 'About',
      icon: CircleUserIcon,
      slug: routes.about,
    },
  };
  return (
    <div className={clsx('rounded-full shadow-md p-2 w-fit mx-auto')}>
      {Object.values(NavLinks).map((items, index) => {
        //variables
        const { icon: Icon, label, slug } = items;
        const activeRoute = true;

        return (
          <Link
            href={slug}
            key={index}
            className={clsx(
              'rounded-full flex gap-1 px-4 py-3 w-fit',
              activeRoute ? 'font-medium bg-black-50' : ''
            )}
          >
            <Icon size={20} variant={activeRoute ? 'solid' : 'line'} />
            <div>{label}</div>
          </Link>
        );
      })}
    </div>
  );
}
