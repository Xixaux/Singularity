import { useContext } from 'react';
import SingularitySettingsContext, { SingularitySettingsContextType } from '../SingularitySettingsContext';

const useSingularitySettings = (): SingularitySettingsContextType => {
	const context = useContext(SingularitySettingsContext);

	if (!context) {
		throw new Error('useSettings must be used within a SingularitySettingsProvider');
	}

	return context;
};

export default useSingularitySettings;
