import clsx from 'clsx';
import Image from 'next/image';
import { HTMLAttributes } from 'react';

export default function ImageGrid() {
  //variables
  const base_path = '/assets/images/works/metric/role';

  return (
    <div className="flex gap-4">
      <StyledImage className="h-full" src={`${base_path}/single.png`} />
      <div className="space-y-4">
        <StyledImage src={`${base_path}/team-2.png`} />
        <StyledImage src={`${base_path}/team-1.png`} />
      </div>
    </div>
  );
}

const StyledImage = ({
  src,
  className,
  ...props
}: HTMLAttributes<HTMLImageElement> & { src: string }) => {
  return (
    <div className="w-[150px] lg:w-[215px]">
      <Image
        className={clsx(
          'w-[150px] lg:w-[215px] h-auto rounded-md object-cover object-center',
          className
        )}
        alt="image"
        width={450}
        height={450}
        src={src}
        {...props}
      />
    </div>
  );
};
