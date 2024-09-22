import clsx from 'clsx';

import Overview from './(others)/Overview';
import { Animated } from '../../../components';
import BusinessChallenges from './(others)/Challenges';
import Role from './(others)/Role';
import Banner from './(others)/Banner';
import Solutions from './(others)/Solutions';
import OtherProjects from '../(components)/OtherProjects';

export default function Page() {
  /**
   * Variables
   */
  const sections = [Overview, BusinessChallenges, Role, Solutions];
  return (
    <Animated.FadeInFromBelow
      className={clsx('mx-auto', 'flex flex-col gap-[80px]')}
    >
      <Banner />

      <div
        className={clsx(
          'md:space-y-[80px]',
          'space-y-[40px]',
          'mx-auto max-w-7xl',
          'px-5 md:px-10'
        )}
      >
        {sections.map((Section, key) => (
          <Animated.FadeInFromBelowInView key={key}>
            <Section />
          </Animated.FadeInFromBelowInView>
        ))}
      </div>

      <div className="w-full max-w-7xl mx-auto px-5">
        <OtherProjects />
      </div>
    </Animated.FadeInFromBelow>
  );
}
