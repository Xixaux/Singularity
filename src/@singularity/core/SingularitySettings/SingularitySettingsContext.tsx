import { SingularitySettingsConfigType, SingularityThemesType } from '@singularity/core/SingularitySettings/SingularitySettings';
import { createContext } from 'react';

// SingularitySettingsContext type
export type SingularitySettingsContextType = {
	data: SingularitySettingsConfigType;
	setSettings: (newSettings: Partial<SingularitySettingsConfigType>) => SingularitySettingsConfigType;
	changeTheme: (newTheme: SingularityThemesType) => void;
};

// Context with an undefined default value
const SingularitySettingsContext = createContext<SingularitySettingsContextType | undefined>(undefined);

export default SingularitySettingsContext;
