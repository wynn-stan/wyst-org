import clsx from 'clsx';
import Image from 'next/image';
import { HTMLAttributes } from 'react';

interface Props extends HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  header: string;
  description: string;
  imgSrc: string;
  stats?: { value: string; description: string }[];
}

export default function SystemCard({
  className,
  description,
  header,
  imgSrc,
  stats,
}: Props) {
  return (
    <article
      className={clsx(
        'px-6 py-8 rounded-lg',
        'bg-white',
        'flex flex-col lg:flex-row gap-8',
        className
      )}
    >
      <section className="lg:w-[50%] space-y-5">
        <div className={clsx('space-y-3 w-full', '')}>
          <h2 className="text-2xl font-medium">{header}</h2>
          <div className={clsx('bg-black-600 w-full min-h-[1px]')} />
        </div>
        <p className={clsx('text-sm')}>{description}</p>
        <section className={clsx('text-sm', 'flex gap-3 flex-wrap')}>
          {stats?.map((item, index) => (
            <p key={index} className="px-3 py-2 bg-black-50 rounded">
              <span className="font-medium">{item.value}</span>{' '}
              <span className="text-black-400">{item.description}</span>
            </p>
          ))}
        </section>
      </section>
      <figure
        className={clsx(
          'rounded-lg h-full overflow-hidden',
          'border border-black-100',
          'lg:w-[50%]',
          'max-h-[200px]'
        )}
      >
        <img
          alt="figure"
          className="object-fill object-left-top"
          src={imgSrc}
        />
      </figure>
    </article>
  );
}
