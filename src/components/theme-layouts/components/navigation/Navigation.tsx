'use client';

import SingularityNavigation from '@singularity/core/SingularityNavigation';
import clsx from 'clsx';
import { useMemo } from 'react';
import { useAppDispatch } from 'src/store/hooks';
import useThemeMediaQuery from '@singularity/hooks/useThemeMediaQuery';
import { SingularityNavigationProps } from '@singularity/core/SingularityNavigation/SingularityNavigation';
import { NavigationBarSliceCloseMobile } from '../navigation-bar/NavigationBarSlice';
import useNavigation from './hooks/useNavigation';

/**
 * Navigation
 */

type NavigationProps = Partial<SingularityNavigationProps>;

function Navigation(props: NavigationProps) {
	const { className = '', layout = 'vertical', dense, active } = props;
	const { navigation } = useNavigation();

	const isMobile = useThemeMediaQuery((theme) => theme.breakpoints.down('lg'));

	const dispatch = useAppDispatch();

	return useMemo(() => {
		function handleItemClick() {
			if (isMobile) {
				dispatch(NavigationBarSliceCloseMobile());
			}
		}

		return (
			<SingularityNavigation
				className={clsx('navigation flex-1', className)}
				navigation={navigation}
				layout={layout}
				dense={dense}
				active={active}
				onItemClick={handleItemClick}
				checkPermission
			/>
		);
	}, [dispatch, isMobile, navigation, active, className, dense, layout]);
}

export default Navigation;
