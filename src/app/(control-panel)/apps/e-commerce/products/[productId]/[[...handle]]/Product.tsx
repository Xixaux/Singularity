'use client';

import SingularityLoading from '@singularity/core/SingularityLoading';
import SingularityPageCardLayout from '@singularity/core/SingularityPageCardLayout';
import Typography from '@mui/material/Typography';
import { motion } from 'framer-motion';
import { SyntheticEvent, useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import Link from '@singularity/core/Link';
import _ from 'lodash';
import { FormProvider, useForm } from 'react-hook-form';
import useThemeMediaQuery from '@singularity/hooks/useThemeMediaQuery';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import SingularityTabs from 'src/components/tabs/SingularityTabs';
import SingularityTab from 'src/components/tabs/SingularityTab';
import Button from '@mui/material/Button';
import ProductHeader from './ProductHeader';
import BasicInfoTab from './tabs/BasicInfoTab';
import InventoryTab from './tabs/InventoryTab';
import PricingTab from './tabs/PricingTab';
import ProductImagesTab from './tabs/ProductImagesTab';
import ShippingTab from './tabs/ShippingTab';
import { useGetECommerceProductQuery } from '../../../ECommerceApi';
import ProductModel from '../../models/ProductModel';

const schema = z.object({
    name: z.string().nonempty('You must enter a product name').min(5, 'The product name must be at least 5 characters')
});

function Product() {
    const isMobile = useThemeMediaQuery((theme) => theme.breakpoints.down('lg'));
    const routeParams = useParams<{ productId: string }>();
    const { productId } = routeParams;
    
    const { data: product, isLoading, isError } = useGetECommerceProductQuery(productId, {
        skip: !productId || productId === 'new'
    });
    
    const [tabValue, setTabValue] = useState('basic-info');
    
    const methods = useForm({
        mode: 'onChange',
        defaultValues: {},
        resolver: zodResolver(schema)
    });
    const { reset, watch } = methods;
    const form = watch();

    useEffect(() => {
        if (productId === 'new') {
            reset(ProductModel({}));
        }
    }, [productId, reset]);

    useEffect(() => {
        if (product) {
            reset({ ...product });
        }
    }, [product, reset]);

    function handleTabChange(event: SyntheticEvent, value: string) {
        setTabValue(value);
    }

    if (isLoading) {
        return <SingularityLoading />;
    }

    if (isError && productId !== 'new') {
        return (
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { delay: 0.1 } }}
                className="flex flex-col flex-1 items-center justify-center h-full"
            >
                <Typography color="text.secondary" variant="h5">
                    There is no such product!
                </Typography>
                <Button
                    className="mt-6"
                    component={Link}
                    variant="outlined"
                    to="/apps/e-commerce/products"
                    color="inherit"
                >
                    Go to Products Page
                </Button>
            </motion.div>
        );
    }

    if (_.isEmpty(form) || (product && routeParams.productId !== product.id && routeParams.productId !== 'new')) {
        return <SingularityLoading />;
    }

    return (
        <FormProvider {...methods}>
            <SingularityPageCardLayout
                header={<ProductHeader />}
                content={
                    <div className="p-4 sm:p-6 max-w-5xl space-y-6">
                        <SingularityTabs
                            value={tabValue}
                            onChange={handleTabChange}
                            sx={{ borderBottom: 1, borderColor: 'divider' }} 
                        >
                            <SingularityTab
                                value="basic-info"
                                label="Basic Info"
                            />
                            <SingularityTab
                                value="product-images"
                                label="Product Images"
                            />
                            <SingularityTab
                                value="pricing"
                                label="Pricing"
                            />
                            <SingularityTab
                                value="inventory"
                                label="Inventory"
                            />
                            <SingularityTab
                                value="shipping"
                                label="Shipping"
                            />
                        </SingularityTabs>
                        <div className="tab-content">
                            <div className={tabValue !== 'basic-info' ? 'hidden' : ''}>
                                <BasicInfoTab />
                            </div>
                            <div className={tabValue !== 'product-images' ? 'hidden' : ''}>
                                <ProductImagesTab />
                            </div>
                            <div className={tabValue !== 'pricing' ? 'hidden' : ''}>
                                <PricingTab />
                            </div>
                            <div className={tabValue !== 'inventory' ? 'hidden' : ''}>
                                <InventoryTab />
                            </div>
                            <div className={tabValue !== 'shipping' ? 'hidden' : ''}>
                                <ShippingTab />
                            </div>
                        </div>
                    </div>
                }
                scroll={isMobile ? 'normal' : 'content'}
            />
        </FormProvider>
    );
}

export default Product;