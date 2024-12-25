import Details from '../../../_components/Details/Details';
import { EventsModel } from '../../../../../../models';
import { Modal as ComponentModal } from '../../../../../../components';

interface Props {
  show?: boolean;
  onHide: () => void;
  activeEvent?: EventsModel;
}

export function Modal({ onHide, activeEvent, show }: Props) {
  return (
    <ComponentModal {...{ show, onHide }}>
      {activeEvent && (
        <Details
          details={{
            name: activeEvent.name,
            cover_photo: activeEvent.event_cover_image,
            description: activeEvent.description,
            profile_photo: activeEvent.logo,
            date: activeEvent.date,
            location: activeEvent.location,
            preview_photos: activeEvent.event_images,
            socials: activeEvent.socials,
            tags: activeEvent.tags,
          }}
        />
      )}
    </ComponentModal>
  );
}
