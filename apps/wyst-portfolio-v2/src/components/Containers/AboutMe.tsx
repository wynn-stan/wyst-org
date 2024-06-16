import clsx from 'clsx';
import { UserIcon } from 'lucide-react';
import Image from 'next/image';

export default function AboutMe() {
  return (
    <div className="flex md:gap-10 lg:gap-28 justify-center">
      <div className="max-w-[480px] space-y-4 py-10">
        <div className="flex gap-1 text-black-600 font-medium">
          <UserIcon size={20} />
          <span>About Self</span>
        </div>
        <div className="h-[2px] bg-black-100 w-full"></div>
        <div className="font-light text-xl space-y-5 py-5">
          <div>
            Hi. I am <span className="font-normal">Winston Lamptey</span>, a
            Frontend Developer currently based in Accra, Ghana.
          </div>
          <div className="text-black-600">
            Welcome to my portfolio page. Feel free to browse around.
          </div>
        </div>
      </div>
      <div>
        <Image
          className={clsx(
            'rounded-xl grayscale hover:grayscale-0',
            'hidden md:block'
          )}
          src={'/assets/images/profile-hd.png'}
          alt="profile.png"
          width={205}
          height={370}
        />
      </div>
    </div>
  );
}
