import Image from 'next/image';
import clsx from 'clsx';

export default function CoverAndProfile({
  cover_photo,
  profile_photo,
}: {
  cover_photo: string;
  profile_photo: string;
}) {
  return (
    <div className="relative">
      <Image
        width={500}
        height={500}
        alt="cover-photo"
        className={clsx('rounded-[4px] aspect-video object-cover', 'w-full')}
        src={cover_photo}
      />

      <Image
        alt="profile-photo"
        width={128}
        height={128}
        src={profile_photo}
        className={clsx(
          'w-[48px] md:w-[96px] h-[48px] md:h-[96px] ',
          'rounded-full object-cover',
          'absolute left-3 md:left-5 bottom-[-24px] md:bottom-[-48px]',
          'border-2 border-gray-200 '
        )}
      />
    </div>
  );
}
