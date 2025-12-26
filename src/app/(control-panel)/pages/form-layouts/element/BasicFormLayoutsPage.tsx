'use client';

import React, { useState } from 'react';
import { motion } from 'motion/react';
import BasicFormLayoutsCard from './BasicFormLayoutsCard';
import SingularitySvgIcon from '@singularity/core/SingularitySvgIcon';
import Typography from '@mui/material/Typography';

function BasicFormLayoutsPage() {
  const [period, setPeriod] = useState<'month' | 'year'>('month'); // For consistency with previous pages

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
            Form Layouts
          </Typography>
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="grid grid-cols-1 gap-y-1.5 md:grid-cols-2 lg:grid-cols-2 lg:gap-y-0"
          >
            <motion.div variants={item} className="mr-[15px] mb-32">
              <BasicFormLayoutsCard
                title="Basic Contact Form"
                subtitle="A simple form for user inquiries"
                isPopular={false}
                features={[
                  { id: 1, text: 'Name field (required)' },
                  { id: 2, text: 'Email validation' },
                  { id: 3, text: 'Message field (required)' },
                  { id: 4, text: 'Submit button' },
                ]}
              />
            </motion.div>
            <motion.div variants={item} className="ml-[15px] mb-32">
              <BasicFormLayoutsCard
                title="Advanced Contact Form"
                subtitle="Enhanced form with additional options"
                isPopular={true}
                features={[
                  { id: 1, text: 'Name field (required)' },
                  { id: 2, text: 'Email validation' },
                  { id: 3, text: 'Message field (required)' },
                  { id: 4, text: 'Contact reason dropdown' },
                  { id: 5, text: 'Preferred contact method' },
                  { id: 6, text: 'Terms agreement checkbox' },
                  { id: 7, text: 'Callback date picker' },
                  { id: 8, text: 'Submit button' },
                ]}
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default BasicFormLayoutsPage;