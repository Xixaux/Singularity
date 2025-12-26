'use client';

import { alpha, useTheme } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { memo, useEffect, useState } from 'react';
import Chip from '@mui/material/Chip';
import Box from '@mui/material/Box';
import { ApexOptions } from 'apexcharts';
import dynamic from 'next/dynamic';
const ReactApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });

function LanguageWidget() {
  const theme = useTheme();
  const [awaitRender, setAwaitRender] = useState(true);

  const series = [50, 30, 20];
  const labels = ['English', 'Spanish', 'Other'];
  const uniqueVisitors = 10000;

  const chartOptions: ApexOptions = {
    chart: {
      animations: {
        enabled: true,
        easing: 'easeinout',
        speed: 800,
        animateGradually: { enabled: true, delay: 150 },
        dynamicAnimation: { enabled: true, speed: 350 },
      },
      fontFamily: 'inherit',
      foreColor: theme.palette.text.primary,
      height: '100%',
      type: 'radialBar',
      sparkline: { enabled: false },
    },
    colors: ['#B794F4', '#805AD5', '#9F7AEA'],
    plotOptions: {
      radialBar: {
        startAngle: -90,
        endAngle: 90,
        track: {
          background: alpha(theme.palette.text.primary, 0.1),
          strokeWidth: '97%',
          margin: 5,
        },
        dataLabels: {
          name: { show: true, fontSize: '16px', fontWeight: 600, offsetY: -10, color: theme.palette.text.primary },
          value: {
            show: true,
            fontSize: '14px',
            formatter: (val) => `${val}%`,
            offsetY: 5,
            color: theme.palette.text.primary,
          },
          total: {
            show: true,
            label: 'Total',
            color: theme.palette.text.primary,
            formatter: () => `${series.reduce((a, b) => a + b, 0)}%`,
          },
        },
      },
    },
    labels,
    stroke: {
      lineCap: 'round',
    },
    tooltip: {
      enabled: true,
      theme: theme.palette.mode,
      custom: ({ seriesIndex, w }) =>
        `<div class="flex items-center h-32 min-h-32 max-h-32 px-12" style="background: ${theme.palette.background.paper}; color: ${theme.palette.text.primary};">
           <div class="w-12 h-12 rounded-full" style="background-color: ${w.config.colors[seriesIndex]};"></div>
           <div class="ml-8 text-md leading-none">${w.config.labels[seriesIndex]}:</div>
           <div class="ml-8 text-md font-bold leading-none">${w.config.series[seriesIndex]}% (${((uniqueVisitors * w.config.series[seriesIndex]) / 100).toLocaleString('en-US')} visitors)</div>
         </div>`,
    },
    legend: {
      show: true,
      position: 'bottom',
      fontSize: '14px',
      labels: { colors: theme.palette.text.primary },
      markers: { width: 12, height: 12, radius: 12 },
      itemMargin: { horizontal: 10, vertical: 5 },
      onItemHover: { highlightDataSeries: true },
    },
  };

  useEffect(() => {
    setAwaitRender(false);
  }, []);

  if (awaitRender) {
    return null;
  }

  return (
    <Paper
      className="flex flex-col rounded-xl overflow-hidden p-4"
      sx={{
        background: theme.palette.background.paper,
        boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        '&:hover': {
          transform: 'scale(1.02)',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        },
      }}
    >
      <div className="flex flex-col">
        <div className="flex flex-col sm:flex-row items-start justify-between mb-4">
          <Typography
            className="text-lg font-semibold tracking-tight leading-6 truncate"
            sx={{
              color: theme.palette.text.primary,
              textShadow: '0 1px 2px rgba(0, 0, 0, 0.1)',
              fontSize: { xs: '1.25rem', md: '1.5rem' },
            }}
          >
            Language Distribution
          </Typography>
          <div className="ml-2">
            <Chip
              size="small"
              label="30 days"
              sx={{
                background: '#B794F4',
                color: 'var(--mui-palette-secondary-contrastText)',
                fontWeight: 500,
                borderRadius: '12px',
                '&:hover': { background: '#C7A7F7' },
              }}
            />
          </div>
        </div>

        <div className="flex flex-col h-64">
          <ReactApexChart
            className="flex flex-auto items-center justify-center w-full h-full"
            options={chartOptions}
            series={series}
            type="radialBar"
            height={chartOptions?.chart?.height}
          />
        </div>

        <div className="mt-6">
          <div className="-my-3 divide-y divide-gray-300">
            {series.map((dataset, i) => (
              <div
                className="grid grid-cols-3 py-3"
                key={i}
                sx={{
                  transition: 'background 0.2s',
                  '&:hover': { background: alpha(theme.palette.text.primary, 0.05) },
                }}
              >
                <div className="flex items-center">
                  <Box
                    className="shrink-0 w-3 h-3 rounded-full"
                    sx={{ backgroundColor: chartOptions?.colors?.[i] }}
                  />
                  <Typography
                    className="ml-3 truncate"
                    sx={{ color: theme.palette.text.primary, fontSize: '0.9rem' }}
                  >
                    {labels[i]}
                  </Typography>
                </div>
                <Typography
                  className="font-medium text-right"
                  sx={{ color: theme.palette.text.primary, fontSize: '0.9rem' }}
                >
                  {((uniqueVisitors * dataset) / 100).toLocaleString('en-US')}
                </Typography>
                <Typography
                  className="text-right"
                  sx={{ color: alpha(theme.palette.text.primary, 0.7), fontSize: '0.9rem' }}
                >
                  {dataset}%
                </Typography>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="grow" />
    </Paper>
  );
}

export default memo(LanguageWidget);