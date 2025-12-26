'use client';

import Typography from '@mui/material/Typography';
import { useParams } from 'next/navigation';
import Link from '@singularity/core/Link';
import { useGetECommerceOrderQuery } from '../../../../ECommerceApi';
import { Box, Table, TableBody, TableCell, TableHead, TableRow, CircularProgress, Alert, Stack } from '@mui/material';
import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined';
import { useTheme } from '@mui/material/styles';

function ProductsTab() {
    const routeParams = useParams<{ orderId: string }>();
    const { orderId } = routeParams;
    const { data: order, isLoading, error } = useGetECommerceOrderQuery(orderId, { skip: !orderId });
    const theme = useTheme();

    const StatusBox = ({ children }: { children: React.ReactNode }) => (
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: 200, py: 4, px: 2 }}>
            {children}
        </Box>
    );

    if (isLoading) {
        return (
            <StatusBox>
                <Stack direction="row" spacing={2} alignItems="center">
                    <CircularProgress color="primary" size={28} thickness={5} />
                    <Typography variant="body2" sx={{ fontWeight: 500, color: theme.palette.text.secondary }}>
                        Loading products...
                    </Typography>
                </Stack>
            </StatusBox>
        );
    }

    if (error) {
        return (
            <StatusBox>
                <Alert
                    severity="error"
                    sx={{
                        borderRadius: 2,
                        bgcolor: theme.palette.background.default,
                        color: theme.palette.text.primary,
                        px: 3,
                        py: 1,
                    }}
                >
                    Error loading products
                </Alert>
            </StatusBox>
        );
    }

    if (!order?.products || order.products.length === 0) {
        return (
            <StatusBox>
                <Alert
                    severity="info"
                    sx={{
                        borderRadius: 2,
                        bgcolor: theme.palette.background.default,
                        color: theme.palette.text.primary,
                        px: 3,
                        py: 1,
                    }}
                >
                    No products found for this order
                </Alert>
            </StatusBox>
        );
    }

    return (
        <Box
            className="products-tab-container table-responsive border rounded-md"
            sx={{
                width: '100%',
                maxWidth: '64rem',
                border: '1px solid',
                borderColor: theme.palette.grey[300],
                borderRadius: 1,
                overflowX: 'auto',
                bgcolor: theme.palette.background.default,
                boxShadow: 'none',
            }}
        >
            <Table sx={{ tableLayout: 'auto', minWidth: 600, bgcolor: 'transparent' }} className="simple">
                
                {}
                <TableHead
                    sx={{
                        bgcolor: theme.palette.mode === 'light' ? theme.palette.grey[50] : theme.palette.action.hover,
                        borderBottom: `2px solid ${theme.palette.divider}`,
                    }}
                >
                    <TableRow>
                        <TableCell sx={{ width: '80px', fontWeight: 600, fontSize: '0.875rem', color: theme.palette.text.secondary, py: 1 }}>
                            ID
                        </TableCell>
                        <TableCell sx={{ width: '80px', fontWeight: 600, fontSize: '0.875rem', color: theme.palette.text.secondary, py: 1 }}>
                            Image
                        </TableCell>
                        
                        <TableCell sx={{ width: '100px', fontWeight: 600, fontSize: '0.875rem', color: theme.palette.text.secondary, textAlign: 'right', py: 1 }}>
                            Price
                        </TableCell>

                        {}
                        <TableCell sx={{ 
                            width: '100px', 
                            fontWeight: 600, 
                            fontSize: '0.875rem', 
                            color: theme.palette.text.secondary, 
                            textAlign: 'right', 
                            py: 1, 
                            pr: 3
                        }}>
                            Quantity
                        </TableCell>

                        <TableCell sx={{ width: '45%', fontWeight: 600, fontSize: '0.875rem', color: theme.palette.text.secondary, py: 1 }}>
                            Name
                        </TableCell>
                    </TableRow>
                </TableHead>
                
                {}
                <TableBody sx={{ bgcolor: 'transparent' }}>
                    {order.products.map((product) => (
                        <TableRow
                            key={product.id}
                            sx={{
                                transition: 'background-color 0.2s ease',
                                '&:hover': { bgcolor: theme.palette.action.hover },
                                bgcolor: 'transparent',
                            }}
                        >
                            <TableCell sx={{ fontSize: '0.875rem', color: theme.palette.text.secondary, py: 1 }}>
                                {product.id}
                            </TableCell>
                            <TableCell sx={{ py: 1 }}>
                                <Box
                                    sx={{
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        width: '64px',
                                        height: '64px',
                                        borderRadius: 1,
                                        overflow: 'hidden',
                                        bgcolor: 'transparent',
                                    }}
                                >
                                    {product?.images?.length > 0 && product.featuredImageId ? (
                                        <img
                                            src={
                                                product.images.find((img) => img.id === product.featuredImageId)?.url ||
                                                'https://prodimage.images-bn.com/pimages/9780593158715_p0_v7_s600x595.jpg'
                                            }
                                            alt={product.name}
                                            onError={(e) => {
                                                e.currentTarget.style.display = 'none';
                                                e.currentTarget.nextSibling.style.display = 'flex';
                                            }}
                                            style={{
                                                width: '100%',
                                                height: '100%',
                                                objectFit: 'cover',
                                            }}
                                        />
                                    ) : (
                                        <ImageOutlinedIcon
                                            sx={{
                                                width: '32px',
                                                height: '32px',
                                                color: theme.palette.text.disabled,
                                                display: 'block',
                                            }}
                                        />
                                    )}
                                </Box>
                            </TableCell>
                            
                            <TableCell sx={{ fontSize: '0.875rem', fontWeight: 500, textAlign: 'right', color: theme.palette.text.primary, py: 1 }}>
                                ${product.price}
                            </TableCell>
                            
                            {}
                            <TableCell sx={{ 
                                fontSize: '0.875rem', 
                                color: theme.palette.text.secondary, 
                                textAlign: 'right', 
                                py: 1, 
                                pr: 3
                            }}>
                                {product.quantity}
                            </TableCell>

                            <TableCell sx={{ width: '45%', py: 1 }}>
                                <Typography
                                    component={Link}
                                    to={`/apps/e-commerce/products/${product.id}`}
                                    variant="body2"
                                    sx={{
                                        fontSize: '0.875rem',
                                        fontWeight: 500,
                                        color: theme.palette.primary.main,
                                        textDecoration: 'none',
                                        '&:hover': { textDecoration: 'underline' },
                                        display: 'block',
                                        overflow: 'hidden',
                                        textOverflow: 'ellipsis',
                                        whiteSpace: 'nowrap',
                                    }}
                                >
                                    {product.name}
                                </Typography>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </Box>
    );
}

export default ProductsTab;