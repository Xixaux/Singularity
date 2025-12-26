'use client';

import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { motion } from 'framer-motion';
import Box from '@mui/material/Box';
import { styled, ThemeProvider, createTheme, useTheme } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Icon } from '@iconify/react';

import '@fontsource/ibm-plex-sans/400.css';
import '@fontsource/ibm-plex-sans/500.css';

const theme = createTheme({
  typography: {
    fontFamily: '"IBM Plex Sans", sans-serif',
    h4: { fontWeight: 500, fontSize: '1.5rem' },
    h6: { fontWeight: 500, fontSize: '1.1rem' },
    body1: { fontWeight: 400, fontSize: '0.875rem' },
    body2: { fontWeight: 400, fontSize: '0.75rem' },
    subtitle1: { fontWeight: 400, fontSize: '0.875rem' },
    caption: { fontWeight: 400, fontSize: '0.75rem' },
  },
  palette: {
    mode: 'light',
    primary: {
      main: '#1976D2',
      dark: '#90CAF9',
    },
    secondary: {
      main: '#FF4081',
      dark: '#F48FB1',
    },
    text: {
      primary: '#1C1C1C',
      secondary: '#757575',
      darkPrimary: '#FFFFFF',
      darkSecondary: '#9CA3AF',
    },
    background: {
      default: '#FFFFFF',
      paper: '#FFFFFF',
      darkDefault: '#1C1C1C',
      darkPaper: '#1C1C1C',
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: (theme) => ({
        '& .header-text': {
          color: document.body.classList.contains('dark') ? theme.palette.text.darkPrimary : theme.palette.text.primary,
        },
        '& .total-text': {
          color: document.body.classList.contains('dark') ? theme.palette.primary.dark : theme.palette.primary.main,
        },
      }),
    },
  },
});

const Root = styled('div')(({ theme }) => ({
  '& .invoice-container': {
    background: document.body.classList.contains('dark') ? theme.palette.background.darkDefault : theme.palette.background.default,
    minHeight: '100vh',
    padding: theme.spacing(4),
    [theme.breakpoints.up('sm')]: {
      padding: theme.spacing(6),
    },
    '@media print': {
      padding: 0,
      background: theme.palette.common.white,
    },
  },
  '& .header-banner': {
    background: document.body.classList.contains('dark') ? theme.palette.background.darkPaper : theme.palette.background.paper,
    padding: theme.spacing(3),
    borderBottom: `1px solid ${theme.palette.divider}`,
    color: document.body.classList.contains('dark') ? theme.palette.text.darkPrimary : theme.palette.text.primary,
  },
  '& .invoice-card': {
    borderRadius: '8px',
    boxShadow: theme.shadows[2],
    background: document.body.classList.contains('dark') ? theme.palette.background.darkPaper : theme.palette.background.paper,
    maxWidth: '800px',
    margin: '0 auto',
    '@media print': {
      boxShadow: 'none',
      border: 'none',
    },
  },
  '& .table': {
    '& th, & td': {
      borderBottom: `1px solid ${theme.palette.divider}`,
      padding: theme.spacing(1.5, 2),
      color: document.body.classList.contains('dark') ? theme.palette.text.darkPrimary : theme.palette.text.primary,
      background: document.body.classList.contains('dark') ? theme.palette.background.darkPaper : theme.palette.background.paper,
    },
    '& th': {
      fontWeight: 500,
      color: document.body.classList.contains('dark') ? theme.palette.text.darkSecondary : theme.palette.text.secondary,
      background: document.body.classList.contains('dark') ? theme.palette.background.darkPaper : theme.palette.background.paper,
    },
    '& tr': {
      background: document.body.classList.contains('dark') ? theme.palette.background.darkPaper : theme.palette.background.paper,
      '&:hover': {
        background: document.body.classList.contains('dark') ? 'rgba(107, 201, 247, 0.2)' : 'rgba(107, 201, 247, 0.1)',
      },
    },
  },
  '& .totals': {
    paddingTop: theme.spacing(2),
    marginTop: theme.spacing(2),
    borderTop: `1px solid ${theme.palette.divider}`,
  },
}));

function MinimalistInvoicePage() {
  const theme = useTheme();
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
  });

  React.useEffect(() => {
    console.log('Theme mode:', theme.palette.mode);
    console.log('Body has dark class:', document.body.classList.contains('dark'));
    console.log('Header background:', document.body.classList.contains('dark') ? theme.palette.background.darkPaper : theme.palette.background.paper);
    console.log('Table text color:', document.body.classList.contains('dark') ? theme.palette.text.darkPrimary : theme.palette.text.primary);
  }, [theme.palette.mode]);

  return (
    <ThemeProvider theme={theme}>
      <Root className="invoice-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          <Card className="invoice-card">
            <Box className="header-banner">
              <Typography
                variant="h4"
                className="header-text"
                sx={{
                  fontFamily: '"IBM Plex Sans", sans-serif',
                  fontWeight: 500,
                  fontSize: '1.5rem',
                }}
              >
                Invoice #INV-2025-0012
              </Typography>
              <Typography
                variant="subtitle1"
                className="header-text"
                sx={{
                  fontFamily: '"IBM Plex Sans", sans-serif',
                  fontWeight: 400,
                  fontSize: '0.875rem',
                }}
              >
                Singularity Inc.
              </Typography>
            </Box>
            <CardContent sx={{ p: 4 }}>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 4, flexWrap: 'wrap', gap: 2 }}>
                <Box>
                  <Typography
                    variant="h6"
                    sx={{
                      fontFamily: '"IBM Plex Sans", sans-serif',
                      fontWeight: 500,
                      fontSize: '1.1rem',
                      color: document.body.classList.contains('dark') ? theme.palette.text.darkSecondary : theme.palette.text.secondary,
                    }}
                  >
                    Billed To
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      fontFamily: '"IBM Plex Sans", sans-serif',
                      fontWeight: 400,
                      fontSize: '0.875rem',
                      color: document.body.classList.contains('dark') ? theme.palette.text.darkPrimary : theme.palette.text.primary,
                    }}
                  >
                    Alex Morgan
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      fontFamily: '"IBM Plex Sans", sans-serif',
                      fontWeight: 400,
                      fontSize: '0.75rem',
                      color: document.body.classList.contains('dark') ? theme.palette.text.darkSecondary : theme.palette.text.secondary,
                    }}
                  >
                    1234 Market Street, Suite 500
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      fontFamily: '"IBM Plex Sans", sans-serif',
                      fontWeight: 400,
                      fontSize: '0.75rem',
                      color: document.body.classList.contains('dark') ? theme.palette.text.darkSecondary : theme.palette.text.secondary,
                    }}
                  >
                    San Francisco, CA 94103
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      fontFamily: '"IBM Plex Sans", sans-serif',
                      fontWeight: 400,
                      fontSize: '0.75rem',
                      color: document.body.classList.contains('dark') ? theme.palette.text.darkSecondary : theme.palette.text.secondary,
                    }}
                  >
                    +1 415 987 6543
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      fontFamily: '"IBM Plex Sans", sans-serif',
                      fontWeight: 400,
                      fontSize: '0.75rem',
                      color: document.body.classList.contains('dark') ? theme.palette.text.darkSecondary : theme.palette.text.secondary,
                    }}
                  >
                    alex.morgan@techcorp.com
                  </Typography>
                </Box>
                <Box sx={{ textAlign: { xs: 'left', sm: 'right' } }}>
                  <Typography
                    variant="body1"
                    sx={{
                      fontFamily: '"IBM Plex Sans", sans-serif',
                      fontWeight: 400,
                      fontSize: '0.875rem',
                      color: document.body.classList.contains('dark') ? theme.palette.text.darkSecondary : theme.palette.text.secondary,
                    }}
                  >
                    Invoice Date: July 15, 2025
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      fontFamily: '"IBM Plex Sans", sans-serif',
                      fontWeight: 400,
                      fontSize: '0.875rem',
                      color: document.body.classList.contains('dark') ? theme.palette.text.darkSecondary : theme.palette.text.secondary,
                    }}
                  >
                    Due Date: August 15, 2025
                  </Typography>
                  <Typography
                    variant="h6"
                    mt={1}
                    className="total-text"
                    sx={{
                      fontFamily: '"IBM Plex Sans", sans-serif',
                      fontWeight: 500,
                      fontSize: '1.1rem',
                    }}
                  >
                    Total Due: {formatter.format(185750)}
                  </Typography>
                </Box>
              </Box>

              <Table className="table">
                <TableHead>
                  <TableRow>
                    <TableCell>
                      <Typography
                        variant="body1"
                        fontWeight={500}
                        sx={{
                          fontFamily: '"IBM Plex Sans", sans-serif',
                          fontWeight: 500,
                          fontSize: '0.875rem',
                          color: document.body.classList.contains('dark') ? theme.palette.text.darkSecondary : theme.palette.text.secondary,
                        }}
                      >
                        Service
                      </Typography>
                    </TableCell>
                    <TableCell align="right">
                      <Typography
                        variant="body1"
                        fontWeight={500}
                        sx={{
                          fontFamily: '"IBM Plex Sans", sans-serif',
                          fontWeight: 500,
                          fontSize: '0.875rem',
                          color: document.body.classList.contains('dark') ? theme.palette.text.darkSecondary : theme.palette.text.secondary,
                        }}
                      >
                        Rate
                      </Typography>
                    </TableCell>
                    <TableCell align="right">
                      <Typography
                        variant="body1"
                        fontWeight={500}
                        sx={{
                          fontFamily: '"IBM Plex Sans", sans-serif',
                          fontWeight: 500,
                          fontSize: '0.875rem',
                          color: document.body.classList.contains('dark') ? theme.palette.text.darkSecondary : theme.palette.text.secondary,
                        }}
                      >
                        Quantity
                      </Typography>
                    </TableCell>
                    <TableCell align="right">
                      <Typography
                        variant="body1"
                        fontWeight={500}
                        sx={{
                          fontFamily: '"IBM Plex Sans", sans-serif',
                          fontWeight: 500,
                          fontSize: '0.875rem',
                          color: document.body.classList.contains('dark') ? theme.palette.text.darkSecondary : theme.palette.text.secondary,
                        }}
                      >
                        Total
                      </Typography>
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {[
                    { service: 'UI/UX Design', rate: 80, qty: 200, total: 16000 },
                    { service: 'Full-Stack Development', rate: 70, qty: 400, total: 28000 },
                    { service: 'Quality Assurance', rate: 30, qty: 100, total: 3000 },
                    { service: 'Technical Documentation', rate: 35, qty: 150, total: 5250 },
                    { service: 'Annual Maintenance', rate: 30000, qty: 3, total: 90000 },
                    { service: 'Security Updates', rate: 20000, qty: 2, total: 40000 },
                  ].map((row, index) => (
                    <TableRow key={index}>
                      <TableCell>
                        <Typography
                          variant="body1"
                          sx={{
                            fontFamily: '"IBM Plex Sans", sans-serif',
                            fontWeight: 400,
                            fontSize: '0.875rem',
                            color: document.body.classList.contains('dark') ? theme.palette.text.darkPrimary : theme.palette.text.primary,
                          }}
                        >
                          {row.service}
                        </Typography>
                      </TableCell>
                      <TableCell align="right">
                        <Typography
                          variant="body1"
                          sx={{
                            fontFamily: '"IBM Plex Sans", sans-serif',
                            fontWeight: 400,
                            fontSize: '0.875rem',
                            color: document.body.classList.contains('dark') ? theme.palette.text.darkPrimary : theme.palette.text.primary,
                          }}
                        >
                          {formatter.format(row.rate)}
                        </Typography>
                      </TableCell>
                      <TableCell align="right">
                        <Typography
                          variant="body1"
                          sx={{
                            fontFamily: '"IBM Plex Sans", sans-serif',
                            fontWeight: 400,
                            fontSize: '0.875rem',
                            color: document.body.classList.contains('dark') ? theme.palette.text.darkPrimary : theme.palette.text.primary,
                          }}
                        >
                          {row.qty}
                        </Typography>
                      </TableCell>
                      <TableCell align="right">
                        <Typography
                          variant="body1"
                          sx={{
                            fontFamily: '"IBM Plex Sans", sans-serif',
                            fontWeight: 400,
                            fontSize: '0.875rem',
                            color: document.body.classList.contains('dark') ? theme.palette.primary.dark : theme.palette.primary.main,
                          }}
                        >
                          {formatter.format(row.total)}
                        </Typography>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>

              <Box className="totals" sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                <Box sx={{ width: { xs: '100%', sm: '250px' } }}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', py: 0.5 }}>
                    <Typography
                      variant="body1"
                      sx={{
                        fontFamily: '"IBM Plex Sans", sans-serif',
                        fontWeight: 400,
                        fontSize: '0.875rem',
                        color: document.body.classList.contains('dark') ? theme.palette.text.darkSecondary : theme.palette.text.secondary,
                      }}
                    >
                      Subtotal
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{
                        fontFamily: '"IBM Plex Sans", sans-serif',
                        fontWeight: 400,
                        fontSize: '0.875rem',
                        color: document.body.classList.contains('dark') ? theme.palette.text.darkPrimary : theme.palette.text.primary,
                      }}
                    >
                      {formatter.format(182250)}
                    </Typography>
                  </Box>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', py: 0.5 }}>
                    <Typography
                      variant="body1"
                      sx={{
                        fontFamily: '"IBM Plex Sans", sans-serif',
                        fontWeight: 400,
                        fontSize: '0.875rem',
                        color: document.body.classList.contains('dark') ? theme.palette.text.darkSecondary : theme.palette.text.secondary,
                      }}
                    >
                      Tax (5%)
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{
                        fontFamily: '"IBM Plex Sans", sans-serif',
                        fontWeight: 400,
                        fontSize: '0.875rem',
                        color: document.body.classList.contains('dark') ? theme.palette.text.darkPrimary : theme.palette.text.primary,
                      }}
                    >
                      {formatter.format(9112.5)}
                    </Typography>
                  </Box>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', py: 0.5 }}>
                    <Typography
                      variant="body1"
                      sx={{
                        fontFamily: '"IBM Plex Sans", sans-serif',
                        fontWeight: 400,
                        fontSize: '0.875rem',
                        color: document.body.classList.contains('dark') ? theme.palette.text.darkSecondary : theme.palette.text.secondary,
                      }}
                    >
                      Discount
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{
                        fontFamily: '"IBM Plex Sans", sans-serif',
                        fontWeight: 400,
                        fontSize: '0.875rem',
                        color: document.body.classList.contains('dark') ? theme.palette.text.darkPrimary : theme.palette.text.primary,
                      }}
                    >
                      {formatter.format(5612.5)}
                    </Typography>
                  </Box>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', py: 0.5, mt: 1 }}>
                    <Typography
                      variant="h6"
                      fontWeight={500}
                      sx={{
                        fontFamily: '"IBM Plex Sans", sans-serif',
                        fontWeight: 500,
                        fontSize: '1.1rem',
                        color: document.body.classList.contains('dark') ? theme.palette.text.darkSecondary : theme.palette.text.secondary,
                      }}
                    >
                      Total
                    </Typography>
                    <Typography
                      variant="h6"
                      fontWeight={500}
                      className="total-text"
                      sx={{
                        fontFamily: '"IBM Plex Sans", sans-serif',
                        fontWeight: 500,
                        fontSize: '1.1rem',
                      }}
                    >
                      {formatter.format(185750)}
                    </Typography>
                  </Box>
                </Box>
              </Box>

              <Box sx={{ mt: 4 }}>
                <Typography
                  variant="body2"
                  sx={{
                    fontFamily: '"IBM Plex Sans", sans-serif',
                    fontWeight: 400,
                    fontSize: '0.75rem',
                    color: document.body.classList.contains('dark') ? theme.palette.text.darkSecondary : theme.palette.text.secondary,
                  }}
                >
                  Payment due within 30 days. Thank you for your business!
                </Typography>
                <Box sx={{ mt: 2 }}>
                  <Typography
                    variant="caption"
                    sx={{
                      fontFamily: '"IBM Plex Sans", sans-serif',
                      fontWeight: 400,
                      fontSize: '0.75rem',
                      color: document.body.classList.contains('dark') ? theme.palette.text.darkSecondary : theme.palette.text.secondary,
                    }}
                  >
                    Singularity Inc.
                  </Typography>
                </Box>
              </Box>
            </CardContent>
          </Card>
        </motion.div>
      </Root>
    </ThemeProvider>
  );
}

export default MinimalistInvoicePage;