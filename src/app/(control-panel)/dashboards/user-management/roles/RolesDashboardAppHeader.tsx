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

interface RolesDashboardAppHeaderProps {
  onFilterChange: (filter: string) => void;
  onStatusFilterChange: (status: string) => void;
  onPermissionFilterChange: (permission: string) => void;
  onOpenAddRoleDialog: () => void;
}

function RolesDashboardAppHeader({
  onFilterChange,
  onStatusFilterChange,
  onPermissionFilterChange,
  onOpenAddRoleDialog,
}: RolesDashboardAppHeaderProps) {
  return (
    <HeaderRoot>
      <Typography
        variant="h6"
        sx={{
          fontWeight: 400,
          color: theme => theme.palette.text.primary,
        }}
      >
        Roles Management
      </Typography>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, [theme => theme.breakpoints.down('sm')]: { width: '100%' } }}>
        <TextField
          label="Filter Roles"
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
          <InputLabel sx={{ fontWeight: 400 }}>Permission</InputLabel>
          <Select
            label="Permission"
            defaultValue="All Permissions"
            onChange={(e) => onPermissionFilterChange(e.target.value)}
            sx={{ fontWeight: 400 }}
          >
            <MenuItem value="All Permissions">All Permissions</MenuItem>
            <MenuItem value="role.view">role.view</MenuItem>
            <MenuItem value="role.edit">role.edit</MenuItem>
            <MenuItem value="role.delete">role.delete</MenuItem>
            <MenuItem value="user.view">user.view</MenuItem>
            <MenuItem value="user.edit">user.edit</MenuItem>
            <MenuItem value="user.delete">user.delete</MenuItem>
            <MenuItem value="permission.view">permission.view</MenuItem>
            <MenuItem value="permission.edit">permission.edit</MenuItem>
            <MenuItem value="permission.delete">permission.delete</MenuItem>
            <MenuItem value="dashboard.view">dashboard.view</MenuItem>
            <MenuItem value="dashboard.edit">dashboard.edit</MenuItem>
            <MenuItem value="product.add">product.add</MenuItem>
            <MenuItem value="product.edit">product.edit</MenuItem>
            <MenuItem value="product.delete">product.delete</MenuItem>
          </Select>
        </FormControl>
        <Button
          variant="contained"
          color="primary"
          startIcon={<Add />}
          onClick={onOpenAddRoleDialog}
          sx={{
            backgroundColor: theme => theme.palette.primary.main,
            color: theme => theme.palette.primary.contrastText,
            fontWeight: 400,
          }}
        >
          Add Role
        </Button>
      </Box>
    </HeaderRoot>
  );
}

export default RolesDashboardAppHeader;