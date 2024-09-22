import clsx from 'clsx';

import Data from '../(components)/data';
import { CheckCircleIcon } from '@wyst/portfolio-ui';

export default function Responsiblities() {
  /**
   *
   */
  const responsibilities = Data.role_activities;

  return (
    <div
      className={clsx(
        'grid grid-cols-1 md:grid-cols-[1fr_1fr] gap-5',
        'bg-blue-5',
        'p-5 rounded-2xl'
      )}
    >
      {responsibilities.map((item, key) => (
        <Item key={key} {...item} />
      ))}
    </div>
  );
}

function Item({ description, title }: { title: string; description: string }) {
  return (
    <div
      className={clsx(
        'p-5',
        'flex gap-8 justify-between bg-white',
        'rounded-xl'
      )}
    >
      <section className="space-y-5">
        <div className="space-y-2 w-fit">
          <h3 className="text-base lg:text-xl font-medium">{title}</h3>
          <div
            className={clsx('w-full h-[1px] bg-black-200', 'hidden md:block')}
          />
        </div>
        <p className="hidden md:block">{description}</p>
      </section>

      <div>
        <CheckCircleIcon color="var(--color-blue-80)" />
      </div>
    </div>
  );
}
