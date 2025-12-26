'use client';
import React from 'react';
import SingularityExample from '@singularity/core/SingularityExample';
import SingularityHighlight from '@singularity/core/SingularityHighlight';
import SingularitySvgIcon from '@singularity/core/SingularitySvgIcon';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import BasicGridComponent from '../../components/grid/BasicGrid';
import BasicGridRaw from '../../components/grid/BasicGrid.tsx?raw';
import FullWidthGridComponent from '../../components/grid/FullWidthGrid';
import FullWidthGridRaw from '../../components/grid/FullWidthGrid.tsx?raw';
import SpacingGridComponent from '../../components/grid/SpacingGrid';
import SpacingGridRaw from '../../components/grid/SpacingGrid.tsx?raw';
import RowAndColumnSpacingComponent from '../../components/grid/RowAndColumnSpacing';
import RowAndColumnSpacingRaw from '../../components/grid/RowAndColumnSpacing.tsx?raw';
import ResponsiveGridComponent from '../../components/grid/ResponsiveGrid';
import ResponsiveGridRaw from '../../components/grid/ResponsiveGrid.tsx?raw';
import InteractiveGridComponent from '../../components/grid/InteractiveGrid';
import InteractiveGridRaw from '../../components/grid/InteractiveGrid.tsx?raw';
import AutoGridComponent from '../../components/grid/AutoGrid';
import AutoGridRaw from '../../components/grid/AutoGrid.tsx?raw';
import VariableWidthGridComponent from '../../components/grid/VariableWidthGrid';
import VariableWidthGridRaw from '../../components/grid/VariableWidthGrid.tsx?raw';
import NestedGridComponent from '../../components/grid/NestedGrid';
import NestedGridRaw from '../../components/grid/NestedGrid.tsx?raw';
import NestedGridColumnsComponent from '../../components/grid/NestedGridColumns';
import NestedGridColumnsRaw from '../../components/grid/NestedGridColumns.tsx?raw';
import ColumnsGridComponent from '../../components/grid/ColumnsGrid';
import ColumnsGridRaw from '../../components/grid/ColumnsGrid.tsx?raw';
import OffsetGridComponent from '../../components/grid/OffsetGrid';
import OffsetGridRaw from '../../components/grid/OffsetGrid.tsx?raw';
import CenteredElementGridComponent from '../../components/grid/CenteredElementGrid';
import CenteredElementGridRaw from '../../components/grid/CenteredElementGrid.tsx?raw';
import FullBorderedGridComponent from '../../components/grid/FullBorderedGrid';
import FullBorderedGridRaw from '../../components/grid/FullBorderedGrid.tsx?raw';
import HalfBorderedGridComponent from '../../components/grid/HalfBorderedGrid';
import HalfBorderedGridRaw from '../../components/grid/HalfBorderedGrid.tsx?raw';
import ColumnLayoutInsideGridComponent from '../../components/grid/ColumnLayoutInsideGrid';
import ColumnLayoutInsideGridRaw from '../../components/grid/ColumnLayoutInsideGrid.tsx?raw';

function GridDoc(props) {
  return (
    <div>
      <Button
        className="normal-case absolute right-0 not-prose"
        variant="contained"
        color="secondary"
        component="a"
        href="https://mui.com/components/grid"
        target="_blank"
        role="button"
        size="small"
        startIcon={<SingularitySvgIcon size={16}>heroicons-outline:arrow-top-right-on-square</SingularitySvgIcon>}
      >
        Reference
      </Button>
      <Typography className="text-5xl my-4 font-bold" component="h1">
        Grid
      </Typography>
      <Typography className="description">
        The responsive layout grid adjusts to varying screen sizes and orientations, promoting uniformity across different layouts.
      </Typography>

      <Typography className="text-base mb-8" component="div">
        The <code>Grid</code> component is ideal for layouts with a fixed number of columns. It allows multiple breakpoints to define the column span for each child element.
      </Typography>
      <Typography className="text-3xl mt-6 mb-2.5 font-bold" component="h2">
        How it works
      </Typography>
      <Typography className="text-base mb-8" component="div">
        The grid system is built with the <code>Grid</code> component:
      </Typography>
      <ul className="space-y-4">
        <li>
          It employs <a href="https://www.w3.org/TR/css-flexbox-1/">CSS Flexbox</a> (instead of CSS Grid) for enhanced adaptability.
        </li>
        <li>
          The grid is inherently a flex item. Apply the <code>container</code> prop to create a flex container.
        </li>
        <li>
          Item widths are set in percentages, ensuring they remain fluid and scale relative to their parent container.
        </li>
        <li>
          Five default grid breakpoints are provided: xs, sm, md, lg, and xl. For custom breakpoints, see <a href="#custom-breakpoints">custom breakpoints grid</a>.
        </li>
        <li>
          You can assign integer values to each breakpoint to specify how many of the 12 available columns a component occupies when the viewport width meets the <a href="/material-ui/customization/breakpoints/#default-breakpoints">breakpoint constraints</a>.
        </li>
        <li>
          It uses the <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/gap"><code>gap</code> CSS property</a> to manage spacing between items.
        </li>
        <li>
          It does <em>not</em> support row spanning, meaning child elements cannot span multiple rows. For this functionality, consider using <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_grid_layout">CSS Grid</a>.
        </li>
        <li>
          It does <em>not</em> feature automatic child placement. It places children sequentially, moving to the next line if space is insufficient. For auto-placement, use <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_grid_layout/Auto-placement_in_grid_layout">CSS Grid</a> instead.
        </li>
      </ul>
      <Typography className="text-base mb-8" component="div">
        :::warning The <code>Grid</code> component is designed for <em>layout</em> purposes, not as a <em>data</em> grid. For data grids, explore <a href="/x/react-data-grid/">the MUI X <code>DataGrid</code> component</a>. :::
      </Typography>
      <Typography className="text-3xl mt-6 mb-2.5 font-bold" component="h2">
        Fluid grids
      </Typography>
      <Typography className="text-base mb-8" component="div">
        Fluid grids employ columns that dynamically scale and resize content. Breakpoints can be used to determine when the layout requires significant adjustments.
      </Typography>
      <Typography className="text-lg mt-5 mb-2.5 font-bold" component="h3">
        Basic grid
      </Typography>
      <Typography className="text-base mb-8" component="div">
        To create a grid layout, you need a container. Use the <code>container</code> prop to establish a grid container that encloses the grid items (the <code>Grid</code> is always an item).
      </Typography>
      <Typography className="text-base mb-8" component="div">
        Column widths are defined as integer values between 1 and 12. For instance, an item with <code>{`size={6}`}</code> spans half the width of the grid container.
      </Typography>
      <Typography className="text-base mb-8" component="div">
        <SingularityExample
          name="BasicGrid.js"
          className="my-4"
          iframe={false}
          component={BasicGridComponent}
          raw={BasicGridRaw}
        />
      </Typography>
      <Typography className="text-lg mt-5 mb-2.5 font-bold" component="h3">
        Multiple breakpoints
      </Typography>
      <Typography className="text-base mb-8" component="div">
        Items can have multiple defined widths, prompting layout changes at specific breakpoints. Width values apply to all larger breakpoints, with values for larger breakpoints overriding those for smaller ones.
      </Typography>
      <Typography className="text-base mb-8" component="div">
        For example, a component with <code>{`size={{ xs: 12, sm: 6 }}`}</code> spans the full viewport width when the viewport is <a href="/material-ui/customization/breakpoints/#default-breakpoints">less than 600 pixels wide</a>. Beyond this size, it occupies half the width—six columns instead of 12.
      </Typography>
      <Typography className="text-base mb-8" component="div">
        <SingularityExample
          name="FullWidthGrid.js"
          className="my-4"
          iframe={false}
          component={FullWidthGridComponent}
          raw={FullWidthGridRaw}
        />
      </Typography>
      <Typography className="text-3xl mt-6 mb-2.5 font-bold" component="h2">
        Spacing
      </Typography>
      <Typography className="text-base mb-8" component="div">
        Control the spacing between child elements using the <code>spacing</code> prop. This value can be any positive number (including decimals) or a string, and is converted into a CSS property via the <a href="/material-ui/customization/spacing/"><code>theme.spacing()</code></a> helper.
      </Typography>
      <Typography className="text-base mb-8" component="div">
        The following example demonstrates the application of the <code>spacing</code> prop:
      </Typography>
      <Typography className="text-base mb-8" component="div">
        <SingularityExample
          name="SpacingGrid.js"
          className="my-4"
          iframe={false}
          component={SpacingGridComponent}
          raw={SpacingGridRaw}
        />
      </Typography>
      <Typography className="text-lg mt-5 mb-2.5 font-bold" component="h3">
        Row and column spacing
      </Typography>
      <Typography className="text-base mb-8" component="div">
        The <code>rowSpacing</code> and <code>columnSpacing</code> props allow independent specification of row and column gaps, akin to the <code>row-gap</code> and <code>column-gap</code> properties in <a href="/system/grid/#row-gap-amp-column-gap">CSS Grid</a>.
      </Typography>
      <Typography className="text-base mb-8" component="div">
        <SingularityExample
          name="RowAndColumnSpacing.js"
          className="my-4"
          iframe={false}
          component={RowAndColumnSpacingComponent}
          raw={RowAndColumnSpacingRaw}
        />
      </Typography>
      <Typography className="text-3xl mt-6 mb-2.5 font-bold" component="h2">
        Responsive values
      </Typography>
      <Typography className="text-base mb-8" component="div">
        Prop values can be adjusted dynamically based on the active breakpoint. For example, this enables the implementation of Material Design's <a href="https://m2.material.io/design/layout/responsive-layout-grid.html">recommended</a> responsive layout grid, as shown in the following example:
      </Typography>
      <Typography className="text-base mb-8" component="div">
        <SingularityExample
          name="ResponsiveGrid.js"
          className="my-4"
          iframe={false}
          component={ResponsiveGridComponent}
          raw={ResponsiveGridRaw}
        />
      </Typography>
    </div>
  );
}

export default GridDoc;