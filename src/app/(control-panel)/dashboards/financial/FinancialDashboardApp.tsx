'use client';

import SingularitySimpleLayout from '@singularity/core/SingularitySimpleLayout';
import { motion } from 'motion/react';
import SingularityLoading from '@singularity/core/SingularityLoading';
import FinancialDashboardAppHeader from './FinancialDashboardAppHeader';
import PreviousStatementWidget from './widgets/PreviousStatementWidget';
import CurrentStatementWidget from './widgets/CurrentStatementWidget';
import AccountBalanceWidget from './widgets/AccountBalanceWidget';
import RecentTransactionsWidget from './widgets/RecentTransactionsWidget';
import BudgetWidget from './widgets/BudgetWidget'; // Using BudgetWidget as per your latest import
import { useState, useEffect } from 'react';

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
 * The finance dashboard app.
 */
function FinancialDashboardApp() {
    const [widgets, setWidgets] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchWidgets = async () => {
            try {
               
                const response = await new Promise((resolve) => {
                    setTimeout(() => {
                        resolve({ data: {} });
                    }, 1000);
                });
                setWidgets(response.data);
                setIsLoading(false);
            } catch (error) {
                console.error('Error fetching widgets:', error);
                setIsLoading(false);
            }
        };
        fetchWidgets();
    }, []);

    if (isLoading) {
        return <SingularityLoading />;
    }

    if (!widgets) {
        return null;
    }

    return (
        <SingularitySimpleLayout
            header={<FinancialDashboardAppHeader />}
            content={
                <div className="w-full px-6 md:px-8 pb-6">
                    <motion.div
                        className="w-full"
                        variants={container}
                        initial="hidden"
                        animate="show"
                    >
                        {}
                        <div className="grid grid-cols-1 gap-8 w-full mt-8">
                            <motion.div
                                variants={item}
                                className="flex flex-col flex-auto col-span-full"
                            >
                                <AccountBalanceWidget />
                            </motion.div>
                        </div>
                        {}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full mt-8">
                            <motion.div
                                variants={item}
                                className="flex flex-col flex-auto"
                            >
                                <PreviousStatementWidget />
                            </motion.div>
                            <motion.div
                                variants={item}
                                className="flex flex-col flex-auto"
                            >
                                <CurrentStatementWidget />
                            </motion.div>
                        </div>
                        {}
                        <div className="grid grid-cols-1 xl:grid-cols-3 gap-8 w-full mt-8">
                            <motion.div
                                variants={item}
                                className="flex flex-col flex-auto"
                            >
                                <BudgetWidget />
                            </motion.div>
                            <motion.div
                                variants={item}
                                className="xl:col-span-2 flex flex-col flex-auto"
                            >
                                <RecentTransactionsWidget />
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            }
        />
    );
}

export default FinancialDashboardApp;