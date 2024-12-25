import { EventsModel } from '../../../../../../models';
import { Details } from '../../../_components';

interface Props {
  activeEvent?: EventsModel;
}

export function DetailedView({ activeEvent }: Props) {
  return (
    <>
      {activeEvent && (
        <Details
          containerClassName="shadow-[0px_6px_5px_#E89A16]"
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
    </>
  );
}
