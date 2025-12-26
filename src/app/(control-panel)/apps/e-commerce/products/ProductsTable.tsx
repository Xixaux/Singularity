'use client';

import { useMemo } from 'react';
import { type MRT_ColumnDef } from 'material-react-table';
import DataTable from 'src/components/data-table/DataTable';
import SingularityLoading from '@singularity/core/SingularityLoading';
import { Chip, ListItemIcon, MenuItem, Paper, Typography, useTheme } from '@mui/material';
import CheckCircle from '@mui/icons-material/CheckCircle';
import Cancel from '@mui/icons-material/Cancel';
import _ from 'lodash';
import SingularitySvgIcon from '@singularity/core/SingularitySvgIcon';
import Link from '@singularity/core/Link';
import clsx from 'clsx';
import Button from '@mui/material/Button';
import { EcommerceProduct, useDeleteECommerceProductsMutation, useGetECommerceProductsQuery } from '../ECommerceApi';

function ProductsTable() {
    const theme = useTheme();
    const { data: products, isLoading } = useGetECommerceProductsQuery();
    const [removeProducts] = useDeleteECommerceProductsMutation();

    const columns = useMemo<MRT_ColumnDef<EcommerceProduct>[]>(
        () => [
            {
                accessorFn: (row) => row.featuredImageId,
                id: 'featuredImageId',
                header: '',
                enableColumnFilter: false,
                enableColumnDragging: false,
                size: 80,
                enableSorting: false,
                Cell: ({ row }) => (
                    <div className="flex items-center justify-center">
                        {row.original?.images?.length > 0 && row.original.featuredImageId ? (
                            <img
                                className="w-full max-h-12 max-w-12 block rounded-sm"
                                src={_.find(row.original.images, { id: row.original.featuredImageId })?.url}
                                alt={row.original.name}
                            />
                        ) : (
                            <img
                                className="w-full max-h-12 max-w-12 block rounded-sm"
                                src="/assets/images/apps/ecommerce/product-image-placeholder.png"
                                alt={row.original.name}
                            />
                        )}
                    </div>
                ),
            },
            {
                accessorKey: 'name',
                header: 'Name',
                size: 200,
                Cell: ({ row }) => (
                    <Typography
                        component={Link}
                        to={`/apps/e-commerce/products/${row.original.id}/${row.original.handle}`}
                        role="button"
                        sx={{
                            fontSize: '1rem',
                            textDecoration: 'underline',
                            fontWeight: 'medium',
                            '&:hover': {
                                color: theme.palette.mode === 'light' ? theme.palette.primary.dark : theme.palette.primary.light,
                                transition: 'color 0.3s ease',
                            },
                        }}
                    >
                        {row.original.name}
                    </Typography>
                ),
            },
            {
                accessorKey: 'categories',
                header: 'Category',
                accessorFn: (row) => (
                    <div className="flex flex-wrap space-x-0.5">
                        {row.categories.map((item) => (
                            <Chip
                                key={item}
                                className="text-md"
                                size="small"
                                sx={{
                                    backgroundColor: theme.palette.primary.main,
                                    color: theme.palette.common.white,
                                    '& .MuiChip-label': { color: theme.palette.common.white },
                                }}
                                label={item}
                            />
                        ))}
                    </div>
                ),
            },
            {
                accessorKey: 'priceTaxIncl',
                header: 'Price',
                size: 50,
                accessorFn: (row) => (
                    <span
                        style={{
                            fontSize: '1.125rem',
                        }}
                    >
                        {`$${row.priceTaxIncl}`}
                    </span>
                ),
            },
            {
                accessorKey: 'quantity',
                header: 'Quantity',
                accessorFn: (row) => (
                    <div className="flex items-center space-x-2">
                        <div
                            style={{
                                fontSize: '1.125rem',
                            }}
                        >
                            {row.quantity}
                        </div>
                        <i
                            className={clsx(
                                'inline-block w-2 h-2 rounded-sm',
                                row.quantity <= 5 && 'error-main',
                                row.quantity > 5 && row.quantity <= 25 && 'warning-main',
                                row.quantity > 25 && 'success-main',
                            )}
                            style={{
                                backgroundColor: clsx(
                                    row.quantity <= 5 && theme.palette.error.main,
                                    row.quantity > 5 && row.quantity <= 25 && theme.palette.warning.main,
                                    row.quantity > 25 && theme.palette.success.main,
                                ),
                            }}
                        />
                    </div>
                ),
            },
            {
                accessorKey: 'active',
                header: 'Active',
                accessorFn: (row) => (
                    <div className="flex items-center">
                        {row.active ? (
                            <CheckCircle sx={{ fontSize: 22, color: theme.palette.success.main }} />
                        ) : (
                            <Cancel sx={{ fontSize: 22, color: theme.palette.error.main }} />
                        )}
                    </div>
                ),
            },
        ],
        [theme],
    );

    if (isLoading) {
        return <SingularityLoading />;
    }

    return (
        <Paper
            className="products-table-container"
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
                        transition: 'background-color 0.3s ease',
                    },
                },
            }}
        >
            <DataTable
                className="ecommerce-products-table"
                data={products}
                columns={columns}
                enableColumnBorders={false}
                enableRowBorders={false}
                muiTableProps={{
                    sx: {
                        border: 'none',
                        backgroundColor: theme.palette.background.paper,
                    },
                }}
                muiTableHeadCellProps={{
                    sx: {
                        borderBottom: `1px solid ${theme.palette.divider}`,
                        backgroundColor: theme.palette.background.default,
                        fontWeight: 'bold',
                        color: theme.palette.text.primary,
                        py: 1.5,
                    },
                }}
                muiTableBodyCellProps={{
                    sx: {
                        borderBottom: `1px solid ${theme.palette.divider}`,
                        color: theme.palette.text.secondary,
                        backgroundColor: theme.palette.background.paper,
                        py: 1.5,
                    },
                }}
                muiSelectCheckboxProps={{
                    sx: {
                        backgroundColor: theme.palette.grey[300],
                        border: 'none',
                        '&.Mui-checked': {
                            backgroundColor: theme.palette.primary.main,
                            color: theme.palette.text.secondary,
                        },
                    },
                }}
                renderRowActionMenuItems={({ closeMenu, row, table }) => [
                    <MenuItem
                        key={0}
                        onClick={() => {
                            removeProducts([row.original.id]);
                            closeMenu();
                            table.resetRowSelection();
                        }}
                        sx={{
                            fontSize: '0.875rem',
                            color: 'var(--mui-palette-error-main)',
                            '&:hover': {
                                backgroundColor: 'var(--mui-palette-error-light)',
                                transition: 'background-color 0.2s ease',
                            },
                        }}
                    >
                        <ListItemIcon>
                            <SingularitySvgIcon sx={{ color: 'var(--mui-palette-error-main)' }}>
                                heroicons-outline:trash
                            </SingularitySvgIcon>
                        </ListItemIcon>
                        Delete
                    </MenuItem>,
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
                                removeProducts(selectedRows.map((row) => row.original.id));
                                table.resetRowSelection();
                            }}
                            className="flex shrink min-w-9 ltr:mr-2 rtl:ml-2"
                            sx={{
                                fontSize: '1.125rem',
                                backgroundColor: 'var(--mui-palette-error-main)',
                                color: 'var(--mui-palette-secondary-contrastText)',
                                '&:hover': {
                                    backgroundColor: 'var(--mui-palette-error-dark)',
                                    transition: 'background-color 0.3s ease',
                                },
                                borderRadius: 1,
                                px: 2,
                                py: 0.5,
                                fontWeight: 'medium',
                            }}
                        >
                            <SingularitySvgIcon size={18}>heroicons-outline:trash</SingularitySvgIcon>
                            <span className="hidden sm:flex mx-2">Delete selected items</span>
                        </Button>
                    );
                }}
            />
        </Paper>
    );
}

export default ProductsTable;