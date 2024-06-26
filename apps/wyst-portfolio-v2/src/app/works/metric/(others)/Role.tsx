import { UserIcon } from 'lucide-react';
import ImageGrid from './Role/ImageGrid';
import clsx from 'clsx';

export default function Role() {
  /**Variables */
  const points = [
    'Collaborate daily with a range of stakeholders to discuss, test and implement new concepts, enhancing overall system performance and user experience.',
    'Oversee updates and maintenance of our web-based facial verification technology.',
    'Implement user feedback to address issues and enhance features.',
  ];

  return (
    <div className="space-y-[32px]">
      <div className="flex flex-col items-center ">
        <div className="flex gap-2 text-black-600">
          <UserIcon size={20} />
          <div>Role</div>
        </div>
        <div className="text-center font-medium text-3xl tracking-tighter">
          Lead Front-end Developer
        </div>
      </div>
      <div className="w-full bg-black-100 h-[1px]" />
      <div className={clsx('flex flex-col gap-10', 'md:flex-row')}>
        <div className="flex-grow mx-auto">
          <ImageGrid />
        </div>
        <div className="space-y-3">
          {points.map((text, key) => (
            <div className="flex gap-4 bg-black-50" key={key}>
              <div className="min-w-[4px] min-h-full bg-black-600" />
              <div className=" px-3 py-4">{text}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
