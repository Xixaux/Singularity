'use client';

import { useState, useEffect } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
import Link from '@singularity/core/Link';
import { useTheme } from '@mui/material/styles'; 
import Popover, { PopoverProps } from '@mui/material/Popover';
import useUser from '@auth/useUser';
import clsx from 'clsx';
import SingularitySvgIcon from '@singularity/core/SingularitySvgIcon';

type UserMenuProps = {
  className?: string;
  popoverProps?: Partial<PopoverProps>;
};

function UserMenu(props: UserMenuProps) {
  const { className, popoverProps } = props;
  const { data: user, signOut, isGuest } = useUser();
  const [userMenu, setUserMenu] = useState<HTMLElement | null>(null);
  
  const theme = useTheme();

  useEffect(() => {
    console.log('userMenu state:', userMenu);
  }, [userMenu]);

  const userMenuClick = (event: React.MouseEvent<HTMLElement>) => {
    console.log('Opening popover, anchorEl:', event.currentTarget);
    setUserMenu(event.currentTarget);
  };

  const userMenuClose = () => {
    console.log('Closing popover');
    setUserMenu(null);
  };

  if (!user) {
    console.log('No user data, rendering null');
    return null;
  }

  return (
    <>
      <Button
        className={clsx(
          'user-menu flex justify-start shrink-0 min-h-14 h-14 rounded-lg p-2 space-x-3',
          className
        )}
        style={{ 
          backgroundColor: 'transparent',
          border: 'none', 
        }}
        sx={(theme) => ({
          color: theme.palette.text.primary,
          borderColor: theme.palette.divider || 'none', 
          '&:hover, &:focus': {
            backgroundColor: theme.palette.mode === 'light' ? 'rgba(0, 0, 0, 0.04)' : 'rgba(255, 255, 255, 0.05)',
            border: 'none', 
          },
        })}
        onClick={userMenuClick}
        color="inherit"
      >
        {user?.photoURL ? (
          <Avatar
            sx={(theme) => ({
              background: 'transparent',
              color: theme.palette.text.secondary || '#666666',
            })}
            className="avatar w-10 h-10 rounded-lg"
            alt="user photo"
            src={user?.photoURL}
            variant="rounded"
          />
        ) : (
          <Avatar
            sx={(theme) => ({
              background: 'transparent',
              color: theme.palette.text.secondary || '#666666',
            })}
            className="avatar md:mx-1"
          >
            {user?.displayName?.[0]}
          </Avatar>
        )}
        <div className="flex flex-col flex-auto space-y-2">
          <Typography
            component="span"
            className="title flex font-semibold text-base capitalize truncate tracking-tight leading-none"
            sx={{ color: (theme) => theme.palette.text.primary }}
          >
            {user?.displayName}
          </Typography>
          <Typography
            className="subtitle flex text-md font-medium tracking-tighter leading-none"
            sx={{ color: (theme) => theme.palette.text.secondary || '#666666' }}
          >
            {user?.email}
          </Typography>
        </div>
      </Button>
      <Popover
        open={Boolean(userMenu)}
        anchorEl={userMenu}
        onClose={userMenuClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transitionDuration={0}
        BackdropProps={{
          style: { backgroundColor: 'transparent', opacity: 0 },
        }}
        classes={{ paper: 'user-menu-popover' }}
        PaperProps={{
          sx: {
            border: 'none',
          }
        }}
        sx={(theme) => ({
          zIndex: 1300,
          '.MuiPaper-root': {
            backgroundColor: 'transparent',
            color: theme.palette.text.primary,
            minWidth: '16rem',
            padding: '0.5rem 0',
            boxShadow: theme.shadows[8],
            border: 'none',
          },
          '.MuiMenuItem-root': {
            backgroundColor: 'transparent',
            color: theme.palette.text.primary,
            '&:hover': {
              backgroundColor: theme.palette.mode === 'light' ? '#6BC9F7' : '#003087',
            },
          },
          '.MuiListItemText-primary': {
            color: theme.palette.text.primary,
          },
          '.MuiListItemIcon-root': {
            color: theme.palette.text.primary,
          },
          '.SingularitySvgIcon, .SingularitySvgIcon svg': {
            color: theme.palette.text.primary,
            fill: theme.palette.text.primary,
            stroke: theme.palette.text.primary,
          },
        })}
        {...popoverProps}
      >
        {isGuest ? (
          <>
            <MenuItem component={Link} to="/sign-in" role="button" onClick={userMenuClose}>
              <ListItemIcon className="min-w-9">
                <SingularitySvgIcon>
                  heroicons-outline:lock-closed
                </SingularitySvgIcon>
              </ListItemIcon>
              <ListItemText primary="Sign In" />
            </MenuItem>
            <MenuItem component={Link} to="/sign-up" role="button" onClick={userMenuClose}>
              <ListItemIcon className="min-w-9">
                <SingularitySvgIcon>
                  heroicons-outline:user-plus
                </SingularitySvgIcon>
              </ListItemIcon>
              <ListItemText primary="Sign up" />
            </MenuItem>
          </>
        ) : (
          <>
            <MenuItem component={Link} to="/apps/profile" onClick={userMenuClose} role="button">
              <ListItemIcon className="min-w-9">
                <SingularitySvgIcon>
                  heroicons-outline:user-circle
                </SingularitySvgIcon>
              </ListItemIcon>
              <ListItemText primary="My Profile" />
            </MenuItem>
            <MenuItem component={Link} to="/apps/mailbox" onClick={userMenuClose} role="button">
              <ListItemIcon className="min-w-9">
                <SingularitySvgIcon>
                  heroicons-outline:envelope
                </SingularitySvgIcon>
              </ListItemIcon>
              <ListItemText primary="Inbox" />
            </MenuItem>
            <MenuItem
              onClick={() => {
                console.log('Signing out');
                signOut();
                userMenuClose();
              }}
            >
              <ListItemIcon className="min-w-9">
                <SingularitySvgIcon>
                  heroicons-outline:arrow-right-on-rectangle
                </SingularitySvgIcon>
              </ListItemIcon>
              <ListItemText primary="Sign out" />
            </MenuItem>
          </>
        )}
      </Popover>
    </>
  );
}

export default UserMenu;