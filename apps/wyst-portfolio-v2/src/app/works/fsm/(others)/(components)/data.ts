import { FileCSVIcon } from '@wyst/portfolio-ui';
import {
  Blocks,
  BlocksIcon,
  BoxesIcon,
  BriefcaseIcon,
  GlobeIcon,
  HeadsetIcon,
  PackageIcon,
  ShieldCheckIcon,
  TargetIcon,
  TrendingDownIcon,
  TrendingUp,
  UserIcon,
} from 'lucide-react';

import { TypeIcon } from '../../../../../interfaces';

export interface SectionItem {
  Icon: TypeIcon;
  title: string;
  description: string;
}

const BASE_IMG_URL = '/assets/images/works/fsm';

export const overview = [
  {
    Icon: BriefcaseIcon,
    title: 'Project Overview',
    description:
      " The project involved the design and development of an ecommerce platform for a fashion business specializing in men's footwear and related products",
  },
  {
    Icon: TrendingDownIcon,
    title: 'The Challenge',
    description:
      'Prior to this project, the business operated solely through Instagram and managed sales via a Google Form, which resulted in a number of inefficiencies and limited growth potential.',
  },
  {
    Icon: TargetIcon,
    title: 'The Goal',
    description:
      'The goal of this project was to develop a comprehensive online store that would streamline operations, enhance the customer experience, and provide the business with a platform for future growth.',
  },
];

export const business_challenges = [
  {
    Icon: GlobeIcon,
    title: 'Lack of Existing Online Infrastructure',
    description:
      "The business previously had no online store or centralized digital presence, which meant we were starting from scratch. This posed challenges in designing a system that could effectively manage the business's needs while remaining user-friendly.",
  },
  {
    Icon: FileCSVIcon,
    title: 'Data Management',
    description:
      'Transitioning from manual processes (e.g., using Google Forms and Excel sheets) to an automated system required careful planning to ensure data accuracy and consistency.',
  },
  {
    Icon: HeadsetIcon,
    title: 'Customer Experience',
    description:
      'The previous setup provided limited customer interaction, making it difficult to gauge user preferences and expectations. Designing an experience that catered to a broad audience required extensive research and iteration.',
  },
  {
    Icon: BoxesIcon,
    title: 'Scalability',
    description:
      'The platform needed to be scalable to accommodate future growth, including the potential for expanded product lines and customer base.',
  },
];

export const role_activities = [
  {
    title: 'User Interface Design',
    description:
      "The business previously had no online store or centralized digital presence, which meant we were starting from scratch. This posed challenges in designing a system that could effectively manage the business's needs while remaining user-friendly.",
  },
  {
    title: 'User Experience Optimization',
    description:
      'Transitioning from manual processes (e.g., using Google Forms and Excel sheets) to an automated system required careful planning to ensure data accuracy and consistency.',
  },
  {
    title: 'Frontend Development',
    description:
      'The previous setup provided limited customer interaction, making it difficult to gauge user preferences and expectations. Designing an experience that catered to a broad audience required extensive research and iteration.',
  },
  {
    title: 'Collaborating with Backend Developers',
    description:
      'The platform needed to be scalable to accommodate future growth, including the potential for expanded product lines and customer base.',
  },
];

export const key_solutions_and_impact = [
  {
    Icon: GlobeIcon,
    title: 'Wider Market Reach and Brand Growth',
    description:
      'The new e-commerce platform establishes a centralized digital presence, opening up opportunities for the business to reach customers beyond its local area. This positions the brand for significant market expansion and enhances brand trust through a professional online presence.',
    tags: ['Ecommerce platform', 'About Us page'],
    imgSrc: `${BASE_IMG_URL}/home-page.png`,
    primary_color: '#8126C9',
    secondary_color: '#F7ECFF',
  },
  {
    Icon: UserIcon,
    title: 'Increased Sales and Customer Retention',
    description:
      'A seamless cart and checkout process reduces friction, leading to higher conversion rates and repeat customer purchases. This improvement simplifies the buying journey, contributing to a boost in sales and overall customer satisfaction.',
    tags: [
      'Cart and Checkout system',
      'Personalized Accounts',
      'Real time product information',
    ],
    imgSrc: `${BASE_IMG_URL}/checkout-page.png`,
    primary_color: '#B923AA',
    secondary_color: '#FFE0FC',
  },
  {
    Icon: TrendingUp,
    title: 'Enhanced Operational Efficiency and Customer Satisfaction',
    description:
      'The integrated order management and tracking system automates processes, significantly improving efficiency and reducing the need for manual intervention. Customers enjoy real-time tracking of their orders, resulting in higher satisfaction and less demand for customer support.',
    tags: [
      'Order Management',
      'Real-time Order tracking',
      'Inventory Management',
    ],
    imgSrc: `${BASE_IMG_URL}/order-details.png`,
    primary_color: '#CC4870',
    secondary_color: '#FED5E1',
  },
  {
    Icon: PackageIcon,
    title: 'Improved Inventory Control and Data Accuracy',
    description:
      'With real-time product and inventory updates, the business ensures accurate information is always available to customers. This reduces errors, enhances data accuracy, and supports smooth inventory management, making it easier to scale product offerings.',
    tags: ['Low stock alerts', 'Product listings'],
    imgSrc: `${BASE_IMG_URL}/products-page.png`,
    primary_color: '#C94545',
    secondary_color: '#FFDEDE',
  },
  {
    Icon: ShieldCheckIcon,
    title: 'Strengthened Security and Trust',
    description:
      'Secure authentication systems protect both customer and admin data, building trust in the platform and ensuring compliance with privacy regulations. This helps safeguard sensitive information and reinforces the brand’s reputation for security.',
    tags: ['Customer authentication system', 'Permissions based Admin Access'],
    imgSrc: `${BASE_IMG_URL}/auth-page.png`,
    primary_color: '#ED7A39',
    secondary_color: '#FFE2D2',
  },
  {
    Icon: BlocksIcon,
    title: 'Scalable Infrastructure for Sustainable Growth',
    description:
      'The platform’s scalable design supports future growth, allowing for easy expansion of product lines and customer base without significant overhauls. This future-proof approach ensures long-term sustainability and positions the business for efficient growth.',
    tags: ['Flexible architecture', 'Modular components'],
    imgSrc: `${BASE_IMG_URL}/banner.png`,
    primary_color: '#EDB039',
    secondary_color: '#FFEECE',
  },
];

const Data = Object.assign(
  {},
  { overview, role_activities, business_challenges, key_solutions_and_impact }
);

export default Data;
