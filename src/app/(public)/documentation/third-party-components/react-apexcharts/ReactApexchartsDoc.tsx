'use client';

import SingularityExample from '@singularity/core/SingularityExample';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Link from '@singularity/core/Link';
import SingularitySvgIcon from '@singularity/core/SingularitySvgIcon';

import AreaComponent from './examples/Area';
import AreaRaw from './examples/Area.tsx?raw';

import BarComponent from './examples/Bar';
import BarRaw from './examples/Bar.tsx?raw';

import ColumnComponent from './examples/Column';
import ColumnRaw from './examples/Column.tsx?raw';

import DonutComponent from './examples/Donut';
import DonutRaw from './examples/Donut.tsx?raw';

import LineComponent from './examples/Line';
import LineRaw from './examples/Line.tsx?raw';

import RadialBarComponent from './examples/RadialBar';
import RadialBarRaw from './examples/RadialBar.tsx?raw';

/**
 * GoogleMapReact Doc
 * This document provides information on how to use GoogleMapReact.
 */
function ReactApexchartsDoc() {
	return (
		<>
			<div className="flex w-full items-center justify-between mb-6">
				<Typography variant="h4">react-apexcharts</Typography>
				<Button
					variant="contained"
					color="secondary"
					component="a"
					href="https://github.com/apexcharts/react-apexcharts"
					target="_blank"
					role="button"
					startIcon={<SingularitySvgIcon size={16}>heroicons-outline:arrow-top-right-on-square</SingularitySvgIcon>}
					className="not-prose"
				>
					Reference
				</Button>
			</div>

			<Typography
				className="mb-4"
				component="p"
			>
				React.js wrapper for ApexCharts to build interactive visualizations in react.
			</Typography>

			<hr className="not-prose" />

			<Typography
				className="text-5xl mt-8 mb-2"
				component="h2"
			>
				Example Usages
			</Typography>

			<SingularityExample
				className="mb-16"
				component={AreaComponent}
				raw={AreaRaw}
			/>

			<SingularityExample
				className="mb-16"
				component={BarComponent}
				raw={BarRaw}
			/>

			<SingularityExample
				className="mb-16"
				component={ColumnComponent}
				raw={ColumnRaw}
			/>

			<SingularityExample
				className="mb-16"
				component={DonutComponent}
				raw={DonutRaw}
			/>

			<SingularityExample
				className="mb-16"
				component={LineComponent}
				raw={LineRaw}
			/>

			<SingularityExample
				className="mb-16"
				component={RadialBarComponent}
				raw={RadialBarRaw}
			/>

			<Typography
				className="text-5xl mt-8 mb-2"
				component="h2"
			>
				Demos
			</Typography>

			<ul>
				<li className="mb-2">
					<Link to="/dashboards/analytics">Analytics Dashboard</Link>
				</li>
				<li className="mb-2">
					<Link to="/dashboards/control-panel">Project Dashboard</Link>
				</li>
			</ul>
		</>
	);
}

export default ReactApexchartsDoc;
