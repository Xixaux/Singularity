'use client';

import { useState } from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { darken } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import SingularitySvgIcon from '@singularity/core/SingularitySvgIcon';
import clsx from 'clsx';
import { motion } from 'motion/react';
import PageBreadcrumb from 'src/components/PageBreadcrumb';
import ModernPricingCard from './ModernPricingCard';
import ModernPricingFeatureItem from './ModernPricingFeatureItem';
import ModernPricingItemType from './ModernPricingItemType';

/**
 * The modern pricing page.
 */
function ModernPricingPage() {
    const [period, setPeriod] = useState<ModernPricingItemType['period']>('month');

    const container = {
        show: {
            transition: {
                staggerChildren: 0.04
            }
        }
    };

    const item = {
        hidden: { opacity: 0, y: 100 },
        show: { opacity: 1, y: 0 }
    };

    return (
        <div className="relative flex min-w-0 flex-auto flex-col overflow-hidden">
            <div className="relative overflow-hidden px-6 pb-12 pt-8 sm:px-16 sm:pb-24 sm:pt-20">
                <svg
                    className="pointer-events-none absolute inset-0 -z-1"
                    viewBox="0 0 960 540"
                    width="100%"
                    height="100%"
                    preserveAspectRatio="xMidYMax slice"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <Box
                        component="g"
                        sx={{ color: 'divider' }}
                        className="opacity-20"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="100"
                    >
                        <circle
                            r="234"
                            cx="196"
                            cy="23"
                        />
                        <circle
                            r="234"
                            cx="790"
                            cy="491"
                        />
                    </Box>
                </svg>
                <div className="flex flex-col items-center">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1, transition: { delay: 0.05 } }}
                    >
                        <PageBreadcrumb />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0, transition: { delay: 0.1 } }}
                    >
                        <div className="mt-1 text-center text-4xl font-extrabold leading-[1.25] tracking-tight sm:text-7xl">
                            Boost your productivity today
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1, transition: { delay: 0.15 } }}
                    >
                        <Typography
                            className="mt-3 text-center tracking-tight sm:text-2xl"
                            color="text.secondary"
                        >
                            Begin with a free plan and upgrade as needed.
                            <br />
                            Manage everything effortlessly.
                        </Typography>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1, transition: { delay: 0.2 } }}
                    >
                        <Box
                            className="mt-8 flex items-center overflow-hidden rounded-full p-0.5 sm:mt-16"
                            sx={{ backgroundColor: (theme) => darken(theme.palette.background.default, 0.05) }}
                        >
                            <Box
                                component="button"
                                className={clsx(
                                    'h-9 cursor-pointer items-center rounded-full px-4 font-medium',
                                    period === 'year' && 'shadow-sm'
                                )}
                                onClick={() => setPeriod('year')}
                                sx={[
                                    period === 'year'
                                        ? {
                                                backgroundColor: 'background.paper'
                                            }
                                        : {
                                                backgroundColor: ''
                                            }
                                ]}
                                type="button"
                            >
                                Yearly billing
                            </Box>
                            <Box
                                component="button"
                                className={clsx(
                                    'h-9 cursor-pointer items-center rounded-full px-4 font-medium',
                                    period === 'month' && 'shadow-sm'
                                )}
                                onClick={() => setPeriod('month')}
                                sx={[
                                    period === 'month'
                                        ? {
                                                backgroundColor: 'background.paper'
                                            }
                                        : {
                                                backgroundColor: ''
                                            }
                                ]}
                                type="button"
                            >
                                Monthly billing
                            </Box>
                        </Box>
                    </motion.div>
                </div>
                <div className="mt-10 flex justify-center sm:mt-20">
                    <div className="container">
                        <motion.div
                            variants={container}
                            initial="hidden"
                            animate="show"
                            className="grid grid-cols-1 gap-y-1.5 md:grid-cols-2 md:gap-x-6 lg:grid-cols-3 lg:gap-y-0"
                        >
                            <motion.div variants={item}>
                                <ModernPricingCard
                                    period={period}
                                    title="Personal"
                                    subtitle="Ideal for individuals or small teams looking to grow"
                                    yearlyPrice="$9.00"
                                    monthlyPrice="$6.00"
                                    buttonTitle="Get Started"
                                    details={
                                        <div className="mt-12 flex flex-col">
                                            <Typography className="font-semibold">Main features included:</Typography>
                                            <div className="mt-4 space-y-2">
                                                <div className="flex">
                                                    <SingularitySvgIcon
                                                        className="text-green-600"
                                                        size={20}
                                                    >
                                                        heroicons-solid:check
                                                    </SingularitySvgIcon>
                                                    <Typography className="ml-0.5 leading-5">
                                                        <b>10</b> projects
                                                    </Typography>
                                                </div>
                                                <div className="flex">
                                                    <SingularitySvgIcon
                                                        className="text-green-600"
                                                        size={20}
                                                    >
                                                        heroicons-solid:check
                                                    </SingularitySvgIcon>
                                                    <Typography className="ml-0.5 leading-5">
                                                        <b>5GB</b> storage
                                                    </Typography>
                                                </div>
                                                <div className="flex">
                                                    <SingularitySvgIcon
                                                        className="text-green-600"
                                                        size={20}
                                                    >
                                                        heroicons-solid:check
                                                    </SingularitySvgIcon>
                                                    <Typography className="ml-0.5 leading-5">Analytics</Typography>
                                                </div>
                                                <div className="flex">
                                                    <SingularitySvgIcon
                                                        className="text-green-600"
                                                        size={20}
                                                    >
                                                        heroicons-solid:check
                                                    </SingularitySvgIcon>
                                                    <Typography className="ml-0.5 leading-5">
                                                        Free mobile app
                                                    </Typography>
                                                </div>
                                                <div className="flex">
                                                    <SingularitySvgIcon
                                                        className="text-green-600"
                                                        size={20}
                                                    >
                                                        heroicons-solid:check
                                                    </SingularitySvgIcon>
                                                    <Typography className="ml-0.5 leading-5">
                                                        Community forums
                                                    </Typography>
                                                </div>
                                            </div>
                                        </div>
                                    }
                                />
                            </motion.div>
                            <motion.div variants={item}>
                                <ModernPricingCard
                                    period={period}
                                    title="Premium"
                                    subtitle="Great for expanding teams seeking greater control"
                                    yearlyPrice="$12.00"
                                    monthlyPrice="$15.00"
                                    buttonTitle="Start a free 14-day trial"
                                    details={
                                        <div className="mt-12 flex flex-col">
                                            <Typography className="font-semibold">Personal plan, plus:</Typography>
                                            <div className="mt-4 space-y-2">
                                                <div className="flex">
                                                    <SingularitySvgIcon
                                                        className="text-green-600"
                                                        size={20}
                                                    >
                                                        heroicons-solid:check
                                                    </SingularitySvgIcon>
                                                    <Typography className="ml-0.5 leading-5">
                                                        <b>Unlimited</b> projects
                                                    </Typography>
                                                </div>
                                                <div className="flex">
                                                    <SingularitySvgIcon
                                                        className="text-green-600"
                                                        size={20}
                                                    >
                                                        heroicons-solid:check
                                                    </SingularitySvgIcon>
                                                    <Typography className="ml-0.5 leading-5">
                                                        <b>Unlimited</b> storage
                                                    </Typography>
                                                </div>
                                                <div className="flex">
                                                    <SingularitySvgIcon
                                                        className="text-green-600"
                                                        size={20}
                                                    >
                                                        heroicons-solid:check
                                                    </SingularitySvgIcon>
                                                    <Typography className="ml-0.5 leading-5">Custom domains</Typography>
                                                </div>
                                                <div className="flex">
                                                    <SingularitySvgIcon
                                                        className="text-green-600"
                                                        size={20}
                                                    >
                                                        heroicons-solid:check
                                                    </SingularitySvgIcon>
                                                    <Typography className="ml-0.5 leading-5">Bulk editing</Typography>
                                                </div>
                                                <div className="flex">
                                                    <SingularitySvgIcon
                                                        className="text-green-600"
                                                        size={20}
                                                    >
                                                        heroicons-solid:check
                                                    </SingularitySvgIcon>
                                                    <Typography className="ml-0.5 leading-5">12/5 support</Typography>
                                                </div>
                                            </div>
                                        </div>
                                    }
                                    isPopular
                                />
                            </motion.div>
                            <motion.div variants={item}>
                                <ModernPricingCard
                                    period={period}
                                    title="Enterprise"
                                    subtitle="Ideal for businesses needing advanced tools and support"
                                    yearlyPrice="$49.00"
                                    monthlyPrice="$69.00"
                                    buttonTitle="Start a free 7-day trial"
                                    details={
                                        <div className="mt-12 flex flex-col">
                                            <Typography className="font-semibold">Premium plan, plus:</Typography>
                                            <div className="mt-4 space-y-2">
                                                <div className="flex">
                                                    <SingularitySvgIcon
                                                        className="text-green-600"
                                                        size={20}
                                                    >
                                                        heroicons-solid:check
                                                    </SingularitySvgIcon>
                                                    <Typography className="ml-0.5 leading-5">
                                                        <b>Dedicated</b> hardware
                                                    </Typography>
                                                </div>
                                                <div className="flex">
                                                    <SingularitySvgIcon
                                                        className="text-green-600"
                                                        size={20}
                                                    >
                                                        heroicons-solid:check
                                                    </SingularitySvgIcon>
                                                    <Typography className="ml-0.5 leading-5">
                                                        <b>99.9%</b> uptime
                                                    </Typography>
                                                </div>
                                                <div className="flex">
                                                    <SingularitySvgIcon
                                                        className="text-green-600"
                                                        size={20}
                                                    >
                                                        heroicons-solid:check
                                                    </SingularitySvgIcon>
                                                    <Typography className="ml-0.5 leading-5">
                                                        Advanced analytics
                                                    </Typography>
                                                </div>
                                                <div className="flex">
                                                    <SingularitySvgIcon
                                                        className="text-green-600"
                                                        size={20}
                                                    >
                                                        heroicons-solid:check
                                                    </SingularitySvgIcon>
                                                    <Typography className="ml-0.5 leading-5">
                                                        Third-party integrations
                                                    </Typography>
                                                </div>
                                                <div className="flex">
                                                    <SingularitySvgIcon
                                                        className="text-green-600"
                                                        size={20}
                                                    >
                                                        heroicons-solid:check
                                                    </SingularitySvgIcon>
                                                    <Typography className="ml-0.5 leading-5">24/7 support</Typography>
                                                </div>
                                            </div>
                                        </div>
                                    }
                                />
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col items-center px-6 pb-8 pt-3 sm:px-16 sm:pb-20 sm:pt-18">
                <div className="container">
                    <div>
                        <Typography className="text-4xl font-extrabold leading-[1.25] tracking-tight">
                            Common Questions Answered
                        </Typography>
                        <Typography
                            className="mt-2 max-w-3xl text-xl"
                            color="text.secondary"
                        >
                            Explore answers to frequently asked questions to help you get started.
                        </Typography>
                    </div>
                    <div className="mt-12 grid w-full grid-cols-1 gap-x-6 gap-y-12 sm:mt-16 sm:grid-cols-2 lg:gap-x-16">
                        <div>
                            <Typography className="text-xl font-semibold">
                                How long is the free trial?
                            </Typography>
                            <Typography
                                className="mt-2 leading-6"
                                color="text.secondary"
                            >
                                Try our app free for 14 days. Extend your trial to 30 days by adding payment details, giving you 16 additional days to explore.
                            </Typography>
                        </div>
                        <div>
                            <Typography className="text-xl font-semibold">
                                Are discounts available for non-profits or education?
                            </Typography>
                            <Typography
                                className="mt-0.5 leading-6"
                                color="text.secondary"
                            >
                                Yes, non-profits and educational users can access our Personal and Premium plans for free. Start a free trial and email us your details to qualify for an upgrade.
                            </Typography>
                        </div>
                        <div>
                            <Typography className="text-xl font-semibold">
                                What is the storage used for?
                            </Typography>
                            <Typography
                                className="mt-2 leading-6"
                                color="text.secondary"
                            >
                                Our detailed reporting and analytics tools require significant storage. The Personal plan’s project limits typically prevent storage issues.
                            </Typography>
                            <Typography
                                className="mt-2 leading-6"
                                color="text.secondary"
                            >
                                If you run out of space, contact us to optimize your reports and analytics data usage.
                            </Typography>
                        </div>
                        <div>
                            <Typography className="text-xl font-semibold">
                                What if I’m not satisfied?
                            </Typography>
                            <Typography
                                className="mt-2 leading-6"
                                color="text.secondary"
                            >
                                Cancel anytime during the free trial with one click. If you’ve paid for the first month, we offer a 30-day money-back guarantee, no questions asked.
                            </Typography>
                            <Typography
                                className="mt-2 leading-6"
                                color="text.secondary"
                            >
                                After the first month, cancel anytime, and we’ll refund the unused portion of that month’s payment.
                            </Typography>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ModernPricingPage;