// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
'use client';

import SingularityExample from '@singularity/core/SingularityExample';
import SingularitySvgIcon from '@singularity/core/SingularitySvgIcon';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import SimplePopperComponent from '../../components/popper/SimplePopper';
import SimplePopperRaw from '../../components/popper/SimplePopper.tsx?raw';
import TransitionsPopperComponent from '../../components/popper/TransitionsPopper';
import TransitionsPopperRaw from '../../components/popper/TransitionsPopper.tsx?raw';
import SpringPopperComponent from '../../components/popper/SpringPopper';
import SpringPopperRaw from '../../components/popper/SpringPopper.tsx?raw';
import PositionedPopperComponent from '../../components/popper/PositionedPopper';
import PositionedPopperRaw from '../../components/popper/PositionedPopper.tsx?raw';
import VirtualElementPopperComponent from '../../components/popper/VirtualElementPopper';
import VirtualElementPopperRaw from '../../components/popper/VirtualElementPopper.tsx?raw';
import PopperPopupStateComponent from '../../components/popper/PopperPopupState';
import PopperPopupStateRaw from '../../components/popper/PopperPopupState.tsx?raw';

function PopperDoc(props) {
    return (
        <>
            <Button
                className="normal-case absolute right-0 not-prose"
                variant="contained"
                color="secondary"
                component="a"
                href="https://mui.com/components/popper"
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
                Popper
            </Typography>
            <Typography className="description">
                A Popper enables the display of content overlaid on another element, serving as an alternative to react-popper.
            </Typography>

            <Typography
                className="text-base mb-8"
                component="div"
            >
                Key characteristics of the Popper component include:
            </Typography>
            <ul className="space-y-4">
                <li>
                    🕷 The Popper depends on the third-party library (<a href="https://popper.js.org/docs/v2/">Popper.js</a>) for precise positioning.
                </li>
                <li>💄 It provides a simpler API compared to react-popper, prioritizing ease of use.</li>
                <li>
                    Its child element utilizes a <a href="/base-ui/react-portal/">MUI Base Portal</a> on the document body to prevent rendering issues. This can be disabled using the <code>disablePortal</code> prop.
                </li>
                <li>
                    Unlike the <a href="/material-ui/react-popover/">Popover</a> component, the scroll remains unblocked, and the popper’s placement adjusts dynamically to the available viewport space.
                </li>
                <li>
                    Clicking outside does not hide the Popper. For this functionality, consider using the <a href="/base-ui/react-click-away-listener/">MUI Base Click-Away Listener</a>, as shown in the <a href="/material-ui/react-menu/#composition-with-menu-list">menu documentation section</a>.
                </li>
                <li>
                    The <code>anchorEl</code> prop is used as the reference object to initialize a new <code>Popper.js</code> instance.
                </li>
            </ul>
            <Typography
                className="text-3xl mt-6 mb-2.5 font-bold"
                component="h2"
            >
                Basic Popper
            </Typography>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                <SingularityExample
                    name="SimplePopper.js"
                    className="my-4"
                    iframe={false}
                    component={SimplePopperComponent}
                    raw={SimplePopperRaw}
                />
            </Typography>
            <Typography
                className="text-3xl mt-6 mb-2.5 font-bold"
                component="h2"
            >
                Transitions
            </Typography>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                The popper’s open/close state can be animated using a render prop child combined with a transition component. This component must adhere to these requirements:
            </Typography>
            <ul className="space-y-4">
                <li>Be a direct child of the popper.</li>
                <li>
                    Invoke the <code>onEnter</code> callback when the enter transition begins.
                </li>
                <li>
                    Invoke the <code>onExited</code> callback upon completion of the exit transition, allowing the popper to unmount the child content when closed and fully transitioned.
                </li>
            </ul>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                The Popper includes built-in support for <a href="https://github.com/reactjs/react-transition-group">react-transition-group</a>.
            </Typography>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                <SingularityExample
                    name="TransitionsPopper.js"
                    className="my-4"
                    iframe={false}
                    component={TransitionsPopperComponent}
                    raw={TransitionsPopperRaw}
                />
            </Typography>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                For an alternative you can leverage <a href="https://github.com/pmndrs/react-spring">react spring</a>.
            </Typography>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                <SingularityExample
                    name="SpringPopper.js"
                    className="my-4"
                    iframe={false}
                    component={SpringPopperComponent}
                    raw={SpringPopperRaw}
                />
            </Typography>
            <Typography
                className="text-3xl mt-6 mb-2.5 font-bold"
                component="h2"
            >
                Positioned popper
            </Typography>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                <SingularityExample
                    name="PositionedPopper.js"
                    className="my-4"
                    iframe={false}
                    component={PositionedPopperComponent}
                    raw={PositionedPopperRaw}
                />
            </Typography>
            <Typography
                className="text-3xl mt-6 mb-2.5 font-bold"
                component="h2"
            >
                Scroll playground
            </Typography>
            <Typography
                className="text-3xl mt-6 mb-2.5 font-bold"
                component="h2"
            >
                Virtual element
            </Typography>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                The <code>anchorEl</code> prop can reference a virtual DOM element. You must create an object conforming to the <a href="https://popper.js.org/docs/v2/virtual-elements/"><code>VirtualElement</code></a> structure.
            </Typography>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                Select a portion of the text to display the popper:
            </Typography>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                <SingularityExample
                    name="VirtualElementPopper.js"
                    className="my-4"
                    iframe={false}
                    component={VirtualElementPopperComponent}
                    raw={VirtualElementPopperRaw}
                />
            </Typography>
            <Typography
                className="text-3xl mt-6 mb-2.5 font-bold"
                component="h2"
            >
                Supplementary projects
            </Typography>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                For advanced scenarios, you may benefit from the following resources:
            </Typography>
            <Typography
                className="text-lg mt-5 mb-2.5 font-bold"
                component="h3"
            >
                material-ui-popup-state
            </Typography>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                <img
                    src="https://img.shields.io/github/stars/jcoreio/material-ui-popup-state?style=social&label=Star"
                    alt="stars"
                />
                <img
                    src="https://img.shields.io/npm/dm/material-ui-popup-state.svg"
                    alt="npm downloads"
                />
            </Typography>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                The <a href="https://github.com/jcoreio/material-ui-popup-state"><code>material-ui-popup-state</code></a> package simplifies managing popper state in most use cases.
            </Typography>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                <SingularityExample
                    name="PopperPopupState.js"
                    className="my-4"
                    iframe={false}
                    component={PopperPopupStateComponent}
                    raw={PopperPopupStateRaw}
                />
            </Typography>
        </>
    );
}

export default PopperDoc;