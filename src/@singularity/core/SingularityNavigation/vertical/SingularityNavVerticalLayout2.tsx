import List from '@mui/material/List';
import { styled, useTheme } from '@mui/material/styles';
import clsx from 'clsx';
import { useRef, useEffect } from 'react';
import SingularityNavVerticalTab from './types/SingularityNavVerticalTab';
import { SingularityNavigationProps } from '../SingularityNavigation';
import { SingularityNavItemType } from '../types/SingularityNavItemType';

const StyledList = styled(List)(({ theme }) => ({
    backgroundColor: theme.vars.palette.background.default,
    color: theme.palette.text.primary,
    '&.navigation.flex.flex-col.items-center.whitespace-nowrap': {
        backgroundColor: 'transparent',
    },
    '& .singularity-list-item': {
        backgroundColor: 'transparent',
        color: theme.palette.text.primary,
        '&:hover': {
            backgroundColor: theme.vars.palette.action.hover,
        },
        '&:focus:not(.active)': {
            backgroundColor: theme.vars.palette.action.focus,
        },
    },
    '& .singularity-list-item-text-primary': {
        color: 'inherit',
        lineHeight: '1',
    },
    '&.active-square-list': {
        '& .singularity-list-item, & .active.singularity-list-item': {
            width: '100%',
            borderRadius: '0',
        },
    },
    '&.dense': {},
}));

/**
 * SingularityNavVerticalLayout2 component represents a vertical navigation layout with material UI elements.
 * It displays the navigation object in the structured vertical menu and allows to handle onClick events for each navigation item.
 */
function SingularityNavVerticalLayout2(props: SingularityNavigationProps) {
    const { navigation, active, dense, className, onItemClick, firstLevel, selectedId, checkPermission } = props;
    const theme = useTheme();
    const listRef = useRef<HTMLUListElement>(null);

    useEffect(() => {
        if (listRef.current) {
            const computedStyle = window.getComputedStyle(listRef.current);
            console.log('SingularityNavVerticalLayout2 Info:', {
                themeMode: theme.palette.mode,
                background: theme.palette.background.default,
                text: theme.palette.text.primary,
                computedBackground: computedStyle.backgroundColor,
            });
        }
    }, [theme]);

    function handleItemClick(item: SingularityNavItemType) {
        onItemClick?.(item);
    }

    return (
        <StyledList
            className={clsx(
                'navigation flex flex-col items-center whitespace-nowrap',
                `active-${active}-list`,
                dense && 'dense',
                className
            )}
            ref={listRef}
        >
            {navigation.map((_item) => (
                <SingularityNavVerticalTab
                    key={_item.id}
                    type={`vertical-${_item.type}`}
                    item={_item}
                    nestedLevel={0}
                    onItemClick={handleItemClick}
                    firstLevel={firstLevel}
                    dense={dense}
                    selectedId={selectedId}
                    checkPermission={checkPermission}
                />
            ))}
        </StyledList>
    );
}

export default SingularityNavVerticalLayout2;