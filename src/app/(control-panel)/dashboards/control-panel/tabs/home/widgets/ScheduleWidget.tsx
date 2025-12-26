'use client';

import { memo, useState } from 'react';
import { styled, useTheme, lighten } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import IconButton from '@mui/material/IconButton';
import Pagination from '@mui/material/Pagination';
import Tooltip from '@mui/material/Tooltip';
import SingularitySvgIcon from '@singularity/core/SingularitySvgIcon';
import SingularityLoading from '@singularity/core/SingularityLoading';
import { useGetControlPanelDashboardWidgetsQuery } from '../../../ControlPanelDashboardApi';
import ScheduleDataType from './types/ScheduleDataType';
import { motion } from 'framer-motion';

const BLUE_ACCENT = '#6BC9F7';
const BACKGROUND_COLOR = '#1A1A2E';
const SECONDARY_SUBDUED = '#B0B0B0';

const WidgetContainer = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  borderRadius: theme.shape.borderRadius * 3,
  background: BACKGROUND_COLOR,
  boxShadow: '0 1px 3px rgba(0, 0, 0, 0.2)',
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
  overflow: 'hidden',
}));

const Header = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: theme.spacing(1),
  flexShrink: 0,
  backgroundColor: 'transparent',
}));

const ProgressWrapper = styled(Box)(({ theme }) => ({
  position: 'relative',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  marginRight: theme.spacing(2),
}));

const ListItem = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'flex-start',
  padding: theme.spacing(2),
  borderRadius: theme.shape.borderRadius * 2,
  marginBottom: theme.spacing(1),
  transition: 'all 0.2s ease-in-out',
  '&:not(:last-child)': {
    borderBottom: `1px solid rgba(255, 255, 255, 0.1)`,
  },
  '&:hover': {
    transform: 'translateY(-2px)',
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
  },
  minHeight: '80px',
}));

const ListContainer = styled(Box)(({ theme }) => ({
  overflowY: 'auto',
  flex: 1,
  minHeight: '440px', 
  maxHeight: '440px', 
  paddingRight: theme.spacing(1),
}));

const PaginationContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  paddingTop: theme.spacing(1),
  borderTop: `1px solid rgba(255, 255, 255, 0.1)`,
  flexShrink: 0,
}));

function ScheduleWidget() {
  const theme = useTheme();
  const { data: widgets, isLoading } = useGetControlPanelDashboardWidgetsQuery();
  const widget = widgets?.schedule as ScheduleDataType;

  const mockRanges = { today: 'Today', tomorrow: 'Tomorrow', week: 'This Week' };
  const mockSeries = {
    today: [
      { title: 'Flight to NYC', type: 'flight', time: '10:00 AM', location: 'JFK Airport' },
      { title: 'Team Meeting', type: 'meeting', time: '2:00 PM', location: 'Conference Room' },
      { title: 'Hotel Check-in', type: 'hotel', time: '6:00 PM', location: 'Hilton NYC' },
      { title: 'City Tour', type: 'tour', time: '8:00 PM', location: 'Times Square' },
    ],
    tomorrow: [
      { title: 'Client Meeting', type: 'meeting', time: '9:00 AM', location: 'Client Office' },
      { title: 'Flight to SF', type: 'flight', time: '3:00 PM', location: 'SFO Airport' },
    ],
    week: [
      { title: 'Workshop', type: 'meeting', time: 'Mon 10:00 AM', location: 'Training Center' },
      { title: 'Site Visit', type: 'tour', time: 'Wed 2:00 PM', location: 'Construction Site' },
    ],
  };

  const [tabValue, setTabValue] = useState(0);
  const [page, setPage] = useState(1);
  const itemsPerPage = 4;

  const ranges = widget?.ranges || mockRanges;
  const series = widget?.series || mockSeries;
  const currentRange = Object.keys(ranges)[tabValue] || 'today';
  const itemCount = series[currentRange]?.length || 0;
  const pageCount = Math.ceil(itemCount / itemsPerPage);
  const paginatedItems = series[currentRange]?.slice((page - 1) * itemsPerPage, page * itemsPerPage) || [];

  if (isLoading) {
    return (
      <WidgetContainer sx={{ height: 500 }}>
        <SingularityLoading />
      </WidgetContainer>
    );
  }

  if (!series || !ranges || !series[currentRange]) {
    return (
      <WidgetContainer sx={{ height: 500 }}>
        <Typography color={SECONDARY_SUBDUED}>No schedule data available</Typography>
      </WidgetContainer>
    );
  }

  const maxItems = 10;
  const progress = Math.min((itemCount / maxItems) * 100, 100);

  const handleActionClick = () => {
    console.log(`Action triggered: View details for Travel Schedule (${currentRange})`);
  };

  const handlePageChange = (_event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  const getActivityIcon = (type?: string) => {
    switch (type?.toLowerCase()) {
      case 'flight':
        return 'heroicons-solid:paper-airplane';
      case 'hotel':
        return 'heroicons-solid:building-office';
      case 'tour':
        return 'heroicons-solid:map';
      default:
        return 'heroicons-solid:calendar';
    }
  };

  return (
    <WidgetContainer
      component={motion.div}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Header>
        <Box display="flex" alignItems="center" gap={2}>
          <Typography
            variant="caption"
            fontWeight="medium"
            color={SECONDARY_SUBDUED}
            sx={{
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
            }}
          >
            Travel Schedule
          </Typography>
          <ProgressWrapper>
            <CircularProgress
              variant="determinate"
              value={100}
              size={50}
              thickness={5}
              sx={{ 
                color: `${BLUE_ACCENT}1A`, // Very light blue (10% opacity) matching BLUE_ACCENT
                position: 'absolute' 
              }}
            />
            <CircularProgress
              variant="determinate"
              value={progress}
              size={50}
              thickness={5}
              sx={{ color: BLUE_ACCENT }}
              component={motion.div}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
            />
            <Box position="absolute" display="flex" flexDirection="column" alignItems="center">
              <Typography
                variant="caption"
                fontWeight="bold"
                sx={{ color: BLUE_ACCENT }}
              >
                {itemCount}
              </Typography>
            </Box>
          </ProgressWrapper>
        </Box>
        <Tooltip title="View Details">
          <IconButton
            aria-label="more"
            onClick={handleActionClick}
            sx={{ color: SECONDARY_SUBDUED }}
          >
            <SingularitySvgIcon>material-icons-outlined:more_vert</SingularitySvgIcon>
          </IconButton>
        </Tooltip>
      </Header>

      <ListContainer>
        {paginatedItems.map((item, index) => (
          <ListItem
            key={index}
            component={motion.div}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1, duration: 0.3 }}
          >
            <SingularitySvgIcon size={24} sx={{ color: theme.palette.primary.dark, marginTop: '4px', flexShrink: 0 }}>
              {getActivityIcon(item.type)}
            </SingularitySvgIcon>
            <Box ml={2} flex={1}>
              <Typography
                variant="body1"
                fontWeight="medium"
                sx={{ color: theme.palette.text.primary, whiteSpace: 'normal' }}
              >
                {item.title}
              </Typography>
              {item.time && (
                <Box display="flex" alignItems="center" mt={0.5}>
                  <SingularitySvgIcon size={16} sx={{ color: BLUE_ACCENT }}>
                    material-icons-outlined:access_time
                  </SingularitySvgIcon>
                  <Typography
                    variant="body2"
                    sx={{ color: BLUE_ACCENT, ml: 1 }}
                  >
                    {item.time}
                  </Typography>
                </Box>
              )}
              {item.location && (
                <Box display="flex" alignItems="center" mt={0.5}>
                  <SingularitySvgIcon size={16} sx={{ color: BLUE_ACCENT }}>
                    material-icons-outlined:place
                  </SingularitySvgIcon>
                  <Typography
                    variant="body2"
                    sx={{ color: BLUE_ACCENT, ml: 1 }}
                  >
                    {item.location}
                  </Typography>
                </Box>
              )}
            </Box>
          </ListItem>
        ))}
      </ListContainer>

      {pageCount > 1 && (
        <PaginationContainer>
          <Pagination
            count={pageCount}
            page={page}
            onChange={handlePageChange}
            size="small"
            sx={{
              '& .MuiPaginationItem-root': {
                color: SECONDARY_SUBDUED,
                '&:hover': {
                  backgroundColor: 'rgba(255, 255, 255, 0.05)',
                },
                '&.Mui-selected': {
                  backgroundColor: BLUE_ACCENT,
                  color: BACKGROUND_COLOR,
                  fontWeight: 'bold',
                  '&:hover': {
                    backgroundColor: BLUE_ACCENT,
                  },
                },
              },
            }}
          />
        </PaginationContainer>
      )}
    </WidgetContainer>
  );
}

export default memo(ScheduleWidget);