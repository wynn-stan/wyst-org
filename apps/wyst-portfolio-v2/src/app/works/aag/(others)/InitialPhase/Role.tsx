import { motion } from 'framer-motion';

import Card from '../../../(components)/Card';
import clsx from 'clsx';

export default function Role() {
  /**
   * Variables
   */
  const roleItems = [
    {
      title: 'Resource Management',
      description:
        'Ensured the development team had all necessary resources, documents, and information.',
    },
    {
      title: 'Issue Tracking',
      description: 'Monitored and documented technical and design issues.',
    },
    {
      title: 'Team coordination',
      description:
        'Organized standup sessions to update the team on pending issues and tasks.',
    },
    {
      title: 'Stakeholder Liaison',
      description:
        'Acted as the intermediary between developers and other stakeholders to ensure timely delivery of resources and information.',
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
          <span className="text-black-400">Role:</span> Development Support
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
                className="h-full"
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
