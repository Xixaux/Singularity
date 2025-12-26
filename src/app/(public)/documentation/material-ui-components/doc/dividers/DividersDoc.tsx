// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
'use client';

import SingularityExample from '@singularity/core/SingularityExample';
import SingularityHighlight from '@singularity/core/SingularityHighlight';
import SingularitySvgIcon from '@singularity/core/SingularitySvgIcon';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import IntroDividerComponent from '../../components/dividers/IntroDivider';
import IntroDividerRaw from '../../components/dividers/IntroDivider.tsx?raw';
import DividerVariantsComponent from '../../components/dividers/DividerVariants';
import DividerVariantsRaw from '../../components/dividers/DividerVariants.tsx?raw';
import VerticalDividersComponent from '../../components/dividers/VerticalDividers';
import VerticalDividersRaw from '../../components/dividers/VerticalDividers.tsx?raw';
import FlexDividerComponent from '../../components/dividers/FlexDivider';
import FlexDividerRaw from '../../components/dividers/FlexDivider.tsx?raw';
import DividerTextComponent from '../../components/dividers/DividerText';
import DividerTextRaw from '../../components/dividers/DividerText.tsx?raw';
import ListDividersComponent from '../../components/dividers/ListDividers';
import ListDividersRaw from '../../components/dividers/ListDividers.tsx?raw';
import VerticalDividerMiddleComponent from '../../components/dividers/VerticalDividerMiddle';
import VerticalDividerMiddleRaw from '../../components/dividers/VerticalDividerMiddle.tsx?raw';

function DividersDoc(props) {
    return (
        <>
            <Button
                className="normal-case absolute right-0 not-prose"
                variant="contained"
                color="secondary"
                component="a"
                href="https://mui.com/components/dividers"
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
                Divider
            </Typography>
            <Typography className="description">
                The Divider component offers a subtle, lightweight line to organize elements and enhance visual structure.
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
                The Material UI Divider component appears as a dark gray <code>{`<hr>`}</code> by default and includes various props for easy style customization.
            </Typography>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                <SingularityExample
                    name="IntroDivider.js"
                    className="my-4"
                    iframe={false}
                    component={IntroDividerComponent}
                    raw={IntroDividerRaw}
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
import Divider from '@mui/material/Divider';
`}
            </SingularityHighlight>
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
                The Divider component offers three variants: <code>fullWidth</code> (default), <code>inset</code>, and <code>middle</code>.
            </Typography>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                <SingularityExample
                    name="DividerVariants.js"
                    className="my-4"
                    iframe={false}
                    component={DividerVariantsComponent}
                    raw={DividerVariantsRaw}
                />
            </Typography>
            <Typography
                className="text-lg mt-5 mb-2.5 font-bold"
                component="h3"
            >
                Orientation
            </Typography>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                Apply the <code>orientation</code> prop to switch the Divider from horizontal to vertical. In vertical orientation, the Divider renders as a <code>{`<div>`}</code> with appropriate accessibility attributes instead of <code>{`<hr>`}</code> to comply with the WAI-ARIA <a href="https://www.w3.org/TR/wai-aria-1.2/#separator">spec</a>.
            </Typography>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                <SingularityExample
                    name="VerticalDividers.js"
                    className="my-4"
                    iframe={false}
                    component={VerticalDividersComponent}
                    raw={VerticalDividersRaw}
                />
            </Typography>
            <Typography
                className="text-lg mt-5 mb-2.5 font-bold"
                component="h3"
            >
                Flex item
            </Typography>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                Enable the <code>flexItem</code> prop to properly display the Divider within a flex container.
            </Typography>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                <SingularityExample
                    name="FlexDivider.js"
                    className="my-4"
                    iframe={false}
                    component={FlexDividerComponent}
                    raw={FlexDividerRaw}
                />
            </Typography>
            <Typography
                className="text-lg mt-5 mb-2.5 font-bold"
                component="h3"
            >
                With children
            </Typography>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                Utilize the <code>textAlign</code> prop to position elements wrapped by the Divider.
            </Typography>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                <SingularityExample
                    name="DividerText.js"
                    className="my-4"
                    iframe={false}
                    component={DividerTextComponent}
                    raw={DividerTextRaw}
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
                Use with a List
            </Typography>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                When separating items in a List, set the <code>component</code> prop to render the Divider as an <code>{`<li>`}</code> to ensure valid HTML structure.
            </Typography>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                <SingularityExample
                    name="ListDividers.js"
                    className="my-4"
                    iframe={false}
                    component={ListDividersComponent}
                    raw={ListDividersRaw}
                />
            </Typography>
            <Typography
                className="text-lg mt-5 mb-2.5 font-bold"
                component="h3"
            >
                Icon grouping
            </Typography>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                The example below demonstrates combining the <code>{`variant="middle"`}</code> and <code>{`orientation="vertical"`}</code> props.
            </Typography>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                <SingularityExample
                    name="VerticalDividerMiddle.js"
                    className="my-4"
                    iframe={false}
                    component={VerticalDividerMiddleComponent}
                    raw={VerticalDividerMiddleRaw}
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
                With its implicit <code>separator</code> role, the Divider, a <code>{`<hr>`}</code> element, is announced by screen readers as a "Horizontal Splitter" (or vertical, when using the <code>orientation</code> prop).
            </Typography>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                For purely stylistic use, set <code>{`aria-hidden="true"`}</code> to prevent screen readers from announcing the Divider.
            </Typography>

            <SingularityHighlight
                component="pre"
                className="language-js"
            >
                {` 
<Divider aria-hidden="true" />
`}
            </SingularityHighlight>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                When wrapping other elements like text or chips with the Divider, use the <code>component</code> prop to render it as a <code>{`<div>`}</code> and set <code>{`role="presentation"`}</code>. This prevents screen reader announcements while maintaining the semantics of the enclosed elements.
            </Typography>

            <SingularityHighlight
                component="pre"
                className="language-js"
            >
                {` 
<Divider component="div" role="presentation">
  <Typography>Text element</Typography>
</Divider>
`}
            </SingularityHighlight>
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
                The Divider component consists of a root <code>{`<hr>`}</code> element.
            </Typography>

            <SingularityHighlight
                component="pre"
                className="language-html"
            >
                {` 
<hr className="MuiDivider-root">
  
</hr>
`}
            </SingularityHighlight>
        </>
    );
}

export default DividersDoc;