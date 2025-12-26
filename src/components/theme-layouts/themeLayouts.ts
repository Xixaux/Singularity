import React, { ComponentType } from 'react';
import Layout1 from './layout1/Layout1';
import Layout2 from './layout2/Layout2';

/**
 * The type definition for the theme layouts.
 */
export type themeLayoutsType = Record<string, ComponentType<{ children?: React.ReactNode }>>;

/**
 * The theme layouts.
 */
const themeLayouts: themeLayoutsType = {
	layout1: Layout1,
	layout2: Layout2
};

export default themeLayouts;
