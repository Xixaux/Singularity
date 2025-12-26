import Typography from '@mui/material/Typography';
import Link from '@singularity/core/Link';

/**
 * Navigation Doc
 * This document provides information on how to use the navigation.
 */
function NavigationDoc() {
    return (
        <>
            <Typography
                variant="h4"
                className="mb-10 font-bold"
            >
                Navigation
            </Typography>

            <Typography
                className="mb-6"
                variant="h5"
            >
                Default Navigation Configuration
            </Typography>

            <Typography
                className="mb-4"
                component="p"
            >
                The navigation configuration for the theme is defined in the file <code>src/configs/navigationConfig.ts</code>, which acts as the initial state for the Singularity.navigation Redux store.
            </Typography>

            <Typography
                className="mb-4"
                component="p"
            >
                This configuration establishes the starting state for the Singularity.navigation Redux store.
            </Typography>

            <Typography
                className="mb-4"
                component="p"
            >
                You can add, modify, or remove navigation items using various Redux actions from any part of the application.
            </Typography>

            <Typography
                className="mb-4"
                component="p"
            >
                For detailed information on SingularityNavigation components, Redux actions, and item types, refer to the{' '}
                <Link to="/documentation/singularity-components/singularity-navigation">SingularityNavigation Docs</Link>
            </Typography>
        </>
    );
}

export default NavigationDoc;