import clsx from 'clsx';
import { useEvents, usePersons } from '../../../../../hooks';

export default function Persons() {
  /**
   * Hooks
   */
  const { description } = usePersons();

  return (
    <div className={clsx('mid-container-gradient')}>
      <div
        className={clsx(
          'section-container',
          ' py-[60px] px-10',
          'flex flex-col gap-[60px]'
        )}
      >
        {/* Heading */}

        <div className={clsx('section-heading')}>
          <p className="section-heading__header">Tech Personalities of 2024</p>
          <p className="section-heading__desc">
            A look at the individuals who made a meaningful impact in Ghana’s
            tech scene this year, shaping conversations and driving progress.
          </p>
        </div>

        {/* Body */}
        <div className="bg-gray-200 w-full h-[700px]"></div>
      </div>
    </div>
  );
}
