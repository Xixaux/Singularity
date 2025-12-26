// src\components\theme-layouts\layout1\Layout1.tsx
'use client';

import { styled } from '@mui/material/styles';
import SingularityMessage from '@singularity/core/SingularityMessage';
import { memo, ReactNode } from 'react';
import { Layout1ConfigDefaultsType } from 'src/components/theme-layouts/layout1/Layout1Config';
import Configurator from 'src/components/theme-layouts/components/configurator/Configurator';
import useSingularityLayoutSettings from '@singularity/core/SingularityLayout/useSingularityLayoutSettings';
import FooterLayout1 from './components/FooterLayout1';
import LeftSideLayout1 from './components/LeftSideLayout1';
import NavigationBarWrapperLayout1 from './components/NavigationBarWrapperLayout1';
import RightSideLayout1 from './components/RightSideLayout1';
import ToolbarLayout1 from './components/ToolbarLayout1';
import SingularityDialog from '@singularity/core/SingularityDialog';
import { useAppSelector } from 'src/store/hooks';
import { selectFontSize } from 'src/components/theme-layouts/components/overlay-panel/OverlayPanelSlice';

const Root = styled('div')(({ config }: { config: Layout1ConfigDefaultsType }) => ({
  ...(config.mode === 'boxed' && {
    clipPath: 'inset(0)',
    maxWidth: `${config.containerWidth}px`,
    margin: '0 auto',
    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
  }),
  ...(config.mode === 'container' && {
    '& .container': {
      maxWidth: `${config.containerWidth}px`,
      width: '100%',
      margin: '0 auto',
      '@media (min-width: 96rem)': {
        maxWidth: `${config.containerWidth}px`,
      },
    },
  }),
  ...(config.mode === 'fullwidth' && {
    '& .container': {
      maxWidth: '100%',
      width: '100%',
    },
  }),
}));

type Layout1Props = {
  children?: ReactNode;
};

function Layout1(props: Layout1Props) {
  const { children } = props;
  const settings = useSingularityLayoutSettings();
  const config = settings.config as Layout1ConfigDefaultsType;
  const fontSize = useAppSelector(selectFontSize);

  console.log('Layout1 rendered with fontSize:', fontSize); // Debug log

  return (
    <Root
      id="singularity-layout"
      config={config}
      className="flex flex-auto w-full"
    >
      {config.leftSidePanel.display && <LeftSideLayout1 />}

      <div className="flex min-w-0 flex-auto">
        {config.NavigationBarSlice.display && config.NavigationBarSlice.position === 'left' && <NavigationBarWrapperLayout1 />}

        <main
          id="singularity-main"
          className="relative z-10 flex min-h-full min-w-0 flex-auto flex-col"
          style={{ fontSize: `${fontSize}px ` }}
        >
          {config.toolbar.display && (
            <ToolbarLayout1 className={config.toolbar.style === 'fixed' ? 'sticky top-0' : ''} />
          )}

          <div className="sticky top-0 z-99">
            <Configurator />
          </div>

          <div
            className="relative z-10 flex min-h-0 flex-auto flex-col"
            style={{ fontSize: `${fontSize}px ` }}
          >
            <SingularityDialog />
            {children}
          </div>

          {config.footer.display && (
            <FooterLayout1 className={config.footer.style === 'fixed' ? 'sticky bottom-0' : ''} />
          )}
        </main>

        {config.NavigationBarSlice.display && config.NavigationBarSlice.position === 'right' && <NavigationBarWrapperLayout1 />}
      </div>

      {config.rightSidePanel.display && <RightSideLayout1 />}
      <SingularityMessage />
    </Root>
  );
}

export default memo(Layout1);