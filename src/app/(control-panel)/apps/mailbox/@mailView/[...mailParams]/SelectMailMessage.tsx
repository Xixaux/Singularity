import Typography from '@mui/material/Typography';
import SingularitySvgIcon from '@singularity/core/SingularitySvgIcon';

/**
 * The select mail message.
 */
function SelectMailMessage() {
	return (
		<div className="flex flex-col flex-1 items-center justify-center p-6">
			<SingularitySvgIcon
				className="icon-size-32 mb-4"
				color="disabled"
			>
				heroicons-outline:envelope
			</SingularitySvgIcon>
			<Typography
				className="mt-4 text-2xl font-semibold tracking-tight"
				color="text.secondary"
			>
				Select a mail to read
			</Typography>
		</div>
	);
}

export default SelectMailMessage;
