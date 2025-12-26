import { ThemeProvider } from '@mui/material/styles';
import { useEffect } from 'react';
import useThemeMediaQuery from '@singularity/hooks/useThemeMediaQuery';
import { useAppDispatch, useAppSelector } from 'src/store/hooks';
import { NavigationBarSliceCloseMobile, selectSingularityNavigationBar } from 'src/components/theme-layouts/components/navigation-bar/NavigationBarSlice';
import usePathname from '@singularity/hooks/usePathname';
import useSingularityLayoutSettings from '@singularity/core/SingularityLayout/useSingularityLayoutSettings';
import { useNavigationBarTheme } from '@singularity/core/SingularitySettings/hooks/SingularityThemeHooks';
import NavigationBarToggleFabLayout1 from './NavigationBarToggleFabLayout1';
import NavigationBarStyle1 from './navigation-bar/style-1/NavigationBarStyle1';
import NavigationBarStyle2 from './navigation-bar/style-2/NavigationBarStyle2';
import NavigationBarStyle3 from './navigation-bar/style-3/NavigationBarStyle3';

/**
 * The NavigationBarSlice wrapper layout 1.
 */
function NavigationBarWrapperLayout1() {
	const { config } = useSingularityLayoutSettings();

	const NavigationBarSlice = useAppSelector(selectSingularityNavigationBar);
	const pathname = usePathname();

	const isMobile = useThemeMediaQuery((theme) => theme.breakpoints.down('lg'));
	const dispatch = useAppDispatch();

	useEffect(() => {
		if (isMobile) {
			dispatch(NavigationBarSliceCloseMobile());
		}
	}, [dispatch, pathname, isMobile]);

	const NavigationBarSliceTheme = useNavigationBarTheme();

	return (
		<>
			<ThemeProvider theme={NavigationBarSliceTheme}>
				<>
					{config.NavigationBarSlice.style === 'style-1' && <NavigationBarStyle1 />}
					{config.NavigationBarSlice.style === 'style-2' && <NavigationBarStyle2 />}
					{config.NavigationBarSlice.style === 'style-3' && <NavigationBarStyle3 />}
					{config.NavigationBarSlice.style === 'style-3-dense' && <NavigationBarStyle3 dense />}
				</>
			</ThemeProvider>
			{config.NavigationBarSlice.display && !config.toolbar.display && !NavigationBarSlice.open && <NavigationBarToggleFabLayout1 />}
		</>
	);
}

export default NavigationBarWrapperLayout1;
