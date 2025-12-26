import { styled, useTheme } from '@mui/material/styles';
import { memo } from 'react';
import NavigationBarLayout2 from './NavigationBarLayout2'; 

const Root = styled('div')(({ theme }) => ({
  color: theme.palette.text.primary,
  backgroundColor: theme.palette.background.paper || '#FFFFFF !important', // Opaque paper or white fallback
}));

type NavigationBarWrapperLayout2Props = {
  className?: string;
};

function NavigationBarWrapperLayout2(props: NavigationBarWrapperLayout2Props) {
  const theme = useTheme(); // Define theme here
  const { className = '' } = props;

  console.log('Wrapper theme mode:', theme.palette.mode);
  console.log('Wrapper background paper:', theme.palette.background.paper);

  return (
    <Root className={className}>
      <NavigationBarLayout2 />
    </Root>
  );
}

export default memo(NavigationBarWrapperLayout2);