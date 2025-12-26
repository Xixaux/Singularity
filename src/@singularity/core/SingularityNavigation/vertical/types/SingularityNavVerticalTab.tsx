'use client';
import SingularityNavLink from '@singularity/core/SingularityNavLink';
import { styled, useTheme } from '@mui/material/styles';
import Tooltip from '@mui/material/Tooltip';
import ListItemText from '@mui/material/ListItemText';
import clsx from 'clsx';
import { useMemo, useRef, useEffect } from 'react';
import Box from '@mui/material/Box';
import { ListItemButton } from '@mui/material';
import Typography from '@mui/material/Typography';
import SingularityNavBadge from '../../SingularityNavBadge';
import SingularitySvgIcon from '../../../SingularitySvgIcon';
import { SingularityNavigationProps } from '../../SingularityNavigation';
import { SingularityNavItemComponentProps } from '../../SingularityNavItem';

const Root = styled(Box)(({ theme }) => ({
    '& > .singularity-list-item': {
        minHeight: 100,
        height: 100,
        width: 100,
        borderRadius: 12,
        margin: '0 0 4px 0',
        cursor: 'pointer',
        textDecoration: 'none ',
        padding: 0,
        color: 'inherit',
        '&.dense': {
            minHeight: 52,
            height: 52,
            width: 52,
        },
        '&.type-divider': {
            padding: 0,
            height: 2,
            minHeight: 2,
            margin: '12px 0',
            backgroundColor: theme.vars.palette.divider,
            pointerEvents: 'none',
        },
        '&:hover': {
            backgroundColor: theme.vars.palette.action.hover,
            color: 'inherit',
        },
        '&.active': {
            backgroundColor: theme.vars.palette.action.selected,
            color: 'inherit',
            transition: 'border-radius .15s cubic-bezier(0.4,0.0,0.2,1)',
            '& .singularity-list-item-text-primary': {
                color: 'inherit',
            },
            '& .singularity-list-item-icon': {
                color: 'inherit',
            },
        },
        '& .singularity-list-item-icon': {
            color: 'inherit',
        },
        '& .singularity-list-item-text': {
            color: 'inherit',
        },
        '& .singularity-list-item-text-primary': {
            color: 'inherit',
        },
    },
}));

export type SingularityNavVerticalTabProps = Omit<SingularityNavigationProps, 'navigation'> &
    SingularityNavItemComponentProps;

/**
 * The `SingularityNavVerticalTab` component renders vertical navigation item with an adaptable
 * layout to be used within the `SingularityNavigation`. It only supports the `type`s of 'item',
 * 'selection' and 'divider'
 */
function SingularityNavVerticalTab(props: SingularityNavVerticalTabProps) {
    const { item, onItemClick, firstLevel, dense, selectedId, checkPermission } = props;
    const component = item.url ? SingularityNavLink : 'li';
    const theme = useTheme();
    const rootRef = useRef<HTMLDivElement>(null);
    const buttonRef = useRef<HTMLLIElement | HTMLAnchorElement>(null);
    const textRef = useRef<HTMLSpanElement>(null);


    useEffect(() => {
        const styles = {
            root: rootRef.current ? window.getComputedStyle(rootRef.current).backgroundColor : 'N/A',
            button: buttonRef.current ? window.getComputedStyle(buttonRef.current).backgroundColor : 'N/A',
            text: textRef.current ? window.getComputedStyle(textRef.current).backgroundColor : 'N/A',
            parent: rootRef.current?.parentElement
                ? window.getComputedStyle(rootRef.current.parentElement).backgroundColor
                : 'N/A',
        };
        console.log('SingularityNavVerticalTab Info:', {
            themeMode: theme.palette.mode,
            background: theme.palette.background.default,
            computedBackgrounds: styles,
        });
    }, [theme]);

    const itemProps = useMemo(
        () => ({
            ...(component !== 'li' && {
                disabled: item.disabled,
                to: item.url,
                end: item.end,
                role: 'button',
            }),
        }),
        [item, component],
    );

    const memoizedContent = useMemo(
        () => (
            <Root ref={rootRef}>
                <ListItemButton
                    component={component}
                    className={clsx(
                        `type-${item.type}`,
                        dense && 'dense',
                        selectedId === item.id && 'active',
                        'singularity-list-item flex flex-col items-center justify-center p-3',
                    )}
                    onClick={() => onItemClick && onItemClick(item)}
                    {...itemProps}
                    ref={buttonRef}
                >
                    {dense ? (
                        <Tooltip title={item.title || ''} placement="right">
                            <div className="relative flex h-8 min-h-8 w-8 items-center justify-center">
                                {item.icon ? (
                                    <SingularitySvgIcon
                                        className={clsx('singularity-list-item-icon', item.iconClass)}
                                        color="inherit"
                                    >
                                        {item.icon}
                                    </SingularitySvgIcon>
                                ) : (
                                    item.title && <Typography className="text-lg font-bold">{item.title[0]}</Typography>
                                )}
                                {item.badge && (
                                    <SingularityNavBadge
                                        badge={item.badge}
                                        className="absolute top-0 h-4 min-w-4 justify-center p-1 ltr:right-0 rtl:left-0"
                                    />
                                )}
                            </div>
                        </Tooltip>
                    ) : (
                        <>
                            <div className="relative mb-2 flex h-8 min-h-8 w-8 items-center justify-center">
                                {item.icon ? (
                                    <SingularitySvgIcon
                                        size={32}
                                        className={clsx('singularity-list-item-icon', item.iconClass)}
                                        color="inherit"
                                    >
                                        {item.icon}
                                    </SingularitySvgIcon>
                                ) : (
                                    item.title && <Typography className="text-2xl font-bold">{item.title[0]}</Typography>
                                )}
                                {item.badge && (
                                    <SingularityNavBadge
                                        badge={item.badge}
                                        className="absolute top-0 h-4 min-w-4 justify-center p-1 ltr:right-0 rtl:left-0"
                                    />
                                )}
                            </div>

                            <ListItemText
                                className="singularity-list-item-text w-full grow-0 px-2"
                                primary={item.title}
                                classes={{
                                    primary:
                                        'text-lg font-light singularity-list-item-text-primary truncate text-center truncate',
                                }}
                                ref={textRef}
                            />
                        </>
                    )}
                </ListItemButton>
                {!firstLevel &&
                    item.children &&
                    item.children.map((_item) => (
                        <NavVerticalTab
                            key={_item.id}
                            type={`vertical-${_item.type}`}
                            item={_item}
                            nestedLevel={0}
                            onItemClick={onItemClick}
                            dense={dense}
                            selectedId={selectedId}
                            checkPermission={checkPermission}
                        />
                    ))}
            </Root>
        ),
        [item, component, dense, selectedId, itemProps, firstLevel, onItemClick, checkPermission],
    );

    if (checkPermission && !item?.hasPermission) {
        return null;
    }

    return memoizedContent;
}

const NavVerticalTab = SingularityNavVerticalTab;

export default NavVerticalTab;