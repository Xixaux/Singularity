// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
'use client';

import SingularityExample from '@singularity/core/SingularityExample';
import SingularityHighlight from '@singularity/core/SingularityHighlight';
import SingularitySvgIcon from '@singularity/core/SingularitySvgIcon';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ButtonAppBarComponent from '../../components/app-bar/ButtonAppBar';
import ButtonAppBarRaw from '../../components/app-bar/ButtonAppBar.tsx?raw';
import MenuAppBarComponent from '../../components/app-bar/MenuAppBar';
import MenuAppBarRaw from '../../components/app-bar/MenuAppBar.tsx?raw';
import ResponsiveAppBarComponent from '../../components/app-bar/ResponsiveAppBar';
import ResponsiveAppBarRaw from '../../components/app-bar/ResponsiveAppBar.tsx?raw';
import SearchAppBarComponent from '../../components/app-bar/SearchAppBar';
import SearchAppBarRaw from '../../components/app-bar/SearchAppBar.tsx?raw';
import DrawerAppBarComponent from '../../components/app-bar/DrawerAppBar';
import DrawerAppBarRaw from '../../components/app-bar/DrawerAppBar.tsx?raw';
import PrimarySearchAppBarComponent from '../../components/app-bar/PrimarySearchAppBar';
import PrimarySearchAppBarRaw from '../../components/app-bar/PrimarySearchAppBar.tsx?raw';
import DenseAppBarComponent from '../../components/app-bar/DenseAppBar';
import DenseAppBarRaw from '../../components/app-bar/DenseAppBar.tsx?raw';
import ProminentAppBarComponent from '../../components/app-bar/ProminentAppBar';
import ProminentAppBarRaw from '../../components/app-bar/ProminentAppBar.tsx?raw';
import BottomAppBarComponent from '../../components/app-bar/BottomAppBar';
import BottomAppBarRaw from '../../components/app-bar/BottomAppBar.tsx?raw';
import HideAppBarComponent from '../../components/app-bar/HideAppBar';
import HideAppBarRaw from '../../components/app-bar/HideAppBar.tsx?raw';
import ElevateAppBarComponent from '../../components/app-bar/ElevateAppBar';
import ElevateAppBarRaw from '../../components/app-bar/ElevateAppBar.tsx?raw';
import BackToTopComponent from '../../components/app-bar/BackToTop';
import BackToTopRaw from '../../components/app-bar/BackToTop.tsx?raw';
import EnableColorOnDarkAppBarComponent from '../../components/app-bar/EnableColorOnDarkAppBar';
import EnableColorOnDarkAppBarRaw from '../../components/app-bar/EnableColorOnDarkAppBar.tsx?raw';

function AppBarDoc(props) {
    return (
        <>
            <Button
                className="normal-case absolute right-0 not-prose"
                variant="contained"
                color="secondary"
                component="a"
                href="https://mui.com/components/app-bar"
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
                App Bar
            </Typography>
            <Typography className="description">
                The App Bar presents information and actions relevant to the active screen.
            </Typography>

            <Typography
                className="text-base mb-8"
                component="div"
            >
                The top App Bar offers content and actions tied to the current view. It serves purposes like branding, displaying screen titles, facilitating navigation, and providing action options.
            </Typography>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                It can adapt into a contextual action bar or function as a navigation bar.
            </Typography>
            <Typography
                className="text-3xl mt-6 mb-2.5 font-bold"
                component="h2"
            >
                Basic App bar
            </Typography>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                <SingularityExample
                    name="ButtonAppBar.js"
                    className="my-4"
                    iframe={false}
                    component={ButtonAppBarComponent}
                    raw={ButtonAppBarRaw}
                />
            </Typography>
            <Typography
                className="text-3xl mt-6 mb-2.5 font-bold"
                component="h2"
            >
                App bar with menu
            </Typography>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                <SingularityExample
                    name="MenuAppBar.js"
                    className="my-4"
                    iframe={false}
                    component={MenuAppBarComponent}
                    raw={MenuAppBarRaw}
                />
            </Typography>
            <Typography
                className="text-3xl mt-6 mb-2.5 font-bold"
                component="h2"
            >
                App bar with responsive menu
            </Typography>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                <SingularityExample
                    name="ResponsiveAppBar.js"
                    className="my-4"
                    iframe={false}
                    component={ResponsiveAppBarComponent}
                    raw={ResponsiveAppBarRaw}
                />
            </Typography>
            <Typography
                className="text-3xl mt-6 mb-2.5 font-bold"
                component="h2"
            >
                App bar with search field
            </Typography>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                A sidebar-integrated search bar.
            </Typography>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                <SingularityExample
                    name="SearchAppBar.js"
                    className="my-4"
                    iframe={false}
                    component={SearchAppBarComponent}
                    raw={SearchAppBarRaw}
                />
            </Typography>
            <Typography
                className="text-3xl mt-6 mb-2.5 font-bold"
                component="h2"
            >
                Responsive App bar with Drawer
            </Typography>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                <SingularityExample
                    name="DrawerAppBar.js"
                    className="my-4"
                    iframe
                    component={DrawerAppBarComponent}
                    raw={DrawerAppBarRaw}
                />
            </Typography>
            <Typography
                className="text-3xl mt-6 mb-2.5 font-bold"
                component="h2"
            >
                App bar with a primary search field
            </Typography>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                A prominently featured search bar.
            </Typography>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                <SingularityExample
                    name="PrimarySearchAppBar.js"
                    className="my-4"
                    iframe={false}
                    component={PrimarySearchAppBarComponent}
                    raw={PrimarySearchAppBarRaw}
                />
            </Typography>
            <Typography
                className="text-3xl mt-6 mb-2.5 font-bold"
                component="h2"
            >
                Dense (desktop only)
            </Typography>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                <SingularityExample
                    name="DenseAppBar.js"
                    className="my-4"
                    iframe={false}
                    component={DenseAppBarComponent}
                    raw={DenseAppBarRaw}
                />
            </Typography>
            <Typography
                className="text-3xl mt-6 mb-2.5 font-bold"
                component="h2"
            >
                Prominent
            </Typography>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                An emphasized app bar design.
            </Typography>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                <SingularityExample
                    name="ProminentAppBar.js"
                    className="my-4"
                    iframe={false}
                    component={ProminentAppBarComponent}
                    raw={ProminentAppBarRaw}
                />
            </Typography>
            <Typography
                className="text-3xl mt-6 mb-2.5 font-bold"
                component="h2"
            >
                Bottom App bar
            </Typography>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                <SingularityExample
                    name="BottomAppBar.js"
                    className="my-4"
                    iframe
                    component={BottomAppBarComponent}
                    raw={BottomAppBarRaw}
                />
            </Typography>
            <Typography
                className="text-3xl mt-6 mb-2.5 font-bold"
                component="h2"
            >
                Fixed placement
            </Typography>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                When the app bar is set to a fixed position, its size does not affect the layout of the remaining page content. This may cause some content to be hidden behind the app bar. Here are three potential solutions:
            </Typography>
            <ol>
                <li>
                    You can use <code>{`position="sticky"`}</code> instead of fixed.
                </li>
                <li>
                    You can render a second <code>{`<Toolbar />`}</code> component:
                </li>
            </ol>

            <SingularityHighlight
                component="pre"
                className="language-jsx"
            >
                {` 
function App() {
  return (
    <React.Fragment>
      <AppBar position="fixed">
        <Toolbar>{/* content */}</Toolbar>
      </AppBar>
      <Toolbar />
    </React.Fragment>
  );
}
`}
            </SingularityHighlight>
            <ol start={3}>
                <li>
                    You can use <code>theme.mixins.toolbar</code> CSS:
                </li>
            </ol>

            <SingularityHighlight
                component="pre"
                className="language-jsx"
            >
                {` 
const Offset = styled('div')(({ theme }) => theme.mixins.toolbar);

function App() {
  return (
    <React.Fragment>
      <AppBar position="fixed">
        <Toolbar>{/* content */}</Toolbar>
      </AppBar>
      <Offset />
    </React.Fragment>
  );
}
`}
            </SingularityHighlight>
            <Typography
                className="text-3xl mt-6 mb-2.5 font-bold"
                component="h2"
            >
                Scrolling
            </Typography>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                The <code>useScrollTrigger()</code> hook enables dynamic responses to user scrolling actions.
            </Typography>
            <Typography
                className="text-lg mt-5 mb-2.5 font-bold"
                component="h3"
            >
                Hide App bar
            </Typography>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                The app bar conceals itself when scrolling down to maximize space for content viewing.
            </Typography>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                <SingularityExample
                    name="HideAppBar.js"
                    className="my-4"
                    iframe
                    component={HideAppBarComponent}
                    raw={HideAppBarRaw}
                />
            </Typography>
            <Typography
                className="text-lg mt-5 mb-2.5 font-bold"
                component="h3"
            >
                Elevate App bar
            </Typography>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                The app bar elevates during scrolling to indicate that the user is not at the top of the page.
            </Typography>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                <SingularityExample
                    name="ElevateAppBar.js"
                    className="my-4"
                    iframe
                    component={ElevateAppBarComponent}
                    raw={ElevateAppBarRaw}
                />
            </Typography>
            <Typography
                className="text-lg mt-5 mb-2.5 font-bold"
                component="h3"
            >
                Back to top
            </Typography>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                A floating action button appears during scrolling to facilitate quick navigation back to the page's top.
            </Typography>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                <SingularityExample
                    name="BackToTop.js"
                    className="my-4"
                    iframe
                    component={BackToTopComponent}
                    raw={BackToTopRaw}
                />
            </Typography>
            <Typography
                className="text-lg mt-5 mb-2.5 font-bold"
                component="h3"
            >
                <code>{`useScrollTrigger([options]) => trigger`}</code
            >
            </Typography>
            <Typography
                className="text-base mt-3 mb-2.5"
                component="h4"
            >
                Arguments
            </Typography>
            <ol>
                <li>
                    <Typography
                        className="text-base mb-8"
                        component="div"
                    >
                        <code>options</code> (<em>object</em> [optional]):
                    </Typography>
                    <ul className="space-y-4">
                        <li>
                            <code>options.disableHysteresis</code> (<em>bool</em> [optional]): Defaults to <code>false</code>. Disables hysteresis, ignoring scroll direction when determining the <code>trigger</code> value.
                        </li>
                        <li>
                            <code>options.target</code> (<em>Node</em> [optional]): Defaults to <code>window</code>.
                        </li>
                        <li>
                            <code>options.threshold</code> (<em>number</em> [optional]): Defaults to <code>100</code>. Adjusts the <code>trigger</code> value when the vertical scroll crosses this threshold (exclusive).
                        </li>
                    </ul>
                </li>
            </ol>
            <Typography
                className="text-base mt-3 mb-2.5"
                component="h4"
            >
                Returns
            </Typography>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                <code>trigger</code>: Indicates whether the scroll position meets the specified criteria.
            </Typography>
            <Typography
                className="text-base mt-3 mb-2.5"
                component="h4"
            >
                Examples
            </Typography>

            <SingularityHighlight
                component="pre"
                className="language-jsx"
            >
                {` 
import useScrollTrigger from '@mui/material/useScrollTrigger';

function HideOnScroll(props) {
  const trigger = useScrollTrigger();
  return (
    <Slide in={!trigger}>
      <div>Hello</div>
    </Slide>
  );
}
`}
            </SingularityHighlight>
            <Typography
                className="text-3xl mt-6 mb-2.5 font-bold"
                component="h2"
            >
                Enable color on dark
            </Typography>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                In accordance with <a href="https://m2.material.io/design/color/dark-theme.html">Material Design guidelines</a>, the <code>color</code> prop does not alter the app bar's appearance in dark mode. You can override this by setting the <code>enableColorOnDark</code> prop to <code>true</code>.
            </Typography>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                <SingularityExample
                    name="EnableColorOnDarkAppBar.js"
                    className="my-4"
                    iframe={false}
                    component={EnableColorOnDarkAppBarComponent}
                    raw={EnableColorOnDarkAppBarRaw}
                />
            </Typography>
        </>
    );
}

export default AppBarDoc;