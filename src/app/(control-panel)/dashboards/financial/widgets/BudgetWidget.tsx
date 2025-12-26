'use client';

import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { memo, useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import SingularitySvgIcon from '@singularity/core/SingularitySvgIcon';
import LinearProgress from '@mui/material/LinearProgress';
import IconButton from '@mui/material/IconButton';
import SingularityLoading from '@singularity/core/SingularityLoading';
import ExpensesWidgetType from './types/ExpensesWidgetType';

/**
 * The ExpensesWidget widget.
 */
function ExpensesWidget() {
    const [widget, setWidget] = useState<ExpensesWidgetType | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchWidget = async () => {
            try {
               
                const response = await new Promise((resolve) => {
                    setTimeout(() => {
                        resolve({
                            data: {
                                expenses: {
                                    expenses: 3200,
                                    expensesLimit: 4000,
                                    savings: 1500,
                                    savingsGoal: 2000,
                                    bills: 1200,
                                    billsLimit: 1000,
                                },
                            },
                        });
                    }, 1000);
                });
                setWidget(response.data.expenses as ExpensesWidgetType);
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

    const { expenses, expensesLimit, savings, savingsGoal, bills, billsLimit } = widget;

    function calcProgressVal(val: number, limit: number) {
        const percentage = (val * 100) / limit;
        return percentage > 100 ? 100 : percentage;
    }

    return (
        <Paper className="flex flex-col flex-auto p-6 shadow-sm rounded-xl overflow-hidden">
            <div className="flex items-center justify-between">
                <div className="flex flex-col">
                    <Typography className="mr-4 text-lg font-medium tracking-tight leading-6 truncate">
                        Expenses
                    </Typography>
                    <Typography
                        className="font-medium"
                        color="text.secondary"
                    >
                        Monthly expenses summary
                    </Typography>
                </div>
                <div className="-mt-2">
                    <IconButton aria-label="more">
                        <SingularitySvgIcon>heroicons-outline:ellipsis-vertical</SingularitySvgIcon>
                    </IconButton>
                </div>
            </div>

            <Typography className="mt-6">
                Last month; you had <strong>223</strong> expense transactions, <strong>12</strong> savings entries and{' '}
                <strong>4</strong> bills.
            </Typography>

            <div className="my-8 space-y-8">
                <div className="flex flex-col">
                    <div className="flex items-center space-x-4">
                        <div className="flex items-center justify-center w-14 h-14 rounded-sm bg-red-100 text-red-800 dark:bg-red-600 dark:text-red-50">
                            <SingularitySvgIcon className="text-current">heroicons-outline:credit-card</SingularitySvgIcon>
                        </div>
                        <div className="flex-auto leading-none">
                            <Typography
                                className="text-md font-medium"
                                color="text.secondary"
                            >
                                Expenses
                            </Typography>
                            <Typography className="font-medium text-2xl">
                                {expenses.toLocaleString('en-US', {
                                    style: 'currency',
                                    currency: 'USD'
                                })}
                            </Typography>
                            <LinearProgress
                                variant="determinate"
                                className="mt-1"
                                color="warning"
                                value={calcProgressVal(expenses, expensesLimit)}
                            />
                        </div>
                        <div className="flex items-end justify-end min-w-18 mt-auto ml-6">
                            <div className="text-lg leading-none">2.6%</div>
                            <SingularitySvgIcon
                                size={16}
                                className="text-green-600"
                            >
                                heroicons-solid:arrow-small-down
                            </SingularitySvgIcon>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col">
                    <div className="flex items-center space-x-4">
                        <div className="flex items-center justify-center w-14 h-14 rounded-sm bg-indigo-100 text-indigo-800 dark:bg-indigo-600 dark:text-indigo-50">
                            <SingularitySvgIcon className="text-current">heroicons-outline:banknotes</SingularitySvgIcon>
                        </div>
                        <div className="flex-auto leading-none">
                            <Typography
                                className="text-md font-medium"
                                color="text.secondary"
                            >
                                Savings
                            </Typography>
                            <Typography className="font-medium text-2xl">
                                {savings.toLocaleString('en-US', {
                                    style: 'currency',
                                    currency: 'USD'
                                })}
                            </Typography>
                            <LinearProgress
                                variant="determinate"
                                className="mt-1"
                                color="primary"
                                value={calcProgressVal(savings, savingsGoal)}
                            />
                        </div>
                        <div className="flex items-end justify-end min-w-18 mt-auto">
                            <div className="text-lg leading-none">12.7%</div>
                            <SingularitySvgIcon
                                size={16}
                                className="text-red-600 ml-1"
                            >
                                heroicons-solid:arrow-small-up
                            </SingularitySvgIcon>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col">
                    <div className="flex items-center space-x-4">
                        <div className="flex items-center justify-center w-14 h-14 rounded-sm bg-teal-100 text-teal-800 dark:bg-teal-600 dark:text-teal-50">
                            <SingularitySvgIcon className="text-current">heroicons-outline:light-bulb</SingularitySvgIcon>
                        </div>
                        <div className="flex-auto leading-none">
                            <Typography
                                className="text-md font-medium"
                                color="text.secondary"
                            >
                                Bills
                            </Typography>
                            <Typography className="font-medium text-2xl">
                                {bills.toLocaleString('en-US', {
                                    style: 'currency',
                                    currency: 'USD'
                                })}
                            </Typography>
                            <LinearProgress
                                variant="determinate"
                                className="mt-1"
                                color="secondary"
                                value={calcProgressVal(bills, billsLimit)}
                            />
                        </div>
                        <div className="flex items-end justify-end min-w-18 mt-auto">
                            <div className="text-lg leading-none">105.7%</div>
                            <SingularitySvgIcon
                                size={16}
                                className="text-red-600 ml-1"
                            >
                                heroicons-solid:arrow-small-up
                            </SingularitySvgIcon>
                        </div>
                    </div>

                    <Typography
                        className="mt-3 text-md"
                        color="text.secondary"
                    >
                        Exceeded your personal limit! Be careful next month.
                    </Typography>
                </div>
            </div>

            <div>
                <Button variant="outlined">Download Summary</Button>
            </div>
        </Paper>
    );
}

export default memo(ExpensesWidget);