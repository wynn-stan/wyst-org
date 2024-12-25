import clsx from 'clsx';
import { HTMLAttributes } from 'react';

export function DefaultContainer({
  children,
  className,
  shadowColor = 'black',
  ...props
}: HTMLAttributes<HTMLDivElement> & {
  shadowColor?: 'yellow' | 'orange' | 'peach' | 'black';
}) {
  return (
    <div className={clsx('bg-white p-4 md:p-6 rounded-xl', 'shadow-md')}>
      <div
        className={clsx(
          'overflow-y-auto no-scrollbar',
          'max-h-[800px] h-full '
        )}
      >
        <div>{children}</div>
      </div>
    </div>
  );
}
