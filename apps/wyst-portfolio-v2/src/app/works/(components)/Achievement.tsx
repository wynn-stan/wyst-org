import clsx from 'clsx';
import { MoveUpRightIcon } from 'lucide-react';
import Link from 'next/link';

interface Props {
  link?: string;
  header: string;
  value: string;
  description: string;
}

export default function Achievement({
  link,
  description,
  header,
  value,
}: Props) {
  /**
   * Variables
   */
  const Element = link ? Link : 'div';

  return (
    <Element href={link || ''} className="space-y-3">
      <div
        className={clsx(
          'p-3 font-medium rounded-lg w-full bg-black-50',
          'flex flex-wrap justify-between gap-4'
        )}
      >
        <div>{header}</div>
        {link ? (
          <div className="flex items-center gap-1">
            {/* <FacebookIcon size={20} /> */}
            <MoveUpRightIcon size={16} />
          </div>
        ) : (
          ''
        )}
      </div>
      <div className="space-y-3">
        <div className="font-medium text-3xl">{value}</div>
        <div className="w-14 h-[3px] bg-black-950" />
        <div className="text-sm text-black-400">{description}</div>
      </div>
    </Element>
  );
}
