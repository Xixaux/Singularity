'use client';

import Typography from '@mui/material/Typography';

/**
 * The TailwindCssUI component page.
 */
function TailwindCssUI() {
    return (
        <>
            <Typography className="text-4xl font-extrabold leading-none tracking-tight mb-10">TailwindCSS</Typography>
            <div className="flex-auto">
                <div>
                    <Typography className="mb-4">
                        According to the official Tailwind CSS website, it is a highly adaptable, low-level CSS framework
                        that provides all the essential building blocks for creating custom designs without the burden
                        of restrictive, opinionated styles that require overriding.
                    </Typography>

                    <Typography className="mb-4">
                        In simple terms, Tailwind offers utility classes for nearly every available CSS rule. Singularity
                        incorporates Tailwind by default, allowing its use throughout the theme.
                    </Typography>

                    <Typography className="text-2xl font-bold mt-8 mb-4">Styling in Material-UI</Typography>

                    <Typography
                        className="mb-4"
                        component="p"
                    >
                        Singularity React is built using Material-UI as its UI library.
                        <a
                            className="mx-1"
                            href="https://mui.com/system/basics/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Material-UI's styling solution
                        </a>
                        relies on Emotion at its core. As a result, Singularity React supports
                        <a
                            className="mx-1"
                            href="http://cssinjs.org/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Emotion
                        </a>{' '}
                        (a library designed for crafting CSS styles using JavaScript).
                    </Typography>
                </div>

                <div>
                    <Typography
                        className="text-2xl font-bold mt-8 mb-4"
                        variant="h5"
                    >
                        Helper Classes with TailwindCSS
                    </Typography>

                    <Typography
                        className="mb-4"
                        component="p"
                    >
                        While we leverage the benefits of JSS, we also value <b>helper classes</b> for their speed,
                        simplicity, and universal accessibility. Therefore, we incorporate both approaches in our components.
                    </Typography>

                    <Typography
                        className="mb-4"
                        component="p"
                    >
                        We utilize
                        <a
                            className="mx-1"
                            href="https://tailwindcss.com"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            TailwindCSS
                        </a>
                        to generate helper classes. It is not a UI kit and is fully customizable. The Tailwind configuration
                        file, named "<b>tailwind.js</b>", can be found in the root directory of Singularity React.
                    </Typography>
                </div>

                <Typography className="text-2xl font-bold mt-8 mb-4">Official docs</Typography>

                <Typography className="my-4">
                    Official Tailwind CSS documentation:
                    <Typography
                        component="a"
                        className="link mx-1"
                        href="https://tailwindcss.com/"
                        rel="noreferrer"
                        target="_blank"
                    >
                        https://tailwindcss.com/
                    </Typography>
                </Typography>
            </div>
        </>
    );
}

export default TailwindCssUI;