import { useTheme } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Chip from '@mui/material/Chip';
import Typography from '@mui/material/Typography';
import SingularitySvgIcon from '@singularity/core/SingularitySvgIcon';
import { ApexOptions } from 'apexcharts';
import { useAppSelector } from 'src/store/hooks';
import _ from 'lodash';
import VisitsWidgetType from './types/VisitsWidgetType';
import { selectWidget } from '../AnalyticsDashboardApi';
import dynamic from 'next/dynamic';
const ReactApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });

/**
 * Visits widget with a scatter chart.
 */
function VisitsWidget() {
    const theme = useTheme();
    const widget = useAppSelector(selectWidget<VisitsWidgetType>('visits'));

    // Mock data for scatter chart (replace with widget?.series for Redux)
    const amount = 25000;
    const labels = Array.from({ length: 30 }, (_, i) => {
        const date = new Date(2025, 6, i + 1);
        return date.toLocaleDateString('en-US', { month: 'short', day: '2-digit', year: 'numeric' });
    });
    const series = widget?.series || [
        {
            name: 'Visits',
            data: [
                800, 820, 840, 860, 850, 830, 810, 820, 840, 880,
                900, 890, 870, 850, 860, 840, 820, 830, 850, 860,
                880, 900, 890, 870, 850, 840, 830, 820, 810, 815
            ]
        }
    ];

    const chartOptions: ApexOptions = {
        chart: {
            animations: {
                enabled: false
            },
            fontFamily: 'inherit',
            foreColor: 'inherit',
            height: '100%',
            type: 'scatter',
            sparkline: {
                enabled: true
            },
            zoom: {
                enabled: false
            }
        },
        colors: [theme.palette.error.main],
        markers: {
            size: 5,
            strokeWidth: 1,
            strokeColors: theme.palette.background.paper
        },
        tooltip: {
            followCursor: true,
            theme: 'dark',
            x: {
                formatter: (value, { dataPointIndex }) => labels[dataPointIndex]
            },
            y: {
                formatter: (value) => `${value.toLocaleString('en-US')} visits`
            }
        },
        xaxis: {
            type: 'category',
            categories: labels,
            labels: {
                show: false
            }
        },
        yaxis: {
            labels: {
                show: false
            }
        }
    };

    if (!widget && !series) {
        return null;
    }

    return (
        <Paper className="flex flex-col flex-auto shadow-sm rounded-xl overflow-hidden">
            <div className="flex items-start justify-between m-4 mb-0">
                <Typography className="text-lg font-medium tracking-tight leading-6 truncate">Visits</Typography>
                <div className="ml-2">
                    <Chip
                        size="small"
                        className="font-medium text-sm"
                        label="30 days"
                    />
                </div>
            </div>
            <div className="flex flex-col lg:flex-row lg:items-center mx-6 mt-3">
                <Typography className="text-7xl font-bold tracking-tighter leading-[1.25]">
                    {(widget?.amount || amount).toLocaleString('en-US')}
                </Typography>
                <div className="flex lg:flex-col lg:ml-3">
                    <SingularitySvgIcon
                        size={20}
                        className="text-red-500"
                    >
                        heroicons-solid:trending-down
                    </SingularitySvgIcon>
                    <Typography
                        className="flex items-center ml-1 lg:ml-0 lg:mt-0.5 text-md leading-none whitespace-nowrap"
                        color="text.secondary"
                    >
                        <span className="font-medium text-red-500">4%</span>
                        <span className="ml-1">below target</span>
                    </Typography>
                </div>
            </div>
            <div className="flex flex-col flex-auto h-20">
                <ReactApexChart
                    options={chartOptions}
                    series={_.cloneDeep(series)}
                    type={chartOptions?.chart?.type}
                    height={chartOptions?.chart?.height}
                />
            </div>
        </Paper>
    );
}

export default VisitsWidget;