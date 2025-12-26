'use client';

import { styled } from '@mui/material/styles';
import ListItemText from '@mui/material/ListItemText';
import clsx from 'clsx';
import { memo, useMemo } from 'react';
import { Link, ListItemButton, ListItemButtonProps } from '@mui/material';
import { WithRouterProps } from '@singularity/core/RouterHOC/RouterHOC';
import SingularityNavBadge from '../../SingularityNavBadge';
import SingularitySvgIcon from '../../../SingularitySvgIcon';
import { SingularityNavItemComponentProps } from '../../SingularityNavItem';

const Root = styled(ListItemButton)<ListItemButtonProps>(({ theme }) => ({
	color: theme.vars.palette.text.primary,
	textDecoration: 'none',
	minHeight: 48,
	'&.active': {
		backgroundColor: `${theme.vars.palette.secondary.main}`,
		color: `${theme.vars.palette.secondary.contrastText}`,
		'& .singularity-list-item-text-primary': {
			color: 'inherit'
		},
		'& .singularity-list-item-icon': {
			color: 'inherit'
		}
	},
	'& .singularity-list-item-icon': {},
	'& .singularity-list-item-text': {
		padding: '0 0 0 16px'
	}
}));

type SingularityNavHorizontalLinkProps = SingularityNavItemComponentProps & WithRouterProps;

/*
 * SingularityNavHorizontalLink
 * This is a component to render horizontal navigation links in the Singularity navigations.
 * It receieves `SingularityNavItemComponentProps` and `WithRouterProps` as props.
 */
function SingularityNavHorizontalLink(props: SingularityNavHorizontalLinkProps) {
	const { item, checkPermission } = props;
	const component = item.url ? Link : 'li';

	const itemProps = useMemo(
		() => ({
			...(component !== 'li' && {
				disabled: item.disabled,
				to: item.url,
				role: 'button',
				target: item.target ? item.target : '_blank',
				exact: item?.exact
			})
		}),
		[item, component]
	);

	const memoizedContent = useMemo(
		() => (
			<Root
				component={component}
				className={clsx('singularity-list-item')}
				sx={item.sx}
				{...itemProps}
			>
				{item.icon && (
					<SingularitySvgIcon
						className={clsx('singularity-list-item-icon shrink-0', item.iconClass)}
						color="action"
					>
						{item.icon}
					</SingularitySvgIcon>
				)}

				<ListItemText
					className="singularity-list-item-text"
					primary={item.title}
					classes={{ primary: 'text-md singularity-list-item-text-primary truncate' }}
				/>

				{item.badge && (
					<SingularityNavBadge
						className="ltr:ml-2 rtl:mr-2"
						badge={item.badge}
					/>
				)}
			</Root>
		),
		[component, item.badge, item.icon, item.iconClass, item.sx, item.title, itemProps]
	);

	if (checkPermission && !item?.hasPermission) {
		return null;
	}

	return memoizedContent;
}

const NavHorizontalLinkWithMemo = memo(SingularityNavHorizontalLink);

export default NavHorizontalLinkWithMemo;
