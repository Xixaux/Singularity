import SingularityScrollbars from '@singularity/core/SingularityScrollbars';
import { ReactNode } from 'react';

/**
 * Props for the SingularityPageCardLayoutSidebarContent component.
 */
type SingularityPageCardLayoutSidebarContentProps = {
	innerScroll?: boolean;
	children?: ReactNode;
};

/**
 * The SingularityPageCardLayoutSidebarContent component is a content container for the SingularityPageCardLayoutSidebar component.
 */
function SingularityPageCardLayoutSidebarContent(props: SingularityPageCardLayoutSidebarContentProps) {
	const { innerScroll, children } = props;

	if (!children) {
		return null;
	}

	return (
		<SingularityScrollbars enable={innerScroll}>
			<div className="SingularityPageCardLayout-sidebarContent min-w-80 lg:min-w-0">{children}</div>
		</SingularityScrollbars>
	);
}

export default SingularityPageCardLayoutSidebarContent;
