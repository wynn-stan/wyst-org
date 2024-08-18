import clsx from 'clsx';
import { HTMLAttributes } from 'react';

interface Props extends HTMLAttributes<HTMLDivElement> {
  header: string;
  description: string;
  simplifyOnSm?: boolean;
}

export default function CardItem({
  description,
  header,
  className,
  simplifyOnSm,
  ...props
}: Props) {
  return (
    <div
      className={clsx('p-6 space-y-5 rounded-lg', 'bg-white', className)}
      {...props}
    >
      <div className={clsx('space-y-4 w-full', 'md:w-fit')}>
        <h2 className="text-2xl font-medium">{header}</h2>
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
