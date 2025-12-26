import { Control } from 'react-hook-form';
import { Typography } from '@mui/material';
import { AnyFormFieldType } from '@singularity/core/SingularitySettings/ThemeFormConfigTypes';
import { SingularitySettingsConfigType } from '@singularity/core/SingularitySettings/SingularitySettings';
import SingularityLayoutConfigs from './SingularityLayoutConfigs';
import RadioFormController from './form-controllers/RadioFormController';
import SwitchFormController from './form-controllers/SwitchFormController';
import NumberFormController from './form-controllers/NumberFormController';

type SingularitySettingsControllerProps = {
	key?: string;
	name: keyof SingularitySettingsConfigType;
	control: Control<SingularitySettingsConfigType>;
	title?: string;
	item: AnyFormFieldType;
};

function SingularityLayoutConfig(props: SingularitySettingsControllerProps) {
	const { item, name, control } = props;

	switch (item.type) {
		case 'radio':
			return (
				<RadioFormController
					name={name}
					control={control}
					item={item}
				/>
			);
		case 'switch':
			return (
				<SwitchFormController
					name={name}
					control={control}
					item={item}
				/>
			);
		case 'number':
			return (
				<NumberFormController
					name={name}
					control={control}
					item={item}
				/>
			);
		case 'group':
			return (
				<div
					key={name}
					className="SingularitySettings-formGroup"
				>
					<Typography
						className="SingularitySettings-formGroupTitle"
						color="text.secondary"
					>
						{item.title}
					</Typography>
					<SingularityLayoutConfigs
						value={item.children}
						prefix={name}
						control={control}
					/>
				</div>
			);
		default:
			return '';
	}
}

export default SingularityLayoutConfig;
