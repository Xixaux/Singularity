'use client';

import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { motion } from 'motion/react';
import PageBreadcrumb from 'src/components/PageBreadcrumb';
import SinglePricingFeatureItem from './SinglePricingFeatureItem';
import SinglePricingCard from './SinglePricingCard';

/**
 * The single pricing page.
 */
function SinglePricingPage() {
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
                            Enhance your productivity now
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
                            Streamline your workflow effortlessly.
                        </Typography>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0, transition: { delay: 0.1 } }}
                        className="mt-10 flex justify-center sm:mt-20"
                    >
                        <SinglePricingCard />
                    </motion.div>
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
                            Find answers to common questions to help you get started.
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
                                Try our app free for 14 days. Add payment details to extend your trial to 30 days, gaining an extra 16 days to explore.
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
                                Yes, non-profits and educational users can access our plans for free. Start a free trial and email us your details to qualify for an upgrade.
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
                                Our detailed reporting and analytics tools require significant storage. The plan’s project limits typically prevent storage issues.
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

export default SinglePricingPage;