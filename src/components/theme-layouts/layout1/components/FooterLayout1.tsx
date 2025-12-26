'use client';

import AppBar from '@mui/material/AppBar';
import { ThemeProvider, useTheme } from '@mui/material/styles';
import Toolbar from '@mui/material/Toolbar';
import clsx from 'clsx';
import { memo } from 'react';
import DemoLayoutFooterContent from 'src/components/theme-layouts/components/DemoLayoutFooterContent';
import { useFooterTheme } from '@singularity/core/SingularitySettings/hooks/SingularityThemeHooks';

type FooterLayout1Props = { className?: string };

function FooterLayout1(props: FooterLayout1Props) {
  const { className } = props;
  const footerTheme = useFooterTheme();
  const theme = useTheme();

  const PAGE_BACKGROUND_COLOR = theme.palette.background.default;

  return (
    <ThemeProvider theme={footerTheme}>
      <AppBar
        id="singularity-footer"
        className={clsx('relative z-20 border-t', className)}
        color="default"
        sx={{
          backgroundColor: PAGE_BACKGROUND_COLOR, 
          
          '& .MuiToolbar-root': { backgroundColor: PAGE_BACKGROUND_COLOR }, 
          
          '& .MuiToolbar-root .MuiButton-root': { color: '#FFFFFF ' },
        }}
        elevation={0}
      >
        <Toolbar className="min-h-12 md:min-h-16 px-2 sm:px-3 py-0 flex items-center overflow-x-auto">
          <DemoLayoutFooterContent />
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
}

export default memo(FooterLayout1);