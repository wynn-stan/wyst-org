import clsx from 'clsx';
import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react';

export default function Date() {
  /**
   * Variables
   */
  const dates = [
    { dayWord: 'Sat', dayNum: 30 },
    { dayWord: 'Sun', dayNum: 1 },
    { dayWord: 'Mon', dayNum: 2, isActive: true },
    { dayWord: 'Tue', dayNum: 3 },
    { dayWord: 'Wed', dayNum: 4 },
    { dayWord: 'Thu', dayNum: 5 },
    { dayWord: 'Fri', dayNum: 6 },
    { dayWord: 'Sat', dayNum: 7 },
  ];

  return (
    <div className="space-y-5">
      <div
        className={clsx(
          'bg-blue-5 p-2 ',
          'flex items-center justify-between rounded-full'
        )}
      >
        <div className="shadow-md rounded-full bg-white p-1">
          <ChevronLeftIcon />
        </div>
        <div className="font-medium">April</div>
        <div className="shadow-md rounded-full bg-white p-1">
          <ChevronRightIcon />
        </div>
      </div>
      <div className="flex justify-between">
        {dates.map((item, key) => {
          return (
            <DateItem
              className={clsx(`${key > 4 && 'hidden'} md:block`)}
              key={key}
              {...item}
            />
          );
        })}
      </div>
    </div>
  );
}

function DateItem({
  dayNum,
  dayWord,
  isActive,
  className,
}: {
  dayWord: string;
  dayNum: number;
  isActive?: boolean;
  className?: string;
}) {
  return (
    <div
      className={clsx(
        isActive && 'bg-blue-80 text-white  font-medium',
        'px-3 py-2 text-center',
        'flex flex-col ',
        'rounded-lg',
        className
      )}
    >
      <div>{dayWord}</div>
      <div>{dayNum}</div>
    </div>
  );
}
