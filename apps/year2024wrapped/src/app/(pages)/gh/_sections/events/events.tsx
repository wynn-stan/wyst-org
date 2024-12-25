import { useEffect, useState } from 'react';
import clsx from 'clsx';

import { EventsModel } from '../../../../../models';
import { useEvents } from '../../../../../hooks';
import { Animated, Modal } from '../../../../../components';

import * as EventLayout from './_components/index';
import { Spinner } from '@phosphor-icons/react';

export default function Events() {
  /**
   * Hooks
   */
  const { eventItems, isLoading } = useEvents();

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
    <div className={clsx('flex-grow', 'top-container-gradient')}>
      <div
        className={clsx(
          'section-container',
          ' py-[60px] px-5 md:px-10',
          'flex flex-col gap-10 md:gap-[60px]'
        )}
      >
        {/* Heading */}
        <EventLayout.Header />

        {isLoading && (
          <div className="flex justify-center">
            <Spinner className="animate-spin" />
          </div>
        )}

        {!isLoading && (
          <Animated.FadeInFromBelowInView>
            {/* Body - Md and Above */}
            <div
              className={clsx(
                'hidden md:flex flex-col-reverse lg:grid grid-cols-[1.5fr_1fr] gap-5',
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
          </Animated.FadeInFromBelowInView>
        )}
      </div>

      <EventLayout.Modal
        show={showDetailsModal}
        onHide={() => setShowDetailsModal(false)}
        activeEvent={activeEvent}
      />
    </div>
  );
}
