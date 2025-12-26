'use client';

import IconButton from '@mui/material/IconButton';
import SvgIcon from '@mui/material/SvgIcon';
import { BookmarkIcon } from '@heroicons/react/24/outline';
import { useAppDispatch } from 'src/store/hooks';
import clsx from 'clsx';
import { useTheme } from '@mui/material/styles';
import { toggleOverlayPanel } from './OverlayPanelSlice';

type OverlayPanelToggleButtonProps = {
  className?: string;
  children?: React.ReactNode;
};

/**
 * The quick panel toggle button.
 */
function OverlayPanelToggleButton(props: OverlayPanelToggleButtonProps) {
  const { className = '', children } = props;
  const dispatch = useAppDispatch();
  const theme = useTheme();

  // Dynamically set icon color based on theme, with fallback
  const iconColor = theme.palette?.icon?.primary || theme.palette?.text?.primary || 'var(--mui-palette-text-primary)';

  // Use provided children or default to BookmarkIcon with Heroicons styling
  const defaultIcon = (
    <SvgIcon
      sx={{
        color: iconColor,
        fontSize: 18,
      }}
    >
      <BookmarkIcon
        style={{
          width: 18,
          height: 18,
          stroke: iconColor,
          fill: 'none',
        }}
      />
    </SvgIcon>
  );

  return (
    <IconButton
      onClick={() => dispatch(toggleOverlayPanel())}
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
      {children || defaultIcon}
    </IconButton>
  );
}

export default OverlayPanelToggleButton;