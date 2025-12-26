'use client';

import React from 'react';
import { motion } from 'motion/react';
import BasicMenuLevelsCard from './BasicMenuLevelsCard';
import Typography from '@mui/material/Typography';

function BasicMenuLevelsPage() {
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
            Menu Showcase
          </Typography>
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="grid grid-cols-1 gap-y-1.5 md:grid-cols-2 lg:grid-cols-2 lg:gap-y-0"
          >
            <motion.div variants={item} className="mr-[15px] mb-32">
              <BasicMenuLevelsCard
                title="Multi-Level Menu"
                subtitle="Nested menus with icons and descriptions"
                isPopular={true}
                features={[
                  { id: 1, text: 'Nested submenus' },
                  { id: 2, text: 'Icons and tooltips' },
                  { id: 3, text: 'Click to open' },
                  { id: 4, text: 'Responsive design' },
                ]}
                menuType="multi-level"
              />
            </motion.div>
            <motion.div variants={item} className="ml-[15px] mb-32">
              <BasicMenuLevelsCard
                title="Icon Menu"
                subtitle="Menu with visual icons and descriptions"
                isPopular={false}
                features={[
                  { id: 1, text: 'Leading icons' },
                  { id: 2, text: 'Tooltip descriptions' },
                  { id: 3, text: 'Responsive design' },
                  { id: 4, text: 'Customizable colors' },
                ]}
                menuType="icon"
              />
            </motion.div>
            <motion.div variants={item} className="mr-[15px] mb-32">
              <BasicMenuLevelsCard
                title="Context Menu"
                subtitle="Right-click menu with icons and descriptions"
                isPopular={false}
                features={[
                  { id: 1, text: 'Right-click trigger' },
                  { id: 2, text: 'Icons and tooltips' },
                  { id: 3, text: 'Contextual actions' },
                  { id: 4, text: 'Accessible design' },
                ]}
                menuType="context"
              />
            </motion.div>
            <motion.div variants={item} className="ml-[15px] mb-32">
              <BasicMenuLevelsCard
                title="Mega Menu"
                subtitle="Wide menu with submenus, icons, and detailed descriptions"
                isPopular={false}
                features={[
                  { id: 1, text: 'Multi-column layout' },
                  { id: 2, text: 'Submenus and icons' },
                  { id: 3, text: 'Detailed tooltip descriptions' },
                  { id: 4, text: 'Responsive design' },
                ]}
                menuType="mega"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default BasicMenuLevelsPage;