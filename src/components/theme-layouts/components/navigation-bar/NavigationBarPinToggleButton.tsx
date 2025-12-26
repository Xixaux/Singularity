import clsx from 'clsx';
import NavigationBarToggleButton, {
	NavigationBarToggleButtonProps
} from 'src/components/theme-layouts/components/navigation-bar/NavigationBarToggleButton';
import useSingularityLayoutSettings from '@singularity/core/SingularityLayout/useSingularityLayoutSettings';

type NavigationBarPinToggleButtonProps = NavigationBarToggleButtonProps & {
	className?: string;
	children?: React.ReactNode;
};

/**
 * NavigationBar pin toggle button.
 */
function NavigationBarPinToggleButton(props: NavigationBarPinToggleButtonProps) {
	const { ...rest } = props;
	const { config } = useSingularityLayoutSettings();
	const folded = config.NavigationBarSlice?.folded;

	return (
		<NavigationBarToggleButton
			{...rest}
			className={clsx('rounded-sm', folded ? 'opacity-50' : 'opacity-100', rest.className)}
		/>
	);
}

export default NavigationBarPinToggleButton;
