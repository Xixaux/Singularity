'use client';

import { Box, Paper, Typography, List, ListItem, ListItemIcon, ListItemText, Button, Divider, useTheme } from '@mui/material';
import SingularityLoading from '@singularity/core/SingularityLoading';
import SingularitySvgIcon from '@singularity/core/SingularitySvgIcon';
import { useGetCryptoDashboardWidgetsQuery } from './CryptoDashboardApi';

type Transaction = {
  id: string;
  action: string;
  details: string;
  icon: string;
  timestamp: string;
};

function CryptoDashboardAppRightSidebar() {
  const { data: widgets, isLoading } = useGetCryptoDashboardWidgetsQuery();
  const theme = useTheme();

  // Debug theme
  console.log('RightSidebar background default:', theme.palette.background.default);
  console.log('RightSidebar text primary:', theme.palette.text.primary);

  const mockTransactions: Transaction[] = [
    { id: '1', action: 'Bought', details: '0.5 BTC at $65,432.10', icon: 'heroicons-solid:arrow-up', timestamp: '2025-07-20 14:30' },
    { id: '2', action: 'Sold', details: '1 ETH at $3,450.75', icon: 'heroicons-solid:arrow-down', timestamp: '2025-07-20 12:15' },
    { id: '3', action: 'Opened Wallet', details: 'BTC Wallet #1234', icon: 'heroicons-solid:wallet', timestamp: '2025-07-20 10:00' },
    { id: '4', action: 'Transferred', details: '0.2 LTC to Wallet #5678', icon: 'heroicons-solid:arrow-right', timestamp: '2025-07-19 18:45' },
    { id: '5', action: 'Staked', details: '10 ADA for 6 months', icon: 'heroicons-solid:lock-closed', timestamp: '2025-07-19 09:20' },
  ];

  if (isLoading) {
    return <SingularityLoading />;
  }

  const handleClearHistory = () => {
    console.log('Clear History clicked');
  };

  const handleSaveHistory = () => {
    console.log('Save History clicked');
  };

  return (
    <Box sx={{ width: '100%', bgcolor: `${theme.palette.background.default} !important`, p: 2, height: '100%', display: 'flex', flexDirection: 'column' }}>
      <Paper elevation={0} square sx={{ width: '100%', bgcolor: `${theme.palette.background.default} !important`, flex: '1 1 auto' }}>
        <Typography variant="h6" sx={{ mb: 2, fontWeight: 'medium', color: theme.palette.text.primary }}>
          Transaction History
        </Typography>
        <List sx={{ maxHeight: 'calc(100% - 80px)', overflowY: 'auto' }}>
          {mockTransactions.map((transaction) => (
            <ListItem key={transaction.id} sx={{ py: 0.5 }}>
              <ListItemIcon sx={{ minWidth: 32 }}>
                <SingularitySvgIcon
                  sx={{
                    color:
                      transaction.action === 'Bought'
                        ? theme.palette.success.main
                        : transaction.action === 'Sold'
                        ? theme.palette.error.main
                        : theme.palette.text.secondary,
                    fontSize: 20,
                  }}
                >
                  {transaction.icon}
                </SingularitySvgIcon>
              </ListItemIcon>
              <ListItemText
                primary={
                  <Typography variant="body2" sx={{ fontWeight: 'medium', color: theme.palette.text.primary }}>
                    {transaction.action}: {transaction.details}
                  </Typography>
                }
                secondary={
                  <Typography variant="caption" sx={{ color: theme.palette.text.secondary }}>
                    {transaction.timestamp}
                  </Typography>
                }
              />
            </ListItem>
          ))}
        </List>
      </Paper>
      <Divider sx={{ my: 2, borderColor: theme.palette.divider }} />
      <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center' }}>
        <Button
          variant="outlined"
          sx={{
            flex: 1,
            color: theme.palette.secondary.main,
            borderColor: theme.palette.secondary.main,
            '&:hover': {
              borderColor: theme.palette.secondary.dark,
              backgroundColor: theme.palette.action.hover,
            },
          }}
          onClick={handleClearHistory}
        >
          Clear History
        </Button>
        <Button
          variant="contained"
          sx={{
            flex: 1,
            backgroundColor: theme.palette.primary.main,
            color: theme.palette.primary.contrastText,
            '&:hover': {
              backgroundColor: theme.palette.primary.dark,
            },
          }}
          onClick={handleSaveHistory}
        >
          Save History
        </Button>
      </Box>
    </Box>
  );
}

export default CryptoDashboardAppRightSidebar;