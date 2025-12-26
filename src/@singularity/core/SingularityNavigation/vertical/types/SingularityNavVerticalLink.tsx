'use client';
import { styled } from '@mui/material/styles';
import ListItemText from '@mui/material/ListItemText';
import clsx from 'clsx';
import { useMemo } from 'react';
import { Link, ListItemButton, ListItemButtonProps } from '@mui/material';
import SingularityNavBadge from '../../SingularityNavBadge';
import SingularitySvgIcon from '../../../SingularitySvgIcon';
import { SingularityNavItemComponentProps } from '../../SingularityNavItem';

type ListItemButtonStyleProps = ListItemButtonProps & {
  itempadding: number;
};

const Root = styled(ListItemButton)<ListItemButtonStyleProps>(({ theme, ...props }) => ({
  minHeight: 36,
  width: '100%',
  borderRadius: '8px',
  margin: '0 0 4px 0',
  paddingRight: 16,
  paddingLeft: props.itempadding > 80 ? 80 : props.itempadding,
  paddingTop: 10,
  paddingBottom: 10,
  '&.active': {
    backgroundColor: `${theme.vars.palette.secondary.main}`,
    color: `${theme.vars.palette.secondary.contrastText}`,
    transition: 'border-radius .15s cubic-bezier(0.4,0.0,0.2,1)',
    '& > .singularity-list-item-text-primary': {
      color: 'inherit',
    },
    '& > .singularity-list-item-icon': {
      color: 'inherit',
    },
  },
  '& > .singularity-list-item-icon': {
    marginRight: 16,
  },
  '& > .singularity-list-item-text': {},
  color: theme.vars.palette.text.primary,
  textDecoration: 'none',
}));

/**
 * SingularityNavVerticalLink
 * Create a vertical Link to use inside the navigation component.
 */
function SingularityNavVerticalLink(props: SingularityNavItemComponentProps) {
  const { item, nestedLevel = 0, onItemClick, checkPermission } = props;
  const itempadding = nestedLevel > 0 ? 38 + nestedLevel * 16 : 16;
  const component = item.url ? Link : 'li';

  const itemProps = useMemo(
    () => ({
      ...(component !== 'li' && {
        disabled: item.disabled,
        to: item.url,
        role: 'button',
        target: item.target ? item.target : '_blank',
        exact: item?.exact,
      }),
    }),
    [item, component],
  );

  const memoizedContent = useMemo(
    () => (
      <Root
        component={component}
        className="singularity-list-item"
        onClick={() => onItemClick && onItemClick(item)}
        itempadding={itempadding}
        sx={item.sx}
        {...itemProps}
      >
        {item.icon && (
          <SingularitySvgIcon
            className={clsx('singularity-list-item-icon shrink-0', item.iconClass)}
            color="action"
          >
            {item.icon}
          </SingularitySvgIcon>
        )}

        <ListItemText
          className="singularity-list-item-text"
          primary={item.title}
          secondary={item.subtitle}
          classes={{
            primary: 'text-md font-light singularity-list-item-text-primary truncate',
            secondary: 'text-sm font-light singularity-list-item-text-secondary leading-[1.5] truncate',
          }}
        />

        {item.badge && <SingularityNavBadge badge={item.badge} />}
      </Root>
    ),
    [component, itempadding, item, itemProps, onItemClick],
  );

  if (checkPermission && !item?.hasPermission) {
    return null;
  }

  return memoizedContent;
}

const NavVerticalLink = SingularityNavVerticalLink;

export default NavVerticalLink;