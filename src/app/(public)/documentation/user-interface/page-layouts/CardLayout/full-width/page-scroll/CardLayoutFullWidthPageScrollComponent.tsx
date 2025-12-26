'use client';

import { styled } from '@mui/material/styles';
import SingularityPageCardLayout from '@singularity/core/SingularityPageCardLayout';
import DemoHeader from '../../../components/DemoHeader';
import DemoContent from '../../../components/DemoContent';

const Root = styled(SingularityPageCardLayout)({
	'& .SingularityPageCardLayout-header': {},
	'& .SingularityPageCardLayout-toolbar': {},
	'& .SingularityPageCardLayout-content': {},
	'& .SingularityPageCardLayout-sidebarHeader': {},
	'& .SingularityPageCardLayout-sidebarContent': {}
});

/**
 * The CardLayoutFullWidthPageScroll page.
 */
function CardLayoutFullWidthPageScrollComponent() {
	return (
		<Root
			header={<DemoHeader />}
			content={<DemoContent />}
			scroll="page"
		/>
	);
}

export default CardLayoutFullWidthPageScrollComponent;
