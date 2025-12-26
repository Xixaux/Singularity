'use client';

import SingularityExample from '@singularity/core/SingularityExample';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import SingularitySvgIcon from '@singularity/core/SingularitySvgIcon';
import SimpleFormExampleRaw from './examples/SimpleFormExample.tsx?raw';
import SimpleFormExample from './examples/SimpleFormExample';

/**
 * React Hook Form Doc
 * This document provides information on how to use React Hook Form.
 */
function ReactHookFormDoc() {
    return (
        <>
            <div className="flex w-full items-center justify-between mb-6">
                <Typography variant="h4">React Hook Form</Typography>

                <Button
                    variant="contained"
                    color="secondary"
                    component="a"
                    href="http://react-hook-form.com"
                    target="_blank"
                    role="button"
                    startIcon={<SingularitySvgIcon size={16}>heroicons-outline:arrow-top-right-on-square</SingularitySvgIcon>}
                    className="not-prose"
                >
                    Reference
                </Button>
            </div>
            <Typography
                className="mb-4"
                component="p"
            >
                Efficient, adaptable, and scalable forms with straightforward validation.
            </Typography>

            <hr className="not-prose" />

            <Typography
                className="text-5xl mt-8 mb-2"
                component="h2"
            >
                Example Usages
            </Typography>
            <Typography
                className="text-lg mt-8 mb-4"
                component="h4"
            >
                Demonstration of usage with Material-UI components and form validation
            </Typography>

            <SingularityExample
                className="mb-16"
                component={SimpleFormExample}
                raw={SimpleFormExampleRaw}
            />

            <Typography
                className="text-5xl mt-8 mb-2"
                component="h2"
            >
                Demos
            </Typography>

            <ul>
                <li className="mb-2">@/app/(control-panel)/sign-in/SignInPage.tsx</li>
                <li className="mb-2">@/app/(control-panel)/sign-up/SignUpPage.tsx</li>
                <li className="mb-2">.</li>
                <li className="mb-2">.</li>
                <li className="mb-2">.</li>
            </ul>
        </>
    );
}

export default ReactHookFormDoc;