import { PersonsModel, ToolsModel } from '../../../../../../models';
import { Details } from '../../../_components';

interface Props {
  activeTool?: ToolsModel;
}

export function DetailedView({ activeTool }: Props) {
  return (
    <>
      {activeTool && (
        <Details
          containerClassName="shadow-[0px_6px_5px_#A71327]"
          details={{
            name: activeTool.name,
            cover_photo: activeTool.cover_photo,
            description: activeTool.description_long || '',
            profile_photo: activeTool.logo,
            socials: activeTool.socials,
            tags: activeTool.tags,
          }}
        />
      )}
    </>
  );
}
