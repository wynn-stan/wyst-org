import { Logos } from '@wyst/portfolio-ui';
import { Animated, Pills } from '../../../components';
import clsx from 'clsx';
import Image from 'next/image';
import Intro from './(others)/Intro';
import Description from './(others)/Description';
import Role from './(others)/Role';
import Achievements from './(others)/Achievements';
import Showcase from './(others)/Showcase';
import OtherProjects from '../(components)/OtherProjects';

export default function Page() {
  /**
   * Variables
   */
  const sections = [Role, Achievements, Showcase, OtherProjects];
  return (
    <Animated.FadeInFromBelow className="space-y-10">
      <div className="flex justify-center">
        <Logos.MetricLogo className="w-48 md:w-72 h-auto" />
      </div>

      <div
        className={clsx(
          'max-w-[400px] mx-auto space-y-[80px] px-5',
          'md:max-w-[1024px] box-content md:px-10'
        )}
      >
        <Intro />
        <Description />
        {sections.map((Section, index) => (
          <Animated.FadeInFromBelowInView key={index}>
            <Section />
          </Animated.FadeInFromBelowInView>
        ))}
      </div>
    </Animated.FadeInFromBelow>
  );
}
