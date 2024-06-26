import { LinkedInIcon, TwitterIcon } from '@wyst/portfolio-ui';
import clsx from 'clsx';

import LinkSection from './(components)/LinkSection';
import { external_links } from '../../utils';
import routes from '../../routes';

export default function Footer() {
  return (
    <div className={clsx('bg-black-50', 'flex justify-center')}>
      <div className="py-[80px] max-w-[1024px] w-full px-10 space-y-[60px]">
        <div>
          <LinkSection />
        </div>
        <div
          className={clsx(
            'flex flex-col  gap-4  items-center justify-between',
            'md:flex-row border-t border-black-200 py-5'
          )}
        >
          <div className="flex justify-center flex-wrap gap-2">
            <div className="font-bold">
              <span className="text-black-300">winston</span>
              <span>lamptey</span>
            </div>
            <div>© 2024. All rights reserved</div>
          </div>
          <div className="flex gap-4">
            <LinkedInIcon />
            <TwitterIcon />
          </div>
        </div>
      </div>
    </div>
  );
}
