import { createContext } from 'react';
import { SingularitySettingsConfigType } from '@singularity/core/SingularitySettings/SingularitySettings';

type SingularityLayoutSettingsContextType = SingularitySettingsConfigType['layout'];

const SingularityLayoutSettingsContext = createContext<SingularityLayoutSettingsContextType | undefined>(undefined);

export default SingularityLayoutSettingsContext;
