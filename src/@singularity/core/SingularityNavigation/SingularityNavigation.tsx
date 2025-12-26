import Divider from '@mui/material/Divider';
import { memo } from 'react';
import GlobalStyles from '@mui/material/GlobalStyles';
import SingularityNavHorizontalLayout1 from './horizontal/SingularityNavHorizontalLayout1';
import SingularityNavVerticalLayout1 from './vertical/SingularityNavVerticalLayout1';
import SingularityNavVerticalLayout2 from './vertical/SingularityNavVerticalLayout2';
import SingularityNavHorizontalCollapse from './horizontal/types/SingularityNavHorizontalCollapse';
import SingularityNavHorizontalGroup from './horizontal/types/SingularityNavHorizontalGroup';
import SingularityNavHorizontalItem from './horizontal/types/SingularityNavHorizontalItem';
import SingularityNavHorizontalLink from './horizontal/types/SingularityNavHorizontalLink';
import SingularityNavVerticalCollapse from './vertical/types/SingularityNavVerticalCollapse';
import SingularityNavVerticalGroup from './vertical/types/SingularityNavVerticalGroup';
import SingularityNavVerticalItem from './vertical/types/SingularityNavVerticalItem';
import SingularityNavVerticalLink from './vertical/types/SingularityNavVerticalLink';
import { SingularityNavItemType } from './types/SingularityNavItemType';
import { registerComponent } from './utils/registerComponent';

const inputGlobalStyles = (
	<GlobalStyles
		styles={() => ({
			'.popper-navigation-list': {
				'& .singularity-list-item': {
					padding: '8px 12px 8px 12px',
					height: 36,
					minHeight: 36,
					'& .singularity-list-item-text': {
						padding: '0 0 0 8px'
					}
				},
				'&.dense': {
					'& .singularity-list-item': {
						minHeight: 32,
						height: 32,
						'& .singularity-list-item-text': {
							padding: '0 0 0 8px'
						}
					}
				}
			}
		})}
	/>
);

/*
Register Singularity Navigation Components
 */
registerComponent('vertical-group', SingularityNavVerticalGroup);
registerComponent('vertical-collapse', SingularityNavVerticalCollapse);
registerComponent('vertical-item', SingularityNavVerticalItem);
registerComponent('vertical-link', SingularityNavVerticalLink);
registerComponent('horizontal-group', SingularityNavHorizontalGroup);
registerComponent('horizontal-collapse', SingularityNavHorizontalCollapse);
registerComponent('horizontal-item', SingularityNavHorizontalItem);
registerComponent('horizontal-link', SingularityNavHorizontalLink);
registerComponent('divider', () => <Divider className="my-4" />);
registerComponent('vertical-divider', () => <Divider className="my-4" />);
registerComponent('horizontal-divider', () => <Divider className="my-4" />);

export type SingularityNavigationProps = {
	className?: string;
	dense?: boolean;
	active?: boolean;
	onItemClick?: (T: SingularityNavItemType) => void;
	navigation?: SingularityNavItemType[];
	layout?: 'horizontal' | 'vertical' | 'vertical-2';
	firstLevel?: boolean;
	selectedId?: string;
	checkPermission?: boolean;
};

/**
 * SingularityNavigation
 * Component for displaying a navigation bar which contains SingularityNavItem components
 * and acts as parent for providing props to its children components
 */
function SingularityNavigation(props: SingularityNavigationProps) {
	const { navigation, layout = 'vertical' } = props;

	if (!navigation || navigation.length === 0) {
		return null;
	}

	return (
		<>
			{inputGlobalStyles}
			{layout === 'horizontal' && (
				<SingularityNavHorizontalLayout1
					checkPermission={false}
					{...props}
				/>
			)}
			{layout === 'vertical' && (
				<SingularityNavVerticalLayout1
					checkPermission={false}
					{...props}
				/>
			)}
			{layout === 'vertical-2' && (
				<SingularityNavVerticalLayout2
					checkPermission={false}
					{...props}
				/>
			)}
		</>
	);
}

export default memo(SingularityNavigation);
