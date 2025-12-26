// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
'use client';

import SingularityExample from '@singularity/core/SingularityExample';
import SingularityHighlight from '@singularity/core/SingularityHighlight';
import SingularitySvgIcon from '@singularity/core/SingularitySvgIcon';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import BasicButtonsComponent from '../../components/buttons/BasicButtons';
import BasicButtonsRaw from '../../components/buttons/BasicButtons.tsx?raw';
import TextButtonsComponent from '../../components/buttons/TextButtons';
import TextButtonsRaw from '../../components/buttons/TextButtons.tsx?raw';
import ContainedButtonsComponent from '../../components/buttons/ContainedButtons';
import ContainedButtonsRaw from '../../components/buttons/ContainedButtons.tsx?raw';
import DisableElevationComponent from '../../components/buttons/DisableElevation';
import DisableElevationRaw from '../../components/buttons/DisableElevation.tsx?raw';
import OutlinedButtonsComponent from '../../components/buttons/OutlinedButtons';
import OutlinedButtonsRaw from '../../components/buttons/OutlinedButtons.tsx?raw';
import ColorButtonsComponent from '../../components/buttons/ColorButtons';
import ColorButtonsRaw from '../../components/buttons/ColorButtons.tsx?raw';
import ButtonSizesComponent from '../../components/buttons/ButtonSizes';
import ButtonSizesRaw from '../../components/buttons/ButtonSizes.tsx?raw';
import IconLabelButtonsComponent from '../../components/buttons/IconLabelButtons';
import IconLabelButtonsRaw from '../../components/buttons/IconLabelButtons.tsx?raw';
import IconButtonsComponent from '../../components/buttons/IconButtons';
import IconButtonsRaw from '../../components/buttons/IconButtons.tsx?raw';
import IconButtonSizesComponent from '../../components/buttons/IconButtonSizes';
import IconButtonSizesRaw from '../../components/buttons/IconButtonSizes.tsx?raw';
import IconButtonColorsComponent from '../../components/buttons/IconButtonColors';
import IconButtonColorsRaw from '../../components/buttons/IconButtonColors.tsx?raw';
import LoadingIconButtonComponent from '../../components/buttons/LoadingIconButton';
import LoadingIconButtonRaw from '../../components/buttons/LoadingIconButton.tsx?raw';
import IconButtonWithBadgeComponent from '../../components/buttons/IconButtonWithBadge';
import IconButtonWithBadgeRaw from '../../components/buttons/IconButtonWithBadge.tsx?raw';
import InputFileUploadComponent from '../../components/buttons/InputFileUpload';
import InputFileUploadRaw from '../../components/buttons/InputFileUpload.tsx?raw';
import LoadingButtonsComponent from '../../components/buttons/LoadingButtons';
import LoadingButtonsRaw from '../../components/buttons/LoadingButtons.tsx?raw';
import LoadingButtonsTransitionComponent from '../../components/buttons/LoadingButtonsTransition';
import LoadingButtonsTransitionRaw from '../../components/buttons/LoadingButtonsTransition.tsx?raw';
import CustomizedButtonsComponent from '../../components/buttons/CustomizedButtons';
import CustomizedButtonsRaw from '../../components/buttons/CustomizedButtons.tsx?raw';
import ButtonBaseDemoComponent from '../../components/buttons/ButtonBaseDemo';
import ButtonBaseDemoRaw from '../../components/buttons/ButtonBaseDemo.tsx?raw';

function ButtonsDoc(props) {
    return (
        <>
            <Button
                className="normal-case absolute right-0 not-prose"
                variant="contained"
                color="secondary"
                component="a"
                href="https://mui.com/components/buttons"
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
                Button
            </Typography>
            <Typography className="description">
                Buttons enable users to perform actions and make selections with a single click.
            </Typography>

            <Typography
                className="text-base mb-8"
                component="div"
            >
                Buttons convey actions that users can execute. They are commonly integrated into your UI in areas such as:
            </Typography>
            <ul className="space-y-4">
                <li>Modal windows</li>
                <li>Forms</li>
                <li>Cards</li>
                <li>Toolbars</li>
            </ul>
            <Typography
                className="text-3xl mt-6 mb-2.5 font-bold"
                component="h2"
            >
                Basic button
            </Typography>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                The <code>Button</code> component offers three variants: text (default), contained, and outlined.
            </Typography>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                <SingularityExample
                    name="BasicButtons.js"
                    className="my-4"
                    iframe={false}
                    component={BasicButtonsComponent}
                    raw={BasicButtonsRaw}
                />
            </Typography>
            <Typography
                className="text-lg mt-5 mb-2.5 font-bold"
                component="h3"
            >
                Text button
            </Typography>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                <a href="https://m2.material.io/components/buttons#text-button">Text buttons</a>
                are generally used for less prominent actions, such as those found in dialogs or cards. In cards,
                text buttons help keep the focus on the card's content.
            </Typography>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                <SingularityExample
                    name="TextButtons.js"
                    className="my-4"
                    iframe={false}
                    component={TextButtonsComponent}
                    raw={TextButtonsRaw}
                />
            </Typography>
            <Typography
                className="text-lg mt-5 mb-2.5 font-bold"
                component="h3"
            >
                Contained button
            </Typography>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                <a href="https://m2.material.io/components/buttons#contained-button">Contained buttons</a>
                stand out with high emphasis due to their elevation and fill. They are used for primary actions within your application.
            </Typography>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                <SingularityExample
                    name="ContainedButtons.js"
                    className="my-4"
                    iframe={false}
                    component={ContainedButtonsComponent}
                    raw={ContainedButtonsRaw}
                />
            </Typography>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                You can eliminate the elevation effect by using the <code>disableElevation</code> prop.
            </Typography>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                <SingularityExample
                    name="DisableElevation.js"
                    className="my-4"
                    iframe={false}
                    component={DisableElevationComponent}
                    raw={DisableElevationRaw}
                />
            </Typography>
            <Typography
                className="text-lg mt-5 mb-2.5 font-bold"
                component="h3"
            >
                Outlined button
            </Typography>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                <a href="https://m2.material.io/components/buttons#outlined-button">Outlined buttons</a> provide
                medium emphasis. They are used for significant but non-primary actions in an application.
            </Typography>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                Outlined buttons serve as a lower-emphasis alternative to contained buttons or a higher-emphasis option compared to text buttons.
            </Typography>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                <SingularityExample
                    name="OutlinedButtons.js"
                    className="my-4"
                    iframe={false}
                    component={OutlinedButtonsComponent}
                    raw={OutlinedButtonsRaw}
                />
            </Typography>
            <Typography
                className="text-3xl mt-6 mb-2.5 font-bold"
                component="h2"
            >
                Handling clicks
            </Typography>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                All components support an <code>onClick</code> handler that is attached to the root DOM element.
            </Typography>

            <SingularityHighlight
                component="pre"
                className="language-jsx"
            >
                {` 
<Button
  onClick={() => {
    alert('clicked');
  
>
  Click me
</Button>
`}
            </SingularityHighlight>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                Note that the documentation <a href="/material-ui/guides/api/#native-properties">avoids</a> listing
                native properties (of which there are many) in the components' API section.
            </Typography>
            <Typography
                className="text-3xl mt-6 mb-2.5 font-bold"
                component="h2"
            >
                Color
            </Typography>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                <SingularityExample
                    name="ColorButtons.js"
                    className="my-4"
                    iframe={false}
                    component={ColorButtonsComponent}
                    raw={ColorButtonsRaw}
                />
            </Typography>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                Besides the default button colors, you can introduce custom colors or remove unnecessary ones. Refer to the <a href="/material-ui/customization/palette/#custom-colors">Adding new colors</a> guide for more details.
            </Typography>
            <Typography
                className="text-3xl mt-6 mb-2.5 font-bold"
                component="h2"
            >
                Sizes
            </Typography>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                To adjust button sizes, utilize the <code>size</code> prop for larger or smaller buttons.
            </Typography>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                <SingularityExample
                    name="ButtonSizes.js"
                    className="my-4"
                    iframe={false}
                    component={ButtonSizesComponent}
                    raw={ButtonSizesRaw}
                />
            </Typography>
            <Typography
                className="text-3xl mt-6 mb-2.5 font-bold"
                component="h2"
            >
                Buttons with icons and label
            </Typography>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                Incorporating icons into certain buttons can improve the user experience, as icons are often more recognizable than text alone. For instance, a delete button can be enhanced with a trash can icon.
            </Typography>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                <SingularityExample
                    name="IconLabelButtons.js"
                    className="my-4"
                    iframe={false}
                    component={IconLabelButtonsComponent}
                    raw={IconLabelButtonsRaw}
                />
            </Typography>
            <Typography
                className="text-3xl mt-6 mb-2.5 font-bold"
                component="h2"
            >
                Icon button
            </Typography>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                Icon buttons are frequently used in app bars and toolbars.
            </Typography>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                Icons are ideal for toggle buttons, enabling users to select or deselect an option, such as adding or removing a star from an item.
            </Typography>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                <SingularityExample
                    name="IconButtons.js"
                    className="my-4"
                    iframe={false}
                    component={IconButtonsComponent}
                    raw={IconButtonsRaw}
                />
            </Typography>
            <Typography
                className="text-lg mt-5 mb-2.5 font-bold"
                component="h3"
            >
                Sizes
            </Typography>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                To create larger or smaller icon buttons, apply the <code>size</code> prop.
            </Typography>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                <SingularityExample
                    name="IconButtonSizes.js"
                    className="my-4"
                    iframe={false}
                    component={IconButtonSizesComponent}
                    raw={IconButtonSizesRaw}
                />
            </Typography>
            <Typography
                className="text-lg mt-5 mb-2.5 font-bold"
                component="h3"
            >
                Colors
            </Typography>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                Use the <code>color</code> prop to apply the theme's color palette to the component.
            </Typography>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                <SingularityExample
                    name="IconButtonColors.js"
                    className="my-4"
                    iframe={false}
                    component={IconButtonColorsComponent}
                    raw={IconButtonColorsRaw}
                />
            </Typography>
            <Typography
                className="text-lg mt-5 mb-2.5 font-bold"
                component="h3"
            >
                Loading
            </Typography>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                From version 6.4.0, the <code>loading</code> prop can be used to set icon buttons to a loading state, disabling user interactions.
            </Typography>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                <SingularityExample
                    name="LoadingIconButton.js"
                    className="my-4"
                    iframe={false}
                    component={LoadingIconButtonComponent}
                    raw={LoadingIconButtonRaw}
                />
            </Typography>
            <Typography
                className="text-lg mt-5 mb-2.5 font-bold"
                component="h3"
            >
                Badge
            </Typography>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                The <a href="/material-ui/react-badge/"><code>Badge</code></a> component can be used to add a badge to an <code>IconButton</code>.
            </Typography>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                <SingularityExample
                    name="IconButtonWithBadge.js"
                    className="my-4"
                    iframe={false}
                    component={IconButtonWithBadgeComponent}
                    raw={IconButtonWithBadgeRaw}
                />
            </Typography>
            <Typography
                className="text-3xl mt-6 mb-2.5 font-bold"
                component="h2"
            >
                File upload
            </Typography>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                To create a file upload button, convert the button into a label using <code>{`component="label"`}</code> and include a visually hidden input with type <code>file</code>.
            </Typography>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                <SingularityExample
                    name="InputFileUpload.js"
                    className="my-4"
                    iframe={false}
                    component={InputFileUploadComponent}
                    raw={InputFileUploadRaw}
                />
            </Typography>
            <Typography
                className="text-3xl mt-6 mb-2.5 font-bold"
                component="h2"
            >
                Loading
            </Typography>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                Starting with version 6.4.0, the <code>loading</code> prop allows buttons to be set to a loading state, preventing user interactions.
            </Typography>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                <SingularityExample
                    name="LoadingButtons.js"
                    className="my-4"
                    iframe={false}
                    component={LoadingButtonsComponent}
                    raw={LoadingButtonsRaw}
                />
            </Typography>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                Switch the loading state to observe the transition between different states.
            </Typography>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                <SingularityExample
                    name="LoadingButtonsTransition.js"
                    className="my-4"
                    iframe={false}
                    component={LoadingButtonsTransitionComponent}
                    raw={LoadingButtonsTransitionRaw}
                />
            </Typography>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                :::warning When the <code>loading</code> prop is set to <code>boolean</code>, the loading wrapper remains in the DOM to avoid a <a href="https://github.com/mui/material-ui/issues/27853">Google Translation Crash</a>.
            </Typography>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                The <code>loading</code> value should always be <code>null</code> or <code>boolean</code>. Avoid the following pattern, as it may trigger the Google Translation crash:
            </Typography>

            <SingularityHighlight
                component="pre"
                className="language-jsx"
            >
                {` 
<Button {...(isFetching && { loading: true })}> 
`}
            </SingularityHighlight>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                :::
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
                Below are examples of customizing the component. Learn more in the <a href="/material-ui/customization/how-to-customize/">overrides documentation page</a>.
            </Typography>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                <SingularityExample
                    name="CustomizedButtons.js"
                    className="my-4"
                    iframe={false}
                    component={CustomizedButtonsComponent}
                    raw={CustomizedButtonsRaw}
                />
            </Typography>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                🎨 For inspiration, explore <a href="https://mui-treasury.com/?path=/docs/button-introduction--docs">MUI Treasury's customization examples</a>.
            </Typography>
            <Typography
                className="text-3xl mt-6 mb-2.5 font-bold"
                component="h2"
            >
                Complex button
            </Typography>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                Text Buttons, Contained Buttons, Floating Action Buttons, and Icon Buttons are all built on the <code>ButtonBase</code> component. Use this foundational component to create custom interactions.
            </Typography>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                <SingularityExample
                    name="ButtonBaseDemo.js"
                    className="my-4"
                    iframe={false}
                    component={ButtonBaseDemoComponent}
                    raw={ButtonBaseDemoRaw}
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
                A common scenario is client-side navigation without a server request. The <code>ButtonBase</code> component offers the <code>component</code> prop for this purpose. See a <a href="/material-ui/integrations/routing/#button">detailed guide</a> for more information.
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
                Cursor not-allowed
            </Typography>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                The <code>ButtonBase</code> component applies <code>pointer-events: none;</code> to disabled buttons, which prevents the display of a disabled cursor.
            </Typography>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                To use a <code>not-allowed</code> cursor, you have two approaches:
            </Typography>
            <ol>
                <li>
                    <strong>CSS only</strong>. Remove the pointer-events style from the disabled state of the <code>{`<button>`}</code> element:
                </li>
            </ol>

            <SingularityHighlight
                component="pre"
                className="language-css"
            >
                {` 
.MuiButtonBase-root:disabled {
  cursor: not-allowed;
  pointer-events: auto;
}
`}
            </SingularityHighlight>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                However, consider the following:
            </Typography>
            <ul className="space-y-4">
                <li>
                    Add <code>pointer-events: none;</code> back when displaying <a href="/material-ui/react-tooltip/#disabled-elements">tooltips on disabled elements</a>.
                </li>
                <li>
                    The cursor won't change if you use an element other than a button, such as a link <code>{`<a>`}</code>.
                </li>
            </ul>
            <ol start={2}>
                <li>
                    <strong>DOM change</strong>. Wrap the button in a container:
                </li>
            </ol>

            <SingularityHighlight
                component="pre"
                className="language-jsx"
            >
                {` 
<span style={{ cursor: 'not-allowed' }}>
  <Button component={Link} disabled>
    disabled
  </Button>
</span>
`}
            </SingularityHighlight>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                This method supports any element, such as a link <code>{`<a>`}</code>.
            </Typography>
        </>
    );
}

export default ButtonsDoc;