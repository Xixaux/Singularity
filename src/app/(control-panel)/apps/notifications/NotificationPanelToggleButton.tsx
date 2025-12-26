'use client';

import Badge from '@mui/material/Badge';
import IconButton from '@mui/material/IconButton';
import SvgIcon from '@mui/material/SvgIcon';
import { useAppDispatch } from 'src/store/hooks';
import { BellIcon } from '@heroicons/react/24/outline';
import { ReactNode, useEffect, useRef, useState } from 'react';
import { motion, useAnimation } from 'motion/react';
import { useTheme } from '@mui/material/styles';
import clsx from 'clsx';
import { toggleNotificationPanel } from './notificationPanelSlice';
import { useGetAllNotificationsQuery } from './NotificationApi';

type NotificationPanelToggleButtonProps = {
  className?: string;
  children?: ReactNode;
};

/**
 * The notification panel toggle button.
 */
function NotificationPanelToggleButton(props: NotificationPanelToggleButtonProps) {
  const {
    className = '',
    children,
  } = props;
  const { data: notifications } = useGetAllNotificationsQuery();
  const [animate, setAnimate] = useState(false);
  const prevNotificationCount = useRef(notifications?.length);
  const theme = useTheme();
  const dispatch = useAppDispatch();
  const controls = useAnimation();

  const iconColor = theme.palette.icon.primary || theme.palette.text.primary;

  const defaultIcon = (
    <SvgIcon
      sx={{
        color: iconColor,
        fontSize: 18,
      }}
    >
      <BellIcon
        style={{
          width: 18,
          height: 18,
          stroke: iconColor,
          fill: 'none',
        }}
      />
    </SvgIcon>
  );

  useEffect(() => {
    if (animate) {
      controls.start({
        rotate: [0, 20, -20, 0],
        color: [theme.palette.secondary.main],
        transition: { duration: 0.2, repeat: 5 },
      });
    } else {
      controls.start({
        rotate: 0,
        scale: 1,
        color: iconColor,
      });
    }
  }, [animate, controls, iconColor, theme.palette.secondary.main]);

  useEffect(() => {
    if (notifications?.length > prevNotificationCount.current) {
      setAnimate(true);
      const timer = setTimeout(() => setAnimate(false), 1000); // Reset after 1 second
      return () => clearTimeout(timer);
    }

    prevNotificationCount.current = notifications?.length;
    return undefined;
  }, [notifications?.length]);

  return (
    <IconButton
      onClick={() => dispatch(toggleNotificationPanel())}
      className={clsx(className)}
      sx={{
        color: iconColor,
        backgroundColor: 'transparent ',
        '& svg': {
          color: iconColor,
          stroke: iconColor,
          fill: 'none',
        },
      }}
    >
      <Badge
        color="secondary"
        variant="dot"
        invisible={notifications?.length === 0}
      >
        <motion.div animate={controls}>{children || defaultIcon}</motion.div>
      </Badge>
    </IconButton>
  );
}

export default NotificationPanelToggleButton;