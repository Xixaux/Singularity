import IconButton from '@mui/material/IconButton';
import { useAppDispatch } from 'src/store/hooks';
import SingularitySvgIcon from '@singularity/core/SingularitySvgIcon';
import { toggleChatPanel } from './messengerPanelSlice';

type ChatPanelToggleButtonProps = {
	children?: React.ReactNode;
};

/**
 * The chat panel toggle button.
 */
function MessengerPanelToggleButton(props: ChatPanelToggleButtonProps) {
	const { children = <SingularitySvgIcon>heroicons-outline:HomeIcon</SingularitySvgIcon> } = props;
	const dispatch = useAppDispatch();

	return <IconButton onClick={() => dispatch(toggleChatPanel())}>{children}</IconButton>;
}

export default MessengerPanelToggleButton;
