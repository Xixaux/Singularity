import { SxProps } from '@mui/system';
import { SingularityNavBadgeType } from './SingularityNavBadgeType';

/**
 * SingularityNavItemType
 * A type for Singularity navigation item and its properties.
 */
export type SingularityNavItemType = {
	id: string;
	title?: string;
	translate?: string;
	auth?: string[] | string;
	subtitle?: string;
	icon?: string;
	iconClass?: string;
	url?: string;
	target?: string;
	type?: string;
	sx?: SxProps;
	disabled?: boolean;
	active?: boolean;
	exact?: boolean;
	end?: boolean;
	badge?: SingularityNavBadgeType;
	children?: SingularityNavItemType[];
	hasPermission?: boolean;
};

export type SingularityFlatNavItemType = Omit<SingularityNavItemType, 'children' | 'sx'> & { children?: string[]; order: string };
