import SingularityHighlight from '@singularity/core/SingularityHighlight';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

/**
 * Development Server Doc
 * This document provides information on how to run the development server.
 */
function DevelopmentServerDoc() {
    return (
        <>
            <Typography
                variant="h4"
                className="mb-10 font-bold"
            >
                Starting the Development Server
            </Typography>

            <Typography
                className="mb-4"
                component="p"
            >
                From your workspace directory, run the following command in your terminal:
            </Typography>

            <SingularityHighlight
                component="pre"
                className="language-bash my-4"
            >
                {` npm run dev `}
            </SingularityHighlight>

            <Typography
                className="mb-4"
                component="p"
            >
                That’s all you need. The system will handle the rest and launch the Singularity React server.
            </Typography>

            <Typography
                className="mb-4"
                component="p"
            >
                You can view additional server details in your terminal. By default, the server runs at <b>http://localhost:3000</b>, though this may vary based on your configuration.
            </Typography>

            <Typography
                className="mb-4"
                component="p"
            >
                For further details on the Next.js App Router and development server, consult the{' '}
                <Link
                    href="https://nextjs.org/docs/app/api-reference/next-cli#development"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    official Next.js documentation
                </Link>
                .
            </Typography>

            <div className="my-6 px-6 py-4 border-1 border-red-500 rounded-xl">
                <Typography className="mb-2 font-medium text-lg text-red-500">Important:</Typography>
                <Typography component="div">
                    If you encounter runtime errors on the initial run, ensure you’re using an LTS version of Node.js and that all dependencies are properly installed. If problems continue, try removing the node_modules folder and executing `npm install` again.
                </Typography>
            </div>
        </>
    );
}

export default DevelopmentServerDoc;