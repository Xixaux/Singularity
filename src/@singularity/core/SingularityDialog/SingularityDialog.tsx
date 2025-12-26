import Dialog from '@mui/material/Dialog';
import { useAppDispatch, useAppSelector } from 'src/store/hooks';
import { closeDialog, selectSingularityDialogProps } from '@singularity/core/SingularityDialog/singularityDialogSlice';

/**
 * SingularityDialog component
 * This component renders a material UI ```Dialog``` component
 * with properties pulled from the redux store
 */
function SingularityDialog() {
	const dispatch = useAppDispatch();
	const options = useAppSelector(selectSingularityDialogProps);

	return (
		<Dialog
			onClose={() => dispatch(closeDialog())}
			aria-labelledby="singularity-dialog-title"
			classes={{
				paper: 'rounded-lg'
			}}
			{...options}
		/>
	);
}

export default SingularityDialog;
