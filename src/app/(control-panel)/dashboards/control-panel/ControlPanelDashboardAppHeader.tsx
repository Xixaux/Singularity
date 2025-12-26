'use client';

import { memo } from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { useState } from 'react';
import _ from 'lodash';
import Button from '@mui/material/Button';
import SingularitySvgIcon from '@singularity/core/SingularitySvgIcon';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { lighten } from '@mui/material/styles';
import PageBreadcrumb from 'src/components/PageBreadcrumb';
import useUser from '@auth/useUser';
import { useGetControlPanelDashboardControlPanelsQuery } from './ControlPanelDashboardApi';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';

const ProjectSelectorButton = styled(Button)(({ theme }) => ({
    background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.dark} 100%)`,
    color: theme.palette.primary.contrastText,
    borderRadius: '12px',
    padding: theme.spacing(1, 2),
    textTransform: 'none',
    fontWeight: 600,
    fontSize: theme.typography.body1.fontSize,
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
    transition: 'transform 0.2s ease, box-shadow 0.2s ease',
    '&:hover': {
        background: `linear-gradient(135deg, ${lighten(theme.palette.primary.main, 0.1)} 0%, ${lighten(theme.palette.primary.dark, 0.1)} 100%)`,
        boxShadow: '0 6px 16px rgba(0, 0, 0, 0.3)',
        transform: 'translateY(-2px)',
    },
    [theme.breakpoints.down('sm')]: {
        padding: theme.spacing(0.75, 1.5),
        fontSize: theme.typography.body2.fontSize,
    },
}));

const UserInfo = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    minWidth: 0,
    flexShrink: 1,
    textAlign: 'right',
    gap: theme.spacing(0.5),
    [theme.breakpoints.down('sm')]: {
        textAlign: 'left',
    },
}));

const WelcomeHeaderContainer = styled(motion.div)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    padding: theme.spacing(3),
    background: 'transparent',
    borderRadius: '16px',
    margin: theme.spacing(4, 0),
    [theme.breakpoints.up('sm')]: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: theme.spacing(4),
    },
}));

const WelcomeAvatarWrapper = styled(motion.div)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    order: 1,
    [theme.breakpoints.up('sm')]: {
        order: 2,
    },
}));

const ControlPanelWrapper = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    minWidth: 0,
    order: 2,
    gap: theme.spacing(1.5),
    [theme.breakpoints.up('sm')]: {
        order: 1,
    },
}));

const NotificationRow = styled(Box)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    gap: theme.spacing(1),
    [theme.breakpoints.down('sm')]: {
        justifyContent: 'flex-start',
    },
}));

function ControlPanelDashboardAppHeader() {
    const theme = useTheme();
    const { data: projects } = useGetControlPanelDashboardControlPanelsQuery();
    const { data: user, isGuest } = useUser();

    const [selectedControlPanel, setSelectedControlPanel] = useState({
        id: 1,
        menuEl: null,
    });

    function handleChangeControlPanel(id) {
        setSelectedControlPanel({
            id,
            menuEl: null,
        });
    }

    function handleOpenControlPanelMenu(event) {
        setSelectedControlPanel({
            id: selectedControlPanel.id,
            menuEl: event.currentTarget,
        });
    }

    function handleCloseControlPanelMenu() {
        setSelectedControlPanel({
            id: selectedControlPanel.id,
            menuEl: null,
        });
    }

    return (
        <WelcomeHeaderContainer
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
        >
            <ControlPanelWrapper>
                <Box
                    sx={{
                        textAlign: { xs: 'left', sm: 'right' },
                        fontSize: theme.typography.body2.fontSize,
                        fontWeight: 500,
                        color: theme.palette.text.secondary,
                        '& .MuiBreadcrumbs-root a': {
                            color: theme.palette.primary.main,
                            textDecoration: 'none',
                            transition: 'color 0.2s ease',
                            '&:hover': {
                                color: lighten(theme.palette.primary.main, 0.2),
                            },
                        },
                        '& .MuiBreadcrumbs-root p': {
                            color: theme.palette.text.primary,
                        },
                        '& .MuiBreadcrumbs-separator': {
                            color: theme.palette.primary.main,
                        },
                        [theme.breakpoints.down('sm')]: {
                            fontSize: theme.typography.caption.fontSize,
                        },
                    }}
                >
                    <PageBreadcrumb />
                </Box>

                <ProjectSelectorButton
                    onClick={handleOpenControlPanelMenu}
                    endIcon={
                        <SingularitySvgIcon size={20} color="inherit">
                            heroicons-solid:chevron-down
                        </SingularitySvgIcon>
                    }
                >
                    <Box
                        component="span"
                        sx={{
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                            whiteSpace: 'nowrap',
                            maxWidth: { xs: '160px', sm: '240px' },
                        }}
                    >
                        {_.find(projects, ['id', selectedControlPanel.id])?.name || 'Select Project'}
                    </Box>
                </ProjectSelectorButton>

                <Menu
                    id="project-menu"
                    anchorEl={selectedControlPanel.menuEl}
                    open={Boolean(selectedControlPanel.menuEl)}
                    onClose={handleCloseControlPanelMenu}
                    sx={{
                        '& .MuiPaper-root': {
                            borderRadius: '12px',
                            boxShadow: '0 4px 16px rgba(0, 0, 0, 0.2)',
                            background: theme.palette.background.paper,
                        },
                        '& .MuiMenuItem-root': {
                            color: theme.palette.text.primary,
                            padding: theme.spacing(1.5, 2),
                            '&:hover': {
                                backgroundColor: lighten(theme.palette.primary.main, 0.9),
                            },
                            [theme.breakpoints.down('sm')]: {
                                fontSize: theme.typography.body2.fontSize,
                            },
                        },
                    }}
                >
                    {projects &&
                        projects.map((project) => (
                            <MenuItem
                                key={project.id}
                                onClick={() => handleChangeControlPanel(project.id)}
                            >
                                {project.name}
                            </MenuItem>
                        ))}
                </Menu>
            </ControlPanelWrapper>

            <WelcomeAvatarWrapper
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
            >
                <UserInfo>
                    <Typography
                        variant="h4"
                        fontWeight="medium"
                        sx={{
                            fontSize: { xs: '1.4rem', sm: '2rem' },
                            color: theme.palette.text.primary,
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                            whiteSpace: 'nowrap',
                            maxWidth: { xs: 'calc(100vw - 100px)', sm: '500px' },
                        }}
                    >
                        {isGuest ? (
                            <TypeAnimation
                                sequence={['Welcome, Guest!', 3000, 'Explore the Dashboard', 3000]}
                                wrapper="span"
                                speed={50}
                                repeat={Infinity}
                            />
                        ) : (
                            `Hello, ${user?.displayName || user?.email || 'User'}!`
                        )}
                    </Typography>

                    <NotificationRow>
                        <Typography
                            component="span"
                            variant="body2"
                            fontWeight={500}
                            color={theme.palette.text.secondary}
                            sx={{
                                maxWidth: { xs: 'calc(100% - 32px)', sm: '400px' },
                                overflow: 'hidden',
                                textOverflow: 'ellipsis',
                                whiteSpace: 'nowrap',
                                [theme.breakpoints.down('sm')]: {
                                    fontSize: '0.75rem',
                                },
                            }}
                        >
                            <TypeAnimation
                                sequence={['You have 4 new messages and 15 new tasks', 4000]}
                                wrapper="span"
                                speed={50}
                                repeat={Infinity}
                            />
                        </Typography>
                        <NotificationsIcon
                            sx={{
                                color: theme.palette.text.secondary,
                                fontSize: { xs: 22, sm: 24 },
                                flexShrink: 0,
                            }}
                        />
                    </NotificationRow>
                </UserInfo>

                <Avatar
                    sx={{
                        background: `linear-gradient(45deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
                        color: theme.palette.primary.contrastText,
                        borderRadius: '12px',
                        width: { xs: 48, sm: 64 },
                        height: { xs: 48, sm: 64 },
                        marginLeft: theme.spacing(2),
                        transition: 'transform 0.2s ease',
                        '&:hover': {
                            transform: 'scale(1.05)',
                        },
                    }}
                    alt="user photo"
                    src={user?.photoURL}
                >
                    {user?.displayName?.[0] || 'G'}
                </Avatar>
            </WelcomeAvatarWrapper>
        </WelcomeHeaderContainer>
    );
}

export default memo(ControlPanelDashboardAppHeader);