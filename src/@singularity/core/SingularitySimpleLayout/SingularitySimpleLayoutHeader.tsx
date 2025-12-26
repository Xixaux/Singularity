import clsx from 'clsx';
import { ReactNode } from 'react';

/**
 * Props for the SingularitySimpleLayoutHeader component.
 */
type SingularitySimpleLayoutHeaderProps = {
	className?: string;
	header?: ReactNode;
};

/**
 * The SingularitySimpleLayoutHeader component is a sub-component of the SingularitySimpleLayout layout component.
 * It provides a header area for the layout.
 */
function SingularitySimpleLayoutHeader(props: SingularitySimpleLayoutHeaderProps) {
	const { header = null, className } = props;
	return (
		<div className={clsx('SingularitySimpleLayout-header', className)}>
			<div className="container">{header}</div>
		</div>
	);
}

export default SingularitySimpleLayoutHeader;
