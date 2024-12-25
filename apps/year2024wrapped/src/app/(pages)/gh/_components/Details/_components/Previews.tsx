import Image from 'next/image';

import { LinkPreview } from '../../../../../../components';

export default function Previews({
  preview_photos,
  preview_urls,
}: {
  preview_photos?: string[];
  preview_urls?: string[];
}) {
  return (
    <div className="flex gap-4 overflow-y-auto no-scrollbar p-1">
      {preview_photos?.map((url, index) => (
        <Image
          key={index}
          width={200}
          height={200}
          alt="preview"
          src={url}
          className="max-w-[200px] object-cover w-full rounded aspect-[3/2]"
        />
      ))}

      {preview_urls?.map((url, index) => (
        <LinkPreview key={index} url={url || ''} />
      ))}
    </div>
  );
}
