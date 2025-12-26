'use client';

import { styled, useTheme } from '@mui/material/styles';
import Button from '@mui/material/Button';
import { memo, useState } from 'react';
import { useSwipeable } from 'react-swipeable';
import SettingsIcon from '@mui/icons-material/Settings';
import PaletteIcon from '@mui/icons-material/Palette';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import SettingsPanel from 'src/components/theme-layouts/components/configurator/SettingsPanel';
import ThemesPanel from 'src/components/theme-layouts/components/configurator/ThemesPanel';
import APIKeys from 'src/components/theme-layouts/components/configurator/APIPanel';
import useUser from '@auth/useUser';

const Root = styled('div')(({ theme }) => ({
  position: 'absolute',
  height: 136,
  right: 0,
  top: 444,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  overflow: 'hidden',
  padding: 0,
  borderTopLeftRadius: 12,
  borderBottomLeftRadius: 12,
  borderTopRightRadius: 0,
  borderBottomRightRadius: 0,
  zIndex: 1000,
  color: theme.palette.getContrastText(theme.palette.secondary.main),
  backgroundColor: theme.palette.secondary.main,
  '&:hover': {
    backgroundColor: theme.palette.secondary.dark,
  },
  '& .settingsButton': {
    '& > span': {
      animation: 'rotating 3s linear infinite',
    },
  },
  '@keyframes rotating': {
    from: {
      transform: 'rotate(0deg)',
    },
    to: {
      transform: 'rotate(360deg)',
    },
  },
}));

function Configurator() {
  const theme = useTheme();
  const { isGuest } = useUser();
  const [open, setOpen] = useState('');

  const handlerOptions = {
    onSwipedLeft: () => Boolean(open) && theme.direction === 'rtl' && handleClose(),
    onSwipedRight: () => Boolean(open) && theme.direction === 'ltr' && handleClose(),
  };

  const settingsHandlers = useSwipeable(handlerOptions);
  const schemesHandlers = useSwipeable(handlerOptions);
  const apiHandlers = useSwipeable(handlerOptions);

  const handleOpen = (panelId) => {
    setOpen(panelId);
  };

  const handleClose = () => {
    setOpen('');
  };

  if (isGuest) {
    return null;
  }

  return (
    <>
      <Root id="singularity-settings-panel" className="buttonWrapper">
        <Button
          className="settingsButton m-0 h-9 w-9 min-w-9"
          onClick={() => handleOpen('settings')}
          variant="text"
          color="inherit"
          disableRipple
          disableFocusRipple
          autoFocus={false}
          aria-label="Settings panel"
        >
          <span>
            <SettingsIcon sx={{ fontSize: 20, color: theme.palette.common.white }} />
          </span>
        </Button>
        <Button
          className="m-0 h-9 w-9 min-w-9"
          onClick={() => handleOpen('schemes')}
          variant="text"
          color="inherit"
          disableRipple
          disableFocusRipple
          autoFocus={false}
          aria-label="Themes panel"
        >
          <PaletteIcon sx={{ fontSize: 20, color: theme.palette.common.white }} />
        </Button>
        <Button
          className="m-0 h-9 w-9 min-w-9"
          onClick={() => handleOpen('api')}
          variant="text"
          color="inherit"
          disableRipple
          disableFocusRipple
          autoFocus={false}
          aria-label="API Keys panel"
        >
          <VpnKeyIcon sx={{ fontSize: 20, color: theme.palette.common.white }} />
        </Button>
      </Root>

      <SettingsPanel
        open={Boolean(open === 'settings')}
        onClose={handleClose}
        settingsHandlers={settingsHandlers}
      />
      <ThemesPanel
        schemesHandlers={schemesHandlers}
        onClose={handleClose}
        open={Boolean(open === 'schemes')}
      />
      <APIKeys
        aiHandlers={apiHandlers}
        onClose={handleClose}
        open={Boolean(open === 'api')}
      />
    </>
  );
}

export default memo(Configurator);