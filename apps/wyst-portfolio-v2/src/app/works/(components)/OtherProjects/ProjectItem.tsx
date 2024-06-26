import Image from 'next/image';
import { IProjectItem } from '../OtherProjects';
import { MoveUpRightIcon } from 'lucide-react';
import { Pills } from '../../../../components';
import clsx from 'clsx';
import Link from 'next/link';

interface Props extends IProjectItem {
  className?: string;
}

export default function ProjectItem({
  className,
  desc,
  industry,
  logoUrl,
  route,
  name,
}: Props) {
  /***
   * Element
   */
  const Element = route ? Link : 'div';

  return (
    <Element
      href={route}
      className={clsx(
        'min-w-[350px] p-3 border border-gray-200 rounded-xl',
        'flex flex-col gap-3 bg-gray-100',
        route ? 'hover:bg-white' : ''
      )}
    >
      <div>
        <Image
          className="w-[20] h-[20] rounded-full"
          width={120}
          height={120}
          alt="logo.png"
          src={logoUrl}
        />
      </div>
      <div className="font-medium text-xl">{name}</div>
      <div className="text-sm text-black-900 h-full">{desc}</div>
      <div className="flex justify-between gap-3 text-black-600">
        <Pills.Template className="bg-black-100">
          <div className="text-sm font-medium">{industry}</div>
        </Pills.Template>
        <div className="h-fit w-fit p-2 bg-black-100 rounded-full">
          <MoveUpRightIcon />
        </div>
      </div>
    </Element>
  );
}
