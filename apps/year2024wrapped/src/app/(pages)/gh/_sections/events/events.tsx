import { useEffect, useState } from 'react';
import clsx from 'clsx';

import { EventsModel } from '../../../../../models';
import { useEvents } from '../../../../../hooks';
import { Modal } from '../../../../../components';

import * as EventLayout from './_components/index';

export default function Events() {
  /**
   * Hooks
   */
  const { eventItems } = useEvents();

  /**
   * State
   */
  const [activeEvent, setActiveEvent] = useState<EventsModel | undefined>();
  const [showDetailsModal, setShowDetailsModal] = useState(false);

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
        <EventLayout.Header />

        {/* Body - Md and Above */}
        <div
          className={clsx(
            'hidden md:flex flex-col-reverse lg:flex-row gap-5',
            'items-center lg:items-start'
          )}
        >
          <EventLayout.DetailedView activeEvent={activeEvent} />

          <EventLayout.DefaultList
            activeEvent={activeEvent}
            onSelect={(event) => setActiveEvent(event)}
          />
        </div>

        <div className="md:hidden">
          <EventLayout.StackList
            onSelect={(event) => {
              setActiveEvent(event);
              setShowDetailsModal(true);
            }}
          />
        </div>
      </div>

      <EventLayout.Modal
        show={showDetailsModal}
        onHide={() => setShowDetailsModal(false)}
        activeEvent={activeEvent}
      />
    </div>
  );
}
