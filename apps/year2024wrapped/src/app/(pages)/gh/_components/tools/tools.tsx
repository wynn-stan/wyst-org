import clsx from 'clsx';
import { useEvents, useTools } from '../../../../../hooks';

export default function Tools() {
  /**
   * Hooks
   */
  const { description } = useTools();

  return (
    <div className={clsx('bottom-container-gradient')}>
      <div
        className={clsx(
          'section-container',
          ' py-[60px] px-10',
          'flex flex-col gap-[60px]'
        )}
      >
        {/* Heading */}

        <div className={clsx('section-heading')}>
          <h1 className="section-heading__header">Short Event Heading Text</h1>
          <p className="section-heading__desc">
            Highlighting the tech products, tools, and services that made a
            difference, showcasing the creativity and resourcefulness of
            Ghanaian developers and entrepreneurs.
          </p>
        </div>

        {/* Body */}
        <div className="bg-gray-200 w-full h-[700px]"></div>
      </div>
    </div>
  );
}
