import SingularityScrollbars from '@singularity/core/SingularityScrollbars';
import IconButton from '@mui/material/IconButton';
import SingularitySvgIcon from '@singularity/core/SingularitySvgIcon';
import Typography from '@mui/material/Typography';
import SingularityThemeSelector from '@singularity/core/SingularityThemeSelector/SingularityThemeSelector';
import { styled, useTheme } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import Slide from '@mui/material/Slide';
import { SwipeableHandlers } from 'react-swipeable';
import themeOptions from 'src/configs/themeOptions';
import { SingularityThemeOption } from '@singularity/core/SingularityThemeSelector/ThemePreview';
import useSingularitySettings from '@singularity/core/SingularitySettings/hooks/useSingularitySettings';
import { SingularitySettingsConfigType } from '@singularity/core/SingularitySettings/SingularitySettings';

const StyledDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialog-paper': {
    position: 'fixed',
    width: 480,
    maxWidth: '90vw',
    backgroundColor: theme.vars.palette.background.paper,
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

  if (!children) {
    return null;
  }

  return (
    <Slide
      direction={theme.direction === 'ltr' ? 'left' : 'right'}
      ref={ref}
      timeout={{ enter: 300, exit: 200 }}
      {...other}
    >
      {children}
    </Slide>
  );
}

type ThemesPanelProps = {
  schemesHandlers: SwipeableHandlers;
  onClose: () => void;
  open: boolean;
};

function ThemesPanel(props: ThemesPanelProps) {
  const { schemesHandlers, onClose, open } = props;
  const { setSettings } = useSingularitySettings();

  async function handleThemeSelect(_theme: SingularityThemeOption) {
    const _newSettings = setSettings({ theme: { ..._theme?.section } } as Partial<SingularitySettingsConfigType>);
  }

  return (
    <StyledDialog
      TransitionComponent={Transition}
      aria-labelledby="schemes-panel"
      aria-describedby="schemes"
      open={open}
      onClose={onClose}
      slotProps={{
        backdrop: {
          invisible: true,
        },
      }}
      classes={{
        paper: 'shadow-lg',
      }}
      {...schemesHandlers}
    >
      <SingularityScrollbars className="p-4 sm:p-6">
        <IconButton
          className="fixed top-0 z-10 ltr:right-0 rtl:left-0"
          onClick={onClose}
          size="large"
        >
          <SingularitySvgIcon>heroicons-outline:x-mark</SingularitySvgIcon>
        </IconButton>

        <Typography
          className="mb-8"
          variant="h6"
        >
          Theme Color Options
        </Typography>

        <Typography
          className="mb-6 text-justify text-lg"
          color="text.secondary"
        >
          You can also create custom theme options and color schemes.
        </Typography>

        <SingularityThemeSelector
          options={themeOptions}
          onSelect={handleThemeSelect}
        />
      </SingularityScrollbars>
    </StyledDialog>
  );
}

export default ThemesPanel;