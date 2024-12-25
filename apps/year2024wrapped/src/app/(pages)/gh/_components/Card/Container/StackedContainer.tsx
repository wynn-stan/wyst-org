import clsx from 'clsx';
import { HTMLAttributes } from 'react';

export function StackedContainer({
  children,
  className,
  shadowColor = 'black',
  ...props
}: HTMLAttributes<HTMLDivElement> & {
  shadowColor?: 'yellow' | 'orange' | 'peach' | 'black';
}) {
  const shadow = (() => '')();

  return (
    <div className={clsx('relative')}>
      <div
        className={clsx(
          'bg-white p-4 md:p-6 rounded-xl',
          'relative z-30 shadow-md'
        )}
      >
        <div
          className={clsx(
            'max-h-[376px] md:max-h-[600px] overflow-y-auto no-scrollbar'
          )}
        >
          <div>{children}</div>
        </div>
      </div>
      <div
        className={clsx(
          'z-20 absolute left-[14px] right-[14px] bottom-[-12px] h-[100px]',
          'bg-white rounded-xl shadow-md'
        )}
      />
      <div
        className={clsx(
          'z-10 absolute left-[30px] right-[30px] bottom-[-20px] h-[100px]',
          'bg-white rounded-xl shadow-sm'
        )}
      />
    </div>
  );
}
