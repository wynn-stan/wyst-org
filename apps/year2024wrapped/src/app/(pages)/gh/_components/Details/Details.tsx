import clsx, { ClassValue } from 'clsx';
import CoverAndProfile from './_components/CoverAndProfile';
import BodyText from './_components/BodyText';
import Previews from './_components/Previews';
import Footer from './_components/Footer';

export interface SocialsInterface {
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
      <div className="flex-grow flex flex-col gap-4">
        <BodyText {...{ date, description, location, name, socials }} />

        {(preview_photos?.length || preview_urls?.length) && (
          <Previews {...{ preview_photos, preview_urls }} />
        )}

        <Footer {...{ socials, tags }} />
      </div>
    </div>
  );
}
