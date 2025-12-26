'use client';

import { styled } from '@mui/material/styles';
import SingularitySimpleLayout from '@singularity/core/SingularitySimpleLayout';
import { useEffect, useState } from 'react';
import useThemeMediaQuery from '@singularity/hooks/useThemeMediaQuery';
import DemoHeader from '../../../components/DemoHeader';
import DemoContent from '../../../components/DemoContent';
import DemoSidebar from '../../../components/DemoSidebar';

const Root = styled(SingularitySimpleLayout)(({ theme }) => ({
    '& .SingularitySimpleLayout-header': {
        backgroundColor: theme.vars.palette.background.paper,
        borderBottomWidth: 1,
        borderStyle: 'solid',
        borderColor: theme.vars.palette.divider
    },
    '& .SingularitySimpleLayout-toolbar': {},
    '& .SingularitySimpleLayout-content': {},
    '& .SingularitySimpleLayout-sidebarHeader': {},
    '& .SingularitySimpleLayout-sidebarContent': {}
}));

/**
 * The SimpleWithSidebarsNormalScroll page component.
 */
function SimpleWithSidebarsNormalScrollComponent() {
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

export default SimpleWithSidebarsNormalScrollComponent;