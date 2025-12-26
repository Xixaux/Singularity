import SingularityHighlight from '@singularity/core/SingularityHighlight';
import Typography from '@mui/material/Typography';

/*
 * IDEs Doc
 * This document provides information on how to use ESLint and Prettier with Webstorm and Visual Studio Code (VSCode).
 * It includes instructions on how to install and configure the necessary plugins and settings.
 */
function IDEsDoc() {
    return (
        <>
            <Typography
                variant="h4"
                className="mb-10 font-bold"
            >
                IDEs
            </Typography>

            <Typography
                className="text-2xl mb-2.5 font-bold"
                variant="h5"
            >
                Webstorm
            </Typography>

            <Typography
                className="text-lg mt-4 mb-2.5 font-bold"
                variant="h6"
            >
                Using Prettier with ESLint
            </Typography>

            <Typography
                className="mb-4"
                component="p"
            >
                ESLint and Prettier are essential tools for maintaining consistent code formatting and identifying potential issues. In Webstorm, we integrate ESLint with <b>eslint-plugin-prettier</b>. To reformat a file or folder, use the <b>Fix ESLint Problems</b> action, which can be accessed via Find Action (Cmd/Ctrl-Shift-A) or assigned a keyboard shortcut in <b>Preferences | Keymap</b>. Ensure that <b>ESLint integration</b> is activated in <b>Preferences | Languages & Frameworks | JavaScript | Code Quality Tools | ESLint</b>.
            </Typography>

            <Typography
                className="text-2xl mt-5 mb-2.5 font-bold"
                variant="h5"
            >
                Visual Studio Code (VSCode)
            </Typography>

            <Typography
                className="text-lg mt-4 mb-2.5 font-bold"
                variant="h6"
            >
                Using Prettier with ESLint
            </Typography>

            <Typography
                className="mb-4"
                component="p"
            >
                To enable ESLint and Prettier in VSCode, you must install the required extensions through the extension sidebar. Below is an example <b>settings.json</b> configuration that automatically applies fixes when saving a file:
            </Typography>

            <SingularityHighlight
                component="pre"
                className="language-json mb-6"
            >
                {`
                            "editor.defaultFormatter": "esbenp.prettier-vscode",
                            "[javascript]": {
                                "editor.defaultFormatter": "esbenp.prettier-vscode"
                            },
                            "eslint.alwaysShowStatus": true,
                            "editor.formatOnSave": true,
                            "editor.formatOnPaste": true,
                            "eslint.format.enable": true,
                            "editor.codeActionsOnSave": {
                                source.fixAll.eslint": true
                            }
                        `}
            </SingularityHighlight>

            <Typography
                className="mb-4"
                component="p"
            >
                For further configuration of ESLint and Prettier in VSCode, consult the official documentation:
            </Typography>

            <ul className="space-y-3">
                <li>
                    <a
                        href="https://eslint.org/docs/user-guide/getting-started"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        ESLint Getting Started Guide
                    </a>
                </li>
                <li>
                    <a
                        href="https://prettier.io/docs/en/install.html"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Prettier Installation Guide
                    </a>
                </li>
                <li>
                    <a
                        href="https://eslint.org/docs/user-guide/configuring"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        ESLint Configuration Guide
                    </a>
                </li>
                <li>
                    <a
                        href="https://prettier.io/docs/en/configuration.html"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Prettier Configuration Guide
                    </a>
                </li>
            </ul>
        </>
    );
}

export default IDEsDoc;