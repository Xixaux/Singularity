// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
'use client';

import SingularityExample from '@singularity/core/SingularityExample';
import SingularitySvgIcon from '@singularity/core/SingularitySvgIcon';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import SimpleBottomNavigationComponent from '../../components/bottom-navigation/SimpleBottomNavigation';
import SimpleBottomNavigationRaw from '../../components/bottom-navigation/SimpleBottomNavigation.tsx?raw';
import LabelBottomNavigationComponent from '../../components/bottom-navigation/LabelBottomNavigation';
import LabelBottomNavigationRaw from '../../components/bottom-navigation/LabelBottomNavigation.tsx?raw';
import FixedBottomNavigationComponent from '../../components/bottom-navigation/FixedBottomNavigation';
import FixedBottomNavigationRaw from '../../components/bottom-navigation/FixedBottomNavigation.tsx?raw';

function BottomNavigationDoc(props) {
    return (
        <>
            <Button
                className="normal-case absolute right-0 not-prose"
                variant="contained"
                color="secondary"
                component="a"
                href="https://mui.com/components/bottom-navigation"
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
                Bottom Navigation
            </Typography>
            <Typography className="description">
                The Bottom Navigation bar enables navigation between key destinations within an application.
            </Typography>

            <Typography
                className="text-base mb-8"
                component="div"
            >
                Bottom navigation bars present three to five destinations at the screen’s base. Each destination is denoted by an icon and, optionally, a text label. Tapping a bottom navigation icon directs the user to the corresponding top-level navigation destination.
            </Typography>
            <Typography
                className="text-3xl mt-6 mb-2.5 font-bold"
                component="h2"
            >
                Bottom navigation
            </Typography>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                For <strong>three</strong> actions, consistently display both icons and text labels.
            </Typography>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                <SingularityExample
                    name="SimpleBottomNavigation.js"
                    className="my-4"
                    iframe={false}
                    component={SimpleBottomNavigationComponent}
                    raw={SimpleBottomNavigationRaw}
                />
            </Typography>
            <Typography
                className="text-3xl mt-6 mb-2.5 font-bold"
                component="h2"
            >
                Bottom navigation with no label
            </Typography>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                For <strong>four</strong> or <strong>five</strong> actions, show inactive views using only icons.
            </Typography>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                <SingularityExample
                    name="LabelBottomNavigation.js"
                    className="my-4"
                    iframe={false}
                    component={LabelBottomNavigationComponent}
                    raw={LabelBottomNavigationRaw}
                />
            </Typography>
            <Typography
                className="text-3xl mt-6 mb-2.5 font-bold"
                component="h2"
            >
                Fixed positioning
            </Typography>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                This example ensures the bottom navigation remains anchored to the bottom of the screen, regardless of the content volume displayed.
            </Typography>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                <SingularityExample
                    name="FixedBottomNavigation.js"
                    className="my-4"
                    iframe
                    component={FixedBottomNavigationComponent}
                    raw={FixedBottomNavigationRaw}
                />
            </Typography>
            <Typography
                className="text-3xl mt-6 mb-2.5 font-bold"
                component="h2"
            >
                Third-party routing library
            </Typography>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                A common scenario involves client-side navigation without a server round-trip. The <code>BottomNavigationAction</code> component supports this through the <code>component</code> prop. For further details, refer to this <a href="/material-ui/integrations/routing/">comprehensive guide</a>.
            </Typography>
        </>
    );
}

export default BottomNavigationDoc;