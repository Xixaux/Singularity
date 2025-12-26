'use client';

import React, { useState, useEffect } from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton';
import SvgIcon from '@mui/material/SvgIcon';
import { SunIcon, MoonIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';
import { useTheme } from '@mui/material/styles';
import { useMainTheme } from '@singularity/core/SingularitySettings/hooks/SingularityThemeHooks';
import useSingularitySettings from '@singularity/core/SingularitySettings/hooks/useSingularitySettings';
import { SingularityThemeOption } from '@singularity/core/SingularityThemeSelector/ThemePreview';
import { SingularitySettingsConfigType } from '@singularity/core/SingularitySettings/SingularitySettings';

type LightDarkModeToggleProps = {
  className?: string;
  lightTheme: SingularityThemeOption;
  darkTheme: SingularityThemeOption;
};

function LightDarkModeToggle(props: LightDarkModeToggleProps) {
  const { className = '', lightTheme, darkTheme } = props;
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const { setSettings } = useSingularitySettings();
  const mainTheme = useMainTheme();
  const theme = useTheme();

  const iconColor = theme.palette?.icon?.primary || theme.palette.text.primary;

  // Apply 'dark' class to html and body based on theme mode
  useEffect(() => {
    if (mainTheme.palette.mode === 'dark') {
      document.documentElement.classList.add('dark');
      document.body.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
      document.body.classList.remove('dark');
    }
  }, [mainTheme.palette.mode]);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleSelectionChange = (selection: 'light' | 'dark') => {
    if (selection === 'light') {
      handleThemeSelect(lightTheme);
    } else {
      handleThemeSelect(darkTheme);
    }
    handleClose();
  };

  async function handleThemeSelect(_theme: SingularityThemeOption) {
    await setSettings({ theme: { ..._theme?.section } } as Partial<SingularitySettingsConfigType>);
  }

  return (
    <>
      <IconButton
        aria-controls="light-dark-toggle-menu"
        aria-haspopup="true"
        onClick={handleClick}
        className={clsx(className)}
        sx={{
          color: iconColor,
          backgroundColor: 'transparent ',
          '& svg': {
            color: iconColor,
            stroke: iconColor,
            fill: 'none',
          },
        }}
      >
        {mainTheme.palette.mode === 'light' && (
          <SvgIcon
            sx={{
              color: iconColor,
              fontSize: 18,
            }}
          >
            <SunIcon
              style={{
                width: 18,
                height: 18,
                stroke: iconColor,
                fill: 'none',
              }}
            />
          </SvgIcon>
        )}
        {mainTheme.palette.mode === 'dark' && (
          <SvgIcon
            sx={{
              color: iconColor,
              fontSize: 18,
            }}
          >
            <MoonIcon
              style={{
                width: 18,
                height: 18,
                stroke: iconColor,
                fill: 'none',
              }}
            />
          </SvgIcon>
        )}
      </IconButton>
      <Menu
        id="light-dark-toggle-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
        sx={{
          '& .MuiMenu-paper': {
            backgroundColor: theme.palette.background.paper,
          },
          '& .MuiMenuItem-root': {
            color: theme.palette.text.primary,
          },
        }}
      >
        <MenuItem
          selected={mainTheme.palette.mode === 'light'}
          onClick={() => handleSelectionChange('light')}
        >
          Light
        </MenuItem>
        <MenuItem
          selected={mainTheme.palette.mode === 'dark'}
          onClick={() => handleSelectionChange('dark')}
        >
          Dark
        </MenuItem>
      </Menu>
    </>
  );
}

export default LightDarkModeToggle;