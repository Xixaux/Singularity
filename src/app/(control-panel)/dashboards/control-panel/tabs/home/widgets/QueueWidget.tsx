'use client';

import { memo, useEffect, useState } from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import Tooltip from '@mui/material/Tooltip';
import SingularitySvgIcon from '@singularity/core/SingularitySvgIcon';
import SingularityLoading from '@singularity/core/SingularityLoading';
import { useGetControlPanelDashboardWidgetsQuery } from '../../../ControlPanelDashboardApi';
import WidgetDataType from './types/WidgetDataType';
import { motion } from 'framer-motion';

const WidgetContainer = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  borderRadius: theme.shape.borderRadius * 3,
  background: '#1A1A2E',
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  overflow: 'hidden',
  boxShadow: '0 1px 3px rgba(0, 0, 0, 0.2)',
  height: '100%',
}));

const ProgressWrapper = styled(Box)(({ theme }) => ({
  position: 'relative',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  margin: theme.spacing(3, 0),
}));

const IconOverlay = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: -30,
  left: -30,
  opacity: 0.05,
  color: theme.palette.error.main ?? '#ef4444',
  transform: 'rotate(-20deg)',
}));

const AccentText = styled(Typography)(({ theme }) => ({
  color: theme.palette.error.main ?? '#FF3B3F',
  fontWeight: 700,
  transition: 'all 0.3s ease',
}));

function QueueWidget() {
  const theme = useTheme();
  const { data: widgets, isLoading } = useGetControlPanelDashboardWidgetsQuery();
  const widget = widgets?.overdue as WidgetDataType;
  const [displayCount, setDisplayCount] = useState(0);

  const accentRed = theme.palette.error.main || '#FF3B3F';
  const secondarySubdued = '#B0B0B0';

  if (isLoading) {
    return (
      <WidgetContainer sx={{ height: 250 }}>
        <SingularityLoading />
      </WidgetContainer>
    );
  }

  if (!widgets || !widgets.overdue || !widget?.data || !widget?.title) {
    return (
      <WidgetContainer sx={{ height: 250 }}>
        <Typography color={secondarySubdued}>No data available</Typography>
      </WidgetContainer>
    );
  }

  const { data, title } = widget;

  useEffect(() => {
    const targetCount = Number(data.count) || 0;
    if (targetCount === 0) {
      setDisplayCount(0);
      return;
    }

    const duration = 1200;
    const increment = targetCount / (duration / 20);
    let currentCount = 0;

    const interval = setInterval(() => {
      currentCount += increment;
      if (currentCount >= targetCount) {
        setDisplayCount(Math.round(targetCount));
        clearInterval(interval);
      } else {
        setDisplayCount(Math.round(currentCount));
      }
    }, 20);

    return () => clearInterval(interval);
  }, [data.count]);

  const maxCount = 1000;
  const progress = Math.min((displayCount / maxCount) * 100, 100);

  const handleActionClick = () => {
    console.log(`Action triggered for ${title}: View details for ${data.name}`);
  };

  return (
    <WidgetContainer
      component={motion.div}
      initial={{ opacity: 0, scale: 0.95, y: 10 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <IconOverlay>
        <SingularitySvgIcon size={120}>heroicons-outline:exclamation-triangle</SingularitySvgIcon>
      </IconOverlay>

      <Box display="flex" alignItems="center" justifyContent="space-between" mb={1} sx={{ zIndex: 1 }}>
        <Typography
          variant="caption"
          fontWeight="medium"
          color={secondarySubdued}
          sx={{
            textTransform: 'uppercase',
            letterSpacing: '0.1em',
            maxWidth: '70%',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
          }}
        >
          {title}
        </Typography>
        <Tooltip title="View Details">
          <IconButton
            aria-label="more"
            size="small"
            sx={{ color: secondarySubdued }}
            onClick={handleActionClick}
          >
            <SingularitySvgIcon>heroicons-outline:ellipsis-vertical</SingularitySvgIcon>
          </IconButton>
        </Tooltip>
      </Box>

      <ProgressWrapper>
        <CircularProgress
          variant="determinate"
          value={100}
          size={130}
          thickness={4}
          sx={{ 
            color: `${accentRed}1A`,
            position: 'absolute' 
          }}
        />
        <CircularProgress
          variant="determinate"
          value={progress}
          size={130}
          thickness={4}
          sx={{
            color: accentRed,
            transition: 'stroke-dashoffset 0.6s ease-out',
          }}
          component={motion.div}
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        />
        <Box position="absolute" display="flex" flexDirection="column" alignItems="center" justifyContent="center">
          <AccentText
            variant="h2"
            component={motion.div}
            key={displayCount}
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
          >
            {displayCount}
          </AccentText>
          <Typography variant="body2" color={secondarySubdued} mt={0.5} sx={{ textTransform: 'uppercase' }}>
            {data.name ?? 'OVERDUE ITEMS'}
          </Typography>
        </Box>
      </ProgressWrapper>

      {}
      <Box display="flex" justifyContent="center" alignItems="center" mt={2}>
        <SingularitySvgIcon size={16} sx={{ mr: 1, color: accentRed }}>
          heroicons-outline:clock
        </SingularitySvgIcon>
        <Typography variant="body2" color={secondarySubdued} fontWeight="regular">
          {data.extra?.name ?? 'Critical'}:
        </Typography>
        <AccentText variant="body1" sx={{ ml: 0.5, fontWeight: 'bold' }}>
          {String(data.extra?.count ?? 0)}
        </AccentText>
      </Box>
    </WidgetContainer>
  );
}

export default memo(QueueWidget);