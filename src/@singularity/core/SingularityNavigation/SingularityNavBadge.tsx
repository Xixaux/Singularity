'use client';

import { styled } from '@mui/material/styles';
import clsx from 'clsx';
import { memo } from 'react';
import { SingularityNavBadgeType } from './types/SingularityNavBadgeType';
import { useTheme } from '@mui/material/styles';

const Root = styled('div')({
    padding: '0 9px',
    fontSize: 11,
    fontWeight: 600,
    height: 20,
    minWidth: 20,
    borderRadius: 9,
    display: 'flex',
    alignItems: 'center',
    backgroundColor: 'transparent', 
});

type SingularityNavBadgeProps = {
    className?: string;
    classes?: string;
    badge: SingularityNavBadgeType;
};

/**
 * SingularityNavBadge component.
 */
function SingularityNavBadge(props: SingularityNavBadgeProps) {
    const { className = '', classes = '', badge } = props;
    const theme = useTheme();

    const outlineColor = badge.fg || (theme.palette.mode === 'light' 
        ? theme.palette.secondary.main
        : theme.palette.primary.main);
        
    const outlineStyle = `1px solid ${outlineColor}`;
        
    return (
        <Root
            className={clsx('item-badge', className, classes)}
            style={{
                color: outlineColor,
                border: outlineStyle, 
                backgroundColor: 'transparent',
            }}
        >
            {badge.title}
        </Root>
    );
}

export default memo(SingularityNavBadge);