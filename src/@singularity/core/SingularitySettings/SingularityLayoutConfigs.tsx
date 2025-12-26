import { Control } from 'react-hook-form';
import SingularityLayoutConfig from './SingularityLayoutConfig';
import ThemeFormConfigTypes from './ThemeFormConfigTypes';
import { SingularitySettingsConfigType } from './SingularitySettings';

type SingularitySettingsControllersProps = {
	value: ThemeFormConfigTypes;
	prefix: string;
	control: Control<SingularitySettingsConfigType>;
};

function SingularityLayoutConfigs(props: SingularitySettingsControllersProps) {
	const { value, prefix, control } = props;

	return Object?.entries?.(value)?.map?.(([key, item]) => {
		const name = prefix ? `${prefix}.${key}` : key;
		return (
			<SingularityLayoutConfig
				key={key}
				name={name as keyof SingularitySettingsConfigType}
				control={control}
				item={item}
			/>
		);
	});
}

export default SingularityLayoutConfigs;
