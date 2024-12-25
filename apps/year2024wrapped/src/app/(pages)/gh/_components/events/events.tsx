import { useEffect, useState } from 'react';
import clsx from 'clsx';

import { EventsModel } from '../../../../../models';
import { useEvents } from '../../../../../hooks';
import Details from '../others/Details/Details';
import Card from '../others/Card/Card';

export default function Events() {
  /**
   * Hooks
   */
  const { description, eventItems } = useEvents();

  /**
   * State
   */
  const [activeEvent, setActiveEvent] = useState<EventsModel | undefined>();

  /**
   * Effect
   */
  useEffect(() => {
    if (eventItems?.length) {
      setActiveEvent(eventItems?.[0]);
    }
  }, [eventItems]);

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
        <div className="flex flex-col lg:flex-row gap-5">
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
              'hidden md:flex flex-row lg:flex-col gap-5',
              'w-full lg:max-w-[432px]',
              'overflow-auto no-scrollbar',
              'relative'
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

            {/* <div
              style={{
                background:
                  'linear-gradient(to bottom, rgba(255, 255, 255, 0), rgba(255, 255, 255, 1));',
                backdropFilter: 'blur(1px)',
              }}
              className={clsx('absolute left-0 right-0 bottom-0 h-10')}
            ></div> */}
          </div>
        </div>
      </div>
    </div>
  );
}
