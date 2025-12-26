'use client';

import { useTheme } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Chip from '@mui/material/Chip';
import Typography from '@mui/material/Typography';
import { ApexOptions } from 'apexcharts';
import SingularityLoading from '@singularity/core/SingularityLoading';
import _ from 'lodash';
import AccountBalanceWidgetType from './types/AccountBalanceWidgetType';
import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
const ReactApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });

function AccountBalanceWidget() {
    const [widget, setWidget] = useState<AccountBalanceWidgetType | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const theme = useTheme();

    useEffect(() => {
        const fetchWidget = async () => {
            try {
                const response = await new Promise((resolve) => {
                    setTimeout(() => {
                        resolve({
                            data: {
                                accountBalance: {
                                    series: [
                                        {
                                            name: 'Balance Growth',
                                            data: [
                                                { x: '2025-01-01', y: 2 },
                                                { x: '2025-02-01', y: 3 },
                                                { x: '2025-03-01', y: 5 },
                                                { x: '2025-04-01', y: 4 },
                                                { x: '2025-05-01', y: 6 },
                                                { x: '2025-06-01', y: 7 },
                                            ],
                                        },
                                    ],
                                    growRate: 4.5,
                                    ami: 2500,
                                },
                            },
                        });
                    }, 1000);
                });
                setWidget(response.data.accountBalance as AccountBalanceWidgetType);
                setIsLoading(false);
            } catch (error) {
                console.error('Error fetching widget data:', error);
                setIsLoading(false);
            }
        };
        fetchWidget();
    }, []);

    if (isLoading) {
        return <SingularityLoading />;
    }

    if (!widget) {
        return null;
    }

    const { series, growRate, ami } = widget;

    const updatedSeries = [
        ...series,
        {
            name: 'Balance Trend',
            type: 'line',
            data: series[0].data,
        },
    ];

    const chartOptions: ApexOptions = {
        chart: {
            animations: {
                speed: 400,
                animateGradually: {
                    enabled: false,
                },
            },
            fontFamily: 'inherit',
            foreColor: 'inherit',
            width: '100%',
            height: '100%',
            type: 'bar',
            sparkline: {
                enabled: true,
            },
        },
        colors: [theme.palette.secondary.main, theme.palette.primary.main],
        fill: {
            type: ['gradient', 'solid'],
            gradient: {
                shade: 'light',
                type: 'vertical',
                shadeIntensity: 0.5,
                gradientToColors: [theme.palette.secondary.main],
                inverseColors: true,
                opacityFrom: 0,
                opacityTo: 0.8,
                stops: [0, 100],
            },
        },
        plotOptions: {
            bar: {
                columnWidth: '50%',
                borderRadius: 2,
            },
        },
        series: updatedSeries,
        stroke: {
            show: true,
            width: [0, 2],
            curve: 'smooth',
        },
        markers: {
            size: [0, 4],
            strokeWidth: 2,
            strokeColors: theme.palette.primary.main,
            hover: {
                size: 6,
            },
        },
        grid: {
            show: false,
        },
        tooltip: {
            followCursor: true,
            theme: 'dark',
            x: {
                format: 'MMM dd, yyyy',
            },
            y: {
                formatter: (value) => `${value}%`,
            },
        },
        xaxis: {
            type: 'datetime',
            labels: {
                show: false,
            },
        },
        yaxis: {
            labels: {
                show: false,
            },
        },
    };

    return (
        <Paper className="flex flex-col flex-auto shadow-sm rounded-xl overflow-hidden">
            <div className="flex flex-col p-6 pb-4">
                <div className="flex items-start justify-between">
                    <div className="flex flex-col">
                        <Typography className="text-lg font-medium tracking-tight leading-6 truncate">
                            Travel Budget Growth
                        </Typography>
                        <Typography className="font-medium" color="text.secondary">
                            Monthly budget growth and avg. monthly travel savings
                        </Typography>
                    </div>
                    <div>
                        <Chip size="small" className="font-medium text-sm" label="12 months" />
                    </div>
                </div>
                <div className="flex items-start mt-6 mr-2">
                    <div className="flex flex-col">
                        <Typography className="font-semibold text-3xl md:text-5xl tracking-tighter">
                            {growRate}%
                        </Typography>
                        <Typography className="font-medium text-sm leading-none" color="text.secondary">
                            Average Monthly Growth
                        </Typography>
                    </div>
                    <div className="flex flex-col ml-8 md:ml-16">
                        <Typography className="font-semibold text-3xl md:text-5xl tracking-tighter">
                            {ami.toLocaleString('en-US', {
                                style: 'currency',
                                currency: 'USD',
                            })}
                        </Typography>
                        <Typography className="font-medium text-sm leading-none" color="text.secondary">
                            Average Monthly Travel Savings
                        </Typography>
                    </div>
                </div>
            </div>
            <div className="flex flex-col flex-auto">
                <ReactApexChart
                    className="flex-auto w-full h-full"
                    options={chartOptions}
                    series={_.cloneDeep(updatedSeries)}
                    type={chartOptions?.chart?.type}
                    height={chartOptions?.chart?.height}
                />
            </div>
        </Paper>
    );
}

export default AccountBalanceWidget;
