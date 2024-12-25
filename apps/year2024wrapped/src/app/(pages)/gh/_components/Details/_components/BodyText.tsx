import { CalendarDots, DotOutline, MapPinArea } from '@phosphor-icons/react';
import Link from 'next/link';
import dayjs from 'dayjs';

import { SocialsInterface } from '../Details';

export default function BodyText({
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
              className="border border-gray-200 rounded-full px-2 py-1"
            >
              <small className="smaller font-semibold text-gray">Visit</small>
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
