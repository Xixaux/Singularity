import { ReactNode } from 'react';

/**
 * The type of the BasicPricingItemType.
 */
export type BasicPricingItemType = {
	period?: 'month' | 'year';
	title?: string;
	subtitle?: string;
	yearlyPrice?: string;
	monthlyPrice?: string;
	buttonTitle?: string;
	isPopular?: boolean;
	details?: ReactNode;
	icon?: string;
};

export default BasicPricingItemType;
