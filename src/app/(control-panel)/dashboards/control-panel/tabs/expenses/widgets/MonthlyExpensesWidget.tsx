'use client';

import Paper from '@mui/material/Paper';
import SingularitySvgIcon from '@singularity/core/SingularitySvgIcon';
import IconButton from '@mui/material/IconButton';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import { ApexOptions } from 'apexcharts';
import SingularityLoading from '@singularity/core/SingularityLoading';
import _ from 'lodash';
import ExpensesDataType from './types/ExpensesDataType';
import { useGetControlPanelDashboardWidgetsQuery } from '../../../ControlPanelDashboardApi';
import dynamic from 'next/dynamic';

const ReactApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });

function MonthlyExpensesWidget() {
  const { data: widgets, isLoading } = useGetControlPanelDashboardWidgetsQuery();
  const widget = widgets?.monthlyExpenses as ExpensesDataType;
  const amount = widget?.amount;
  const series = widget?.series;
  const labels = widget?.labels;
  const theme = useTheme();

  const chartOptions: ApexOptions = {
    chart: {
      animations: {
        enabled: false
      },
      fontFamily: 'inherit',
      foreColor: 'inherit',
      height: '100%',
      type: 'line',
      sparkline: {
        enabled: true
      },
      toolbar: { show: false }  // This one line = no more ApexCharts violations
    },
    colors: [theme.palette.success.main],
    stroke: {
      curve: 'smooth'
    },
    tooltip: {
      theme: 'dark'
    },
    xaxis: {
      type: 'category',
      categories: labels
    },
    yaxis: {
      show: false,
      labels: {
        formatter: (val) => `$${val}`
      }
    }
  };

  if (isLoading) {
    return <SingularityLoading />;
  }

  if (!widget) {
    return null;
  }

  return (
    <Paper className="flex flex-col flex-auto shadow-sm rounded-xl overflow-hidden">
      <div className="flex items-center justify-between pt-2 px-2">
        <div className="px-2 text-lg font-medium tracking-tight leading-6 truncate">
          Monthly Expenses
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
            {amount.toLocaleString('en-US', {
              style: 'currency',
              currency: 'USD'
            })}
          </div>
          <div className="flex items-center">
            <SingularitySvgIcon className="mr-1 text-red-500" size={20}>
              heroicons-solid:trending-up
            </SingularitySvgIcon>
            <Typography className="font-medium text-sm text-secondary leading-none whitespace-nowrap">
              <span className="text-red-500">2%</span>
              <span> above projected</span>
            </Typography>
          </div>
        </div>
        <div className="flex flex-col flex-auto ml-8 min-w-0">
          <ReactApexChart
            className="w-full h-16"
            options={chartOptions}
            series={_.cloneDeep(series)}
            type="line"
            height="100%"
          />
        </div>
      </div>
    </Paper>
  );
}

export default MonthlyExpensesWidget;