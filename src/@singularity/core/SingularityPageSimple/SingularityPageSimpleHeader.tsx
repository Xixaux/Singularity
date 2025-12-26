import clsx from 'clsx';
import { ReactNode } from 'react';

/**
 * Props for the SingularityPageSimpleHeader component.
 */
type SingularityPageSimpleHeaderProps = {
	className?: string;
	header?: ReactNode;
};

/**
 * The SingularityPageSimpleHeader component is a sub-component of the SingularityPageSimple layout component.
 * It provides a header area for the layout.
 */
function SingularityPageSimpleHeader(props: SingularityPageSimpleHeaderProps) {
	const { header = null, className } = props;
	return (
		<div className={clsx('SingularityPageSimple-header', className)}>
			<div className="container">{header}</div>
		</div>
	);
}

export default SingularityPageSimpleHeader;
