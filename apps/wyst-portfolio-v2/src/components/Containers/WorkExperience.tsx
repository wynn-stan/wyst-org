import Image from 'next/image';
import Header from './components/Header';

export default function WorkExperience() {
  /**
   * Variables
   */
  const items = [
    {
      logoUrl: '/assets/logos/fsm.png',
      name: 'ForeverSoleMates',
      role: 'Product lead',
      timeline: 'March 2024 - Present',
    },
    {
      logoUrl: '/assets/logos/inpath.png',
      name: 'Inpath Technologies',
      role: 'Frontend Developer',
      timeline: 'Nov. 2022 - Present',
    },
  ];

  return (
    <div className="">
      <Header>Work experience</Header>
      <div className="py-5 flex gap-5">
        <div className="py-[25px]">
          <img
            src={'/assets/images/work-experience-divider.png'}
            alt="divider.png"
          />
        </div>
        <div className="space-y-10">
          {items.map((item, index) => {
            return (
              <div key={index} className="flex gap-3">
                <div>
                  <Image
                    src={item.logoUrl}
                    alt="logo.png"
                    width={50}
                    height={50}
                  />
                </div>
                <div className="space-y-1">
                  <div className="text-xl font-medium">{item.name}</div>
                  <div>{item.role}</div>
                  <div className="text-sm text-black-600">{item.timeline}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
