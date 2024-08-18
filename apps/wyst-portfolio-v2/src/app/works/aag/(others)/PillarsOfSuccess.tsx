'use client';

import { TrophyIcon } from '@wyst/portfolio-ui';
import { motion } from 'framer-motion';
import clsx from 'clsx';

import Section from '../../(components)/Section';
import Card from '../../(components)/Card';
import { PageSectionProps } from '../page';

export default function PillarsOfSuccess({ className }: PageSectionProps) {
  /**
   * Variables
   */
  const roleItems = [
    {
      title: 'Effective Communication',
      description:
        'Effective communication between teams and regular updates were crucial in ensuring the success of the project.',
    },
    {
      title: 'Resource Management',
      description:
        'Early identification of resource needs helped avoid delays and ensured smooth project progression.',
    },
    {
      title: 'User Feedback',
      description:
        'Regular user testing and feedback were essential in refining the systems and ensuring they met user needs.',
    },
    {
      title: 'Collaboration',
      description:
        'Close collaboration between frontend and backend teams was key to developing functional and cohesive systems.',
    },
  ];

  /**
   * Animation Variants
   */
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2, // Adjust this value to control the stagger timing
        // Optional: adds a delay before the children start animating
      },
    },
  };

  const childVariants = {
    hidden: { y: '30px', opacity: 0 },
    visible: {
      y: '0px',
      opacity: 1,
    },
  };

  return (
    <Section Icon={<TrophyIcon variant="solid" />} title="Pillars of Success">
      <Card.CardContainer
        className={clsx('px-3 py-8 md:!p-10', 'bg-[#f0f0f0]')}
      >
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className={clsx('flex flex-col', 'gap-5', 'md:grid md:grid-cols-2')}
        >
          {roleItems.map((item, index) => (
            <motion.div
              className={clsx(
                'border border-black-100 rounded-lg text-center',
                'md:border-0 md:text-left'
              )}
              key={index}
              variants={childVariants}
            >
              <Card.CardItem
                className="h-full px-3"
                description={item.description}
                header={item.title}
                simplifyOnSm
              />
            </motion.div>
          ))}
        </motion.div>
      </Card.CardContainer>
    </Section>
  );
}
