'use client';

import Paper from '@mui/material/Paper';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import { memo } from 'react';
import { ApexOptions } from 'apexcharts';
import SingularityLoading from '@singularity/core/SingularityLoading';
import _ from 'lodash';
import LocationDistributionDataType from './types/LocationDistributionDataType';
import { useGetControlPanelDashboardWidgetsQuery } from '../../../ControlPanelDashboardApi';
import dynamic from 'next/dynamic';

// Client-side only import — perfect
const ReactApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });

function LocationDistributionWidget() {
  const { data: widgets, isLoading } = useGetControlPanelDashboardWidgetsQuery();
  const widget = widgets?.locationDistribution as LocationDistributionDataType;
  const categories = widget?.categories;
  const series = widget?.series;
  const theme = useTheme();

  const chartOptions: ApexOptions = {
    chart: {
      type: 'radar',
      height: '100%',
      fontFamily: 'inherit',
      foreColor: 'inherit',
      sparkline: { enabled: true },

      // These lines eliminate the violations you were seeing
      toolbar: { show: false },
      selection: { enabled: false },
      zoom: { enabled: false },
      animations: { enabled: false },  // Removes expensive entrance animation
      background: 'transparent',
    },
    colors: [theme.palette.secondary.main],
    dataLabels: {
      enabled: true,
      formatter: (val: string) => `${val}%`,
      textAnchor: 'start',
      style: { fontSize: '13px', fontWeight: 500 },
      background: { borderWidth: 0, padding: 4 },
      offsetY: -15,
    },
    markers: { strokeColors: theme.palette.primary.main, strokeWidth: 4 },
    plotOptions: {
      radar: {
        polygons: {
          strokeColors: theme.palette.divider,
          connectorColors: theme.palette.divider,
        },
      },
    },
    stroke: { width: 2 },
    tooltip: {
      theme: 'dark',
      y: { formatter: (val) => `${val}%` },
    },
    xaxis: {
      labels: { show: true, style: { fontSize: '12px', fontWeight: '500' } },
      categories,
    },
    yaxis: {
      max: (max) => parseInt((max + 10).toFixed(0), 10),
      tickAmount: 7,
    },
  };

  if (isLoading) {
    return <SingularityLoading />;
  }

  if (!widget) {
    return null;
  }

  return (
    <Paper className="flex flex-col flex-auto p-6 shadow-sm rounded-xl overflow-hidden h-full">
      <Typography className="text-lg font-medium tracking-tight leading-6 truncate">
        Travel Distribution
      </Typography>
      <div className="flex flex-col flex-auto">
        <ReactApexChart
          className="flex-auto w-full h-80"
          options={chartOptions}
          series={_.cloneDeep(series)}
          type="radar"
          height="100%"
        />
      </div>
    </Paper>
  );
}

export default memo(LocationDistributionWidget);