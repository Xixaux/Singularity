'use client';

import { useState, useEffect } from 'react';
import SingularityScrollbars from '@singularity/core/SingularityScrollbars';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Typography from '@mui/material/Typography';
import { useSnackbar } from 'notistack';
import { useAppDispatch, useAppSelector } from 'src/store/hooks';
import SingularitySvgIcon from '@singularity/core/SingularitySvgIcon';
import Button from '@mui/material/Button';
import _ from 'lodash';
import usePathname from '@singularity/hooks/usePathname';
import NotificationCard from './NotificationCard';
import {
  closeNotificationPanel,
  selectNotificationPanelState,
  toggleNotificationPanel,
} from './notificationPanelSlice';
import {
  useCreateNotificationMutation,
  useDeleteNotificationMutation,
  useDeleteNotificationsMutation,
  useGetAllNotificationsQuery,
} from './NotificationApi';
import NotificationModel from './models/NotificationModel';
import NotificationTemplate from './NotificationTemplate';

const StyledSwipeableDrawer = styled(SwipeableDrawer)(({ theme }) => ({
  '& .MuiDrawer-paper': {
    backgroundColor: theme.vars.palette.background.default,
    width: 320,
    '&.notification-panel': {
      // Ensures the notification-panel class is applied for CSS targeting
    },
  },
}));

/**
 * The notification panel.
 */
function NotificationPanel() {
  const pathname = usePathname();
  const dispatch = useAppDispatch();
  const state = useAppSelector(selectNotificationPanelState);

  const [deleteNotification] = useDeleteNotificationMutation();
  const [deleteNotifications] = useDeleteNotificationsMutation();
  const [addNotification] = useCreateNotificationMutation();
  const { data: notifications } = useGetAllNotificationsQuery();
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  useEffect(() => {
    if (state) {
      dispatch(closeNotificationPanel());
    }
  }, [pathname, dispatch]);

  useEffect(() => {
    const item = NotificationModel({
      title: 'New Singularity React version released!',
      description: 'View the release notes for more details.',
      link: '/documentation/changelog',
      variant: 'secondary',
    });

    setTimeout(() => {
      addNotification(item);
      enqueueSnackbar(item.title, {
        key: item.id,
        autoHideDuration: 9000,
        content: (
          <NotificationTemplate
            item={item}
            onClose={() => {
              closeSnackbar(item.id);
            }}
          />
        ),
      });
    }, 2000);
  }, [addNotification, closeSnackbar, enqueueSnackbar]);

  function handleClose() {
    dispatch(closeNotificationPanel());
  }

  function handleDismiss(id: string) {
    deleteNotification(id);
  }

  function handleDismissAll() {
    deleteNotifications(notifications.map((notification) => notification.id));
  }

  function demoNotification() {
    const item = NotificationModel({ title: 'Great Job! this is awesome.' });

    addNotification(item);
    enqueueSnackbar(item.title, {
      key: item.id,
      content: (
        <NotificationTemplate
          item={item}
          onClose={() => {
            closeSnackbar(item.id);
          }}
        />
      ),
    });
  }

  return (
    <StyledSwipeableDrawer
      className="notification-panel"
      open={state}
      anchor="right"
      onOpen={() => {}}
      onClose={() => dispatch(toggleNotificationPanel())}
      disableSwipeToOpen
    >
      <IconButton
        className="absolute right-0 top-0 z-999 m-1"
        onClick={handleClose}
        size="large"
      >
        <SingularitySvgIcon color="action">heroicons-outline:x-mark</SingularitySvgIcon>
      </IconButton>

      <SingularityScrollbars className="flex flex-col p-4 h-full">
        {notifications && notifications?.length > 0 ? (
          <div className="flex flex-auto flex-col">
            <div className="mb-9 flex items-end justify-between pt-34">
              <Typography className="text-4xl font-semibold leading-none">
                Notifications
              </Typography>
              <Typography
                className="cursor-pointer text-md underline dismiss-button"
                color="secondary"
                onClick={handleDismissAll}
              >
                Dismiss
              </Typography>
            </div>
            {_.orderBy(notifications, ['time'], ['desc']).map((item) => (
              <NotificationCard
                key={item.id}
                className="mb-4"
                item={item}
                onClose={handleDismiss}
              />
            ))}
          </div>
        ) : (
          <div className="flex flex-1 items-center justify-center p-4">
            <Typography
              className="text-center text-xl"
              color="text.secondary"
            >
              There are no notifications for now.
            </Typography>
          </div>
        )}
        <div className="flex items-center justify-center py-4">
          <Button
            size="small"
            variant="outlined"
            onClick={demoNotification}
          >
            Create a notification example
          </Button>
        </div>
      </SingularityScrollbars>
    </StyledSwipeableDrawer>
  );
}

export default NotificationPanel;