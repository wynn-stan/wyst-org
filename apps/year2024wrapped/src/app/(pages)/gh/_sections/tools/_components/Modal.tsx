import Details from '../../../_components/Details/Details';
import { PersonsModel, ToolsModel } from '../../../../../../models';
import { Modal as ComponentModal } from '../../../../../../components';

interface Props {
  show?: boolean;
  onHide: () => void;
  activeTool?: ToolsModel;
}

export function Modal({ onHide, activeTool, show }: Props) {
  return (
    <ComponentModal {...{ show, onHide }}>
      {activeTool && (
        <div className="max-w-full">
          <Details
            details={{
              name: activeTool.name,
              cover_photo: activeTool.cover_photo,
              description: activeTool.description_long || '',
              profile_photo: activeTool.logo,
              socials: activeTool.socials,
              tags: activeTool.tags,
            }}
          />
        </div>
      )}
    </ComponentModal>
  );
}
