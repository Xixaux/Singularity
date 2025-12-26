// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
'use client';

import SingularityExample from '@singularity/core/SingularityExample';
import SingularityHighlight from '@singularity/core/SingularityHighlight';
import SingularitySvgIcon from '@singularity/core/SingularitySvgIcon';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import BoxBasicComponent from '../../components/box/BoxBasic';
import BoxBasicRaw from '../../components/box/BoxBasic.tsx?raw';
import BoxSxComponent from '../../components/box/BoxSx';
import BoxSxRaw from '../../components/box/BoxSx.tsx?raw';

function BoxDoc(props) {
    return (
        <>
            <Button
                className="normal-case absolute right-0 not-prose"
                variant="contained"
                color="secondary"
                component="a"
                href="https://mui.com/components/box"
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
                Box
            </Typography>
            <Typography className="description">
                The Box component serves as a versatile, theme-aware container with access to MUI System's CSS utilities.
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
                The Box component acts as a general-purpose container for organizing other components. It’s a core element in Material UI, functioning as an enhanced <code>{`<div>`}</code> with built-in features like theme integration and the{' '}
                <a href="/system/getting-started/the-sx-prop/">
                    <code>sx</code> prop
                </a>.
            </Typography>
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
                The Box component is designed for flexible, multipurpose use, similar to a <code>{`<div>`}</code>. Unlike other Material UI containers such as <a href="/material-ui/react-container/">Container</a>, <a href="/material-ui/react-stack/">Stack</a>, and <a href="/material-ui/react-paper/">Paper</a>, which are tailored for specific purposes (main layout orientation, one-dimensional layouts, and elevated surfaces, respectively), Box offers open-ended functionality.
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
import Box from '@mui/material/Box';
`}
            </SingularityHighlight>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                By default, the Box component renders as a <code>{`<div>`}</code>, but you can substitute it with any valid HTML tag or React component using the <code>component</code> prop. The example below demonstrates replacing the <code>{`<div>`}</code> with a <code>{`<section>`}</code> element:
            </Typography>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                <SingularityExample
                    name="BoxBasic.js"
                    className="my-4"
                    iframe={false}
                    component={BoxBasicComponent}
                    raw={BoxBasicRaw}
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
                With the sx prop
            </Typography>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                Leverage the{' '}
                <a href="/system/getting-started/the-sx-prop/">
                    <code>sx</code> prop
                </a>{' '}
                to easily customize any Box instance with a comprehensive set of CSS properties, including access to MUI System’s style functions and theme-aware properties. The example below illustrates applying theme colors using this prop:
            </Typography>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                <SingularityExample
                    name="BoxSx.js"
                    className="my-4"
                    iframe={false}
                    component={BoxSxComponent}
                    raw={BoxSxRaw}
                />
            </Typography>
            <Typography
                className="text-lg mt-5 mb-2.5 font-bold"
                component="h3"
            >
                With MUI System props
            </Typography>
            <div className="border-1 p-4 rounded-xl my-3">
                <Typography
                    className="text-base mb-8"
                    component="div"
                >
                    MUI System props are deprecated and will be phased out in the next major release. It’s recommended to use the <code>sx</code> prop instead.
                </Typography>

                <SingularityHighlight
                    component="pre"
                    className="language-diff"
                >
                    {` 
- <Box mt={2} />
+ <Box sx={{ mt: 2 }} />
`}
                </SingularityHighlight>
            </div>

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
                The Box component consists of a single root <code>{`<div>`}</code> element:
            </Typography>

            <SingularityHighlight
                component="pre"
                className="language-html"
            >
                {` 
<div className="MuiBox-root">
  
</div>
`}
            </SingularityHighlight>
        </>
    );
}

export default BoxDoc;