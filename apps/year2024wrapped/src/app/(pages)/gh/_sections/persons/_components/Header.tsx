import clsx from 'clsx';

export function Header() {
  return (
    <div className={clsx('section-heading')}>
      <h1 className={clsx('section-heading__header', '!text-4xl md:!text-5xl')}>
        Tech Personalities of 2024
      </h1>
      <p className="section-heading__desc">
        A look at the individuals who made a meaningful impact in Ghana’s tech
        scene this year, shaping conversations and driving progress.
      </p>
    </div>
  );
}
