'use client';

import { motion } from 'motion/react';
import SummaryWidget from './widgets/SummaryWidget';
import QueueWidget from './widgets/QueueWidget';
import IssuesWidget from './widgets/IssuesWidget';
import ImportantWidget from './widgets/ImportantWidget';
import StreamingIssuesWidget from './widgets/StreamingIssuesWidget';
import TaskAllocationWidget from './widgets/TaskAllocationWidget';
import ScheduleWidget from './widgets/ScheduleWidget';

/**
 * The HomeTab component.
 */
function HomeTab() {
  const container = {
    show: {
      transition: {
        staggerChildren: 0.04,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 w-full min-w-0 py-6 px-6 md:px-8"
      variants={container}
      initial="hidden"
      animate="show"
    >
      {}
      <div className="sm:col-span-2 md:col-span-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 w-full">
        <motion.div variants={item}>
          <SummaryWidget />
        </motion.div>
        <motion.div variants={item}>
          <QueueWidget />
        </motion.div>
        <motion.div variants={item}>
          <IssuesWidget />
        </motion.div>
        <motion.div variants={item}>
          <ImportantWidget />
        </motion.div>
      </div>

      {}
      <motion.div
        variants={item}
        className="sm:col-span-2 md:col-span-4 lg:col-span-2"
      >
        <TaskAllocationWidget />
      </motion.div>

      {}
      <motion.div
        variants={item}
        className="sm:col-span-2 md:col-span-4 lg:col-span-2"
      >
        <ScheduleWidget />
      </motion.div>

      {}
      <motion.div
        variants={item}
        className="sm:col-span-2 md:col-span-4"
      >
        <StreamingIssuesWidget />
      </motion.div>
    </motion.div>
  );
}

export default HomeTab;