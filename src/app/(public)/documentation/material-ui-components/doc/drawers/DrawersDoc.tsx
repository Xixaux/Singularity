// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
'use client';

import SingularityExample from '@singularity/core/SingularityExample';
import SingularityHighlight from '@singularity/core/SingularityHighlight';
import SingularitySvgIcon from '@singularity/core/SingularitySvgIcon';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TemporaryDrawerComponent from '../../components/drawers/TemporaryDrawer';
import TemporaryDrawerRaw from '../../components/drawers/TemporaryDrawer.tsx?raw';
import AnchorTemporaryDrawerComponent from '../../components/drawers/AnchorTemporaryDrawer';
import AnchorTemporaryDrawerRaw from '../../components/drawers/AnchorTemporaryDrawer.tsx?raw';
import SwipeableTemporaryDrawerComponent from '../../components/drawers/SwipeableTemporaryDrawer';
import SwipeableTemporaryDrawerRaw from '../../components/drawers/SwipeableTemporaryDrawer.tsx?raw';
import SwipeableEdgeDrawerComponent from '../../components/drawers/SwipeableEdgeDrawer';
import SwipeableEdgeDrawerRaw from '../../components/drawers/SwipeableEdgeDrawer.tsx?raw';
import ResponsiveDrawerComponent from '../../components/drawers/ResponsiveDrawer';
import ResponsiveDrawerRaw from '../../components/drawers/ResponsiveDrawer.tsx?raw';
import PersistentDrawerLeftComponent from '../../components/drawers/PersistentDrawerLeft';
import PersistentDrawerLeftRaw from '../../components/drawers/PersistentDrawerLeft.tsx?raw';
import PersistentDrawerRightComponent from '../../components/drawers/PersistentDrawerRight';
import PersistentDrawerRightRaw from '../../components/drawers/PersistentDrawerRight.tsx?raw';
import MiniDrawerComponent from '../../components/drawers/MiniDrawer';
import MiniDrawerRaw from '../../components/drawers/MiniDrawer.tsx?raw';
import PermanentDrawerLeftComponent from '../../components/drawers/PermanentDrawerLeft';
import PermanentDrawerLeftRaw from '../../components/drawers/PermanentDrawerLeft.tsx?raw';
import PermanentDrawerRightComponent from '../../components/drawers/PermanentDrawerRight';
import PermanentDrawerRightRaw from '../../components/drawers/PermanentDrawerRight.tsx?raw';
import ClippedDrawerComponent from '../../components/drawers/ClippedDrawer';
import ClippedDrawerRaw from '../../components/drawers/ClippedDrawer.tsx?raw';

function DrawersDoc(props) {
    return (
        <>
            <Button
                className="normal-case absolute right-0 not-prose"
                variant="contained"
                color="secondary"
                component="a"
                href="https://mui.com/components/drawers"
                target="_blank"
                role="button"
                size="small"
                startIcon={<SingularitySvgIcon size={16}>heroicons-outline:arrow-top-right-on-square</SingularitySvgIcon>}
            >
                Reference
            </Button>
            <Typography
                className="text-5xl my-4 font-bold"
                component="h1"
            >
                Drawer
            </Typography>
            <Typography className="description">
                Navigation drawers, or sidebars, offer user-friendly access to various sections of a website or app features, such as account switching.
            </Typography>

            <Typography
                className="text-base mb-8"
                component="div"
            >
                A navigation drawer can be permanently visible or toggled via a navigation menu icon.
            </Typography>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                <a href="https://m2.material.io/components/sheets-side">Side sheets</a> are additional surfaces mainly utilized on tablets and desktops.
            </Typography>
            <Typography
                className="text-3xl mt-6 mb-2.5 font-bold"
                component="h2"
            >
                Temporary drawer
            </Typography>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                Temporary navigation drawers can be opened or closed. By default, they are closed and temporarily appear above all other content until a selection is made.
            </Typography>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                The Drawer can be dismissed by clicking the overlay or pressing the Esc key. It closes upon item selection, managed through the <code>open</code> prop.
            </Typography>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                <SingularityExample
                    name="TemporaryDrawer.js"
                    className="my-4"
                    iframe={false}
                    component={TemporaryDrawerComponent}
                    raw={TemporaryDrawerRaw}
                />
            </Typography>
            <Typography
                className="text-lg mt-5 mb-2.5 font-bold"
                component="h3"
            >
                Anchor
            </Typography>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                The <code>anchor</code> prop determines which side of the screen the Drawer emerges from.
            </Typography>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                The default anchor is set to <code>left</code>.
            </Typography>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                <SingularityExample
                    name="AnchorTemporaryDrawer.js"
                    className="my-4"
                    iframe={false}
                    component={AnchorTemporaryDrawerComponent}
                    raw={AnchorTemporaryDrawerRaw}
                />
            </Typography>
            <Typography
                className="text-lg mt-5 mb-2.5 font-bold"
                component="h3"
            >
                Swipeable
            </Typography>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                The <code>SwipeableDrawer</code> component enables swipe gestures to open or close the drawer.
            </Typography>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                This component adds a 2 kB gzipped payload. Some lower-end mobile devices may struggle to track finger movements at 60 FPS. The <code>disableBackdropTransition</code> prop can mitigate this issue.
            </Typography>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                <SingularityExample
                    name="SwipeableTemporaryDrawer.js"
                    className="my-4"
                    iframe={false}
                    component={SwipeableTemporaryDrawerComponent}
                    raw={SwipeableTemporaryDrawerRaw}
                />
            </Typography>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                The following settings are applied on this documentation site to optimize component usability:
            </Typography>
            <ul className="space-y-4">
                <li>
                    iOS devices are typically high-end, allowing the backdrop transition to run smoothly without frame drops, ensuring adequate performance.
                </li>
                <li>
                    iOS includes a "swipe to go back" feature that conflicts with the discovery feature, requiring discovery to be disabled.
                </li>
            </ul>

            <SingularityHighlight
                component="pre"
                className="language-jsx"
            >
                {` 
const iOS =
  typeof navigator !== 'undefined' && /iPad|iPhone|iPod/.test(navigator.userAgent);

<SwipeableDrawer disableBackdropTransition={!iOS} disableDiscovery={iOS} />;
`}
            </SingularityHighlight>
            <Typography
                className="text-lg mt-5 mb-2.5 font-bold"
                component="h3"
            >
                Swipeable edge
            </Typography>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                The <code>SwipeableDrawer</code> can be configured to display a visible edge when in the closed state.
            </Typography>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                On desktop, you can toggle the drawer using the "OPEN" button. On mobile, you can access the demo in CodeSandbox (via the "edit" icon) and swipe to open.
            </Typography>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                <SingularityExample
                    name="SwipeableEdgeDrawer.js"
                    className="my-4"
                    iframe
                    component={SwipeableEdgeDrawerComponent}
                    raw={SwipeableEdgeDrawerRaw}
                />
            </Typography>
            <Typography
                className="text-lg mt-5 mb-2.5 font-bold"
                component="h3"
            >
                Keep mounted
            </Typography>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                The Modal used within the Swipeable Drawer has the <code>keepMounted</code> prop enabled by default, ensuring the drawer's contents remain in the DOM at all times.
            </Typography>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                You can modify this behavior using the <code>ModalProps</code> prop, though setting <code>keepMounted: false</code> may cause issues in React 18.
            </Typography>

            <SingularityHighlight
                component="pre"
                className="language-jsx"
            >
                {` 
<Drawer
  variant="temporary"
  ModalProps={{
    keepMounted: false,
  
/>
`}
            </SingularityHighlight>
            <Typography
                className="text-3xl mt-6 mb-2.5 font-bold"
                component="h2"
            >
                Responsive drawer
            </Typography>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                The <code>temporary</code> variant can be used for small screens, while the <code>permanent</code> variant is suitable for wider screens.
            </Typography>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                <SingularityExample
                    name="ResponsiveDrawer.js"
                    className="my-4"
                    iframe
                    component={ResponsiveDrawerComponent}
                    raw={ResponsiveDrawerRaw}
                />
            </Typography>
            <Typography
                className="text-3xl mt-6 mb-2.5 font-bold"
                component="h2"
            >
                Persistent drawer
            </Typography>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                Persistent navigation drawers can be toggled to open or close. Positioned at the same elevation as the content, they are closed by default and open when the menu icon is selected, remaining open until the user closes them. The drawer's state persists across actions and sessions.
            </Typography>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                When opened outside the page grid, the drawer causes other content to resize and adapt to the reduced viewport space.
            </Typography>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                Persistent navigation drawers are suitable for all screen sizes larger than mobile. They are not advised for applications with multiple hierarchy levels requiring an up arrow for navigation.
            </Typography>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                <SingularityExample
                    name="PersistentDrawerLeft.js"
                    className="my-4"
                    iframe
                    component={PersistentDrawerLeftComponent}
                    raw={PersistentDrawerLeftRaw}
                />
                <SingularityExample
                    name="PersistentDrawerRight.js"
                    className="my-4"
                    iframe
                    component={PersistentDrawerRightComponent}
                    raw={PersistentDrawerRightRaw}
                />
            </Typography>
            <Typography
                className="text-3xl mt-6 mb-2.5 font-bold"
                component="h2"
            >
                Mini variant drawer
            </Typography>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                In this variant, the persistent navigation drawer adjusts its width. In its resting state, it appears as a compact mini-drawer at the same elevation as the content, clipped by the app bar. When expanded, it functions as a standard persistent navigation drawer.
            </Typography>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                The mini variant is ideal for app sections requiring quick access to selections alongside content.
            </Typography>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                <SingularityExample
                    name="MiniDrawer.js"
                    className="my-4"
                    iframe
                    component={MiniDrawerComponent}
                    raw={MiniDrawerRaw}
                />
            </Typography>
            <Typography
                className="text-3xl mt-6 mb-2.5 font-bold"
                component="h2"
            >
                Permanent drawer
            </Typography>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                Permanent navigation drawers remain visible and fixed to the left edge at the same elevation as the content or background, without the option to close them.
            </Typography>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                Permanent navigation drawers are the <strong>recommended default for desktop applications</strong>.
            </Typography>
            <Typography
                className="text-lg mt-5 mb-2.5 font-bold"
                component="h3"
            >
                Full-height navigation
            </Typography>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                Applications centered on information consumption with a left-to-right navigational hierarchy.
            </Typography>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                <SingularityExample
                    name="PermanentDrawerLeft.js"
                    className="my-4"
                    iframe
                    component={PermanentDrawerLeftComponent}
                    raw={PermanentDrawerLeftRaw}
                />
                <SingularityExample
                    name="PermanentDrawerRight.js"
                    className="my-4"
                    iframe
                    component={PermanentDrawerRightComponent}
                    raw={PermanentDrawerRightRaw}
                />
            </Typography>
            <Typography
                className="text-lg mt-5 mb-2.5 font-bold"
                component="h3"
            >
                Clipped under the app bar
            </Typography>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                Applications focused on productivity that require balanced screen space distribution.
            </Typography>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                <SingularityExample
                    name="ClippedDrawer.js"
                    className="my-4"
                    iframe
                    component={ClippedDrawerComponent}
                    raw={ClippedDrawerRaw}
                />
            </Typography>
        </>
    );
}

export default DrawersDoc;