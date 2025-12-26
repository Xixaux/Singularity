import { styled } from '@mui/material/styles';
import { useMainTheme } from '@singularity/core/SingularitySettings/hooks/SingularityThemeHooks';
import Typography from '@mui/material/Typography';

const Root = styled('div')(({ theme }) => ({
    '& > .logo-icon': {
        transition: theme.transitions.create(['width', 'height'], {
            duration: theme.transitions.duration.shortest,
            easing: theme.transitions.easing.easeInOut
        })
    },
    '& > .badge': {
        transition: theme.transitions.create('opacity', {
            duration: theme.transitions.duration.shortest,
            easing: theme.transitions.easing.easeInOut
        })
    }
}));

/**
 * The logo component.
 */
function Logo() {
    const mainTheme = useMainTheme();

    return (
        <Root className="flex flex-1 items-center space-x-3">
            <div className="flex flex-1 items-center space-x-2 px-2.5">
                <img
                    className="logo-icon h-8 w-8"
                    src="/assets/images/logo/shape_alt_64.png"
                    alt="Singularity Logo"
                />
                <div className="logo-text flex flex-col flex-auto gap-0.5">
                    <Typography
                        className="text-[16px] tracking-tight font-bold leading-none"
                        sx={{
                            color: 'var(--mui-palette-text-primary) ',
                        }}
                    >
                        SINGULARITY
                    </Typography>
                    <Typography
                        className="text-[13px] tracking-tight font-semibold leading-none"
                        sx={{
                            color: '#82d7f7 ',
                        }}
                    >
                        v4.0
                    </Typography>
                </div>
            </div>
        </Root>
    );
}

export default Logo;