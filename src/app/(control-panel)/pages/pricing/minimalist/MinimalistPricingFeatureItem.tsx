import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import SingularitySvgIcon from '@singularity/core/SingularitySvgIcon';
import MinimalistPricingItemType from './MinimalistPricingItemType';

type SinglePricingFeatureItemProps = {
	title?: MinimalistPricingItemType['title'];
	subtitle?: MinimalistPricingItemType['subtitle'];
	icon?: MinimalistPricingItemType['icon'];
};

/**
 * The minimalist pricing feature item component.
 */
function MinimalistPricingFeatureItem(props: SinglePricingFeatureItemProps) {
	const { title = '', subtitle = '', icon = '' } = props;

	return (
		<div>
			<Box
				className="flex h-12 w-12 items-center justify-center rounded-sm"
				sx={{ backgroundColor: 'secondary.main', color: 'secondary.contrastText' }}
			>
				<SingularitySvgIcon>{icon}</SingularitySvgIcon>
			</Box>
			<Typography className="mt-4 text-xl font-medium">{title}</Typography>
			<Typography
				className="leading-[2] mt-2"
				color="text.secondary"
			>
				{subtitle}
			</Typography>
		</div>
	);
}

export default MinimalistPricingFeatureItem;
