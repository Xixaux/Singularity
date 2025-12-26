'use client';

import { motion } from 'motion/react';
import ExpensesDistributionWidget from './widgets/ExpensesDistributionWidget';
import WeeklyExpensesWidget from './widgets/WeeklyExpensesWidget';
import MonthlyExpensesWidget from './widgets/MonthlyExpensesWidget';
import YearlyExpensesWidget from './widgets/YearlyExpensesWidget';
import ExpensesDetailsWidget from './widgets/ExpensesDetailsWidget';

/**
 * The ExpensesTab component.
 */
function ExpensesTab() {
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

    return (
        <motion.div
            className="grid grid-cols-1 sm:grid-cols-6 gap-6 w-full min-w-0 py-6 px-6 md:px-8"
            variants={container}
            initial="hidden"
            animate="show"
        >
            <div className="sm:col-span-3 lg:col-span-2 grid grid-cols-1 gap-y-6">
                <motion.div
                    variants={item}
                    className="sm:col-span-2"
                >
                    <WeeklyExpensesWidget />
                </motion.div>
                <motion.div
                    variants={item}
                    className="sm:col-span-2"
                >
                    <MonthlyExpensesWidget />
                </motion.div>
                <motion.div
                    variants={item}
                    className="sm:col-span-2"
                >
                    <YearlyExpensesWidget />
                </motion.div>
            </div>
            <motion.div
                variants={item}
                className="sm:col-span-3 lg:col-span-4"
            >
                <ExpensesDistributionWidget />
            </motion.div>
            <motion.div
                variants={item}
                className="sm:col-span-6"
            >
                <ExpensesDetailsWidget />
            </motion.div>
        </motion.div>
    );
}

export default ExpensesTab;