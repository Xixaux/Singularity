'use client';

import { useState } from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { darken } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import clsx from 'clsx';
import { motion } from 'motion/react';
import PageBreadcrumb from 'src/components/PageBreadcrumb';
import MinimalistPricingCard from './MinimalistPricingCard';
import MinimalistPricingFeatureItem from './MinimalistPricingFeatureItem';
import MinimalistPricingItemType from './MinimalistPricingItemType';

/**
 * The minimalist pricing page.
 */
function MinimalistPricingPage() {
  const [period, setPeriod] = useState<MinimalistPricingItemType['period']>('month');

  const container = {
    show: {
      transition: {
        staggerChildren: 0.04,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 100 },
    show: { opacity: 1, y: 0 },
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
            <circle r="234" cx="196" cy="23" />
            <circle r="234" cx="790" cy="491" />
          </Box>
        </svg>
        <div className="flex flex-col items-center">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { delay: 0.05 } }}>
            <PageBreadcrumb />
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0, transition: { delay: 0.1 } }}>
            <div className="mt-1 text-center text-4xl font-extrabold leading-[1.25] tracking-tight sm:text-7xl">
              Master Your Productivity
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { delay: 0.15 } }}>
            <Typography className="mt-3 text-center tracking-tight sm:text-2xl" color="text.secondary">
              Begin with a free plan, scale up as needed.
              <br />
              Take charge of your workflow.
            </Typography>
          </motion.div>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { delay: 0.2 } }}>
            <Box
              className="mt-8 flex items-center overflow-hidden rounded-full p-0.5 sm:mt-16"
              sx={{ backgroundColor: (theme) => darken(theme.palette.background.default, 0.05) }}
            >
              <Box
                component="button"
                className={clsx('h-9 cursor-pointer items-center rounded-full px-4 font-medium', period === 'year' && 'shadow-sm')}
                onClick={() => setPeriod('year')}
                sx={[period === 'year' ? { backgroundColor: 'background.paper' } : { backgroundColor: '' }]}
                type="button"
              >
                Yearly Billing
              </Box>
              <Box
                component="button"
                className={clsx('h-9 cursor-pointer items-center rounded-full px-4 font-medium', period === 'month' && 'shadow-sm')}
                onClick={() => setPeriod('month')}
                sx={[period === 'month' ? { backgroundColor: 'background.paper' } : { backgroundColor: '' }]}
                type="button"
              >
                Monthly Billing
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
              className="grid grid-cols-1 items-center gap-y-6 md:grid-cols-2 md:gap-x-6 lg:grid-cols-3 lg:gap-0"
            >
              <motion.div variants={item}>
                <MinimalistPricingCard
                  className="lg:rounded-r-none"
                  period={period}
                  title="Personal"
                  subtitle="Ideal for individuals or small teams expanding"
                  yearlyPrice="$9"
                  monthlyPrice="$6"
                  buttonTitle="Start your trial"
                  details={
                    <div className="mt-8 space-y-2">
                      <Typography className="ml-0.5 leading-5">
                        <b>10</b> projects
                      </Typography>
                      <Typography className="ml-0.5 leading-5">
                        <b>5GB</b> storage
                      </Typography>
                      <Typography className="ml-0.5 leading-5">Analytics</Typography>
                      <Typography className="ml-0.5 leading-5">Free mobile app</Typography>
                      <Typography className="ml-0.5 leading-5">Access to forums</Typography>
                    </div>
                  }
                />
              </motion.div>
              <motion.div variants={item} className="lg:z-99 lg:overflow-visible">
                <MinimalistPricingCard
                  className="lg:pb-28 lg:shadow-2xl"
                  period={period}
                  title="Premium"
                  subtitle="Great for growing teams seeking greater control"
                  yearlyPrice="$12"
                  monthlyPrice="$15"
                  buttonTitle="Start your trial"
                  details={
                    <div className="mt-8 space-y-2">
                      <Typography className="ml-0.5 leading-5">
                        <b>Unlimited</b> projects
                      </Typography>
                      <Typography className="ml-0.5 leading-5">
                        <b>Unlimited</b> storage
                      </Typography>
                      <Typography className="ml-0.5 leading-5">Custom domains</Typography>
                      <Typography className="ml-0.5 leading-5">Bulk editing</Typography>
                      <Typography className="ml-0.5 leading-5">12/5 support</Typography>
                    </div>
                  }
                  isPopular
                />
              </motion.div>
              <motion.div variants={item}>
                <MinimalistPricingCard
                  className="lg:rounded-l-none"
                  period={period}
                  title="Enterprise"
                  subtitle="Suited for companies needing advanced tools and support"
                  yearlyPrice="$49"
                  monthlyPrice="$69"
                  buttonTitle="Start your trial"
                  details={
                    <div className="mt-8 space-y-2">
                      <Typography className="ml-0.5 leading-5">
                        <b>Dedicated</b> hardware
                      </Typography>
                      <Typography className="ml-0.5 leading-5">
                        <b>99.9%</b> uptime
                      </Typography>
                      <Typography className="ml-0.5 leading-5">Advanced analytics</Typography>
                      <Typography className="ml-0.5 leading-5">3rd party integrations</Typography>
                      <Typography className="ml-0.5 leading-5">24/7 support</Typography>
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
            <Typography className="mt-2 max-w-3xl text-xl" color="text.secondary">
              Review these frequently asked questions before getting started.
            </Typography>
          </div>
          <div className="mt-12 grid w-full grid-cols-1 gap-x-6 gap-y-12 sm:mt-16 sm:grid-cols-2 lg:gap-x-16">
            <div>
              <Typography className="text-xl font-semibold">How long is the free trial?</Typography>
              <Typography className="mt-2 leading-6" color="text.secondary">
                Try our app free for 14 days. Add payment details to extend your trial to 30 days for an additional 16 days of access.
              </Typography>
            </div>
            <div>
              <Typography className="text-xl font-semibold">Are discounts available for non-profits or educational use?</Typography>
              <Typography className="mt-0.5 leading-6" color="text.secondary">
                Yes, non-profits and educational users get our Personal and Premium plans free. Email your details after starting your trial, and we’ll upgrade your account if eligible.
              </Typography>
            </div>
            <div>
              <Typography className="text-xl font-semibold">What is the storage used for?</Typography>
              <Typography className="mt-2 leading-6" color="text.secondary">
                Our detailed reporting and analytics tools require significant storage. The Personal plan’s project limits typically prevent running out of space.
              </Typography>
              <Typography className="mt-2 leading-6" color="text.secondary">
                If you run low on space, contact us. We’ll optimize your reports and analytics to avoid unnecessary data usage.
              </Typography>
            </div>
            <div>
              <Typography className="text-xl font-semibold">What if I’m not satisfied?</Typography>
              <Typography className="mt-2 leading-6" color="text.secondary">
                Cancel anytime during the free trial with one click. If you’ve paid for the first month, we offer a 30-day money-back guarantee, no questions asked.
              </Typography>
              <Typography className="mt-2 leading-6" color="text.secondary">
                After the first month, cancel anytime, and we’ll refund the remaining amount based on your usage for that month.
              </Typography>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MinimalistPricingPage;