import clsx from 'clsx';
import Image from 'next/image';

export default function Title() {
  /**
   * Variables
   */
  const tools = [
    { label: 'Meet', imgSrc: '/assets/logos/meet-logo.png' },
    { label: 'Figma', imgSrc: '/assets/logos/figma-logo.png' },
    { label: 'NextJs', imgSrc: '/assets/logos/next-logo.png' },
    { label: 'Tailwind', imgSrc: '/assets/logos/tailwind-logo.png' },
    { label: 'NX Workspace', imgSrc: '/assets/logos/nx-logo.png' },
  ];

  return (
    <div className={clsx('text-center p-5 space-y-5 bg-blue-5', 'rounded-2xl')}>
      <div className="space-y-3">
        <p className="text-black-500 mb-3">Role</p>
        <h3 className="font-medium text-xl tracking-tighter">
          Technical Lead (Design and Frontend)
        </h3>
      </div>
      <div className="flex justify-center items-center gap-3">
        {tools.map((item, key) => (
          <ToolItem
            className={clsx(`${key > 2 && 'hidden'} md:flex`)}
            key={key}
            {...item}
          />
        ))}
      </div>
    </div>
  );
}

function ToolItem({
  imgSrc,
  label,
  className,
}: {
  label: string;
  imgSrc: string;
  className?: string;
}) {
  return (
    <div
      className={clsx(
        'p-2   flex gap-2 items-center',
        'rounded-full border border-gray-300 bg-white',
        className
      )}
    >
      <div>
        <Image src={imgSrc} width={16} height={16} alt="logo" />
      </div>
      <p className="text-sm font-medium">{label}</p>
    </div>
  );
}
