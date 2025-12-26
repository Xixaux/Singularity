'use client';

import React, { useState } from 'react';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Tooltip from '@mui/material/Tooltip';
import Divider from '@mui/material/Divider';
import clsx from 'clsx';
import Chip from '@mui/material/Chip';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import PersonIcon from '@mui/icons-material/Person';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import DashboardIcon from '@mui/icons-material/Dashboard';
import BasicMenuLevelsFeatureItem from './BasicMenuLevelsFeatureItem';

type BasicMenuLevelsCardProps = {
  title: string;
  subtitle: string;
  isPopular?: boolean;
  features: { id: number; text: string }[];
  menuType: 'multi-level' | 'icon' | 'context' | 'mega';
  className?: string;
};

/**
 * The menu type card component.
 */
function BasicMenuLevelsCard(props: BasicMenuLevelsCardProps) {
  const {
    title = '',
    subtitle = '',
    isPopular = false,
    features = [],
    menuType = 'multi-level',
    className = '',
  } = props;

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [subMenuAnchorEl, setSubMenuAnchorEl] = useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleSubMenuClick = (event: React.MouseEvent<HTMLElement>) => {
    setSubMenuAnchorEl(event.currentTarget);
  };

  const handleContextMenu = (event: React.MouseEvent<HTMLDivElement>) => {
    event.preventDefault();
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setSubMenuAnchorEl(null);
  };

  return (
    <Paper
      className={clsx(
        'relative max-w-sm flex-col p-6 sm:px-10 sm:py-12 md:max-w-none',
        isPopular && '',
        className,
      )}
      sx={[
        isPopular &&
          ((theme) => ({
            border: `1px solid ${theme.vars.palette.secondary.main}`,
          })),
      ]}
      onContextMenu={menuType === 'context' ? handleContextMenu : undefined}
    >
      {isPopular && (
        <div className="absolute inset-x-0 -top-4 flex items-center justify-center">
          <Chip
            label="POPULAR"
            color="secondary"
            className="flex h-8 items-center rounded-full px-8 text-center font-medium leading-none"
          />
        </div>
      )}
      <Typography className="text-4xl font-bold leading-[1.25] tracking-tight">{title}</Typography>
      <Typography className="mt-2 text-lg font-medium tracking-tight" color="text.secondary">
        {subtitle}
      </Typography>
      <Divider className="bg-accent my-10 h-1 w-8 rounded-sm" />
      <div className="flex justify-center mb-6">
        {menuType === 'multi-level' && (
          <>
            <Button
              variant="contained"
              color="primary"
              onClick={handleClick}
              endIcon={<ArrowRightIcon />}
            >
              Open Menu
            </Button>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleClose}
              MenuListProps={{ 'aria-labelledby': 'multi-level-menu' }}
            >
              <Tooltip title="View user profile" placement="right">
                <MenuItem onClick={handleClose}>
                  <PersonIcon sx={{ mr: 1 }} />
                  Profile
                </MenuItem>
              </Tooltip>
              <Tooltip title="Adjust settings" placement="right">
                <MenuItem
                  onClick={handleSubMenuClick}
                  sx={{ display: 'flex', justifyContent: 'space-between' }}
                >
                  <span>
                    <SettingsIcon sx={{ mr: 1 }} />
                    Settings
                  </span>
                  <ArrowRightIcon />
                </MenuItem>
              </Tooltip>
              <Menu
                anchorEl={subMenuAnchorEl}
                open={Boolean(subMenuAnchorEl)}
                onClose={handleClose}
                anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                transformOrigin={{ vertical: 'top', horizontal: 'left' }}
              >
                <Tooltip title="Manage account details" placement="right">
                  <MenuItem onClick={handleClose}>Account</MenuItem>
                </Tooltip>
                <Tooltip title="Set user preferences" placement="right">
                  <MenuItem onClick={handleClose}>Preferences</MenuItem>
                </Tooltip>
                <Tooltip title="Configure privacy settings" placement="right">
                  <MenuItem onClick={handleClose}>Privacy</MenuItem>
                </Tooltip>
              </Menu>
              <Tooltip title="Sign out of the app" placement="right">
                <MenuItem onClick={handleClose}>
                  <LogoutIcon sx={{ mr: 1 }} />
                  Logout
                </MenuItem>
              </Tooltip>
            </Menu>
          </>
        )}
        {menuType === 'icon' && (
          <>
            <Button
              variant="contained"
              color="primary"
              onClick={handleClick}
              endIcon={<ArrowRightIcon />}
            >
              Open Menu
            </Button>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleClose}
              MenuListProps={{ 'aria-labelledby': 'icon-menu' }}
            >
              <Tooltip title="View user profile" placement="right">
                <MenuItem onClick={handleClose}>
                  <PersonIcon sx={{ mr: 1 }} />
                  Profile
                </MenuItem>
              </Tooltip>
              <Tooltip title="Adjust settings" placement="right">
                <MenuItem onClick={handleClose}>
                  <SettingsIcon sx={{ mr: 1 }} />
                  Settings
                </MenuItem>
              </Tooltip>
              <Tooltip title="Sign out" placement="right">
                <MenuItem onClick={handleClose}>
                  <LogoutIcon sx={{ mr: 1 }} />
                  Logout
                </MenuItem>
              </Tooltip>
            </Menu>
          </>
        )}
        {menuType === 'context' && (
          <>
            <Typography className="text-center text-sm text-gray-600">
              Right-click here to open context menu
            </Typography>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleClose}
              MenuListProps={{ 'aria-labelledby': 'context-menu' }}
            >
              <Tooltip title="Edit profile details" placement="right">
                <MenuItem onClick={handleClose}>
                  <PersonIcon sx={{ mr: 1 }} />
                  Edit Profile
                </MenuItem>
              </Tooltip>
              <Tooltip title="Adjust settings" placement="right">
                <MenuItem onClick={handleClose}>
                  <SettingsIcon sx={{ mr: 1 }} />
                  Settings
                </MenuItem>
              </Tooltip>
              <Tooltip title="Sign out" placement="right">
                <MenuItem onClick={handleClose}>
                  <LogoutIcon sx={{ mr: 1 }} />
                  Logout
                </MenuItem>
              </Tooltip>
            </Menu>
          </>
        )}
        {menuType === 'mega' && (
          <>
            <Button
              variant="contained"
              color="primary"
              onClick={handleClick}
              endIcon={<ArrowRightIcon />}
            >
              Open Mega Menu
            </Button>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleClose}
              MenuListProps={{ 'aria-labelledby': 'mega-menu' }}
              PaperProps={{ sx: { minWidth: 400 } }}
            >
              <div className="flex">
                <div className="flex-1 p-2">
                  <Typography variant="subtitle2" className="font-bold mb-2">
                    Main
                  </Typography>
                  <Tooltip title="Access your personal profile information" placement="right">
                    <MenuItem onClick={handleClose}>
                      <PersonIcon sx={{ mr: 1 }} />
                      Profile
                    </MenuItem>
                  </Tooltip>
                  <Tooltip title="View key metrics and data overview" placement="right">
                    <MenuItem onClick={handleClose}>
                      <DashboardIcon sx={{ mr: 1 }} />
                      Dashboard
                    </MenuItem>
                  </Tooltip>
                </div>
                <div className="flex-1 p-2">
                  <Typography variant="subtitle2" className="font-bold mb-2">
                    Settings
                  </Typography>
                  <Tooltip title="Configure account settings and preferences" placement="right">
                    <MenuItem
                      onClick={handleSubMenuClick}
                      sx={{ display: 'flex', justifyContent: 'space-between' }}
                    >
                      <span>
                        <SettingsIcon sx={{ mr: 1 }} />
                        Account
                      </span>
                      <ArrowRightIcon />
                    </MenuItem>
                  </Tooltip>
                  <Menu
                    anchorEl={subMenuAnchorEl}
                    open={Boolean(subMenuAnchorEl)}
                    onClose={handleClose}
                    anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                    transformOrigin={{ vertical: 'top', horizontal: 'left' }}
                  >
                    <Tooltip title="Update your account information" placement="right">
                      <MenuItem onClick={handleClose}>Details</MenuItem>
                    </Tooltip>
                    <Tooltip title="Customize your user experience" placement="right">
                      <MenuItem onClick={handleClose}>Preferences</MenuItem>
                    </Tooltip>
                  </Menu>
                </div>
              </div>
            </Menu>
          </>
        )}
      </div>
      <div className="flex flex-col">
        <Typography className="font-semibold mb-2">Menu Features:</Typography>
        <div className="space-y-2">
          {features.map((feature) => (
            <BasicMenuLevelsFeatureItem key={feature.id} text={feature.text} />
          ))}
        </div>
      </div>
    </Paper>
  );
}

export default BasicMenuLevelsCard;