import clsx from 'clsx';
import { HTMLAttributes } from 'react';

interface Props extends HTMLAttributes<HTMLDivElement> {
  Icon: React.ReactElement;
  title: string;
}

export default function Section({
  Icon,
  title,
  children,
  className,
  ...props
}: Props) {
  return (
    <div className="space-y-[32px]" {...props}>
      <div className="flex flex-col items-center ">
        {Icon}
        <div className="text-center font-medium text-3xl tracking-tighter">
          {title}
        </div>
      </div>
      <div className="w-full bg-black-100 h-[1px]" />
      <div className={clsx('flex flex-col gap-10', 'md:flex-row')}>
        {children}
      </div>
    </div>
  );
}
