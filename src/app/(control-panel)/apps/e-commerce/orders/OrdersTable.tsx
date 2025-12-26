'use client';

import { useMemo } from 'react';
import { type MRT_ColumnDef } from 'material-react-table';
import DataTable from 'src/components/data-table/DataTable';
import { ListItemIcon, MenuItem, Card, Button, Typography, Box, useTheme } from '@mui/material';
import SingularitySvgIcon from '@singularity/core/SingularitySvgIcon';
import Link from '@singularity/core/Link';
import SingularityLoading from '@singularity/core/SingularityLoading';
import { EcommerceOrder, useDeleteECommerceOrdersMutation, useGetECommerceOrdersQuery } from '../ECommerceApi';
import OrdersStatus from './OrdersStatus';

function OrdersTable() {
    const { data: orders, isLoading } = useGetECommerceOrdersQuery();
    const [removeOrders] = useDeleteECommerceOrdersMutation();
    const theme = useTheme();

    const columns = useMemo<MRT_ColumnDef<EcommerceOrder>[]>(
        () => [
            {
                accessorKey: 'reference',
                header: 'Order Reference',
                size: 64,
                Cell: ({ row }) => (
                    <Typography
                        component={Link}
                        to={`/apps/e-commerce/orders/${row.original.id}`}
                        role="button"
                        sx={{
                            textDecoration: 'underline',
                            fontWeight: 'medium',
                            '&:hover': { 
                                color: theme.palette.mode === 'light' ? theme.palette.primary.dark : theme.palette.primary.light, 
                                transition: 'color 0.3s ease' 
                            }
                        }}
                    >
                        {row.original.reference}
                    </Typography>
                )
            },
            {
                id: 'customer',
                accessorFn: (row) => `${row.customer.firstName} ${row.customer.lastName}`,
                header: 'Patron',
                Cell: ({ cell }) => (
                    <Typography sx={{ fontStyle: 'italic' }}>
                        {cell.getValue<string>()}
                    </Typography>
                )
            },
            {
                id: 'total',
                accessorFn: (row) => `$${row.total}`,
                header: 'Total Value',
                size: 64,
                Cell: ({ cell }) => (
                    <Typography sx={{ fontWeight: 'bold' }}>
                        {cell.getValue<string>()}
                    </Typography>
                )
            },
            {
                id: 'payment',
                accessorFn: (row) => row.payment.method,
                header: 'Payment Method',
                size: 128,
                Cell: ({ cell }) => (
                    <Typography>
                        {cell.getValue<string>()}
                    </Typography>
                )
            },
            {
                id: 'status',
                accessorFn: (row) => <OrdersStatus name={row.status[0].name} />,
                accessorKey: 'status',
                header: 'Order Status',
                Cell: ({ cell }) => (
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        {cell.getValue<React.ReactNode>()}
                    </Box>
                )
            },
            {
                accessorKey: 'date',
                header: 'Date Issued',
                Cell: ({ cell }) => (
                    <Typography>
                        {cell.getValue<string>()}
                    </Typography>
                )
            }
        ],
        [theme]
    );

    if (isLoading) {
        return (
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '50vh' }}>
                <SingularityLoading />
            </Box>
        );
    }

    return (
        <Card
            className="orders-table-container"
            sx={{
                borderRadius: 2,
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                backgroundColor: theme.palette.background.paper,
                overflow: 'hidden',
                width: '100%',
                maxWidth: '100%',
                '& .MuiTableRow-root': {
                    '&:hover': {
                        backgroundColor: theme.palette.action.hover,
                        transition: 'background-color 0.3s ease'
                    }
                }
            }}
        >
            <DataTable
                initialState={{
                    density: 'spacious',
                    showColumnFilters: false,
                    showGlobalFilter: true,
                    columnPinning: {
                        left: ['mrt-row-expand', 'mrt-row-select'],
                        right: ['mrt-row-actions']
                    },
                    pagination: {
                        pageIndex: 0,
                        pageSize: 20
                    }
                }}
                data={orders}
                columns={columns}
                muiTableHeadCellProps={{
                    sx: {
                        backgroundColor: theme.palette.background.default,
                        fontWeight: 'bold',
                        color: theme.palette.text.primary,
                        borderBottom: `1px solid ${theme.palette.divider}`,
                        py: 1.5
                    }
                }}
                muiTableBodyCellProps={{
                    sx: {
                        borderBottom: `1px solid ${theme.palette.divider}`,
                        color: theme.palette.text.primary, 
                        py: 1.5
                    }
                }}
                renderRowActionMenuItems={({ closeMenu, row, table }) => [
                    <MenuItem
                        key={0}
                        onClick={() => {
                            removeOrders([row.original.id]);
                            closeMenu();
                            table.resetRowSelection();
                        }}
                        sx={{
                            color: 'var(--mui-palette-error-main)',
                            '&:hover': {
                                backgroundColor: 'var(--mui-palette-error-light)',
                                transition: 'background-color 0.2s ease'
                            }
                        }}
                    >
                        <ListItemIcon>
                            <SingularitySvgIcon sx={{ color: 'var(--mui-palette-error-main)' }}>
                                heroicons-outline:trash
                            </SingularitySvgIcon>
                        </ListItemIcon>
                        Remove Order
                    </MenuItem>
                ]}
                renderTopToolbarCustomActions={({ table }) => {
                    const { rowSelection } = table.getState();

                    if (Object.keys(rowSelection).length === 0) {
                        return null;
                    }

                    return (
                        <Button
                            variant="contained"
                            size="small"
                            onClick={() => {
                                const selectedRows = table.getSelectedRowModel().rows;
                                removeOrders(selectedRows.map((row) => row.original.id));
                                table.resetRowSelection();
                            }}
                            sx={{
                                backgroundColor: 'var(--mui-palette-error-main)',
                                color: 'var(--mui-palette-secondary-contrastText)',
                                '&:hover': {
                                    backgroundColor: 'var(--mui-palette-error-dark)',
                                    transition: 'background-color 0.3s ease'
                                },
                                borderRadius: 1,
                                px: 2,
                                py: 0.5,
                                fontWeight: 'medium'
                            }}
                        >
                            <SingularitySvgIcon size={16} sx={{ mr: 1 }}>
                                heroicons-outline:trash
                            </SingularitySvgIcon>
                            <span className="hidden sm:flex">Remove Selected Orders</span>
                        </Button>
                    );
                }}
            />
        </Card>
    );
}

export default OrdersTable;
