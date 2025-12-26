import Drawer from '@mui/material/Drawer';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import clsx from 'clsx';
import { ReactNode, useCallback, useEffect, useImperativeHandle, useState } from 'react';
import { SwipeableDrawerProps } from '@mui/material/SwipeableDrawer';
import SingularitySimpleLayoutSidebarContent from './SingularitySimpleLayoutSidebarContent';
import useThemeMediaQuery from '../../hooks/useThemeMediaQuery';

/**
 * Props for the SingularitySimpleLayoutSidebar component.
 */
type SingularitySimpleLayoutSidebarProps = {
	open?: boolean;
	position?: SwipeableDrawerProps['anchor'];
	variant?: SwipeableDrawerProps['variant'];
	onClose?: () => void;
	children?: ReactNode;
	ref?: React.RefObject<{ toggleSidebar: (T: boolean) => void }>;
	width?: number;
};

/**
 * The SingularitySimpleLayoutSidebar component.
 */
function SingularitySimpleLayoutSidebar(props: SingularitySimpleLayoutSidebarProps) {
	const { open = true, position, variant, onClose = () => {}, ref } = props;

	const isMobile = useThemeMediaQuery((theme) => theme.breakpoints.down('lg'));

	const [isOpen, setIsOpen] = useState(open);

	useImperativeHandle(ref, () => ({
		toggleSidebar: handleToggleDrawer
	}));

	const handleToggleDrawer = useCallback((val: boolean) => {
		setIsOpen(val);
	}, []);

	useEffect(() => {
		handleToggleDrawer(open);
	}, [handleToggleDrawer, open]);

	return (
		<>
			{((variant === 'permanent' && isMobile) || variant !== 'permanent') && (
				<SwipeableDrawer
					variant="temporary"
					anchor={position}
					open={isOpen}
					onOpen={() => {}}
					onClose={() => onClose()}
					disableSwipeToOpen
					classes={{
						root: clsx('SingularitySimpleLayout-sidebarWrapper', variant),
						paper: clsx(
							'SingularitySimpleLayout-sidebar',
							variant,
							position === 'left' ? 'SingularitySimpleLayout-leftSidebar' : 'SingularitySimpleLayout-rightSidebar',
							'max-w-full'
						)
					}}
					ModalProps={{
						keepMounted: true // Better open performance on mobile.
					}}
					// container={rootRef.current}
					slotProps={{
						backdrop: {
							classes: {
								root: 'SingularitySimpleLayout-backdrop'
							}
						}
					}}
					sx={{ position: 'absolute', '& .MuiPaper-root': { width: `${props.width}px` } }}
				>
					<SingularitySimpleLayoutSidebarContent {...props} />
				</SwipeableDrawer>
			)}
			{variant === 'permanent' && !isMobile && (
				<Drawer
					variant="permanent"
					anchor={position}
					className={clsx(
						'SingularitySimpleLayout-sidebarWrapper',
						variant,
						isOpen ? 'opened' : 'closed',
						position === 'left' ? 'SingularitySimpleLayout-leftSidebar' : 'SingularitySimpleLayout-rightSidebar'
					)}
					open={isOpen}
					onClose={onClose}
					classes={{
						paper: clsx('SingularitySimpleLayout-sidebar border-0 w-full', variant)
					}}
					sx={{ '& .MuiPaper-root': { width: `${props.width}px` } }}
				>
					<SingularitySimpleLayoutSidebarContent {...props} />
				</Drawer>
			)}
		</>
	);
}

export default SingularitySimpleLayoutSidebar;
