'use client';

import { memo } from 'react';
import Paper from '@mui/material/Paper';
import SingularitySvgIcon from '@singularity/core/SingularitySvgIcon';
import IconButton from '@mui/material/IconButton';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import SingularityLoading from '@singularity/core/SingularityLoading';
import { useGetControlPanelDashboardWidgetsQuery } from '../../../ControlPanelDashboardApi';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import ScheduleDataType from './types/ScheduleDataType';
import ExpensesDataType from './types/ExpensesDataType';

function TripSummaryWidget() {
  const { data: widgets, isLoading } = useGetControlPanelDashboardWidgetsQuery();
  const theme = useTheme();
  const schedule = widgets?.schedule as ScheduleDataType;
  const expenses = widgets?.yearlyExpenses as ExpensesDataType;

  // Mock data for fallback
  const mockScheduleItems = [
    { id: '1', title: 'Flight to NYC', time: '2025-08-10T10:00:00', location: 'JFK Airport', type: 'Flight' },
    { id: '2', title: 'Museum Visit', time: '2025-08-11T14:00:00', location: 'NYC', type: 'Activity' },
    { id: '3', title: 'Hotel Check-in', time: '2025-08-14T16:00:00', location: 'NYC', type: 'Hotel' },
  ];

  const mockExpenses = {
    expenses: [
      { id: '1', amount: 800, category: 'Flight' },
      { id: '2', amount: 300, category: 'Hotel' },
      { id: '3', amount: 150, category: 'Activities' },
    ],
  };

  // Data processing
  const currentRange = Object.keys(schedule?.ranges || {})[0] || '2025-08';
  const scheduleItems = (schedule?.series?.[currentRange]?.length > 0 ? schedule.series[currentRange] : mockScheduleItems) || mockScheduleItems;
  const expensesData = (expenses?.expenses?.length > 0 ? expenses : mockExpenses) || mockExpenses;

  const totalActivities = scheduleItems.length;
  const uniqueDestinations = [...new Set(scheduleItems.map((item) => item.location).filter(Boolean))].length;
  const totalCost = expensesData?.expenses?.reduce((sum, expense) => sum + (expense.amount || 0), 0) || 1250;

  const validTimes = scheduleItems
    .map((item) => {
      if (!item.time) return null;
      const date = new Date(item.time);
      return isNaN(date.getTime()) ? null : date.getTime();
    })
    .filter((time) => time !== null);
  const durationDays = validTimes.length > 1
    ? Math.ceil((Math.max(...validTimes) - Math.min(...validTimes)) / (1000 * 60 * 60 * 24))
    : validTimes.length === 1 ? 1 : 5;

  const metrics = [
    {
      label: 'Total Cost',
      value: totalCost.toLocaleString('en-US', { style: 'currency', currency: 'USD' }),
      icon: 'heroicons-solid:currency-dollar',
    },
    {
      label: 'Activities',
      value: totalActivities,
      icon: 'heroicons-solid:calendar',
    },
    {
      label: 'Destinations',
      value: uniqueDestinations,
      icon: 'heroicons-solid:map',
    },
    {
      label: 'Duration',
      value: `${durationDays} days`,
      icon: 'heroicons-solid:clock',
    },
  ];

  if (isLoading) {
    return <SingularityLoading />;
  }

  if (!schedule && !expenses) {
    return (
      <Paper
        className="flex flex-col flex-auto p-6 shadow-sm rounded-xl overflow-hidden"
        sx={{
          backgroundColor: theme.palette.background.paper,
          border: 'none',
        }}
      >
        <Typography color="text.secondary">No trip data available</Typography>
      </Paper>
    );
  }

  return (
    <Paper
      className="flex flex-col flex-auto p-6 shadow-sm rounded-xl overflow-hidden"
      sx={{
        backgroundColor: theme.palette.background.paper,
        border: 'none',
      }}
    >
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
        <Typography
          className="text-lg font-medium tracking-tight leading-6 truncate"
          sx={{
            fontFamily: "'Inter', 'Roboto', 'Poppins', 'Arial', sans-serif",
          }}
        >
          Trip Summary
        </Typography>
        <IconButton size="small">
          <SingularitySvgIcon size={20}>heroicons-solid:ellipsis-vertical</SingularitySvgIcon>
        </IconButton>
      </Box>
      <Grid container spacing={1.5}>
        {metrics.map((metric, index) => (
          <Grid item xs={6} sm={3} key={index}>
            <Paper
              sx={{
                p: 1.5,
                borderRadius: theme.shape.borderRadius / 2,
                backgroundColor: theme.palette.background.paper,
                textAlign: 'center',
                height: 80,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column',
                border: 'none',
                boxShadow: 'none',
              }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <SingularitySvgIcon
                  size={20}
                  sx={{ color: theme.palette.text.primary, opacity: 0.9 }}
                >
                  {metric.icon}
                </SingularitySvgIcon>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 600,
                    color: theme.palette.text.primary,
                    fontSize: '1.1rem',
                    fontFamily: "'Inter', 'Roboto', 'Poppins', 'Arial', sans-serif",
                  }}
                >
                  {metric.value}
                </Typography>
              </Box>
              <Typography
                variant="caption"
                sx={{
                  color: theme.palette.text.primary,
                  fontSize: '0.75rem',
                  mt: 0.5,
                  fontFamily: "'Inter', 'Roboto', 'Poppins', 'Arial', sans-serif",
                }}
              >
                {metric.label}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Paper>
  );
}

export default memo(TripSummaryWidget);