// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
'use client';

import SingularityExample from '@singularity/core/SingularityExample';
import SingularityHighlight from '@singularity/core/SingularityHighlight';
import SingularitySvgIcon from '@singularity/core/SingularitySvgIcon';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import SimpleDialogDemoComponent from '../../components/dialogs/SimpleDialogDemo';
import SimpleDialogDemoRaw from '../../components/dialogs/SimpleDialogDemo.tsx?raw';
import AlertDialogComponent from '../../components/dialogs/AlertDialog';
import AlertDialogRaw from '../../components/dialogs/AlertDialog.tsx?raw';
import AlertDialogSlideComponent from '../../components/dialogs/AlertDialogSlide';
import AlertDialogSlideRaw from '../../components/dialogs/AlertDialogSlide.tsx?raw';
import FormDialogComponent from '../../components/dialogs/FormDialog';
import FormDialogRaw from '../../components/dialogs/FormDialog.tsx?raw';
import CustomizedDialogsComponent from '../../components/dialogs/CustomizedDialogs';
import CustomizedDialogsRaw from '../../components/dialogs/CustomizedDialogs.tsx?raw';
import FullScreenDialogComponent from '../../components/dialogs/FullScreenDialog';
import FullScreenDialogRaw from '../../components/dialogs/FullScreenDialog.tsx?raw';
import MaxWidthDialogComponent from '../../components/dialogs/MaxWidthDialog';
import MaxWidthDialogRaw from '../../components/dialogs/MaxWidthDialog.tsx?raw';
import ResponsiveDialogComponent from '../../components/dialogs/ResponsiveDialog';
import ResponsiveDialogRaw from '../../components/dialogs/ResponsiveDialog.tsx?raw';
import ConfirmationDialogComponent from '../../components/dialogs/ConfirmationDialog';
import ConfirmationDialogRaw from '../../components/dialogs/ConfirmationDialog.tsx?raw';
import CookiesBannerComponent from '../../components/dialogs/CookiesBanner';
import CookiesBannerRaw from '../../components/dialogs/CookiesBanner.tsx?raw';
import DraggableDialogComponent from '../../components/dialogs/DraggableDialog';
import DraggableDialogRaw from '../../components/dialogs/DraggableDialog.tsx?raw';
import ScrollDialogComponent from '../../components/dialogs/ScrollDialog';
import ScrollDialogRaw from '../../components/dialogs/ScrollDialog.tsx?raw';

function DialogsDoc(props) {
    return (
        <>
            <Button
                className="normal-case absolute right-0 not-prose"
                variant="contained"
                color="secondary"
                component="a"
                href="https://mui.com/components/dialogs"
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
                Dialog
            </Typography>
            <Typography className="description">
                Dialogs notify users about tasks, conveying important information, prompting decisions, or requiring interaction with multiple tasks.
            </Typography>

            <Typography
                className="text-base mb-8"
                component="div"
            >
                A Dialog is a type of <a href="/material-ui/react-modal/">modal</a> window that appears over app content to present critical information or request a decision. Dialogs block all app functionality when visible and remain on screen until confirmed, dismissed, or a necessary action is completed.
            </Typography>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                Dialogs are intentionally disruptive and should be used judiciously.
            </Typography>
            <Typography
                className="text-3xl mt-6 mb-2.5 font-bold"
                component="h2"
            >
                Introduction
            </Typography>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                Dialogs are created using a set of interconnected components:
            </Typography>
            <ul className="space-y-4">
                <li>Dialog: the main component that displays the modal.</li>
                <li>Dialog Title: a container for the dialog’s title.</li>
                <li>Dialog Actions: an optional wrapper for the dialog’s buttons.</li>
                <li>Dialog Content: an optional container for the dialog’s main content.</li>
                <li>
                    Dialog Content Text: a wrapper for text within <code>{`<DialogContent />`}</code>.
                </li>
                <li>
                    Slide: an optional <a href="/material-ui/transitions/#slide">Transition</a> that animates the dialog entering from the screen’s edge.
                </li>
            </ul>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                <SingularityExample
                    name="SimpleDialogDemo.js"
                    className="my-4"
                    iframe={false}
                    component={SimpleDialogDemoComponent}
                    raw={SimpleDialogDemoRaw}
                />
            </Typography>
            <Typography
                className="text-3xl mt-6 mb-2.5 font-bold"
                component="h2"
            >
                Basics
            </Typography>

            <SingularityHighlight
                component="pre"
                className="language-jsx"
            >
                {` 
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
`}
            </SingularityHighlight>
            <Typography
                className="text-3xl mt-6 mb-2.5 font-bold"
                component="h2"
            >
                Alerts
            </Typography>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                Alerts are critical interruptions that require user acknowledgment to address a situation.
            </Typography>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                Most alerts do not require titles. They concisely present a decision by either:
            </Typography>
            <ul className="space-y-4">
                <li>Posing a question (e.g., "Delete this conversation?")</li>
                <li>Providing a statement tied to the action buttons</li>
            </ul>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                Title bar alerts should be reserved for high-risk scenarios, such as potential connectivity loss. Users should understand the options based solely on the title and button text.
            </Typography>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                If a title is needed:
            </Typography>
            <ul className="space-y-4">
                <li>
                    Use a straightforward question or statement with a detailed explanation in the content area, such as "Erase USB storage?".
                </li>
                <li>
                    Avoid vague or apologetic phrases, such as "Warning!" or "Are you sure?"
                </li>
            </ul>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                <SingularityExample
                    name="AlertDialog.js"
                    className="my-4"
                    iframe={false}
                    component={AlertDialogComponent}
                    raw={AlertDialogRaw}
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
                You can replace the default transition with another, such as <code>Slide</code>, as shown in the next example.
            </Typography>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                <SingularityExample
                    name="AlertDialogSlide.js"
                    className="my-4"
                    iframe={false}
                    component={AlertDialogSlideComponent}
                    raw={AlertDialogSlideRaw}
                />
            </Typography>
            <Typography
                className="text-3xl mt-6 mb-2.5 font-bold"
                component="h2"
            >
                Form dialogs
            </Typography>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                Form dialogs enable users to complete form fields within a dialog. For instance, a website might prompt potential subscribers to enter their email address and submit it by clicking "Submit".
            </Typography>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                <SingularityExample
                    name="FormDialog.js"
                    className="my-4"
                    iframe={false}
                    component={FormDialogComponent}
                    raw={FormDialogRaw}
                />
            </Typography>
            <Typography
                className="text-3xl mt-6 mb-2.5 font-bold"
                component="h2"
            >
                Customization
            </Typography>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                This example demonstrates how to customize the dialog component. Further details can be found in the <a href="/material-ui/customization/how-to-customize/">overrides documentation page</a>.
            </Typography>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                A close button has been added to the dialog to enhance usability.
            </Typography>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                <SingularityExample
                    name="CustomizedDialogs.js"
                    className="my-4"
                    iframe={false}
                    component={CustomizedDialogsComponent}
                    raw={CustomizedDialogsRaw}
                />
            </Typography>
            <Typography
                className="text-3xl mt-6 mb-2.5 font-bold"
                component="h2"
            >
                Full-screen dialogs
            </Typography>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                <SingularityExample
                    name="FullScreenDialog.js"
                    className="my-4"
                    iframe={false}
                    component={FullScreenDialogComponent}
                    raw={FullScreenDialogRaw}
                />
            </Typography>
            <Typography
                className="text-3xl mt-6 mb-2.5 font-bold"
                component="h2"
            >
                Optional sizes
            </Typography>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                You can define a dialog’s maximum width using the <code>maxWidth</code> prop alongside the <code>fullWidth</code> boolean. When <code>fullWidth</code> is true, the dialog adjusts according to the <code>maxWidth</code> value.
            </Typography>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                <SingularityExample
                    name="MaxWidthDialog.js"
                    className="my-4"
                    iframe={false}
                    component={MaxWidthDialogComponent}
                    raw={MaxWidthDialogRaw}
                />
            </Typography>
            <Typography
                className="text-3xl mt-6 mb-2.5 font-bold"
                component="h2"
            >
                Responsive full-screen
            </Typography>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                A dialog can be made responsively full-screen by utilizing <a href="/material-ui/react-use-media-query/"><code>useMediaQuery</code></a>.
            </Typography>

            <SingularityHighlight
                component="pre"
                className="language-jsx"
            >
                {` 
import useMediaQuery from '@mui/material/useMediaQuery';

function MyComponent() {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

  return <Dialog fullScreen={fullScreen} />;
}
`}
            </SingularityHighlight>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                <SingularityExample
                    name="ResponsiveDialog.js"
                    className="my-4"
                    iframe={false}
                    component={ResponsiveDialogComponent}
                    raw={ResponsiveDialogRaw}
                />
            </Typography>
            <Typography
                className="text-3xl mt-6 mb-2.5 font-bold"
                component="h2"
            >
                Confirmation dialogs
            </Typography>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                Confirmation dialogs prompt users to explicitly verify their choice before committing to an action. For example, users may preview multiple ringtones but confirm their selection by clicking "OK".
            </Typography>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                Selecting "Cancel" in a confirmation dialog aborts the action, discards changes, and closes the dialog.
            </Typography>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                <SingularityExample
                    name="ConfirmationDialog.js"
                    className="my-4"
                    iframe={false}
                    component={ConfirmationDialogComponent}
                    raw={ConfirmationDialogRaw}
                />
            </Typography>
            <Typography
                className="text-3xl mt-6 mb-2.5 font-bold"
                component="h2"
            >
                Non-modal dialog
            </Typography>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                Dialogs can be non-modal, allowing user interaction with the background content. For detailed guidance on modal vs. non-modal dialog usage, refer to <a href="https://www.nngroup.com/articles/modal-nonmodal-dialog/">the Nielsen Norman Group article</a>.
            </Typography>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                The example below showcases a persistent cookie banner, a typical use case for non-modal dialogs.
            </Typography>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                <SingularityExample
                    name="CookiesBanner.js"
                    className="my-4"
                    iframe
                    component={CookiesBannerComponent}
                    raw={CookiesBannerRaw}
                />
            </Typography>
            <Typography
                className="text-3xl mt-6 mb-2.5 font-bold"
                component="h2"
            >
                Draggable dialog
            </Typography>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                A draggable dialog can be created using <a href="https://github.com/react-grid-layout/react-draggable">react-draggable</a>. Pass the imported <code>Draggable</code> component as the <code>PaperComponent</code> of the <code>Dialog</code> component to make the entire dialog draggable.
            </Typography>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                <SingularityExample
                    name="DraggableDialog.js"
                    className="my-4"
                    iframe={false}
                    component={DraggableDialogComponent}
                    raw={DraggableDialogRaw}
                />
            </Typography>
            <Typography
                className="text-3xl mt-6 mb-2.5 font-bold"
                component="h2"
            >
                Scrolling long content
            </Typography>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                When dialogs exceed the viewport or device height, they become scrollable.
            </Typography>
            <ul className="space-y-4">
                <li>
                    <code>scroll=paper</code>: the dialog’s content scrolls within the paper element.
                </li>
                <li>
                    <code>scroll=body</code>: the dialog’s content scrolls within the body element.
                </li>
            </ul>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                Explore the example below to understand this behavior:
            </Typography>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                <SingularityExample
                    name="ScrollDialog.js"
                    className="my-4"
                    iframe={false}
                    component={ScrollDialogComponent}
                    raw={ScrollDialogRaw}
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
                Refer to the <a href="/material-ui/react-modal/#performance">Modal performance section</a> for guidance.
            </Typography>
            <Typography
                className="text-3xl mt-6 mb-2.5 font-bold"
                component="h2"
            >
                Limitations
            </Typography>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                Consult the <a href="/material-ui/react-modal/#limitations">Modal limitations section</a> for details.
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
                For advanced scenarios, you may benefit from the following:
            </Typography>
            <Typography
                className="text-lg mt-5 mb-2.5 font-bold"
                component="h3"
            >
                material-ui-confirm
            </Typography>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                <img
                    src="https://img.shields.io/github/stars/jonatanklosko/material-ui-confirm?style=social&label=Star"
                    alt="stars"
                />
                <img
                    src="https://img.shields.io/npm/dm/material-ui-confirm.svg"
                    alt="npm downloads"
                />
            </Typography>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                The <a href="https://github.com/jonatanklosko/material-ui-confirm/"><code>material-ui-confirm</code></a> package offers dialogs for confirming user actions, reducing the need for boilerplate code.
            </Typography>
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
                See the <a href="/material-ui/react-modal/#accessibility">Modal accessibility section</a> for accessibility guidance.
            </Typography>
        </>
    );
}

export default DialogsDoc;