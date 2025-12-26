'use client';

import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import clsx from 'clsx';
import SingularitySvgIcon from '@singularity/core/SingularitySvgIcon';
import SingularityNavLink from '@singularity/core/SingularityNavLink';
import { formatDistanceToNow } from 'date-fns/formatDistanceToNow';
import { MouseEvent, memo, useEffect, useRef } from 'react';
import { darken, ThemeProvider, useTheme } from '@mui/material/styles';
import { green, blue, red, orange, yellow } from '@mui/material/colors';
import { useContrastMainTheme } from '@singularity/core/SingularitySettings/hooks/SingularityThemeHooks';
import { Notification } from '@/app/(control-panel)/apps/notifications/NotificationApi';
import sanitizeHtml from 'sanitize-html';

type NotificationVariant = 'success' | 'info' | 'error' | 'warning' | 'primary' | 'secondary' | 'alert';

type NotificationCardProps = {
    item: Notification;
    className?: string;
    onClose: (T: string) => void;
};

const variantBgColors: Record<NotificationVariant, string> = {
    success: green[600],
    info: blue[700],
    error: red[600],
    warning: orange[600],
    alert: yellow[700],
    primary: '',
    secondary: '',
};

function NotificationCard({ item, className, onClose }: NotificationCardProps) {
    const theme = useTheme();
    const prevItemRef = useRef<Notification | null>(null);
    const descriptionRef = useRef<HTMLDivElement | null>(null);

    const defaultBgColor = theme.palette.grey[200];
    const variant: NotificationVariant = (item.variant || 'info') as NotificationVariant;

    let bgColor: string;
    if (variant === 'primary') {
        bgColor = theme.palette.primary.dark;
    } else if (variant === 'secondary') {
        bgColor = theme.palette.secondary.dark;
    } else {
        bgColor = variantBgColors[variant] || defaultBgColor;
    }

    const contrastTheme = useContrastMainTheme(bgColor);
    const textColor = contrastTheme.palette.text.primary;

    useEffect(() => {
        console.log('NotificationCard rendered:', {
            id: item.id,
            variant,
            bgColor,
            textColor,
            themeMode: theme.palette.mode,
        });
    }, [item.id, variant, bgColor, textColor, theme.palette.mode]);

    useEffect(() => {
        if (prevItemRef.current && prevItemRef.current !== item) {
            console.log('NotificationCard prop change:', {
                id: item.id,
                oldVariant: prevItemRef.current.variant,
                newVariant: variant,
                bgColor,
                themeMode: theme.palette.mode,
            });
        }
        prevItemRef.current = item;
    }, [item, bgColor, variant, theme.palette.mode]);

    const handleClose = (ev: MouseEvent<HTMLButtonElement>) => {
        ev.preventDefault();
        ev.stopPropagation();

        if (onClose) {
            onClose(item?.id);
        }
    };

    const sanitizedDescription = item.description
        ? sanitizeHtml(item.description, {
              allowedTags: ['b', 'i', 'em', 'strong', 'a'],
              allowedAttributes: { a: ['href'] },
              disallowedTagsMode: 'discard',
          })
        : '';

    return (
        <ThemeProvider theme={contrastTheme}>
            <Card
                className={clsx('relative flex min-h-16 items-center space-x-2 rounded-xl p-5 shadow-sm', className)}
                sx={{
                    backgroundColor: bgColor,
                    color: textColor,
                    boxShadow: '0 1px 2px rgba(0, 0, 0, 0.1)',
                    transition: 'box-shadow 0.3s',
                    '&:hover': { boxShadow: '0 2px 4px rgba(0, 0, 0, 0.15)' },
                    ...(item.link ? { '&:hover': { backgroundColor: darken(bgColor, 0.05) } } : {}),
                }}
                elevation={0}
                component={item.link ? SingularityNavLink : 'div'}
                to={item.link || ''}
                role={item.link && 'button'}
            >
                {item.icon && !item.image && (
                    <Box
                        sx={{ backgroundColor: darken(bgColor, 0.1) }}
                        className="mr-3 flex h-8 w-8 shrink-0 items-center justify-center rounded-full"
                    >
                        <SingularitySvgIcon
                            className="opacity-90"
                            color={textColor}
                            size={20}
                        >
                            {item.icon}
                        </SingularitySvgIcon>
                    </Box>
                )}

                {item.image && (
                    <img
                        className="mr-3 h-8 w-8 shrink-0 overflow-hidden rounded-full object-cover object-center"
                        src={item.image}
                        alt="Notification"
                    />
                )}

                <div className="flex flex-auto flex-col">
                    {item.title && (
                        <Typography className="line-clamp-1 font-semibold" sx={{ color: textColor }}>
                            {item.title}
                        </Typography>
                    )}

                    {sanitizedDescription && (
                        <div
                            ref={descriptionRef}
                            className="line-clamp-2 notification-description"
                            sx={{
                                color: textColor,
                                '&, & *': { color: textColor },
                            }}
                            dangerouslySetInnerHTML={{ __html: sanitizedDescription }}
                        />
                    )}

                    {item.time && (
                        <Typography
                            className="mt-2 text-sm leading-none opacity-60"
                            sx={{ color: textColor }}
                        >
                            {formatDistanceToNow(new Date(item.time), { addSuffix: true })}
                        </Typography>
                    )}
                </div>

                <IconButton
                    disableRipple
                    className="absolute right-0 top-0 p-2"
                    size="small"
                    onClick={handleClose}
                >
                    <SingularitySvgIcon
                        size={12}
                        className="opacity-75"
                        color={textColor}
                    >
                        heroicons-solid:x-mark
                    </SingularitySvgIcon>
                </IconButton>
                {item.children}
            </Card>
        </ThemeProvider>
    );
}

export default memo(NotificationCard);