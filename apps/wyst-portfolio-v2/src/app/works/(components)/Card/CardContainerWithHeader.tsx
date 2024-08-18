import clsx from 'clsx';
import { HTMLAttributes } from 'react';

interface Props extends HTMLAttributes<HTMLDivElement> {
  header: React.ReactNode | string;
  children: React.ReactNode;
}

export default function CardContainerWithHeader({ header, children }: Props) {
  return (
    <section className={clsx('p-3 md:p-8 space-y-5 rounded-lg', 'bg-white')}>
      <div className="space-y-5">
        <header className="font-medium text-2xl text-center md:text-left">
          {header}
        </header>
        <div className="w-full min-h-[1px] bg-black-100" />
      </div>
      <div>{children}</div>
    </section>
  );
}
