import { ReactNode } from 'react';

/**
 * The type of the MinimalistPricingItemType.
 */
type MinimalistPricingItemType = {
	period?: 'month' | 'year';
	title?: string;
	subtitle?: string;
	yearlyPrice?: string;
	monthlyPrice?: string;
	buttonTitle?: string;
	isPopular?: boolean;
	icon?: string;
	details?: ReactNode;
};

export default MinimalistPricingItemType;
