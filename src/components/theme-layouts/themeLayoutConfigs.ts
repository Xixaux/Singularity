import ThemeFormConfigTypes from '@singularity/core/SingularitySettings/ThemeFormConfigTypes';
import layout1, { Layout1ConfigDefaultsType } from './layout1/Layout1Config';
import layout2, { Layout2ConfigDefaultsType } from './layout2/Layout2Config';

/**
 * The type definition for the theme layout defaults.
 */
export type themeLayoutDefaultsProps =
	| Layout1ConfigDefaultsType
	| Layout2ConfigDefaultsType;

/**
 * The type definition for the theme layout.
 */
export type themeLayoutProps = {
	title: string;
	defaults: themeLayoutDefaultsProps;
	form?: ThemeFormConfigTypes;
};

/**
 * The type definition for the theme layout configs.
 */
export type themeLayoutConfigsProps = Record<string, themeLayoutProps>;

/**
 * The theme layout configs.
 */
const themeLayoutConfigs: themeLayoutConfigsProps = {
	layout1: layout1 as themeLayoutProps,
	layout2: layout2 as themeLayoutProps
};

export default themeLayoutConfigs;
