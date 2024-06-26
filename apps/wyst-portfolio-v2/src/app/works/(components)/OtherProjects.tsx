import { BoltIcon } from 'lucide-react';
import Section from './Section';
import ProjectItem from './OtherProjects/ProjectItem';
import routes from '../../../routes';

export interface IProjectItem {
  name: string;
  industry: string;
  logoUrl: string;
  desc: string;
  route: string;
}

export default function OtherProjects() {
  /**
   * Variables
   */
  const projectItems: IProjectItem[] = [
    // {
    //   name: 'Metric Identity',
    //   industry: 'Identity verification',
    //   logoUrl: '/assets/logos/metric-logo-120.png',
    //   desc: 'Metric Identity is a SaaS-based facial verification technology that enables organisations to streamline KYC requirements, and prevent fraud in real-time.',
    //   route: routes.work.metric,
    // },
    {
      name: 'AAG Booking System',
      industry: 'Sports',
      logoUrl: '/assets/logos/aag-logo-120.png',
      desc: 'Coming soon...',
      route: '',
    },

    {
      name: 'CitizenApp Jobs',
      industry: 'Education',
      logoUrl: '/assets/logos/citizenappjobs-logo-120.png',
      desc: 'Coming soon...',
      route: '',
    },
    {
      name: 'FSM E-commerce shop',
      industry: 'Fashion',
      logoUrl: '/assets/logos/fsm-logo.png',
      desc: 'Coming soon...',
      route: '',
    },
  ];

  return (
    <Section Icon={<BoltIcon />} title="Other Projects">
      <div className="flex gap-5 overflow-auto no-scrollbar">
        {projectItems.map((item, key) => (
          <ProjectItem key={key} {...item} />
        ))}
      </div>
    </Section>
  );
}
