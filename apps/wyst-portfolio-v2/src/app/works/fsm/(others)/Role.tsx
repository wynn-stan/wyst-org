import clsx from 'clsx';

import Date from './Role/Date';
import Title from './Role/Title';
import Responsiblities from './Role/Responsibilities';

export default function Role() {
  return (
    <div className={clsx('grid grid-cols-1 gap-5', 'xl:grid-cols-[1fr_1fr]')}>
      <Date />
      <Title />
      <div className="xl:col-span-2">
        <Responsiblities />
      </div>
    </div>
  );
}
