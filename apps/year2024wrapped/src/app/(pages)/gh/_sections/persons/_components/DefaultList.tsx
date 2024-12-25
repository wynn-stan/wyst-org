import clsx from 'clsx';

import { EventsModel, PersonsModel } from '../../../../../../models';
import { usePersons } from '../../../../../../hooks';
import { Card } from '../../../_components';

interface Props {
  activePerson?: PersonsModel;
  onSelect: (person: PersonsModel) => void;
}

export function DefaultList({ activePerson, onSelect }: Props) {
  /**
   * Hooks
   */
  const { personItems } = usePersons();

  return (
    <Card.Container.DefaultContainer className="w-full">
      <div className="space-y-3">
        {personItems?.map((person, index) => {
          const isActive = activePerson?.name === person.name;
          return (
            <Card.Item.DefaultListItem.WithoutCover
              onClick={() => {
                onSelect(person);
              }}
              key={index}
              tags={person.tags.join(' | ')}
              showSeperator={index + 1 !== personItems.length}
              name={person.name}
              profile_photo={person.profile_photo}
              isActive={isActive}
              showStatus={true}
            />
          );
        })}
      </div>
    </Card.Container.DefaultContainer>
  );
}
