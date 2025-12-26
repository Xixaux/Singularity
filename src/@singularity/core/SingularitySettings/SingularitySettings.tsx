'use client';

import { styled, Palette, useTheme } from '@mui/material/styles';
import { Controller, useForm } from 'react-hook-form';
import themeLayoutConfigs, { themeLayoutDefaultsProps } from 'src/components/theme-layouts/themeLayoutConfigs';
import _ from 'lodash';
import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, Switch, Typography, Box, ButtonBase } from '@mui/material';
import { memo, useEffect, useMemo, useState } from 'react';
import { PartialDeep } from 'type-fest';
import SingularityLayoutConfigs from '@singularity/core/SingularitySettings/SingularityLayoutConfigs';
import usePrevious from '@singularity/hooks/usePrevious';
import PaletteSelector from './palette-generator/PaletteSelector';
import SectionPreview from './palette-generator/SectionPreview';
import SingularitySvgIcon from '@singularity/core/SingularitySvgIcon';

// Styled components
const Root = styled('div')(({ theme }) => ({
  padding: theme.spacing(2),
  background: 'transparent',
  borderRadius: '12px',
  boxShadow: theme.shadows[3],
  '& .SingularitySettings-formGroup': {
    margin: theme.spacing(2, 0),
    padding: theme.spacing(2),
    borderRadius: '10px',
    background: theme.palette.background.paper,
    boxShadow: theme.shadows[1],
    transition: 'box-shadow 0.3s ease, transform 0.3s ease',
    '&:hover': {
      boxShadow: theme.shadows[4],
      transform: 'translateY(-2px)',
    },
  },
  '& .SingularitySettings-formGroupTitle': {
    fontWeight: 600,
    color: theme.palette.text.primary,
    padding: theme.spacing(1, 0),
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
    '&:hover': {
      color: theme.palette.primary.main,
    },
  },
}));

const LayoutCard = styled(ButtonBase)(({ theme }) => ({
  padding: theme.spacing(1.5),
  borderRadius: '8px',
  border: `1px solid ${theme.palette.divider}`,
  background: theme.palette.background.paper,
  transition: 'all 0.3s ease',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: theme.spacing(0.5),
  minHeight: '100px',
  '&:hover': {
    background: theme.palette.action.hover,
    boxShadow: theme.shadows[2],
    transform: 'scale(1.03)',
  },
  '&.selected': {
    borderColor: theme.palette.primary.main,
    background: theme.palette.primary.main + '10',
    boxShadow: `0 0 6px ${theme.palette.primary.main}20`,
  },
}));

const StyledSwitch = styled(Switch)(({ theme }) => ({
  '& .MuiSwitch-track': {
    backgroundColor: theme.palette.divider,
  },
  '& .MuiSwitch-thumb': {
    backgroundColor: theme.palette.primary.main,
  },
}));

const StyledRadio = styled(Radio)(({ theme }) => ({
  color: theme.palette.text.secondary,
  '&.Mui-checked': {
    color: theme.palette.primary.main,
  },
}));

const LayoutPreviewIcon = ({ layoutKey, isSelected }) => (
  <SingularitySvgIcon
    className="w-10 h-10"
    sx={{
      color: isSelected ? 'primary.main' : 'text.secondary',
      transition: 'transform 0.3s ease',
      transform: isSelected ? 'scale(1.1)' : 'scale(1)',
    }}
  >
    {layoutKey.toLowerCase().includes('vertical') ? 'heroicons-outline:arrows-up-down' : 'heroicons-outline:arrows-left-right'}
  </SingularitySvgIcon>
);

export type SingularityThemeType = { palette: PartialDeep<Palette> };
export type SingularityThemesType = Record<string, SingularityThemeType>;
export type SingularitySettingsConfigType = {
  layout: { style?: string; config?: PartialDeep<themeLayoutDefaultsProps> };
  customScrollbars?: boolean;
  direction: 'rtl' | 'ltr';
  theme: { main: SingularityThemeType; NavigationBarSlice: SingularityThemeType; toolbar: SingularityThemeType; footer: SingularityThemeType };
  defaultAuth?: string[];
  loginRedirectUrl: string;
};

type SingularitySettingsProps = {
  value: SingularitySettingsConfigType;
  onChange: (settings: SingularitySettingsConfigType) => void;
};

function SingularitySettings(props: SingularitySettingsProps) {
  const { onChange, value: settings } = props;
  const theme = useTheme();
  const { reset, watch, control } = useForm({ mode: 'onChange', defaultValues: settings });
  const form = watch();
  const formLayoutStyle = watch('layout.style');
  const [openSections, setOpenSections] = useState({
    layout: true,
    theme: true,
    utility: true,
  });

  const layoutFormConfigs = useMemo(() => themeLayoutConfigs[formLayoutStyle].form, [formLayoutStyle]);
  const prevForm = usePrevious(form ? _.merge({}, form) : null);
  const prevSettings = usePrevious(settings ? _.merge({}, settings) : null);

  const formChanged = useMemo(() => !_.isEqual(form, prevForm), [form, prevForm]);
  const settingsChanged = useMemo(() => !_.isEqual(settings, prevSettings), [settings, prevSettings]);

  useEffect(() => {
    if (!_.isEqual(settings, form)) {
      reset(settings);
    }
  }, [settings, reset]);

  useEffect(() => {
    if (!prevForm && !prevSettings) {
      return;
    }

    const newSettings = _.merge({}, settings, form);
    if (_.isEqual(newSettings, settings)) {
      return;
    }

    if (formChanged) {
      if (settings.layout.style !== newSettings.layout.style) {
        _.set(newSettings, 'layout.config', themeLayoutConfigs[newSettings?.layout?.style]?.defaults);
      }
      onChange(newSettings);
    }
  }, [form, onChange, formChanged, prevForm, prevSettings, settings]);

  const toggleSection = (section) => {
    setOpenSections((prev) => ({ ...prev, [section]: !prev[section] }));
  };

  return (
    <Root className="space-y-3">
      {/* Layout Section */}
      <div className="SingularitySettings-formGroup">
        <Typography
          className="SingularitySettings-formGroupTitle"
          variant="h6"
          onClick={() => toggleSection('layout')}
          sx={{ display: 'flex', alignItems: 'center', gap: 1 }}
        >
          <SingularitySvgIcon sx={{ fontSize: 20, color: openSections.layout ? 'primary.main' : 'text.secondary' }}>
            heroicons-outline:cog
          </SingularitySvgIcon>
          Layout Style
        </Typography>
        {openSections.layout && (
          <Box sx={{ p: 1.5 }}>
            <Controller
              name="layout.style"
              control={control}
              render={({ field: { value, onChange } }) => (
                <Box className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                  {Object.entries(themeLayoutConfigs).map(([key, layout]) => {
                    const isSelected = value === key;
                    return (
                      <LayoutCard
                        key={key}
                        onClick={() => onChange(key)}
                        className={isSelected ? 'selected' : ''}
                      >
                        <LayoutPreviewIcon layoutKey={key} isSelected={isSelected} />
                        <Typography variant="body2" sx={{ fontWeight: 500 }}>
                          {layout.title}
                        </Typography>
                      </LayoutCard>
                    );
                  })}
                </Box>
              )}
            />
            <Box sx={{ mt: 1.5 }}>
              <SingularityLayoutConfigs
                value={layoutFormConfigs}
                prefix="layout.config"
                control={control}
              />
              <Typography
                variant="caption"
                color="text.secondary"
                sx={{ mt: 1, display: 'block', fontStyle: 'italic' }}
              >
                *Not all option combinations are available
              </Typography>
            </Box>
          </Box>
        )}
      </div>

      {/* Theme Palettes Section */}
      <div className="SingularitySettings-formGroup">
        <Typography
          className="SingularitySettings-formGroupTitle"
          variant="h6"
          onClick={() => toggleSection('theme')}
          sx={{ display: 'flex', alignItems: 'center', gap: 1 }}
        >
          <SingularitySvgIcon sx={{ fontSize: 20, color: openSections.theme ? 'primary.main' : 'text.secondary' }}>
            heroicons-outline:color-swatch
          </SingularitySvgIcon>
          Theme Palettes
        </Typography>
        {openSections.theme && (
          <Box sx={{ p: 1.5 }}>
            <Box className="grid grid-cols-2 gap-3 sm:grid-cols-4">
              {['main', 'NavigationBarSlice', 'toolbar', 'footer'].map((sectionKey) => (
                <Controller
                  key={sectionKey}
                  name={`theme.${sectionKey}`}
                  control={control}
                  render={({ field: { value, onChange } }) => (
                    <Box
                      className="flex flex-col items-center space-y-1"
                      sx={{
                        transition: 'transform 0.3s ease',
                        '&:hover': { transform: 'scale(1.03)' },
                      }}
                    >
                      <PaletteSelector
                        value={value}
                        onChange={onChange}
                        triggerElement={
                          <Box sx={{ textAlign: 'center' }}>
                            <SectionPreview
                              className="rounded-md shadow-sm hover:shadow-md transition-shadow"
                              section={sectionKey}
                            />
                            <Typography
                              variant="caption"
                              sx={{ mt: 0.5, fontWeight: 500, textTransform: 'capitalize' }}
                            >
                              {sectionKey.replace(/([A-Z])/g, ' $1').trim()}
                            </Typography>
                          </Box>
                        }
                      />
                    </Box>
                  )}
                />
              ))}
            </Box>
          </Box>
        )}
      </div>

      {/* App Utility Section */}
      <div className="SingularitySettings-formGroup">
        <Typography
          className="SingularitySettings-formGroupTitle"
          variant="h6"
          onClick={() => toggleSection('utility')}
          sx={{ display: 'flex', alignItems: 'center', gap: 1 }}
        >
          <SingularitySvgIcon sx={{ fontSize: 20, color: openSections.utility ? 'primary.main' : 'text.secondary' }}>
            heroicons-outline:wrench
          </SingularitySvgIcon>
          App Utility
        </Typography>
        {openSections.utility && (
          <Box sx={{ p: 1.5, spaceY: 1 }}>
            <Controller
              name="customScrollbars"
              control={control}
              render={({ field: { onChange, value } }) => (
                <FormControl className="SingularitySettings-formControl">
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <FormLabel sx={{ fontWeight: 500, fontSize: '0.9rem' }}>Custom Scrollbars</FormLabel>
                    <StyledSwitch
                      checked={value}
                      onChange={(ev) => onChange(ev.target.checked)}
                      aria-label="Custom Scrollbars"
                    />
                  </Box>
                </FormControl>
              )}
            />
            <Controller
              name="direction"
              control={control}
              render={({ field }) => (
                <FormControl className="SingularitySettings-formControl">
                  <FormLabel sx={{ fontWeight: 500, fontSize: '0.9rem' }}>Text Direction</FormLabel>
                  <RadioGroup
                    {...field}
                    aria-label="Layout Direction"
                    className="mt-1"
                    row
                  >
                    <FormControlLabel
                      value="rtl"
                      control={<StyledRadio />}
                      label="RTL"
                      sx={{ mr: 2 }}
                    />
                    <FormControlLabel
                      value="ltr"
                      control={<StyledRadio />}
                      label="LTR"
                    />
                  </RadioGroup>
                </FormControl>
              )}
            />
          </Box>
        )}
      </div>
    </Root>
  );
}

export default memo(SingularitySettings);