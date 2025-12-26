import SingularityNavLink from '@singularity/core/SingularityNavLink';
import IconButton from '@mui/material/IconButton';
import SingularitySvgIcon from '@singularity/core/SingularitySvgIcon';

type ContactsSidebarContentProps = {
	children?: React.ReactNode;
};

/**
 * The contacts sidebar content.
 */
function ContactsSidebarContent({ children }: ContactsSidebarContentProps) {
	return (
		<div className="flex flex-col flex-auto max-w-full">
			<IconButton
				className="absolute top-0 right-0 my-4 mx-8 z-10"
				sx={{
					backgroundColor: 'primary.light',
					color: 'primary.contrastText',
					'&:hover': {
						backgroundColor: 'primary.main',
						color: 'primary.contrastText'
					}
				}}
				component={SingularityNavLink}
				to="/apps/contacts"
			>
				<SingularitySvgIcon>heroicons-outline:x-mark</SingularitySvgIcon>
			</IconButton>

			{children}
		</div>
	);
}

export default ContactsSidebarContent;
