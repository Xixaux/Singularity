import { FormControlLabel, FormControl, RadioGroup, FormLabel } from '@mui/material';
import { Control } from 'react-hook-form';
import { Controller } from 'react-hook-form';
import { Radio } from '@mui/material';
import { SingularitySettingsConfigType } from '../SingularitySettings';

type RadioFormControllerProps = {
	name: keyof SingularitySettingsConfigType;
	control: Control<SingularitySettingsConfigType>;
	item: {
		title: string;
		options: { value: string; name: string }[];
	};
};

function RadioFormController(props: RadioFormControllerProps) {
	const { name, control, item } = props;

	return (
		<Controller
			key={name}
			name={name}
			control={control}
			render={({ field }) => (
				<FormControl
					component="fieldset"
					className="SingularitySettings-formControl"
				>
					<FormLabel
						component="legend"
						className="text-base"
					>
						{item.title}
					</FormLabel>
					<RadioGroup
						{...field}
						aria-label={item.title}
						className="SingularitySettings-group"
						row={item?.options?.length < 4}
					>
						{item?.options?.map((opt: { value: string; name: string }) => (
							<FormControlLabel
								key={opt.value}
								value={opt.value}
								control={<Radio />}
								label={opt.name}
							/>
						))}
					</RadioGroup>
				</FormControl>
			)}
		/>
	);
}

export default RadioFormController;
