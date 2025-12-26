'use client';

import { Box, useTheme } from '@mui/material';
import SingularitySvgIcon from '@singularity/core/SingularitySvgIcon';
import clsx from 'clsx';
import Typography from '@mui/material/Typography';
import { ApexOptions } from 'apexcharts';
import _ from 'lodash';
import { WatchListItemType } from '../types/WatchlistType';
import dynamic from 'next/dynamic';
const ReactApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });

type WatchlistItemProps = {
  item: WatchListItemType;
};

/**
 * The watchlist item component.
 */
function WatchlistItem(props: WatchlistItemProps) {
  const { item } = props;
  const theme = useTheme();

  const chartOptions: ApexOptions = {
    chart: {
      animations: {
        enabled: false,
      },
      fontFamily: 'inherit',
      foreColor: theme.palette.text.primary,
      height: '100%',
      type: 'line',
      sparkline: {
        enabled: true,
      },
    },
    colors: [item.trend.dir === 'up' ? theme.palette.success.main : theme.palette.error.main],
    stroke: {
      curve: 'smooth',
      width: 2,
    },
    tooltip: {
      theme: theme.palette.mode,
    },
    xaxis: {
      type: 'category',
    },
  };

  return (
    <Box
      className="flex shrink-0 items-center p-5 border-b space-x-6"
      sx={{ bgcolor: theme.palette.background.default, color: theme.palette.text.primary }}
    >
      <Box className="flex flex-col flex-auto">
        <Box className="flex items-baseline space-x-1">
          <Typography className="font-medium text-md" color="text.secondary">
            {item.title}
          </Typography>
          <Typography className="font-medium text-sm uppercase tracking-wider" color="text.secondary">
            ({item.iso})
          </Typography>
        </Box>
        <Box className="flex items-end mt-2">
          <Typography className="min-w-20 font-mono text-2xl tracking-tighter leading-none">
            {item.amount.toLocaleString('en-US', {
              style: 'currency',
              currency: 'USD',
            })}
          </Typography>
          <SingularitySvgIcon
            className={clsx('icon-size-3.5 mx-0.5 mb-px')}
            sx={{
              color: item.trend.dir === 'up' ? theme.palette.success.main : theme.palette.error.main,
              fontSize: 14,
            }}
          >
            {item.trend.dir === 'up' ? 'heroicons-solid:arrow-small-up' : 'heroicons-solid:arrow-small-down'}
          </SingularitySvgIcon>
          <Typography
            className="font-mono font-medium text-sm leading-none"
            sx={{
              color: item.trend.dir === 'up' ? theme.palette.success.main : theme.palette.error.main,
            }}
          >
            {item.trend.amount}%
          </Typography>
        </Box>
      </Box>
      <ReactApexChart
        className="flex-auto w-full h-9 min-w-0"
        options={chartOptions}
        series={_.cloneDeep(item.series)}
        type={chartOptions?.chart?.type}
        height={chartOptions?.chart?.height}
      />
    </Box>
  );
}

export default WatchlistItem;