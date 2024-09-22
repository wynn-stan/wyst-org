import { FootprintsIcon } from 'lucide-react';
import clsx from 'clsx';

import Section from '../../(components)/Section';
import CardContainer from '../../(components)/Card/CardContainer';
import Card from '../../(components)/Card';
import { TypeIcon } from '../../../../interfaces';
import LocalTabs from './(components)/LocalTabs';
import Data from './(components)/data';

export default function BusinessChallenges() {
  /**
   * Variables
   */
  const items = Data.business_challenges;
  return (
    <Section Icon={<FootprintsIcon />} title="Business Challenges">
      <div className="hidden md:block">
        <CardContainer className="w-full bg-blue-5">
          <div className={clsx('grid gap-5 grid-cols-[1fr_1fr]')}>
            {items.map((item, key) => {
              return (
                <Card.CardItem
                  key={key}
                  Icon={<LocalIcon Type={item.Icon} />}
                  header={item.title}
                  description={item.description}
                />
              );
            })}
          </div>
        </CardContainer>
      </div>

      <div className="md:hidden">
        <LocalTabs type="business_challenges" />
      </div>
    </Section>
  );
}

function LocalIcon({ Type }: { Type: TypeIcon }) {
  return (
    <div className="rounded-full bg-blue-80 p-2">
      {<Type size={16} color="white" />}
    </div>
  );
}
