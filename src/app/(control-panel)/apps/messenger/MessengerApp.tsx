'use client';

import { styled } from '@mui/material/styles';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import { useEffect, useMemo, useCallback, useState } from 'react';
import SingularitySimpleLayout from '@singularity/core/SingularitySimpleLayout';
import useThemeMediaQuery from '@singularity/hooks/useThemeMediaQuery';
import usePathname from '@singularity/hooks/usePathname';
import MainSidebar from './sidebars/main/MainSidebar';
import ContactSidebar from './sidebars/contact/ContactSidebar';
import UserSidebar from './sidebars/user/UserSidebar';
import MessengerAppContext from './contexts/MessengerAppContext';

const DRAWER_WIDTH = 400;

const Root = styled(SingularitySimpleLayout)(({ theme }) => ({
  '& .container': {
    maxWidth: '100%',
    width: '100%',
    margin: '0 auto',
  },
  '& .SingularitySimpleLayout-content': {
    display: 'flex',
    flexDirection: 'column',
    flex: '1 1 100%',
    height: '100%',
    overflow: 'auto',
  },
  '& .SingularitySimpleLayout-leftSidebar': {
    [theme.breakpoints.down('lg')]: {
      width: '100%',
      maxWidth: DRAWER_WIDTH,
    },
  },
  '& .SingularitySimpleLayout-rightSidebar': {
    [theme.breakpoints.down('lg')]: {
      width: '100%',
      maxWidth: DRAWER_WIDTH,
    },
  },
  '& .message-bubble': {
    width: '85%',
    maxWidth: '600px',
    margin: theme.spacing(1, 'auto'),
    padding: theme.spacing(1, 2),
    fontSize: '0.715rem',
    [theme.breakpoints.down('lg')]: {
      width: '95%',
      fontSize: '0.7125rem',
    },
  },
}));

const StyledSwipeableDrawer = styled(SwipeableDrawer)(({ theme }) => ({
  '& .MuiDrawer-paper': {
    width: DRAWER_WIDTH,
    maxWidth: '100%',
    overflow: 'hidden',
    [theme.breakpoints.up('md')]: {
      position: 'relative',
    },
  },
}));

type MessengerAppProps = {
  children: React.ReactNode;
};

function MessengerApp({ children }: MessengerAppProps) {
  const pathname = usePathname();
  const isMobile = useThemeMediaQuery((theme) => theme.breakpoints.down('lg'));
  const [mainSidebarOpen, setMainSidebarOpen] = useState(!isMobile);
  const [contactSidebarOpen, setContactSidebarOpen] = useState<string | null>(null);
  const [userSidebarOpen, setUserSidebarOpen] = useState(false);

  const toggleMainSidebar = useCallback(() => {
    setMainSidebarOpen((prev) => !prev);
  }, []);

  const toggleContactSidebar = useCallback((contactId: string | null) => {
    setContactSidebarOpen(contactId);
  }, []);

  const toggleUserSidebar = useCallback(() => {
    setUserSidebarOpen((prev) => !prev);
  }, []);

  useEffect(() => {
    if (isMobile) {
      setMainSidebarOpen(false);
      if (userSidebarOpen) {
        setMainSidebarOpen(false);
      }
      if (contactSidebarOpen) {
        setMainSidebarOpen(false);
      }
    } else {
      setMainSidebarOpen(true);
    }
  }, [isMobile, pathname, userSidebarOpen, contactSidebarOpen]);

  const MessengerAppContextData = useMemo(
    () => ({
      setMainSidebarOpen: toggleMainSidebar,
      setContactSidebarOpen: toggleContactSidebar,
      setUserSidebarOpen: toggleUserSidebar,
      contactSidebarOpen,
    }),
    [toggleMainSidebar, toggleContactSidebar, toggleUserSidebar, contactSidebarOpen]
  );

  return (
    <MessengerAppContext value={MessengerAppContextData}>
      <Root
        content={children}
        leftSidebarContent={<MainSidebar />}
        leftSidebarOpen={mainSidebarOpen}
        leftSidebarOnClose={toggleMainSidebar}
        leftSidebarOnOpen={toggleMainSidebar}
        leftSidebarWidth={DRAWER_WIDTH}
        rightSidebarContent={<ContactSidebar />}
        rightSidebarOpen={Boolean(contactSidebarOpen)}
        rightSidebarOnClose={() => toggleContactSidebar(null)}
        rightSidebarWidth={DRAWER_WIDTH}
        scroll={isMobile ? 'normal' : 'content'}
      />
      <StyledSwipeableDrawer
        className="h-full absolute z-9999"
        variant="temporary"
        anchor="left"
        open={userSidebarOpen}
        onClose={toggleUserSidebar}
        classes={{
          paper: 'absolute left-0',
        }}
        style={{ position: 'absolute' }}
        ModalProps={{
          keepMounted: true,
          disablePortal: true,
          BackdropProps: {
            classes: {
              root: 'absolute',
            },
          },
        }}
        aria-label="User sidebar"
      >
        <UserSidebar />
      </StyledSwipeableDrawer>
    </MessengerAppContext>
  );
}

export default MessengerApp;