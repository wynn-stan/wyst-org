import clsx from 'clsx';
import Image from 'next/image';
import { TrophyIcon } from '@wyst/portfolio-ui';

import { Animated } from '../../../../components';
import Section from '../../(components)/Section';
import Card from '../../(components)/Card';
import { PageSectionProps } from '../page';

export default function Intro({ className }: PageSectionProps) {
  return (
    <section className={clsx('space-y-[80px]', className)}>
      <div>
        <Image
          alt="aag-bg"
          src={'/assets/images/works/aag/aag-bg.png'}
          width={1280}
          height={528}
        />
      </div>
      <Section
        Icon={<TrophyIcon variant="solid" />}
        title="All African Games 2023"
      >
        <Card.CardContainer className="w-full !p-10">
          <div
            className={clsx(
              'w-full',
              'flex flex-col md:flex-row justify-center gap-5 '
            )}
          >
            <Card.CardItem
              className={clsx('max-w-[445px]', 'hidden md:block')}
              header="Event Overview"
              description="The All African Games, also known as the Pan African Games, are a multi-sport event held every four years, organized by the African Union in collaboration with the Association of National Olympic Committees of Africa and the Association of African Sports Confederations. The 2023 edition of the Games was hosted by Ghana in 2024."
            />
            <Card.CardItem
              className="max-w-[445px]"
              header="Project Objectives"
              description="The primary objective of the project was to prepare and manage various technical components to ensure the successful execution of the All African Games 2023. This included redesigning the event website and developing several key systems to streamline the management of participants, logistics, and finances."
            />
          </div>
        </Card.CardContainer>
      </Section>
    </section>
  );
}
