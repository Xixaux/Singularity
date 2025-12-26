import { styled } from '@mui/material/styles';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import { useAppDispatch, useAppSelector } from 'src/store/hooks';
import {
	NavigationBarSliceCloseMobile,
	resetNavigationBar,
	selectSingularityNavigationBar
} from 'src/components/theme-layouts/components/navigation-bar/NavigationBarSlice';
import GlobalStyles from '@mui/material/GlobalStyles';
import { Theme } from '@mui/system';
import clsx from 'clsx';
import { useEffect } from 'react';
import useSingularityLayoutSettings from '@singularity/core/SingularityLayout/useSingularityLayoutSettings';
import useThemeMediaQuery from '@singularity/hooks/useThemeMediaQuery';
import NavigationBarStyle3Content from './NavigationBarStyle3Content';
import { Layout1ConfigDefaultsType } from '@/components/theme-layouts/layout1/Layout1Config';

const NavigationBarSliceWidth = 120;
const NavigationBarSliceWidthDense = 64;
const panelWidth = 280;

type StyledNavBarProps = {
	theme?: Theme;
	open?: boolean;
	folded?: number;
	dense?: number;
	position?: string;
	className?: string;
	anchor?: string;
};

const StyledNavBar = styled('div')<StyledNavBarProps>(({ theme, dense }) => ({
	minWidth: NavigationBarSliceWidth,
	width: NavigationBarSliceWidth,
	maxWidth: NavigationBarSliceWidth,
	'& .user-menu': {
		minWidth: 56,
		width: 56,
		'& .title': {
			opacity: 0
		},
		'& .subtitle': {
			opacity: 0
		},
		'& .info-icon': {
			opacity: 0
		},
		'& .arrow': {
			opacity: 0
		}
	},
	variants: [
		{
			props: {
				position: 'left'
			},
			style: {
				borderRight: `1px solid ${theme.vars.palette.divider}`
			}
		},
		{
			props: {
				position: 'right'
			},
			style: {
				borderLight: `1px solid ${theme.vars.palette.divider}`
			}
		},
		{
			props: ({ dense }) => dense,
			style: {
				minWidth: NavigationBarSliceWidthDense,
				width: NavigationBarSliceWidthDense,
				maxWidth: NavigationBarSliceWidthDense
			}
		},
		{
			props: ({ dense, open, position }) => dense && !open && position === 'left',
			style: {
				marginLeft: -NavigationBarSliceWidthDense
			}
		},
		{
			props: ({ dense, open, position }) => dense && !open && position === 'right',
			style: {
				marginRight: -NavigationBarSliceWidthDense
			}
		},
		{
			props: ({ folded }) => !folded,
			style: {
				minWidth: NavigationBarSliceWidth + panelWidth,
				width: NavigationBarSliceWidth + panelWidth,
				maxWidth: NavigationBarSliceWidth + panelWidth,
				'& #singularity-NavigationBarSlice-panel': {
					opacity: '1',
					pointerEvents: 'initial'
				}
			}
		},
		{
			props: ({ folded, dense }) => !folded && dense,
			style: {
				minWidth: NavigationBarSliceWidthDense + panelWidth
			}
		},
		{
			props: ({ folded, dense }) => !folded && dense,
			style: {
				width: NavigationBarSliceWidthDense + panelWidth
			}
		},
		{
			props: ({ folded, dense }) => !folded && dense,
			style: {
				maxWidth: NavigationBarSliceWidthDense + panelWidth
			}
		},
		{
			props: ({ folded, open, position }) => !folded && !open && position === 'left',
			style: {
				marginLeft: `${-(dense ? NavigationBarSliceWidthDense + panelWidth : NavigationBarSliceWidth + panelWidth)}px`
			}
		},
		{
			props: ({ folded, open, position }) => !folded && !open && position === 'right',
			style: {
				marginRight: `${-(dense ? NavigationBarSliceWidthDense + panelWidth : NavigationBarSliceWidth + panelWidth)}px`
			}
		},
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
				marginLeft: -(dense ? NavigationBarSliceWidthDense : NavigationBarSliceWidth)
			}
		},
		{
			props: ({ open, position }) => !open && position === 'right',
			style: {
				marginRight: -(dense ? NavigationBarSliceWidthDense : NavigationBarSliceWidth)
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
		}
	]
}));

const StyledNavBarMobile = styled(SwipeableDrawer)<StyledNavBarProps>(() => ({
	'& .MuiDrawer-paper': {
		'& #singularity-NavigationBarSlice-side-panel': {
			minWidth: 'auto',
			wdith: 'auto'
		},
		'& #singularity-NavigationBarSlice-panel': {
			opacity: '1',
			pointerEvents: 'initial'
		}
	},
	'& .user-menu': {
		minWidth: 56,
		width: 56,
		'& .title': {
			opacity: 0
		},
		'& .subtitle': {
			opacity: 0
		},
		'& .info-icon': {
			opacity: 0
		},
		'& .arrow': {
			opacity: 0
		}
	}
}));

type NavigationBarStyle3Props = {
	className?: string;
	dense?: boolean;
};

/**
 * The NavigationBarSlice style 3.
 */
function NavigationBarStyle3(props: NavigationBarStyle3Props) {
	const { className = '', dense = false } = props;
	const dispatch = useAppDispatch();

	const settings = useSingularityLayoutSettings();
	const config = settings.config as Layout1ConfigDefaultsType;
	const isMobile = useThemeMediaQuery((theme) => theme.breakpoints.down('lg'));

	const { folded } = config.NavigationBarSlice;

	const NavigationBarSlice = useAppSelector(selectSingularityNavigationBar);

	useEffect(() => {
		return () => {
			dispatch(resetNavigationBar());
		};
	}, [dispatch]);

	return (
		<>
			<GlobalStyles
				styles={(theme) => ({
					'& #singularity-NavigationBarSlice-side-panel': {
						width: dense ? NavigationBarSliceWidthDense : NavigationBarSliceWidth,
						minWidth: dense ? NavigationBarSliceWidthDense : NavigationBarSliceWidth,
						maxWidth: dense ? NavigationBarSliceWidthDense : NavigationBarSliceWidth
					},
					'& #singularity-NavigationBarSlice-panel': {
						maxWidth: '100%',
						width: panelWidth,
						borderRight: `1px solid ${theme.vars.palette.divider}`,
						borderLeft: `1px solid ${theme.vars.palette.divider}`,
						[theme.breakpoints.up('lg')]: {
							minWidth: panelWidth,
							maxWidth: 'initial'
						}
					}
				})}
			/>

			{!isMobile && (
				<StyledNavBar
					open={NavigationBarSlice.open}
					dense={dense ? 1 : 0}
					folded={folded ? 1 : 0}
					position={config.NavigationBarSlice.position}
					className={clsx('sticky top-0 z-20 h-screen flex-auto shrink-0 flex-col', className)}
				>
					<NavigationBarStyle3Content dense={dense ? 1 : 0} />
				</StyledNavBar>
			)}

			{isMobile && (
				<StyledNavBarMobile
					classes={{
						paper: clsx('h-screen w-auto max-w-full flex-auto flex-col overflow-hidden', className)
					}}
					anchor={config.NavigationBarSlice.position as 'left' | 'right'}
					variant="temporary"
					open={NavigationBarSlice.mobileOpen}
					onClose={() => dispatch(NavigationBarSliceCloseMobile())}
					onOpen={() => {}}
					disableSwipeToOpen
					ModalProps={{
						keepMounted: true // Better open performance on mobile.
					}}
				>
					<NavigationBarStyle3Content dense={dense ? 1 : 0} />
				</StyledNavBarMobile>
			)}
		</>
	);
}

export default NavigationBarStyle3;
