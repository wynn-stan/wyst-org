import axios from 'axios';
import Image from 'next/image';
import { useEffect, useState } from 'react';

interface PreviewDataInterface {
  title: string;
  description: string;
  image: string;
}

export default function LinkPreview({ url }: { url: string }) {
  /**
   * State
   */
  const [previewData, setPreviewData] = useState<PreviewDataInterface | null>(
    null
  );
  const [loading, setLoading] = useState(true);

  /**
   * Effect
   */
  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        const data = response.data;
        const parser = new DOMParser();
        const doc = parser.parseFromString(data, 'text/html');
        const title = document.querySelector('title')?.textContent || '';
        const description =
          document
            .querySelector("meta[name='description']")
            ?.getAttribute('content') || '';
        const image =
          document
            .querySelector("meta[property='og:image']")
            ?.getAttribute('content') || '';

        setPreviewData({ title, description, image });
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, [url]);
  return (
    <>
      {loading && <p>Loading...</p>}
      {!loading && !previewData && <p>Failed to fetch preview</p>}
      {previewData && (
        <div>
          <div>{previewData.title}</div>
          <div>{previewData.description}</div>
          <Image
            width={100}
            height={100}
            className="w-20 h-20"
            src={previewData.image}
            alt="cover"
            unoptimized
          />
        </div>
      )}
    </>
  );
}
