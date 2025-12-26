// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
'use client';

import SingularityExample from '@singularity/core/SingularityExample';
import SingularitySvgIcon from '@singularity/core/SingularitySvgIcon';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import FloatingActionButtonsComponent from '../../components/floating-action-button/FloatingActionButtons';
import FloatingActionButtonsRaw from '../../components/floating-action-button/FloatingActionButtons.tsx?raw';
import FloatingActionButtonSizeComponent from '../../components/floating-action-button/FloatingActionButtonSize';
import FloatingActionButtonSizeRaw from '../../components/floating-action-button/FloatingActionButtonSize.tsx?raw';
import FloatingActionButtonExtendedSizeComponent from '../../components/floating-action-button/FloatingActionButtonExtendedSize';
import FloatingActionButtonExtendedSizeRaw from '../../components/floating-action-button/FloatingActionButtonExtendedSize.tsx?raw';
import FloatingActionButtonZoomComponent from '../../components/floating-action-button/FloatingActionButtonZoom';
import FloatingActionButtonZoomRaw from '../../components/floating-action-button/FloatingActionButtonZoom.tsx?raw';

function FloatingActionButtonDoc(props) {
    return (
        <>
            <Button
                className="normal-case absolute right-0 not-prose"
                variant="contained"
                color="secondary"
                component="a"
                href="https://mui.com/components/floating-action-button"
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
                Floating Action Button
            </Typography>
            <Typography className="description">
                A Floating Action Button (FAB) executes the primary or most frequently used action on a screen.
            </Typography>

            <Typography
                className="text-base mb-8"
                component="div"
            >
                A Floating Action Button floats above all screen content, typically as a circular element featuring an icon at its center. FABs are available in two variants: standard and extended.
            </Typography>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                Employ a FAB only when it is the most appropriate method to highlight a screen’s primary action. It’s recommended to use a single FAB per screen to represent the most common action.
            </Typography>
            <Typography
                className="text-3xl mt-6 mb-2.5 font-bold"
                component="h2"
            >
                Basic FAB
            </Typography>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                <SingularityExample
                    name="FloatingActionButtons.js"
                    className="my-4"
                    iframe={false}
                    component={FloatingActionButtonsComponent}
                    raw={FloatingActionButtonsRaw}
                />
            </Typography>
            <Typography
                className="text-3xl mt-6 mb-2.5 font-bold"
                component="h2"
            >
                Size
            </Typography>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                The default size is <code>large</code>. Use the <code>size</code> prop to create smaller floating action buttons.
            </Typography>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                <SingularityExample
                    name="FloatingActionButtonSize.js"
                    className="my-4"
                    iframe={false}
                    component={FloatingActionButtonSizeComponent}
                    raw={FloatingActionButtonSizeRaw}
                />
                <SingularityExample
                    name="FloatingActionButtonExtendedSize.js"
                    className="my-4"
                    iframe={false}
                    component={FloatingActionButtonExtendedSizeComponent}
                    raw={FloatingActionButtonExtendedSizeRaw}
                />
            </Typography>
            <Typography
                className="text-3xl mt-6 mb-2.5 font-bold"
                component="h2"
            >
                Animation
            </Typography>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                By default, the floating action button expands onto the screen as a piece of material.
            </Typography>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                For a floating action button spanning multiple lateral screens (e.g., tabbed interfaces), it should briefly vanish and then reappear if its action changes.
            </Typography>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                The Zoom transition can be applied to achieve this effect. Since both exit and entry animations occur simultaneously, the <code>enterDelay</code> prop is used to ensure the outgoing Floating Action Button’s animation completes before the new one appears.
            </Typography>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                <SingularityExample
                    name="FloatingActionButtonZoom.js"
                    className="my-4"
                    iframe={false}
                    component={FloatingActionButtonZoomComponent}
                    raw={FloatingActionButtonZoomRaw}
                />
            </Typography>
        </>
    );
}

export default FloatingActionButtonDoc;