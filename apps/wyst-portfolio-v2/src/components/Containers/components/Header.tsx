import clsx from 'clsx';
import { HTMLAttributes } from 'react';

export default function Header({
  children,
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={clsx(
        'p-3 bg-black-50 text-2xl font-medium rounded-lg',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
