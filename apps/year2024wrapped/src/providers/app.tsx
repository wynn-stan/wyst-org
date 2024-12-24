'use client';

import axios from 'axios';
import { SWRConfig } from 'swr';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import dayjs from 'dayjs';

export default function AppProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  /**
   * Dayjs
   */
  dayjs.extend(customParseFormat);

  /**
   * API Configs
   */
  const http = axios.create();
  http.interceptors.response.use(
    (response) => response.data,
    (error) => error
  );

  const fetcher = (url: string) => http.get(url);

  return <SWRConfig value={{ fetcher }}>{children}</SWRConfig>;
}
