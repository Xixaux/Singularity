'use client';

import { Box, Button, TextField, Typography, Select, MenuItem, FormControl, InputLabel } from '@mui/material';
import Add from '@mui/icons-material/Add';
import { styled } from '@mui/material/styles';

const HeaderRoot = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: theme.spacing(2),
  borderBottom: `1px solid ${theme.palette.divider}`,
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column',
    gap: theme.spacing(1),
    alignItems: 'flex-start',
  },
}));

interface UsersDashboardAppHeaderProps {
  onFilterChange: (filter: string) => void;
  onRoleFilterChange: (role: string) => void;
  onStatusFilterChange: (status: string) => void;
  onOpenAddUserDialog: () => void;
}

function UsersDashboardAppHeader({
  onFilterChange,
  onRoleFilterChange,
  onStatusFilterChange,
  onOpenAddUserDialog,
}: UsersDashboardAppHeaderProps) {
  return (
    <HeaderRoot>
      <Typography
        variant="h6"
        sx={{
          fontWeight: 400,
          color: theme => theme.palette.text.primary,
        }}
      >
        Users Management
      </Typography>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, [theme => theme.breakpoints.down('sm')]: { width: '100%' } }}>
        <TextField
          label="Filter Users"
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
          <InputLabel sx={{ fontWeight: 400 }}>Role</InputLabel>
          <Select
            label="Role"
            defaultValue="All Roles"
            onChange={(e) => onRoleFilterChange(e.target.value)}
            sx={{ fontWeight: 400 }}
          >
            <MenuItem value="All Roles">All Roles</MenuItem>
            <MenuItem value="Admin">Admin</MenuItem>
            <MenuItem value="User">User</MenuItem>
            <MenuItem value="Editor">Editor</MenuItem>
          </Select>
        </FormControl>
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
        <Button
          variant="contained"
          color="primary"
          startIcon={<Add />}
          onClick={onOpenAddUserDialog}
          sx={{
            backgroundColor: theme => theme.palette.primary.main,
            color: theme => theme.palette.primary.contrastText,
            fontWeight: 400,
          }}
        >
          Add User
        </Button>
      </Box>
    </HeaderRoot>
  );
}

export default UsersDashboardAppHeader;