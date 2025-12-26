'use client';

import { SingularityLayoutProps } from '@singularity/core/SingularityLayout/SingularityLayout';
import SingularityLayout from '@singularity/core/SingularityLayout';
import { useMemo } from 'react';
import themeLayouts from './theme-layouts/themeLayouts';

type MainLayoutProps = Omit<SingularityLayoutProps, 'layouts'> & {
	NavigationBarSlice?: boolean;
	toolbar?: boolean;
	footer?: boolean;
	leftSidePanel?: boolean;
	rightSidePanel?: boolean;
};

function MainLayout(props: MainLayoutProps) {
	const {
		children,
		NavigationBarSlice,
		toolbar,
		footer,
		leftSidePanel,
		rightSidePanel,
		settings = {}, // Use an empty object as default if settings is undefined
		...rest
	} = props;

	const mergedSettings = useMemo(() => {
		const shorthandSettings = {
			config: {
				...(NavigationBarSlice !== undefined && { NavigationBarSlice: { display: NavigationBarSlice } }),
				...(toolbar !== undefined && { toolbar: { display: toolbar } }),
				...(footer !== undefined && { footer: { display: footer } }),
				...(leftSidePanel !== undefined && { leftSidePanel: { display: leftSidePanel } }),
				...(rightSidePanel !== undefined && { rightSidePanel: { display: rightSidePanel } })
			}
		};
		return { ...settings, ...shorthandSettings };
	}, [settings, NavigationBarSlice, toolbar, footer, leftSidePanel, rightSidePanel]);

	return (
		<SingularityLayout
			{...rest}
			layouts={themeLayouts}
			settings={mergedSettings}
		>
			{children}
		</SingularityLayout>
	);
}

export default MainLayout;
