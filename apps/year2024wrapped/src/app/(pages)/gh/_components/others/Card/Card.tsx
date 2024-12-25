import clsx from 'clsx';
import Image from 'next/image';

interface Props {
  name: string;
  description: string;
  profile_photo: string;
  tags: string[];
  isActive?: boolean;
  showStatus?: boolean;
  onClick?: () => void;
}

export default function Card({
  description,
  name,
  tags,
  isActive,
  showStatus = true,
  profile_photo,
  onClick,
}: Props) {
  return (
    <div
      role="button"
      className={clsx(
        'p-4',
        'bg-white rounded-lg',
        'flex items-center gap-3',
        'md:min-w-[328px] xl:min-w-fit h-fit'
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
      <div className="flex items-center gap-2">
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
            {tags.map((tag, index) =>
              index + 1 === tags.length ? `${tag}` : `${tag} | `
            )}
          </small>
        </div>
      </div>
    </div>
  );
}
