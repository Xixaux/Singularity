'use client';

import React, { useState } from 'react';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import ToggleButton from '@mui/material/ToggleButton';
import IconButton from '@mui/material/IconButton';
import Checkbox from '@mui/material/Checkbox';
import Divider from '@mui/material/Divider';
import clsx from 'clsx';
import Chip from '@mui/material/Chip';
import EditIcon from '@mui/icons-material/Edit';
import SendIcon from '@mui/icons-material/Send';
import BasicButtonsFeatureItem from './BasicButtonsFeatureItem';

type BasicButtonsCardProps = {
  title: string;
  subtitle: string;
  isPopular?: boolean;
  features: { id: number; text: string }[];
  buttonType: 'filled' | 'outlined' | 'text' | 'toggle' | 'icon' | 'switch';
  className?: string;
};

/**
 * The button type card component.
 */
function BasicButtonsCard(props: BasicButtonsCardProps) {
  const {
    title = '',
    subtitle = '',
    isPopular = false,
    features = [],
    buttonType = 'filled',
    className = '',
  } = props;

  const [toggleSelected, setToggleSelected] = useState(false);
  const [switchChecked, setSwitchChecked] = useState(false);

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
      <div className="flex flex-wrap gap-4">
        {buttonType === 'filled' && (
          <>
            <Button variant="contained" color="primary" endIcon={<SendIcon />}>
              Primary
            </Button>
            <Button variant="contained" color="secondary">
              Secondary
            </Button>
            <Button variant="contained" size="small">
              Small
            </Button>
            <Button variant="contained" disabled>
              Disabled
            </Button>
          </>
        )}
        {buttonType === 'outlined' && (
          <>
            <Button variant="outlined" color="primary" endIcon={<SendIcon />}>
              Primary
            </Button>
            <Button variant="outlined" color="secondary">
              Secondary
            </Button>
            <Button variant="outlined" size="small">
              Small
            </Button>
            <Button variant="outlined" disabled>
              Disabled
            </Button>
          </>
        )}
        {buttonType === 'text' && (
          <>
            <Button variant="text" color="primary" endIcon={<SendIcon />}>
              Primary
            </Button>
            <Button variant="text" color="secondary">
              Secondary
            </Button>
            <Button variant="text" size="small">
              Small
            </Button>
            <Button variant="text" disabled>
              Disabled
            </Button>
          </>
        )}
        {buttonType === 'toggle' && (
          <>
            <ToggleButton
              value="toggle"
              selected={toggleSelected}
              onChange={() => setToggleSelected(!toggleSelected)}
              color="primary"
            >
              Toggle
            </ToggleButton>
            <ToggleButton
              value="toggle"
              selected={toggleSelected}
              onChange={() => setToggleSelected(!toggleSelected)}
              color="secondary"
            >
              Secondary
            </ToggleButton>
            <ToggleButton
              value="toggle"
              selected={toggleSelected}
              onChange={() => setToggleSelected(!toggleSelected)}
              size="small"
            >
              Small
            </ToggleButton>
            <ToggleButton
              value="toggle"
              selected={toggleSelected}
              onChange={() => setToggleSelected(!toggleSelected)}
              disabled
            >
              Disabled
            </ToggleButton>
          </>
        )}
        {buttonType === 'icon' && (
          <>
            <IconButton color="primary">
              <EditIcon />
            </IconButton>
            <IconButton color="secondary">
              <EditIcon />
            </IconButton>
            <IconButton size="small">
              <EditIcon />
            </IconButton>
            <IconButton disabled>
              <EditIcon />
            </IconButton>
          </>
        )}
        {buttonType === 'switch' && (
          <>
            <Checkbox
              checked={switchChecked}
              onChange={() => setSwitchChecked(!switchChecked)}
              color="primary"
              inputProps={{ 'aria-label': 'primary switch' }}
              sx={{
                '& .MuiSvgIcon-root': { fontSize: 24 },
                '&.Mui-checked': { color: '#1976d2' },
              }}
            />
            <Checkbox
              checked={switchChecked}
              onChange={() => setSwitchChecked(!switchChecked)}
              sx={{
                '& .MuiSvgIcon-root': { fontSize: 24 },
                color: 'green',
                '&.Mui-checked': { color: 'green' },
              }}
              inputProps={{ 'aria-label': 'green switch' }}
            />
            <Checkbox
              checked={switchChecked}
              onChange={() => setSwitchChecked(!switchChecked)}
              sx={{ '& .MuiSvgIcon-root': { fontSize: 20 } }}
              inputProps={{ 'aria-label': 'small switch' }}
            />
            <Checkbox
              checked={switchChecked}
              onChange={() => setSwitchChecked(!switchChecked)}
              disabled
              inputProps={{ 'aria-label': 'disabled switch' }}
              sx={{ '& .MuiSvgIcon-root': { fontSize: 24 } }}
            />
          </>
        )}
      </div>
      <div className="mt-6 flex flex-col">
        <Typography className="font-semibold mb-2">Button Features:</Typography>
        <div className="space-y-2">
          {features.map((feature) => (
            <BasicButtonsFeatureItem key={feature.id} text={feature.text} />
          ))}
        </div>
      </div>
    </Paper>
  );
}

export default BasicButtonsCard;