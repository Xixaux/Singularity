import { SingularityThemeType } from '@singularity/core/SingularitySettings/SingularitySettings';
import { createTheme, getContrastRatio, Theme, ThemeOptions } from '@mui/material/styles';
import _ from 'lodash';
import { defaultThemeOptions, extendThemeWithMixins, mustHaveThemeOptions } from '@singularity/default-settings';
import { darkPaletteText, lightPaletteText } from '@/configs/themesConfig';
import useSingularitySettings from './useSingularitySettings';

type Direction = 'ltr' | 'rtl';

// Method to create the MUI theme
const generateMuiTheme = (theme: SingularityThemeType, direction: Direction, prefix?: string): Theme => {
    const mergedTheme = _.merge({}, defaultThemeOptions, theme, mustHaveThemeOptions, {
        cssVariables: { cssVarPrefix: prefix }
    }) as ThemeOptions;
    const themeOptions = {
        ...mergedTheme,
        mixins: extendThemeWithMixins(mergedTheme),
        direction
    } as ThemeOptions;
    return createTheme(themeOptions);
};

// Custom hooks for choosing themes
export const useMainTheme = (): Theme => {
    const { data: current } = useSingularitySettings();
    return generateMuiTheme(current.theme.main, current.direction);
};

export const useNavigationBarTheme = (): Theme => {
    const { data: current } = useSingularitySettings();
    return generateMuiTheme(current.theme.NavigationBarSlice, current.direction, 'NavigationBarSlice');
};

export const useToolbarTheme = (): Theme => {
    const { data: current } = useSingularitySettings();
    return generateMuiTheme(current.theme.toolbar, current.direction, 'toolbar');
};

export const useFooterTheme = (): Theme => {
    const { data: current } = useSingularitySettings();
    return generateMuiTheme(current.theme.footer, current.direction, 'footer');
};

// Utility functions for theme mode modifications
export const changeThemeMode = (theme: SingularityThemeType, mode: 'dark' | 'light'): SingularityThemeType => {
    const modes = {
        dark: {
            palette: {
                mode: 'dark',
                divider: 'var(--mui-palette-divider)',
                background: {
                    paper: 'var(--mui-palette-background-paper)',
                    default: 'var(--mui-palette-background-default)'
                },
                text: darkPaletteText
            }
        },
        light: {
            palette: {
                mode: 'light',
                divider: 'var(--mui-palette-divider)',
                background: {
                    paper: 'var(--mui-palette-background-paper)',
                    default: 'var(--mui-palette-background-default)'
                },
                text: lightPaletteText
            }
        }
    };
    return _.merge({}, theme, modes[mode]);
};

// Custom hook for high-contrast theme
export const useContrastMainTheme = (bgColor: string): Theme => {
    const isDark = (color: string): boolean => getContrastRatio(color, '#ffffff') >= 3;
    const darkTheme = useMainThemeDark();
    const lightTheme = useMainThemeLight();

    return isDark(bgColor) ? darkTheme : lightTheme;
};

export const useMainThemeDark = (): Theme => {
    const { data: current } = useSingularitySettings();
    return generateMuiTheme(changeThemeMode(current.theme.main, 'dark'), current.direction, 'main-dark');
};

export const useMainThemeLight = (): Theme => {
    const { data: current } = useSingularitySettings();
    return generateMuiTheme(changeThemeMode(current.theme.main, 'light'), current.direction, 'main-light');
};