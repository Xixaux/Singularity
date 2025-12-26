import SingularityHighlight from '@singularity/core/SingularityHighlight';
import Typography from '@mui/material/Typography';
import Link from '@singularity/core/Link';

const demos = [
    {
        id: 'full-width',
        title: 'Full Width Overview',
        type: 'item',
        url: '/ui/page-layouts/CardLayout/full-width/overview'
    },
    {
        id: 'with-sidebars',
        title: 'With Sidebars Overview',
        type: 'item',
        url: '/ui/page-layouts/CardLayout/with-sidebars/overview'
    }
];

/**
 * SingularityPageCardLayout Doc
 * This document provides information on how to use the SingularityPageCardLayout.
 */
function SingularityPageCardLayoutDoc() {
    return (
        <>
            <Typography
                variant="h4"
                className="mb-10 font-bold"
            >
                SingularityPageCardLayout
            </Typography>

            <Typography
                className="mb-4"
                component="p"
            >
                <code>SingularityPageCardLayout</code> serves as the CardLayout page layout component for Singularity React.
            </Typography>
            <Typography
                className="mb-6"
                component="p"
            >
                This component provides designated layout areas to seamlessly integrate the app's content.
            </Typography>

            <SingularityHighlight
                component="pre"
                className="language-jsx"
            >
                {`
           <SingularityPageCardLayout
                header={
                    Header
                }
                content={
                    Content
                }
                leftSidebarContent={
                    Left Sidebar Content
                }
                rightSidebarContent={
                    Right Sidebar Content
                }
                scroll="page"
            />
        `}
            </SingularityHighlight>

            <Typography
                className="text-2xl mt-5 mb-2.5 font-bold"
                variant="h5"
            >
                Demos
            </Typography>

            <ul>
                {demos.map((demo) => (
                    <li
                        key={demo.url}
                        className="mb-2"
                    >
                        <Link to={demo.url}>{demo.title}</Link>
                    </li>
                ))}
            </ul>
        </>
    );
}

export default SingularityPageCardLayoutDoc;