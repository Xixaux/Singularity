import { useState, ReactNode, useMemo, useEffect, useCallback } from 'react';
import _ from 'lodash';
import { defaultSettings, getParsedQuerySettings } from '@singularity/default-settings';
import settingsConfig from 'src/configs/settingsConfig';
import themeLayoutConfigs from 'src/components/theme-layouts/themeLayoutConfigs';
import { SingularitySettingsConfigType, SingularityThemesType } from '@singularity/core/SingularitySettings/SingularitySettings';
import useUser from '@auth/useUser';
import { PartialDeep } from 'type-fest';
import SingularitySettingsContext from './SingularitySettingsContext';

// Retrieve initial settings
const getInitialSettings = (): SingularitySettingsConfigType => {
	const defaultLayoutStyle = settingsConfig.layout?.style || 'layout1';
	const layout = {
		style: defaultLayoutStyle,
		config: themeLayoutConfigs[defaultLayoutStyle]?.defaults
	};
	return _.merge({}, defaultSettings, { layout }, settingsConfig, getParsedQuerySettings());
};

const initialSettings = getInitialSettings();

const generateSettings = (
	_defaultSettings: SingularitySettingsConfigType,
	_newSettings: PartialDeep<SingularitySettingsConfigType>
) => {
	return _.merge(
		{},
		_defaultSettings,
		{ layout: { config: themeLayoutConfigs[_newSettings?.layout?.style]?.defaults } },
		_newSettings
	);
};

// SingularitySettingsProvider component
export function SingularitySettingsProvider({ children }: { children: ReactNode }) {
	const { data: user, isGuest } = useUser();

	const userSettings = useMemo(() => user?.settings || {}, [user]);

	const calculateSettings = useCallback(() => {
		const defaultSettings = _.merge({}, initialSettings);
		return isGuest ? defaultSettings : _.merge({}, defaultSettings, userSettings);
	}, [isGuest, userSettings]);

	const [data, setData] = useState<SingularitySettingsConfigType>(calculateSettings());

	// Synchronize data with userSettings when isGuest or userSettings are modified
	useEffect(() => {
		const newSettings = calculateSettings();

		// Only update when settings differ
		if (!_.isEqual(data, newSettings)) {
			setData(newSettings);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [calculateSettings]);

	const setSettings = useCallback(
		(newSettings: Partial<SingularitySettingsConfigType>) => {
			const _settings = generateSettings(data, newSettings);

			if (!_.isEqual(_settings, data)) {
				setData(_.merge({}, _settings));
			}

			return _settings;
		},
		[data]
	);

	const changeTheme = useCallback(
		(newTheme: SingularityThemesType) => {
			const { NavigationBarSlice, footer, toolbar, main } = newTheme;

			const newSettings: SingularitySettingsConfigType = {
				...data,
				theme: {
					main,
					NavigationBarSlice,
					toolbar,
					footer
				}
			};

			setSettings(newSettings);
		},
		[data, setSettings]
	);

	return (
		<SingularitySettingsContext
			value={useMemo(
				() => ({
					data,
					setSettings,
					changeTheme
				}),
				[data, setSettings, changeTheme]
			)}
		>
			{children}
		</SingularitySettingsContext>
	);
}

export default SingularitySettingsProvider;
