import { useTheme } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Chip from '@mui/material/Chip';
import Typography from '@mui/material/Typography';
import SingularitySvgIcon from '@singularity/core/SingularitySvgIcon';
import { ApexOptions } from 'apexcharts';
import dynamic from 'next/dynamic';
const ReactApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });

/**
 * The conversions widget with a scatter chart.
 */
function ConversionsWidget() {
    const theme = useTheme();

    // Mock data
    const amount = 4123;
    const labels = Array.from({ length: 30 }, (_, i) => {
        const date = new Date(2025, 6, i + 1); // July 1 to July 30, 2025
        return date.toLocaleDateString('en-US', { month: 'short', day: '2-digit', year: 'numeric' });
    });
    const series = [
        {
            name: 'Conversions',
            data: [
                120, 130, 140, 150, 145, 135, 125, 130, 140, 160,
                170, 165, 155, 145, 150, 140, 130, 135, 145, 150,
                160, 170, 165, 155, 145, 140, 135, 130, 125, 128
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
        colors: [theme.palette.secondary.main],
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
                formatter: (value) => `${value.toLocaleString('en-US')} conversions`
            }
        },
        xaxis: {
            type: 'category',
            categories: labels,
            labels: {
                show: false // Hidden due to sparkline
            }
        },
        yaxis: {
            labels: {
                show: false // Hidden due to sparkline
            }
        }
    };

    return (
        <Paper className="flex flex-col flex-auto shadow-sm rounded-xl overflow-hidden">
            <div className="flex items-start justify-between m-4 mb-0">
                <Typography className="text-lg font-medium tracking-tight leading-6 truncate">Conversions</Typography>
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
                    {amount.toLocaleString('en-US')}
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
                        <span className="font-medium text-red-500">2%</span>
                        <span className="ml-1">below target</span>
                    </Typography>
                </div>
            </div>
            <div className="flex flex-col flex-auto h-20">
                <ReactApexChart
                    options={chartOptions}
                    series={series}
                    type={chartOptions?.chart?.type}
                    height={chartOptions?.chart?.height}
                />
            </div>
        </Paper>
    );
}

export default ConversionsWidget;