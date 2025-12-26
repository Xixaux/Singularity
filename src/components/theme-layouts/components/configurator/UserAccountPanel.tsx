'use client';

import { styled, useTheme } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import Slide from '@mui/material/Slide';
import { SwipeableHandlers } from 'react-swipeable';
import SingularityScrollbars from '@singularity/core/SingularityScrollbars';
import IconButton from '@mui/material/IconButton';
import SingularitySvgIcon from '@singularity/core/SingularitySvgIcon';
import Typography from '@mui/material/Typography';

const StyledDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialog-paper': {
    position: 'fixed',
    width: 380,
    maxWidth: '90vw',
    backgroundColor: theme.vars.palette.background.paper,
    top: 0,
    height: '100%',
    minHeight: '100%',
    bottom: 0,
    right: 0,
    margin: 0,
    zIndex: 1000,
    borderRadius: 0,
  },
}));

type TransitionProps = {
  children?: React.ReactElement;
  ref?: React.RefObject<HTMLDivElement>;
};

function Transition(props: TransitionProps) {
  const { children, ref, ...other } = props;
  const theme = useTheme();

  if (!children) {
    return null;
  }

  return (
    <Slide
      direction={theme.direction === 'ltr' ? 'left' : 'right'}
      ref={ref}
      {...other}
    >
      {children}
    </Slide>
  );
}

type UserAccountPanelProps = {
  userAccountHandlers: SwipeableHandlers;
  onClose: () => void;
  open: boolean;
};

function UserAccountPanel(props: UserAccountPanelProps) {
  const { userAccountHandlers, onClose, open } = props;

  return (
    <StyledDialog
      TransitionComponent={Transition}
      aria-labelledby="user-account-panel"
      aria-describedby="user-account"
      open={open}
      onClose={onClose}
      slotProps={{
        backdrop: {
          invisible: true,
        },
      }}
      classes={{
        paper: 'shadow-lg',
      }}
      {...userAccountHandlers}
    >
      <SingularityScrollbars className="p-4 sm:p-6">
        <IconButton
          className="fixed top-0 z-10 ltr:right-0 rtl:left-0"
          onClick={onClose}
          size="large"
        >
          <SingularitySvgIcon>heroicons-outline:x-mark</SingularitySvgIcon>
        </IconButton>

        <Typography className="mb-8" variant="h6">
          User Account
        </Typography>

        {}
      </SingularityScrollbars>
    </StyledDialog>
  );
}

export default UserAccountPanel;