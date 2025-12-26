'use client';
import SingularityScrollbars from '@singularity/core/SingularityScrollbars';
import { styled } from '@mui/material/styles';
import clsx from 'clsx';
import { memo, ReactNode, RefObject, useImperativeHandle, useRef } from 'react';
import GlobalStyles from '@mui/material/GlobalStyles';
import { SystemStyleObject, Theme } from '@mui/system';
import SingularitySimpleLayoutHeader from './SingularitySimpleLayoutHeader';
import SingularitySimpleLayoutSidebar from './SingularitySimpleLayoutSidebar';
import { SingularityScrollbarsProps } from '../SingularityScrollbars/SingularityScrollbars';

const headerHeight = 120;
const toolbarHeight = 60;

/**
 * Props for the SingularitySimpleLayout component.
 */
type SingularitySimpleLayoutProps = SystemStyleObject<Theme> & {
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

/**
 * The Root styled component is the top-level container for the SingularitySimpleLayout component.
 */
const Root = styled('div')<SingularitySimpleLayoutProps>(({ theme, ...props }) => ({
	display: 'flex',
	flexDirection: 'column',
	minWidth: 0,
	minHeight: '100%',
	position: 'relative',
	flex: '1 1 auto',
	width: '100%',
	height: 'auto',
	backgroundColor: theme.palette.background.default,

	'&.SingularitySimpleLayout-scroll-content': {
		height: '100%',
	},

	'& .SingularitySimpleLayout-wrapper': {
		display: 'flex',
		flexDirection: 'row',
		flex: '1 1 auto',
		zIndex: 2,
		minWidth: 0,
		height: '100%',
		backgroundColor: theme.palette.background.default, // Revert to theme default

		// 🚨 FIX APPLIED HERE: The absolute positioning block is removed to prevent it from masking content. 
		// If scrolling is set to 'content', the wrapper should be flex-based, not absolutely positioned.
		// If absolute positioning is truly required for 'content' scrolling, you MUST ensure zIndex is correct.
		
		/*
		...(props.scroll === 'content' && {
			position: 'absolute',
			top: 0,
			bottom: 0,
			right: 0,
			left: 0,
			overflow: 'hidden',
		}),
		*/
	},

	'& .SingularitySimpleLayout-header': {
		display: 'flex',
		flex: '0 0 auto',
		backgroundSize: 'cover',
	},

	'& .SingularitySimpleLayout-topBg': {
		position: 'absolute',
		left: 0,
		right: 0,
		top: 0,
		height: headerHeight,
		pointerEvents: 'none',
	},

	'& .SingularitySimpleLayout-contentWrapper': {
		display: 'flex',
		flexDirection: 'column',
		width: '100%',
		flex: '1 1 auto',
		overflow: 'hidden',
		zIndex: 9999,
	},

	'& .SingularitySimpleLayout-toolbar': {
		height: toolbarHeight,
		minHeight: toolbarHeight,
		display: 'flex',
		alignItems: 'center',
	},

	'& .SingularitySimpleLayout-content': {
		display: 'flex',
		flexDirection: 'column',
		flex: '1 1 auto',
		alignItems: 'start',
		minHeight: 0,
		overflowY: 'auto',
		'& > .container': {
			display: 'flex',
			flexDirection: 'column',
			minHeight: '100%',
		},
	},

	'& .SingularitySimpleLayout-sidebarWrapper': {
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
					duration: theme.transitions.duration.leavingScreen,
				}),
				'&.closed': {
					transition: theme.transitions.create('margin', {
						easing: theme.transitions.easing.easeOut,
						duration: theme.transitions.duration.enteringScreen,
					}),
					'&.SingularitySimpleLayout-leftSidebar': {
						marginLeft: -props.leftSidebarWidth,
					},
					'&.SingularitySimpleLayout-rightSidebar': {
						marginRight: -props.rightSidebarWidth,
					},
				},
			},
		},
	},

	'& .SingularitySimpleLayout-sidebar': {
		position: 'absolute',
		backgroundColor: theme.palette.background.paper,
		color: theme.palette.text.primary,
		'&.permanent': {
			[theme.breakpoints.up('lg')]: {
				position: 'relative',
			},
		},
		maxWidth: '100%',
		height: '100%',
	},

	'& .SingularitySimpleLayout-leftSidebar': {
		width: props.leftSidebarWidth,
		[theme.breakpoints.up('lg')]: {
			borderRight: `1px solid ${theme.palette.divider}`,
			borderLeft: 0,
		},
	},

	'& .SingularitySimpleLayout-rightSidebar': {
		width: props.rightSidebarWidth,
		[theme.breakpoints.up('lg')]: {
			borderLeft: `1px solid ${theme.palette.divider}`,
			borderRight: 0,
		},
	},

	// Backdrops in permanent mode should be transparent by default, but we'll leave this clean.
	// The problem is the wrapper overlaying content, not the backdrop itself.
	'& .SingularitySimpleLayout-backdrop': {
		position: 'absolute',
	},
}));

/**
 * The SingularitySimpleLayout component is a layout component that provides a simple page layout with a header, left sidebar, right sidebar, and content area.
 * It is designed to be used as a top-level component for an application or as a sub-component within a larger layout.
 */
function SingularitySimpleLayout(props: SingularitySimpleLayoutProps) {
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
		ref,
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
		},
	}));

	return (
		<>
			<GlobalStyles
				styles={() => ({
					...(scroll !== 'page' && {
						'#singularity-toolbar': {
							position: 'static ',
						},
						'#singularity-footer': {
							position: 'static ',
						},
					}),
					...(scroll === 'page' && {
						'#singularity-toolbar': {
							position: 'sticky',
							top: 0,
						},
						'#singularity-footer': {
							position: 'sticky',
							bottom: 0,
						},
					}),
				})}
			/>
			<Root
				className={clsx('SingularitySimpleLayout-root', `SingularitySimpleLayout-scroll-${scroll}`, className)}
				ref={rootRef}
				scroll={scroll}
				leftSidebarWidth={leftSidebarWidth}
				rightSidebarWidth={rightSidebarWidth}
			>
				<div className="z-10 flex h-full flex-auto flex-col">
					<div className="SingularitySimpleLayout-wrapper">
						{leftSidebarContent && (
							<SingularitySimpleLayoutSidebar
								position="left"
								variant={leftSidebarVariant || 'permanent'}
								ref={leftSidebarRef}
								open={leftSidebarOpen}
								onClose={leftSidebarOnClose}
								width={leftSidebarWidth}
							>
								{leftSidebarContent}
							</SingularitySimpleLayoutSidebar>
						)}
						<div className="SingularitySimpleLayout-contentWrapper">
							{header && <SingularitySimpleLayoutHeader header={header} />}
							{content && (
								<SingularityScrollbars
									enable={scroll === 'content'}
									className={clsx('SingularitySimpleLayout-content')}
									scrollToTopOnRouteChange
									{...contentScrollbarsProps}
								>
									<div className="container">{content}</div>
								</SingularityScrollbars>
							)}
						</div>
						{rightSidebarContent && (
							<SingularitySimpleLayoutSidebar
								position="right"
								variant={rightSidebarVariant || 'permanent'}
								ref={rightSidebarRef}
								open={rightSidebarOpen}
								onClose={rightSidebarOnClose}
								width={rightSidebarWidth}
							>
								{rightSidebarContent}
							</SingularitySimpleLayoutSidebar>
						)}
					</div>
				</div>
			</Root>
		</>
	);
}

const StyledSingularitySimpleLayout = memo(styled(SingularitySimpleLayout)``);

export default StyledSingularitySimpleLayout;