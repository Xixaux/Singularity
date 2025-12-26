'use client';

import { Box, Button } from '@mui/material';
import clsx from 'clsx';
import { WalletIcon, BookOpenIcon } from '@heroicons/react/24/outline'; 
import { useTheme } from '@mui/material/styles';

type FeatureNavigationBoxProps = {
  className?: string;
};

function FeatureNavigationBox(props: FeatureNavigationBoxProps) {
  const { className } = props;
  const theme = useTheme();

  const gradientAnimationKeyframes = {
    '@keyframes pronouncedGradientShift': {
      '0%': { backgroundPosition: '0% 50%' },
      '50%': { backgroundPosition: '100% 50%' },
      '100%': { backgroundPosition: '0% 50%' },
    },
  };

  return (
    <Box
      className={clsx('documentation-hero flex flex-col px-6 py-2 rounded-lg gap-4', className)}
      sx={{
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <Box className="flex flex-col gap-3">
        <Button
          variant="contained"
          href="https://singularitythemes.com/"
          startIcon={
            <WalletIcon
              style={{
                width: 18,
                height: 18,
                shapeRendering: 'geometricPrecision',
                stroke: '#ffffff',
              }}
            />
          }
          sx={{
            textTransform: 'none',
            fontSize: '0.800rem',
            fontWeight: 400,
            padding: '10px 20px',
            borderRadius: '22px',
            background: `linear-gradient(45deg, ${theme.palette.primary.dark}, ${theme.palette.primary.main}, ${theme.palette.primary.dark})`,
            backgroundSize: '400% 400%', 
            color: '#ffffff',
            animation: 'pronouncedGradientShift 5s ease-in-out infinite', 
            '&:hover': {
              transform: 'translateY(-1px)',
              transition: 'all 0.2s ease-in-out',
            },
            ...gradientAnimationKeyframes,
          }}
        >
          Purchase Singularity
        </Button>
        <Button
          variant="contained"
          href="/documentation/getting-started/introduction"
          startIcon={
            <BookOpenIcon 
              style={{
                width: 18,
                height: 18,
                shapeRendering: 'geometricPrecision',
                stroke: '#ffffff',
              }}
            />
          }
          sx={{
            textTransform: 'none',
            fontSize: '0.800rem',
            fontWeight: 400,
            padding: '10px 20px',
            borderRadius: '22px',
            background: `linear-gradient(135deg, ${theme.palette.secondary.dark} 0%, ${theme.palette.primary.dark} 25%, ${theme.palette.secondary.main} 50%, ${theme.palette.primary.main} 75%, ${theme.palette.secondary.dark} 100%)`,
            backgroundSize: '400% 400%', 
            animation: 'pronouncedGradientShift 15s ease-in-out infinite', 
            color: '#ffffff',
            '&:hover': {
              backgroundColor: 'transparent',
              transform: 'translateY(-1px)',
              transition: 'all 0.2s ease-in-out',
            },
            ...gradientAnimationKeyframes,
          }}
        >
          Documentation
        </Button>
      </Box>
    </Box>
  );
}

export default FeatureNavigationBox;