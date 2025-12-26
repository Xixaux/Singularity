// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
'use client';

import SingularityExample from '@singularity/core/SingularityExample';
import SingularityHighlight from '@singularity/core/SingularityHighlight';
import SingularitySvgIcon from '@singularity/core/SingularitySvgIcon';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import SimpleAlertComponent from '../../components/alert/SimpleAlert';
import SimpleAlertRaw from '../../components/alert/SimpleAlert.tsx?raw';
import BasicAlertsComponent from '../../components/alert/BasicAlerts';
import BasicAlertsRaw from '../../components/alert/BasicAlerts.tsx?raw';
import FilledAlertsComponent from '../../components/alert/FilledAlerts';
import FilledAlertsRaw from '../../components/alert/FilledAlerts.tsx?raw';
import OutlinedAlertsComponent from '../../components/alert/OutlinedAlerts';
import OutlinedAlertsRaw from '../../components/alert/OutlinedAlerts.tsx?raw';
import ColorAlertsComponent from '../../components/alert/ColorAlerts';
import ColorAlertsRaw from '../../components/alert/ColorAlerts.tsx?raw';
import ActionAlertsComponent from '../../components/alert/ActionAlerts';
import ActionAlertsRaw from '../../components/alert/ActionAlerts.tsx?raw';
import IconAlertsComponent from '../../components/alert/IconAlerts';
import IconAlertsRaw from '../../components/alert/IconAlerts.tsx?raw';
import DescriptionAlertsComponent from '../../components/alert/DescriptionAlerts';
import DescriptionAlertsRaw from '../../components/alert/DescriptionAlerts.tsx?raw';
import TransitionAlertsComponent from '../../components/alert/TransitionAlerts';
import TransitionAlertsRaw from '../../components/alert/TransitionAlerts.tsx?raw';

function AlertDoc(props) {
    return (
        <>
            <Button
                className="normal-case absolute right-0 not-prose"
                variant="contained"
                color="secondary"
                component="a"
                href="https://mui.com/components/alert"
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
                Alert
            </Typography>
            <Typography className="description">
                Alerts convey concise messages to users without disrupting their interaction with the application.
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
                Alerts provide users with brief, potentially time-sensitive information in a non-intrusive way.
            </Typography>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                The Material UI Alert component offers various props to customize its appearance, delivering immediate visual cues about its content.
            </Typography>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                <SingularityExample
                    name="SimpleAlert.js"
                    className="my-4"
                    iframe={false}
                    component={SimpleAlertComponent}
                    raw={SimpleAlertRaw}
                />
            </Typography>
            <div className="border-1 p-4 rounded-xl my-3">
                <Typography
                    className="text-base mb-8"
                    component="div"
                >
                    This component is no longer included in the <a href="https://m2.material.io/">Material Design guidelines</a>, but Material UI will continue to support it.
                </Typography>
            </div>

            <Typography
                className="text-lg mt-5 mb-2.5 font-bold"
                component="h3"
            >
                Usage
            </Typography>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                A defining characteristic of the alert pattern is that it <a href="https://www.w3.org/WAI/ARIA/apg/patterns/alert/">does not interrupt the user's experience</a>. Alerts should not be confused with alert <em>dialogs</em> (<a href="https://www.w3.org/WAI/ARIA/apg/patterns/alertdialog/">ARIA</a>), which are designed to interrupt the user to prompt a response. For such behavior, use the Material UI <a href="/material-ui/react-dialog/">Dialog</a> component.
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
import Alert from '@mui/material/Alert';
`}
            </SingularityHighlight>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                The Alert component surrounds its content and expands to fill its parent container.
            </Typography>
            <Typography
                className="text-lg mt-5 mb-2.5 font-bold"
                component="h3"
            >
                Severity
            </Typography>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                The <code>severity</code> prop supports four values—<code>success</code> (default), <code>info</code>, <code>warning</code>, and <code>error</code>—each with corresponding icons and colors:
            </Typography>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                <SingularityExample
                    name="BasicAlerts.js"
                    className="my-4"
                    iframe={false}
                    component={BasicAlertsComponent}
                    raw={BasicAlertsRaw}
                />
            </Typography>
            <Typography
                className="text-lg mt-5 mb-2.5 font-bold"
                component="h3"
            >
                Variants
            </Typography>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                The Alert component provides two alternative styles—<code>filled</code> and <code>outlined</code>—configurable via the <code>variant</code> prop.
            </Typography>
            <Typography
                className="text-base mt-3 mb-2.5"
                component="h4"
            >
                Filled
            </Typography>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                <SingularityExample
                    name="FilledAlerts.js"
                    className="my-4"
                    iframe={false}
                    component={FilledAlertsComponent}
                    raw={FilledAlertsRaw}
                />
            </Typography>
            <Typography
                className="text-base mt-3 mb-2.5"
                component="h4"
            >
                Outlined
            </Typography>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                <SingularityExample
                    name="OutlinedAlerts.js"
                    className="my-4"
                    iframe={false}
                    component={OutlinedAlertsComponent}
                    raw={OutlinedAlertsRaw}
                />
            </Typography>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                :::warning When using an outlined Alert with the <a href="/material-ui/react-snackbar/">Snackbar</a> component, background content may be visible through the Alert by default. To prevent this, add <code>{`bgcolor: 'background.paper'`}</code> to <a href="/material-ui/customization/how-to-customize/#the-sx-prop">the <code>sx</code> prop</a> on the Alert component:
            </Typography>

            <SingularityHighlight
                component="pre"
                className="language-jsx"
            >
                {` 
<Alert sx={{ bgcolor: 'background.paper' }} />
`}
            </SingularityHighlight>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                Refer to the <a href="/material-ui/react-snackbar/#customization">Snackbar—customization</a> documentation for an example of combining these components. :::
            </Typography>
            <Typography
                className="text-lg mt-5 mb-2.5 font-bold"
                component="h3"
            >
                Color
            </Typography>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                Use the <code>color</code> prop to override the default color for a specified <a href="#severity"><code>severity</code></a>, such as applying <code>warning</code> colors to a <code>success</code> Alert:
            </Typography>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                <SingularityExample
                    name="ColorAlerts.js"
                    className="my-4"
                    iframe={false}
                    component={ColorAlertsComponent}
                    raw={ColorAlertsRaw}
                />
            </Typography>
            <Typography
                className="text-lg mt-5 mb-2.5 font-bold"
                component="h3"
            >
                Actions
            </Typography>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                Add an action to an Alert using the <code>action</code> prop, allowing you to place any element—such as an HTML tag, SVG icon, or Material UI Button—after the Alert's message, aligned to the right.
            </Typography>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                If you provide an <code>onClose</code> callback without setting the <code>action</code> prop, the Alert will display a default close icon (✕).
            </Typography>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                <SingularityExample
                    name="ActionAlerts.js"
                    className="my-4"
                    iframe={false}
                    component={ActionAlertsComponent}
                    raw={ActionAlertsRaw}
                />
            </Typography>
            <Typography
                className="text-lg mt-5 mb-2.5 font-bold"
                component="h3"
            >
                Icons
            </Typography>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                Override an Alert's icon using the <code>icon</code> prop, which accepts an HTML element, SVG icon, or React component. Set the prop to <code>false</code> to remove the icon entirely.
            </Typography>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                To override all icons for a given <a href="#severity"><code>severity</code></a>, use the <code>iconMapping</code> prop instead. This can be defined globally by customizing the app's theme. See <a href="/material-ui/customization/theme-components/#theme-default-props">Theme components—Default props</a> for details.
            </Typography>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                <SingularityExample
                    name="IconAlerts.js"
                    className="my-4"
                    iframe={false}
                    component={IconAlertsComponent}
                    raw={IconAlertsRaw}
                />
            </Typography>
            <Typography
                className="text-3xl mt-6 mb-2.5 font-bold"
                component="h2"
            >
                Customization
            </Typography>
            <Typography
                className="text-lg mt-5 mb-2.5 font-bold"
                component="h3"
            >
                Titles
            </Typography>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                To include a title in an Alert, import the AlertTitle component:
            </Typography>

            <SingularityHighlight
                component="pre"
                className="language-jsx"
            >
                {` 
import AlertTitle from '@mui/material/AlertTitle';
`}
            </SingularityHighlight>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                Nest the AlertTitle component above the message in your Alert for a well-styled and properly aligned title, as demonstrated below:
            </Typography>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                <SingularityExample
                    name="DescriptionAlerts.js"
                    className="my-4"
                    iframe={false}
                    component={DescriptionAlertsComponent}
                    raw={DescriptionAlertsRaw}
                />
            </Typography>
            <Typography
                className="text-lg mt-5 mb-2.5 font-bold"
                component="h3"
            >
                Transitions
            </Typography>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                Enhance an Alert's entrance and exit with <a href="/material-ui/transitions/">Transition components</a> such as <a href="/material-ui/transitions/#collapse">Collapse</a>.
            </Typography>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                <SingularityExample
                    name="TransitionAlerts.js"
                    className="my-4"
                    iframe={false}
                    component={TransitionAlertsComponent}
                    raw={TransitionAlertsRaw}
                />
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
                To ensure your Alert is accessible, consider the following:
            </Typography>
            <ul className="space-y-4">
                <li>
                    Alerts are designed to avoid interfering with the app's usability, so the Alert component should <em>never</em> affect keyboard focus.
                </li>
                <li>
                    If an alert includes an action, that action must have a <code>tabindex</code> of <code>0</code> to ensure accessibility for keyboard-only users.
                </li>
                <li>
                    Critical alerts should not disappear automatically, as <a href="https://www.w3.org/TR/UNDERSTANDING-WCAG20/time-limits-no-exceptions.html">timed interactions</a> can hinder accessibility for users who need more time to read or locate the alert.
                </li>
                <li>
                    Frequent alerts can <a href="https://www.w3.org/TR/UNDERSTANDING-WCAG20/time-limits-postponed.html">impair the usability</a> of your application.
                </li>
                <li>
                    Dynamically rendered alerts are announced by screen readers, whereas alerts present on page load are <em>not</em> announced.
                </li>
                <li>
                    Color alone should not convey meaning for users relying on assistive technology. Ensure that information conveyed through color is also expressed through text or hidden text accessible to screen readers.
                </li>
            </ul>
            <Typography
                className="text-3xl mt-6 mb-2.5 font-bold"
                component="h2"
            >
                Anatomy
            </Typography>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                The Alert component consists of a root <a href="/material-ui/react-paper/">Paper</a> component (rendered as a <code>{`<div>`}</code>) containing an icon, a message, and an optional <a href="#actions">action</a>:
            </Typography>

            <SingularityHighlight
                component="pre"
                className="language-html"
            >
                {` 
<div className="MuiPaper-root MuiAlert-root" role="alert">
  <div className="MuiAlert-icon">
    
  </div>
  <div className="MuiAlert-message">This is how an Alert renders in the DOM.</div>
  <div className="MuiAlert-action">
    
  </div>
</div>
`}
            </SingularityHighlight>
        </>
    );
}

export default AlertDoc;