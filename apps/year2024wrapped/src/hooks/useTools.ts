import useSWR from 'swr';
import { ToolsModel } from '../models';

export const useTools = () => {
  /**
   * API
   */
  const url = process.env.NEXT_PUBLIC_WRAPPED_TOOLS_API;
  const { data, isLoading, error } = useSWR<{
    description: string;
    tools: ToolsModel[];
  }>(url);

  /**
   * Variables
   */
  const description = data?.description;
  const toolsItems = data?.tools;
  const totalItems = data?.tools?.length || 0;

  /**
   * Functions
   */
  const getToolByName = (name: string) => {
    return toolsItems?.find((item) => item.name === name);
  };

  return {
    description,
    toolsItems,
    totalItems,
    getToolByName,
    isLoading,
  };
};
