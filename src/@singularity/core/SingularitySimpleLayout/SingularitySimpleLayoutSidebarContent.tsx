import SingularityScrollbars from '@singularity/core/SingularityScrollbars';
import { ReactNode } from 'react';

/**
 * Props for the SingularitySimpleLayoutSidebarContent component.
 */
type SingularitySimpleLayoutSidebarContentProps = {
	innerScroll?: boolean;
	children?: ReactNode;
};

/**
 * The SingularitySimpleLayoutSidebarContent component is a content container for the SingularitySimpleLayoutSidebar component.
 */
function SingularitySimpleLayoutSidebarContent(props: SingularitySimpleLayoutSidebarContentProps) {
	const { innerScroll, children } = props;

	if (!children) {
		return null;
	}

	return (
		<SingularityScrollbars enable={innerScroll}>
			<div className="SingularitySimpleLayout-sidebarContent flex flex-col min-h-full min-w-80 lg:min-w-0">{children}</div>
		</SingularityScrollbars>
	);
}

export default SingularitySimpleLayoutSidebarContent;
