// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
'use client';

import SingularityExample from '@singularity/core/SingularityExample';
import SingularityHighlight from '@singularity/core/SingularityHighlight';
import SingularitySvgIcon from '@singularity/core/SingularitySvgIcon';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import SimpleContainerComponent from '../../components/container/SimpleContainer';
import SimpleContainerRaw from '../../components/container/SimpleContainer.tsx?raw';
import FixedContainerComponent from '../../components/container/FixedContainer';
import FixedContainerRaw from '../../components/container/FixedContainer.tsx?raw';

function ContainerDoc(props) {
    return (
        <>
            <Button
                className="normal-case absolute right-0 not-prose"
                variant="contained"
                color="secondary"
                component="a"
                href="https://mui.com/components/container"
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
                Container
            </Typography>
            <Typography className="description">
                The container aligns your content horizontally at the center. It serves as a fundamental layout component.
            </Typography>

            <Typography
                className="text-base mb-8"
                component="div"
            >
                Although containers can be nested, most layouts do not necessitate nested containers.
            </Typography>
            <Typography
                className="text-3xl mt-6 mb-2.5 font-bold"
                component="h2"
            >
                Fluid
            </Typography>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                The width of a fluid container is constrained by the value of the <code>maxWidth</code> prop.
            </Typography>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                <SingularityExample
                    name="SimpleContainer.js"
                    className="my-4"
                    iframe
                    component={SimpleContainerComponent}
                    raw={SimpleContainerRaw}
                />
            </Typography>

            <SingularityHighlight
                component="pre"
                className="language-jsx"
            >
                {` 
<Container maxWidth="sm">
`}
            </SingularityHighlight>
            <Typography
                className="text-3xl mt-6 mb-2.5 font-bold"
                component="h2"
            >
                Fixed
            </Typography>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                For designs that prioritize a fixed set of sizes over a fully fluid viewport, you can apply the <code>fixed</code> prop. This sets the maximum width to match the minimum width of the current breakpoint.
            </Typography>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                <SingularityExample
                    name="FixedContainer.js"
                    className="my-4"
                    iframe
                    component={FixedContainerComponent}
                    raw={FixedContainerRaw}
                />
            </Typography>

            <SingularityHighlight
                component="pre"
                className="language-jsx"
            >
                {` 
<Container fixed>
`}
            </SingularityHighlight>
        </>
    );
}

export default ContainerDoc;