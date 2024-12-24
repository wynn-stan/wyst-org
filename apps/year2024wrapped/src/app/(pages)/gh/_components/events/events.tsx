import { useState } from 'react';
import clsx from 'clsx';

import { useEvents } from '../../../../../hooks';
import Details from '../others/Details/Details';
import Card from '../others/Card/Card';
import { EventsModel } from 'apps/year2024wrapped/src/models';

export default function Events() {
  /**
   * Hooks
   */
  const { description, eventItems } = useEvents();

  /**
   * State
   */
  const [activeEvent, setActiveEvent] = useState<EventsModel | undefined>(
    eventItems?.[0]
  );

  return (
    <div className={clsx('top-container-gradient')}>
      <div
        className={clsx(
          'section-container',
          ' py-[60px] px-5 md:px-10',
          'flex flex-col gap-10 md:gap-[60px]'
        )}
      >
        {/* Heading */}
        <div className={clsx('section-heading')}>
          <h1
            className={clsx(
              'section-heading__header',
              '!text-4xl md:!text-5xl',
              'text-black'
            )}
          >
            Tech Events of 2024
          </h1>
          <p className="section-heading__desc text-gray-800">
            A recap of the key events and gatherings that brought together the
            Ghanaian tech community, sparking new ideas and collaborations.
          </p>
        </div>
        {/* Body */}
        <div className="flex gap-5">
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
          <div
            className={clsx(
              'hidden md:block w-full max-w-[432px] h-[700px]',
              'overflow-y-auto space-y-5'
            )}
          >
            {eventItems?.map((item, index) => {
              const isActive = item.name === activeEvent?.name;
              return (
                <Card
                  key={index}
                  description={item.description}
                  name={item.name}
                  profile_photo={item.logo}
                  tags={item.tags}
                  isActive={isActive}
                  onClick={() => setActiveEvent(item)}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
