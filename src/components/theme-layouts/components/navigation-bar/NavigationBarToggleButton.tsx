import IconButton from '@mui/material/IconButton';
import { useAppDispatch } from 'src/store/hooks';
import _ from 'lodash';
import useThemeMediaQuery from '@singularity/hooks/useThemeMediaQuery';
import SingularitySvgIcon from '@singularity/core/SingularitySvgIcon';
import clsx from 'clsx';
import { IconButtonProps } from '@mui/material/IconButton';
import useSingularityLayoutSettings from '@singularity/core/SingularityLayout/useSingularityLayoutSettings';
import useSingularitySettings from '@singularity/core/SingularitySettings/hooks/useSingularitySettings';
import { NavigationBarSliceToggle, NavigationBarSliceToggleMobile } from './NavigationBarSlice';

export type NavigationBarToggleButtonProps = IconButtonProps;

/**
 * The NavigationBarSlice toggle button.
 */
function NavigationBarToggleButton(props: NavigationBarToggleButtonProps) {
    const {
        className = '',
        children = (
            <SingularitySvgIcon size={20}>
                heroicons-solid:bars-3
            </SingularitySvgIcon>
        ),
        ...rest
    } = props;

    const dispatch = useAppDispatch();
    const isMobile = useThemeMediaQuery((theme) => theme.breakpoints.down('lg'));
    const { config } = useSingularityLayoutSettings();
    const { setSettings } = useSingularitySettings();

    return (
        <IconButton
            onClick={() => {
                if (isMobile) {
                    dispatch(NavigationBarSliceToggleMobile());
                } else if (config?.NavigationBarSlice?.style === 'style-2') {
                    setSettings(_.set({}, 'layout.config.NavigationBarSlice.folded', !config?.NavigationBarSlice?.folded));
                } else {
                    dispatch(NavigationBarSliceToggle());
                }
            }}
            {...rest}
            className={clsx('border border-divider', className)}
        >
            {children}
        </IconButton>
    );
}

export default NavigationBarToggleButton;