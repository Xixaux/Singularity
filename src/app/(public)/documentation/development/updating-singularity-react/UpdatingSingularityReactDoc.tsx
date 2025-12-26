import Typography from '@mui/material/Typography';

/**
 * Updating Singularity React Doc
 * This document provides information on how to update Singularity React.
 */
function UpdatingSingularityReactDoc() {
    return (
        <>
            <Typography
                variant="h4"
                className="mb-10 font-bold"
            >
                Updating Singularity React
            </Typography>

            <Typography
                className="mb-4"
                component="p"
            >
                Singularity React is not a final product or an extension, so updating the project is not straightforward. Given the unique nature of each application, we cannot provide fixed instructions for updating Singularity React. The process depends heavily on your specific project, and it’s your responsibility to update the codebase. However, we offer a few recommendations to help you maintain an up-to-date Singularity React project:
            </Typography>

            <Typography
                className="my-4"
                component="div"
            >
                <ol>
                    <li className="mb-4">
                        The most critical advice is to avoid modifying the /@singularity directory whenever possible. If changes are unavoidable, keep alterations to a minimum.
                    </li>
                    <li className="mb-4">
                        React and Material UI libraries often introduce breaking changes that require adjustments. In such cases, reviewing their official Changelogs is highly recommended, as they typically provide clear guidance and sometimes include tools to assist with updating your code.
                    </li>
                    <li className="mb-4">
                        Before beginning a new project,{' '}
                        <a
                            href="https://github.com/Xixaux"
                            target="_blank"
                            rel="noreferrer noopener"
                        >
                            join our Github repository
                        </a>
                        , create a fork, and develop your application on top of that fork. This approach allows you to easily compare or merge updates from the main repository into your fork in the future. While this may involve manually resolving many changes, it’s the most effective way to keep Singularity React current.
                    </li>
                </ol>
            </Typography>
        </>
    );
}

export default UpdatingSingularityReactDoc;