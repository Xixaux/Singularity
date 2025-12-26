import SingularitySvgIcon from '@singularity/core/SingularitySvgIcon';

type NotificationIconProps = {
	value?: string;
};

/**
 * The notification icon.
 */
function NotificationIcon(props: NotificationIconProps) {
	const { value } = props;

	switch (value) {
		case 'error': {
			return (
				<SingularitySvgIcon
					className="mr-2 opacity-75"
					color="inherit"
					size={20}
				>
					heroicons-outline:minus-circle
				</SingularitySvgIcon>
			);
		}
		case 'success': {
			return (
				<SingularitySvgIcon
					className="mr-2 opacity-75"
					color="inherit"
					size={20}
				>
					heroicons-outline:check-circle
				</SingularitySvgIcon>
			);
		}
		case 'warning': {
			return (
				<SingularitySvgIcon
					className="mr-2 opacity-75"
					color="inherit"
					size={20}
				>
					heroicons-outline:exclamation-circle
				</SingularitySvgIcon>
			);
		}
		case 'info': {
			return (
				<SingularitySvgIcon
					className="mr-2 opacity-75"
					color="inherit"
					size={20}
				>
					heroicons-outline:information-circle
				</SingularitySvgIcon>
			);
		}
		default: {
			return null;
		}
	}
}

export default NotificationIcon;
