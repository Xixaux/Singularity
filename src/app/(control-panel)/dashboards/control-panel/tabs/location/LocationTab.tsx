'use client';
import { motion } from 'framer-motion';
import LocationDistributionWidget from './widgets/LocationDistributionWidget';
import DestinationPopularityWidget from './widgets/DestinationPopularityWidget';
import TripSummaryWidget from './widgets/TripSummaryWidget';
import TravelExpenseWidget from './widgets/TravelExpenseWidget';
import GoogleMapsAPIWidget from './widgets/GoogleMapsAPIWidget';

/**
 * The AppsTab component.
 */
function AppsTab() {
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
            className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full min-w-0 py-6 px-4 md:px-6"
            variants={container}
            initial="hidden"
            animate="show"
        >
            {/* Google Maps at the top, spanning full width */}
            <motion.div
                variants={item}
                className="sm:col-span-2"
            >
                <GoogleMapsAPIWidget />
            </motion.div>

            {/* Destination Popularity on its own row, spanning full width */}
            <motion.div
                variants={item}
                className="sm:col-span-2"
            >
                <DestinationPopularityWidget />
            </motion.div>

            {/* Left Column (Swapped order: Expense then Summary) */}
            <div
                className="sm:col-span-1 grid grid-cols-1 gap-y-6"
            >
                <motion.div
                    variants={item}
                >
                    {/* Swapped to be on top */}
                    <TravelExpenseWidget /> 
                </motion.div>
                <motion.div
                    variants={item}
                >
                    {/* Swapped to be on the bottom */}
                    <TripSummaryWidget />
                </motion.div>
            </div>

            {/* Location Distribution in the right column */}
            <motion.div
                variants={item}
                className="sm:col-span-1"
            >
                <LocationDistributionWidget />
            </motion.div>
        </motion.div>
    );
}

export default AppsTab;
