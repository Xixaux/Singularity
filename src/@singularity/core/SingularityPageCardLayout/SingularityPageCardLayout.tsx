'use client';

import SingularityScrollbars from '@singularity/core/SingularityScrollbars';
import { styled } from '@mui/material/styles';
import clsx from 'clsx';
import { memo, ReactNode, useImperativeHandle, useRef, RefObject } from 'react';
import GlobalStyles from '@mui/material/GlobalStyles';
import { SystemStyleObject, Theme } from '@mui/system';
import SingularityPageCardLayoutSidebar from './SingularityPageCardLayoutSidebar';
import SingularityPageCardLayoutHeader from './SingularityPageCardLayoutHeader';
import { SingularityScrollbarsProps } from '../SingularityScrollbars/SingularityScrollbars';

const headerHeight = 120;
const toolbarHeight = 64;

type SingularityPageCardLayoutProps = SystemStyleObject<Theme> & {
	className?: string;
	leftSidebarContent?: ReactNode;
	leftSidebarVariant?: 'permanent' | 'persistent' | 'temporary';
	rightSidebarContent?: ReactNode;
	rightSidebarVariant?: 'permanent' | 'persistent' | 'temporary';
	header?: ReactNode;
	content?: ReactNode;
	scroll?: 'normal' | 'page' | 'content';
	leftSidebarOpen?: boolean;
	rightSidebarOpen?: boolean;
	leftSidebarWidth?: number;
	rightSidebarWidth?: number;
	rightSidebarOnClose?: () => void;
	leftSidebarOnClose?: () => void;
	contentScrollbarsProps?: SingularityScrollbarsProps;
	ref?: RefObject<{ toggleLeftSidebar: (val: boolean) => void; toggleRightSidebar: (val: boolean) => void }>;
};

const Root = styled('div')<SingularityPageCardLayoutProps>(({ theme, ...props }) => ({
	display: 'flex',
	flexDirection: 'column',
	minWidth: 0,
	minHeight: '100%',
	position: 'relative',
	flex: '1 1 auto',
	width: '100%',
	height: 'auto',
	padding: '0 16px',
	backgroundColor: theme.vars.palette.background.default,

	'& .SingularityPageCardLayout-scroll-content': {
		height: '100%'
	},

	'& .SingularityPageCardLayout-wrapper': {
		display: 'flex',
		flexDirection: 'row',
		flex: '1 1 auto',
		zIndex: 2,
		maxWidth: '100%',
		minWidth: 0,
		height: '100%',
		backgroundColor: theme.vars.palette.background.paper,

		...(props.scroll === 'content' && {
			position: 'absolute',
			top: 0,
			bottom: 0,
			right: 0,
			left: 0,
			overflow: 'hidden'
		})
	},

	'& .SingularityPageCardLayout-header': {
		display: 'flex',
		flex: '0 0 auto'
	},

	'& .SingularityPageCardLayout-contentWrapper': {
		display: 'flex',
		flexDirection: 'column',
		flex: '1 1 auto',
		overflow: 'auto',
		WebkitOverflowScrolling: 'touch',
		zIndex: 9999
	},

	'& .SingularityPageCardLayout-toolbar': {
		height: toolbarHeight,
		minHeight: toolbarHeight,
		display: 'flex',
		alignItems: 'center'
	},

	'& .SingularityPageCardLayout-content': {
		flex: '1 0 auto'
	},

	'& .SingularityPageCardLayout-sidebarWrapper': {
		overflow: 'hidden',
		backgroundColor: 'transparent',
		position: 'absolute',
		'&.permanent': {
			[theme.breakpoints.up('lg')]: {
				position: 'relative',
				marginLeft: 0,
				marginRight: 0,
				transition: theme.transitions.create('margin', {
					easing: theme.transitions.easing.sharp,
					duration: theme.transitions.duration.leavingScreen
				}),
				'&.closed': {
					transition: theme.transitions.create('margin', {
						easing: theme.transitions.easing.easeOut,
						duration: theme.transitions.duration.enteringScreen
					}),

					'&.SingularityPageCardLayout-leftSidebar': {
						marginLeft: -props.leftSidebarWidth
					},
					'&.SingularityPageCardLayout-rightSidebar': {
						marginRight: -props.rightSidebarWidth
					}
				}
			}
		}
	},

	'& .SingularityPageCardLayout-sidebar': {
		position: 'absolute',
		backgroundColor: theme.vars.palette.background.paper,
		color: theme.vars.palette.text.primary,

		'&.permanent': {
			[theme.breakpoints.up('lg')]: {
				position: 'relative'
			}
		},
		maxWidth: '100%',
		height: '100%'
	},

	'& .SingularityPageCardLayout-leftSidebar': {
		width: props.leftSidebarWidth,

		[theme.breakpoints.up('lg')]: {
			// borderRight: `1px solid ${theme.vars.palette.divider}`,
			// borderLeft: 0,
		}
	},

	'& .SingularityPageCardLayout-rightSidebar': {
		width: props.rightSidebarWidth,

		[theme.breakpoints.up('lg')]: {
			// borderLeft: `1px solid ${theme.vars.palette.divider}`,
			// borderRight: 0,
		}
	},

	'& .SingularityPageCardLayout-sidebarHeader': {
		height: headerHeight,
		minHeight: headerHeight,
		backgroundColor: theme.vars.palette.primary.dark,
		color: theme.vars.palette.primary.contrastText
	},

	'& .SingularityPageCardLayout-sidebarHeaderInnerSidebar': {
		backgroundColor: 'transparent',
		color: 'inherit',
		height: 'auto',
		minHeight: 'auto'
	},

	'& .SingularityPageCardLayout-sidebarContent': {
		display: 'flex',
		flexDirection: 'column',
		minHeight: '100%'
	},

	'& .SingularityPageCardLayout-backdrop': {
		position: 'absolute'
	}
}));

function SingularityPageCardLayout(props: SingularityPageCardLayoutProps) {
	const {
		scroll = 'page',
		className,
		header,
		content,
		leftSidebarContent,
		rightSidebarContent,
		leftSidebarOpen = false,
		rightSidebarOpen = false,
		rightSidebarWidth = 240,
		leftSidebarWidth = 240,
		leftSidebarVariant = 'permanent',
		rightSidebarVariant = 'permanent',
		rightSidebarOnClose,
		leftSidebarOnClose,
		contentScrollbarsProps,
		ref
	} = props;

	const leftSidebarRef = useRef<{ toggleSidebar: (T: boolean) => void }>(null);
	const rightSidebarRef = useRef<{ toggleSidebar: (T: boolean) => void }>(null);
	const rootRef = useRef(null);

	useImperativeHandle(ref, () => ({
		toggleLeftSidebar: (val: boolean) => {
			if (leftSidebarRef.current) {
				leftSidebarRef.current.toggleSidebar(val);
			}
		},
		toggleRightSidebar: (val: boolean) => {
			if (rightSidebarRef.current) {
				rightSidebarRef.current.toggleSidebar(val);
			}
		}
	}));

	return (
		<>
			<GlobalStyles
				styles={() => ({
					...(scroll !== 'page' && {
						'#singularity-toolbar': {
							position: 'static'
						},
						'#singularity-footer': {
							position: 'static'
						}
					}),
					...(scroll === 'page' && {
						'#singularity-toolbar': {
							position: 'sticky',
							top: 0
						},
						'#singularity-footer': {
							position: 'sticky',
							bottom: 0
						}
					})
				})}
			/>
			<Root
				className={clsx('SingularityPageCardLayout-root', `SingularityPageCardLayout-scroll-${scroll}`, className)}
				ref={rootRef}
				scroll={scroll}
				leftSidebarWidth={leftSidebarWidth}
				rightSidebarWidth={rightSidebarWidth}
			>
				{header && <SingularityPageCardLayoutHeader header={header} />}

				<div className="container relative z-10 flex h-full flex-auto flex-col overflow-hidden rounded-t-lg shadow-1">
					<div className="SingularityPageCardLayout-wrapper">
						{leftSidebarContent && (
							<SingularityPageCardLayoutSidebar
								position="left"
								variant={leftSidebarVariant}
								ref={leftSidebarRef}
								open={leftSidebarOpen}
								onClose={leftSidebarOnClose}
								width={leftSidebarWidth}
							>
								{leftSidebarContent}
							</SingularityPageCardLayoutSidebar>
						)}
						<SingularityScrollbars
							className="SingularityPageCardLayout-contentWrapper"
							enable={scroll === 'content'}
							{...contentScrollbarsProps}
						>
							{content && <div className={clsx('SingularityPageCardLayout-content')}>{content}</div>}
						</SingularityScrollbars>
						{rightSidebarContent && (
							<SingularityPageCardLayoutSidebar
								position="right"
								variant={rightSidebarVariant || 'permanent'}
								ref={rightSidebarRef}
								open={rightSidebarOpen}
								onClose={rightSidebarOnClose}
								width={rightSidebarWidth}
							>
								{rightSidebarContent}
							</SingularityPageCardLayoutSidebar>
						)}
					</div>
				</div>
			</Root>
		</>
	);
}

const StyledSingularityPageCardLayout = memo(styled(SingularityPageCardLayout)``);

export default StyledSingularityPageCardLayout;
