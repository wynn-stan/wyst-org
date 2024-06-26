import Image from 'next/image';
import clsx from 'clsx';

import { Pills } from '../../../../components';

export default function Intro() {
  return (
    <div
      className={clsx(
        ' mx-auto flex flex-col gap-5 justify-center items-center',
        ' md:flex-row-reverse ',
        ''
      )}
    >
      <div className="w-full mx-auto">
        <div className={clsx('max-w-[400px] space-y-5', 'md')}>
          {/* Title and Industry */}

          <div
            className={clsx(
              'flex flex-col items-center gap-2',
              'md:items-start'
            )}
          >
            <div className="text-2xl md:text-base font-medium">
              Metric Identity
            </div>
            <Pills.Template className="bg-black-50 text-black-400 w-fit">
              <div className={clsx('text-xs font-medium', '')}>
                Identity verification
              </div>
            </Pills.Template>
          </div>

          {/* Horizontal Line */}

          <div className="bg-black-100 h-[1px] w-full md:hidden" />

          {/* Description Text */}

          <div>
            Metric Identity is a SaaS-based facial verification technology that
            enables organisations to streamline KYC requirements, and prevent
            fraud in real-time.
          </div>
        </div>
      </div>

      {/* Image */}
      <div className="w-full flex justify-center ">
        <div className="">
          <Image
            alt="image-1"
            src={'/assets/images/works/metric/multi-device-scan.png'}
            className="w-[250px] lg:w-[450px] h-auto"
            width={450}
            height={450}
          />
        </div>
      </div>
    </div>
  );
}
