'use client';

import IconButton from '@mui/material/IconButton';
import clsx from 'clsx';
import { useEffect, useState } from 'react';
import SingularityNavigation from '@singularity/core/SingularityNavigation';
import { styled } from '@mui/material/styles';
import useThemeMediaQuery from '@singularity/hooks/useThemeMediaQuery';
import SingularitySvgIcon from '@singularity/core/SingularitySvgIcon';
import SingularitySimpleLayout from '@singularity/core/SingularitySimpleLayout';
import usePathname from '@singularity/hooks/usePathname';
import { Button } from '@mui/material';
import Link from '@singularity/core/Link';
import PageBreadcrumb from 'src/components/PageBreadcrumb';
import DocumentationNavigation from '../DocumentationNavigation';
import DocumentationSidebarHeader from './DocumentationSidebarHeader';
import MainProjectSelection from '@/components/MainProjectSelection';

const Root = styled(SingularitySimpleLayout)(({ theme }) => ({
  '& [class^="language-"]': {
    margin: 0,
  },
  marginLeft: '4px ',
  marginRight: '35px',
  paddingTop: '0px',
}));

const SidebarContent = styled('div')(({ theme }) => ({
  pl: '66px',
  py: 6,
  backgroundColor: '#f7f7f9',
  
  '& .navigation': {
    '& > .MuiList-root': {
      backgroundColor: '#f7f7f9',
    },
    
    '& .item-badge': {
      backgroundColor: '#4CAF50 !important',
      color: 'white !important',
      border: 'none !important',
      padding: '2px 8px',
      borderRadius: '12px',
      fontSize: '0.75rem',
      fontWeight: 'bold',
      display: 'inline-flex',
      alignItems: 'center',
    },
  }
}));

type DocumentationLayoutProps = {
  children: React.ReactNode;
};

function DocumentationLayout(props: DocumentationLayoutProps) {
  const { children } = props;
  const isMobile = useThemeMediaQuery((theme) => theme.breakpoints.down('lg'));
  const pathname = usePathname();
  const [leftSidebarOpen, setLeftSidebarOpen] = useState(!isMobile);

  useEffect(() => {
    setLeftSidebarOpen(!isMobile);
  }, [isMobile]);

  useEffect(() => {
    if (isMobile) {
      setLeftSidebarOpen(false);
    }
  }, [pathname, isMobile]);

  return (
    <Root
      header={
        <div className="bg-white border-b border-gray-200">
          <div 
            className={clsx(
              "flex items-center justify-between px-4 py-4",
              isMobile 
                ? "flex-col space-y-3" 
                : "flex-row space-y-0"
            )}
          >
            {/* LEFT SIDE: Project + Menu + Breadcrumb */}
            <div className="flex items-center space-x-3 flex-1 min-w-0">
              {/* Project Selector - WIDER */}
              <div className="min-w-[180px]">
                <MainProjectSelection />
              </div>
              
              {/* Hamburger Menu */}
              <IconButton
                onClick={() => setLeftSidebarOpen(!leftSidebarOpen)}
                aria-label="toggle left sidebar"
                size="small"
              >
                <SingularitySvgIcon size={18}>heroicons-outline:bars-3</SingularitySvgIcon>
              </IconButton>
              
              {/* Breadcrumb - Better mobile wrapping */}
              <div className={clsx(
                "flex-1 min-w-0",
                isMobile ? "mt-2" : ""
              )}>
                <PageBreadcrumb
                  skipHome
                  maxItems={isMobile ? 2 : 5}
                  className={clsx(
                    isMobile 
                      ? "text-sm [&>span]:line-clamp-1" 
                      : "text-base"
                  )}
                />
              </div>
            </div>

            {/* RIGHT SIDE: Compact Return Button */}
            <div className="flex shrink-0">
              <Button
                className="whitespace-nowrap min-w-0 px-3 py-1.5 text-sm"
                component={Link}
                to="/"
                variant="contained"
                startIcon={
                  <SingularitySvgIcon size={14}>heroicons-outline:arrow-turn-left-up</SingularitySvgIcon>
                }
                color="primary"
                size="small"
              >
                Dashboard
              </Button>
            </div>
          </div>
        </div>
      }
      content={
        <div className="p-4 md:p-6 min-h-full flex flex-auto flex-col">
          <div className="flex flex-col flex-1 relative pb-8 prose max-w-3xl dark:prose-invert">
            {children}
          </div>
        </div>
      }
      leftSidebarContent={
        <SidebarContent>
          <DocumentationSidebarHeader className="mb-8 px-4" />
          <SingularityNavigation
            className={clsx('navigation')}
            navigation={DocumentationNavigation.children}
          />
        </SidebarContent>
      }
      leftSidebarOpen={leftSidebarOpen}
      leftSidebarWidth={400}
      leftSidebarOnClose={() => {
        setLeftSidebarOpen(false);
      }}
      scroll={isMobile ? 'normal' : 'content'}
    />
  );
}

export default DocumentationLayout;