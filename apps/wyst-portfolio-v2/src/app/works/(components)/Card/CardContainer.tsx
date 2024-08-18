import clsx from 'clsx';
import { HTMLAttributes } from 'react';

interface Props extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export default function CardContainer({
  children,
  className,
  ...props
}: Props) {
  return (
    <section
      className={clsx('p-3 md:p-10 bg-[#f0f0f0] rounded-lg', className)}
      {...props}
    >
      {children}
    </section>
  );
}
