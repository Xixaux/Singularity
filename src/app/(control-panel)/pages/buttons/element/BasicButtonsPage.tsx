'use client';

import React from 'react';
import { motion } from 'motion/react';
import BasicButtonsCard from './BasicButtonsCard';
import Typography from '@mui/material/Typography';

function BasicButtonsPage() {
  const container = {
    show: {
      transition: {
        staggerChildren: 0.04,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 100 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <div className="relative flex min-w-0 flex-auto flex-col overflow-hidden">
      <div className="mt-10 flex justify-center sm:mt-20">
        <div className="container mb-32">
          <Typography variant="h4" className="text-center mb-6">
            Button Types
          </Typography>
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="grid grid-cols-1 gap-y-1.5 md:grid-cols-2 lg:grid-cols-2 lg:gap-y-0"
          >
            <motion.div variants={item} className="mr-[15px] mb-32">
              <BasicButtonsCard
                title="Filled Button"
                subtitle="Solid background for primary actions"
                isPopular={false}
                features={[
                  { id: 1, text: 'Solid background' },
                  { id: 2, text: 'Multiple colors (primary, secondary)' },
                  { id: 3, text: 'Sizes (small, medium, large)' },
                  { id: 4, text: 'Icon support' },
                ]}
                buttonType="filled"
              />
            </motion.div>
            <motion.div variants={item} className="ml-[15px] mb-32">
              <BasicButtonsCard
                title="Outlined Button"
                subtitle="Bordered button for secondary actions"
                isPopular={false}
                features={[
                  { id: 1, text: 'Transparent background' },
                  { id: 2, text: 'Border styling' },
                  { id: 3, text: 'Multiple colors' },
                  { id: 4, text: 'Icon support' },
                ]}
                buttonType="outlined"
              />
            </motion.div>
            <motion.div variants={item} className="mr-[15px] mb-32">
              <BasicButtonsCard
                title="Text Button"
                subtitle="Minimal button for subtle actions"
                isPopular={false}
                features={[
                  { id: 1, text: 'No background or border' },
                  { id: 2, text: 'Text-only styling' },
                  { id: 3, text: 'Multiple colors' },
                  { id: 4, text: 'Icon support' },
                ]}
                buttonType="text"
              />
            </motion.div>
            <motion.div variants={item} className="ml-[15px] mb-32">
              <BasicButtonsCard
                title="Toggle Button"
                subtitle="Toggles between selected states"
                isPopular={true}
                features={[
                  { id: 1, text: 'Toggle on/off state' },
                  { id: 2, text: 'Multiple colors' },
                  { id: 3, text: 'Sizes (small, medium, large)' },
                  { id: 4, text: 'Icon support' },
                ]}
                buttonType="toggle"
              />
            </motion.div>
            <motion.div variants={item} className="mr-[15px] mb-32">
              <BasicButtonsCard
                title="Icon Button"
                subtitle="Compact button with icon"
                isPopular={false}
                features={[
                  { id: 1, text: 'Icon-only design' },
                  { id: 2, text: 'Rounded or square' },
                  { id: 3, text: 'Multiple colors' },
                  { id: 4, text: 'Hover effects' },
                ]}
                buttonType="icon"
              />
            </motion.div>
            <motion.div variants={item} className="ml-[15px] mb-32">
              <BasicButtonsCard
                title="Switch"
                subtitle="On/off toggle for settings"
                isPopular={false}
                features={[
                  { id: 1, text: 'On/off state' },
                  { id: 2, text: 'Multiple colors' },
                  { id: 3, text: 'Disabled state support' },
                  { id: 4, text: 'Custom styling' },
                ]}
                buttonType="switch"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default BasicButtonsPage;