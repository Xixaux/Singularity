'use client';

import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { motion } from 'framer-motion';
import TaskListWidget from './TaskListWidget';
import WeatherWidget from './WeatherWidget';
import BasicFloatingWidgetPage from '../../floating-widget/element/BasicFloatingWidgetPage';

/**
 * The modern widgets showcase page.
 */
function BasicWidgetsPage() {
  const widgets = [
    { title: 'Stats Widget', description: 'Displays key metrics and KPIs' },
    { title: 'Chart Widget', description: 'Visualizes data trends with charts' },
    { title: 'User Profile Widget', description: 'Shows user information and avatar' },
    { title: 'Notification Widget', description: 'Lists recent alerts and updates' },
  ];

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
      <div className="relative overflow-hidden px-6 pb-12 pt-8 sm:px-16 sm:pb-24 sm:pt-20">
        <svg
          className="pointer-events-none absolute inset-0 -z-1"
          viewBox="0 0 960 540"
          width="100%"
          height="100%"
          preserveAspectRatio="xMidYMax slice"
          xmlns="http://www.w3.org/2000/svg"
        >
          <Box
            component="g"
            sx={{ color: 'divider' }}
            className="opacity-20"
            fill="none"
            stroke="currentColor"
            strokeWidth="100"
          >
            <circle r="234" cx="196" cy="23" />
            <circle r="234" cx="790" cy="491" />
          </Box>
        </svg>
        <div className="mt-10 flex justify-center sm:mt-20">
          <div className="container">
            <Typography variant="h4" className="text-center mb-6">
              Widgets Showcase
            </Typography>
            <motion.div
              variants={container}
              initial="hidden"
              animate="show"
              className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3"
            >
              <motion.div variants={item}>
                <TaskListWidget />
              </motion.div>
              <motion.div variants={item}>
                <WeatherWidget />
              </motion.div>
              {widgets.map((widget, index) => (
                <motion.div key={index} variants={item}>
                  <Paper
                    sx={{
                      borderRadius: '8px',
                      boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
                      p: 3,
                      backgroundColor: 'theme.vars.palette.background.default',
                    }}
                  >
                    <Typography variant="h6" className="font-bold mb-2">
                      {widget.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {widget.description}
                    </Typography>
                  </Paper>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
      <BasicFloatingWidgetPage position={{ bottom: '160px', right: '240px' }} initialOpen={false} />
    </div>
  );
}

export default BasicWidgetsPage;