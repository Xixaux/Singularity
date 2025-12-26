// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
'use client';

import SingularityExample from '@singularity/core/SingularityExample';
import SingularityHighlight from '@singularity/core/SingularityHighlight';
import SingularitySvgIcon from '@singularity/core/SingularitySvgIcon';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import BasicModalComponent from '../../components/modal/BasicModal';
import BasicModalRaw from '../../components/modal/BasicModal.tsx?raw';
import NestedModalComponent from '../../components/modal/NestedModal';
import NestedModalRaw from '../../components/modal/NestedModal.tsx?raw';
import TransitionsModalComponent from '../../components/modal/TransitionsModal';
import TransitionsModalRaw from '../../components/modal/TransitionsModal.tsx?raw';
import SpringModalComponent from '../../components/modal/SpringModal';
import SpringModalRaw from '../../components/modal/SpringModal.tsx?raw';
import KeepMountedModalComponent from '../../components/modal/KeepMountedModal';
import KeepMountedModalRaw from '../../components/modal/KeepMountedModal.tsx?raw';
import ServerModalComponent from '../../components/modal/ServerModal';
import ServerModalRaw from '../../components/modal/ServerModal.tsx?raw';

function ModalDoc(props) {
    return (
        <>
            <Button
                className="normal-case absolute right-0 not-prose"
                variant="contained"
                color="secondary"
                component="a"
                href="https://mui.com/components/modal"
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
                Modal
            </Typography>
            <Typography className="description">
                The modal component offers a robust foundation for building dialogs, popovers, lightboxes, and other similar elements.
            </Typography>

            <Typography
                className="text-base mb-8"
                component="div"
            >
                The component displays its <code>children</code> node in front of a backdrop. The <code>Modal</code> provides key features:
            </Typography>
            <ul className="space-y-4">
                <li>💄 Manages modal stacking when one-at-a-time just isn't enough.</li>
                <li>🔐 Creates a backdrop, for disabling interaction below the modal.</li>
                <li>🔐 It disables scrolling of the page content while open.</li>
                <li>
                    ♿️ It properly manages focus; moving to the modal content, and keeping it there until the modal is
                    closed.
                </li>
                <li>♿️ Adds the appropriate ARIA roles automatically.</li>
            </ul>
            <div className="border-1 p-4 rounded-xl my-3">
                <Typography
                    className="text-base mb-8"
                    component="div"
                >
                    The term "modal" is often used interchangeably with "dialog," but this is inaccurate. A modal window refers to a UI element that{' '}
                    <a href="https://en.wikipedia.org/wiki/Modal_window">
                        blocks interaction with the rest of the application
                    </a>
                    .
                </Typography>
            </div>

            <Typography
                className="text-base mb-8"
                component="div"
            >
                For creating modal dialogs, consider using the <a href="/material-ui/react-dialog/">Dialog</a> component instead of directly using Modal. Modal is a lower-level construct utilized by the following components:
            </Typography>
            <ul className="space-y-4">
                <li>
                    <a href="/material-ui/react-dialog/">Dialog</a>
                </li>
                <li>
                    <a href="/material-ui/react-drawer/">Drawer</a>
                </li>
                <li>
                    <a href="/material-ui/react-menu/">Menu</a>
                </li>
                <li>
                    <a href="/material-ui/react-popover/">Popover</a>
                </li>
            </ul>
            <Typography
                className="text-3xl mt-6 mb-2.5 font-bold"
                component="h2"
            >
                Basic modal
            </Typography>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                <SingularityExample
                    name="BasicModal.js"
                    className="my-4"
                    iframe={false}
                    component={BasicModalComponent}
                    raw={BasicModalRaw}
                />
            </Typography>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                Note that you can remove the outline (often blue or gold) by applying the <code>outline: 0</code> CSS property.
            </Typography>
            <Typography
                className="text-3xl mt-6 mb-2.5 font-bold"
                component="h2"
            >
                Nested modal
            </Typography>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                Modals can be nested, such as including a select within a dialog, but stacking more than two modals or using multiple modals with backdrops is not recommended.
            </Typography>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                <SingularityExample
                    name="NestedModal.js"
                    className="my-4"
                    iframe={false}
                    component={NestedModalComponent}
                    raw={NestedModalRaw}
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
                The modal's open/close state can be animated using a transition component. This component must adhere to the following requirements:
            </Typography>
            <ul className="space-y-4">
                <li>Be a direct child descendent of the modal.</li>
                <li>
                    Have an <code>in</code> prop. This corresponds to the open/close state.
                </li>
                <li>
                    Call the <code>onEnter</code> callback prop when the enter transition starts.
                </li>
                <li>
                    Call the <code>onExited</code> callback prop when the exit transition is completed. These two
                    callbacks allow the modal to unmount the child content when closed and fully transitioned.
                </li>
            </ul>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                Modal includes built-in support for <a href="https://github.com/reactjs/react-transition-group">react-transition-group</a>.
            </Typography>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                <SingularityExample
                    name="TransitionsModal.js"
                    className="my-4"
                    iframe={false}
                    component={TransitionsModalComponent}
                    raw={TransitionsModalRaw}
                />
            </Typography>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                Alternatively, you can utilize <a href="https://github.com/pmndrs/react-spring">react spring</a> for transitions.
            </Typography>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                <SingularityExample
                    name="SpringModal.js"
                    className="my-4"
                    iframe={false}
                    component={SpringModalComponent}
                    raw={SpringModalRaw}
                />
            </Typography>
            <Typography
                className="text-3xl mt-6 mb-2.5 font-bold"
                component="h2"
            >
                Performance
            </Typography>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                By default, modal content is unmounted when closed. To make content accessible to search engines or to render complex component trees while maintaining interaction responsiveness, consider enabling the <code>keepMounted</code> prop:
            </Typography>

            <SingularityHighlight
                component="pre"
                className="language-jsx"
            >
                {` 
<Modal keepMounted />
`}
            </SingularityHighlight>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                <SingularityExample
                    name="KeepMountedModal.js"
                    className="my-4"
                    iframe={false}
                    component={KeepMountedModalComponent}
                    raw={KeepMountedModalRaw}
                />
            </Typography>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                As with any performance optimization, this approach is not a universal solution. Identify performance bottlenecks before applying these optimization techniques.
            </Typography>
            <Typography
                className="text-3xl mt-6 mb-2.5 font-bold"
                component="h2"
            >
                Server-side modal
            </Typography>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                React <a href="https://github.com/facebook/react/issues/13097">does not support</a> the <a href="https://react.dev/reference/react-dom/createPortal">
                    <code>createPortal()</code>
                </a> API on the server. To display a modal on the server, disable the portal feature using the <code>disablePortal</code> prop:
            </Typography>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                <SingularityExample
                    name="ServerModal.js"
                    className="my-4"
                    iframe={false}
                    component={ServerModalComponent}
                    raw={ServerModalRaw}
                />
            </Typography>
            <Typography
                className="text-3xl mt-6 mb-2.5 font-bold"
                component="h2"
            >
                Limitations
            </Typography>
            <Typography
                className="text-lg mt-5 mb-2.5 font-bold"
                component="h3"
            >
                Focus trap
            </Typography>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                The modal ensures focus remains within the component by redirecting it to the modal body if it attempts to escape.
            </Typography>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                This behavior enhances accessibility but may cause issues. If users need to interact with other page elements, such as a chatbot window, you can disable this behavior:
            </Typography>

            <SingularityHighlight
                component="pre"
                className="language-jsx"
            >
                {` 
<Modal disableEnforceFocus />
`}
            </SingularityHighlight>
            <Typography
                className="text-3xl mt-6 mb-2.5 font-bold"
                component="h2"
            >
                Accessibility
            </Typography>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                (WAI-ARIA: <a href="https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/">
                    https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/
                </a>)
            </Typography>
            <ul className="space-y-4">
                <li>
                    <Typography
                        className="text-base mb-8"
                        component="div"
                    >
                        Ensure you include <code>{`aria-labelledby="id..."`}</code>, referencing the modal title, in the <code>Modal</code>. You may also provide a description using the <code>{`aria-describedby="id..."`}</code> prop on the <code>Modal</code>.
                    </Typography>

                    <SingularityHighlight
                        component="pre"
                        className="language-jsx"
                    >
                        {` 
<Modal aria-labelledby="modal-title" aria-describedby="modal-description">
  <h2 id="modal-title">My Title</h2>
  <Typography id="modal-description">My Description</Typography>
</Modal>
`}
                    </SingularityHighlight>
                </li>
                <li>
                    <Typography
                        className="text-base mb-8"
                        component="div"
                    >
                        The <a href="https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/examples/dialog/">
                            WAI-ARIA Authoring Practices
                        </a> can guide you in setting the initial focus on the most relevant element within your modal content.
                    </Typography>
                </li>
                <li>
                    <Typography
                        className="text-base mb-8"
                        component="div"
                    >
                        Remember that a "modal window" overlays either the primary window or another modal window. Content beneath a modal is <strong>inert</strong>, meaning users cannot interact with it. This may lead to <a href="#focus-trap">conflicting behaviors</a>.
                    </Typography>
                </li>
            </ul>
        </>
    );
}

export default ModalDoc;