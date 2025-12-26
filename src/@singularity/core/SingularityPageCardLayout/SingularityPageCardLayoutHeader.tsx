import clsx from 'clsx';
import { ReactNode } from 'react';

/**
 * Props for the SingularityPageCardLayoutHeader component.
 */
type SingularityPageCardLayoutHeaderProps = {
	header?: ReactNode;
};

/**
 * The SingularityPageCardLayoutHeader component is a header for the SingularityPageCardLayout component.
 */
function SingularityPageCardLayoutHeader(props: SingularityPageCardLayoutHeaderProps) {
	const { header = null } = props;

	return <div className={clsx('SingularityPageCardLayout-header', 'container')}>{header}</div>;
}

export default SingularityPageCardLayoutHeader;
