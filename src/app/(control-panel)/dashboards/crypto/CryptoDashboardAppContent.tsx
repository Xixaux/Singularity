import { Box } from '@mui/material';
import BTCDashboardChart from './widgets/BTCDashboardChart';

/**
 * Crypto Dashboard App Content
 */
function CryptoDashboardAppContent() {
  return (
    <Box
      sx={{
        width: '100%',
        height: '100%', // Inherit full height from parent
        minHeight: 'calc(100vh - 120px)', // Full viewport height minus header (adjust as needed)
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <BTCDashboardChart />
    </Box>
  );
}

export default CryptoDashboardAppContent;