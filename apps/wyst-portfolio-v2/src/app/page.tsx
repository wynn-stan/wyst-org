import motion from 'framer-motion';

import { Animated, Containers, Navbar } from '../components';
import clsx from 'clsx';

export default function Index() {
  //redirect to the latest home page

  return (
    <Animated.FadeInFromBelow
      className={clsx('space-y-5', 'md:space-y-10 px-8 mb-[80px]')}
    >
      <div className=" mt-4">
        <Navbar />
      </div>

      <Containers.AboutMe />

      <div
        className={clsx(
          'xl:flex gap-10 justify-center',
          'space-y-10 xl:space-y-0'
        )}
      >
        <div className={clsx('space-y-10', 'xl:max-w-[427px]')}>
          <div
            className={clsx(
              'md:grid xl:block',
              'grid-cols-2 gap-10',
              'space-y-10 md:space-y-0 xl:space-y-10'
            )}
          >
            <Containers.WorkExperience />
            <Containers.CommonTools />
          </div>
          <Containers.Contact />
        </div>

        <div className="flex-grow xl:max-w-[850px]">
          <Containers.Projects />
        </div>
      </div>
    </Animated.FadeInFromBelow>
  );
}

// max-w-[427px]
