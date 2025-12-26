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
import '@fontsource/ibm-plex-sans/600.css';
import '@fontsource/ibm-plex-sans/700.css';

const theme = createTheme({
  typography: {
    fontFamily: '"IBM Plex Sans", sans-serif',
    h4: { fontWeight: 700, fontSize: '1.8rem' },
    h6: { fontWeight: 500, fontSize: '1.2rem' },
    body1: { fontWeight: 400, fontSize: '0.9rem' },
    body2: { fontWeight: 400, fontSize: '0.8rem' },
    subtitle1: { fontWeight: 500, fontSize: '1rem' },
    caption: { fontWeight: 400, fontSize: '0.75rem' },
  },
  palette: {
    mode: 'light',
    primary: {
      main: '#6BC9F7',
      dark: '#6BC9F7',
    },
    secondary: {
      main: '#FF6B6B',
      dark: '#FF6B6B',
    },
    text: {
      primary: '#1C1C1C',
      secondary: '#4B5563',
      darkPrimary: '#FFFFFF',
      darkSecondary: '#9CA3AF',
    },
    background: {
      default: '#F8FAFC',
      paper: '#FFFFFF',
      darkDefault: '#1C1C1C',
      darkPaper: '#1C1C1C',
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        '& .header-text': {
          color: ({ palette }) => palette.common.white,
        },
        '& .total-text': {
          color: ({ palette }) => (document.body.classList.contains('dark') ? palette.primary.dark : palette.primary.main),
        },
      },
    },
  },
});

const Root = styled('div')(({ theme }) => ({
  '& .invoice-container': {
    background: document.body.classList.contains('dark') ? theme.palette.background.darkDefault : theme.palette.background.default,
    minHeight: '100vh',
    padding: theme.spacing(5),
    [theme.breakpoints.up('sm')]: {
      padding: theme.spacing(8),
    },
    '@media print': {
      padding: 0,
      background: theme.palette.common.white,
    },
  },
  '& .header-banner': {
    background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.dark} 100%)`,
    borderRadius: '12px 12px 0 0',
    padding: theme.spacing(4),
    color: theme.palette.common.white,
    position: 'relative',
    overflow: 'hidden',
    '&:after': {
      content: '""',
      position: 'absolute',
      top: 0,
      right: 0,
      width: '100%',
      height: '100%',
      background: `radial-gradient(circle at top right, ${document.body.classList.contains('dark') ? 'rgba(255,255,255,0.2)' : 'rgba(255,255,255,0.3)'}, transparent)`,
      opacity: 0.4,
    },
  },
  '& .invoice-card': {
    borderRadius: '12px',
    boxShadow: theme.shadows[4],
    background: document.body.classList.contains('dark') ? theme.palette.background.darkPaper : theme.palette.background.paper,
    maxWidth: '900px',
    margin: '0 auto',
    overflow: 'hidden',
    '@media print': {
      boxShadow: 'none',
      border: 'none',
    },
  },
  '& .table': {
    '& th, & td': {
      borderBottom: `1px solid ${theme.palette.divider}`,
      padding: theme.spacing(2.5),
      transition: 'transform 0.2s ease, background 0.2s',
      color: document.body.classList.contains('dark') ? theme.palette.text.darkPrimary : theme.palette.text.primary,
      background: document.body.classList.contains('dark') ? theme.palette.background.darkPaper : theme.palette.background.paper,
    },
    '& th': {
      fontWeight: 500,
      color: document.body.classList.contains('dark') ? theme.palette.text.darkSecondary : theme.palette.text.secondary,
      background: document.body.classList.contains('dark') ? theme.palette.background.darkPaper : theme.palette.action.hover,
    },
    '& tr': {
      background: document.body.classList.contains('dark') ? theme.palette.background.darkPaper : theme.palette.background.paper,
      transition: 'transform 0.2s ease',
      '&:hover': {
        background: document.body.classList.contains('dark') ? 'rgba(107, 201, 247, 0.2)' : 'rgba(107, 201, 247, 0.1)',
        transform: 'scale(1.01)',
      },
    },
  },
  '& .footer': {
    paddingTop: theme.spacing(3),
    marginTop: theme.spacing(3),
    borderTop: `1px solid ${theme.palette.divider}`,
  },
  '& .footer-logo': {
    filter: `drop-shadow(0 2px 4px ${document.body.classList.contains('dark') ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)'})`,
  },
  '& .icon': {
    marginRight: theme.spacing(1),
    color: theme.palette.primary.main,
    verticalAlign: 'middle',
  },
}));

function ModernInvoicePage() {
  const theme = useTheme();
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
  });

  const serviceIcons = {
    'UI/UX Design': 'mdi:palette',
    'Full-Stack Development': 'mdi:code-braces',
    'Quality Assurance': 'mdi:check-circle',
    'Technical Documentation': 'mdi:file-document',
    'Annual Maintenance': 'mdi:wrench',
    'Security Updates': 'mdi:shield-check',
  };

  React.useEffect(() => {
    console.log('ModernInvoicePage - Theme mode:', theme.palette.mode);
    console.log('ModernInvoicePage - Body has dark class:', document.body.classList.contains('dark'));
    console.log('ModernInvoicePage - Header text color:', theme.palette.common.white);
    console.log('ModernInvoicePage - Table background:', document.body.classList.contains('dark') ? theme.palette.background.darkPaper : theme.palette.background.paper);
    console.log('ModernInvoicePage - Icon color:', theme.palette.primary.main);
  }, [theme.palette.mode]);

  return (
    <ThemeProvider theme={theme}>
      <Root className="invoice-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <Card className="invoice-card">
            <Box className="header-banner">
              <Typography
                variant="h4"
                className="header-text"
                sx={{
                  fontFamily: '"IBM Plex Sans", sans-serif',
                  fontWeight: 700,
                  fontSize: '1.8rem',
                }}
              >
                INVOICE #INV-2025-0013
              </Typography>
              <Typography
                variant="subtitle1"
                className="header-text"
                sx={{
                  fontFamily: '"IBM Plex Sans", sans-serif',
                  fontWeight: 500,
                  fontSize: '1rem',
                }}
              >
                Singularity Inc.
              </Typography>
            </Box>
            <CardContent sx={{ p: 4 }}>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 5, flexWrap: 'wrap', gap: 3 }}>
                <Box>
                  <Typography
                    variant="h6"
                    sx={{
                      fontFamily: '"IBM Plex Sans", sans-serif',
                      fontWeight: 500,
                      fontSize: '1.2rem',
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
                      fontSize: '0.9rem',
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
                      fontSize: '0.8rem',
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
                      fontSize: '0.8rem',
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
                      fontSize: '0.8rem',
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
                      fontSize: '0.8rem',
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
                      fontSize: '0.9rem',
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
                      fontSize: '0.9rem',
                      color: document.body.classList.contains('dark') ? theme.palette.text.darkSecondary : theme.palette.text.secondary,
                    }}
                  >
                    Due Date: August 15, 2025
                  </Typography>
                  <Typography
                    variant="h6"
                    mt={2}
                    className="total-text"
                    sx={{
                      fontFamily: '"IBM Plex Sans", sans-serif',
                      fontWeight: 500,
                      fontSize: '1.2rem',
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
                          fontSize: '0.9rem',
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
                          fontSize: '0.9rem',
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
                          fontSize: '0.9rem',
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
                          fontSize: '0.9rem',
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
                    {
                      service: 'UI/UX Design',
                      description: "Designing the application's user interface and experience with 60 screens.",
                      rate: 80,
                      qty: 200,
                      total: 16000,
                    },
                    {
                      service: 'Full-Stack Development',
                      description: 'Web and mobile app development with deployment to major platforms.',
                      rate: 70,
                      qty: 400,
                      total: 28000,
                    },
                    {
                      service: 'Quality Assurance',
                      description: 'Comprehensive testing across multiple devices and operating systems.',
                      rate: 30,
                      qty: 100,
                      total: 3000,
                    },
                    {
                      service: 'Technical Documentation',
                      description: 'Detailed guides and instructional content for end-users.',
                      rate: 35,
                      qty: 150,
                      total: 5250,
                    },
                    {
                      service: 'Annual Maintenance',
                      description: 'Yearly maintenance and support for the application.',
                      rate: 30000,
                      qty: 3,
                      total: 90000,
                    },
                    {
                      service: 'Security Updates',
                      description: 'Regular security patches for one year.',
                      rate: 20000,
                      qty: 2,
                      total: 40000,
                    },
                  ].map((row, index) => (
                    <TableRow key={index}>
                      <TableCell>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                          <Icon
                            icon={serviceIcons[row.service]}
                            width={20}
                            height={20}
                            className="icon"
                            sx={{
                              color: theme.palette.primary.main,
                            }}
                          />
                          <Box>
                            <Typography
                              variant="body1"
                              fontWeight={500}
                              sx={{
                                fontFamily: '"IBM Plex Sans", sans-serif',
                                fontWeight: 500,
                                fontSize: '0.9rem',
                                color: document.body.classList.contains('dark') ? theme.palette.text.darkPrimary : theme.palette.text.primary,
                              }}
                            >
                              {row.service}
                            </Typography>
                            <Typography
                              variant="caption"
                              sx={{
                                fontFamily: '"IBM Plex Sans", sans-serif',
                                fontWeight: 400,
                                fontSize: '0.75rem',
                                color: document.body.classList.contains('dark') ? theme.palette.text.darkSecondary : theme.palette.text.secondary,
                              }}
                            >
                              {row.description}
                            </Typography>
                          </Box>
                        </Box>
                      </TableCell>
                      <TableCell align="right">
                        <Typography
                          variant="body1"
                          sx={{
                            fontFamily: '"IBM Plex Sans", sans-serif',
                            fontWeight: 400,
                            fontSize: '0.9rem',
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
                            fontSize: '0.9rem',
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
                            fontSize: '0.9rem',
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

              <Box sx={{ mt: 5, display: 'flex', justifyContent: 'flex-end' }}>
                <Box sx={{ width: { xs: '100%', sm: '300px' } }}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', py: 1 }}>
                    <Typography
                      variant="body1"
                      sx={{
                        fontFamily: '"IBM Plex Sans", sans-serif',
                        fontWeight: 400,
                        fontSize: '0.9rem',
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
                        fontSize: '0.9rem',
                        color: document.body.classList.contains('dark') ? theme.palette.text.darkPrimary : theme.palette.text.primary,
                      }}
                    >
                      {formatter.format(182250)}
                    </Typography>
                  </Box>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', py: 1 }}>
                    <Typography
                      variant="body1"
                      sx={{
                        fontFamily: '"IBM Plex Sans", sans-serif',
                        fontWeight: 400,
                        fontSize: '0.9rem',
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
                        fontSize: '0.9rem',
                        color: document.body.classList.contains('dark') ? theme.palette.text.darkPrimary : theme.palette.text.primary,
                      }}
                    >
                      {formatter.format(9112.5)}
                    </Typography>
                  </Box>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', py: 1 }}>
                    <Typography
                      variant="body1"
                      sx={{
                        fontFamily: '"IBM Plex Sans", sans-serif',
                        fontWeight: 400,
                        fontSize: '0.9rem',
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
                        fontSize: '0.9rem',
                        color: document.body.classList.contains('dark') ? theme.palette.text.darkPrimary : theme.palette.text.primary,
                      }}
                    >
                      {formatter.format(5612.5)}
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      py: 1,
                      borderTop: `1px solid ${theme.palette.divider}`,
                    }}
                  >
                    <Typography
                      variant="h6"
                      fontWeight={700}
                      sx={{
                        fontFamily: '"IBM Plex Sans", sans-serif',
                        fontWeight: 700,
                        fontSize: '1.2rem',
                        color: document.body.classList.contains('dark') ? theme.palette.text.darkSecondary : theme.palette.text.secondary,
                      }}
                    >
                      Total
                    </Typography>
                    <Typography
                      variant="h6"
                      fontWeight={700}
                      className="total-text"
                      sx={{
                        fontFamily: '"IBM Plex Sans", sans-serif',
                        fontWeight: 700,
                        fontSize: '1.2rem',
                      }}
                    >
                      {formatter.format(185750)}
                    </Typography>
                  </Box>
                </Box>
              </Box>

              <Box className="footer">
                <Typography
                  variant="body1"
                  fontWeight={500}
                  sx={{
                    fontFamily: '"IBM Plex Sans", sans-serif',
                    fontWeight: 500,
                    fontSize: '0.9rem',
                    color: document.body.classList.contains('dark') ? theme.palette.text.darkSecondary : theme.palette.text.secondary,
                  }}
                >
                  Payment due within 30 days. Thank you for your business!
                </Typography>
                <Box sx={{ mt: 3, display: 'flex', alignItems: 'center', gap: 2 }}>
                  <motion.img
                    src="/assets/images/logo/logo.svg"
                    alt="logo"
                    className="footer-logo"
                    style={{ width: '32px' }}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  />
                  <Typography
                    variant="caption"
                    sx={{
                      fontFamily: '"IBM Plex Sans", sans-serif',
                      fontWeight: 400,
                      fontSize: '0.75rem',
                      color: document.body.classList.contains('dark') ? theme.palette.text.darkSecondary : theme.palette.text.secondary,
                    }}
                  >
                    Singularity Inc. | Innovate, Create, Celebrate
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

export default ModernInvoicePage;