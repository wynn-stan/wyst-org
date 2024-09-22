import Image from 'next/image';
import Data from '../(components)/data';
import clsx from 'clsx';
import { Animated } from 'apps/wyst-portfolio-v2/src/components';

type Props = (typeof Data.key_solutions_and_impact)[0];

export default function Content({
  Icon,
  description,
  imgSrc,
  primary_color,
  secondary_color,
  tags,
  title,
}: Props) {
  return (
    <div className="space-y-8 transition-colors duration-1000">
      {/* Tags */}
      <div className="flex gap-5">
        {tags.map((item, key) => {
          return (
            <div
              className="p-3 rounded-xl"
              style={{ background: secondary_color }}
            >
              {item}
            </div>
          );
        })}
      </div>
      <div>
        <div
          style={{ background: primary_color }}
          className={clsx('py-5 px-3 rounded-xl', 'flex justify-center')}
        >
          <img
            className="md:max-h-[325px] max-h-[220px]"
            src={imgSrc}
            alt="product"
          />
        </div>
      </div>
      <div className="space-y-5">
        <h3 className="text-2xl font-medium tracking-tighter">{title}</h3>
        <div>{description}</div>
      </div>
    </div>
  );
}
