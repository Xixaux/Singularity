import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import { motion } from 'motion/react';
import { useAppDispatch, useAppSelector } from 'src/store/hooks';
import SingularitySvgIcon from '@singularity/core/SingularitySvgIcon';
import PageBreadcrumb from 'src/components/PageBreadcrumb';
import NotesSearch from './NotesSearch';
import { selectVariateDescSize, toggleVariateDescSize } from '../notesAppSlice';
import useThemeMediaQuery from '../../../../../@singularity/hooks/useThemeMediaQuery';

type NotesHeaderProps = {
    onSetSidebarOpen: (open: boolean) => void;
};

/**
 * The notes header.
 */
function NotesHeader(props: NotesHeaderProps) {
    const { onSetSidebarOpen } = props;
    const isMobile = useThemeMediaQuery((theme) => theme.breakpoints.down('lg'));

    const dispatch = useAppDispatch();
    const variateDescSize = useAppSelector(selectVariateDescSize);

    return (
        <div className="flex flex-1 flex-col sm:flex-row sm:items-center justify-between py-2 sm:py-6 relative">
            <motion.span
                initial={{ x: -20 }}
                animate={{
                    x: 0,
                    transition: { delay: 0.2 }
                }}
            >
                <div className="flex flex-col mb-3 sm:mb-0">
                    <PageBreadcrumb className="mb-1" />
                    <Typography
                        variant="h2"
                        sx={{
                            fontWeight: 600,
                            fontSize: '22px',
                            mb: 1,
                            color: 'text.primary',
                        }}
                    >
                        Notes
                    </Typography>
                </div>
            </motion.span>

            <div className="flex flex-1 w-full sm:w-auto items-center justify-end space-x-2">
                {isMobile && (
                    <IconButton
                        onClick={() => onSetSidebarOpen(true)}
                        aria-label="open left sidebar"
                        className="border border-divider"
                    >
                        <SingularitySvgIcon>heroicons-outline:bars-3</SingularitySvgIcon>
                    </IconButton>
                )}

                <Tooltip title="Toggle Variate Description Size">
                    <IconButton
                        className="border border-divider"
                        onClick={() => dispatch(toggleVariateDescSize())}
                    >
                        <SingularitySvgIcon color={variateDescSize ? 'action' : 'disabled'}>
                            heroicons-solid:arrows-up-down
                        </SingularitySvgIcon>
                    </IconButton>
                </Tooltip>
                <NotesSearch />
            </div>
        </div>
    );
}

export default NotesHeader;