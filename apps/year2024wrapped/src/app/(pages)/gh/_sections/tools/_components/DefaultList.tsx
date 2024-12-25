import { PersonsModel, ToolsModel } from '../../../../../../models';
import { useTools } from '../../../../../../hooks';
import { Card } from '../../../_components';

interface Props {
  activeTool?: ToolsModel;
  onSelect: (tool: ToolsModel) => void;
}

export function DefaultList({ activeTool, onSelect }: Props) {
  /**
   * Hooks
   */
  const { toolsItems } = useTools();

  return (
    <div className="grid grid-cols-2 gap-5">
      {toolsItems?.map((tool, index) => {
        const isActive = tool.name === activeTool?.name;

        return (
          <Card.Item.CardListItem
            onClick={() => {
              onSelect(tool);
            }}
            key={index}
            tags={tool.tags}
            name={tool.name}
            profile_photo={tool.logo}
            description=""
            isActive={isActive}
            className="!min-w-full"
          />
        );
      })}
    </div>
  );
}
