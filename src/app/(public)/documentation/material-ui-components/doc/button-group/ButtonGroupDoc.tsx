'use client';

import SingularityExample from '@singularity/core/SingularityExample';
import SingularitySvgIcon from '@singularity/core/SingularitySvgIcon';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import BasicButtonGroupComponent from '../../components/button-group/BasicButtonGroup';
import BasicButtonGroupRaw from '../../components/button-group/BasicButtonGroup.tsx?raw';
import VariantButtonGroupComponent from '../../components/button-group/VariantButtonGroup';
import VariantButtonGroupRaw from '../../components/button-group/VariantButtonGroup.tsx?raw';
import GroupSizesColorsComponent from '../../components/button-group/GroupSizesColors';
import GroupSizesColorsRaw from '../../components/button-group/GroupSizesColors.tsx?raw';
import GroupOrientationComponent from '../../components/button-group/GroupOrientation';
import GroupOrientationRaw from '../../components/button-group/GroupOrientation.tsx?raw';
import SplitButtonComponent from '../../components/button-group/SplitButton';
import SplitButtonRaw from '../../components/button-group/SplitButton.tsx?raw';
import DisableElevationComponent from '../../components/button-group/DisableElevation';
import DisableElevationRaw from '../../components/button-group/DisableElevation.tsx?raw';
import LoadingButtonGroupComponent from '../../components/button-group/LoadingButtonGroup';
import LoadingButtonGroupRaw from '../../components/button-group/LoadingButtonGroup.tsx?raw';

// Define props type (likely empty for a Next.js page component)
type ButtonGroupDocProps = {};

function ButtonGroupDoc(props: ButtonGroupDocProps) {
    return (
        <>
            <Button
                className="normal-case absolute right-0 not-prose"
                variant="contained"
                color="secondary"
                component="a"
                href="https://mui.com/components/button-group"
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
                Button Group
            </Typography>
            <Typography className="description">
                The ButtonGroup component allows for the grouping of related buttons into a single unit.
            </Typography>

            <Typography
                className="text-3xl mt-6 mb-2.5 font-bold"
                component="h2"
            >
                Basic button group
            </Typography>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                Buttons can be grouped by enclosing them within the <code>ButtonGroup</code> component, where they must be direct children.
            </Typography>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                <SingularityExample
                    name="BasicButtonGroup.js"
                    className="my-4"
                    iframe={false}
                    component={BasicButtonGroupComponent}
                    raw={BasicButtonGroupRaw}
                />
            </Typography>
            <Typography
                className="text-3xl mt-6 mb-2.5 font-bold"
                component="h2"
            >
                Button variants
            </Typography>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                All standard button styles are supported.
            </Typography>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                <SingularityExample
                    name="VariantButtonGroup.js"
                    className="my-4"
                    iframe={false}
                    component={VariantButtonGroupComponent}
                    raw={VariantButtonGroupRaw}
                />
            </Typography>
            <Typography
                className="text-3xl mt-6 mb-2.5 font-bold"
                component="h2"
            >
                Sizes and colors
            </Typography>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                The <code>size</code> and <code>color</code> props allow customization of the button group's appearance.
            </Typography>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                <SingularityExample
                    name="GroupSizesColors.js"
                    className="my-4"
                    iframe={false}
                    component={GroupSizesColorsComponent}
                    raw={GroupSizesColorsRaw}
                />
            </Typography>
            <Typography
                className="text-3xl mt-6 mb-2.5 font-bold"
                component="h2"
            >
                Vertical group
            </Typography>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                The button group can be arranged vertically by utilizing the <code>orientation</code> prop.
            </Typography>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                <SingularityExample
                    name="GroupOrientation.js"
                    className="my-4"
                    iframe={false}
                    component={GroupOrientationComponent}
                    raw={GroupOrientationRaw}
                />
            </Typography>
            <Typography
                className="text-3xl mt-6 mb-2.5 font-bold"
                component="h2"
            >
                Split button
            </Typography>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                The <code>ButtonGroup</code> component can be used to create a split button, where the dropdown can modify the button's action (as shown in this example) or trigger a related action immediately.
            </Typography>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                <SingularityExample
                    name="SplitButton.js"
                    className="my-4"
                    iframe={false}
                    component={SplitButtonComponent}
                    raw={SplitButtonRaw}
                />
            </Typography>
            <Typography
                className="text-3xl mt-6 mb-2.5 font-bold"
                component="h2"
            >
                Disabled elevation
            </Typography>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                The <code>disableElevation</code> prop can be used to remove the elevation effect from the button group.
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
                className="text-3xl mt-6 mb-2.5 font-bold"
                component="h2"
            >
                Loading
            </Typography>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                The <code>loading</code> prop on the <code>Button</code> component can be used to place buttons in a loading state, preventing user interactions.
            </Typography>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                <SingularityExample
                    name="LoadingButtonGroup.js"
                    className="my-4"
                    iframe={false}
                    component={LoadingButtonGroupComponent}
                    raw={LoadingButtonGroupRaw}
                />
            </Typography>
        </>
    );
}

export default ButtonGroupDoc;