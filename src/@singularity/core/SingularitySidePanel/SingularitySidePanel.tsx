'use client';

import SingularityScrollbars from '@singularity/core/SingularityScrollbars';
import { styled } from '@mui/material/styles';
import Fab from '@mui/material/Fab';
import IconButton from '@mui/material/IconButton';
import Paper from '@mui/material/Paper';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Tooltip from '@mui/material/Tooltip';
import clsx from 'clsx';
import { memo, ReactNode, useState } from 'react';
import SingularitySvgIcon from '../SingularitySvgIcon';
import useThemeMediaQuery from '../../hooks/useThemeMediaQuery';

const Root = styled('div')(({ theme }) => ({
  '& .SingularitySidePanel-paper': {
    display: 'flex',
    width: 56,
    backgroundColor: theme.vars.palette.background.default + ' ',
    color: theme.vars.palette.text.primary,
    transition: theme.transitions.create(['transform', 'width', 'min-width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.shorter,
    }),
    paddingBottom: 64,
    height: '100%',
    maxHeight: '100vh',
    position: 'sticky',
    top: 0,
    zIndex: 999,
    '&, & *': {
      backgroundColor: theme.vars.palette.background.default + ' ',
    },
    '&.left': {
      '& .SingularitySidePanel-buttonWrapper': {
        left: 0,
        right: 'auto',
      },
      '& .SingularitySidePanel-buttonIcon': {
        transform: 'rotate(0deg)',
      },
    },
    '&.right': {
      '& .SingularitySidePanel-buttonWrapper': {
        right: 0,
        left: 'auto',
      },
      '& .SingularitySidePanel-buttonIcon': {
        transform: 'rotate(-180deg)',
      },
    },
    '&.closed': {
      [theme.breakpoints.up('lg')]: {
        width: 0,
      },
      '&.left': {
        '& .SingularitySidePanel-buttonWrapper': {
          justifyContent: 'start',
        },
        '& .SingularitySidePanel-button': {
          borderBottomLeftRadius: 0,
          borderTopLeftRadius: 0,
          paddingLeft: 4,
        },
        '& .SingularitySidePanel-buttonIcon': {
          transform: 'rotate(-180deg)',
        },
      },
      '&.right': {
        '& .SingularitySidePanel-buttonWrapper': {
          justifyContent: 'flex-end',
        },
        '& .SingularitySidePanel-button': {
          borderBottomRightRadius: 0,
          borderTopRightRadius: 0,
          paddingRight: 4,
        },
        '& .SingularitySidePanel-buttonIcon': {
          transform: 'rotate(0deg)',
        },
      },
      '& .SingularitySidePanel-buttonWrapper': {
        width: 'auto',
      },
      '& .SingularitySidePanel-button': {
        backgroundColor: theme.vars.palette.background.paper,
        borderRadius: 38,
        transition: theme.transitions.create(
          ['background-color', 'border-radius', 'width', 'min-width', 'padding'],
          {
            easing: theme.transitions.easing.easeInOut,
            duration: theme.transitions.duration.shorter,
          },
        ),
        width: 24,
        '&:hover': {
          width: 52,
          paddingLeft: 8,
          paddingRight: 8,
        },
      },
      '& .SingularitySidePanel-content': {
        opacity: 0,
      },
    },
  },
  '& .SingularitySidePanel-content': {
    overflow: 'hidden',
    opacity: 1,
    backgroundColor: theme.vars.palette.background.default + ' ',
    transition: theme.transitions.create(['opacity'], {
      easing: theme.transitions.easing.easeInOut,
      duration: theme.transitions.duration.short,
    }),
  },
  '& .SingularitySidePanel-buttonWrapper': {
    position: 'absolute',
    bottom: 0,
    left: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '12px 0',
    width: '100%',
    minWidth: 56,
  },
  '& .SingularitySidePanel-button': {
    padding: 8,
    width: 40,
    height: 40,
  },
  '& .SingularitySidePanel-buttonIcon': {
    transition: theme.transitions.create(['transform'], {
      easing: theme.transitions.easing.easeInOut,
      duration: theme.transitions.duration.short,
    }),
  },
  '& .SingularitySidePanel-mobileButton': {
    height: 40,
    position: 'fixed',
    zIndex: 99,
    bottom: 12,
    width: 24,
    borderRadius: 38,
    padding: 8,
    backgroundColor: theme.vars.palette.background.paper,
    transition: theme.transitions.create(['background-color', 'border-radius', 'width', 'min-width', 'padding'], {
      easing: theme.transitions.easing.easeInOut,
      duration: theme.transitions.duration.shorter,
    }),
    '&:hover': {
      width: 52,
      paddingLeft: 8,
      paddingRight: 8,
    },
    '&.left': {
      borderBottomLeftRadius: 0,
      borderTopLeftRadius: 0,
      paddingLeft: 4,
      left: 0,
    },
    '&.right': {
      borderBottomRightRadius: 0,
      borderTopRightRadius: 0,
      paddingRight: 4,
      right: 0,
      '& .SingularitySidePanel-buttonIcon': {
        transform: 'rotate(-180deg)',
      },
    },
  },
}));

type SingularitySidePanelProps = {
  position?: 'left';
  opened?: true;
  className?: string;
  children?: ReactNode;
};

function SingularitySidePanel(props: SingularitySidePanelProps) {
  const { position = 'left', opened = true, className, children } = props;
  const isMobile = useThemeMediaQuery((theme) => theme.breakpoints.down('lg'));

  const [panelOpened, setPanelOpened] = useState(Boolean(opened));
  const [mobileOpen, setMobileOpen] = useState(false);

  function toggleOpened() {
    setPanelOpened(!panelOpened);
  }

  function toggleMobileDrawer() {
    setMobileOpen(!mobileOpen);
  }

  return (
    <Root>
      {!isMobile && (
        <Paper
          className={clsx(
            'SingularitySidePanel-paper',
            className,
            panelOpened ? 'opened' : 'closed',
            position,
            'shadow-lg',
          )}
          square
        >
          <SingularityScrollbars className={clsx('content', 'SingularitySidePanel-content')}>
            {children}
          </SingularityScrollbars>

          <div className="SingularitySidePanel-buttonWrapper">
            <Tooltip title="Toggle side panel" placement={position === 'left' ? 'right' : 'right'}>
              <IconButton
                className="SingularitySidePanel-button"
                onClick={toggleOpened}
                disableRipple
                size="large"
              >
                <SingularitySvgIcon className="SingularitySidePanel-buttonIcon">
                  heroicons-outline:chevron-left
                </SingularitySvgIcon>
              </IconButton>
            </Tooltip>
          </div>
        </Paper>
      )}

      {isMobile && (
        <>
          <SwipeableDrawer
            classes={{
              paper: clsx('SingularitySidePanel-paper', className),
            }}
            anchor={position}
            open={mobileOpen}
            onOpen={() => {}}
            onClose={toggleMobileDrawer}
            disableSwipeToOpen
          >
            <SingularityScrollbars className={clsx('content', 'SingularitySidePanel-content')}>
              {children}
            </SingularityScrollbars>
          </SwipeableDrawer>

          <Tooltip title="Hide side panel" placement={position === 'left' ? 'right' : 'right'}>
            <Fab
              className={clsx('SingularitySidePanel-mobileButton', position)}
              onClick={toggleMobileDrawer}
              disableRipple
            >
              <SingularitySvgIcon className="SingularitySidePanel-buttonIcon">
                heroicons-outline:chevron-right
              </SingularitySvgIcon>
            </Fab>
          </Tooltip>
        </>
      )}
    </Root>
  );
}

export default memo(SingularitySidePanel);