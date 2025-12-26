'use client';

import Paper from '@mui/material/Paper';
import SingularitySvgIcon from '@singularity/core/SingularitySvgIcon';
import IconButton from '@mui/material/IconButton';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import { ApexOptions } from 'apexcharts';
import dynamic from 'next/dynamic';
const ReactApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });

/**
 * The TravelDestinationExpensesWidget with a bar chart for weekly travel expenses by city.
 */
function TravelDestinationExpensesWidget() {
  const theme = useTheme();

  const cities = [
    { name: 'Paris', totalCost: 2100, dailyCost: 300 },
    { name: 'Tokyo', totalCost: 2300, dailyCost: 329 },
    { name: 'New York', totalCost: 2800, dailyCost: 400 },
    { name: 'Rome', totalCost: 1800, dailyCost: 257 },
    { name: 'Bangkok', totalCost: 1200, dailyCost: 171 },
  ];

  const totalExpenses = cities.reduce((sum, city) => sum + city.totalCost, 0);

  const chartOptions: ApexOptions = {
    chart: {
      animations: {
        enabled: false,
      },
      fontFamily: 'inherit',
      foreColor: 'inherit',
      height: '100%',
      type: 'bar',
      toolbar: {
        show: false,
      },
    },
    colors: ['#6BC9F7'],
    fill: {
      type: 'gradient',
      gradient: {
        shade: 'light',
        type: 'vertical',
        shadeIntensity: 0.3,
        gradientToColors: ['#FFFFFF'],
        inverseColors: false,
        opacityFrom: 0.9,
        opacityTo: 0.6,
        stops: [0, 100],
      },
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '55%',
        borderRadius: 6,
        borderRadiusApplication: 'end',
        dataLabels: {
          position: 'top',
        },
      },
    },
    dataLabels: {
      enabled: true,
      formatter: (val) => `$${val.toLocaleString('en-US')}`,
      offsetY: -20,
      style: {
        fontSize: '12px',
        colors: [theme.palette.text.primary],
      },
    },
    tooltip: {
      followCursor: true,
      theme: 'dark',
      style: {
        fontFamily: theme.typography.fontFamily,
        fontWeight: 400,
      },
      custom: ({ series, seriesIndex, dataPointIndex }) => {
        const city = cities[dataPointIndex];
        return `
          <div class="p-2">
            <div>City: ${city.name}</div>
            <div>Weekly Cost: $${city.totalCost.toLocaleString('en-US')}</div>
            <div>Avg. Daily Cost: $${city.dailyCost.toLocaleString('en-US')}</div>
          </div>
        `;
      },
    },
    xaxis: {
      categories: cities.map((city) => city.name),
      labels: {
        style: {
          fontSize: '12px',
        },
      },
    },
    yaxis: {
      title: {
        text: 'Weekly Cost (USD)',
      },
      labels: {
        formatter: (val) => `$${val.toLocaleString('en-US')}`,
      },
    },
    grid: {
      borderColor: theme.palette.divider,
    },
  };

  const series = [
    {
      name: 'Weekly Expenses',
      data: cities.map((city) => city.totalCost),
    },
  ];

  return (
    <Paper className="flex flex-col flex-auto shadow-sm rounded-xl overflow-hidden">
      <div className="flex items-center justify-between pt-2 px-2">
        <div className="px-2 text-lg font-medium tracking-tight leading-6 truncate">
          Expenses by Destination Popularity
        </div>
        <div className="">
          <IconButton>
            <SingularitySvgIcon size={20}>heroicons-solid:ellipsis-vertical</SingularitySvgIcon>
          </IconButton>
        </div>
      </div>
      <div className="flex items-center p-4">
        <div className="flex flex-col">
          <div className="text-3xl font-semibold tracking-tight leading-[1.25]">
            ${totalExpenses.toLocaleString('en-US')}
          </div>
          <div className="flex items-center">
            <SingularitySvgIcon className="mr-1 text-green-500" size={20}>
              heroicons-solid:trending-up
            </SingularitySvgIcon>
            <Typography className="font-medium text-sm text-secondary leading-none whitespace-nowrap">
              <span className="text-green-500">3%</span>
              <span> above last quarter</span>
            </Typography>
          </div>
        </div>
        <div className="flex flex-col flex-auto ml-8 min-w-0">
          <ReactApexChart
            className="w-full h-64"
            options={chartOptions}
            series={series}
            type={chartOptions?.chart?.type}
            height={chartOptions?.chart?.height}
          />
        </div>
      </div>
    </Paper>
  );
}

export default TravelDestinationExpensesWidget;