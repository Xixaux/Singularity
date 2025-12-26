'use client';

import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import { memo, useState, useEffect } from 'react';
import { format } from 'date-fns/format';
import clsx from 'clsx';
import Button from '@mui/material/Button';
import SingularityLoading from '@singularity/core/SingularityLoading';
import RecentTransactionsWidgetType from './types/RecentTransactionsWidgetType';

/**
 * The RecentTransactionsWidget widget.
 */
function RecentTransactionsWidget() {
    const [widget, setWidget] = useState<RecentTransactionsWidgetType | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchWidget = async () => {
            try {
               
                const response = await new Promise((resolve) => {
                    setTimeout(() => {
                        resolve({
                            data: {
                                recentTransactions: {
                                    columns: ['Transaction ID', 'Date', 'Description', 'Amount', 'Status'],
                                    rows: [
                                        {
                                            id: 'TRX-20250705-123456',
                                            date: '2025-07-05',
                                            description: 'Hotel Booking (Paris Marriott)',
                                            amount: 450.00,
                                            status: 'pending',
                                        },
                                        {
                                            id: 'TRX-20250710-456789',
                                            date: '2025-07-10',
                                            description: 'Eiffel Tower Guided Tour',
                                            amount: 75.99,
                                            status: 'completed',
                                        },
                                        {
                                            id: 'TRX-20250715-789123',
                                            date: '2025-07-15',
                                            description: 'Train Ticket (Paris to Lyon)',
                                            amount: 120.50,
                                            status: 'completed',
                                        },
                                        {
                                            id: 'TRX-20250718-321654',
                                            date: '2025-07-18',
                                            description: 'Car Rental (Hertz Lyon)',
                                            amount: 200.75,
                                            status: 'completed',
                                        },
                                        {
                                            id: 'TRX-20250720-654987',
                                            date: '2025-07-20',
                                            description: 'Museum Pass (Louvre & Orsay)',
                                            amount: 45.00,
                                            status: 'completed',
                                        },
                                    ],
                                },
                            },
                        });
                    }, 1000);
                });
                setWidget(response.data.recentTransactions as RecentTransactionsWidgetType);
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

    const { columns, rows } = widget;

    return (
        <Paper className="flex flex-col flex-auto p-6 shadow-sm rounded-xl overflow-hidden">
            <div>
                <Typography className="text-lg font-medium tracking-tight leading-6 truncate">
                    Recent Transactions
                </Typography>
                <Typography
                    className="font-medium"
                    color="text.secondary"
                >
                    1 pending, 4 completed
                </Typography>
            </div>

            <div className="table-responsive mt-6">
                <Table className="table simple w-full min-w-full">
                    <TableHead>
                        <TableRow>
                            {columns.map((column, index) => (
                                <TableCell key={index}>
                                    <Typography
                                        color="text.secondary"
                                        className="font-semibold text-md whitespace-nowrap"
                                    >
                                        {column}
                                    </Typography>
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableHead>

                    <TableBody>
                        {rows.map((row, index) => (
                            <TableRow key={index}>
                                {Object.entries(row).map(([key, value]) => {
                                    switch (key) {
                                        case 'id': {
                                            return (
                                                <TableCell
                                                    key={key}
                                                    component="th"
                                                    scope="row"
                                                >
                                                    <Typography color="text.secondary">{value}</Typography>
                                                </TableCell>
                                            );
                                        }
                                        case 'date': {
                                            return (
                                                <TableCell
                                                    key={key}
                                                    component="th"
                                                    scope="row"
                                                >
                                                    <Typography>{format(new Date(value), 'MMM dd, y')}</Typography>
                                                </TableCell>
                                            );
                                        }
                                        case 'amount': {
                                            return (
                                                <TableCell
                                                    key={key}
                                                    component="th"
                                                    scope="row"
                                                >
                                                    <Typography>
                                                        {value.toLocaleString('en-US', {
                                                            style: 'currency',
                                                            currency: 'USD'
                                                        })}
                                                    </Typography>
                                                </TableCell>
                                            );
                                        }
                                        case 'status': {
                                            return (
                                                <TableCell
                                                    key={key}
                                                    component="th"
                                                    scope="row"
                                                >
                                                    <Typography
                                                        className={clsx(
                                                            'inline-flex items-center font-bold text-xs px-2.5 py-0.5 rounded-full tracking-wide uppercase',
                                                            value === 'pending' &&
                                                                'bg-red-100 text-red-800 dark:bg-red-600 dark:text-red-50',
                                                            value === 'completed' &&
                                                                'bg-green-50 text-green-800 dark:bg-green-600 dark:text-green-50'
                                                        )}
                                                    >
                                                        {value}
                                                    </Typography>
                                                </TableCell>
                                            );
                                        }
                                        default: {
                                            return (
                                                <TableCell
                                                    key={key}
                                                    component="th"
                                                    scope="row"
                                                >
                                                    <Typography>{value}</Typography>
                                                </TableCell>
                                            );
                                        }
                                    }
                                })}
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
                <div className="pt-6">
                    <Button variant="outlined">See all transactions</Button>
                </div>
            </div>
        </Paper>
    );
}

export default memo(RecentTransactionsWidget);