import clsx from 'clsx';
import Image from 'next/image';

function WithoutCover({
  profile_photo,
  tags,
  showSeperator = false,
  name,
  onClick,
  isActive,
  showStatus,
}: {
  name: string;
  profile_photo: string;
  tags: string;
  showSeperator?: boolean;
  onClick?: () => any;
  cover_photo?: string;
  description?: string;
  isActive?: boolean;
  showStatus?: boolean;
}) {
  return (
    <>
      <div
        onClick={onClick}
        role="button"
        className="grid grid-cols-[auto_1fr] items-center gap-3"
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
        <div className="grid grid-cols-[auto_1fr] gap-2 md:gap-4">
          <div>
            <Image
              width={72}
              height={72}
              alt="profile"
              src={profile_photo}
              className={clsx('w-10 h-10 rounded-full object-cover')}
            />
          </div>

          <div className="space-y-1">
            <small className="font-medium !line-clamp-1">{name}</small>

            <small className="text-gray smaller !line-clamp-1">{tags}</small>
          </div>
        </div>
      </div>

      {showSeperator && <div className="w-full bg-gray-100 h-[2px]" />}
    </>
  );
}

function WithCover({
  cover_photo,
  profile_photo,
  tags,
  description,
  twitter_handle,
  showSeperator = false,
  name,
  onClick,
}: {
  name: string;
  profile_photo: string;
  cover_photo: string;
  twitter_handle?: string;
  tags: string;
  description?: string;
  showSeperator?: boolean;
  onClick?: () => any;
}) {
  return (
    <>
      <div
        onClick={onClick}
        role="button"
        className="flex items-center gap-4 justify-between"
      >
        <div className="grid grid-cols-[auto_1fr] gap-2 items-center md:gap-4">
          <div>
            <Image
              width={72}
              height={72}
              alt="profile"
              src={profile_photo}
              className={clsx(
                'w-10 h-10 md:w-[72px] md:h-[72px] rounded-full object-cover'
              )}
            />
          </div>

          <div className="space-y-1">
            <small className="font-medium !line-clamp-1">{name}</small>
            {twitter_handle && (
              <small className="text-gray hidden md:block smaller !line-clamp-1">{`@${twitter_handle}`}</small>
            )}
            {/* {description &&  <small className="text-gray hidden md:block smaller !line-clamp-1">{description}</small> } */}
            <small className="text-gray smaller !line-clamp-1">{tags}</small>
          </div>
        </div>

        <div className="hidden sm:block">
          <Image
            width={150}
            height={100}
            alt="cover"
            src={cover_photo}
            className="max-w-[120px] w-full h-auto aspect-[3/2] rounded-md object-cover"
          />
        </div>
      </div>

      {showSeperator && <div className="w-full bg-gray-100 h-[2px]" />}
    </>
  );
}

export default Object.assign({}, { WithCover, WithoutCover });
