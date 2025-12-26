'use client';

import Paper from '@mui/material/Paper';
import { styled, useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import { memo, useState } from 'react';
import Box from '@mui/material/Box';
import { ApexOptions } from 'apexcharts';
import SingularityLoading from '@singularity/core/SingularityLoading';
import SingularityTab from 'src/components/tabs/SingularityTab';
import SingularityTabs from 'src/components/tabs/SingularityTabs';
import { useGetControlPanelDashboardWidgetsQuery } from '../../../ControlPanelDashboardApi';
import TaskAllocationDataType from './types/TaskAllocationDataType';
import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';

const ReactApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });

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

function TaskAllocationWidget() {
  const { data: widgets, isLoading } = useGetControlPanelDashboardWidgetsQuery();
  const widget = widgets?.taskAllocation as TaskAllocationDataType;

  const mockRanges = { thisWeek: 'This Week', nextWeek: 'Next Week', monthly: 'Monthly' };
  const mockLabels = ['Team A', 'Team B', 'Team C', 'Team D', 'Team E'];
  const mockSeries = {
    thisWeek: [30, 25, 20, 15, 10],
    nextWeek: [35, 20, 25, 10, 10],
    monthly: [300, 250, 200, 150, 100],
  };
  const mockOverview = {
    thisWeek: { new: 50, completed: 30 },
    nextWeek: { new: 60, completed: 35 },
    monthly: { new: 500, completed: 300 },
  };

  const [tabValue, setTabValue] = useState(0);
  const theme = useTheme();

  const ranges = widget?.ranges || mockRanges;
  const labels = widget?.labels || mockLabels;
  const series = widget?.series || mockSeries;
  const overview = widget?.overview || mockOverview;
  const currentRange = Object.keys(ranges)[tabValue] || 'thisWeek';

  if (isLoading) {
    return (
      <WidgetContainer sx={{ height: 500 }}>
        <SingularityLoading />
      </WidgetContainer>
    );
  }

  if (!series || !labels || !ranges || !overview) {
    return (
      <WidgetContainer sx={{ height: 500 }}>
        <Typography color={SECONDARY_SUBDUED}>No data available</Typography>
      </WidgetContainer>
    );
  }

  const chartOptions: ApexOptions = {
    chart: {
      fontFamily: 'inherit',
      foreColor: SECONDARY_SUBDUED,
      height: '100%',
      type: 'polarArea',
      toolbar: { show: false },
      zoom: { enabled: false },
      background: 'transparent',
    },
    colors: ['#FFD700', '#EC0C8E', BLUE_ACCENT, '#40C4FF', '#FF4081'],
    fill: { opacity: 1 },
    labels,
    legend: {
      position: 'bottom',
      labels: { colors: SECONDARY_SUBDUED },
    },
    plotOptions: {
      polarArea: {
        spokes: { connectorColors: 'rgba(255, 255, 255, 0.1)' },
        rings: { strokeColor: 'rgba(255, 255, 255, 0.1)' },
      },
    },
    states: {
      hover: { filter: { type: 'lighten', value: 0.15 } },
    },
    stroke: { width: 2 },
    theme: { monochrome: { enabled: false } },
    tooltip: {
      followCursor: true,
      theme: 'dark',
      style: { fontSize: '12px' },
    },
    yaxis: {
      labels: { style: { colors: SECONDARY_SUBDUED } },
    },
  };

  return (
    <WidgetContainer
      component={motion.div}
      initial={{ opacity: 0, scale: 0.95, y: 10 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      elevation={0}
    >
      <div className="flex flex-col sm:flex-row items-start justify-between">
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
          TASK ALLOCATION
        </Typography>
        <div className="mt-0.75 sm:mt-0">
          <SingularityTabs
            value={tabValue}
            onChange={(ev, value: number) => setTabValue(value)}
          >
            {Object.entries(ranges).map(([key, label], index) => (
              <SingularityTab
                key={key}
                value={index}
                label={label}
                sx={{ color: SECONDARY_SUBDUED, '&.Mui-selected': { color: BLUE_ACCENT } }}
              />
            ))}
          </SingularityTabs>
        </div>
      </div>
      <div className="flex flex-col flex-auto mt-1.5">
        <ReactApexChart
          className="flex-auto w-full"
          options={chartOptions}
          series={series[currentRange]}
          type={chartOptions?.chart?.type}
          height={400}
        />
      </div>
      <Paper
        sx={{
          background: 'rgba(255, 255, 255, 0.05)',
          borderRadius: `0 0 ${theme.shape.borderRadius * 3}px ${theme.shape.borderRadius * 3}px`,
          borderTop: `1px solid rgba(255, 255, 255, 0.1)`,
          margin: '-24px',
          marginTop: '16px',
        }}
        elevation={0}
      >
        <div className="grid grid-cols-2 divide-x">
          <div className="flex flex-col items-center justify-center p-6 sm:p-8">
            <div
              className="text-5xl font-semibold leading-none tracking-tighter"
              style={{ color: BLUE_ACCENT }}
            >
              {overview[currentRange].new}
            </div>
            <Typography className="mt-1 text-center" sx={{ color: SECONDARY_SUBDUED }}>
              New tasks
            </Typography>
          </div>
          <div className="flex flex-col items-center justify-center p-1.5 sm:p-2">
            <div
              className="text-5xl font-semibold leading-none tracking-tighter"
              style={{ color: BLUE_ACCENT }}
            >
              {overview[currentRange].completed}
            </div>
            <Typography className="mt-1 text-center" sx={{ color: SECONDARY_SUBDUED }}>
              Completed tasks
            </Typography>
          </div>
        </div>
      </Paper>
    </WidgetContainer>
  );
}

export default memo(TaskAllocationWidget);