// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
'use client';

import SingularityExample from '@singularity/core/SingularityExample';
import SingularityHighlight from '@singularity/core/SingularityHighlight';
import SingularitySvgIcon from '@singularity/core/SingularitySvgIcon';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import BasicPopoverComponent from '../../components/popover/BasicPopover';
import BasicPopoverRaw from '../../components/popover/BasicPopover.tsx?raw';
import MouseHoverPopoverComponent from '../../components/popover/MouseHoverPopover';
import MouseHoverPopoverRaw from '../../components/popover/MouseHoverPopover.tsx?raw';
import VirtualElementPopoverComponent from '../../components/popover/VirtualElementPopover';
import VirtualElementPopoverRaw from '../../components/popover/VirtualElementPopover.tsx?raw';
import PopoverPopupStateComponent from '../../components/popover/PopoverPopupState';
import PopoverPopupStateRaw from '../../components/popover/PopoverPopupState.tsx?raw';

function PopoverDoc(props) {
    return (
        <>
            <Button
                className="normal-case absolute right-0 not-prose"
                variant="contained"
                color="secondary"
                component="a"
                href="https://mui.com/components/popover"
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
                Popover
            </Typography>
            <Typography className="description">
                A Popover is designed to overlay content on top of another element.
            </Typography>

            <Typography
                className="text-base mb-8"
                component="div"
            >
                Key information to understand when utilizing the <code>Popover</code> component:
            </Typography>
            <ul className="space-y-4">
                <li>
                    The component is constructed upon the{' '}
                    <a href="/material-ui/react-modal/">
                        <code>Modal</code>
                    </a>{' '}
                    component.
                </li>
                <li>
                    Unlike the{' '}
                    <a href="/material-ui/react-popper/">
                        <code>Popper</code>
                    </a>{' '}
                    component, it prevents scrolling and clicking outside the popover.
                </li>
            </ul>
            <Typography
                className="text-3xl mt-6 mb-2.5 font-bold"
                component="h2"
            >
                Basic Popover
            </Typography>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                <SingularityExample
                    name="BasicPopover.js"
                    className="my-4"
                    iframe={false}
                    component={BasicPopoverComponent}
                    raw={BasicPopoverRaw}
                />
            </Typography>
            <Typography
                className="text-3xl mt-6 mb-2.5 font-bold"
                component="h2"
            >
                Anchor playground
            </Typography>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                Adjust the <code>anchorOrigin</code> and <code>transformOrigin</code> positions using radio buttons. You can also configure the <code>anchorReference</code> to either <code>anchorPosition</code> or <code>anchorEl</code>. When set to <code>anchorPosition</code>, the component references the <code>anchorPosition</code> prop instead of <code>anchorEl</code>, allowing you to customize the popover's position.
            </Typography>
            <Typography
                className="text-3xl mt-6 mb-2.5 font-bold"
                component="h2"
            >
                Mouse hover interaction
            </Typography>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                This example illustrates how to implement the <code>Popover</code> component with <code>mouseenter</code> and <code>mouseleave</code> events to create interactive popover behavior.
            </Typography>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                <SingularityExample
                    name="MouseHoverPopover.js"
                    className="my-4"
                    iframe={false}
                    component={MouseHoverPopoverComponent}
                    raw={MouseHoverPopoverRaw}
                />
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
                The <code>anchorEl</code> prop can reference a virtual DOM element. You must provide an object adhering to the following interface:
            </Typography>

            <SingularityHighlight
                component="pre"
                className="language-ts"
            >
                {` 
interface PopoverVirtualElement {
  nodeType: 1;
  getBoundingClientRect: () => DOMRect;
}
`}
            </SingularityHighlight>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                Select a portion of the text to trigger the popover:
            </Typography>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                <SingularityExample
                    name="VirtualElementPopover.js"
                    className="my-4"
                    iframe={false}
                    component={VirtualElementPopoverComponent}
                    raw={VirtualElementPopoverRaw}
                />
            </Typography>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                For additional details on the properties of virtual elements, consult the following resources:
            </Typography>
            <ul className="space-y-4">
                <li>
                    <a href="https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect">
                        getBoundingClientRect
                    </a>
                </li>
                <li>
                    <a href="https://drafts.fxtf.org/geometry-1/#domrectreadonly">DOMRect</a>
                </li>
                <li>
                    <a href="https://developer.mozilla.org/en-US/docs/Web/API/Node/nodeType">Node types</a>
                </li>
            </ul>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                :::warning When using a virtual element with the Popover component, the <code>nodeType</code> property is required. This differs from virtual elements used in the{' '}
                <a href="/material-ui/react-popper/#virtual-element">
                    <code>Popper</code>
                </a>{' '}
                or{' '}
                <a href="/material-ui/react-tooltip/#virtual-element">
                    <code>Tooltip</code>
                </a>{' '}
                components, which do not mandate this property. :::
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
                For advanced scenarios, you may benefit from exploring:
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
                The{' '}
                <a href="https://github.com/jcoreio/material-ui-popup-state">
                    <code>material-ui-popup-state</code>
                </a>{' '}
                package simplifies popover state management in most use cases.
            </Typography>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                <SingularityExample
                    name="PopoverPopupState.js"
                    className="my-4"
                    iframe={false}
                    component={PopoverPopupStateComponent}
                    raw={PopoverPopupStateRaw}
                />
            </Typography>
        </>
    );
}

export default PopoverDoc;