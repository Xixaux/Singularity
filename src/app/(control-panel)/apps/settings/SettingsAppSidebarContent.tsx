import SingularityNavigation from '@singularity/core/SingularityNavigation/SingularityNavigation';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import SingularitySvgIcon from '@singularity/core/SingularitySvgIcon';
import clsx from 'clsx';
import useThemeMediaQuery from '@singularity/hooks/useThemeMediaQuery';
import SettingsAppNavigation from './SettingsAppNavigation';

const Root = styled('div')(({ theme }) => ({
    '&  .navigation': {
        padding: `${0}`,
        borderTop: `0px solid ${theme.vars.palette.divider}`
    },
    '&  .singularity-list-item': {
        padding: '18px 32px',
        margin: 0,
        borderRadius: 0,
        alignItems: 'start',
        borderBottom: `1px solid ${theme.vars.palette.divider}`,
        '&.active': {
            backgroundColor: `rgba(${theme.vars.palette.primary.mainChannel} / 0.1)`,
            '&  .singularity-list-item-icon': {
                color: `${theme.vars.palette.primary.main}`
            },
            '&  .singularity-list-item-text-primary': {
                color: `${theme.vars.palette.primary.main}`
            }
        }
    },
    '&  .singularity-list-item-text-primary': {
        fontSize: '13px',
        fontWeight: '500'
    },
    '&  .singularity-list-item-text-secondary': {
        fontSize: '12px',
        whiteSpace: 'normal',
        fontWeight: '400'
    }
}));

type SettingsAppSidebarContentProps = {
    className?: string;
    onSetSidebarOpen: (open: boolean) => void;
};

function SettingsAppSidebarContent(props: SettingsAppSidebarContentProps) {
    const { className, onSetSidebarOpen } = props;
    const isMobile = useThemeMediaQuery((theme) => theme.breakpoints.down('lg'));

    return (
        <Root>
            <div className={clsx('m-8 mr-6 flex items-center justify-between sm:my-10', className)}>
                <Typography
                    variant="h2"
                    sx={{
                        fontWeight: 600,
                        fontSize: '22px',
                        color: 'text.primary',
                    }}
                >
                    Settings
                </Typography>
                {isMobile && (
                    <IconButton
                        onClick={() => onSetSidebarOpen(false)}
                        aria-label="close left sidebar"
                        size="small"
                    >
                        <SingularitySvgIcon>heroicons-outline:x-mark</SingularitySvgIcon>
                    </IconButton>
                )}
            </div>
            <SingularityNavigation navigation={SettingsAppNavigation.children} />
        </Root>
    );
}

export default SettingsAppSidebarContent;