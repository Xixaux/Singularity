import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { motion } from 'motion/react';
import SingularitySvgIcon from '@singularity/core/SingularitySvgIcon';
import SingularityNavLink from '@singularity/core/SingularityNavLink';
import useThemeMediaQuery from '@singularity/hooks/useThemeMediaQuery';
import PageBreadcrumb from 'src/components/PageBreadcrumb';

/**
 * The products header.
 */
function ProductsHeader() {
    const isMobile = useThemeMediaQuery((theme) => theme.breakpoints.down('lg'));

    return (
        <div className="flex grow-0 flex-1 w-full items-center justify-between space-y-2 sm:space-y-0 py-6 sm:py-8">
            <motion.span
                initial={{ x: -20 }}
                animate={{ x: 0, transition: { delay: 0.2 } }}
            >
                <div>
                    <PageBreadcrumb className="mb-2" />
                    <Typography
                        variant="h2"
                        sx={{
                            fontWeight: 600,
                            fontSize: '22px',
                            color: 'text.primary',
                        }}
                    >
                        Products
                    </Typography>
                </div>
            </motion.span>

            <div className="flex flex-1 items-center justify-end space-x-2">
                <motion.div
                    className="flex grow-0"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0, transition: { delay: 0.2 } }}
                >
                    <Button
                        className=""
                        variant="contained"
                        color="secondary"
                        component={SingularityNavLink}
                        to="/apps/e-commerce/products/new"
                        size={isMobile ? 'small' : 'medium'}
                    >
                        <SingularitySvgIcon size={20}>heroicons-outline:plus</SingularitySvgIcon>
                        <span className="mx-1 sm:mx-2">Add</span>
                    </Button>
                </motion.div>
            </div>
        </div>
    );
}

export default ProductsHeader;