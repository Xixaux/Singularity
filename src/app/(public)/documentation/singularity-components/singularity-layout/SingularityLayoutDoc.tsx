import Typography from '@mui/material/Typography';
import Link from '@singularity/core/Link';

/**
 * SingularityLayout Doc
 * This document provides information on how to use the SingularityLayout.
 */
function SingularityLayoutDoc() {
    return (
        <>
            <Typography
                variant="h4"
                className="mb-10 font-bold"
            >
                SingularityLayout
            </Typography>

            <Typography
                className="mb-4"
                component="p"
            >
                <code>SingularityLayout</code> serves as the primary layout component for Singularity React. It enables theme layout switching, configuration of layout settings based on default options, and management of routing configurations.
            </Typography>

            <Typography
                className="text-2xl mt-5 mb-2.5 font-bold"
                variant="h5"
            >
                Configuration
            </Typography>

            <Typography
                className="mb-4"
                component="p"
            >
                Please refer to{' '}
                <Link
                    className="font-normal"
                    to="/documentation/theming/theme-layouts"
                >
                    Theme Layouts
                </Link>{' '}
                in the documentation for more details.
            </Typography>
        </>
    );
}

export default SingularityLayoutDoc;