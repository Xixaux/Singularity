import { Controller, useForm } from 'react-hook-form';
import _ from 'lodash';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import ListItem from '@mui/material/ListItem';
import clsx from 'clsx';
import SingularitySvgIcon from '@singularity/core/SingularitySvgIcon';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import LabelModel from '../../models/LabelModel';
import { useCreateNotesLabelMutation, useGetNotesLabelsQuery } from '../../NotesApi';

const defaultValues = {
	title: ''
};

/**
 * The new label form.
 */
function NewLabelForm() {
	const [createLabel] = useCreateNotesLabelMutation();
	const { data: labels } = useGetNotesLabelsQuery();

	/**
	 * Form Validation Schema
	 */
	const schema = z.object({
		title: z
			.string()
			.nonempty('You must enter a label title')
			.refine(
				(title) => {
					// Verify if the title exists in labelListArray
					return !labels.some((label) => label.title === title);
				},
				{
					message: 'This label title already exists'
				}
			)
	});

	type FormType = z.infer<typeof schema>;

	const { control, formState, handleSubmit, reset } = useForm<FormType>({
		mode: 'onChange',
		defaultValues,
		resolver: zodResolver(schema)
	});

	const { isValid, dirtyFields, errors } = formState;

	function onSubmit(data: FormType) {
		const newLabel = LabelModel(data);
		createLabel(newLabel);
		reset(defaultValues);
	}

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<ListItem
				className="p-0 mb-3"
				dense
			>
				<Controller
					name="title"
					control={control}
					render={({ field }) => (
						<TextField
							{...field}
							className={clsx('flex flex-1')}
							error={!!errors.title}
							helperText={errors?.title?.message}
							placeholder="Create new label"
							variant="outlined"
							slotProps={{
								input: {
									startAdornment: (
										<InputAdornment position="start">
											<SingularitySvgIcon
												color="action"
												size={16}
											>
												heroicons-outline:tag
											</SingularitySvgIcon>
										</InputAdornment>
									),
									endAdornment: (
										<InputAdornment position="end">
											<IconButton
												className="p-0"
												aria-label="Delete"
												disabled={_.isEmpty(dirtyFields) || !isValid}
												type="submit"
												size="small"
											>
												<SingularitySvgIcon color="action">heroicons-outline:check</SingularitySvgIcon>
											</IconButton>
										</InputAdornment>
									)
								}
							}}
						/>
					)}
				/>
			</ListItem>
		</form>
	);
}

export default NewLabelForm;
