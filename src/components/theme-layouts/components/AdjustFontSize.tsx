'use client';

import { MouseEvent, useState } from 'react';
import Slider from '@mui/material/Slider';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import FormatSizeOutlinedIcon from '@mui/icons-material/FormatSizeOutlined';
import clsx from 'clsx';
import { useTheme } from '@mui/material/styles';

const marks = [
  { value: 12, label: '70%' },
  { value: 15, label: '85%' },
  { value: 18, label: '100%' },
  { value: 21, label: '115%' },
  { value: 24, label: '130%' },
];

type AdjustFontSizeProps = {
  className?: string;
  onFontSizeChange?: (size: number) => void;
};

/**
 * The adjust font size component.
 */
function AdjustFontSize(props: AdjustFontSizeProps) {
  const { className = '', onFontSizeChange } = props;
  const theme = useTheme();
  const iconColor = theme.palette.mode === 'light' ? '#1C1C1C' : theme.palette.text.primary;

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [fontSize, setFontSize] = useState(16);

  function changeHtmlFontSize() {
    const html = document.getElementsByTagName('html')[0];
    html.style.fontSize = `${fontSize}px`;
    if (onFontSizeChange) {
      onFontSizeChange(fontSize);
    }
  }

  const handleClick = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
    console.log('Font size icon clicked');
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleSliderChange = (event: Event, newValue: number | number[]) => {
    const size = Array.isArray(newValue) ? newValue[0] : newValue;
    setFontSize(size);
    changeHtmlFontSize();
  };

  return (
    <div>
      <IconButton
        className={clsx('h-9 w-9 p-0', className)}
        aria-controls="font-size-menu"
        aria-haspopup="true"
        aria-label="Adjust font size"
        onClick={handleClick}
        sx={{
          borderRadius: '8px',
          backgroundColor: 'transparent ',
        }}
        onMouseEnter={() => console.log('Hovering font size icon')}
        data-icon-type="font-size"
      >
        <FormatSizeOutlinedIcon
          className="singularity-list-item-icon"
          sx={{ color: iconColor, fontSize: 20 }}
          data-icon-type="font-size"
        />
      </IconButton>
      <Menu
        classes={{ paper: 'w-80' }}
        id="font-size-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
        sx={{
          '& .MuiMenu-paper': {
            backgroundColor: theme.palette.background.paper,
          },
        }}
      >
        <div className="px-6 py-3">
          <Typography
            className="text-md mb-2 flex items-center justify-center gap-2 font-semibold"
            color="text.secondary"
          >
            <FormatSizeOutlinedIcon
              className="singularity-list-item-icon"
              sx={{ fontSize: 18, color: iconColor }}
              data-icon-type="font-size"
            />
            Font Size
          </Typography>
          <Slider
            classes={{ markLabel: 'text-md font-semibold' }}
            value={fontSize}
            onChange={handleSliderChange}
            aria-labelledby="font-size-menu"
            marks={marks}
            min={12}
            max={24}
            step={1}
            valueLabelDisplay="auto"
            sx={{
              '& .MuiSlider-markLabel': {
                color: theme.palette.text.secondary,
              },
            }}
          />
        </div>
      </Menu>
    </div>
  );
}

export default AdjustFontSize;