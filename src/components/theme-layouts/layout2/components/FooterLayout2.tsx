'use client';

import AppBar from '@mui/material/AppBar';
import { ThemeProvider } from '@mui/material/styles';
import Toolbar from '@mui/material/Toolbar';
import clsx from 'clsx';
import { memo } from 'react';
import { useFooterTheme } from '@singularity/core/SingularitySettings/hooks/SingularityThemeHooks';

type FooterLayout2Props = {
  className?: string;
};

function FooterLayout2(props: FooterLayout2Props) {
  const { className = '' } = props;
  const footerTheme = useFooterTheme();

  console.log('Rendering FooterLayout2');

  return (
    <ThemeProvider theme={footerTheme}>
      <AppBar
        id="singularity-footer"
        className={clsx('relative z-20 shadow-md', className)}
        color="default"
        style={{ backgroundColor: `${footerTheme.palette.background.paper} !important` }}
      >
        {}
        <Toolbar className="container flex min-h-12 items-center px-2 py-0 sm:px-3 md:min-h-16" />
      </AppBar>
    </ThemeProvider>
  );
}

export default memo(FooterLayout2);