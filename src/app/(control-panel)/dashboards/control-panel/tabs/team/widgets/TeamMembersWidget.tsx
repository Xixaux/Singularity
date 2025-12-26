'use client';

import { memo } from 'react';
import Paper from '@mui/material/Paper';
import { motion } from 'motion/react';
import SingularitySvgIcon from '@singularity/core/SingularitySvgIcon';
import Typography from '@mui/material/Typography';
import SingularityLoading from '@singularity/core/SingularityLoading';
import { useTheme } from '@mui/material/styles';
import { useGetControlPanelDashboardWidgetsQuery } from '../../../ControlPanelDashboardApi';
import TeamMemberType from './types/TeamMemberType';

/**
 * The TeamMembersWidget with a restructured layout for team member cards.
 */
function TeamMembersWidget() {
  const { data: widgets, isLoading } = useGetControlPanelDashboardWidgetsQuery();
  const members = widgets?.teamMembers as TeamMemberType[];
  const theme = useTheme();

  if (isLoading) {
    return <SingularityLoading />;
  }

  if (!members) {
    return null;
  }

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

  console.log('Icon Color:', theme.palette.primary.main);

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full min-w-0"
    >
      {members.map((member) => (
        <Paper
          component={motion.div}
          variants={item}
          key={member.id}
          sx={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            boxShadow: '0 2px 4px rgba(0,0,0,0.2)',
            borderRadius: '4px ',
            overflow: 'hidden',
            p: 4,
          }}
        >
          {/* Avatar */}
          <div className="w-16 h-16 overflow-hidden" style={{ borderRadius: '8px' }}>
            <img
              className="w-full h-full object-cover"
              src={member.avatar}
              alt={member.name}
            />
          </div>
          {}
          <div
            className="h-full mx-3"
            style={{ borderLeft: `1px solid ${theme.palette.divider || '#E0E0E0'}` }}
          />
          {}
          <div className="flex flex-col flex-auto">
            <Typography
              variant="h6"
              sx={{ fontWeight: 'bold', mb: 1 }}
            >
              {member.name}
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ mb: 2 }}
            >
              {member.title}
            </Typography>
            <div className="flex flex-col space-y-2">
              <a
                href={`mailto:${member.email}`}
                role="button"
                className="flex items-center py-2 px-3 hover:bg-gray-100 rounded"
              >
                <SingularitySvgIcon
                  size={20}
                  sx={{ color: theme.palette.primary.main }}
                >
                  heroicons-solid:envelope
                </SingularitySvgIcon>
                <Typography variant="body2" className="ml-2">
                  Email
                </Typography>
              </a>
              <a
                href={`tel:${member.phone}`}
                role="button"
                className="flex items-center py-2 px-3 hover:bg-gray-100 rounded"
              >
                <SingularitySvgIcon
                  size={20}
                  sx={{ color: theme.palette.primary.main }}
                >
                  heroicons-solid:phone
                </SingularitySvgIcon>
                <Typography variant="body2" className="ml-2">
                  Call
                </Typography>
              </a>
            </div>
          </div>
        </Paper>
      ))}
    </motion.div>
  );
}

export default memo(TeamMembersWidget);