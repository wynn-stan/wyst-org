import useSWR from 'swr';

import { PersonsModel } from '../models';

export const usePersons = () => {
  /**
   * API
   */
  const url = process.env.NEXT_PUBLIC_WRAPPED_PERSONALITIES_API;
  const { data, isLoading, error } = useSWR<{
    description: string;
    personalities: PersonsModel[];
  }>(url);

  /**
   * Variables
   */
  const description = data?.description;
  const personItems = data?.personalities;
  const totalItems = data?.personalities?.length || 0;

  /**
   * Functions
   */
  const getPersonByName = (name: string) => {
    return personItems?.find((item) => item.name === name);
  };

  return {
    description,
    personItems,
    totalItems,
    getPersonByName,
    isLoading,
  };
};
