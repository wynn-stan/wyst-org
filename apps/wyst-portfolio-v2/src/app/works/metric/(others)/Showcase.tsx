import { TargetIcon } from 'lucide-react';
import Image from 'next/image';

import Section from '../../(components)/Section';

export default function Showcase() {
  return (
    <Section Icon={<TargetIcon />} title="Showcase">
      <div>
        <Image
          className="w-full h-auto"
          alt="showcase.png"
          width={1024}
          height={1024}
          src="/assets/images/works/metric/showcase.png"
        />
      </div>
    </Section>
  );
}
