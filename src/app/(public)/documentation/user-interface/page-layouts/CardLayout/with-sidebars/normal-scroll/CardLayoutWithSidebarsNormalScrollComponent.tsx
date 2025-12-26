'use client';

import { styled } from '@mui/material/styles';
import SingularityPageCardLayout from '@singularity/core/SingularityPageCardLayout';
import { useEffect, useState } from 'react';
import useThemeMediaQuery from '@singularity/hooks/useThemeMediaQuery';
import DemoHeader from '../../../components/DemoHeader';
import DemoContent from '../../../components/DemoContent';
import DemoSidebar from '../../../components/DemoSidebar';

const Root = styled(SingularityPageCardLayout)(() => ({
	'& .SingularityPageCardLayout-header': {},
	'& .SingularityPageCardLayout-toolbar': {},
	'& .SingularityPageCardLayout-content': {},
	'& .SingularityPageCardLayout-sidebarHeader': {},
	'& .SingularityPageCardLayout-sidebarContent': {}
}));

/**
 * The CardLayoutWithSidebarsNormalScroll page.
 */
function CardLayoutWithSidebarsNormalScrollComponent() {
	const isMobile = useThemeMediaQuery((theme) => theme.breakpoints.down('lg'));

	const [leftSidebarOpen, setLeftSidebarOpen] = useState(!isMobile);
	const [rightSidebarOpen, setRightSidebarOpen] = useState(!isMobile);

	useEffect(() => {
		setLeftSidebarOpen(!isMobile);
		setRightSidebarOpen(!isMobile);
	}, [isMobile]);

	return (
		<Root
			header={
				<DemoHeader
					leftSidebarToggle={() => {
						setLeftSidebarOpen(!leftSidebarOpen);
					}}
					rightSidebarToggle={() => {
						setRightSidebarOpen(!rightSidebarOpen);
					}}
				/>
			}
			content={<DemoContent />}
			leftSidebarOpen={leftSidebarOpen}
			leftSidebarOnClose={() => {
				setLeftSidebarOpen(false);
			}}
			leftSidebarContent={<DemoSidebar />}
			rightSidebarOpen={rightSidebarOpen}
			rightSidebarOnClose={() => {
				setRightSidebarOpen(false);
			}}
			rightSidebarContent={<DemoSidebar />}
			scroll="normal"
		/>
	);
}

export default CardLayoutWithSidebarsNormalScrollComponent;
