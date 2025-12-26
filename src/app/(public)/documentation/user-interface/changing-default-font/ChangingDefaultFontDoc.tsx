import SingularityHighlight from '@singularity/core/SingularityHighlight';
import Typography from '@mui/material/Typography';

/**
 * Changing Default Font Guide
 * This document outlines the steps to customize the default font in your application.
 */
function ChangingDefaultFontDoc() {
    return (
        <>
            <Typography
                variant="h4"
                className="mb-10 font-bold"
            >
                Changing default font
            </Typography>

            <Typography
                className="mb-4"
                component="p"
            >
                You can implement a custom font-family using one of two approaches.
            </Typography>

            <ul className="list-decimal ml-4">
                <li>
                    <Typography className="mb-6">
                        Incorporate a font link in the head section of the public/index.html file.
                    </Typography>
                    <SingularityHighlight
                        component="pre"
                        className="language-html mb-6"
                    >
                        {`
                          <link href="https://fonts.googleapis.com/css?family=Roboto&subset=vietnamese" rel="stylesheet">
                        `}
                    </SingularityHighlight>
                </li>
                <li>
                    <Typography className="mb-6">
                        Install a typeface font package and import it, as shown in src/index.tsx.
                    </Typography>
                    <SingularityHighlight
                        component="pre"
                        className="language-jsx mb-6"
                    >
                        {`
                            import 'typeface-roboto';
                        `}
                    </SingularityHighlight>
                </li>
            </ul>

            <Typography
                className="mt-4 mb-2"
                component="p"
            >
                Ensure you define <code>typography.fontFamily</code> values within the relevant theme settings at{' '}
                <code>src/configs/themesConfig</code>.
            </Typography>
            <SingularityHighlight
                component="pre"
                className="language-jsx mb-6"
            >
                {`
                    default    : {
                      typography: {
                        fontFamily: [
                            'Roboto',
                            '"Helvetica"',
                            'Arial',
                            'sans-serif'
                        ].join(','),
                `}
            </SingularityHighlight>

            <Typography
                className="mt-4 mb-2"
                component="p"
            >
                The font-family is also specified in <code>src/styles/globals.css</code>.
            </Typography>

            <SingularityHighlight
                component="pre"
                className="language-css mb-6"
            >
                {`
                    html {
                        font-size: 62.5%;
            font-family: 'IBM Plex Sans Var', Inter var, Roboto, Arial, sans-serif;
            background-color: #131304;
            -webkit-font-smoothing: antialiased;
            text-size-adjust: 100%;
                    }
                `}
            </SingularityHighlight>
        </>
    );
}

export default ChangingDefaultFontDoc;