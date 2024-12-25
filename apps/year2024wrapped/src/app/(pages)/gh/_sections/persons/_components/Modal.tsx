import Details from '../../../_components/Details/Details';
import { PersonsModel } from '../../../../../../models';
import { Modal as ComponentModal } from '../../../../../../components';

interface Props {
  show?: boolean;
  onHide: () => void;
  activePerson?: PersonsModel;
}

export function Modal({ onHide, activePerson, show }: Props) {
  return (
    <ComponentModal {...{ show, onHide }}>
      {activePerson && (
        <div className="max-w-full">
          <Details
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
        </div>
      )}
    </ComponentModal>
  );
}
