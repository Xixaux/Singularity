'use client';

import SingularityHighlight from '@singularity/core/SingularityHighlight';
import Typography from '@mui/material/Typography';
import Link from '@singularity/core/Link';
import AppRaw from '@/app/App.tsx?raw';

/**
 * Theme Layouts Doc
 * This document provides information on how to use theme layouts.
 */
function SingularityThemeDoc() {
    return (
        <>
            <Typography
                variant="h4"
                className="mb-10 font-bold"
            >
                SingularityTheme
            </Typography>

			<Typography
				className="mb-4"
				component="p"
			>
				<code>SingularityTheme</code> acts as the theming component for Singularity React, allowing customization of preconfigured Material UI themes. It must wrap the <code>SingularityLayout</code> component.
			</Typography>

            <Typography
                className="mb-4"
                component="p"
            >
                <code>src/app/App.tsx</code>
            </Typography>

            <SingularityHighlight
                component="pre"
                className="language-jsx"
            >
                {AppRaw}
            </SingularityHighlight>

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
                Please review the
                <Link
                    className="font-normal mx-1"
                    to="/documentation/theming/theme-schemes"
                >
                    theming
                </Link>
                section in the documentation.
            </Typography>
        </>
    );
}

export default SingularityThemeDoc;