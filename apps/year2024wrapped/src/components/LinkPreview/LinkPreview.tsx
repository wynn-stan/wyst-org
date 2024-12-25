import axios from 'axios';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import queryString from 'query-string';
import { PreviewMetadataInterface } from '../../interfaces';
import clsx from 'clsx';
import Link from 'next/link';
import useSWR from 'swr';

interface PreviewDataInterface {
  title: string;
  description: string;
  image: string;
  site_name: string;
}

export default function LinkPreview({ url }: { url: string }) {
  /**
   * State
   */
  const [previewData, setPreviewData] = useState<PreviewDataInterface | null>(
    null
  );
  const [loading, setLoading] = useState(true);

  const { data, isLoading, error } = useSWR<{
    metadata: PreviewMetadataInterface;
  }>(
    `/api/getUrlMeta?${queryString.stringify({
      url,
    })}`
  );
  /**
   * Effect
   */
  useEffect(() => {
    if (data) {
      const metadata = data.metadata;
      setPreviewData({
        title: metadata?.title || '',
        description: metadata?.description || '',
        image: metadata['og:image'],
        site_name: metadata['og:site_name'],
      });
      setLoading(false);
    }
  }, [data]);
  return (
    <>
      {isLoading && (
        <div className="rounded-md shadow-sm bg-gray-200 w-[200px] h-[195px] animate-pulse"></div>
      )}
      {error && <p>Failed to fetch preview</p>}

      {!isLoading && previewData && (
        <Link
          target="_blank"
          href={url}
          className={clsx(
            'rounded-lg overflow-hidden shadow-md bg-white',
            'w-[200px]'
          )}
        >
          <Image
            key={previewData.image}
            width={100}
            height={100}
            className="max-w-[200px] w-full object-cover aspect-[3/2]"
            src={
              previewData.image ||
              `https://placehold.co/100x100?text=${previewData.title}`
            }
            alt="cover"
            unoptimized
          />
          <div className="p-1">
            <small className="smaller !line-clamp-1 font-semibold">
              {previewData.title}
            </small>
            <small className="smaller text-gray !line-clamp-1">
              {previewData.description}
            </small>
            <small className="smaller text-gray !line-clamp-1">
              {previewData.site_name}
            </small>
          </div>
        </Link>
      )}
    </>
  );
}
