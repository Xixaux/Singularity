import { useContext } from 'react';
import SingularityLayoutSettingsContext from './SingularityLayoutSettingsContext';

const useSingularityLayoutSettings = () => {
	const context = useContext(SingularityLayoutSettingsContext);

	if (context === undefined) {
		throw new Error('useSingularityLayoutSettings must be used within a SettingsProvider');
	}

	return context;
};

export default useSingularityLayoutSettings;
