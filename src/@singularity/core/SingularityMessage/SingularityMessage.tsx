import { amber, blue, green } from '@mui/material/colors';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import Snackbar from '@mui/material/Snackbar';
import SnackbarContent from '@mui/material/SnackbarContent';
import Typography from '@mui/material/Typography';
import { memo } from 'react';
import { hideMessage, selectSingularityMessageOptions, selectSingularityMessageState } from '@singularity/core/SingularityMessage/singularityMessageSlice';
import { useAppDispatch, useAppSelector } from 'src/store/hooks';
import SingularitySvgIcon from '../SingularitySvgIcon';
import { useTheme } from '@mui/material/styles';

export type SingularityMessageVariantType = 'success' | 'error' | 'warning' | 'info';

type StyledSnackbarProps = {
    variant?: SingularityMessageVariantType;
};

const StyledSnackbar = styled(Snackbar)<StyledSnackbarProps>(({ theme }) => ({
    '& .SingularityMessage-content': {},
    variants: [
        {
            props: {
                variant: 'success'
            },
            style: {
                '& .SingularityMessage-content': {
                    backgroundColor: green[600],
                    color: theme.palette.common.white
                }
            }
        },
        {
            props: {
                variant: 'error'
            },
            style: {
                '& .SingularityMessage-content': {
                    backgroundColor: theme.vars.palette.error.dark,
                    color: theme.palette.getContrastText(theme.palette.error.dark)
                }
            }
        },
        {
            props: {
                variant: 'info'
            },
            style: {
                '& .SingularityMessage-content': {
                    backgroundColor: blue[600],
                    color: theme.palette.common.white
                }
            }
        },
        {
            props: {
                variant: 'warning'
            },
            style: {
                '& .SingularityMessage-content': {
                    backgroundColor: amber[600],
                    color: theme.palette.common.white
                }
            }
        }
    ]
}));

const variantIcon = {
    success: 'check_circle',
    warning: 'warning',
    error: 'error_outline',
    info: 'info'
};

/**
 * SingularityMessage
 * The SingularityMessage component holds a snackbar that is capable of displaying message with 4 different variant. It uses the @mui/material React packages to create the components.
 */
function SingularityMessage() {
    const dispatch = useAppDispatch();
    const state = useAppSelector(selectSingularityMessageState);
    const options = useAppSelector(selectSingularityMessageOptions);
    const theme = useTheme();

    return (
        <StyledSnackbar
            {...options}
            open={state}
            onClose={() => dispatch(hideMessage())}
        >
            <SnackbarContent
                className="SingularityMessage-content"
                message={
                    <div className="flex items-center">
                        {variantIcon[options.variant] && (
                            <SingularitySvgIcon color={theme.palette.common.white}>{variantIcon[options.variant]}</SingularitySvgIcon>
                        )}
                        <Typography className="mx-2">{options.message}</Typography>
                    </div>
                }
                action={[
                    <IconButton
                        key="close"
                        aria-label="Close"
                        color="inherit"
                        onClick={() => dispatch(hideMessage())}
                        size="large"
                    >
                        <SingularitySvgIcon color={theme.palette.common.white}>heroicons-outline:x-mark</SingularitySvgIcon>
                    </IconButton>
                ]}
            />
        </StyledSnackbar>
    );
}

export default memo(SingularityMessage);