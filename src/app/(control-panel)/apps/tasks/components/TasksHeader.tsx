'use client';

import Typography from '@mui/material/Typography';
import { motion } from 'motion/react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import SingularityNavLink from '@singularity/core/SingularityNavLink';
import _ from 'lodash';
import PageBreadcrumb from 'src/components/PageBreadcrumb';
import { useGetTasksQuery } from '../TasksApi';
import { Add, PlaylistAdd } from '@mui/icons-material';
import { styled } from '@mui/material/styles';

const ActionButton = styled(Button)(({ theme }) => ({
  transition: 'transform 0.2s',
  '&:hover': {
    transform: 'scale(1.05)',
  },
}));

/**
 * The tasks header.
 */
function TasksHeader() {
  const { data: tasks, isLoading } = useGetTasksQuery();

  const remainingTasks = isLoading || !tasks ? 0 : _.filter(tasks, (item) => item.type === 'task' && !item.completed).length;

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', sm: 'row' },
        p: { xs: 3, sm: 4 },
        justifyContent: 'space-between',
        alignItems: { xs: 'flex-start', sm: 'center' },
        gap: 2,
        backgroundColor: 'background.paper',
      }}
    >
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
        <PageBreadcrumb sx={{ mb: 1 }} />
        <motion.div
          initial={{ x: -20 }}
          animate={{
            x: 0,
            transition: { delay: 0.2 },
          }}
        >
          <Typography
            variant="h4"
            sx={{
              fontWeight: 600,
              fontSize: '22px',
              color: 'text.primary',
            }}
          >
            Task Dashboard
          </Typography>
        </motion.div>
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{
            y: 0,
            opacity: 1,
            transition: { delay: 0.2 },
          }}
        >
          <Typography
            sx={{
              fontWeight: 500,
              fontSize: '13px',
              color: 'text.secondary',
            }}
          >
            {`${remainingTasks} tasks to complete`}
          </Typography>
        </motion.div>
      </Box>
      <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
        <ActionButton
          variant="outlined"
          color="primary"
          component={SingularityNavLink}
          to="/apps/tasks/new/section"
          startIcon={<PlaylistAdd sx={{ fontSize: 20 }} />}
        >
          Add Section
        </ActionButton>
        <ActionButton
          variant="outlined"
          color="secondary"
          component={SingularityNavLink}
          to="/apps/tasks/new/task"
          startIcon={<Add sx={{ fontSize: 20 }} />}
        >
          Add Task
        </ActionButton>
      </Box>
    </Box>
  );
}

export default TasksHeader;