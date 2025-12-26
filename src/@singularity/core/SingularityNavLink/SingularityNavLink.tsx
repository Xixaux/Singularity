import Link from '@singularity/core/Link';
import { CSSProperties, ReactNode } from 'react';
import usePathname from '@singularity/hooks/usePathname';
import useNavigate from '@singularity/hooks/useNavigate';
import clsx from 'clsx';

export type SingularityNavLinkPropsType = {
	activeClassName?: string;
	activeStyle?: CSSProperties;
	children?: ReactNode;
	to?: string;
	href?: string;
	className?: string;
	style?: CSSProperties;
	role?: string;
	exact?: boolean;
	end?: boolean;
	ref?: React.RefObject<HTMLAnchorElement>;
};

/**
 * The SingularityNavLink component is a wrapper around the Next.js Link component.
 * It adds the ability to navigate programmatically using the useRouter hook.
 * The component is memoized to prevent unnecessary re-renders.
 */
function SingularityNavLink(props: SingularityNavLinkPropsType) {
	const {
		children,
		className = '',
		activeClassName = 'active',
		activeStyle,
		role = 'button',
		to,
		href,
		end,
		exact,
		style = {},
		ref = null,
		..._props
	} = props;

	const navigate = useNavigate();
	const pathname = usePathname();

	const targetUrl = to || href;

	const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
		e.preventDefault();
		navigate(targetUrl);
	};

	const handleKeyDown = (e: React.KeyboardEvent<HTMLAnchorElement>) => {
		if (e.key === 'Enter' || e.key === ' ') {
			e.preventDefault();
			navigate(targetUrl);
		}
	};

	const isActive = exact || end ? pathname === targetUrl : pathname.startsWith(targetUrl);

	return (
		<Link
			to={targetUrl}
			role={role}
			onClick={handleClick}
			onKeyDown={handleKeyDown}
			className={clsx(
				className,
				isActive ? activeClassName : '',
				pathname === targetUrl && 'pointer-events-none'
			)}
			style={isActive ? { ...style, ...activeStyle } : style}
			ref={ref}
			{..._props}
		>
			{children}
		</Link>
	);
}

export default SingularityNavLink;
