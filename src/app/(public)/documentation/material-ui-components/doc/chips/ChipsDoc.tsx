// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
'use client';

import SingularityExample from '@singularity/core/SingularityExample';
import SingularitySvgIcon from '@singularity/core/SingularitySvgIcon';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import BasicChipsComponent from '../../components/chips/BasicChips';
import BasicChipsRaw from '../../components/chips/BasicChips.tsx?raw';
import ClickableChipsComponent from '../../components/chips/ClickableChips';
import ClickableChipsRaw from '../../components/chips/ClickableChips.tsx?raw';
import DeletableChipsComponent from '../../components/chips/DeletableChips';
import DeletableChipsRaw from '../../components/chips/DeletableChips.tsx?raw';
import ClickableAndDeletableChipsComponent from '../../components/chips/ClickableAndDeletableChips';
import ClickableAndDeletableChipsRaw from '../../components/chips/ClickableAndDeletableChips.tsx?raw';
import ClickableLinkChipsComponent from '../../components/chips/ClickableLinkChips';
import ClickableLinkChipsRaw from '../../components/chips/ClickableLinkChips.tsx?raw';
import CustomDeleteIconChipsComponent from '../../components/chips/CustomDeleteIconChips';
import CustomDeleteIconChipsRaw from '../../components/chips/CustomDeleteIconChips.tsx?raw';
import AvatarChipsComponent from '../../components/chips/AvatarChips';
import AvatarChipsRaw from '../../components/chips/AvatarChips.tsx?raw';
import IconChipsComponent from '../../components/chips/IconChips';
import IconChipsRaw from '../../components/chips/IconChips.tsx?raw';
import ColorChipsComponent from '../../components/chips/ColorChips';
import ColorChipsRaw from '../../components/chips/ColorChips.tsx?raw';
import SizesChipsComponent from '../../components/chips/SizesChips';
import SizesChipsRaw from '../../components/chips/SizesChips.tsx?raw';
import MultilineChipsComponent from '../../components/chips/MultilineChips';
import MultilineChipsRaw from '../../components/chips/MultilineChips.tsx?raw';
import ChipsArrayComponent from '../../components/chips/ChipsArray';
import ChipsArrayRaw from '../../components/chips/ChipsArray.tsx?raw';

function ChipsDoc(props) {
    return (
        <>
            <Button
                className="normal-case absolute right-0 not-prose"
                variant="contained"
                color="secondary"
                component="a"
                href="https://mui.com/components/chips"
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
                Chip
            </Typography>
            <Typography className="description">
                Chips are small, interactive elements that represent inputs, attributes, or actions.
            </Typography>

            <Typography
                className="text-base mb-8"
                component="div"
            >
                Chips enable users to input data, select options, filter content, or initiate actions.
            </Typography>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                Although presented here as a standalone component, Chips are most commonly used within input fields, so some behaviors shown here may not apply in all contexts.
            </Typography>
            <Typography
                className="text-3xl mt-6 mb-2.5 font-bold"
                component="h2"
            >
                Basic chip
            </Typography>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                The <code>Chip</code> component supports both outlined and filled styling options.
            </Typography>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                <SingularityExample
                    name="BasicChips.js"
                    className="my-4"
                    iframe={false}
                    component={BasicChipsComponent}
                    raw={BasicChipsRaw}
                />
            </Typography>
            <Typography
                className="text-3xl mt-6 mb-2.5 font-bold"
                component="h2"
            >
                Chip actions
            </Typography>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                The following actions can be applied to Chips:
            </Typography>
            <ul className="space-y-4">
                <li>
                    Chips with the <code>onClick</code> prop defined change appearance on focus, hover, and click.
                </li>
                <li>
                    Chips with the <code>onDelete</code> prop defined will display a delete icon which changes
                    appearance on hover.
                </li>
            </ul>
            <Typography
                className="text-lg mt-5 mb-2.5 font-bold"
                component="h3"
            >
                Clickable
            </Typography>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                <SingularityExample
                    name="ClickableChips.js"
                    className="my-4"
                    iframe={false}
                    component={ClickableChipsComponent}
                    raw={ClickableChipsRaw}
                />
            </Typography>
            <Typography
                className="text-lg mt-5 mb-2.5 font-bold"
                component="h3"
            >
                Deletable
            </Typography>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                <SingularityExample
                    name="DeletableChips.js"
                    className="my-4"
                    iframe={false}
                    component={DeletableChipsComponent}
                    raw={DeletableChipsRaw}
                />
            </Typography>
            <Typography
                className="text-lg mt-5 mb-2.5 font-bold"
                component="h3"
            >
                Clickable and deletable
            </Typography>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                <SingularityExample
                    name="ClickableAndDeletableChips.js"
                    className="my-4"
                    iframe={false}
                    component={ClickableAndDeletableChipsComponent}
                    raw={ClickableAndDeletableChipsRaw}
                />
            </Typography>
            <Typography
                className="text-lg mt-5 mb-2.5 font-bold"
                component="h3"
            >
                Clickable link
            </Typography>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                <SingularityExample
                    name="ClickableLinkChips.js"
                    className="my-4"
                    iframe={false}
                    component={ClickableLinkChipsComponent}
                    raw={ClickableLinkChipsRaw}
                />
            </Typography>
            <Typography
                className="text-lg mt-5 mb-2.5 font-bold"
                component="h3"
            >
                Custom delete icon
            </Typography>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                <SingularityExample
                    name="CustomDeleteIconChips.js"
                    className="my-4"
                    iframe={false}
                    component={CustomDeleteIconChipsComponent}
                    raw={CustomDeleteIconChipsRaw}
                />
            </Typography>
            <Typography
                className="text-3xl mt-6 mb-2.5 font-bold"
                component="h2"
            >
                Chip adornments
            </Typography>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                You can add decorative elements to the start of the Chip component.
            </Typography>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                Use the <code>avatar</code> prop to include an avatar or the <code>icon</code> prop to add an icon.
            </Typography>
            <Typography
                className="text-lg mt-5 mb-2.5 font-bold"
                component="h3"
            >
                Avatar chip
            </Typography>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                <SingularityExample
                    name="AvatarChips.js"
                    className="my-4"
                    iframe={false}
                    component={AvatarChipsComponent}
                    raw={AvatarChipsRaw}
                />
            </Typography>
            <Typography
                className="text-lg mt-5 mb-2.5 font-bold"
                component="h3"
            >
                Icon chip
            </Typography>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                <SingularityExample
                    name="IconChips.js"
                    className="my-4"
                    iframe={false}
                    component={IconChipsComponent}
                    raw={IconChipsRaw}
                />
            </Typography>
            <Typography
                className="text-3xl mt-6 mb-2.5 font-bold"
                component="h2"
            >
                Color chip
            </Typography>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                Apply the <code>color</code> prop to select a color from the theme palette.
            </Typography>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                <SingularityExample
                    name="ColorChips.js"
                    className="my-4"
                    iframe={false}
                    component={ColorChipsComponent}
                    raw={ColorChipsRaw}
                />
            </Typography>
            <Typography
                className="text-3xl mt-6 mb-2.5 font-bold"
                component="h2"
            >
                Sizes chip
            </Typography>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                Use the <code>size</code> prop to create a smaller Chip.
            </Typography>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                <SingularityExample
                    name="SizesChips.js"
                    className="my-4"
                    iframe={false}
                    component={SizesChipsComponent}
                    raw={SizesChipsRaw}
                />
            </Typography>
            <Typography
                className="text-3xl mt-6 mb-2.5 font-bold"
                component="h2"
            >
                Multiline chip
            </Typography>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                By default, Chips display labels on a single line. To support multiline content, apply the <code>sx</code> prop to set <code>height:auto</code> on the Chip component and <code>whiteSpace: normal</code> on the <code>label</code> styles.
            </Typography>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                <SingularityExample
                    name="MultilineChips.js"
                    className="my-4"
                    iframe={false}
                    component={MultilineChipsComponent}
                    raw={MultilineChipsRaw}
                />
            </Typography>
            <Typography
                className="text-3xl mt-6 mb-2.5 font-bold"
                component="h2"
            >
                Chip array
            </Typography>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                This example demonstrates rendering multiple chips from an array of values. Removing a chip deletes it from the array. Without an <code>onClick</code> prop, the <code>Chip</code> can be focused but does not gain depth when clicked or touched.
            </Typography>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                <SingularityExample
                    name="ChipsArray.js"
                    className="my-4"
                    iframe={false}
                    component={ChipsArrayComponent}
                    raw={ChipsArrayRaw}
                />
            </Typography>
            <Typography
                className="text-3xl mt-6 mb-2.5 font-bold"
                component="h2"
            >
                Chip playground
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
                When a Chip is clickable or deletable, it functions as a button in the tab order. When focused (e.g., via tabbing), releasing <code>Backspace</code> or <code>Delete</code> (<code>keyup</code> event) triggers the <code>onDelete</code> handler, while releasing <code>Escape</code> blurs the Chip.
            </Typography>
        </>
    );
}

export default ChipsDoc;