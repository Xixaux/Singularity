'use client';

import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import clsx from 'clsx';
import Chip from '@mui/material/Chip';
import ModernPricingItemType from './ModernPricingItemType';
import Star from '@mui/icons-material/Star';
import React from 'react';

type ModernPricingCardProps = ModernPricingItemType & {
    className?: string;
};

/**
 * The modern pricing card component.
 */
function ModernPricingCard(props: ModernPricingCardProps) {
    const {
        period = '',
        title = '',
        subtitle = '',
        yearlyPrice = '',
        monthlyPrice = '',
        buttonTitle = '',
        isPopular = false,
        details = '',
        className = ''
    } = props;

    return (
        <Paper
            className={clsx(
                'relative max-w-sm flex-col p-6 sm:px-10 sm:py-12 md:max-w-none',
                isPopular && '',
                className
            )}
            sx={[
                isPopular &&
                    ((theme) => ({
                        border: `1px solid ${theme.vars.palette.secondary.main}`
                    })),
                {
                    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%236BC9F7' stroke-width='1' opacity='0.1'%3E%3Cpath d='M12 2L9.5 8.5H2l6.5 4.7-2.5 7.8 6.5-4.7 6.5 4.7-2.5-7.8L22 8.5h-7.5L12 2z'/%3E%3C/svg%3E")`,
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'right 20px top 20px',
                    backgroundSize: '64px 64px',
                }
            ]}
        >
            {isPopular && (
                <div className="absolute inset-x-0 -top-4 flex items-center justify-center">
                    <Chip
                        label="POPULAR"
                        color="secondary"
                        className="flex h-8 items-center rounded-full px-8 text-center font-medium leading-none"
                    />
                </div>
            )}
            <Typography className="text-4xl font-bold leading-[1.25] tracking-tight">{title}</Typography>
            <Typography
                className="mt-2 text-lg font-medium tracking-tight"
                color="text.secondary"
            >
                {subtitle}
            </Typography>
            <Divider className="my-10 h-1 w-3/4 rounded-sm" sx={{ backgroundColor: '#6BC9F7' }} />
            <div className="flex items-baseline whitespace-nowrap">
                <Typography className="mr-2 text-2xl">USD</Typography>
                <Typography className="text-6xl font-semibold leading-[1.25] tracking-tight">
                    {period === 'month' && monthlyPrice}
                    {period === 'year' && yearlyPrice}
                </Typography>
            </div>
            <Typography
                className="mt-2 flex flex-col"
                color="text.secondary"
            >
                {period === 'month' && (
                    <>
                        <span>billed monthly</span>
                        <span>
                            <b>{yearlyPrice}</b> billed yearly
                        </span>
                    </>
                )}
                {period === 'year' && (
                    <>
                        <span>billed yearly</span>
                        <span>
                            <b>{monthlyPrice}</b> billed monthly
                        </span>
                    </>
                )}
            </Typography>
            <Button
                className="mt-10 w-full"
                size="large"
                variant={isPopular ? 'contained' : 'outlined'}
                color={isPopular ? 'secondary' : 'inherit'}
            >
                {buttonTitle}
            </Button>
            {details && (
                <div className="mt-12 flex flex-col">
                    {React.Children.map(details.props.children, (child, index) => (
                        <>
                            {child.type === 'div' && child.props.className.includes('space-y-2') ? (
                                <div className={child.props.className}>
                                    {React.Children.map(child.props.children, (feature, featureIndex) => (
                                        <>
                                            <div className="flex items-center">
                                                <Star className="h-5 w-5 text-gray-600" />
                                                <Typography className="ml-0.5 leading-5">
                                                    {feature.props.children[1].props.children}
                                                </Typography>
                                            </div>
                                            {featureIndex < React.Children.count(child.props.children) - 1 && (
                                                <Divider className="my-2" sx={{ backgroundColor: '#E0E0E0', height: '1px' }} />
                                            )}
                                        </>
                                    ))}
                                </div>
                            ) : (
                                child
                            )}
                        </>
                    ))}
                </div>
            )}
        </Paper>
    );
}

export default ModernPricingCard;