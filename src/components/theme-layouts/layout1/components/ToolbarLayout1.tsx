'use client';
import { useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuOutlined from '@mui/icons-material/MenuOutlined';
import clsx from 'clsx';
import { memo } from 'react';
import { useAppDispatch } from 'src/store/hooks';
import { NavigationBarSliceToggle, NavigationBarSliceToggleMobile } from 'src/components/theme-layouts/components/navigation-bar/NavigationBarSlice';
import themeOptions from 'src/configs/themeOptions';
import _ from 'lodash';
import LightDarkModeToggle from 'src/components/LightDarkModeToggle';
import useSingularityLayoutSettings from '@singularity/core/SingularityLayout/useSingularityLayoutSettings';
import NotificationPanelToggleButton from '@/app/(control-panel)/apps/notifications/NotificationPanelToggleButton';
import AdjustFontSize from '../../components/AdjustFontSize';
import FullScreenToggle from '../../components/FullScreenToggle';
import LanguageSwitcher from '../../components/LanguageSwitcher';
import NavigationShortcuts from '../../components/navigation/NavigationShortcuts';
import NavigationSearch from '../../components/navigation/NavigationSearch';
import OverlayPanelToggleButton from '../../components/overlay-panel/OverlayPanelToggleButton';
import { Layout1ConfigDefaultsType } from '@/components/theme-layouts/layout1/Layout1Config';
import useThemeMediaQuery from '../../../../@singularity/hooks/useThemeMediaQuery';
import MainProjectSelection from 'src/components/MainProjectSelection';

type ToolbarLayout1Props = {
  className?: string;
};

function ToolbarLayout1(props: ToolbarLayout1Props) {
  const { className } = props;
  const settings = useSingularityLayoutSettings();
  const config = settings.config as Layout1ConfigDefaultsType;
  const isMobile = useThemeMediaQuery((theme) => theme.breakpoints.down('lg'));
  const theme = useTheme();
  const dispatch = useAppDispatch();

  // Debug theme values
  console.log('Toolbar theme mode:', theme.palette.mode);
  console.log('Toolbar theme ID:', settings.theme);
  console.log('Toolbar primary color:', theme.palette.primary.main);
  console.log('Toolbar background default:', theme.palette.background.default);
  console.log('Toolbar text primary:', theme.palette.text.primary);
  console.log('Current theme settings:', JSON.stringify(settings, null, 2));
  console.log('Theme palette:', JSON.stringify(theme.palette, null, 2));

  const handleToggleNavigation = () => {
    if (isMobile) {
      dispatch(NavigationBarSliceToggleMobile());
    } else if (config?.NavigationBarSlice?.style === 'style-2') {
      settings.setSettings(_.set({}, 'layout.config.NavigationBarSlice.folded', !config?.NavigationBarSlice?.folded));
    } else {
      dispatch(NavigationBarSliceToggle());
    }
  };

  // Fallback navigation state
  const isNavigationOpen = config?.NavigationBarSlice?.folded !== true;

  return (
    <div className="toolbar-wrapper" style={{ isolation: 'isolate' }}>
      <AppBar
        id="singularity-toolbar"
        className={clsx('relative z-20 flex border-b', className)}
        sx={{
          backgroundColor: `${theme.palette.background.default} !important`,
          color: theme.palette.text.primary || '#1C1C1C',
          overflow: 'visible',
          '&.MuiAppBar-root': {
            backgroundColor: `${theme.palette.background.default} !important`,
            backgroundImage: 'none',
          },
        }}
        position="static"
        elevation={0}
      >
        <Toolbar className="min-h-12 p-0 md:min-h-16">
          <div className="flex flex-1 px-2 md:px-4 space-x-2 items-center">
            {config.NavigationBarSlice.display && config.NavigationBarSlice.position === 'left' && (
              <>
                {!isMobile && (
                  <>
                    {(config.NavigationBarSlice.style === 'style-3' ||
                      config.NavigationBarSlice.style === 'style-3-dense') && (
                      <IconButton
                        className="h-10 w-10 p-0"
                        sx={{ color: theme.palette.text.primary || '#1C1C1C' }}
                        onClick={handleToggleNavigation}
                      >
                        <MenuOutlined fontSize="small" />
                      </IconButton>
                    )}
                    {config.NavigationBarSlice.style === 'style-1' && !isNavigationOpen && (
                      <IconButton
                        className="h-10 w-10 p-0"
                        sx={{ color: theme.palette.text.primary || '#1C1C1C' }}
                        onClick={handleToggleNavigation}
                      >
                        <MenuOutlined fontSize="small" />
                      </IconButton>
                    )}
                  </>
                )}
                {isMobile && (
                  <IconButton
                    className="h-10 w-10 p-0 sm:mx-2"
                    sx={{ color: theme.palette.text.primary || '#1C1C1C' }}
                    onClick={handleToggleNavigation}
                  >
                    <MenuOutlined fontSize="small" />
                  </IconButton>
                )}
              </>
            )}
            {!isMobile && (
              <>
                <NavigationShortcuts />
                <MainProjectSelection />
              </>
            )}
          </div>
          <div className="flex items-center overflow-x-auto px-2 md:px-4 space-x-1.5">
            <AdjustFontSize />
            <NavigationSearch />
            <FullScreenToggle />
            <LightDarkModeToggle
              lightTheme={_.find(themeOptions, { id: 'Default' })}
              darkTheme={_.find(themeOptions, { id: 'Default Dark' })}
            />
            <OverlayPanelToggleButton />
            <NotificationPanelToggleButton />
            <LanguageSwitcher />
          </div>
          {config.NavigationBarSlice.display && config.NavigationBarSlice.position === 'right' && (
            <>
              {!isMobile && (
                <>
                  {(config.NavigationBarSlice.style === 'style-3' || config.NavigationBarSlice.style === 'style-3-dense') && (
                    <IconButton
                      className="h-10 w-10 p-0"
                      sx={{ color: theme.palette.text.primary || '#1C1C1C' }}
                      onClick={handleToggleNavigation}
                    >
                      <MenuOutlined fontSize="small" />
                    </IconButton>
                  )}
                  {config.NavigationBarSlice.style === 'style-1' && !isNavigationOpen && (
                    <IconButton
                      className="h-10 w-10 p-0"
                      sx={{ color: theme.palette.text.primary || '#1C1C1C' }}
                      onClick={handleToggleNavigation}
                    >
                      <MenuOutlined fontSize="small" />
                    </IconButton>
                  )}
                </>
              )}
              {isMobile && (
                <IconButton
                  className="h-10 w-10 p-0 sm:mx-2"
                  sx={{ color: theme.palette.text.primary || '#1C1C1C' }}
                  onClick={handleToggleNavigation}
                >
                  <MenuOutlined fontSize="small" />
                </IconButton>
              )}
            </>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default memo(ToolbarLayout1);