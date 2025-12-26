'use client';

import SingularityNavLink from '@singularity/core/SingularityNavLink';
import { styled } from '@mui/material/styles';
import clsx from 'clsx';
import { useMemo } from 'react';
import { ListItem, ListItemText } from '@mui/material';
import SingularityNavItem, { SingularityNavItemComponentProps } from '../../SingularityNavItem';

type ListItemButtonComponentProps = {
  itempadding: number;
};

const Root = styled(ListItem)<ListItemButtonComponentProps>(({ theme, ...props }) => ({
  minHeight: 36,
  width: '100%',
  borderRadius: '8px',
  margin: '28px 0 0 0',
  '&:first-of-type': {
    marginTop: 0,
  },
  paddingRight: 16,
  paddingLeft: props.itempadding > 80 ? 80 : props.itempadding,
  paddingTop: 10,
  paddingBottom: 10,
  color: theme.vars.palette.text.primary,
  fontWeight: 400,
  letterSpacing: '0.025em',
}));

function SingularityNavVerticalGroup(props: SingularityNavItemComponentProps) {
  const { item, nestedLevel = 0, onItemClick, checkPermission } = props;
  const itempadding = nestedLevel > 0 ? 38 + nestedLevel * 16 : 16;
  const component = item.url ? SingularityNavLink : 'li';

  const itemProps = useMemo(
    () => ({
      ...(component !== 'li' && {
        disabled: item.disabled,
        to: item.url,
        end: item.end,
        role: 'button',
        exact: item?.exact,
      }),
    }),
    [item, component],
  );

  const memoizedContent = useMemo(
    () => (
      <>
        <Root
          component={component}
          itempadding={itempadding}
          className={clsx('flex items-center py-2.5', !item.url ? 'cursor-default' : '')}
          onClick={() => onItemClick && onItemClick(item)}
          sx={item.sx}
          {...itemProps}
        >
          <ListItemText
            className="singularity-list-subheader-text singularity-list-item-text" // Restored singularity-list-subheader-text
            sx={(theme) => ({
              margin: 0,
              '& > .MuiListItemText-primary': {
                fontSize: 13, 
                color: theme.vars.palette.text.primary, // Restored original theme-aware color
                fontWeight: 500,
                textTransform: 'uppercase',
                letterSpacing: '.04em',
                lineHeight: '20px',
              },
            })}
            primary={item.title}
          />
        </Root>
        {item.children && (
          <>
            {item.children.map((_item) => (
              <SingularityNavItem
                key={_item.id}
                type={`vertical-${_item.type}`}
                item={_item}
                nestedLevel={nestedLevel}
                onItemClick={onItemClick}
                checkPermission={checkPermission}
              />
            ))}
          </>
        )}
      </>
    ),
    [checkPermission, component, item, itemProps, itempadding, nestedLevel, onItemClick],
  );

  if (checkPermission && !item?.hasPermission) {
    return null;
  }

  return memoizedContent;
}

const NavVerticalGroup = SingularityNavVerticalGroup;

export default NavVerticalGroup;