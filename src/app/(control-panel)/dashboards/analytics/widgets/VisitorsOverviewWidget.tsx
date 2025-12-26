'use client';

import { alpha, ThemeProvider, useTheme } from '@mui/material/styles';
import { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { ApexOptions } from 'apexcharts';
import { private_safeDarken } from '@mui/system/colorManipulator';
import _ from 'lodash';
import SingularityTabs from 'src/components/tabs/SingularityTabs';
import SingularityTab from 'src/components/tabs/SingularityTab';
import { useContrastMainTheme } from '@singularity/core/SingularitySettings/hooks/SingularityThemeHooks';
import VisitorsOverviewWidgetType from './types/VisitorsOverviewWidgetType';
import { selectWidget } from '../AnalyticsDashboardApi';
import { useAppSelector } from 'src/store/hooks';
import dynamic from 'next/dynamic';
const ReactApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });

function VisitorsOverviewWidget() {
  const theme = useTheme();
  const contrastTheme = useContrastMainTheme(theme.palette.primary.dark);
  const widget = useAppSelector(selectWidget<VisitorsOverviewWidgetType>('visitors'));
  const series = widget?.series;
  const ranges = widget?.ranges;
  const [tabValue, setTabValue] = useState(0);
  const currentRange = Object.keys(ranges || {})[tabValue];

  if (!widget || !series || !ranges) {
    return null;
  }

  const currentSeriesData = series[currentRange] || [];

  const chartOptions: ApexOptions = {
    chart: {
      animations: {
        enabled: true,
        easing: 'easeInOut',
        speed: 1200,
        animateGradually: {
          enabled: true,
          delay: 150,
        },
        dynamicAnimation: {
          enabled: true,
          speed: 350,
        },
      },
      background: 'transparent',
      fontFamily: '"Inter", "Roboto", sans-serif',
      foreColor: theme.palette.text.primary,
      width: '100%',
      height: '100%',
      type: 'line',
      toolbar: {
        show: false,
      },
      zoom: {
        enabled: false,
      },
      dropShadow: {
        enabled: true,
        top: 0,
        left: 0,
        blur: 25,
        opacity: 0.15,
        color: theme.palette.primary.main,
      },
    },
    colors: ['#3b82f6', '#8b5cf6', '#10b981'],
    dataLabels: {
      enabled: false,
    },
    fill: {
      type: 'gradient',
      gradient: {
        shade: 'light',
        type: 'vertical',
        shadeIntensity: 0.4,
        gradientToColors: ['#93c5fd', '#c4b5fd', '#86efac'],
        inverseColors: false,
        opacityFrom: 0.8,
        opacityTo: 0.2,
        stops: [0, 100],
      },
    },
    grid: {
      show: true,
      borderColor: alpha(theme.palette.divider, 0.3),
      strokeDashArray: 4,
      position: 'back',
      padding: {
        top: 0,
        bottom: 0,
        left: 20,
        right: 20,
      },
      xaxis: {
        lines: {
          show: true,
          strokeDashArray: 3,
        },
      },
      yaxis: {
        lines: {
          show: false,
        },
      },
    },
    stroke: {
      width: [5, 4, 3],
      curve: 'smooth',
      dashArray: [0, 0, 8],
      lineCap: 'round',
    },
    markers: {
      size: [8, 6, 4],
      strokeWidth: 3,
      strokeColors: ['#ffffff'],
      colors: ['#3b82f6', '#8b5cf6', '#10b981'],
      hover: {
        size: 12,
      },
    },
    tooltip: {
      enabled: true,
      theme: 'light',
      followCursor: true,
      marker: {
        show: true,
      },
      x: {
        format: 'MMM dd, yyyy',
        formatter: (value) => {
          const date = new Date(value);
          return date.toLocaleDateString('en-US', { 
            month: 'short', 
            day: 'numeric' 
          });
        },
      },
      y: {
        formatter: (value) => `${value.toLocaleString('en-US')}`,
        title: {
          formatter: (seriesName) => `${seriesName}`,
        },
      },
    },
    xaxis: {
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      labels: {
        style: {
          colors: theme.palette.text.secondary,
          fontSize: '12px',
          fontWeight: 500,
        },
      },
      crosshairs: {
        show: true,
        stroke: {
          color: theme.palette.primary.main,
          width: 1,
          dashArray: 2,
        },
      },
      tooltip: {
        enabled: false,
      },
      type: 'datetime',
    },
    yaxis: {
      axisTicks: {
        show: false,
      },
      axisBorder: {
        show: false,
      },
      labels: {
        style: {
          colors: theme.palette.text.secondary,
          fontSize: '12px',
        },
        formatter: (value) => `${value.toLocaleString()}`,
      },
      min: (min) => Math.min(min * 0.85, 0),
      max: (max) => max * 1.15,
    },
    legend: {
      show: true,
      position: 'top',
      horizontalAlign: 'left',
      fontSize: '12px',
      fontWeight: 600,
      markers: {
        width: 12,
        height: 12,
        radius: 6,
      },
      itemMargin: {
        horizontal: 16,
        vertical: 4,
      },
    },
  };

  return (
    <ThemeProvider theme={contrastTheme}>
      <Box
        className="sm:col-span-2 lg:col-span-3 dark flex flex-col flex-auto shadow-sm rounded-xl overflow-hidden"
        sx={{
          background: theme.palette.background.paper,
          color: theme.palette.text.primary,
          boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            overflow: 'hidden',
            zIndex: 0,
            opacity: 0.03,
          }}
        >
          <Box
            sx={{
              position: 'absolute',
              width: '300px',
              height: '300px',
              borderRadius: '50%',
              background: 'radial-gradient(circle, #3b82f6 0%, transparent 70%)',
              top: '-100px',
              right: '-100px',
              animation: 'float 7s ease-in-out infinite',
            }}
          />
          <Box
            sx={{
              position: 'absolute',
              width: '200px',
              height: '200px',
              borderRadius: '50%',
              background: 'radial-gradient(circle, #8b5cf6 0%, transparent 70%)',
              bottom: '-50px',
              left: '-50px',
              animation: 'float 9s ease-in-out infinite reverse',
            }}
          />
          <Box
            sx={{
              position: 'absolute',
              width: '150px',
              height: '150px',
              borderRadius: '50%',
              background: 'radial-gradient(circle, #10b981 0%, transparent 70%)',
              top: '50%',
              right: '20%',
              animation: 'float 10s ease-in-out infinite',
            }}
          />
        </Box>

        <Box sx={{ position: 'relative', zIndex: 1 }}>
          <div className="flex justify-between mt-3 mx-3 md:mt-6 md:mx-6">
            <div className="flex flex-col">
              <Typography
                sx={{
                  color: theme.palette.text.primary,
                }}
                className="mr-4 text-2xl md:text-3xl font-semibold tracking-tight leading-6"
              >
                Visitors Overview
              </Typography>
              <Typography
                className="font-medium"
                sx={{
                  color: alpha(theme.palette.text.primary, 0.7),
                }}
              >
                Number of unique visitors
              </Typography>
            </div>
            <div>
              <SingularityTabs
                value={tabValue}
                onChange={(_ev, value: number) => setTabValue(value)}
                sx={{
                  '& .MuiTabs-indicator': {
                    backgroundColor: contrastTheme.palette.secondary.main,
                  },
                }}
              >
                {Object.entries(ranges).map(([key, label]) => (
                  <SingularityTab
                    key={key}
                    label={label}
                    sx={{
                      color: alpha(theme.palette.text.primary, 0.7),
                      '&.Mui-selected': {
                        color: theme.palette.text.primary,
                      },
                    }}
                  />
                ))}
              </SingularityTabs>
            </div>
          </div>

          <div className="flex flex-col flex-auto h-96 px-6 pb-6">
            <ReactApexChart
              options={chartOptions}
              series={_.cloneDeep(currentSeriesData)}
              type={chartOptions?.chart?.type}
              height={chartOptions?.chart?.height}
            />
          </div>
        </Box>
      </Box>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(180deg); }
        }
      `}</style>
    </ThemeProvider>
  );
}

export default VisitorsOverviewWidget;