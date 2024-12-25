import clsx from 'clsx';

import { EventsModel } from '../../../../../../models';
import { useEvents } from '../../../../../../hooks';
import { Card } from '../../../_components';

interface Props {
  activeEvent?: EventsModel;
  onSelect: (event: EventsModel) => void;
}

export function DefaultList({ activeEvent, onSelect }: Props) {
  /**
   * Hooks
   */
  const { eventItems } = useEvents();

  return (
    <div
      className={clsx(
        'hidden md:flex flex-row lg:flex-col gap-5',
        'w-full',
        'overflow-auto no-scrollbar',
        'relative',
        'max-h-[800px] h-full'
      )}
    >
      {eventItems?.map((item, index) => {
        const isActive = item.name === activeEvent?.name;
        return (
          <Card.Item.CardListItem
            key={index}
            description={item.description}
            name={item.name}
            profile_photo={item.logo}
            tags={item.tags}
            isActive={isActive}
            onClick={() => onSelect(item)}
          />
        );
      })}
    </div>
  );
}
