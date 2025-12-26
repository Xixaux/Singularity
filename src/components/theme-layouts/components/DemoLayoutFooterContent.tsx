'use client';

import { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import Popover from '@mui/material/Popover';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
import ListItemIcon from '@mui/material/ListItemIcon';
import SvgIcon from '@mui/material/SvgIcon';
import { useTheme } from '@mui/material/styles';
import {
  UsersIcon,
  IdentificationIcon,
  LockOpenIcon,
  ClockIcon,
} from '@heroicons/react/24/outline';
import PoweredByLinks from './PoweredByLinks';
import React from 'react';

const CustomLink: React.FC<{ to: string, children: React.ReactNode, onClick: () => void }> = ({ to, children, onClick }) => (
  <a
    href={`/dashboards/${to}`}
    onClick={onClick}
    style={{ textDecoration: 'none', color: 'inherit' }}
  >
    {children}
  </a>
);

function DemoLayoutFooterContent() {
  const [userAnchorEl, setUserAnchorEl] = useState<null | HTMLElement>(null);
  const [rolesAnchorEl, setRolesAnchorEl] = useState<null | HTMLElement>(null);
  const [permissionsAnchorEl, setPermissionsAnchorEl] = useState<null | HTMLElement>(null);
  const [logsAnchorEl, setLogsAnchorEl] = useState<null | HTMLElement>(null);
  const theme = useTheme();

  const iconStrokeColor =
    theme.palette.mode === 'light' ? '#000000' : theme.palette.icon?.primary || theme.palette.text.primary;

  const handleUserClick = (event: React.MouseEvent<HTMLElement>) => {
    setUserAnchorEl(event.currentTarget);
  };

  const handleRolesClick = (event: React.MouseEvent<HTMLElement>) => {
    setRolesAnchorEl(event.currentTarget);
  };

  const handlePermissionsClick = (event: React.MouseEvent<HTMLElement>) => {
    setPermissionsAnchorEl(event.currentTarget);
  };

  const handleLogsClick = (event: React.MouseEvent<HTMLElement>) => {
    setLogsAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setUserAnchorEl(null);
    setRolesAnchorEl(null);
    setPermissionsAnchorEl(null);
    setLogsAnchorEl(null);
  };

  return (
    <>
      <div className="flex grow shrink-0">
        <IconButton
          className="footer-icon-button"
          sx={{
            color: iconStrokeColor,
            marginLeft: '8px',
            padding: '10px',
            zIndex: 1,
            backgroundColor: 'transparent',
            '& svg': {
              stroke: iconStrokeColor,
              fill: 'none',
            },
            '&:hover': {
              backgroundColor: 'transparent',
            },
          }}
          onClick={handleUserClick}
          aria-label="Users menu"
          aria-controls={userAnchorEl ? 'users-menu' : undefined}
          aria-haspopup="true"
          data-icon-type="users"
          onMouseEnter={() => console.log('Hovering users icon')}
        >
          <SvgIcon sx={{ width: '20px', height: '20px' }}>
            <UsersIcon />
          </SvgIcon>
        </IconButton>

        <IconButton
          className="footer-icon-button"
          sx={{
            color: iconStrokeColor,
            padding: '10px',
            zIndex: 1,
            backgroundColor: 'transparent',
            '& svg': {
              stroke: iconStrokeColor,
              fill: 'none',
            },
            '&:hover': {
              backgroundColor: 'transparent',
            },
          }}
          onClick={handleRolesClick}
          aria-label="Roles menu"
          aria-controls={rolesAnchorEl ? 'roles-menu' : undefined}
          aria-haspopup="true"
          data-icon-type="roles"
        >
          <SvgIcon sx={{ width: '20px', height: '20px' }}>
            <IdentificationIcon />
          </SvgIcon>
        </IconButton>

        <IconButton
          className="footer-icon-button"
          sx={{
            color: iconStrokeColor,
            padding: '10px',
            zIndex: 1,
            backgroundColor: 'transparent',
            '& svg': {
              stroke: iconStrokeColor,
              fill: 'none',
            },
            '&:hover': {
              backgroundColor: 'transparent',
            },
          }}
          onClick={handlePermissionsClick}
          aria-label="Permissions menu"
          aria-controls={permissionsAnchorEl ? 'permissions-menu' : undefined}
          aria-haspopup="true"
          data-icon-type="permissions"
        >
          <SvgIcon sx={{ width: '20px', height: '20px' }}>
            <LockOpenIcon />
          </SvgIcon>
        </IconButton>

        <IconButton
          className="footer-icon-button"
          sx={{
            color: iconStrokeColor,
            padding: '10px',
            zIndex: 1,
            backgroundColor: 'transparent',
            '& svg': {
              stroke: iconStrokeColor,
              fill: 'none',
            },
            '&:hover': {
              backgroundColor: 'transparent',
            },
          }}
          onClick={handleLogsClick}
          aria-label="Logs menu"
          aria-controls={logsAnchorEl ? 'logs-menu' : undefined}
          aria-haspopup="true"
          data-icon-type="logs"
        >
          <SvgIcon sx={{ width: '20px', height: '20px' }}>
            <ClockIcon />
          </SvgIcon>
        </IconButton>

        <Popover
          id={userAnchorEl ? 'users-menu' : undefined}
          open={Boolean(userAnchorEl)}
          anchorEl={userAnchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'center',
          }}
          transformOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
          }}
        >
          <CustomLink to="user-management/users" onClick={handleClose}>
            <MenuItem>
              <Typography>Users</Typography>
            </MenuItem>
          </CustomLink>
        </Popover>

        <Popover
          id={rolesAnchorEl ? 'roles-menu' : undefined}
          open={Boolean(rolesAnchorEl)}
          anchorEl={rolesAnchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'center',
          }}
          transformOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
          }}
        >
          <CustomLink to="user-management/roles" onClick={handleClose}>
            <MenuItem>
              <Typography>Roles</Typography>
            </MenuItem>
          </CustomLink>
        </Popover>

        <Popover
          id={permissionsAnchorEl ? 'permissions-menu' : undefined}
          open={Boolean(permissionsAnchorEl)}
          anchorEl={permissionsAnchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'center',
          }}
          transformOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
          }}
        >
          <CustomLink to="user-management/permissions" onClick={handleClose}>
            <MenuItem>
              <Typography>Permissions</Typography>
            </MenuItem>
          </CustomLink>
        </Popover>

        <Popover
          id={logsAnchorEl ? 'logs-menu' : undefined}
          open={Boolean(logsAnchorEl)}
          anchorEl={logsAnchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'center',
          }}
          transformOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
          }}
        >
          <CustomLink to="user-management/logs" onClick={handleClose}>
            <MenuItem>
              <Typography>Logs</Typography>
            </MenuItem>
          </CustomLink>
        </Popover>
      </div>

      <div className="flex grow shrink-0 px-3 justify-end items-center">
        <Typography
          variant="caption"
          sx={{
            marginRight: '16px',
            color: theme.palette.text.secondary,
          }}
        >
          © All rights reserved Singularity Themes
        </Typography>
        <PoweredByLinks />
      </div>
    </>
  );
}

export default DemoLayoutFooterContent;