'use client';
import SingularityScrollbars from '@singularity/core/SingularityScrollbars';
import IconButton from '@mui/material/IconButton';
import SingularitySvgIcon from '@singularity/core/SingularitySvgIcon';
import Typography from '@mui/material/Typography';
import SingularitySettings, { SingularitySettingsConfigType } from '@singularity/core/SingularitySettings/SingularitySettings';
import SingularitySettingsViewerDialog from 'src/components/theme-layouts/components/SingularitySettingsViewerDialog';
import { styled, useTheme } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import Slide from '@mui/material/Slide';
import { SwipeableHandlers } from 'react-swipeable';
import useSingularitySettings from '@singularity/core/SingularitySettings/hooks/useSingularitySettings';

const StyledDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialog-paper': {
    position: 'fixed',
    width: 380,
    maxWidth: '90vw',
    backgroundColor: 'var(--mui-palette-background-paper)',
    top: 0,
    height: '100%',
    minHeight: '100%',
    bottom: 0,
    right: 0,
    margin: 0,
    zIndex: 1000,
    borderRadius: 0,
  },
}));

type TransitionProps = {
  children?: React.ReactElement;
  ref?: React.RefObject<HTMLDivElement>;
};

function Transition(props: TransitionProps) {
  const { children, ref, ...other } = props;
  const theme = useTheme();
  const direction = theme.direction || 'ltr';

  if (!children) {
    return null;
  }

  return (
    <Slide
      direction={direction === 'ltr' ? 'left' : 'right'}
      ref={ref}
      {...other}
    >
      {children}
    </Slide>
  );
}

type SettingsPanelProps = {
  settingsHandlers: SwipeableHandlers;
  onClose: () => void;
  open: boolean;
};

function SettingsPanel(props: SettingsPanelProps) {
  const { settingsHandlers, onClose, open } = props;
  const { data: settings, setSettings } = useSingularitySettings();
  const theme = useTheme();
  const iconColor = 'var(--mui-palette-text-primary)';

  const handleSettingsChange = async (newSettings: Partial<SingularitySettingsConfigType>) => {
    const _newSettings = setSettings(newSettings);
  };

  return (
    <StyledDialog
      TransitionComponent={Transition}
      aria-labelledby="settings-panel"
      aria-describedby="settings"
      open={open}
      onClose={onClose}
      slotProps={{
        backdrop: {
          invisible: true,
        },
      }}
      disableRestoreFocus
      classes={{
        paper: 'shadow-lg',
      }}
      {...settingsHandlers}
    >
      <SingularityScrollbars className="p-3 sm:p-4 space-y-4">
        <IconButton
          className="fixed top-2 ltr:right-2 rtl:left-2"
          onClick={onClose}
          size="medium"
        >
          <SingularitySvgIcon sx={{ color: iconColor }}>heroicons-outline:x-mark</SingularitySvgIcon>
        </IconButton>

        <Typography
          className="font-semibold mt-2"
          variant="h6"
        >
          Theme Settings
        </Typography>

        <SingularitySettings
          value={settings}
          onChange={handleSettingsChange}
        />

        <div>
          <SingularitySettingsViewerDialog />
        </div>
      </SingularityScrollbars>
    </StyledDialog>
  );
}

export default SettingsPanel;