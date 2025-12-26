import { useAppDispatch } from 'src/store/hooks';
import useThemeMediaQuery from '@singularity/hooks/useThemeMediaQuery';
import { NavigationBarSliceToggle, NavigationBarSliceToggleMobile } from 'src/components/theme-layouts/components/navigation-bar/NavigationBarSlice';
import NavigationBarToggleFab from 'src/components/theme-layouts/components/navigation-bar/NavigationBarToggleFab';
import useSingularityLayoutSettings from '@singularity/core/SingularityLayout/useSingularityLayoutSettings';
import { Layout1ConfigDefaultsType } from '@/components/theme-layouts/layout1/Layout1Config';

type NavigationBarToggleFabLayout1Props = {
	className?: string;
};

/**
 * The NavigationBarSlice toggle fab layout 1.
 */
function NavigationBarToggleFabLayout1(props: NavigationBarToggleFabLayout1Props) {
	const { className } = props;

	const isMobile = useThemeMediaQuery((theme) => theme.breakpoints.down('lg'));

	const settings = useSingularityLayoutSettings();
	const config = settings.config as Layout1ConfigDefaultsType;

	const dispatch = useAppDispatch();

	return (
		<NavigationBarToggleFab
			className={className}
			onClick={() => {
				dispatch(isMobile ? NavigationBarSliceToggleMobile() : NavigationBarSliceToggle());
			}}
			position={config.NavigationBarSlice.position}
		/>
	);
}

export default NavigationBarToggleFabLayout1;
