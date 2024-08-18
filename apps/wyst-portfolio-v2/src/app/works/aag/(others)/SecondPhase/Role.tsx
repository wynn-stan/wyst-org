import { motion } from 'framer-motion';

import Card from '../../../(components)/Card';
import clsx from 'clsx';

export default function Role() {
  /**
   * Variables
   */
  const roleItems = [
    {
      title: 'Process Flow Design',
      description: 'Developed process flows based on given parameters.',
    },
    {
      title: 'Collaboration',
      description:
        'Worked with backend developers to ensure feasibility and resolve issues.',
    },
    {
      title: 'Design and Implementation',
      description:
        'Designed layouts, implemented the frontend and integrated with backend APIs to create these functional applications.',
    },
    {
      title: 'Stakeholder Liaison',
      description:
        'Shared systems with users for testing and feedback. Resolved issues and incorporated improvement suggestions from user feedback.',
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
    <Card.CardContainerWithHeader
      header={
        <header className="text-center md:text-left">
          <span className="text-black-400">Role:</span> Lead Designer & Frontend
          Engineer
        </header>
      }
    >
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
    </Card.CardContainerWithHeader>
  );
}
