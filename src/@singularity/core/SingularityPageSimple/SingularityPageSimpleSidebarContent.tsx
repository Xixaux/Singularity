import SingularityScrollbars from '@singularity/core/SingularityScrollbars';
import { ReactNode } from 'react';

/**
 * Props for the SingularityPageSimpleSidebarContent component.
 */
type SingularityPageSimpleSidebarContentProps = {
	innerScroll?: boolean;
	children?: ReactNode;
	content?: ReactNode;
};

/**
 * The SingularityPageSimpleSidebarContent component is a content container for the SingularityPageSimpleSidebar component.
 */
function SingularityPageSimpleSidebarContent(props: SingularityPageSimpleSidebarContentProps) {
	const { innerScroll, children, content } = props;

	if (!children && !content) {
		return null;
	}

	return (
		<SingularityScrollbars enable={innerScroll}>
			<div className="SingularityPageSimple-sidebarContent flex min-h-full flex-col lg:min-w-0">
				{content || children}
			</div>
		</SingularityScrollbars>
	);
}

export default SingularityPageSimpleSidebarContent;
