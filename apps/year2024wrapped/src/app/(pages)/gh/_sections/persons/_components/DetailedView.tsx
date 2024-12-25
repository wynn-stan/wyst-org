import { PersonsModel } from '../../../../../../models';
import { Details } from '../../../_components';

interface Props {
  activePerson?: PersonsModel;
}

export function DetailedView({ activePerson }: Props) {
  return (
    <>
      {activePerson && (
        <Details
          containerClassName="shadow-[0px_6px_5px_#D96314]"
          details={{
            name: activePerson.name,
            cover_photo: activePerson.cover_photo,
            description: activePerson.description,
            profile_photo: activePerson.profile_photo,
            preview_urls: activePerson.preview_links,
            socials: activePerson.socials,
            tags: activePerson.tags,
          }}
        />
      )}
    </>
  );
}
