import Typography from '@mui/material/Typography';

/**
 * Deployment Doc
 * This document provides information on how to deploy the application.
 */
function DeploymentDoc() {
    return (
        <>
            <Typography
                variant="h4"
                className="mb-10 font-bold"
            >
                Deployment
            </Typography>

            <Typography
                className="mb-4"
                component="p"
            >
                Next.js applications can be deployed to various platforms. Below are two options we’ve validated:
            </Typography>

            <Typography
                variant="h6"
                className="mt-8 mb-4"
            >
                1. Vercel (Default)
            </Typography>

            <Typography
                className="mb-4"
                component="p"
            >
                Vercel, developed by the creators of Next.js, is the primary and preferred platform for deploying Next.js applications.
            </Typography>

            <Typography
                className="mb-4"
                component="p"
            >
                To deploy on Vercel:
            </Typography>

            <ol className="list-decimal space-y-2 ml-4 mb-4">
                <li>Push your code to a Git repository (GitHub, GitLab, or Bitbucket)</li>
                <li>Import your project into Vercel</li>
                <li>Vercel will automatically detect Next.js and configure the build settings</li>
                <li>Deploy with a single click</li>
            </ol>

            <Typography
                className="mb-4"
                component="p"
            >
                Vercel provides features such as automatic HTTPS, CDN integration, continuous deployment, and more.
            </Typography>

            <Typography
                variant="h6"
                className="mt-8 mb-4"
            >
                2. Coolify
            </Typography>

            <Typography
                className="mb-4"
                component="p"
            >
                Coolify is an open-source, self-hosted solution we’ve tested for deploying Next.js applications.
            </Typography>

            <Typography
                className="mb-4"
                component="p"
            >
                To deploy with Coolify:
            </Typography>

            <ol className="list-decimal space-y-2 ml-4 mb-4">
                <li>Set up a Coolify instance on your own server</li>
                <li>Connect your Git repository to Coolify</li>
                <li>
                    Configure the build and start commands:
                    <ul>
                        <li>
                            Build Command: <code>npm run build</code>
                        </li>
                        <li>
                            Start Command: <code>npm run start</code>
                        </li>
                    </ul>
                </li>
                <li>Deploy your application</li>
            </ol>

            <Typography
                className="mb-4"
                component="p"
            >
                Coolify offers features like automatic HTTPS, seamless rollbacks, and database management, all hosted on your infrastructure.
            </Typography>

            <Typography
                className="mt-8 mb-4"
                component="p"
            >
                Regardless of the deployment platform you select, ensure all environment variables are correctly configured and your application is thoroughly tested in a production-like environment prior to deployment.
            </Typography>
        </>
    );
}

export default DeploymentDoc;