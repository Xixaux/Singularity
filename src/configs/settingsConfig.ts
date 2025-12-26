// src/configs/settingsConfig.ts
import themesConfig from 'src/configs/themesConfig';
import { SingularitySettingsConfigType } from '@singularity/core/SingularitySettings/SingularitySettings';
import i18n from '@i18n/i18n';

const settingsConfig: SingularitySettingsConfigType = {
  layout: {
    style: 'layout1',
    config: {
      NavigationBarSlice: {
        style: 'style-2',
      },
    },
  },
  customScrollbars: true,
  direction: i18n.dir(i18n.options.lng) || 'ltr',
  theme: {
    main: themesConfig.default,
    NavigationBarSlice: themesConfig.defaultDark,
    toolbar: themesConfig.default,
    footer: themesConfig.defaultDark,
  },
  defaultAuth: ['admin', 'user'],
  loginRedirectUrl: '/',
};

export default settingsConfig;