import { PersonsModel } from '../../../../../../models';
import { usePersons } from '../../../../../../hooks';
import { Card } from '../../../_components';

interface Props {
  onSelect: (person: PersonsModel) => void;
}

export function StackList({ onSelect }: Props) {
  /**
   * Hooks
   */
  const { personItems } = usePersons();

  return (
    <Card.Container.StackedContainer shadowColor="yellow">
      <div className="space-y-3">
        {personItems?.map((person, index) => (
          <Card.Item.DefaultListItem.WithoutCover
            onClick={() => {
              onSelect(person);
            }}
            key={index}
            tags={person.tags.join(' | ')}
            showSeperator={index + 1 !== personItems.length}
            // cover_photo={person.cover_photo}
            name={person.name}
            profile_photo={person.profile_photo}
            // description={person.description}
          />
        ))}
      </div>
    </Card.Container.StackedContainer>
  );
}
