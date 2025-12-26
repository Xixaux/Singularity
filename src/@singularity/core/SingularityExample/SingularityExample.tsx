'use client';

import SingularityHighlight from '@singularity/core/SingularityHighlight';
import Card from '@mui/material/Card';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import clsx from 'clsx';
import { ElementType, ReactNode, useState } from 'react';
import { darken } from '@mui/material/styles';
import Box from '@mui/material/Box';
import DemoContainer from './DemoContainer';
import SingularitySvgIcon from '../SingularitySvgIcon';

type SingularityExampleProps = {
	name?: string;
	raw?: string;
	currentTabIndex?: number;
	component: ElementType;
	iframe?: ReactNode;
	className: string;
};

/**
 * SingularityExample component gives a visual display as well as code for a component example.
 * It consists of two tabs, a visual tab and code tab.
 */
function SingularityExample(props: SingularityExampleProps) {
	const { component: Component, raw, iframe, className, name = '', currentTabIndex = 0 } = props;

	const [currentTab, setCurrentTab] = useState(currentTabIndex);

	function handleChange(event: React.SyntheticEvent, value: number) {
		setCurrentTab(value);
	}

	return (
		<Card className={clsx(className, 'shadow-sm not-prose')}>
			<Box
				sx={{
					backgroundColor: (theme) =>
						darken(theme.palette.background.paper, theme.palette.mode === 'light' ? 0.02 : 0.2)
				}}
			>
				<Tabs
					classes={{
						root: 'border-b-1',
						flexContainer: 'justify-end'
					}}
					value={currentTab}
					onChange={handleChange}
					textColor="secondary"
					indicatorColor="secondary"
				>
					{Component && (
						<Tab
							classes={{ root: 'min-w-16' }}
							icon={<SingularitySvgIcon>heroicons-outline:eye</SingularitySvgIcon>}
						/>
					)}
					{raw && (
						<Tab
							classes={{ root: 'min-w-16' }}
							icon={<SingularitySvgIcon>heroicons-outline:code-bracket</SingularitySvgIcon>}
						/>
					)}
				</Tabs>
			</Box>
			<div className="relative flex max-w-full justify-center">
				<div className={currentTab === 0 ? 'flex max-w-full flex-1' : 'hidden'}>
					{Component &&
						(iframe ? (
							<DemoContainer name={name}>
								<Component />
							</DemoContainer>
						) : (
							<div className="flex max-w-full flex-1 justify-center p-6">
								<Component />
							</div>
						))}
				</div>
				<div className={currentTab === 1 ? 'flex flex-1' : 'hidden'}>
					{raw && (
						<div className="flex flex-1">
							<SingularityHighlight
								component="pre"
								className="language-javascript w-full"
							>
								{raw}
							</SingularityHighlight>
						</div>
					)}
				</div>
			</div>
		</Card>
	);
}

export default SingularityExample;
