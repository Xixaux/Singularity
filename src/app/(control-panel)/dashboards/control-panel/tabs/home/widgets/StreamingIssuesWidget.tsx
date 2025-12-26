'use client';

import { memo, useMemo, useState } from 'react';
import { useTheme, styled, lighten } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { ApexOptions } from 'apexcharts';
import dynamic from 'next/dynamic';
import SingularityLoading from '@singularity/core/SingularityLoading';
import SingularityTabs from 'src/components/tabs/SingularityTabs';
import SingularityTab from 'src/components/tabs/SingularityTab';
import { useGetControlPanelDashboardWidgetsQuery } from '../../../ControlPanelDashboardApi';
import GithubIssuesDataType from './types/GithubIssuesDataType';
import { motion } from 'framer-motion';
import _ from 'lodash';

const ReactApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });

const DARK_BACKGROUND = '#1A1A2E';
const SUBDUED_TEXT = '#B0B0B0';

// Decorative random October dates — restored exactly as requested
const generateRandomOctoberDates = () => {
  const dates = [];
  const maxDay = 31;
  const usedDays = new Set();
  const dateOptions = { month: 'short', day: 'numeric' } as const;

  while (dates.length < 6) {
    const day = Math.floor(Math.random() * maxDay) + 1;
    if (!usedDays.has(day)) {
      usedDays.add(day);
      const date = new Date(2025, 9, day);
      dates.push(`As of ${date.toLocaleDateString('en-US', dateOptions)}`);
    }
  }
  return dates;
};

const SWOOSH_PATTERN_SVG = (color: string) => encodeURIComponent(`
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 100" preserveAspectRatio="none">
    <defs>
      <filter id="blurry-swoosh" x="-10%" y="-10%" width="120%" height="120%">
        <feGaussianBlur in="SourceGraphic" stdDeviation="3" />
      </filter>
    </defs>
    <path d="M0,70 C 50,40 150,100 200,70 L 200,100 L 0,100 Z" fill="${color}" filter="url(#blurry-swoosh)" />
    <path d="M0,80 C 40,60 160,90 200,80 L 200,100 L 0,100 Z" fill="${color}" opacity="0.6" />
  </svg>
`);

const WidgetContainer = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  borderRadius: theme.shape.borderRadius * 3,
  background: DARK_BACKGROUND,
  boxShadow: '0 1px 3px rgba(0, 0, 0, 0.2)',
  display: 'flex',
  flexDirection: 'column',
  overflow: 'hidden',
  height: '100%',
}));

const StatCard = styled(Box)(({ theme }) => ({
  borderRadius: theme.shape.borderRadius * 2,
  padding: theme.spacing(2),
  textAlign: 'center',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100%',
  position: 'relative',
  zIndex: 1,
  overflow: 'hidden',
}));

function StreamingIssuesWidget() {
  const theme = useTheme();
  const [tabValue, setTabValue] = useState(0);
  const { data: widgets, isLoading } = useGetControlPanelDashboardWidgetsQuery();

  const widget = useMemo(() => _.cloneDeep(widgets?.githubIssues as GithubIssuesDataType), [widgets]);
  const randomDates = useMemo(() => generateRandomOctoberDates(), []);

  const mockRanges = { thisWeek: 'This Week', nextWeek: 'Next Week', monthly: 'Monthly' };
  const mockLabels = ['New Issues', 'Closed', 'Fixed', "Won't Fix", 'Re-opened', 'Needs Triage'];
  const mockSeries = {
    thisWeek: [
      { name: 'New Issues', data: [10, 15, 8, 12, 20, 5, 18] },
      { name: 'Closed', data: [5, 10, 12, 8, 15, 7, 10] },
      { name: 'Fixed', data: [3, 6, 4, 9, 12, 5, 8] },
      { name: "Won't Fix", data: [2, 3, 1, 4, 5, 2, 3] },
      { name: 'Re-opened', data: [1, 2, 3, 1, 4, 2, 1] },
      { name: 'Needs Triage', data: [8, 12, 10, 15, 9, 11, 13] },
    ],
    nextWeek: [
      { name: 'New Issues', data: [12, 17, 9, 14, 22, 6, 19] },
      { name: 'Closed', data: [6, 11, 13, 9, 16, 8, 11] },
      { name: 'Fixed', data: [4, 7, 5, 10, 13, 6, 9] },
      { name: "Won't Fix", data: [3, 4, 2, 5, 6, 3, 4] },
      { name: 'Re-opened', data: [2, 3, 4, 2, 5, 3, 2] },
      { name: 'Needs Triage', data: [9, 13, 11, 16, 10, 12, 14] },
    ],
    monthly: [
      { name: 'New Issues', data: [200, 180, 220, 190] },
      { name: 'Closed', data: [150, 140, 160, 145] },
      { name: 'Fixed', data: [100, 90, 110, 95] },
      { name: "Won't Fix", data: [50, 45, 55, 50] },
      { name: 'Re-opened', data: [20, 25, 22, 28] },
      { name: 'Needs Triage', data: [180, 170, 190, 175] },
    ],
  };
  const mockOverview = {
    thisWeek: { 'new-issues': 88, 'closed-issues': 67, fixed: 47, 'wont-fix': 20, 're-opened': 14, 'needs-triage': 78 },
    nextWeek: { 'new-issues': 92, 'closed-issues': 70, fixed: 50, 'wont-fix': 22, 're-opened': 16, 'needs-triage': 82 },
    monthly: { 'new-issues': 790, 'closed-issues': 595, fixed: 395, 'wont-fix': 200, 're-opened': 95, 'needs-triage': 693 },
  };

  const series = useMemo(() => _.cloneDeep(widget?.series || mockSeries), [widget]);
  const ranges = widget?.ranges || mockRanges;
  const labels = widget?.labels || mockLabels;
  const overview = widget?.overview || mockOverview;
  const currentRange = Object.keys(ranges)[tabValue];

  const chartSeries = useMemo(() => {
    const seriesData = _.cloneDeep(series[currentRange]);
    const numSeries = seriesData.length;
    return seriesData.map((s, index) => ({
      ...s,
      type: index === numSeries - 1 ? 'line' : 'bar',
      yAxisIndex: index === numSeries - 1 ? 1 : 0,
    }));
  }, [series, currentRange]);

  const chartOptions = useMemo<ApexOptions>(
    () => ({
      chart: {
        type: 'bar',
        height: '100%',
        stacked: true,
        fontFamily: 'inherit',
        foreColor: theme.palette.text.primary,
        background: 'transparent',
        toolbar: { show: false },
        selection: { enabled: false },
        zoom: { enabled: false },
        animations: { enabled: false },
      },
      colors: [
        theme.palette.primary.main,
        theme.palette.secondary.main,
        theme.palette.success.main,
        theme.palette.error.main,
        theme.palette.warning.main,
        theme.palette.info.main,
      ],
      dataLabels: { enabled: false },
      stroke: { width: [1, 1, 1, 1, 1, 3], curve: 'smooth' },
      markers: { size: [0, 0, 0, 0, 0, 5] },
      fill: {
        type: 'gradient',
        gradient: {
          shade: 'dark',
          type: 'vertical',
          shadeIntensity: 0.3,
          gradientToColors: [
            lighten(theme.palette.primary.main, 0.5),
            lighten(theme.palette.secondary.main, 0.5),
            lighten(theme.palette.success.main, 0.5),
            lighten(theme.palette.error.main, 0.5),
            lighten(theme.palette.warning.main, 0.5),
            theme.palette.info.main,
          ],
          opacityFrom: 1,
          opacityTo: [0.7, 0.7, 0.7, 0.7, 0.7, 1],
          stops: [0, 90, 100],
        },
      },
      plotOptions: { bar: { horizontal: false, columnWidth: '70%', borderRadius: 4, borderRadiusApplication: 'end' } },
      grid: { borderColor: theme.palette.divider, padding: { top: 10, bottom: 10 } },
      legend: { show: true, position: 'top', horizontalAlign: 'left', fontSize: '14px', labels: { colors: theme.palette.text.primary } },
      tooltip: { theme: theme.palette.mode },
      xaxis: {
        axisBorder: { show: false },
        axisTicks: { color: theme.palette.divider },
        labels: { style: { colors: theme.palette.text.secondary, fontSize: '12px' }, rotate: -30 },
        categories: currentRange === 'thisWeek'
          ? ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5', 'Day 6', 'Day 7']
          : currentRange === 'nextWeek'
          ? ['Day 8', 'Day 9', 'Day 10', 'Day 11', 'Day 12', 'Day 13', 'Day 14']
          : ['Jan', 'Feb', 'Mar', 'Apr'],
      },
      yaxis: [
        { axisTicks: { show: true }, axisBorder: { show: true, color: theme.palette.divider }, labels: { style: { colors: theme.palette.text.secondary } }, title: { text: "Issue Volume" } },
        { opposite: true, axisTicks: { show: true }, axisBorder: { show: true, color: theme.palette.info.main }, labels: { style: { colors: theme.palette.info.main } }, title: { text: "Triage Count" } }
      ],
    }),
    [theme, currentRange]
  );

  if (isLoading) return <SingularityLoading />;
  if (!series || !ranges || !overview || !labels) return null;

  const statCardColors = ['#40C4FF', '#4B8CFF', '#FFD700', '#EC0C8E', '#FF4081', '#00C853'];

  return (
    <WidgetContainer component={motion.div} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
        <Typography variant="caption" fontWeight="medium" color={SUBDUED_TEXT} sx={{ textTransform: 'uppercase', letterSpacing: '0.1em' }}>
          GITHUB SUMMARY
        </Typography>
        <SingularityTabs value={tabValue} onChange={(_ev, value: number) => setTabValue(value)}>
          {Object.entries(ranges).map(([key, label], index) => (
            <SingularityTab key={key} value={index} label={label} />
          ))}
        </SingularityTabs>
      </Box>

      <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', lg: '1fr 1fr' }, gap: 3 }}>
        <Box>
          <ReactApexChart options={chartOptions} series={chartSeries} type="bar" height={340} />
        </Box>

        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr 1fr', sm: '1fr 1fr 1fr' }, gridAutoRows: '1fr', gap: 2, height: '340px' }}>
          {[
            { label: 'New Issues', value: overview[currentRange]['new-issues'] },
            { label: 'Closed', value: overview[currentRange]['closed-issues'] },
            { label: 'Fixed', value: overview[currentRange].fixed },
            { label: "Won't Fix", value: overview[currentRange]['wont-fix'] },
            { label: 'Re-opened', value: overview[currentRange]['re-opened'] },
            { label: 'Needs Triage', value: overview[currentRange]['needs-triage'] },
          ].map((stat, index) => {
            const cardColor = statCardColors[index];
            return (
              <StatCard
                key={stat.label}
                sx={{
                  background: `url("data:image/svg+xml,${SWOOSH_PATTERN_SVG(lighten(cardColor, 0.4))}") no-repeat bottom center / 100% 100%, 
                               linear-gradient(45deg, ${cardColor} 0%, ${lighten(cardColor, 0.5)} 80%)`,
                  backgroundBlendMode: 'overlay',
                }}
                component={motion.div}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1, duration: 0.3 }}
              >
                <Typography variant="h4" fontWeight="bold" color="#FFFFFF">{stat.value}</Typography>
                <Typography variant="body2" color="#FFFFFF" mt={0.5}>{stat.label}</Typography>
                <Typography variant="caption" color="#FFFFFF" sx={{ opacity: 0.8, marginTop: 1, fontSize: '0.65rem' }}>
                  {randomDates[index]}
                </Typography>
              </StatCard>
            );
          })}
        </Box>
      </Box>
    </WidgetContainer>
  );
}

export default memo(StreamingIssuesWidget);