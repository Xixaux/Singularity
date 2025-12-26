import SingularityHighlight from '@singularity/core/SingularityHighlight';
import Typography from '@mui/material/Typography';

/**
 * Production Doc
 * This document provides information on how to build the application for production using Next.js App Router.
 */
function ProductionDoc() {
    return (
        <>
            <Typography
                variant="h4"
                className="mb-10 font-bold"
            >
                Production Build
            </Typography>

            <Typography
                className="mb-4"
                component="p"
            >
                The following command compiles the application into an output folder:
            </Typography>

            <SingularityHighlight
                component="pre"
                className="language-bash my-4"
            >
                {` npm run build `}
            </SingularityHighlight>

            <Typography
                className="mb-4"
                component="p"
            >
                This command generates the application files in the <code>.next</code> directory.
            </Typography>

            <Typography
                variant="h6"
                className="mt-8 mb-4"
            >
                Build Output
            </Typography>

            <Typography
                className="mb-4"
                component="p"
            >
                The production build produces optimized assets within the <code>.next</code> folder:
            </Typography>

            <ul>
                <li>HTML files for statically generated pages</li>
                <li>JavaScript bundles for client-side runtime</li>
                <li>Server-side code for handling API routes and server-side rendering</li>
            </ul>

            <Typography
                variant="h6"
                className="mt-8 mb-4"
            >
                Running the Production Build
            </Typography>

            <Typography
                className="mb-4"
                component="p"
            >
                To launch the application in production mode, execute:
            </Typography>

            <SingularityHighlight
                component="pre"
                className="language-bash my-4"
            >
                {` npm run start `}
            </SingularityHighlight>

            <Typography
                className="mb-4"
                component="p"
            >
                This command initiates the Next.js production server.
            </Typography>

            <Typography
                variant="h6"
                className="mt-8 mb-4"
            >
                Environment Variables
            </Typography>

            <Typography
                className="mb-4"
                component="p"
            >
                Make sure all required environment variables are configured for the production environment. Use the{' '}
                <code>.env.production</code> file to define production-specific variables.
            </Typography>

            <Typography
                variant="h6"
                className="mt-8 mb-4"
            >
                Analyzing the Bundle
            </Typography>

            <Typography
                className="mb-4"
                component="p"
            >
                To examine the production bundle size, run:
            </Typography>

            <SingularityHighlight
                component="pre"
                className="language-bash my-4"
            >
                {` ANALYZE=true npm run build `}
            </SingularityHighlight>

            <Typography
                className="mb-4"
                component="p"
            >
                This generates a report to assist in optimizing your application’s bundle size.
            </Typography>
        </>
    );
}

export default ProductionDoc;