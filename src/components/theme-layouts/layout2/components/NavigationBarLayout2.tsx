import { styled, useTheme } from '@mui/material/styles';
import clsx from 'clsx';
import { memo } from 'react';
import Navigation from 'src/components/theme-layouts/components/navigation/Navigation';
import Logo from '../../components/Logo';

const Root = styled('div')(({ theme }) => ({
  color: theme.palette.text.primary,
  backgroundColor: theme.palette.background.paper || '#FFFFFF !important', // Opaque paper or white fallback
  position: 'sticky',
  top: 0,
  zIndex: 1000,
}));

type NavigationBarLayout2Props = {
  className?: string;
};

function NavigationBarLayout2(props: NavigationBarLayout2Props) {
  const theme = useTheme();
  const { className = '' } = props;

  console.log('Dark mode:', theme.palette.mode);
  console.log('Background paper:', theme.palette.background.paper);

  return (
    <Root className={clsx('navigation h-16 max-h-16 min-h-16 w-full shadow-md', className)}>
      <div className="container z-20 flex h-full w-full flex-auto items-center justify-between p-0 lg:px-6">
        <div className="flex shrink-0 items-center px-2">
          <Logo />
        </div>

        {}
        <div 
          className={clsx('flex h-full items-center')}
          style={{ 
            backgroundColor: theme.palette.background.paper || '#FFFFFF !important',
          }} 
        >
          <Navigation
            className="w-full"
            layout="horizontal"
          />
        </div>
      </div>
    </Root>
  );
}

export default memo(NavigationBarLayout2);