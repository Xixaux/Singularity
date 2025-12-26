import Typography from '@mui/material/Typography';

/**
 * Code Splitting Doc
 * This document provides information on how to use code splitting.
 */
function CodeSplittingDoc() {
    return (
        <>
            <Typography
                variant="h4"
                className="mb-10 font-bold"
            >
                Code Splitting
            </Typography>

            <Typography
                className="mb-4"
                component="p"
            >
                Implementing code splitting in your application enables "lazy-loading" of only the necessary content at any given time, greatly enhancing performance. This approach not only avoids loading unnecessary code but also reduces the initial load size.
            </Typography>

            <Typography
                className="text-2xl mt-5 mb-2.5 font-bold"
                variant="h5"
            >
                Comprehensive Guide
            </Typography>

            <Typography
                className="mb-4"
                component="p"
            >
                For detailed instructions, consult our documentation on usage guidelines. Learn about the nuances of lazy-loaded slices by visiting the Redux-Toolkit documentation at{' '}
                <a
                    href="https://redux-toolkit.js.org/api/combineSlices#withlazyloadedslices"
                    target="_blank"
                    rel="noreferrer"
                >
                    Redux-Toolkit Lazy Loaded Slices
                </a>
            </Typography>

            <Typography
                className="mb-4"
                component="p"
            >
                Additionally, explore the details of code splitting for RTK-Query at{' '}
                <a
                    href="https://redux-toolkit.js.org/rtk-query/usage/code-splitting"
                    target="_blank"
                    rel="noreferrer"
                >
                    RTK-Query Code Splitting
                </a>
            </Typography>

            <Typography
                className="mb-4"
                component="p"
            >
                In every Singularity React application, we utilize lazy-loaded slices and RTK-Query to optimize performance and efficiency.
            </Typography>
        </>
    );
}

export default CodeSplittingDoc;