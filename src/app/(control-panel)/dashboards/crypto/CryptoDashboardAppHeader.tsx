'use client';

import { Box, Divider, IconButton, Typography } from '@mui/material';
import SingularityLoading from '@singularity/core/SingularityLoading';
import SingularitySvgIcon from '@singularity/core/SingularitySvgIcon';
import PageBreadcrumb from 'src/components/PageBreadcrumb';
import ValueSectionSmall from './widgets/ValueSectionSmall';
import BTCWidgetType from './types/BTCWidgetType';
import { useGetCryptoDashboardWidgetsQuery } from './CryptoDashboardApi';
import useThemeMediaQuery from '../../../../@singularity/hooks/useThemeMediaQuery';
import clsx from 'clsx';

type CryptoDashboardAppHeaderProps = {
  onToggleLeftSidebar: (ev: React.MouseEvent) => void;
  onToggleRightSidebar: (ev: React.MouseEvent) => void;
};

function CryptoDashboardAppHeader(props: CryptoDashboardAppHeaderProps) {
  const { onToggleLeftSidebar, onToggleRightSidebar } = props;
  const { data: widgets, isLoading } = useGetCryptoDashboardWidgetsQuery();
  const isMobile = useThemeMediaQuery((theme) => theme.breakpoints.down('lg'));

  if (isLoading) {
    return <SingularityLoading />;
  }

  const btc = widgets?.btc as BTCWidgetType;

  if (!btc) {
    return null;
  }

  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap', width: '100%', alignItems: 'center', px: { xs: 2, md: 4 }, py: 4 }}>
      <Box sx={{ width: '100%', display: 'flex', alignItems: 'center', gap: 2, mb: 1 }}>
        {isMobile && (
          <>
            <IconButton
              onClick={onToggleLeftSidebar}
              aria-label="open left sidebar"
              sx={{ border: 1, borderColor: 'divider' }}
              size="small"
            >
              <SingularitySvgIcon>heroicons-outline:bars-3</SingularitySvgIcon>
            </IconButton>
            <IconButton
              onClick={onToggleRightSidebar}
              aria-label="open right sidebar"
              sx={{ border: 1, borderColor: 'divider' }}
              size="small"
            >
              <SingularitySvgIcon>heroicons-outline:bars-3</SingularitySvgIcon>
            </IconButton>
          </>
        )}
        <PageBreadcrumb />
      </Box>

      <Box sx={{ display: 'flex', flexDirection: 'column', flex: '1 1 auto', mb: 3 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <Typography sx={{ fontWeight: 'medium', fontSize: '1.5rem', color: 'text.secondary' }}>
            Bitcoin
          </Typography>
          <Typography sx={{ fontWeight: 'medium', fontSize: '1.125rem', tracking: 'wider', color: 'text.secondary' }}>
            (BTC)
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'flex-end', mt: 1, gap: 1.5 }}>
          <Typography sx={{ fontFamily: 'monospace', fontSize: '1.875rem', lineHeight: 1, letterSpacing: 'tight' }}>
            {btc.amount.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
            <SingularitySvgIcon
              size={20}
              sx={{
                color: btc.trend.dir === 'up' ? 'green.500' : 'red.500',
                mx: 0.5,
                mb: '1px',
              }}
            >
              {btc.trend.dir === 'up' ? 'heroicons-solid:arrow-small-up' : 'heroicons-solid:arrow-small-down'}
            </SingularitySvgIcon>
            <Typography
              sx={{
                fontFamily: 'monospace',
                fontWeight: 'medium',
                fontSize: '1.125rem',
                lineHeight: 1,
                mb: '1px',
                color: btc.trend.dir === 'up' ? 'green.500' : 'red.500',
              }}
            >
              {btc.trend.amount.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}%
            </Typography>
          </Box>
        </Box>
      </Box>

      <Box sx={{ display: { xs: 'none', sm: 'flex' }, alignItems: 'center', gap: 1, mx: 2, borderRadius: 1 }}>
        <ValueSectionSmall title="Market Cap" unit="B" value={btc.marketCap} />
        <Divider orientation="vertical" flexItem />
        <ValueSectionSmall title="Volume" unit="B" value={btc.volume} />
        <Divider orientation="vertical" flexItem />
        <ValueSectionSmall title="Supply" unit="M" value={btc.supply} />
        <Divider orientation="vertical" flexItem />
        <ValueSectionSmall title="All Time High" value={btc.allTimeHigh} />
      </Box>
    </Box>
  );
}

export default CryptoDashboardAppHeader;