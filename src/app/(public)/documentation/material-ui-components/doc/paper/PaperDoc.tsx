// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
'use client';

import SingularityExample from '@singularity/core/SingularityExample';
import SingularityHighlight from '@singularity/core/SingularityHighlight';
import SingularitySvgIcon from '@singularity/core/SingularitySvgIcon';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import SimplePaperComponent from '../../components/paper/SimplePaper';
import SimplePaperRaw from '../../components/paper/SimplePaper.tsx?raw';
import ElevationComponent from '../../components/paper/Elevation';
import ElevationRaw from '../../components/paper/Elevation.tsx?raw';
import VariantsComponent from '../../components/paper/Variants';
import VariantsRaw from '../../components/paper/Variants.tsx?raw';
import SquareCornersComponent from '../../components/paper/SquareCorners';
import SquareCornersRaw from '../../components/paper/SquareCorners.tsx?raw';

function PaperDoc(props) {
    return (
        <>
            <Button
                className="normal-case absolute right-0 not-prose"
                variant="contained"
                color="secondary"
                component="a"
                href="https://mui.com/components/paper"
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
                Paper
            </Typography>
            <Typography className="description">
                The Paper component serves as a container for presenting content on a raised surface.
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
                In Material Design, the appearance of surfaces and shadows draws inspiration from their physical equivalents in the real world.
            </Typography>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                Material UI brings this concept to life through the Paper component, a surface-like container that utilizes the{' '}
                <a href="#elevation">
                    <code>elevation</code>
                </a>{' '}
                prop to apply box-shadow values sourced from the theme.
            </Typography>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                :::success The Paper component is well-suited for designs adhering to{' '}
                <a href="https://m2.material.io/design/environment/elevation.html#elevation-in-material-design">
                    Material Design's elevation system
                </a>
                , which aims to mimic the way light creates shadows in the physical environment.
            </Typography>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                If you require a general-purpose container, consider using the{' '}
                <a href="/material-ui/react-box/">Box</a> or <a href="/material-ui/react-container/">Container</a>{' '}
                components instead. :::
            </Typography>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                <SingularityExample
                    name="SimplePaper.js"
                    className="my-4"
                    iframe={false}
                    component={SimplePaperComponent}
                    raw={SimplePaperRaw}
                />
            </Typography>
            <Typography
                className="text-3xl mt-6 mb-2.5 font-bold"
                component="h2"
            >
                Component
            </Typography>

            <SingularityHighlight
                component="pre"
                className="language-jsx"
            >
                {` 
import Paper from '@mui/material/Paper';
`}
            </SingularityHighlight>
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
                Elevation
            </Typography>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                Apply the <code>elevation</code> prop to create a visual hierarchy using shadows. The Paper component's default elevation is set to <code>1</code>. This prop accepts values from <code>0</code>{' '}
                to <code>24</code>, with higher values making the Paper appear farther from its background.
            </Typography>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                In dark mode, elevating the Paper also lightens its background color. This effect is achieved by applying a semi-transparent gradient via the <code>background-image</code> CSS property.
            </Typography>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                :::warning Be cautious when overriding the Paper component in dark mode, as modifying the <code>background-color</code> property alone won’t impact the lighter shading. To customize it, you must adjust both <code>background-color</code> and <code>background-image</code> or use a new background value. :::
            </Typography>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                <SingularityExample
                    name="Elevation.js"
                    className="my-4"
                    iframe={false}
                    component={ElevationComponent}
                    raw={ElevationRaw}
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
                Use the <code>variant</code> prop set to <code>{`"outlined"`}</code> to create a flat, outlined Paper without shadows:
            </Typography>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                <SingularityExample
                    name="Variants.js"
                    className="my-4"
                    iframe={false}
                    component={VariantsComponent}
                    raw={VariantsRaw}
                />
            </Typography>
            <Typography
                className="text-lg mt-5 mb-2.5 font-bold"
                component="h3"
            >
                Corners
            </Typography>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                By default, the Paper component has rounded corners. To achieve square corners, include the <code>square</code> prop:
            </Typography>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                <SingularityExample
                    name="SquareCorners.js"
                    className="my-4"
                    iframe={false}
                    component={SquareCornersComponent}
                    raw={SquareCornersRaw}
                />
            </Typography>
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
                The Paper component consists of a single root <code>{`<div>`}</code> element that encloses its content:
            </Typography>

            <SingularityHighlight
                component="pre"
                className="language-html"
            >
                {` 
<div className="MuiPaper-root">
  
</div>
`}
            </SingularityHighlight>
        </>
    );
}

export default PaperDoc;