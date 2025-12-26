import { DeepPartial } from 'react-hook-form';
import { SingularitySettingsConfigType } from '@singularity/core/SingularitySettings/SingularitySettings';

export const layoutConfigOnlyMain: DeepPartial<SingularitySettingsConfigType>['layout'] = {
	config: {
		NavigationBarSlice: {
			display: false
		},
		toolbar: {
			display: false
		},
		footer: {
			display: false
		},
		leftSidePanel: {
			display: false
		},
		rightSidePanel: {
			display: false
		}
	}
};

export const layoutConfigOnlyMainFullWidth: DeepPartial<SingularitySettingsConfigType>['layout'] = {
	config: {
		...layoutConfigOnlyMain.config,
		mode: 'fullwidth'
	}
};

export const layoutNoContainer: DeepPartial<SingularitySettingsConfigType>['layout'] = {
	config: {
		mode: 'fullwidth'
	}
};
