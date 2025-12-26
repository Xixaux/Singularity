'use client';

import SingularitySimpleLayout from '@singularity/core/SingularitySimpleLayout';
import { motion } from 'motion/react';
import Typography from '@mui/material/Typography';
import SingularityLoading from '@singularity/core/SingularityLoading';
import AnalyticsDashboardAppHeader from './AnalyticsDashboardAppHeader';
import VisitorsOverviewWidget from './widgets/VisitorsOverviewWidget';
import ConversionsWidget from './widgets/ConversionsWidget';
import ImpressionsWidget from './widgets/ImpressionsWidget';
import VisitsWidget from './widgets/VisitsWidget';
import VisitorsVsPageViewsWidget from './widgets/VisitorsVsPageViewsWidget';
import VisitorMetricsWidget from './widgets/VisitorMetricsWidget';
import AgeWidget from './widgets/AgeWidget';
import LanguageWidget from './widgets/LanguageWidget';
import GenderWidget from './widgets/GenderWidget';
import { useGetAnalyticsDashboardWidgetsQuery } from './AnalyticsDashboardApi';

const container = {
    show: {
        transition: {
            staggerChildren: 0.04
        }
    }
};

const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
};

/**
 * The analytics dashboard app.
 */
function AnalyticsDashboardApp() {
    const { isLoading } = useGetAnalyticsDashboardWidgetsQuery();

    if (isLoading) {
        return <SingularityLoading />;
    }

    return (
        <SingularitySimpleLayout
            header={<AnalyticsDashboardAppHeader />}
            content={
                <motion.div
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full p-6 md:p-8"
                    variants={container}
                    initial="hidden"
                    animate="show"
                >
                    <motion.div
                        variants={item}
                        className="sm:col-span-2 lg:col-span-3"
                    >
                        <VisitorsOverviewWidget />
                    </motion.div>

                    <div className="w-full mt-4 sm:col-span-3">
                        <Typography className="text-2xl font-semibold tracking-tight leading-6">
                            Your Audience
                        </Typography>
                        <Typography
                            className="font-medium tracking-tight"
                            color="text.secondary"
                        >
                            Demographic properties of your users
                        </Typography>
                    </div>

                    <div className="sm:col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 w-full items-stretch">
                        <motion.div variants={item} className="flex h-full">
                            <VisitorMetricsWidget />
                        </motion.div>
                        <motion.div variants={item} className="flex h-full">
                            <GenderWidget />
                        </motion.div>
                        <motion.div variants={item} className="flex h-full">
                            <AgeWidget />
                        </motion.div>
                        <motion.div variants={item} className="flex h-full">
                            <LanguageWidget />
                        </motion.div>
                    </div>

                    <motion.div
                        variants={item}
                        className="sm:col-span-2 lg:col-span-1"
                    >
                        <ConversionsWidget />
                    </motion.div>

                    <motion.div
                        variants={item}
                        className="sm:col-span-2 lg:col-span-1"
                    >
                        <ImpressionsWidget />
                    </motion.div>

                    <motion.div
                        variants={item}
                        className="sm:col-span-2 lg:col-span-1"
                    >
                        <VisitsWidget />
                    </motion.div>

                    <motion.div
                        variants={item}
                        className="sm:col-span-2 lg:col-span-3"
                    >
                        <VisitorsVsPageViewsWidget />
                    </motion.div>
                </motion.div>
            }
        />
    );
}

export default AnalyticsDashboardApp;