import Image from 'next/image';
import Template from './Template';

export default function Tools() {
  /**
   * Variables
   */
  const items = [
    { logoUrl: '/assets/logos/next-logo.png', name: 'NextJS' },
    { logoUrl: '/assets/logos/figma-logo.png', name: 'Figma' },
    { logoUrl: '/assets/logos/git-logo.png', name: 'Git/Github' },
    { logoUrl: '/assets/logos/react-logo.png', name: 'React' },
    { logoUrl: '/assets/logos/tailwind-logo.png', name: 'Tailwind' },
    { logoUrl: '/assets/logos/ts-logo.png', name: 'Typescript' },
    { logoUrl: '/assets/logos/nx-logo.png', name: 'Nx workspace' },
    { logoUrl: '/assets/logos/bootstrap.png', name: 'Bootstrap' },
    { logoUrl: '/assets/logos/docusaurus-logo.png', name: 'Docusaurus' },
  ];
  return (
    <div className="flex flex-wrap gap-2">
      {items.map((item, index) => (
        <Template className="border border-black-100 flex gap-2" key={index}>
          <Image src={item.logoUrl} alt="logo.png" width={24} height={24} />
          <div>{item.name}</div>
        </Template>
      ))}
    </div>
  );
}
