import { HTMLAttributes } from 'react';
import clsx from 'clsx';

import { TypeIcon } from '../../../../interfaces';

interface Props extends HTMLAttributes<HTMLDivElement> {
  header: string;
  description: string;
  simplifyOnSm?: boolean;
  Icon?: React.ReactNode;
  headerClassName?: string;
}

export default function CardItem({
  description,
  header,
  className,
  simplifyOnSm,
  headerClassName,
  Icon,
  ...props
}: Props) {
  return (
    <div
      className={clsx('p-6 space-y-5 rounded-lg', 'bg-white', className)}
      {...props}
    >
      <div className={clsx('space-y-4 w-full', 'md:w-fit', headerClassName)}>
        <div className="flex gap-2 items-center justify-center">
          {Icon}
          <h2 className="text-2xl font-medium">{header}</h2>
        </div>
        <div
          className={clsx(
            'bg-black-600 w-full min-h-[1px]',
            simplifyOnSm ? 'hidden md:block' : ''
          )}
        />
      </div>
      <p className={clsx('text-sm', simplifyOnSm ? 'hidden md:block' : '')}>
        {description}
      </p>
    </div>
  );
}
