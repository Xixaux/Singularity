import { useAppDispatch } from 'src/store/hooks';
import useThemeMediaQuery from '@singularity/hooks/useThemeMediaQuery';
import NavigationBarToggleFab from 'src/components/theme-layouts/components/navigation-bar/NavigationBarToggleFab';
import { NavigationBarSliceToggle, NavigationBarSliceToggleMobile } from 'src/components/theme-layouts/components/navigation-bar/NavigationBarSlice';

type NavigationBarToggleFabLayout2Props = {
	className?: string;
};

/**
 * The NavigationBarSlice toggle fab layout 2.
 */
function NavigationBarToggleFabLayout2(props: NavigationBarToggleFabLayout2Props) {
	const { className } = props;

	const isMobile = useThemeMediaQuery((theme) => theme.breakpoints.down('lg'));

	const dispatch = useAppDispatch();

	return (
		<NavigationBarToggleFab
			className={className}
			onClick={() => {
				dispatch(isMobile ? NavigationBarSliceToggleMobile() : NavigationBarSliceToggle());
			}}
		/>
	);
}

export default NavigationBarToggleFabLayout2;
