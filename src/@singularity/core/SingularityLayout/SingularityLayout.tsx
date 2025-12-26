'use client';

import _ from 'lodash';
import React, { useEffect, useMemo } from 'react';
import { SingularitySettingsConfigType } from '@singularity/core/SingularitySettings/SingularitySettings';
import { themeLayoutsType } from 'src/components/theme-layouts/themeLayouts';
import usePathname from '@singularity/hooks/usePathname';
import useSingularitySettings from '@singularity/core/SingularitySettings/hooks/useSingularitySettings';
import SingularityLayoutSettingsContext from './SingularityLayoutSettingsContext';

export type SingularityRouteObjectType = {
	settings?: SingularitySettingsConfigType;
	auth?: string[] | [] | null | undefined;
};

export type SingularityLayoutProps = {
	layouts: themeLayoutsType;
	children?: React.ReactNode;
	settings?: SingularitySettingsConfigType['layout'];
};

/**
 * SingularityLayout
 * React frontend component in a React project that is used for layouting the user interface. The component
 * handles generating user interface settings related to current routes, merged with default settings, and uses
 * the new settings to generate layouts.
 */
function SingularityLayout(props: SingularityLayoutProps) {
	const { layouts, children, settings: forcedSettings } = props;

	const { data: current } = useSingularitySettings();
	const currentLayoutSetting = useMemo(() => current.layout, [current]);
	const pathname = usePathname();

	const layoutSetting = useMemo(
		() => _.merge({}, currentLayoutSetting, forcedSettings),
		[currentLayoutSetting, forcedSettings]
	);

	const layoutStyle = useMemo(() => layoutSetting.style, [layoutSetting]);

	useEffect(() => {
		window.scrollTo(0, 0);
	}, [pathname]);

	return (
		<SingularityLayoutSettingsContext value={layoutSetting}>
			{useMemo(() => {
				return Object.entries(layouts).map(([key, Layout]) => {
					if (key === layoutStyle) {
						return (
							<React.Fragment key={key}>
								<Layout>{children}</Layout>
							</React.Fragment>
						);
					}

					return null;
				});
			}, [layoutStyle, layouts, children])}
		</SingularityLayoutSettingsContext>
	);
}

export default SingularityLayout;
