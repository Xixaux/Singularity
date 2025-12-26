import { SingularityNavItemType } from './types/SingularityNavItemType';
import components from './utils/components';

export type SingularityNavItemComponentProps = {
	type: string;
	item: SingularityNavItemType;
	dense?: boolean;
	nestedLevel?: number;
	onItemClick?: (T: SingularityNavItemType) => void;
	checkPermission?: boolean;
};

/**
Component to render NavItem depending on its type.
*/
function SingularityNavItem(props: SingularityNavItemComponentProps) {
	const { type } = props;

	const C = components[type];

	return C ? <C {...(props as object)} /> : null;
}

export default SingularityNavItem;
