'use client';

import SingularitySimpleLayout from '@singularity/core/SingularitySimpleLayout';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import useThemeMediaQuery from '@singularity/hooks/useThemeMediaQuery';
import PageBreadcrumb from 'src/components/PageBreadcrumb';
import exampleActivitiesData from './exampleActivitiesData';
import ActivityTimelineItem from './ActivityTimelineItem';
import { motion } from 'framer-motion';
import { useTheme } from '@mui/material/styles';
import { format, isToday, isYesterday, isWithinInterval, sub } from 'date-fns';

function ActivitiesPage() {
  const isMobile = useThemeMediaQuery((theme) => theme.breakpoints.down('lg'));
  const theme = useTheme();
  const isDarkMode = theme.palette.mode === 'dark';

  const groupedActivities = exampleActivitiesData.reduce((acc, item) => {
    const date = new Date(item.date);
    let groupKey: string;
    if (isToday(date)) {
      groupKey = 'Today';
    } else if (isYesterday(date)) {
      groupKey = 'Yesterday';
    } else if (isWithinInterval(date, { start: sub(new Date(), { days: 7 }), end: new Date() })) {
      groupKey = 'Earlier This Week';
    } else {
      groupKey = format(date, 'MMMM d, yyyy');
    }
    if (!acc[groupKey]) acc[groupKey] = [];
    acc[groupKey].push(item);
    return acc;
  }, {} as Record<string, ActivityItemType[]>);

  return (
    <SingularitySimpleLayout
      content={
        <Box sx={{ p: { xs: 2, sm: 4, md: 6 }, bgcolor: theme.palette.background.default }}>
          <PageBreadcrumb sx={{ mb: 2, position: 'relative', zIndex: 2 }} />
          <Typography
            variant="h2"
            sx={{
              fontWeight: 500,
              fontSize: { xs: '1.375rem', md: '1.375rem' },
              mb: 1,
              color: theme.palette.text.primary,
              position: 'relative',
              zIndex: 2,
            }}
          >
            Streamer’s Activity Hub
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontWeight: 400,
              fontSize: '0.875rem',
              mb: 4,
              color: theme.palette.text.secondary,
              position: 'relative',
              zIndex: 2,
            }}
          >
            Follow your streaming journey: track equipment deliveries, collaborations, downloads, and more in a dynamic time trail.
          </Typography>
          <Box sx={{ position: 'relative' }}>
            {Object.entries(groupedActivities).map(([dateLabel, items], groupIndex) => (
              <Box key={dateLabel} sx={{ mb: 6, position: 'relative' }}>
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    mb: 3,
                    position: 'sticky',
                    top: 0,
                    zIndex: 3,
                    bgcolor: theme.palette.background.default,
                    py: 1,
                  }}
                >
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 500,
                      fontSize: '1rem',
                      color: isDarkMode ? '#40C4FF' : '#1976d2',
                      mr: 2,
                    }}
                  >
                    {dateLabel}
                  </Typography>
                  <Box
                    sx={{
                      flex: 1,
                      height: '2px',
                      bgcolor: isDarkMode ? '#B0B0B0' : '#e5e7eb',
                    }}
                  />
                </Box>
                <Box
                  sx={{
                    display: 'grid',
                    gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)' },
                    gap: { xs: 2, md: 3 },
                    position: 'relative',
                  }}
                >
                  {items.map((item, index) => (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: (groupIndex * items.length + index) * 0.1, duration: 0.4 }}
                      sx={{
                        position: 'relative',
                        '&:before': {
                          content: '""',
                          position: 'absolute',
                          top: '100%',
                          left: '50%',
                          width: '2px',
                          height: index === items.length - 1 ? '0' : { xs: '2.25rem', md: '3rem' },
                          bgcolor: isDarkMode ? '#40C4FF' : '#1976d2',
                          zIndex: 1,
                          transform: 'translateX(-50%)',
                          display: index === items.length - 1 ? 'none' : 'block',
                        },
                        '&:after': {
                          content: '""',
                          position: 'absolute',
                          top: '0',
                          left: '50%',
                          width: '0.5rem',
                          height: '0.5rem',
                          borderRadius: '50%',
                          bgcolor: isDarkMode ? '#40C4FF' : '#1976d2',
                          zIndex: 2,
                          transform: 'translateX(-50%)',
                        },
                      }}
                    >
                      <Box sx={{ pl: { xs: 5, md: 6 }, pr: 2, py: 2 }}>
                        <ActivityTimelineItem
                          item={item}
                          last={index === items.length - 1}
                          side="left"
                          extraContentSx={{
                            '& div:not(.font-bold)': {
                              fontWeight: 400,
                            },
                          }}
                        />
                      </Box>
                    </motion.div>
                  ))}
                </Box>
              </Box>
            ))}
          </Box>
        </Box>
      }
      scroll={isMobile ? 'normal' : 'page'}
    />
  );
}

export default ActivitiesPage;