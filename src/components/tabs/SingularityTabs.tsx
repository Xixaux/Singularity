import { styled } from '@mui/material/styles';
import Tabs from '@mui/material/Tabs';
import { TabsProps } from '@mui/material/Tabs/Tabs';
import clsx from 'clsx';

type StyledTabsProps = TabsProps;

const SingularityTabs = styled((props: StyledTabsProps) => (
  <Tabs
    indicatorColor="secondary"
    textColor="inherit"
    variant="scrollable"
    scrollButtons={false}
    className={clsx('w-full min-h-0', props.className)}
    classes={{
      indicator: 'flex justify-center bg-transparent w-full h-full',
    }}
    {...props}
  />
))(() => ({
  minHeight: 36,
  '& .MuiTabs-flexContainer': {
    height: 36,
  },
  '& .MuiTab-root:not(:last-of-type)': {
    marginRight: 4,
  },
}));

export default SingularityTabs;