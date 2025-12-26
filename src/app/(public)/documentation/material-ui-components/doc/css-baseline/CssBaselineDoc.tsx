// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
'use client';

import SingularityHighlight from '@singularity/core/SingularityHighlight';
import SingularitySvgIcon from '@singularity/core/SingularitySvgIcon';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

function CssBaselineDoc(props) {
    return (
        <>
            <Button
                className="normal-case absolute right-0 not-prose"
                variant="contained"
                color="secondary"
                component="a"
                href="https://mui.com/components/css-baseline"
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
                CSS Baseline
            </Typography>
            <Typography className="description">
                The CssBaseline component establishes a refined, uniform, and straightforward foundation for building your application.
            </Typography>

            <Typography
                className="text-3xl mt-6 mb-2.5 font-bold"
                component="h2"
            >
                Global reset
            </Typography>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                You may be familiar with <a href="https://github.com/necolas/normalize.css">normalize.css</a>, a set of HTML element and attribute style normalizations.
            </Typography>

            <SingularityHighlight
                component="pre"
                className="language-jsx"
            >
                {` 
import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';

export default function MyApp() {
  return (
    <React.Fragment>
      <CssBaseline />
      {/* The rest of your application */}
    </React.Fragment>
  );
}
`}
            </SingularityHighlight>
            <Typography
                className="text-3xl mt-6 mb-2.5 font-bold"
                component="h2"
            >
                Scoping on children
            </Typography>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                If you're gradually transitioning a website to Material UI, a global reset may not be feasible. You can apply the baseline only to child elements by using the <code>ScopedCssBaseline</code> component.
            </Typography>

            <SingularityHighlight
                component="pre"
                className="language-jsx"
            >
                {` 
import * as React from 'react';
import ScopedCssBaseline from '@mui/material/ScopedCssBaseline';
import MyApp from './MyApp';

export default function MyApp() {
  return (
    <ScopedCssBaseline>
      {/* The rest of your application */}
      <MyApp />
    </ScopedCssBaseline>
  );
}
`}
            </SingularityHighlight>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                ⚠️ Ensure that <code>ScopedCssBaseline</code> is imported first to prevent box-sizing conflicts, as shown in the example above.
            </Typography>
            <Typography
                className="text-3xl mt-6 mb-2.5 font-bold"
                component="h2"
            >
                Approach
            </Typography>
            <Typography
                className="text-lg mt-5 mb-2.5 font-bold"
                component="h3"
            >
                Page
            </Typography>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                The <code>{`<html>`}</code> and <code>{`<body>`}</code> elements are styled to provide improved page-wide defaults, including:
            </Typography>
            <ul className="space-y-4">
                <li>The margin in all browsers is removed.</li>
                <li>
                    The default Material Design background color is applied. It's using{' '}
                    <a href="/material-ui/customization/default-theme/?expand-path=$.palette.background">
                        <code>theme.vars.palette.background.default</code>
                    </a>{' '}
                    for standard devices and a white background for print devices.
                </li>
                <li>
                    If <code>enableColorScheme</code> is provided to <code>CssBaseline</code>, native components color
                    will be set by applying{' '}
                    <a href="https://web.dev/articles/color-scheme">
                        <code>color-scheme</code>
                    </a>{' '}
                    on <code>{`<html>`}</code>. The value used is provided by the theme property{' '}
                    <code>theme.palette.mode</code>.
                </li>
            </ul>
            <Typography
                className="text-lg mt-5 mb-2.5 font-bold"
                component="h3"
            >
                Layout
            </Typography>
            <ul className="space-y-4">
                <li>
                    <code>box-sizing</code> is globally set to <code>border-box</code> on the <code>{`<html>`}</code> element. All elements, including <code>*::before</code> and <code>*::after</code>, inherit this property, ensuring that an element's declared width is not exceeded due to padding or border.
                </li>
            </ul>
            <Typography
                className="text-lg mt-5 mb-2.5 font-bold"
                component="h3"
            >
                Scrollbars
            </Typography>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                :::error This API is deprecated. Consider using <a href="#color-scheme">color-scheme</a> instead. :::
            </Typography>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                Scrollbar colors can be customized to enhance contrast, particularly on Windows. Include this code in your theme for dark mode.
            </Typography>

            <SingularityHighlight
                component="pre"
                className="language-jsx"
            >
                {` 
import darkScrollbar from '@mui/material/darkScrollbar';

const theme = createTheme({
  components: {
    MuiCssBaseline: {
      styleOverrides: (themeParam) => ({
        body: themeParam.palette.mode === 'dark' ? darkScrollbar() : null,
      }),
    },
  },
});
`}
            </SingularityHighlight>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                Note that using this utility (and customizing <code>-webkit-scrollbar</code>) will cause macOS to always display the scrollbar.
            </Typography>
            <Typography
                className="text-lg mt-5 mb-2.5 font-bold"
                component="h3"
            >
                Color scheme
            </Typography>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                Introduced in @mui/material (v5.1.0), this API enables switching between <code>{`"light"`}</code> and <code>{`"dark"`}</code> modes for native components, such as scrollbars, using the <code>color-scheme</code> CSS property. To activate it, set <code>enableColorScheme=true</code> as shown below:
            </Typography>

            <SingularityHighlight
                component="pre"
                className="language-jsx"
            >
                {` 
<CssBaseline enableColorScheme />

// or

<ScopedCssBaseline enableColorScheme >
  {/* The rest of your application using color-scheme*/}
</ScopedCssBaseline>
`}
            </SingularityHighlight>
            <Typography
                className="text-lg mt-5 mb-2.5 font-bold"
                component="h3"
            >
                Typography
            </Typography>
            <ul className="space-y-4">
                <li>
                    No base font-size is set on the <code>{`<html>`}</code> element, but 16px is assumed (the browser default). Learn more about the implications of modifying the <code>{`<html>`}</code> default font size in <a href="/material-ui/customization/typography/#html-font-size">the theme documentation</a> page.
                </li>
                <li>
                    The <code>theme.typography.body1</code> style is applied to the <code>{`<body>`}</code> element.
                </li>
                <li>
                    The font-weight is set to <code>theme.typography.fontWeightBold</code> for the <code>{`<b>`}</code> and <code>{`<strong>`}</code> elements.
                </li>
                <li>Custom font-smoothing is enabled to optimize the display of the Roboto font.</li>
            </ul>
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
                Visit the <a href="/material-ui/customization/how-to-customize/#4-global-css-override">global customization</a> section of the documentation to modify the output of these components.
            </Typography>
        </>
    );
}

export default CssBaselineDoc;