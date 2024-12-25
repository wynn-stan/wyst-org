import { PersonsModel, ToolsModel } from '../../../../../../models';
import { usePersons, useTools } from '../../../../../../hooks';
import { Card } from '../../../_components';

interface Props {
  onSelect: (tool: ToolsModel) => void;
}

export function StackList({ onSelect }: Props) {
  /**
   * Hooks
   */
  const { toolsItems } = useTools();

  return (
    <Card.Container.StackedContainer shadowColor="yellow">
      <div className="space-y-3">
        {toolsItems?.map((tool, index) => (
          <Card.Item.DefaultListItem.WithCover
            onClick={() => {
              onSelect(tool);
            }}
            key={index}
            tags={tool.tags.join(' | ')}
            showSeperator={index + 1 !== toolsItems.length}
            cover_photo={tool.cover_photo}
            name={tool.name}
            profile_photo={tool.logo}
            // description={person.description}
          />
        ))}
      </div>
    </Card.Container.StackedContainer>
  );
}
