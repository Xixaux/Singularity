'use client';

import Button from '@mui/material/Button';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MenuItem from '@mui/material/MenuItem';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import { useState } from 'react';
import Link from '@singularity/core/Link';
import { LanguageType } from '@i18n/I18nContext';
import useI18n from '@i18n/useI18n';
import { GlobeAltIcon } from '@heroicons/react/24/outline';
import { useTheme } from '@mui/material/styles';
import clsx from 'clsx';

/**
 * The language switcher.
 */
function LanguageSwitcher() {
  const { language, languages, changeLanguage } = useI18n();
  const [menu, setMenu] = useState<null | HTMLElement>(null);
  const theme = useTheme();

  const langMenuClick = (event: React.MouseEvent<HTMLElement>) => {
    setMenu(event.currentTarget);
  };

  const langMenuClose = () => {
    setMenu(null);
  };

  function handleLanguageChange(lng: LanguageType) {
    changeLanguage(lng.id);
    langMenuClose();
  }

  return (
    <>
      <Button
        className={clsx('border border-divider shortcut-icon')}
        onClick={langMenuClick}
        sx={{
          color: theme?.vars?.palette?.text?.primary || 'var(--text-color)',
          backgroundColor: theme.palette.background.default,
          borderRadius: '8px',
          borderColor: theme.palette.divider,
          padding: '0 8px',
          minWidth: 'auto',
        }}
      >
        <GlobeAltIcon
          className="shortcut-icon"
          style={{
            width: 18,
            height: 18,
            shapeRendering: 'geometricPrecision',
            stroke: theme?.vars?.palette?.text?.primary || 'var(--text-color, #000000)',
          }}
        />
        <img
          className="mx-1 min-w-5"
          src={`/assets/images/flags/${language.flag}.svg`}
          alt={language.title}
        />
        <Typography
          className="mx-1 font-semibold text-md uppercase"
          sx={(theme) => ({
            color: theme?.vars?.palette?.text?.primary || 'var(--text-color)',
            ...theme.applyStyles('dark', {
              color: theme?.vars?.palette?.text?.primary || 'var(--text-color)',
            }),
          })}
        >
          {language.id}
        </Typography>
      </Button>
      <Popover
        open={Boolean(menu)}
        anchorEl={menu}
        onClose={langMenuClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
        classes={{
          paper: 'py-2',
        }}
        sx={{
          '& .MuiPopover-paper': {
            backgroundColor: theme.palette.background.default,
          },
        }}
      >
        {languages.map((lng) => (
          <MenuItem
            key={lng.id}
            onClick={() => handleLanguageChange(lng)}
            sx={{
              color: theme?.vars?.palette?.text?.primary || 'var(--text-color)',
              '&:hover': {
                backgroundColor: theme.palette.mode === 'dark' ? '#003087' : '#6BC9F7',
                color: theme?.vars?.palette?.text?.primary || 'var(--text-color)',
                '& svg': {
                  stroke: theme?.vars?.palette?.text?.primary || 'var(--text-color, #000000)',
                },
              },
            }}
          >
            <ListItemIcon className="min-w-9" sx={{ color: theme?.vars?.palette?.text?.primary || 'var(--text-color)' }}>
              <img
                className="min-w-5"
                src={`/assets/images/flags/${lng.flag}.svg`}
                alt={lng.title}
              />
            </ListItemIcon>
            <ListItemText primary={lng.title} />
          </MenuItem>
        ))}
        <MenuItem
          component={Link}
          to="/documentation/configuration/multi-language"
          onClick={langMenuClose}
          role="button"
          sx={{
            color: theme?.vars?.palette?.text?.primary || 'var(--text-color)',
            '&:hover': {
              backgroundColor: theme.palette.mode === 'dark' ? '#003087' : '#6BC9F7',
              color: theme?.vars?.palette?.text?.primary || 'var(--text-color)',
            },
          }}
        >
          <ListItemIcon className="min-w-9" sx={{ color: theme?.vars?.palette?.text?.primary || 'var(--text-color)' }}>
            <GlobeAltIcon
              className="shortcut-icon"
              style={{
                width: 18,
                height: 18,
                shapeRendering: 'geometricPrecision',
                stroke: theme?.vars?.palette?.text?.primary || 'var(--text-color, #000000)',
              }}
            />
          </ListItemIcon>
          <ListItemText primary="Learn More" />
        </MenuItem>
      </Popover>
    </>
  );
}

export default LanguageSwitcher;