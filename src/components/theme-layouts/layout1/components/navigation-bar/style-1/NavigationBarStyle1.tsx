import { styled, Theme } from '@mui/material/styles';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import { useAppDispatch, useAppSelector } from 'src/store/hooks';
import {
	NavigationBarSliceCloseMobile,
	resetNavigationBar,
	selectSingularityNavigationBar
} from 'src/components/theme-layouts/components/navigation-bar/NavigationBarSlice';
import { useEffect } from 'react';
import useSingularityLayoutSettings from '@singularity/core/SingularityLayout/useSingularityLayoutSettings';
import useThemeMediaQuery from '@singularity/hooks/useThemeMediaQuery';
import NavigationBarStyle1Content from './NavigationBarStyle1Content';
import { Layout1ConfigDefaultsType } from '@/components/theme-layouts/layout1/Layout1Config';

const NavigationBarSliceWidth = 280;

type StyledNavBarProps = {
	theme?: Theme;
	open: boolean;
	position: string;
};

const StyledNavBar = styled('div')<StyledNavBarProps>(({ theme }) => ({
	minWidth: NavigationBarSliceWidth,
	width: NavigationBarSliceWidth,
	maxWidth: NavigationBarSliceWidth,
	variants: [
		{
			props: ({ open }) => !open,
			style: {
				transition: theme.transitions.create('margin', {
					easing: theme.transitions.easing.easeOut,
					duration: theme.transitions.duration.leavingScreen
				})
			}
		},
		{
			props: ({ open, position }) => !open && position === 'left',
			style: {
				marginLeft: `-${NavigationBarSliceWidth}px`
			}
		},
		{
			props: ({ open, position }) => !open && position === 'right',
			style: {
				marginRight: `-${NavigationBarSliceWidth}px`
			}
		},
		{
			props: ({ open }) => open,
			style: {
				transition: theme.transitions.create('margin', {
					easing: theme.transitions.easing.easeOut,
					duration: theme.transitions.duration.enteringScreen
				})
			}
		},
		{
			props: ({ open, position }) => open && position === 'left',
			style: {
				borderRight: `1px solid ${theme.vars.palette.divider}`
			}
		},
		{
			props: ({ open, position }) => open && position === 'right',
			style: {
				borderLeft: `1px solid ${theme.vars.palette.divider}`
			}
		}
	]
}));

const StyledNavBarMobile = styled(SwipeableDrawer)(() => ({
	'& .MuiDrawer-paper': {
		minWidth: NavigationBarSliceWidth,
		width: NavigationBarSliceWidth,
		maxWidth: NavigationBarSliceWidth
	}
}));

/**
 * The NavigationBarSlice style 1.
 */
function NavigationBarStyle1() {
	const dispatch = useAppDispatch();
	const isMobile = useThemeMediaQuery((theme) => theme.breakpoints.down('lg'));

	const settings = useSingularityLayoutSettings();
	const config = settings.config as Layout1ConfigDefaultsType;

	const NavigationBarSlice = useAppSelector(selectSingularityNavigationBar);

	useEffect(() => {
		return () => {
			dispatch(resetNavigationBar());
		};
	}, [dispatch]);

	return (
		<>
			{!isMobile && (
				<StyledNavBar
					className="sticky top-0 z-20 h-screen flex-auto shrink-0 flex-col overflow-hidden shadow-sm"
					open={NavigationBarSlice.open}
					position={config.NavigationBarSlice.position}
				>
					<NavigationBarStyle1Content />
				</StyledNavBar>
			)}

			{isMobile && (
				<StyledNavBarMobile
					classes={{
						paper: 'flex-col flex-auto h-full'
					}}
					anchor={config.NavigationBarSlice.position as 'left' | 'top' | 'right' | 'bottom'}
					variant="temporary"
					open={NavigationBarSlice.mobileOpen}
					onClose={() => dispatch(NavigationBarSliceCloseMobile())}
					onOpen={() => {}}
					disableSwipeToOpen
					ModalProps={{
						keepMounted: true // Better open performance on mobile.
					}}
				>
					<NavigationBarStyle1Content />
				</StyledNavBarMobile>
			)}
		</>
	);
}

export default NavigationBarStyle1;
