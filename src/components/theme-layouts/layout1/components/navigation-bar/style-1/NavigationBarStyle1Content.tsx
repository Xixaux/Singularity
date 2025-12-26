'use client';

import SingularityScrollbars from '@singularity/core/SingularityScrollbars';
import { styled } from '@mui/material/styles';
import clsx from 'clsx';
import { memo } from 'react';
import Navigation from 'src/components/theme-layouts/components/navigation/Navigation';
import UserMenu from 'src/components/theme-layouts/components/UserMenu';
import { Divider } from '@mui/material';
import Logo from '../../../../components/Logo';
import FeatureNavigationBox from '@/components/theme-layouts/components/FeatureNavigationBox';

const Root = styled('div')(({ theme }) => ({
  '& ::-webkit-scrollbar-thumb': {
    boxShadow: `inset 0 0 0 20px var(--scrollbar-thumb)`,
  },
  '& ::-webkit-scrollbar-thumb:active': {
    boxShadow: `inset 0 0 0 20px var(--scrollbar-thumb-active)`,
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
  backgroundColor: 'var(--transparent) ',
}));

type NavigationBarStyle1ContentProps = {
  className?: string;
};

/**
 * The NavigationBarSlice style 1 content.
 */
function NavigationBarStyle1Content(props: NavigationBarStyle1ContentProps) {
  const { className = '' } = props;

  return (
    <Root className={clsx('flex h-full flex-auto flex-col overflow-hidden navigation', className)}>
      <div className="flex h-12 shrink-0 flex-row items-center px-3 md:h-18">
        <Logo />
      </div>

      <StyledContent
        className="flex min-h-0 flex-1 flex-col"
        option={{ suppressScrollX: true, wheelPropagation: false }}
      >
        <Navigation layout="vertical" />

        <div className="shrink-0 flex items-center justify-center py-12 opacity-10">
          <img
            className="w-full max-w-16"
            src="/assets/images/logo/logo.svg"
            alt="footer logo"
          />
        </div>
      </StyledContent>

      <FeatureNavigationBox className="mx-3 my-4" />

      <Divider />

      <div className="p-1 md:p-4 w-full">
        <UserMenu className="w-full" />
      </div>
    </Root>
  );
}

export default memo(NavigationBarStyle1Content);