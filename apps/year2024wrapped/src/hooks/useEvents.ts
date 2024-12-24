import useSWR from 'swr';

import { EventsModel } from '../models';

export const useEvents = () => {
  /**
   * API
   */
  const url = process.env.NEXT_PUBLIC_WRAPPED_EVENTS_API;
  const { data, isLoading, error } = useSWR<{
    description: string;
    events: EventsModel[];
  }>(url);

  /**
   * Variables
   */
  const description = data?.description;
  const eventItems = data?.events;
  const totalItems = data?.events?.length || 0;

  /**
   * Functions
   */
  const getEventByName = (name: string) => {
    return eventItems?.find((item) => item.name === name);
  };

  return {
    description,
    eventItems,
    totalItems,
    getEventByName,
  };
};
