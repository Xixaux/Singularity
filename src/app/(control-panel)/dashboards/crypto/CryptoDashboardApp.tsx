'use client';

import { useEffect, useState } from 'react';
import SingularitySimpleLayout from '@singularity/core/SingularitySimpleLayout';
import { styled } from '@mui/material/styles';
import useThemeMediaQuery from '@singularity/hooks/useThemeMediaQuery';
import SingularityLoading from '@singularity/core/SingularityLoading';
import CryptoDashboardAppHeader from './CryptoDashboardAppHeader';
import CryptoDashboardAppSidebar from './CryptoDashboardAppSidebar';
import CryptoDashboardAppContent from './CryptoDashboardAppContent';
import CryptoDashboardAppRightSidebar from './CryptoDashboardAppRightSidebar';
import { useGetCryptoDashboardWidgetsQuery } from './CryptoDashboardApi';
import { Box } from '@mui/material';

const Root = styled(SingularitySimpleLayout)(({ theme }) => ({
  '& .SingularitySimpleLayout-root': {
    display: 'flex',
    minHeight: '100vh',
    width: '100%',
    overflow: 'visible',
  },
  '& .SingularitySimpleLayout-header': {
    backgroundColor: theme.palette.background.paper,
    borderBottom: `1px solid ${theme.palette.divider}`,
    width: '100%',
    flexShrink: 0,
  },
  '& .SingularitySimpleLayout-main': {
    flex: '1 1 auto',
    width: '100%',
    display: 'flex',
    height: '100%',
    minHeight: 0,
  },
  '& .SingularitySimpleLayout-content': {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'row',
    flex: '1 1 auto',
  },
  '& .SingularitySimpleLayout-sidebar': {
    width: { xs: '100%', lg: '320px' },
    flexShrink: 0,
  },
  '& .SingularitySimpleLayout-sidebarContent': {
    backgroundColor: theme.palette.background.default,
    width: '100%',
    height: '100%',
  },
}));

const ContentWrapper = styled(Box)({
  display: 'flex',
  flexDirection: 'row',
  width: '100%',
  height: '100%',
  flex: '1 1 auto',
});

const ChartArea = styled(Box)({
  flex: '1 1 auto',
  width: '100%',
  height: '100%',
  minHeight: 'calc(100vh - 120px)',
  bgcolor: '#e0e0e0',
});

const RightSidebarWrapper = styled(Box)(({ theme }) => ({
  width: { xs: '100%', lg: '320px' },
  flexShrink: 0,
  backgroundColor: 'theme.vars.palette.background.default',
  padding: theme.spacing(2),
  height: '100%',
}));

function CryptoDashboardApp() {
  const isMobile = useThemeMediaQuery((theme) => theme.breakpoints.down('lg'));
  const [leftSidebarOpen, setLeftSidebarOpen] = useState(!isMobile);
  const [rightSidebarOpen, setRightSidebarOpen] = useState(!isMobile);

  const { data: widgets, isLoading } = useGetCryptoDashboardWidgetsQuery();

  useEffect(() => {
    setLeftSidebarOpen(!isMobile);
    setRightSidebarOpen(!isMobile);
  }, [isMobile]);

  if (!widgets) {
    return null;
  }

  if (isLoading) {
    return <SingularityLoading />;
  }

  return (
    <Root
      header={
        <CryptoDashboardAppHeader
          onToggleLeftSidebar={() => setLeftSidebarOpen(!leftSidebarOpen)}
          onToggleRightSidebar={() => setRightSidebarOpen(!rightSidebarOpen)}
        />
      }
      leftSidebarContent={<CryptoDashboardAppSidebar />}
      leftSidebarOpen={leftSidebarOpen}
      leftSidebarOnClose={() => setLeftSidebarOpen(false)}
      leftSidebarWidth={isMobile ? '100%' : 320}
      content={
        <ContentWrapper>
          <ChartArea>
            <CryptoDashboardAppContent />
          </ChartArea>
          {rightSidebarOpen && (
            <RightSidebarWrapper>
              <CryptoDashboardAppRightSidebar />
            </RightSidebarWrapper>
          )}
        </ContentWrapper>
      }
    />
  );
}

export default CryptoDashboardApp;