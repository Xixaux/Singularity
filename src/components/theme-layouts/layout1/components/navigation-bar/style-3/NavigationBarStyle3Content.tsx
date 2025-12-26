'use client';

import SingularityScrollbars from '@singularity/core/SingularityScrollbars';
import { styled } from '@mui/material/styles';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import clsx from 'clsx';
import { memo, useEffect, useState } from 'react';
import { useAppDispatch } from 'src/store/hooks';
import SingularityNavigation from '@singularity/core/SingularityNavigation';
import useThemeMediaQuery from '@singularity/hooks/useThemeMediaQuery';
import isUrlInChildren from '@singularity/core/SingularityNavigation/isUrlInChildren';
import { Theme } from '@mui/system';
import { SingularityNavItemType } from '@singularity/core/SingularityNavigation/types/SingularityNavItemType';
import { NavigationBarSliceCloseMobile } from 'src/components/theme-layouts/components/navigation-bar/NavigationBarSlice';
import UserMenu from 'src/components/theme-layouts/components/UserMenu';
import usePathname from '@singularity/hooks/usePathname';
import useNavigation from '@/components/theme-layouts/components/navigation/hooks/useNavigation';
import useSingularityLayoutSettings from '@singularity/core/SingularityLayout/useSingularityLayoutSettings';
import { Layout1ConfigDefaultsType } from '@/components/theme-layouts/layout1/Layout1Config';
import { ChartBarIcon, CubeIcon, DocumentTextIcon } from '@heroicons/react/24/outline';
import { List, ListItem, ListItemIcon } from '@mui/material';

const Root = styled('div')(({ theme }) => ({
  '#singularity-left-side-panel, #singularity-NavigationBarSlice-side-panel, #singularity-NavigationBarSlice-side-panel *, .singularity-side-panel, .singularity-side-panel *': {
    backgroundColor: 'var(--transparent)',
  },
  '& .navigation, & .navigation *, & .navigation-shortcuts, & .navigation-shortcuts *': {
    backgroundColor: 'var(--transparent)',
  },
}));

const ToolbarContainer = styled('div')(({ theme }) => ({
  width: '80px',
  height: '100vh',
  borderRight: `1px solid ${theme.palette.divider}`,
  backgroundColor: theme.palette.background.paper,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
}));

type StyledPanelProps = {
  theme?: Theme;
  opened?: boolean;
};

const StyledPanel = styled(SingularityScrollbars)<StyledPanelProps>(({ theme }) => ({
  backgroundColor: 'var(--transparent)',
  transition: theme.transitions.create(['opacity'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.shortest,
  }),
  opacity: 0,
  pointerEvents: 'none',
  minHeight: 0,
  width: '280px',
  variants: [
    {
      props: ({ opened }) => opened,
      style: {
        opacity: 1,
        pointerEvents: 'initial',
      },
    },
  ],
}));

function needsToBeOpened(pathname: string, item: SingularityNavItemType) {
  return pathname && isUrlInChildren(item, pathname);
}

type NavigationBarStyle3ContentProps = { className?: string; dense?: number };

const toolbarItems: SingularityNavItemType[] = [
  { id: 'dashboards', title: 'Dashboards', type: 'item' },
  { id: 'applications', title: 'Applications', type: 'item' },
  { id: 'pages', title: 'Pages', type: 'item' },
];

function NavigationBarStyle3Content(props: NavigationBarStyle3ContentProps) {
  const { className = '', dense = false } = props;
  const isMobile = useThemeMediaQuery((theme) => theme.breakpoints.down('lg'));
  const { navigation } = useNavigation();
  const [selectedNavigation, setSelectedNavigation] = useState<SingularityNavItemType[]>([]);
  const [panelOpen, setPanelOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('dashboards');
  const dispatch = useAppDispatch();
  const pathname = usePathname();
  const { config } = useSingularityLayoutSettings();
  const isStyle3 = config.NavigationBarSlice.style === 'style-3' || config.NavigationBarSlice.style === 'style-3-dense';

  useEffect(() => {
    navigation?.forEach((item) => {
      if (needsToBeOpened(pathname, item)) {
        setSelectedNavigation([item]);
        setActiveSection(item.id.toLowerCase());
      }
    });
  }, [navigation, pathname]);

  function handleParentItemClick(selected: SingularityNavItemType) {
    if (!selected.children) {
      setSelectedNavigation([]);
      setPanelOpen(false);
      return;
    }

    if (selectedNavigation[0]?.id === selected.id) {
      setPanelOpen(!panelOpen);
    } else {
      setSelectedNavigation([selected]);
      setPanelOpen(true);
    }
  }

  function handleChildItemClick() {
    setPanelOpen(false);

    if (isMobile) {
      dispatch(NavigationBarSliceCloseMobile());
    }
  }

  function handleToolbarItemClick(item: SingularityNavItemType) {
    setActiveSection(item.id.toLowerCase());
    setSelectedNavigation(navigation.filter(nav => nav.id.toLowerCase() === item.id.toLowerCase()));
    setPanelOpen(true);
  }

  // Filter navigation based on active section
  const filteredNavigation = navigation.filter(item => item.id.toLowerCase() === activeSection);

  return (
    <ClickAwayListener onClickAway={() => setPanelOpen(false)}>
      <Root className={clsx('flex h-full flex-auto navigation', className)}>
        <ToolbarContainer id="singularity-NavigationBarSlice-side-panel">
          <img
            className="my-2 w-11"
            src="/assets/images/logo/logo.svg"
            alt="logo"
          />

          <SingularityScrollbars
            className="flex flex-col min-h-0 w-full flex-1 justify-start overflow-y-auto overflow-x-hidden"
            option={{
              suppressScrollX: true,
              wheelPropagation: false,
            }}
            sx={{ backgroundColor: 'var(--transparent)' }}
          >
            {isStyle3 && (
              <List className={clsx('navigation shrink-0', 'singularity-toolbar')}>
                {toolbarItems.map(item => (
                  <ListItem
                    key={item.id}
                    button={true}
                    onClick={() => handleToolbarItemClick(item)}
                    selected={activeSection === item.id.toLowerCase()}
                    sx={{
                      padding: dense ? '2px 6px' : '4px 8px',
                      margin: '4px 0',
                      minHeight: 'auto',
                      '&.Mui-selected': {
                        backgroundColor: theme => theme.palette.action.selected,
                      },
                    }}
                  >
                    <ListItemIcon
                      sx={{
                        minWidth: dense ? '32px' : '36px',
                        height: dense ? '32px' : '36px',
                        margin: '0 auto 4px auto',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        color: theme => theme.palette.mode === 'dark' ? theme.palette.primary.contrastText : theme.palette.primary.main,
                        '& svg': {
                          width: dense ? '32px' : '36px',
                          height: dense ? '32px' : '36px',
                          imageRendering: 'crisp-edges',
                        },
                      }}
                    >
                      {item.id === 'dashboards' && <ChartBarIcon className={dense ? 'h-8 w-8' : 'h-9 w-9'} />}
                      {item.id === 'applications' && <CubeIcon className={dense ? 'h-8 w-8' : 'h-9 w-9'} />}
                      {item.id === 'pages' && <DocumentTextIcon className={dense ? 'h-8 w-8' : 'h-9 w-9'} />}
                    </ListItemIcon>
                  </ListItem>
                ))}
              </List>
            )}
            {!isStyle3 && (
              <SingularityNavigation
                className={clsx('navigation shrink-0 min-h-full')}
                navigation={filteredNavigation}
                layout="vertical-2"
                onItemClick={handleParentItemClick}
                firstLevel
                selectedId={selectedNavigation[0]?.id}
                dense={Boolean(dense)}
                sx={{
                  '& .MuiListItem-root': {
                    padding: '4px 8px',
                    margin: '4px 0',
                    minHeight: 'auto',
                  },
                  '& .MuiListItemIcon-root': {
                    minWidth: '32px',
                    height: '32px',
                    margin: '0 auto 4px auto',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    '& svg': {
                      width: '32px',
                      height: '32px',
                    },
                  },
                  '& .MuiListItemText-root': {
                    margin: 0,
                  },
                  '& .MuiListItemText-primary': {
                    fontSize: '0.75rem',
                    lineHeight: '1.2',
                    textAlign: 'center',
                  },
                  '& .MuiListSubheader-root': {
                    display: 'none',
                  },
                }}
              />
            )}
          </SingularityScrollbars>

          <div className="flex shrink-0 justify-center w-full py-2">
            <UserMenu className="" />
          </div>
        </ToolbarContainer>

        {selectedNavigation.length > 0 && (
          <StyledPanel
            id="singularity-NavigationBarSlice-panel"
            opened={panelOpen}
            className={clsx('overflow-y-auto overflow-x-hidden shadow-sm pt-2')}
            option={{ suppressScrollX: true, wheelPropagation: false }}
          >
            <SingularityNavigation
              className={clsx('navigation')}
              navigation={selectedNavigation}
              layout="vertical"
              onItemClick={handleChildItemClick}
              sx={{
                '& .MuiListItem-root': {
                  padding: '4px 16px',
                  minHeight: 'auto',
                },
                '& .MuiListItemIcon-root': {
                  minWidth: '24px',
                  marginRight: '8px',
                  '& svg': {
                    width: '24px',
                    height: '24px',
                  },
                },
                '& .MuiListItemText-primary': {
                  fontSize: '0.875rem',
                  lineHeight: '1.5',
                },
              }}
            />
          </StyledPanel>
        )}
      </Root>
    </ClickAwayListener>
  );
}

export default memo(NavigationBarStyle3Content);