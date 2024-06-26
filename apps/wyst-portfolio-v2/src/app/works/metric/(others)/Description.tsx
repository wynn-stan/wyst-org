import Image from 'next/image';
import clsx from 'clsx';
import {
  CodeXmlIcon,
  CodepenIcon,
  GlobeIcon,
  MoveUpRightIcon,
  SmartphoneIcon,
} from 'lucide-react';
import Link from 'next/link';

import { external_links } from '../../../../utils';
import { Pills } from '../../../../components';

export default function Description() {
  /**
   * Variables
   */
  const pill_items = [
    { label: 'Android and IOS SDKs', Icon: CodepenIcon },
    { label: 'API Integration', Icon: CodeXmlIcon },
    { label: 'Android/IOS Mobile App', Icon: SmartphoneIcon },
    { label: 'web portal and Web SDK', Icon: GlobeIcon },
  ];

  return (
    <div className={clsx('flex')}>
      {/* Text and Pills */}
      <div className="w-full flex justify-center">
        <div className="space-y-5 max-w-[400px]">
          <div>
            Our platform is designed for flexibility and user customization. It
            serves various industries including financial institutions, telecom
            operators, and other businesses needing digital identification for
            users.
          </div>
          <div className="flex justify-center items-center flex-wrap gap-3">
            <Link href={external_links.metric_docs}>
              <Pills.Template
                className={clsx(
                  ' bg-black-950 text-white w-fit cursor-pointer !p-2'
                )}
              >
                <MoveUpRightIcon className={clsx('w-4 h-4', 'md:w-5 md:h-5')} />
              </Pills.Template>
            </Link>

            {pill_items.map((Item, key) => (
              <Pills.Template
                className={clsx(
                  'flex gap-2  w-fit',
                  'text-sm text-black-600  bg-black-50'
                )}
                key={key}
              >
                <Item.Icon className={clsx('w-4 h-4', 'md:w-5 md:h-5')} />
                <div>{Item.label}</div>
              </Pills.Template>
            ))}
          </div>
        </div>
      </div>

      {/* Image */}
      <div className={clsx('w-full hidden justify-center', 'md:flex')}>
        <div className="">
          <Image
            alt="image-1"
            src={'/assets/images/works/metric/screen-report.png'}
            className="w-[250px] lg:w-[450px] h-auto"
            width={450}
            height={450}
          />
        </div>
      </div>
    </div>
  );
}
