import Typography from '@mui/material/Typography';
import Link from '@singularity/core/Link';

/**
 * Theme Layouts Doc
 * This document provides information on how to use the theme layouts.
 */
function ThemeLayoutsDoc() {
    return (
        <>
            <Typography
                variant="h4"
                className="mb-10 font-bold"
            >
                Theme Layouts
            </Typography>

            <Typography
                className="mb-4"
                component="p"
            >
                Singularity provides a variety of Theme Layouts, which you can explore and experiment with using the configuration sidebar (accessible by clicking the animated, rotating cog icon on the right side of your screen).
            </Typography>

            <Typography
                className="mb-4"
                component="p"
            >
                These layouts reside in the <code>/src/components/theme-layouts</code> directory and can be tailored to your needs. Each layout offers specific settings to modify components such as the Toolbar, Footer, and NavigationBar.
            </Typography>

            <Typography
                className="text-2xl mt-5 mb-2.5 font-bold"
                variant="h5"
            >
                File Structure
            </Typography>

            <Typography
                className="my-4"
                component="div"
            >
                Within the <code>/src/components/theme-layouts</code> directory
                <ul className="my-2 list-disc ml-4">
                    <li className="mb-2">
                        <b>/layout-1</b> :
                        <ul className="my-2 ml-3">
                            <li className="mb-2">
                                <b>/components</b> : Contains layout elements like Toolbar, Footer, and NavigationBar.
                            </li>
                            <li className="mb-2">
                                <b>/Layout1.tsx</b> : Layout 1 component
                            </li>
                            <li className="mb-2">
                                <b>/Layout1.config.tsx</b> : Defines the title, default settings, and form options for the layout.
                            </li>
                        </ul>
                    </li>
                    <li className="mb-2">
                        <b>/components</b> : Common components shared across all layouts in this directory
                    </li>
                    <li className="mb-2">
                        <b>/themeLayoutConfigs.tsx</b> : Imports all layout configurations.
                    </li>
                    <li className="mb-2">
                        <b>/themeLayouts.tsx</b> : Imports all layout components.
                    </li>
                    <li className="mb-2">
                        <b>/layout-2</b>
                    </li>
                    <li className="mb-2">
                        <b>/layout-3</b>
                    </li>
                </ul>
            </Typography>

            <Typography
                className="text-2xl mt-5 mb-2.5 font-bold"
                variant="h5"
            >
                Configuring
            </Typography>

            <Typography
                className="mb-4"
                component="p"
            >
                Singularity React includes a powerful layout system that allows you to assign and customize distinct layouts for each route.
            </Typography>

            <Typography
                className="mb-4"
                component="p"
            >
                Each route can feature unique layout configurations, enabling the creation of pages, such as a login page, without displaying a toolbar or NavigationBarSlice, all within the Singularity React ecosystem.
            </Typography>

            <Typography
                className="mb-4"
                component="p"
            >
                For additional information on configuring routes and their usage, consult{' '}
                <Link to="/documentation/configuration/routing">the Routing documentation page</Link>.
            </Typography>
        </>
    );
}

export default ThemeLayoutsDoc;