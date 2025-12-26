import List from '@mui/material/List';
import { styled } from '@mui/material/styles';
import clsx from 'clsx';
import SingularityNavItem from '../SingularityNavItem';
import { SingularityNavigationProps } from '../SingularityNavigation';
import { SingularityNavItemType } from '../types/SingularityNavItemType';

const StyledList = styled(List)(({ theme }) => ({
  '& .singularity-list-item': {
    '&:hover': {
    },
    '&:focus:not(.active)': {
    },
  },
  '& .singularity-list-item-text': {
    margin: 0,
  },
  '& .singularity-list-item-text-primary': {
    lineHeight: '17px',
  },
  '&.active-square-list': {
    '& .singularity-list-item, & .active.singularity-list-item': {
      width: '100%',
      borderRadius: '0',
    },
  },
  '&.dense': {
    '& .singularity-list-item': {
      paddingTop: 0,
      paddingBottom: 0,
      height: 32,
    },
  },
}));

function SingularityNavVerticalLayout1(props: SingularityNavigationProps) {
  const { navigation, active, dense, className, onItemClick, checkPermission } = props;

  function handleItemClick(item: SingularityNavItemType) {
    onItemClick?.(item);
  }

  return (
    <StyledList
      className={clsx(
        'navigation whitespace-nowrap px-3 py-0',
        `active-${active}-list`,
        dense && 'dense',
        className
      )}
    >
      {navigation.map((_item) => (
        <SingularityNavItem
          key={_item.id}
          type={`vertical-${_item.type}`}
          item={_item}
          nestedLevel={0}
          onItemClick={handleItemClick}
          checkPermission={checkPermission}
        />
      ))}
    </StyledList>
  );
}

export default SingularityNavVerticalLayout1;