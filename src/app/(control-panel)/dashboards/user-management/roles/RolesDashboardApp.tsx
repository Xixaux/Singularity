'use client';

import { useState, useMemo, useCallback, memo } from 'react';
import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TablePagination,
  IconButton,
  Chip,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Typography,
  useTheme,
  styled,
} from '@mui/material';
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from '@tanstack/react-table';
import Edit from '@mui/icons-material/Edit';
import DeleteForever from '@mui/icons-material/DeleteForever';
import Restore from '@mui/icons-material/Restore';
import Star from '@mui/icons-material/Star';
import RolesContextMenu from './RolesContextMenu';
import RolesDashboardAppHeader from './RolesDashboardAppHeader';

const Root = styled(Box)(({ theme }) => ({
  padding: theme.spacing(2),
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(2),
  minHeight: '100%',
  maxWidth: '1400px',
  margin: '0 auto',
  width: '100%',
  boxSizing: 'border-box',
}));

const StyledTableContainer = styled(TableContainer)(({ theme }) => ({
  borderRadius: theme.shape.borderRadius,
  boxShadow: theme.shadows[1],
  width: '100%',
  maxWidth: '100%',
  overflowX: 'auto',
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(1),
  },
}));

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  fontSize: '0.875rem',
  fontWeight: 400,
  color: theme.palette.text.primary,
  '&:first-of-type': {
    paddingLeft: theme.spacing(2),
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '0.75rem',
    padding: theme.spacing(1),
  },
}));

interface Role {
  id: number;
  name: string;
  slug: string;
  permissions: string[];
  status: 'Active' | 'Inactive';
  createdAt: string;
  notes: string;
  trashed: boolean;
}

interface NewRoleState {
  name: string;
  slug: string;
  permissions: string[];
  status: 'Active' | 'Inactive';
  notes: string;
}

interface FormErrors {
  name: string;
  slug: string;
  permissions: string;
}

const columnHelper = createColumnHelper<Role>();

const getPermissionColor = (permission: string, theme: any) => {
  if (permission.startsWith('role.')) return theme.palette.info.main;
  if (permission.startsWith('user.')) return theme.palette.primary.main;
  if (permission.startsWith('product.')) return theme.palette.success.main;
  if (permission.startsWith('permission.')) return theme.palette.secondary.main;
  if (permission.startsWith('dashboard.')) return theme.palette.warning.main;
  return theme.palette.grey[700];
};

const PermissionChip = memo(({ permission, theme }: { permission: string, theme: any }) => (
  <Chip
    key={permission}
    label={permission}
    sx={{
      backgroundColor: getPermissionColor(permission, theme),
      color: theme.palette.common.white,
      fontWeight: 400,
      fontSize: '0.75rem',
    }}
  />
));
PermissionChip.displayName = 'PermissionChip';

function RolesDashboardApp() {
  const theme = useTheme();

  const [data, setData] = useState<Role[]>([
    { id: 1, name: 'Administrator', slug: 'admin', permissions: ['all'], status: 'Active', createdAt: '2025-07-01 09:00', notes: 'Full system access', trashed: false },
    { id: 2, name: 'Content Editor', slug: 'editor', permissions: ['dashboard.view', 'product.add', 'product.edit'], status: 'Active', createdAt: '2025-07-15 14:20', notes: 'Manages content updates', trashed: false },
    { id: 3, name: 'Guest', slug: 'guest', permissions: ['dashboard.view'], status: 'Inactive', createdAt: '2025-06-20 11:30', notes: 'Limited access for visitors', trashed: false },
    { id: 4, name: 'Moderator', slug: 'moderator', permissions: ['user.view', 'user.edit', 'product.edit', 'product.delete'], status: 'Active', createdAt: '2025-08-01 16:45', notes: 'Moderates user content', trashed: false },
    { id: 5, name: 'Analyst', slug: 'analyst', permissions: ['dashboard.view', 'permission.view'], status: 'Inactive', createdAt: '2025-07-10 10:15', notes: 'Data analysis role', trashed: false },
  ]);

  const [filter, setFilter] = useState('');
  const [statusFilter, setStatusFilter] = useState('All Statuses');
  const [permissionFilter, setPermissionFilter] = useState('All Permissions');
  const [contextMenu, setContextMenu] = useState<{ mouseX: number; mouseY: number; row: Role | null } | null>(null);
  const [openAddRoleDialog, setOpenAddRoleDialog] = useState(false);
  const [newRole, setNewRole] = useState<NewRoleState>({ name: '', slug: '', permissions: [], status: 'Active', notes: '' });
  const [formErrors, setFormErrors] = useState<FormErrors>({ name: '', slug: '', permissions: '' });

  const handleEdit = useCallback((role: Role) => {
    console.log('Edit role:', role);
  }, []);

  const handleSetDefault = useCallback((role: Role) => {
    console.log('Set as default:', role);
  }, []);

  const handleDelete = useCallback((role: Role) => {
    setData(prev => prev.map((item) => (item.id === role.id ? { ...item, trashed: true } : item)));
  }, []);

  const handleRestore = useCallback((role: Role) => {
    setData(prev => prev.map((item) => (item.id === role.id ? { ...item, trashed: false } : item)));
  }, []);

  const handlePermanentDelete = useCallback((role: Role) => {
    setData(prev => prev.filter((item) => item.id !== role.id));
  }, []);

  const handleContextMenu = useCallback((event: React.MouseEvent, row: Role) => {
    event.preventDefault();
    setContextMenu({ mouseX: event.clientX - 2, mouseY: event.clientY - 4, row });
  }, []);

  const handleCloseContextMenu = useCallback(() => {
    setContextMenu(null);
  }, []);

  const handleFilterChange = useCallback((value: string) => {
    setFilter(value);
  }, []);

  const handleStatusFilterChange = useCallback((value: string) => {
    setStatusFilter(value);
  }, []);

  const handlePermissionFilterChange = useCallback((value: string) => {
    setPermissionFilter(value);
  }, []);

  const handleOpenAddRoleDialog = useCallback(() => {
    setOpenAddRoleDialog(true);
  }, []);

  const handleCloseAddRoleDialog = useCallback(() => {
    setOpenAddRoleDialog(false);
    setNewRole({ name: '', slug: '', permissions: [], status: 'Active', notes: '' });
    setFormErrors({ name: '', slug: '', permissions: '' });
  }, []);

  const handleAddRole = useCallback(() => {
    let errors: FormErrors = { name: '', slug: '', permissions: '' };
    
    if (!newRole.name.trim()) errors.name = 'Name is required';
    if (!newRole.slug.trim()) errors.slug = 'Slug is required';
    if (newRole.slug.trim() && data.some((role) => role.slug === newRole.slug.trim())) errors.slug = 'Slug must be unique';
    if (newRole.permissions.length === 0) errors.permissions = 'At least one permission is required';
    setFormErrors(errors);

    if (errors.name || errors.slug || errors.permissions) return;

    const newId = Math.max(...data.map((role) => role.id), 0) + 1;
    const newRoleData: Role = {
      id: newId,
      name: newRole.name.trim(),
      slug: newRole.slug.trim(),
      permissions: newRole.permissions,
      status: newRole.status,
      createdAt: new Date().toISOString().slice(0, 16).replace('T', ' '),
      notes: newRole.notes.trim() || '',
      trashed: false,
    };
    setData([...data, newRoleData]);
    handleCloseAddRoleDialog();
  }, [data, newRole, handleCloseAddRoleDialog]);

  const columns = useMemo(
    () => [
      columnHelper.accessor('id', { header: 'ID' }),
      columnHelper.accessor('name', { header: 'Name' }),
      columnHelper.accessor('slug', { header: 'Slug' }),
      columnHelper.accessor('permissions', {
        header: 'Permissions',
        cell: (info) => {
          const permissions = info.getValue();
          if (permissions.includes('all')) {
            return (
              <Chip
                label="All"
                sx={{
                  backgroundColor: theme.palette.secondary.main,
                  color: theme.palette.common.white,
                  fontWeight: 400,
                  fontSize: '0.75rem',
                }}
              />
            );
          }
          return (
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
              {permissions.map((permission: string) => (
                <PermissionChip key={permission} permission={permission} theme={theme} />
              ))}
            </Box>
          );
        },
        filterFn: (row, _id, filterValue: string) => {
          return filterValue === 'All Permissions' ? true : row.original.permissions.includes(filterValue);
        },
      }),
      columnHelper.accessor('status', {
        header: 'Status',
        cell: (info) => {
          const row = info.row.original;
          const isTrashed = row.trashed;
          const status = info.getValue();

          if (isTrashed) {
            return <Chip label="Trashed" sx={{ backgroundColor: theme.palette.grey[600], color: theme.palette.common.white, fontWeight: 400 }} />;
          }

          return (
            <Chip
              label={status}
              sx={{
                backgroundColor: status === 'Active' ? '#36D900' : '#FF2621',
                color: theme.palette.common.white,
                fontWeight: 400,
              }}
            />
          );
        },
        filterFn: (row, _id, filterValue: string) => {
          if (filterValue === 'All Statuses') return true;
          if (filterValue === 'Trashed') return row.original.trashed;
          return !row.original.trashed && row.getValue('status') === filterValue;
        },
      }),
      columnHelper.accessor('createdAt', { header: 'Created At' }),
      columnHelper.accessor('notes', { header: 'Notes', cell: (info) => info.getValue() || '-' }),
      columnHelper.display({
        id: 'actions',
        header: 'Actions',
        cell: ({ row }) => (
          <Box>
            {!row.original.trashed ? (
              <>
                <IconButton onClick={() => handleEdit(row.original)}><Edit fontSize="small" sx={{ color: theme.palette.primary.main }} /></IconButton>
                <IconButton onClick={() => handleSetDefault(row.original)}><Star fontSize="small" sx={{ color: theme.palette.warning.main }} /></IconButton>
                <IconButton onClick={() => handleDelete(row.original)}><DeleteForever fontSize="small" sx={{ color: theme.palette.error.main }} /></IconButton>
              </>
            ) : (
              <>
                <IconButton onClick={() => handleRestore(row.original)}><Restore fontSize="small" sx={{ color: theme.palette.success.main }} /></IconButton>
                <IconButton onClick={() => handlePermanentDelete(row.original)}><DeleteForever fontSize="small" sx={{ color: theme.palette.error.main }} /></IconButton>
              </>
            )}
          </Box>
        ),
      }),
    ],
    [handleEdit, handleSetDefault, handleDelete, handleRestore, handlePermanentDelete]
  );
  
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    state: {
      globalFilter: filter,
      columnFilters: [
        { id: 'status', value: statusFilter },
        { id: 'permissions', value: permissionFilter },
      ],
    } as any,
    onGlobalFilterChange: setFilter,
    initialState: { pagination: { pageSize: 4, pageIndex: 0 } },
    autoResetPageIndex: false,
  });

  return (
    <Root>
      <RolesDashboardAppHeader
        onFilterChange={handleFilterChange}
        onStatusFilterChange={handleStatusFilterChange}
        onPermissionFilterChange={handlePermissionFilterChange}
        onOpenAddRoleDialog={handleOpenAddRoleDialog}
      />
      <StyledTableContainer component={Paper}>
        <Table>
          <TableHead>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <StyledTableCell
                    key={header.id}
                    onClick={header.column.getToggleSortingHandler()}
                    sx={{ cursor: header.column.getCanSort() ? 'pointer' : 'default' }}
                  >
                    {flexRender(header.column.columnDef.header, header.getContext())}
                    {{ asc: ' 🔼', desc: ' 🔽' }[header.column.getIsSorted() as string] ?? null}
                  </StyledTableCell>
                ))}
              </TableRow>
            ))}
          </TableHead>
          <TableBody>
            {table.getRowModel().rows.map((row) => (
              <TableRow
                key={row.id}
                onContextMenu={(e) => handleContextMenu(e, row.original)}
                sx={{ '&:hover': { backgroundColor: theme.palette.action.hover } }}
              >
                {row.getVisibleCells().map((cell) => (
                  <StyledTableCell key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </StyledTableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <TablePagination
          component="div"
          count={table.getFilteredRowModel().rows.length}
          rowsPerPage={table.getState().pagination.pageSize}
          page={table.getState().pagination.pageIndex}
          onPageChange={(_, page) => table.setPageIndex(page)}
          onRowsPerPageChange={(e) => table.setPageSize(Number(e.target.value))}
          rowsPerPageOptions={[4, 5, 10, 25]}
          showFirstButton
          showLastButton
        />
      </StyledTableContainer>
      <Dialog
        open={openAddRoleDialog}
        onClose={handleCloseAddRoleDialog}
        fullWidth
        maxWidth="sm"
      >
        <DialogTitle sx={{ fontWeight: 400, color: theme.palette.text.primary }}>
          Add New Role
        </DialogTitle>
        <DialogContent>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, mt: 1 }}>
            <TextField
              label="Name"
              variant="outlined"
              size="small"
              value={newRole.name}
              onChange={(e) => setNewRole({ ...newRole, name: e.target.value })}
              error={!!formErrors.name}
              helperText={formErrors.name}
              sx={{
                '& .MuiInputBase-root': { fontWeight: 400 },
                '& .MuiInputLabel-root': { fontWeight: 400, color: 'var(--text-color)', px: 1, borderRadius: 1 },
                '& .MuiInputLabel-shrink': { transform: 'translate(14px, -6px) scale(0.75)', px: 1 },
              }}
            />
            <TextField
              label="Slug"
              variant="outlined"
              size="small"
              value={newRole.slug}
              onChange={(e) => setNewRole({ ...newRole, slug: e.target.value })}
              error={!!formErrors.slug}
              helperText={formErrors.slug}
              sx={{
                '& .MuiInputBase-root': { fontWeight: 400 },
                '& .MuiInputLabel-root': { fontWeight: 400, color: 'var(--text-color)', px: 1, borderRadius: 1 },
                '& .MuiInputLabel-shrink': { transform: 'translate(14px, -6px) scale(0.75)', px: 1 },
              }}
            />
            <FormControl variant="outlined" size="small">
              <InputLabel
                sx={{
                  fontWeight: 400,
                  color: 'var(--text-color)',
                  px: 1,
                  borderRadius: 1,
                  '&.MuiInputLabel-shrink': { transform: 'translate(14px, -6px) scale(0.75)', px: 1 },
                }}
              >
                Permissions
              </InputLabel>
              <Select
                label="Permissions"
                multiple
                value={newRole.permissions}
                onChange={(e) => setNewRole({ ...newRole, permissions: e.target.value as string[] })}
                renderValue={(selected) => (
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                    {(selected as string[]).map((value) => (
                       <Chip 
                          key={value} 
                          label={value} 
                          sx={{ 
                            backgroundColor: getPermissionColor(value, theme), 
                            color: theme.palette.common.white, 
                            fontWeight: 400 
                          }} 
                        />
                    ))}
                  </Box>
                )}
                sx={{ fontWeight: 400 }}
              >
                {[
                  'role.view', 'role.edit', 'role.delete',
                  'user.view', 'user.edit', 'user.delete',
                  'permission.view', 'permission.edit', 'permission.delete',
                  'dashboard.view', 'dashboard.edit',
                  'product.add', 'product.edit', 'product.delete',
                ].map((permission) => (
                  <MenuItem key={permission} value={permission}>
                    {permission}
                  </MenuItem>
                ))}
              </Select>
              {!!formErrors.permissions && (
                <Typography variant="caption" color="error" sx={{ mt: 1 }}>
                  {formErrors.permissions}
                </Typography>
              )}
            </FormControl>
            <TextField
              label="Notes"
              variant="outlined"
              size="small"
              value={newRole.notes}
              onChange={(e) => setNewRole({ ...newRole, notes: e.target.value })}
              multiline
              rows={3}
              sx={{
                '& .MuiInputBase-root': { fontWeight: 400 },
                '& .MuiInputLabel-root': { fontWeight: 400, color: 'var(--text-color)', px: 1, borderRadius: 1 },
                '& .MuiInputLabel-shrink': { transform: 'translate(14px, -6px) scale(0.75)', px: 1 },
              }}
            />
            <FormControl variant="outlined" size="small">
              <InputLabel
                sx={{
                  fontWeight: 400,
                  color: 'var(--text-color)',
                  px: 1,
                  borderRadius: 1,
                  '&.MuiInputLabel-shrink': { transform: 'translate(14px, -6px) scale(0.75)', px: 1 },
                }}
              >
                Status
              </InputLabel>
              <Select
                label="Status"
                value={newRole.status}
                onChange={(e) => setNewRole({ ...newRole, status: e.target.value as 'Active' | 'Inactive' })}
                sx={{ fontWeight: 400 }}
              >
                <MenuItem value="Active">Active</MenuItem>
                <MenuItem value="Inactive">Inactive</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseAddRoleDialog} sx={{ fontWeight: 400, color: theme.palette.text.secondary }}>
            Cancel
          </Button>
          <Button onClick={handleAddRole} variant="contained" color="primary" sx={{ fontWeight: 400 }}>
            Add Role
          </Button>
        </DialogActions>
      </Dialog>
      <RolesContextMenu
        contextMenu={contextMenu}
        handleClose={handleCloseContextMenu}
        handleEdit={handleEdit}
        handleSetDefault={handleSetDefault}
        handleDelete={handleDelete}
        handleRestore={handleRestore}
        handlePermanentDelete={handlePermanentDelete}
      />
    </Root>
  );
}

export default RolesDashboardApp;