import Drawer from '@mui/material/Drawer';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import clsx from 'clsx';
import { useCallback, useEffect, useImperativeHandle, useState, ReactNode } from 'react';
import { SwipeableDrawerProps } from '@mui/material/SwipeableDrawer';
import SingularityPageCardLayoutSidebarContent from './SingularityPageCardLayoutSidebarContent';
import useThemeMediaQuery from '../../hooks/useThemeMediaQuery';

/**
 * Props for the SingularityPageCardLayoutSidebar component.
 */
type SingularityPageCardLayoutSidebarProps = {
	open?: boolean;
	position?: SwipeableDrawerProps['anchor'];
	variant?: SwipeableDrawerProps['variant'];
	onClose?: () => void;
	children?: ReactNode;
	ref?: React.RefObject<{ toggleSidebar: (T: boolean) => void }>;
	width?: number;
};

/**
 * The SingularityPageCardLayoutSidebar component is a sidebar for the SingularityPageCardLayout component.
 */
function SingularityPageCardLayoutSidebar(props: SingularityPageCardLayoutSidebarProps) {
	const { open = true, position, variant, onClose = () => {}, ref } = props;

	const isMobile = useThemeMediaQuery((theme) => theme.breakpoints.down('lg'));

	const [isOpen, setIsOpen] = useState(open);

	const handleToggleDrawer = useCallback((val: boolean) => {
		setIsOpen(val);
	}, []);

	useImperativeHandle(ref, () => ({
		toggleSidebar: handleToggleDrawer
	}));

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
						root: clsx('SingularityPageCardLayout-sidebarWrapper', variant),
						paper: clsx(
							'SingularityPageCardLayout-sidebar',
							variant,
							position === 'left' ? 'SingularityPageCardLayout-leftSidebar' : 'SingularityPageCardLayout-rightSidebar'
						)
					}}
					ModalProps={{
						keepMounted: true // Better open performance on mobile.
					}}
					slotProps={{
						backdrop: {
							classes: {
								root: 'SingularityPageCardLayout-backdrop'
							}
						}
					}}
					sx={{ position: 'absolute', '& .MuiPaper-root': { width: `${props.width}px` } }}
				>
					<SingularityPageCardLayoutSidebarContent {...props} />
				</SwipeableDrawer>
			)}
			{variant === 'permanent' && !isMobile && (
				<Drawer
					variant="permanent"
					anchor={position}
					className={clsx(
						'SingularityPageCardLayout-sidebarWrapper',
						variant,
						isOpen ? 'opened' : 'closed',
						position === 'left' ? 'SingularityPageCardLayout-leftSidebar' : 'SingularityPageCardLayout-rightSidebar'
					)}
					open={isOpen}
					onClose={onClose}
					classes={{
						paper: clsx('SingularityPageCardLayout-sidebar', variant)
					}}
					sx={{ '& .MuiPaper-root': { width: `${props.width}px` } }}
				>
					<SingularityPageCardLayoutSidebarContent {...props} />
				</Drawer>
			)}
		</>
	);
}

export default SingularityPageCardLayoutSidebar;
