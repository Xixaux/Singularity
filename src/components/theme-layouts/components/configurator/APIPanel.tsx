'use client';

import { styled, useTheme } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import Slide from '@mui/material/Slide';
import { SwipeableHandlers } from 'react-swipeable';
import SingularityScrollbars from '@singularity/core/SingularityScrollbars';
import IconButton from '@mui/material/IconButton';
import SingularitySvgIcon from '@singularity/core/SingularitySvgIcon';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Tooltip from '@mui/material/Tooltip';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import { useState } from 'react';

const StyledDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialog-paper': {
    position: 'fixed',
    width: 600,
    maxWidth: '95vw',
    backgroundColor: 'var(--mui-palette-background-paper)',
    top: 0,
    height: '100%',
    minHeight: '100%',
    bottom: 0,
    right: 0,
    margin: 0,
    zIndex: 1000,
    borderRadius: 0,
  },
}));

const APIKeysContainer = styled(Box)(({ theme }) => ({
  maxHeight: '35vh',
  border: `1px solid ${theme.palette.divider}`,
  borderRadius: theme.shape.borderRadius,
  padding: theme.spacing(2),
  overflowY: 'auto',
  backgroundColor: theme.palette.mode === 'dark' ? '#1C2526' : '#F5F5F5',
  color: theme.palette.text.primary,
}));

const APIIntegrationsContainer = styled(Box)(({ theme }) => ({
  maxHeight: '35vh',
  border: `1px solid ${theme.palette.divider}`,
  borderRadius: theme.shape.borderRadius,
  padding: theme.spacing(2),
  overflowY: 'auto',
  backgroundColor: theme.palette.mode === 'dark' ? '#1C2526' : '#F5F5F5',
  color: theme.palette.text.primary,
}));

const WebhookSection = styled(Box)(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  borderRadius: theme.shape.borderRadius,
  padding: theme.spacing(2),
  backgroundColor: theme.palette.background.default,
}));

const CreateButton = styled(Button)(({ theme }) => ({
  backgroundColor: '#6BC9F7',
  color: 'var(--mui-palette-secondary-contrastText)',
  '&:hover': {
    backgroundColor: '#5AB8E6',
  },
  textTransform: 'none',
  padding: theme.spacing(1, 2),
  minWidth: 120,
}));

const ActionButton = styled(IconButton)(({ theme }) => ({
  color: theme.palette.text.primary,
}));

const StyledTextField = styled(TextField)(({ theme }) => ({
  '& .MuiInputBase-root': {
    height: 40,
    fontSize: '0.875rem',
  },
  maxWidth: 280,
}));

type TransitionProps = {
  children?: React.ReactElement;
  ref?: React.RefObject<HTMLDivElement>;
};

function Transition(props: TransitionProps) {
  const { children, ref, ...other } = props;
  const theme = useTheme();

  if (!children) {
    return null;
  }

  return (
    <Slide
      direction={theme.direction === 'ltr' ? 'left' : 'right'}
      ref={ref}
      {...other}
    >
      {children}
    </Slide>
  );
}

type APIKeysProps = {
  apiHandlers: SwipeableHandlers;
  onClose: () => void;
  open: boolean;
};

// Mock data for API Keys
const mockApiKeys = [
  {
    id: '1',
    name: 'Main App Key',
    key: 'pk_7b8c9d0e1f2g3h4i',
    secret: 'sc_9j0k1l2m3n4o5p6q',
    createdAt: '2025-08-02',
    lastUsed: '2025-08-07',
    scopes: ['read', 'write'],
    expiresAt: '2025-09-02',
    enabled: true,
  },
  {
    id: '2',
    name: 'Test Key',
    key: 'pk_4r5s6t7u8v9w0x1y',
    secret: 'sc_2z3a4b5c6d7e8f9g',
    createdAt: '2025-07-20',
    lastUsed: '2025-08-05',
    scopes: ['read'],
    expiresAt: null,
    enabled: false,
  },
];

// Mock data for API Integrations
const mockApiIntegrations = [
  { id: '1', name: 'User Authentication', key: 'xy7z8p9q0r1t2u3v4', dailyCalls: 12000, status: 'Active' },
  { id: '2', name: 'Social Media Sync', key: 'mn4p5q6r7s8t9u0v1', dailyCalls: 14000, status: 'Active' },
  { id: '3', name: 'SMS Notifications', key: 'ab2c3d4e5f6g7h8i9', dailyCalls: 18000, status: 'Paused' },
  { id: '4', name: 'Shipping Manager', key: 'jk9l0m1n2o3p4q5r6', dailyCalls: 13000, status: 'Active' },
  { id: '5', name: 'SEO Optimizer', key: 'st7u8v9w0x1y2z3a4', dailyCalls: 7000, status: 'Inactive' },
];

// Mock data for Webhook Logs
const mockWebhookLogs = [
  { id: '1', event: 'User Login', timestamp: '2025-08-07 10:00 AM', status: 'Success' },
  { id: '2', event: 'Order Created', timestamp: '2025-08-07 09:30 AM', status: 'Failed' },
];

function APIKeys(props: APIKeysProps) {
  const { apiHandlers, onClose, open } = props;
  const [keyName, setKeyName] = useState('');
  const [keyScopes, setKeyScopes] = useState<string[]>(['read']);
  const [keyExpiry, setKeyExpiry] = useState('');
  const [apiKeys, setApiKeys] = useState(mockApiKeys);
  const [apiIntegrations, setApiIntegrations] = useState(mockApiIntegrations);
  const [webhookUrl, setWebhookUrl] = useState('');
  const [webhookName, setWebhookName] = useState('');
  const [eventType, setEventType] = useState('All Events');
  const [useCustomHeaders, setUseCustomHeaders] = useState(false);
  const [webhookLogs] = useState(mockWebhookLogs);
  const theme = useTheme();
  const iconColor = 'var(--mui-palette-text-primary)';

  const handleCreateApiKey = () => {
    if (keyName.trim()) {
      const newKey = {
        id: String(apiKeys.length + 1),
        name: keyName,
        key: `pk_${Math.random().toString(36).substring(2, 18)}`,
        secret: `sc_${Math.random().toString(36).substring(2, 18)}`,
        createdAt: new Date().toISOString().split('T')[0],
        lastUsed: null,
        scopes: keyScopes,
        expiresAt: keyExpiry || null,
        enabled: true,
      };
      setApiKeys([...apiKeys, newKey]);
      setKeyName('');
      setKeyScopes(['read']);
      setKeyExpiry('');
      console.log('Created API key:', newKey);
    }
  };

  const handleCreateIntegration = () => {
    if (keyName.trim()) {
      const newIntegration = {
        id: String(apiIntegrations.length + 1),
        name: keyName,
        key: `pk_${Math.random().toString(36).substring(2, 18)}`,
        dailyCalls: 0,
        status: 'Active',
      };
      setApiIntegrations([...apiIntegrations, newIntegration]);
      setKeyName('');
      console.log('Created API integration:', newIntegration);
    }
  };

  const handleCopy = (value: string) => {
    navigator.clipboard.writeText(value);
    console.log('Copied:', value);
  };

  const handleRevokeApiKey = (id: string) => {
    setApiKeys(apiKeys.filter((key) => key.id !== id));
    console.log('Revoked API key:', id);
  };

  const handleToggleApiKey = (id: string) => {
    setApiKeys(
      apiKeys.map((key) =>
        key.id === id ? { ...key, enabled: !key.enabled } : key
      )
    );
    console.log('Toggled API key:', id);
  };

  const handleRevokeIntegration = (id: string) => {
    setApiIntegrations(apiIntegrations.filter((integration) => integration.id !== id));
    console.log('Revoked integration:', id);
  };

  const handleToggleIntegration = (id: string) => {
    setApiIntegrations(
      apiIntegrations.map((integration) =>
        integration.id === id
          ? { ...integration, status: integration.status === 'Active' ? 'Paused' : 'Active' }
          : integration
      )
    );
    console.log('Toggled integration:', id);
  };

  const handleEditIntegration = (id: string) => {
    console.log('Edit integration:', id);
  };

  const handleSaveWebhook = () => {
    console.log('Saved webhook:', { webhookUrl, webhookName, eventType, useCustomHeaders });
  };

  return (
    <StyledDialog
      TransitionComponent={Transition}
      aria-labelledby="api-keys-panel"
      aria-describedby="api-keys"
      open={open}
      onClose={onClose}
      slotProps={{
        backdrop: {
          invisible: true,
        },
      }}
      classes={{
        paper: 'shadow-lg',
      }}
      {...apiHandlers}
    >
      <SingularityScrollbars className="p-4 sm:p-6 space-y-4">
        <IconButton
          className="fixed top-0 z-10 ltr:right-0 rtl:left-0"
          onClick={onClose}
          size="large"
        >
          <SingularitySvgIcon sx={{ color: iconColor }}>heroicons-outline:x-mark</SingularitySvgIcon>
        </IconButton>

        <Typography className="font-semibold" variant="h6">
          API Keys Management
        </Typography>

        <Typography variant="body2" color="textSecondary" marginBottom={2}>
          Securely manage API keys, integrations, and webhooks for your application.
        </Typography>

        <Accordion defaultExpanded={false}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography variant="subtitle1" className="font-semibold">
              API Keys
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Box display="flex" flexDirection="column" gap={2} marginBottom={2}>
              <StyledTextField
                variant="outlined"
                placeholder="Enter key name..."
                value={keyName}
                onChange={(e) => setKeyName(e.target.value)}
                onKeyPress={(e) => {
                  if (e.key === 'Enter' && keyName.trim()) {
                    handleCreateApiKey();
                  }
                }}
              />
              <Select
                multiple
                value={keyScopes}
                onChange={(e) => setKeyScopes(e.target.value as string[])}
                variant="outlined"
                displayEmpty
                renderValue={(selected) => (selected.length ? selected.join(', ') : 'Select scopes')}
              >
                <MenuItem value="read">Read</MenuItem>
                <MenuItem value="write">Write</MenuItem>
                <MenuItem value="admin">Admin</MenuItem>
              </Select>
              <StyledTextField
                variant="outlined"
                type="date"
                label="Expiry Date (Optional)"
                value={keyExpiry}
                onChange={(e) => setKeyExpiry(e.target.value)}
                InputLabelProps={{ shrink: true }}
              />
              <CreateButton
                onClick={handleCreateApiKey}
                disabled={!keyName.trim()}
                startIcon={<SingularitySvgIcon sx={{ color: 'var(--mui-palette-secondary-contrastText)' }}>heroicons-solid:plus</SingularitySvgIcon>}
              >
                Add Key
              </CreateButton>
            </Box>
            <APIKeysContainer>
              {apiKeys.length === 0 ? (
                <Typography variant="body2" color="textSecondary">
                  No API keys found. Add one to get started.
                </Typography>
              ) : (
                <TableContainer>
                  <Table size="small" aria-label="API keys table">
                    <TableHead>
                      <TableRow>
                        <TableCell sx={{ color: theme.palette.text.primary }}>Name</TableCell>
                        <TableCell sx={{ color: theme.palette.text.primary }}>Key</TableCell>
                        <TableCell sx={{ color: theme.palette.text.primary }}>Secret</TableCell>
                        <TableCell sx={{ color: theme.palette.text.primary }}>Scopes</TableCell>
                        <TableCell sx={{ color: theme.palette.text.primary }}>Last Used</TableCell>
                        <TableCell sx={{ color: theme.palette.text.primary }}>Expires</TableCell>
                        <TableCell sx={{ color: theme.palette.text.primary }}>Enabled</TableCell>
                        <TableCell sx={{ color: theme.palette.text.primary }}>Actions</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {apiKeys.map((key) => (
                        <TableRow key={key.id}>
                          <TableCell sx={{ color: theme.palette.text.primary }}>{key.name}</TableCell>
                          <TableCell sx={{ color: theme.palette.text.primary }}>{key.key.substring(0, 8)}...</TableCell>
                          <TableCell sx={{ color: theme.palette.text.primary }}>{key.secret.substring(0, 8)}...</TableCell>
                          <TableCell sx={{ color: theme.palette.text.primary }}>{key.scopes.join(', ')}</TableCell>
                          <TableCell sx={{ color: theme.palette.text.primary }}>{key.lastUsed || 'Never'}</TableCell>
                          <TableCell sx={{ color: theme.palette.text.primary }}>{key.expiresAt || 'None'}</TableCell>
                          <TableCell>
                            <Switch
                              checked={key.enabled}
                              onChange={() => handleToggleApiKey(key.id)}
                              size="small"
                            />
                          </TableCell>
                          <TableCell>
                            <Tooltip title="Copy Key">
                              <ActionButton
                                onClick={() => handleCopy(key.key)}
                                size="small"
                              >
                                <SingularitySvgIcon sx={{ color: iconColor }}>
                                  heroicons-outline:clipboard
                                </SingularitySvgIcon>
                              </ActionButton>
                            </Tooltip>
                            <Tooltip title="Copy Secret">
                              <ActionButton
                                onClick={() => handleCopy(key.secret)}
                                size="small"
                              >
                                <SingularitySvgIcon sx={{ color: iconColor }}>
                                  heroicons-outline:lock-closed
                                </SingularitySvgIcon>
                              </ActionButton>
                            </Tooltip>
                            <Tooltip title="Revoke Key">
                              <ActionButton
                                onClick={() => handleRevokeApiKey(key.id)}
                                size="small"
                              >
                                <SingularitySvgIcon sx={{ color: iconColor }}>
                                  heroicons-outline:trash
                                </SingularitySvgIcon>
                              </ActionButton>
                            </Tooltip>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              )}
            </APIKeysContainer>
          </AccordionDetails>
        </Accordion>

        <Accordion defaultExpanded={false}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography variant="subtitle1" className="font-semibold">
              API Integrations
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Box display="flex" alignItems="center" gap={1} marginBottom={2}>
              <StyledTextField
                variant="outlined"
                placeholder="Enter integration name..."
                value={keyName}
                onChange={(e) => setKeyName(e.target.value)}
                onKeyPress={(e) => {
                  if (e.key === 'Enter' && keyName.trim()) {
                    handleCreateIntegration();
                  }
                }}
              />
              <CreateButton
                onClick={handleCreateIntegration}
                disabled={!keyName.trim()}
                startIcon={<SingularitySvgIcon sx={{ color: 'var(--mui-palette-secondary-contrastText)' }}>heroicons-solid:plus</SingularitySvgIcon>}
              >
                Add Integration
              </CreateButton>
            </Box>
            <APIIntegrationsContainer>
              {apiIntegrations.length === 0 ? (
                <Typography variant="body2" color="textSecondary">
                  No API integrations found. Add one to get started.
                </Typography>
              ) : (
                <TableContainer>
                  <Table size="small" aria-label="API integrations table">
                    <TableHead>
                      <TableRow>
                        <TableCell sx={{ color: theme.palette.text.primary }}>Integration</TableCell>
                        <TableCell sx={{ color: theme.palette.text.primary }}>API Key</TableCell>
                        <TableCell sx={{ color: theme.palette.text.primary }}>Daily Calls</TableCell>
                        <TableCell sx={{ color: theme.palette.text.primary }}>Status</TableCell>
                        <TableCell sx={{ color: theme.palette.text.primary }}>Actions</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {apiIntegrations.slice(0, 10).map((integration) => (
                        <TableRow key={integration.id}>
                          <TableCell sx={{ color: theme.palette.text.primary }}>{integration.name}</TableCell>
                          <TableCell sx={{ color: theme.palette.text.primary }}>{integration.key.substring(0, 8)}...</TableCell>
                          <TableCell sx={{ color: theme.palette.text.primary }}>{integration.dailyCalls.toLocaleString()}</TableCell>
                          <TableCell>
                            <Switch
                              checked={integration.status === 'Active'}
                              onChange={() => handleToggleIntegration(integration.id)}
                              size="small"
                            />
                            <Typography
                              variant="body2"
                              component="span"
                              sx={{ color: theme.palette.text.primary, ml: 1 }}
                            >
                              {integration.status}
                            </Typography>
                          </TableCell>
                          <TableCell>
                            <Tooltip title="Copy Key">
                              <ActionButton
                                onClick={() => handleCopy(integration.key)}
                                size="small"
                              >
                                <SingularitySvgIcon sx={{ color: iconColor }}>
                                  heroicons-outline:clipboard
                                </SingularitySvgIcon>
                              </ActionButton>
                            </Tooltip>
                            <Tooltip title="Revoke Key">
                              <ActionButton
                                onClick={() => handleRevokeIntegration(integration.id)}
                                size="small"
                              >
                                <SingularitySvgIcon sx={{ color: iconColor }}>
                                  heroicons-outline:trash
                                </SingularitySvgIcon>
                              </ActionButton>
                            </Tooltip>
                            <Tooltip title="Edit Integration">
                              <ActionButton
                                onClick={() => handleEditIntegration(integration.id)}
                                size="small"
                              >
                                <SingularitySvgIcon sx={{ color: iconColor }}>
                                  heroicons-outline:pencil
                                </SingularitySvgIcon>
                              </ActionButton>
                            </Tooltip>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              )}
            </APIIntegrationsContainer>
          </AccordionDetails>
        </Accordion>

        <Accordion defaultExpanded={false}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography variant="subtitle1" className="font-semibold">
              Webhooks
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <WebhookSection>
              <Box display="flex" flexDirection="column" gap={2}>
                <StyledTextField
                  variant="outlined"
                  label="Webhook URL"
                  placeholder="Enter URL"
                  value={webhookUrl}
                  onChange={(e) => setWebhookUrl(e.target.value)}
                />
                <StyledTextField
                  variant="outlined"
                  label="Webhook Name"
                  placeholder="Enter webhook name"
                  value={webhookName}
                  onChange={(e) => setWebhookName(e.target.value)}
                />
                <Select
                  fullWidth
                  value={eventType}
                  onChange={(e) => setEventType(e.target.value)}
                  variant="outlined"
                >
                  <MenuItem value="All Events">All Events</MenuItem>
                  <MenuItem value="Specific Events">Specific Events</MenuItem>
                </Select>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={useCustomHeaders}
                      onChange={(e) => setUseCustomHeaders(e.target.checked)}
                    />
                  }
                  label="Use Custom Headers"
                />
                <CreateButton
                  onClick={handleSaveWebhook}
                  disabled={!webhookUrl.trim() || !webhookName.trim()}
                  startIcon={<SingularitySvgIcon sx={{ color: 'var(--mui-palette-secondary-contrastText)' }}>heroicons-solid:save</SingularitySvgIcon>}
                >
                  Save Webhook
                </CreateButton>
                <Typography variant="subtitle2" className="font-semibold" marginTop={2}>
                  Recent Webhook Logs
                </Typography>
                <Box maxHeight="15vh" overflow="auto">
                  {webhookLogs.length === 0 ? (
                    <Typography variant="body2" color="textSecondary">
                      No webhook logs available.
                    </Typography>
                  ) : (
                    <Table size="small" aria-label="Webhook logs table">
                      <TableHead>
                        <TableRow>
                          <TableCell sx={{ color: theme.palette.text.primary }}>Event</TableCell>
                          <TableCell sx={{ color: theme.palette.text.primary }}>Timestamp</TableCell>
                          <TableCell sx={{ color: theme.palette.text.primary }}>Status</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {webhookLogs.map((log) => (
                          <TableRow key={log.id}>
                            <TableCell sx={{ color: theme.palette.text.primary }}>{log.event}</TableCell>
                            <TableCell sx={{ color: theme.palette.text.primary }}>{log.timestamp}</TableCell>
                            <TableCell sx={{ color: theme.palette.text.primary }}>{log.status}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  )}
                </Box>
              </Box>
            </WebhookSection>
          </AccordionDetails>
        </Accordion>
      </SingularityScrollbars>
    </StyledDialog>
  );
}

export default APIKeys;