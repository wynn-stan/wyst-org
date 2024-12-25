import clsx from 'clsx';

export function Header() {
  return (
    <div className={clsx('section-heading')}>
      <h1
        className={clsx(
          'section-heading__header',
          '!text-4xl md:!text-5xl',
          'text-black'
        )}
      >
        Tech Events of 2024
      </h1>
      <p className="section-heading__desc text-gray-800">
        A recap of the key events and gatherings that brought together the
        Ghanaian tech community, sparking new ideas and collaborations.
      </p>
    </div>
  );
}
