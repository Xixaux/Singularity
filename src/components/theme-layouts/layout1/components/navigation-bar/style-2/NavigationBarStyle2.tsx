import { styled } from '@mui/material/styles';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import {
  NavigationBarSliceCloseFolded,
  NavigationBarSliceCloseMobile,
  NavigationBarSliceOpenFolded,
  resetNavigationBar,
  selectSingularityNavigationBar
} from 'src/components/theme-layouts/components/navigation-bar/NavigationBarSlice';
import { useAppDispatch, useAppSelector } from 'src/store/hooks';
import { Theme } from '@mui/system';
import { useEffect } from 'react';
import useSingularityLayoutSettings from '@singularity/core/SingularityLayout/useSingularityLayoutSettings';
import useThemeMediaQuery from '@singularity/hooks/useThemeMediaQuery';
import NavigationBarStyle2Content from './NavigationBarStyle2Content';
import { Layout1ConfigDefaultsType } from '@/components/theme-layouts/layout1/Layout1Config';

const NavigationBarSliceWidth = 280;

type StyledNavBarPropsProps = {
  theme?: Theme;
  folded: number;
  open: boolean;
};

const Root = styled('div')<StyledNavBarPropsProps>(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  zIndex: 4,
  [theme.breakpoints.up('lg')]: {
    width: NavigationBarSliceWidth,
    minWidth: NavigationBarSliceWidth
  },
  variants: [
    {
      props: ({ folded }) => folded,
      style: {
        [theme.breakpoints.up('lg')]: {
          width: 76,
          minWidth: 76
        }
      }
    }
  ]
}));

type StyledNavBarProps = {
  theme?: Theme;
  open?: boolean;
  folded: number;
  foldedandopened: number;
  foldedandclosed: number;
  position?: string;
  anchor?: string;
};

const StyledNavigationBar = styled('div')<StyledNavBarProps>(({ theme }) => ({
  minWidth: NavigationBarSliceWidth,
  width: NavigationBarSliceWidth,
  maxWidth: NavigationBarSliceWidth,
  maxHeight: '100%',
  transition: theme.transitions.create(['width', 'min-width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.shorter
  }),
  variants: [
    {
      props: {
        position: 'left'
      },
      style: {
        borderRight: `1px solid ${theme.vars.palette.divider}`,
        left: 0
      }
    },
    {
      props: {
        position: 'right'
      },
      style: {
        borderRight: `1px solid ${theme.vars.palette.divider}`,
        right: 0
      }
    },
    {
      props: ({ folded }) => folded,
      style: {
        position: 'absolute',
        width: 76,
        minWidth: 76,
        top: 0,
        bottom: 0
      }
    },
    {
      props: ({ foldedandopened }) => foldedandopened,
      style: {
        width: NavigationBarSliceWidth,
        minWidth: NavigationBarSliceWidth
      }
    },
    {
      props: ({ foldedandclosed }) => foldedandclosed,
      style: {
        '& .NavigationBarStyle2-content': {
          '& .logo-icon': {
            width: 44,
            height: 84
          },
          '& .logo-text': {
            opacity: 0
          },
          '& .react-badge': {
            opacity: 0
          },
          '& .singularity-list-item': {
            width: 52
          },
          '& .singularity-list-item-text, & .arrow-icon, & .item-badge': {
            opacity: 0
          },
          '& .singularity-list-subheader .singularity-list-subheader-text': {
            opacity: 0
          },
          '& .singularity-list-subheader:before': {
            content: '""',
            display: 'block',
            position: 'absolute',
            minWidth: 16,
            borderTop: '2px solid',
            opacity: 0.2
          },
          '& .collapse-children': {
            display: 'none'
          },
          '& .user-menu': {
            minWidth: 52,
            '& .title': {
              opacity: 0
            },
            '& .subtitle': {
              opacity: 0
            },
            '& .info-icon': {
              opacity: 0
            },
            '& .arrow': {
              opacity: 0
            }
          }
        }
      }
    }
  ]
}));

const StyledNavigationBarMobile = styled(SwipeableDrawer)<StyledNavBarProps>(({ theme }) => ({
  '& > .MuiDrawer-paper': {
    minWidth: NavigationBarSliceWidth,
    width: NavigationBarSliceWidth,
    maxWidth: NavigationBarSliceWidth,
    maxHeight: '100%',
    transition: theme.transitions.create(['width', 'min-width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.shorter
    })
  }
}));

/**
 * The NavigationBarStyle2.
 */
function NavigationBarStyle2() {
  const dispatch = useAppDispatch();
  const settings = useSingularityLayoutSettings();
  const config = settings.config as Layout1ConfigDefaultsType;
  const isMobile = useThemeMediaQuery((theme) => theme.breakpoints.down('lg'));
  const NavigationBarSlice = useAppSelector(selectSingularityNavigationBar);

  const folded = config.NavigationBarSlice?.folded;
  const foldedandclosed = folded && !NavigationBarSlice.foldedOpen;
  const foldedandopened = folded && NavigationBarSlice.foldedOpen;

  useEffect(() => {
    return () => {
      dispatch(resetNavigationBar());
    };
  }, [dispatch]);

  return (
    <Root
      folded={folded ? 1 : 0}
      open={NavigationBarSlice.open}
      id="singularity-NavigationBarSlice"
      className="sticky top-0 z-20 h-screen shrink-0 navigation"
    >
      {!isMobile && (
        <StyledNavigationBar
          className="hidden lg:flex sticky top-0 z-20 h-screen flex-auto shrink-0 flex-col overflow-hidden shadow-sm navigation"
          position={config?.NavigationBarSlice?.position}
          folded={folded ? 1 : 0}
          foldedandopened={foldedandopened ? 1 : 0}
          foldedandclosed={foldedandclosed ? 1 : 0}
          onMouseEnter={() => foldedandclosed && dispatch(NavigationBarSliceOpenFolded())}
          onMouseLeave={() => foldedandopened && dispatch(NavigationBarSliceCloseFolded())}
        >
          <NavigationBarStyle2Content className="NavigationBarStyle2-content" />
        </StyledNavigationBar>
      )}

      {isMobile && (
        <StyledNavigationBarMobile
          classes={{
            root: 'flex lg:hidden navigation',
            paper: 'flex-col flex-auto h-full navigation'
          }}
          folded={folded ? 1 : 0}
          foldedandopened={foldedandopened ? 1 : 0}
          foldedandclosed={foldedandclosed ? 1 : 0}
          anchor={config?.NavigationBarSlice?.position as 'left' | 'top' | 'right' | 'bottom'}
          variant="temporary"
          open={NavigationBarSlice.mobileOpen}
          onClose={() => dispatch(NavigationBarSliceCloseMobile())}
          onOpen={() => {}}
          disableSwipeToOpen
          ModalProps={{
            keepMounted: true // Better open performance on mobile.
          }}
        >
          <NavigationBarStyle2Content className="NavigationBarStyle2-content" />
        </StyledNavigationBarMobile>
      )}
    </Root>
  );
}

export default NavigationBarStyle2;