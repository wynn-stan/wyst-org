import { LinkedinIcon } from 'lucide-react';
import Link from 'next/link';

import { SocialsInterface } from '../Details';
import { XLogo, YoutubeLogo } from '@phosphor-icons/react';
import clsx from 'clsx';

export default function Footer({
  tags,
  socials,
}: {
  tags?: string[];
  socials?: SocialsInterface;
}) {
  return (
    <div className="flex-grow flex flex-col gap-4 justify-between">
      <div className="flex gap-4 text-gray-500">
        {socials?.linkedin && (
          <Link target="_blank" href={socials.linkedin}>
            <LinkedinIcon size={20} />
          </Link>
        )}
        {socials?.twitter && (
          <Link target="_blank" href={socials.twitter}>
            <XLogo size={20} />
          </Link>
        )}
        {socials?.youtube && (
          <Link target="_blank" href={socials.youtube}>
            <YoutubeLogo size={20} />
          </Link>
        )}
      </div>
      <div className="flex flex-wrap gap-2">
        {tags?.map((tag, index) => (
          <small
            key={index}
            className={clsx(
              'w-fit text-gray-500 p-2',
              'rounded border border-gray-200'
            )}
          >
            {tag}
          </small>
        ))}
      </div>
    </div>
  );
}
