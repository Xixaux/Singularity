// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
'use client';

import SingularityExample from '@singularity/core/SingularityExample';
import SingularityHighlight from '@singularity/core/SingularityHighlight';
import SingularitySvgIcon from '@singularity/core/SingularitySvgIcon';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import BasicGridComponent from '../../components/grid-legacy/BasicGrid';
import BasicGridRaw from '../../components/grid-legacy/BasicGrid.tsx?raw';
import FullWidthGridComponent from '../../components/grid-legacy/FullWidthGrid';
import FullWidthGridRaw from '../../components/grid-legacy/FullWidthGrid.tsx?raw';
import SpacingGridComponent from '../../components/grid-legacy/SpacingGrid';
import SpacingGridRaw from '../../components/grid-legacy/SpacingGrid.tsx?raw';
import RowAndColumnSpacingComponent from '../../components/grid-legacy/RowAndColumnSpacing';
import RowAndColumnSpacingRaw from '../../components/grid-legacy/RowAndColumnSpacing.tsx?raw';
import ResponsiveGridComponent from '../../components/grid-legacy/ResponsiveGrid';
import ResponsiveGridRaw from '../../components/grid-legacy/ResponsiveGrid.tsx?raw';
import InteractiveGridComponent from '../../components/grid-legacy/InteractiveGrid';
import InteractiveGridRaw from '../../components/grid-legacy/InteractiveGrid.tsx?raw';
import AutoGridComponent from '../../components/grid-legacy/AutoGrid';
import AutoGridRaw from '../../components/grid-legacy/AutoGrid.tsx?raw';
import VariableWidthGridComponent from '../../components/grid-legacy/VariableWidthGrid';
import VariableWidthGridRaw from '../../components/grid-legacy/VariableWidthGrid.tsx?raw';
import ComplexGridComponent from '../../components/grid-legacy/ComplexGrid';
import ComplexGridRaw from '../../components/grid-legacy/ComplexGrid.tsx?raw';
import NestedGridComponent from '../../components/grid-legacy/NestedGrid';
import NestedGridRaw from '../../components/grid-legacy/NestedGrid.tsx?raw';
import ColumnsGridComponent from '../../components/grid-legacy/ColumnsGrid';
import ColumnsGridRaw from '../../components/grid-legacy/ColumnsGrid.tsx?raw';
import AutoGridNoWrapComponent from '../../components/grid-legacy/AutoGridNoWrap';
import AutoGridNoWrapRaw from '../../components/grid-legacy/AutoGridNoWrap.tsx?raw';
import CSSGridComponent from '../../components/grid-legacy/CSSGrid';
import CSSGridRaw from '../../components/grid-legacy/CSSGrid.tsx?raw';

function GridLegacyDoc(props) {
    return (
        <>
            <Button
                className="normal-case absolute right-0 not-prose"
                variant="contained"
                color="secondary"
                component="a"
                href="https://mui.com/components/grid-legacy"
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
                GridLegacy
            </Typography>
            <Typography className="description">
                The Material Design responsive layout grid adjusts to different screen sizes and orientations, maintaining uniformity across layouts.
            </Typography>

            <Typography
                className="text-base mb-8"
                component="div"
            >
                The <a href="https://m2.material.io/design/layout/responsive-layout-grid.html">grid</a> ensures visual harmony across layouts while supporting flexibility for a wide range of designs. Material Design's responsive UI relies on a 12-column grid system.
            </Typography>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                :::warning The <code>GridLegacy</code> component is not intended to function as a data grid; it serves as a layout grid. For a data grid, refer to <a href="/x/react-data-grid/">the <code>DataGrid</code> component</a>. :::
            </Typography>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                :::warning The <code>GridLegacy</code> component is deprecated. It is recommended to use <a href="/material-ui/react-grid/">Grid</a> instead. Consult the <a href="/material-ui/migration/upgrade-to-grid-v2/">Grid upgrade guide</a> for additional information. :::
            </Typography>
            <Typography
                className="text-3xl mt-6 mb-2.5 font-bold"
                component="h2"
            >
                How it works
            </Typography>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                The grid system is built using the <code>GridLegacy</code> component:
            </Typography>
            <ul className="space-y-4">
                <li>
                    It leverages <a href="https://www.w3.org/TR/css-flexbox-1/">CSS Flexible Box module</a> for enhanced flexibility.
                </li>
                <li>
                    There are two layout types: <em>containers</em> and <em>items</em>.
                </li>
                <li>
                    Item widths are defined in percentages, ensuring they remain fluid and scale relative to their parent container.
                </li>
                <li>Items include padding to establish spacing between individual elements.</li>
                <li>Five grid breakpoints are available: xs, sm, md, lg, and xl.</li>
                <li>
                    Each breakpoint can be assigned integer values to specify how many of the 12 columns a component occupies when the viewport width meets the <a href="/material-ui/customization/breakpoints/#default-breakpoints">breakpoint constraints</a>.
                </li>
            </ul>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                If you are <strong>new to or unfamiliar with flexbox</strong>, we recommend reviewing this <a href="https://css-tricks.com/snippets/css/a-guide-to-flexbox/">CSS-Tricks flexbox guide</a>.
            </Typography>
            <Typography
                className="text-3xl mt-6 mb-2.5 font-bold"
                component="h2"
            >
                Fluid grids
            </Typography>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                Fluid grids utilize columns that adjust and resize content dynamically. The layout of a fluid grid can employ breakpoints to determine when significant layout changes are needed.
            </Typography>
            <Typography
                className="text-lg mt-5 mb-2.5 font-bold"
                component="h3"
            >
                Basic grid
            </Typography>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                Column widths are set as integer values from 1 to 12, applicable at any breakpoint, indicating the number of columns a component occupies.
            </Typography>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                A value assigned to a breakpoint applies to all wider breakpoints unless explicitly overridden. For instance, <code>{`xs={12}`}</code> ensures a component spans the entire width of its parent container across all viewport sizes.
            </Typography>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                <SingularityExample
                    name="BasicGrid.js"
                    className="my-4"
                    iframe={false}
                    component={BasicGridComponent}
                    raw={BasicGridRaw}
                />
            </Typography>
            <Typography
                className="text-lg mt-5 mb-2.5 font-bold"
                component="h3"
            >
                Grid with multiple breakpoints
            </Typography>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                Components can have multiple widths defined, triggering layout changes at specified breakpoints. Values set for larger breakpoints take precedence over those for smaller ones.
            </Typography>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                For example, <code>{`xs={12} sm={6}`}</code> makes a component occupy half the viewport width (6 columns) when the viewport is <a href="/material-ui/customization/breakpoints/#default-breakpoints">600 pixels or wider</a>. For smaller viewports, it spans all 12 columns.
            </Typography>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                <SingularityExample
                    name="FullWidthGrid.js"
                    className="my-4"
                    iframe={false}
                    component={FullWidthGridComponent}
                    raw={FullWidthGridRaw}
                />
            </Typography>
            <Typography
                className="text-3xl mt-6 mb-2.5 font-bold"
                component="h2"
            >
                Spacing
            </Typography>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                To manage spacing between child elements, use the <code>spacing</code> prop. This value can be any positive number, including decimals, or any string, and is transformed into a CSS property via the <a href="/material-ui/customization/spacing/"><code>theme.spacing()</code></a> helper.
            </Typography>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                <SingularityExample
                    name="SpacingGrid.js"
                    className="my-4"
                    iframe={false}
                    component={SpacingGridComponent}
                    raw={SpacingGridRaw}
                />
            </Typography>
            <Typography
                className="text-lg mt-5 mb-2.5 font-bold"
                component="h3"
            >
                Row & column spacing
            </Typography>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                The <code>rowSpacing</code> and <code>columnSpacing</code> props enable independent control over row and column gaps, similar to the <code>row-gap</code> and <code>column-gap</code> properties in <a href="/system/grid/#row-gap-amp-column-gap">CSS Grid</a>.
            </Typography>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                <SingularityExample
                    name="RowAndColumnSpacing.js"
                    className="my-4"
                    iframe={false}
                    component={RowAndColumnSpacingComponent}
                    raw={RowAndColumnSpacingRaw}
                />
            </Typography>
            <Typography
                className="text-3xl mt-6 mb-2.5 font-bold"
                component="h2"
            >
                Responsive values
            </Typography>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                Props can dynamically adjust their values based on the active breakpoint. For example, this allows implementation of Material Design's <a href="https://m2.material.io/design/layout/responsive-layout-grid.html">"recommended"</a> responsive layout grid.
            </Typography>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                <SingularityExample
                    name="ResponsiveGrid.js"
                    className="my-4"
                    iframe={false}
                    component={ResponsiveGridComponent}
                    raw={ResponsiveGridRaw}
                />
            </Typography>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                Responsive values are supported for:
            </Typography>
            <ul className="space-y-4">
                <li>
                    <code>columns</code>
                </li>
                <li>
                    <code>columnSpacing</code>
                </li>
                <li>
                    <code>direction</code>
                </li>
                <li>
                    <code>rowSpacing</code>
                </li>
                <li>
                    <code>spacing</code>
                </li>
                <li>
                    all the <a href="#system-props">other props</a> of MUI System
                </li>
            </ul>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                :::warning When using a responsive <code>columns</code> prop, each grid item must have a corresponding value for every breakpoint. For example, this will not work, as the grid item lacks a value for <code>md</code>:
            </Typography>

            <SingularityHighlight
                component="pre"
                className="language-jsx"
            >
                {` 
<Grid container columns={{ xs: 4, md: 12 }}>
  <Grid item xs={2} />
</Grid>
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
                Interactive
            </Typography>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                The following interactive demo allows you to experiment with various settings and observe their visual outcomes:
            </Typography>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                <SingularityExample
                    name="InteractiveGrid.js"
                    className="my-4"
                    iframe={false}
                    component={InteractiveGridComponent}
                    raw={InteractiveGridRaw}
                />
            </Typography>
            <Typography
                className="text-3xl mt-6 mb-2.5 font-bold"
                component="h2"
            >
                Auto-layout
            </Typography>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                The Auto-layout feature enables <em>items</em> to evenly distribute available space. This means you can define the width of one <em>item</em>, and the others will automatically adjust around it.
            </Typography>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                <SingularityExample
                    name="AutoGrid.js"
                    className="my-4"
                    iframe={false}
                    component={AutoGridComponent}
                    raw={AutoGridRaw}
                />
            </Typography>
            <Typography
                className="text-lg mt-5 mb-2.5 font-bold"
                component="h3"
            >
                Variable width content
            </Typography>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                By setting a size breakpoint prop to <code>{`"auto"`}</code> instead of <code>true</code> or a <code>number</code>, a column can be sized based on the natural width of its content.
            </Typography>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                <SingularityExample
                    name="VariableWidthGrid.js"
                    className="my-4"
                    iframe={false}
                    component={VariableWidthGridComponent}
                    raw={VariableWidthGridRaw}
                />
            </Typography>
            <Typography
                className="text-3xl mt-6 mb-2.5 font-bold"
                component="h2"
            >
                Complex Grid
            </Typography>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                The following example deviates from Material Design guidelines but demonstrates how the grid can be utilized to create intricate layouts.
            </Typography>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                <SingularityExample
                    name="ComplexGrid.js"
                    className="my-4"
                    iframe={false}
                    component={ComplexGridComponent}
                    raw={ComplexGridRaw}
                />
            </Typography>
            <Typography
                className="text-3xl mt-6 mb-2.5 font-bold"
                component="h2"
            >
                Nested Grid
            </Typography>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                The <code>container</code> and <code>item</code> props are independent booleans, allowing a Grid component to function as both a flex container and a child simultaneously.
            </Typography>
            <div className="border-1 p-4 rounded-xl my-3">
                <Typography
                    className="text-base mb-8"
                    component="div"
                >
                    A flex <strong>container</strong> is an element with a computed display of <code>flex</code> or <code>inline-flex</code>. Its in-flow children, known as flex <strong>items</strong>, are arranged using the flex layout model.
                </Typography>
            </div>

            <Typography
                className="text-base mb-8"
                component="div"
            >
                <a href="https://www.w3.org/TR/css-flexbox-1/#box-model">
                    https://www.w3.org/TR/css-flexbox-1/#box-model
                </a>
            </Typography>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                <SingularityExample
                    name="NestedGrid.js"
                    className="my-4"
                    iframe={false}
                    component={NestedGridComponent}
                    raw={NestedGridRaw}
                />
            </Typography>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                ⚠️ Setting an explicit width on a Grid element that is simultaneously a flex container, flex item, and has spacing can result in unexpected behavior. Avoid combining these properties:
            </Typography>

            <SingularityHighlight
                component="pre"
                className="language-jsx"
            >
                {` 
<Grid spacing={1} container item xs={12}>
`}
            </SingularityHighlight>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                If necessary, remove one of these props to prevent issues.
            </Typography>
            <Typography
                className="text-3xl mt-6 mb-2.5 font-bold"
                component="h2"
            >
                Columns
            </Typography>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                The default number of columns (12) can be modified using the <code>columns</code> prop.
            </Typography>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                <SingularityExample
                    name="ColumnsGrid.js"
                    className="my-4"
                    iframe={false}
                    component={ColumnsGridComponent}
                    raw={ColumnsGridRaw}
                />
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
                Negative margin
            </Typography>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                Item spacing is achieved using negative margins, which may cause unexpected results. For example, applying a background color requires setting <code>display: flex;</code> on the parent element.
            </Typography>
            <Typography
                className="text-lg mt-5 mb-2.5 font-bold"
                component="h3"
            >
                white-space: nowrap
            </Typography>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                Flex items have a default <code>min-width: auto</code>, which can conflict with children using <code>white-space: nowrap;</code>. This issue can be replicated with:
            </Typography>

            <SingularityHighlight
                component="pre"
                className="language-jsx"
            >
                {` 
<Grid item xs>
  <Typography noWrap>
`}
            </SingularityHighlight>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                To keep the item within the container, set <code>min-width: 0</code>. In practice, use the <code>zeroMinWidth</code> prop:
            </Typography>

            <SingularityHighlight
                component="pre"
                className="language-jsx"
            >
                {` 
<Grid item xs zeroMinWidth>
  <Typography noWrap>
`}
            </SingularityHighlight>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                <SingularityExample
                    name="AutoGridNoWrap.js"
                    className="my-4"
                    iframe={false}
                    component={AutoGridNoWrapComponent}
                    raw={AutoGridNoWrapRaw}
                />
            </Typography>
            <Typography
                className="text-lg mt-5 mb-2.5 font-bold"
                component="h3"
            >
                direction: column | column-reverse
            </Typography>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                The <code>xs</code>, <code>sm</code>, <code>md</code>, <code>lg</code>, and <code>xl</code> props are <strong>not supported</strong> in <code>{`direction="column"`}</code> or <code>{`direction="column-reverse"`}</code> containers.
            </Typography>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                These props specify the number of grid columns a component occupies at a given breakpoint. They are designed to control <strong>width</strong> via <code>flex-basis</code> in <code>row</code> containers but may affect height in <code>column</code> containers, potentially causing undesirable effects on the height of <code>GridLegacy</code> items.
            </Typography>
            <Typography
                className="text-3xl mt-6 mb-2.5 font-bold"
                component="h2"
            >
                CSS Grid Layout
            </Typography>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                The <code>GridLegacy</code> component internally uses CSS flexbox. However, as demonstrated below, you can seamlessly utilize <a href="/system/grid/">MUI System</a> and CSS Grid to design your page layouts.
            </Typography>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                <SingularityExample
                    name="CSSGrid.js"
                    className="my-4"
                    iframe={false}
                    component={CSSGridComponent}
                    raw={CSSGridRaw}
                />
            </Typography>
            <Typography
                className="text-3xl mt-6 mb-2.5 font-bold"
                component="h2"
            >
                System props
            </Typography>
            <div className="border-1 p-4 rounded-xl my-3">
                <Typography
                    className="text-base mb-8"
                    component="div"
                >
                    System props are deprecated and will be discontinued in the next major release. Use the <code>sx</code> prop as an alternative.
                </Typography>

                <SingularityHighlight
                    component="pre"
                    className="language-diff"
                >
                    {` 
- <Grid item p={2} />
+ <Grid item sx={{ p: 2 }} />
`}
                </SingularityHighlight>
            </div>
        </>
    );
}

export default GridLegacyDoc;