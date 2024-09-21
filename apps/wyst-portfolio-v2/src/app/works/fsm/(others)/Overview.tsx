import {
  BriefcaseIcon,
  FootprintsIcon,
  TargetIcon,
  TrendingDownIcon,
} from 'lucide-react';
import Image from 'next/image';
import clsx from 'clsx';

import Section from '../../(components)/Section';
import CardContainer from '../../(components)/Card/CardContainer';
import Card from '../../(components)/Card';
import { TypeIcon } from '../../../../interfaces';

export default function Overview() {
  return (
    <div className={clsx('md:space-y-[80px]', 'space-y-[40px]')}>
      <div className="flex justify-center px-10">
        <img src="/assets/images/works/fsm/banner.png" />
      </div>

      <Section
        Icon={<FootprintsIcon />}
        title="Forever Sole Mates"
        className={clsx('mx-auto max-w-7xl', 'px-5 md:px-10')}
      >
        <CardContainer className="w-full bg-blue-5">
          <div
            className={clsx(
              'grid gap-5 grid-cols-[1fr_1fr]',
              'xl:grid-cols-[1fr_1fr_1fr]'
            )}
          >
            <Card.CardItem
              Icon={<LocalIcon Type={BriefcaseIcon} />}
              header="Project Overview"
              description="The project involved the design and development of an ecommerce platform for a fashion business specializing in men's footwear and related products"
            />
            <Card.CardItem
              Icon={<LocalIcon Type={TrendingDownIcon} />}
              header="The Challenge"
              description="Prior to this project, the business operated solely through Instagram and managed sales via a Google Form, which resulted in a number of inefficiencies and limited growth potential."
            />
            <Card.CardItem
              className="col-span-2 xl:col-span-1"
              Icon={<LocalIcon Type={TargetIcon} />}
              header="The Goal"
              description="The goal of this project was to develop a comprehensive online store that would streamline operations, enhance the customer experience, and provide the business with a platform for future growth."
            />
          </div>
        </CardContainer>
      </Section>
    </div>
  );
}

function LocalIcon({ Type }: { Type: TypeIcon }) {
  return (
    <div className="rounded-full bg-blue-80 p-2">
      {<Type size={16} color="white" />}
    </div>
  );
}
