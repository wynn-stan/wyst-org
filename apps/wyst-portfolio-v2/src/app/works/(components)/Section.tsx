import clsx from 'clsx';
import { HTMLAttributes } from 'react';

interface Props extends HTMLAttributes<HTMLDivElement> {
  Icon: React.ReactElement;
  title: string;
  childrenClassName?: string;
}

export default function Section({
  Icon,
  title,
  children,
  className,
  childrenClassName,
  ...props
}: Props) {
  return (
    <div className={clsx('space-y-[32px]', className)} {...props}>
      <div className="flex flex-col gap-2 items-center ">
        {Icon}
        <header className="text-center font-medium text-3xl tracking-tighter">
          {title}
        </header>
      </div>
      <div className="w-full bg-black-100 h-[1px]" />
      <div
        className={clsx(
          'flex flex-col gap-10',
          'md:flex-row',
          childrenClassName
        )}
      >
        {children}
      </div>
    </div>
  );
}
