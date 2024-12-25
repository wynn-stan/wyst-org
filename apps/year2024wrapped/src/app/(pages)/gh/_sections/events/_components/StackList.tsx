import { EventsModel } from '../../../../../../models';
import { useEvents } from '../../../../../../hooks';
import { Card } from '../../../_components';

interface Props {
  onSelect: (event: EventsModel) => void;
}

export function StackList({ onSelect }: Props) {
  /**
   * Hooks
   */
  const { eventItems } = useEvents();

  return (
    <Card.Container.StackedContainer shadowColor="yellow">
      <div className="space-y-3">
        {eventItems?.map((event, index) => (
          <Card.Item.DefaultListItem.WithCover
            onClick={() => {
              onSelect(event);
            }}
            key={index}
            tags={event.tags.join(' | ')}
            showSeperator={index + 1 !== eventItems.length}
            cover_photo={event.event_cover_image}
            name={event.name}
            profile_photo={event.logo}
            description={event.description}
          />
        ))}
      </div>
    </Card.Container.StackedContainer>
  );
}
