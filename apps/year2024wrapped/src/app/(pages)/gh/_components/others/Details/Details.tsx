import {
  CalendarDots,
  Dot,
  DotOutline,
  MapPinArea,
  XLogo,
  YoutubeLogo,
} from '@phosphor-icons/react';
import clsx, { ClassValue } from 'clsx';
import dayjs from 'dayjs';
import { LinkedinIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

interface SocialsInterface {
  twitter?: string;
  linkedin?: string;
  portfolio?: string;
  product_page?: string;
  website?: string;
  youtube?: string;
}

interface Props {
  containerClassName?: ClassValue;
  details: {
    name: string;
    description: string;
    profile_photo: string;
    cover_photo: string;
    date?: string;
    location?: string;
    preview_urls?: string[];
    preview_photos?: string[];
    socials?: SocialsInterface;
    tags?: string[];
  };
}

export default function Details({ details, containerClassName }: Props) {
  /**
   * Variables
   */
  const {
    cover_photo,
    description,
    profile_photo,
    date,
    location,
    preview_photos,
    preview_urls,
    socials,
    tags,
    name,
  } = details;

  return (
    <div
      className={clsx(
        'w-full max-w-[832px]',
        'p-4 md:p-5 rounded-lg bg-white',
        'flex flex-col gap-8 md:gap-16',
        containerClassName
      )}
    >
      <CoverAndProfile {...{ cover_photo, profile_photo }} />
      <div className="space-y-4">
        <BodyText {...{ date, description, location, name, socials }} />

        <Previews {...{ preview_photos }} />

        <Footer {...{ socials, tags }} />
      </div>
    </div>
  );
}

function CoverAndProfile({
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
  0;
}

function BodyText({
  name,
  date,
  description,
  location,
  socials,
}: {
  name: string;
  date?: string;
  location?: string;
  description: string;
  socials?: SocialsInterface;
}) {
  const url = socials?.portfolio || socials?.product_page || socials?.website;

  return (
    <div className="space-y-3">
      <div className="flex items-center">
        <h4 className="">{name}</h4>
        {url && (
          <>
            <DotOutline weight="bold" size={24} />
            <Link
              target="_blank"
              href={url}
              className="border border-gray-200 rounded-full px-3 py-1"
            >
              <small>Visit</small>
            </Link>
          </>
        )}
      </div>
      {(location || date) && (
        <div className="flex flex-col md:flex-row gap-3 text-gray-800">
          <div className="flex items-center gap-1.5">
            <CalendarDots size={16} />
            <small className="font-medium">
              {dayjs(date, 'DD-MM-YYYY').format('MMM D, YYYY')}
            </small>
          </div>
          <div className="flex items-center gap-1.5">
            <MapPinArea size={16} />
            <small className="font-medium">{location}</small>
          </div>
        </div>
      )}
      <small className="text-gray-500 text-justify">{description}</small>
    </div>
  );
}

function Previews({ preview_photos }: { preview_photos?: string[] }) {
  return (
    <div className="flex gap-4 overflow-y-auto">
      {preview_photos?.map((url, index) => (
        <Image
          key={index}
          width={200}
          height={200}
          alt="preview"
          src={url}
          className="max-w-[200px] object-cover w-full rounded aspect-[3/2]"
        />
      ))}
    </div>
  );
}

function Footer({
  tags,
  socials,
}: {
  tags?: string[];
  socials?: SocialsInterface;
}) {
  return (
    <div className="space-y-4">
      <div className="flex gap-4 text-gray-500">
        {socials?.linkedin && (
          <Link target="_blank" href={socials.linkedin}>
            <LinkedinIcon size={20} />
          </Link>
        )}
        {socials?.twitter && (
          <Link target="_blank" href={socials.twitter}>
            <XLogo size={20} />
          </Link>
        )}
        {socials?.youtube && (
          <Link target="_blank" href={socials.youtube}>
            <YoutubeLogo size={20} />
          </Link>
        )}
      </div>
      <div className="flex flex-wrap gap-2">
        {tags?.map((tag, index) => (
          <small
            key={index}
            className={clsx(
              'w-fit text-gray-500 p-2',
              'rounded border border-gray-200'
            )}
          >
            {tag}
          </small>
        ))}
      </div>
    </div>
  );
}
