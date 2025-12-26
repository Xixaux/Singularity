import SingularityScrollbars from '@singularity/core/SingularityScrollbars';
import { styled } from '@mui/material/styles';
import { memo } from 'react';
import Navigation from 'src/components/theme-layouts/components/navigation/Navigation';
import UserMenu from 'src/components/theme-layouts/components/UserMenu';
import { Divider } from '@mui/material';
import Logo from '../../../../components/Logo';
import FeatureNavigationBox from '@/components/theme-layouts/components/FeatureNavigationBox';

const Root = styled('div')(({ theme }) => ({
  color: theme.palette.text.primary,
  minHeight: '100%',
  display: 'flex',
  flexDirection: 'column',
  '& ::-webkit-scrollbar-thumb': {
    boxShadow: `inset 0 0 0 20px rgba(255, 255, 255, 0.24)`,
    ...theme.applyStyles('light', {
      boxShadow: `inset 0 0 0 20px rgba(0, 0, 0, 0.24)`,
    }),
  },
  '& ::-webkit-scrollbar-thumb:active': {
    boxShadow: `inset 0 0 0 20px rgba(255, 255, 255, 0.37)`,
    ...theme.applyStyles('light', {
      boxShadow: `inset 0 0 0 20px rgba(0, 0, 0, 0.37)`,
    }),
  },
}));

const StyledContent = styled(SingularityScrollbars)(() => ({
  overscrollBehavior: 'contain',
  overflowX: 'hidden',
  overflowY: 'auto',
  WebkitOverflowScrolling: 'touch',
  backgroundRepeat: 'no-repeat',
  backgroundSize: '100% 40px, 100% 10px',
  backgroundAttachment: 'local, scroll',
  flex: '1 0 auto',
  minHeight: '0',
}));

type NavigationBarStyle2ContentProps = {
  className?: string;
};

function NavigationBarStyle2Content(props: NavigationBarStyle2ContentProps) {
  const { className = '' } = props;

  return (
    <Root className="flex flex-auto flex-col">
      <div className="flex shrink-0 flex-row items-center px-3 min-h-[120px] md:min-h-[90px] gap-1.5">
        <Logo />
      </div>

      <StyledContent
        className="flex min-h-0 flex-1 flex-col"
        option={{ suppressScrollX: true, wheelPropagation: false }}
      >
        <Navigation layout="vertical" />
      </StyledContent>

      <div>
        <FeatureNavigationBox className="mx-3 my-4" />
        <Divider />
      </div>

      <div className="p-1 md:p-2.5 w-full">
        <UserMenu className="w-full" />
      </div>
    </Root>
  );
}

export default memo(NavigationBarStyle2Content);