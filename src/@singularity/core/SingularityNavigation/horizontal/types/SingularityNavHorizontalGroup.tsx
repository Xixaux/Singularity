'use client';

import SingularityNavLink from '@singularity/core/SingularityNavLink';
import { styled, useTheme } from '@mui/material/styles';
import { useDebounce } from '@singularity/hooks';
import Grow from '@mui/material/Grow';
import IconButton from '@mui/material/IconButton';
import ListItemText from '@mui/material/ListItemText';
import Paper from '@mui/material/Paper';
import clsx from 'clsx';
import { memo, useMemo, useState } from 'react';
import * as ReactDOM from 'react-dom';
import { Manager, Popper, Reference } from 'react-popper';
import { ListItemButton, ListItemButtonProps } from '@mui/material';
import isUrlInChildren from '@singularity/core/SingularityNavigation/isUrlInChildren';
import { WithRouterProps } from '@singularity/core/RouterHOC/RouterHOC';
import * as PopperJS from '@popperjs/core';
import usePathname from '@singularity/hooks/usePathname';
import SingularityNavItem, { SingularityNavItemComponentProps } from '../../SingularityNavItem';
import SingularitySvgIcon from '../../../SingularitySvgIcon';

const Root = styled(ListItemButton)<ListItemButtonProps>(({ theme }) => ({
	color: theme.vars.palette.text.primary,
	cursor: 'pointer',
	'&.active, &.active:hover, &.active:focus': {
		backgroundColor: `${theme.vars.palette.secondary.main}`,
		color: `${theme.vars.palette.secondary.contrastText}`,
		'& .singularity-list-item-text-primary': {
			color: 'inherit'
		},
		'& .singularity-list-item-icon': {
			color: 'inherit'
		}
	},
	'& .singularity-list-item-text': {
		padding: '0 0 0 16px'
	},
	'&.level-0': {
		minHeight: 36,
		borderRadius: 8,
		'&:hover': {
			background: 'transparent'
		}
	}
}));

type SingularityNavHorizontalGroupProps = SingularityNavItemComponentProps & WithRouterProps;

/**
 * SingularityNavHorizontalGroup.
 * Represents a horizontal group component used in the Singularity navigation navigation list.
 * It shows the list item as well as its children with a flyout effect.
 */
function SingularityNavHorizontalGroup(props: SingularityNavHorizontalGroupProps) {
	const { item, nestedLevel, dense, checkPermission } = props;
	const [opened, setOpened] = useState(false);
	const pathname = usePathname();
	const theme = useTheme();
	const component = item.url ? SingularityNavLink : 'li';

	const itemProps = useMemo(
		() => ({
			...(component !== 'li' && {
				disabled: item.disabled,
				to: item.url,
				end: item.end,
				role: 'button',
				exact: item?.exact
			})
		}),
		[item, component]
	);
	const handleToggle = useDebounce((open: boolean) => {
		setOpened(open);
	}, 150);

	const memoizedContent = useMemo(() => {
		let popperPlacement: PopperJS.Placement;

		if (nestedLevel === 0) {
			popperPlacement = theme.direction === 'ltr' ? 'bottom-start' : 'bottom-end';
		} else {
			popperPlacement = theme.direction === 'ltr' ? 'right' : 'left';
		}

		return (
			<Manager>
				<Reference>
					{({ ref }) => (
						<div ref={ref}>
							<Root
								component={component}
								className={clsx(
									'singularity-list-item',
									'relative',
									`level-${nestedLevel}`,
									isUrlInChildren(item, pathname) && 'active'
								)}
								onMouseEnter={() => handleToggle(true)}
								onMouseLeave={() => handleToggle(false)}
								aria-owns={opened ? 'menu-singularity-list-grow' : null}
								aria-haspopup="true"
								sx={item.sx}
								{...itemProps}
							>
								{item.icon && (
									<SingularitySvgIcon
										color="action"
										className={clsx('singularity-list-item-icon shrink-0', item.iconClass)}
									>
										{item.icon}
									</SingularitySvgIcon>
								)}

								<ListItemText
									className="singularity-list-item-text"
									primary={item.title}
									classes={{ primary: 'text-md truncate' }}
								/>

								{nestedLevel > 0 && (
									<IconButton
										disableRipple
										className="h-4 w-4 p-0 ltr:ml-1 rtl:mr-1"
										color="inherit"
									>
										<SingularitySvgIcon
											size={16}
											className="arrow-icon"
										>
											{theme.direction === 'ltr'
												? 'heroicons-outline:chevron-right'
												: 'heroicons-outline:chevron-left'}
										</SingularitySvgIcon>
									</IconButton>
								)}
							</Root>
						</div>
					)}
				</Reference>
				{ReactDOM.createPortal(
					<Popper placement={popperPlacement}>
						{({ ref, style, placement }) =>
							opened && (
								<div
									ref={ref}
									style={{
										...style,
										zIndex: 999 + nestedLevel
									}}
									data-placement={placement}
									className={clsx('z-999', !opened && 'pointer-events-none')}
								>
									<Grow
										in={opened}
										id="menu-singularity-list-grow"
										style={{ transformOrigin: '0 0 0' }}
									>
										<Paper
											className="rounded-sm"
											onMouseEnter={() => handleToggle(true)}
											onMouseLeave={() => handleToggle(false)}
										>
											{item.children && (
												<ul
													className={clsx('popper-navigation-list', dense && 'dense', 'px-0')}
												>
													{item.children.map((_item) => (
														<SingularityNavItem
															key={_item.id}
															type={`horizontal-${_item.type}`}
															item={_item}
															nestedLevel={nestedLevel}
															dense={dense}
														/>
													))}
												</ul>
											)}
										</Paper>
									</Grow>
								</div>
							)
						}
					</Popper>,
					document.querySelector('#root')
				)}
			</Manager>
		);
	}, [component, dense, handleToggle, item, itemProps, nestedLevel, opened, pathname, theme.direction]);

	if (checkPermission && !item?.hasPermission) {
		return null;
	}

	return memoizedContent;
}

const NavHorizontalGroupWithMemo = memo(SingularityNavHorizontalGroup);

export default NavHorizontalGroupWithMemo;
