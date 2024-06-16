import clsx from 'clsx';
import { HTMLAttributes } from 'react';

export default function Template({
  children,
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={clsx('rounded-full p-3', className)} {...props}>
      {children}
    </div>
  );
}
