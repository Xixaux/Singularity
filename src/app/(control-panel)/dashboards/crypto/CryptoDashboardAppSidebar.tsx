'use client';

import { Box, Paper } from '@mui/material';
import SingularityLoading from '@singularity/core/SingularityLoading';
import WatchlistItem from './widgets/WatchlistItem';
import BuySellForm from './widgets/BuySellForm';
import WatchlistType from './types/WatchlistType';
import { useGetCryptoDashboardWidgetsQuery } from './CryptoDashboardApi';

/**
 * The crypto dashboard app sidebar.
 */
function CryptoDashboardAppSidebar() {
  const { data: widgets, isLoading } = useGetCryptoDashboardWidgetsQuery();

  if (isLoading) {
    return <SingularityLoading />;
  }

  // Assuming WatchlistType now includes the 'id' field
  const watchlist = widgets?.watchlist as WatchlistType;

  if (!watchlist) {
    return null;
  }

  return (
    <Box sx={{ backgroundColor: theme => theme.vars.palette.background.default }}>
      <Paper
        elevation={0}
        square
        sx={{ backgroundColor: theme => theme.vars.palette.background.default }} // Revert to theme default
      >
        {/* FIX: Use index 'i' as a fallback key if item.id is missing or undefined to satisfy React's key requirement. 
            The map function is changed to include the index 'i'. */}
        {watchlist?.map((item, i) => (
          <WatchlistItem
            key={item.id ?? i} // Use item.id, fall back to index 'i'
            item={item}
          />
        ))}
      </Paper>
      <BuySellForm />
    </Box>
  );
}

export default CryptoDashboardAppSidebar;