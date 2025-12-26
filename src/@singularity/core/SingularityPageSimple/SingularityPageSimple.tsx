'use client';
import SingularityScrollbars from '@singularity/core/SingularityScrollbars';
import { styled } from '@mui/material/styles';
import clsx from 'clsx';
import { memo, ReactNode, RefObject, useImperativeHandle, useRef } from 'react';
import GlobalStyles from '@mui/material/GlobalStyles';
import { SystemStyleObject, Theme } from '@mui/system';
import SingularityPageSimpleHeader from './SingularityPageSimpleHeader';
import SingularityPageSimpleSidebar, { SingularityPageSimpleSidebarProps } from './SingularityPageSimpleSidebar';
import { SingularityScrollbarsProps } from '../SingularityScrollbars/SingularityScrollbars';

const headerHeight = 120;
const toolbarHeight = 64;

/**
 * Props for the SingularityPageSimple component.
 */
type SingularityPageSimpleProps = SystemStyleObject<Theme> & {
	className?: string;
	header?: ReactNode;
	content?: ReactNode;
	scroll?: 'normal' | 'page' | 'content';
	leftSidebarProps?: SingularityPageSimpleSidebarProps;
	rightSidebarProps?: SingularityPageSimpleSidebarProps;
	contentScrollbarsProps?: SingularityScrollbarsProps;
	ref?: RefObject<{ toggleLeftSidebar: (val: boolean) => void; toggleRightSidebar: (val: boolean) => void }>;
};

/**
 * The Root styled component is the top-level container for the SingularityPageSimple component.
 */
const Root = styled('div')<SingularityPageSimpleProps>(({ theme, ...props }) => ({
	display: 'flex',
	flexDirection: 'column',
	minWidth: 0,
	minHeight: '100%',
	position: 'relative',
	flex: '1 1 auto',
	width: '100%',
	height: 'auto',
	backgroundColor: theme.vars.palette.background.default,

	'&.SingularityPageSimple-scroll-content': {
		height: '100%'
	},

	'& .SingularityPageSimple-wrapper': {
		display: 'flex',
		flexDirection: 'row',
		flex: '1 1 auto',
		zIndex: 2,
		minWidth: 0,
		height: '100%',
		backgroundColor: theme.vars.palette.background.default,

		...(props.scroll === 'content' && {
			position: 'absolute',
			top: 0,
			bottom: 0,
			right: 0,
			left: 0,
			overflow: 'hidden'
		})
	},

	'& .SingularityPageSimple-header': {
		display: 'flex',
		flex: '0 0 auto',
		backgroundSize: 'cover'
	},

	'& .SingularityPageSimple-topBg': {
		position: 'absolute',
		left: 0,
		right: 0,
		top: 0,
		height: headerHeight,
		pointerEvents: 'none'
	},

	'& .SingularityPageSimple-contentWrapper': {
		display: 'flex',
		flexDirection: 'column',
		width: '100%',
		flex: '1',
		overflow: 'hidden',
		//    WebkitOverflowScrolling: 'touch',
		zIndex: 9999
	},

	'& .SingularityPageSimple-toolbar': {
		height: toolbarHeight,
		minHeight: toolbarHeight,
		display: 'flex',
		alignItems: 'center'
	},

	'& .SingularityPageSimple-content': {
		display: 'flex',
		flexDirection: 'column',
		flex: '1 1 auto',
		alignItems: 'start',
		minHeight: 0,
		overflowY: 'auto',
		'& > .container': {
			display: 'flex',
			flexDirection: 'column',
			minHeight: '100%'
		}
	},

	'& .SingularityPageSimple-sidebarWrapper': {
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

					'&.SingularityPageSimple-leftSidebar': {
						marginLeft: -props.leftSidebarProps?.width
					},
					'&.SingularityPageSimple-rightSidebar': {
						marginRight: -props.rightSidebarProps?.width
					}
				}
			}
		}
	},

	'& .SingularityPageSimple-sidebar': {
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

	'& .SingularityPageSimple-leftSidebar': {
		width: props.leftSidebarProps?.width,
		maxWidth: props.leftSidebarProps?.width,

		[theme.breakpoints.up('lg')]: {
			borderRight: `1px solid ${theme.vars.palette.divider}`,
			borderLeft: 0
		}
	},

	'& .SingularityPageSimple-rightSidebar': {
		width: props.rightSidebarProps?.width,
		maxWidth: props.rightSidebarProps?.width,

		[theme.breakpoints.up('lg')]: {
			borderLeft: `1px solid ${theme.vars.palette.divider}`,
			borderRight: 0,
			flex: '1'
		}
	},

	'& .SingularityPageSimple-backdrop': {
		position: 'absolute'
	}
}));

const sidebarPropsDefaults = { variant: 'permanent' as const };

/**
 * The SingularityPageSimple component is a layout component that provides a simple page layout with a header, left sidebar, right sidebar, and content area.
 * It is designed to be used as a top-level component for an application or as a sub-component within a larger layout.
 */
function SingularityPageSimple(props: SingularityPageSimpleProps) {
	const {
		scroll = 'page',
		className,
		header,
		content,
		leftSidebarProps,
		rightSidebarProps,
		contentScrollbarsProps,
		ref
	} = props;

	const leftSidebarRef = useRef<{ toggleSidebar: (T: boolean) => void }>(null);
	const rightSidebarRef = useRef<{ toggleSidebar: (T: boolean) => void }>(null);
	const rootRef = useRef(null);

	useImperativeHandle(ref, () => ({
		rootRef,
		toggleLeftSidebar: (val: boolean) => {
			leftSidebarRef?.current?.toggleSidebar(val);
		},
		toggleRightSidebar: (val: boolean) => {
			rightSidebarRef?.current?.toggleSidebar(val);
		}
	}));

	return (
		<>
			<GlobalStyles
				styles={() => ({
					...(scroll !== 'page' && {
						'#singularity-toolbar': {
							position: 'static!important'
						},
						'#singularity-footer': {
							position: 'static!important'
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
				className={clsx('SingularityPageSimple-root', `SingularityPageSimple-scroll-${scroll}`, className)}
				ref={rootRef}
				scroll={scroll}
				leftSidebarProps={{ ...sidebarPropsDefaults, ...leftSidebarProps }}
				rightSidebarProps={{ ...sidebarPropsDefaults, ...rightSidebarProps }}
			>
				<div className="z-10 flex h-full flex-auto flex-col">
					<div className="SingularityPageSimple-wrapper">
						<SingularityPageSimpleSidebar
							position="left"
							ref={leftSidebarRef}
							{...sidebarPropsDefaults}
							{...leftSidebarProps}
						/>
						<div
							className="SingularityPageSimple-contentWrapper"

							// enable={scroll === 'page'}
						>
							{header && <SingularityPageSimpleHeader header={header} />}

							{content && (
								<SingularityScrollbars
									enable={scroll === 'content'}
									className={clsx('SingularityPageSimple-content')}
									scrollToTopOnRouteChange
									{...contentScrollbarsProps}
								>
									<div className="container">{content}</div>
								</SingularityScrollbars>
							)}
						</div>
						<SingularityPageSimpleSidebar
							position="right"
							ref={rightSidebarRef}
							{...sidebarPropsDefaults}
							{...rightSidebarProps}
						/>
					</div>
				</div>
			</Root>
		</>
	);
}

const StyledSingularityPageSimple = memo(styled(SingularityPageSimple)``);

export default StyledSingularityPageSimple;
