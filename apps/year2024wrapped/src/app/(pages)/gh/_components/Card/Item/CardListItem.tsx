import clsx from 'clsx';
import Image from 'next/image';
import { HTMLAttributes } from 'react';

interface Props extends HTMLAttributes<HTMLDivElement> {
  name: string;
  description: string;
  profile_photo: string;
  tags: string[];
  isActive?: boolean;
  showStatus?: boolean;
}

export function CardListItem({
  description,
  name,
  tags,
  isActive,
  showStatus = true,
  profile_photo,
  onClick,
  className,
  ...props
}: Props) {
  return (
    <div
      role="button"
      className={clsx(
        'p-4',
        'bg-white rounded-lg',
        'grid grid-cols-[auto_1fr] items-center gap-3',
        'md:min-w-[328px] xl:min-w-fit h-fit',
        className
      )}
      onClick={onClick}
    >
      {/* State */}
      {showStatus && (
        <div>
          <div
            className={clsx(
              'w-3 h-3 rounded-full',
              isActive ? 'bg-orange-40' : 'bg-gray-200'
            )}
          />
        </div>
      )}

      {/* Content */}
      <div className="grid grid-cols-[auto_1fr] items-center gap-2">
        {/* Logo */}
        <Image
          alt="profile"
          width={40}
          height={40}
          src={profile_photo}
          className="w-10 h-10 rounded-full object-cover"
        />

        {/* Text */}
        <div className="space-y-1">
          <small className="font-medium !line-clamp-1">{name}</small>
          <small className="smaller !line-clamp-1 text-gray">
            {description}
          </small>
          <small className="smaller !line-clamp-1 text-gray">
            {tags.join(' | ')}
          </small>
        </div>
      </div>
    </div>
  );
}
