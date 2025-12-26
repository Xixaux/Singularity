'use client';

import { Box, TextField, Typography, Select, MenuItem, FormControl, InputLabel } from '@mui/material';
import { styled } from '@mui/material/styles';
import PageBreadcrumb from 'src/components/PageBreadcrumb';

const HeaderRoot = styled(Box)(({ theme }) => ({
  padding: theme.spacing(2),
  borderBottom: `1px solid ${theme.palette.divider}`,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column',
    gap: theme.spacing(1),
    alignItems: 'flex-start',
  },
}));

interface LogsDashboardAppHeaderProps {
  onFilterChange: (filter: string) => void;
  onStatusFilterChange: (status: string) => void;
  onActionFilterChange: (action: string) => void;
}

function LogsDashboardAppHeader({
  onFilterChange,
  onStatusFilterChange,
  onActionFilterChange,
}: LogsDashboardAppHeaderProps) {
  return (
    <HeaderRoot>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <PageBreadcrumb className="mb-2" />
        <Typography
          variant="h6"
          sx={{ fontWeight: 400, color: theme => theme.palette.text.primary }}
        >
          Logs Dashboard
        </Typography>
        <Typography
          variant="body2"
          sx={{ fontWeight: 400, color: theme => theme.palette.text.secondary }}
        >
          Monitor user activity and system logs
        </Typography>
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, [theme => theme.breakpoints.down('sm')]: { width: '100%' } }}>
        <TextField
          label="Search Logs"
          variant="outlined"
          size="small"
          onChange={(e) => onFilterChange(e.target.value)}
          sx={{
            width: { xs: '100%', sm: 200 },
            '& .MuiInputBase-root': { fontWeight: 400 },
            '& .MuiInputLabel-root': { fontWeight: 400 },
          }}
        />
        <FormControl variant="outlined" size="small" sx={{ width: { xs: '100%', sm: 150 } }}>
          <InputLabel sx={{ fontWeight: 400 }}>Status</InputLabel>
          <Select
            label="Status"
            defaultValue="All Statuses"
            onChange={(e) => onStatusFilterChange(e.target.value)}
            sx={{ fontWeight: 400 }}
          >
            <MenuItem value="All Statuses">All Statuses</MenuItem>
            <MenuItem value="Active">Active</MenuItem>
            <MenuItem value="Inactive">Inactive</MenuItem>
            <MenuItem value="Trashed">Trashed</MenuItem>
          </Select>
        </FormControl>
        <FormControl variant="outlined" size="small" sx={{ width: { xs: '100%', sm: 150 } }}>
          <InputLabel sx={{ fontWeight: 400 }}>Action</InputLabel>
          <Select
            label="Action"
            defaultValue="All Actions"
            onChange={(e) => onActionFilterChange(e.target.value)}
            sx={{ fontWeight: 400 }}
          >
            <MenuItem value="All Actions">All Actions</MenuItem>
            <MenuItem value="Login">Login</MenuItem>
            <MenuItem value="Logout">Logout</MenuItem>
            <MenuItem value="Session Timeout">Session Timeout</MenuItem>
            <MenuItem value="Create User">Create User</MenuItem>
            <MenuItem value="Update User">Update User</MenuItem>
            <MenuItem value="Delete User">Delete User</MenuItem>
            <MenuItem value="Create Role">Create Role</MenuItem>
            <MenuItem value="Update Role">Update Role</MenuItem>
            <MenuItem value="Delete Role">Delete Role</MenuItem>
            <MenuItem value="Create Permission">Create Permission</MenuItem>
            <MenuItem value="Update Permission">Update Permission</MenuItem>
            <MenuItem value="Delete Permission">Delete Permission</MenuItem>
            <MenuItem value="Password Reset">Password Reset</MenuItem>
            <MenuItem value="Failed Login">Failed Login</MenuItem>
          </Select>
        </FormControl>
      </Box>
    </HeaderRoot>
  );
}

export default LogsDashboardAppHeader;