import clsx from 'clsx';
import Image from 'next/image';
import React, { HTMLAttributes } from 'react';

function DefaultContainer({
  children,
  className,
  shadowColor = 'black',
  ...props
}: HTMLAttributes<HTMLDivElement> & {
  shadowColor?: 'yellow' | 'orange' | 'peach' | 'black';
}) {
  return (
    <div
      className={clsx(
        'bg-white p-4 md:p-6 rounded-xl',
        'relative z-30 shadow-md'
      )}
    >
      <div
        className={clsx(
          'max-h-[376px] md:max-h-[600px] overflow-y-auto no-scrollbar'
        )}
      >
        <div>{children}</div>
      </div>
    </div>
  );
}

function StackedContainer({
  children,
  className,
  shadowColor = 'black',
  ...props
}: HTMLAttributes<HTMLDivElement> & {
  shadowColor?: 'yellow' | 'orange' | 'peach' | 'black';
}) {
  const shadow = (() => '')();

  return (
    <div className={clsx('relative')}>
      <div
        className={clsx(
          'bg-white p-4 md:p-6 rounded-xl',
          'relative z-30 shadow-md'
        )}
      >
        <div
          className={clsx(
            'max-h-[376px] md:max-h-[600px] overflow-y-auto no-scrollbar'
          )}
        >
          <div>{children}</div>
        </div>
      </div>
      <div
        className={clsx(
          'z-20 absolute left-[14px] right-[14px] bottom-[-12px] h-[100px]',
          'bg-white rounded-xl shadow-md'
        )}
      />
      <div
        className={clsx(
          'z-10 absolute left-[30px] right-[30px] bottom-[-20px] h-[100px]',
          'bg-white rounded-xl shadow-sm'
        )}
      />
    </div>
  );
}

function ListItem({
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
        <div className="grid grid-cols-[auto_1fr] gap-2 md:gap-4">
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

export default Object.assign(
  {},
  { StackedContainer, DefaultContainer, ListItem }
);
