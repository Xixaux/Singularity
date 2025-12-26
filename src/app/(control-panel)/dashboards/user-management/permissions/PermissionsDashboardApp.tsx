'use client';

import { useState, useMemo, useCallback, useEffect, memo } from 'react';
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
import Settings from '@mui/icons-material/Settings';
import DeleteForever from '@mui/icons-material/DeleteForever';
import Restore from '@mui/icons-material/Restore';
import { useTheme } from '@mui/material/styles';
import PermissionsContextMenu from './PermissionsContextMenu';
import PermissionsDashboardAppHeader from './PermissionsDashboardAppHeader';

interface Permission {
  id: number;
  name: string;
  slug: string;
  assignedRoles: string[];
  status: 'Active' | 'Inactive';
  privilegeLevel: 'Read' | 'Write' | 'Admin';
  notes: string;
  trashed: boolean;
}

const columnHelper = createColumnHelper<Permission>();

const getPermissionColor = (slug: string, theme: any) => {
  if (slug.startsWith('role.')) return theme.palette.info.main;
  if (slug.startsWith('user.')) return theme.palette.primary.main;
  if (slug.startsWith('product.')) return theme.palette.success.main;
  if (slug.startsWith('permission.')) return theme.palette.secondary.main;
  if (slug.startsWith('dashboard.')) return theme.palette.warning.main;
  return theme.palette.grey[700];
};

const SlugChip = memo(({ slug }: { slug: string }) => {
    const theme = useTheme();
    return (
        <Chip
            label={slug}
            sx={{
                backgroundColor: getPermissionColor(slug, theme),
                color: theme.palette.common.white,
                fontWeight: 400,
                fontSize: '0.75rem',
            }}
        />
    );
});
SlugChip.displayName = 'SlugChip';

const RoleChips = memo(({ roles }: { roles: string[] }) => {
    const theme = useTheme();
    return (
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
            {roles.map((role: string) => (
                <Chip
                    key={role}
                    label={role}
                    sx={{
                        backgroundColor: theme.palette.mode === 'dark' ? theme.palette.grey[700] : theme.palette.grey[200],
                        color: theme.palette.text.primary,
                        fontWeight: 400,
                        fontSize: '0.75rem',
                    }}
                />
            ))}
        </Box>
    );
});
RoleChips.displayName = 'RoleChips';

const StatusChip = memo(({ status, trashed }: { status: 'Active' | 'Inactive', trashed: boolean }) => {
    const theme = useTheme();
    if (trashed) {
        return <Chip label="Trashed" sx={{ backgroundColor: theme.palette.grey[600], color: theme.palette.common.white, fontWeight: 400 }} />;
    }
    return (
        <Chip
            label={status}
            sx={{
                backgroundColor: status === 'Active' ? theme.palette.success.main : theme.palette.error.main,
                color: theme.palette.common.white,
                fontWeight: 400,
            }}
        />
    );
});
StatusChip.displayName = 'StatusChip';


function PermissionsDashboardApp() {
  const theme = useTheme();

  const [data, setData] = useState<Permission[]>([
    {
      id: 1,
      name: 'View Roles',
      slug: 'role.view',
      assignedRoles: ['Administrator', 'Moderator'],
      status: 'Active',
      privilegeLevel: 'Read',
      notes: 'Allows viewing role details',
      trashed: false,
    },
    {
      id: 2,
      name: 'Edit Product',
      slug: 'product.edit',
      assignedRoles: ['Content Editor', 'Moderator'],
      status: 'Active',
      privilegeLevel: 'Write',
      notes: 'Permission to edit existing products',
      trashed: false,
    },
    {
      id: 3,
      name: 'Add Product',
      slug: 'product.add',
      assignedRoles: ['Content Editor', 'Administrator'],
      status: 'Active',
      privilegeLevel: 'Write',
      notes: 'Permission to add new products',
      trashed: false,
    },
    {
      id: 4,
      name: 'Delete Role',
      slug: 'role.delete',
      assignedRoles: ['Administrator'],
      status: 'Inactive',
      privilegeLevel: 'Admin',
      notes: 'Permission to remove roles from the system',
      trashed: false,
    },
    {
      id: 5,
      name: 'View Dashboard',
      slug: 'dashboard.view',
      assignedRoles: ['Administrator', 'Content Editor', 'Guest', 'Analyst'],
      status: 'Active',
      privilegeLevel: 'Read',
      notes: 'Basic dashboard access',
      trashed: true,
    },
  ]);

  const [filter, setFilter] = useState('');
  const [statusFilter, setStatusFilter] = useState('All Statuses');
  const [roleFilter, setRoleFilter] = useState('All Roles');
  const [contextMenu, setContextMenu] = useState<{ mouseX: number; mouseY: number; row: Permission | null } | null>(null);
  const [openAddDialog, setOpenAddDialog] = useState(false);
  const [openManagePermissionDialog, setOpenManagePermissionDialog] = useState<Permission | null>(null);
  const [newPermission, setNewPermission] = useState({
    name: '',
    slug: '',
    assignedRoles: [] as string[],
    status: 'Active' as 'Active' | 'Inactive',
    privilegeLevel: 'Read' as 'Read' | 'Write' | 'Admin',
    notes: '',
  });
  const [formErrors, setFormErrors] = useState({ name: '', slug: '', assignedRoles: '' });

  const [debouncedFilterValue, setDebouncedFilterValue] = useState('');

  useEffect(() => {
    const handler = setTimeout(() => {
      setFilter(debouncedFilterValue);
    }, 300);
    return () => clearTimeout(handler);
  }, [debouncedFilterValue]);


  const handleCloseManagePermissionDialog = useCallback(() => {
    setOpenAddDialog(false);
    setOpenManagePermissionDialog(null);
    setNewPermission({ name: '', slug: '', assignedRoles: [], status: 'Active', privilegeLevel: 'Read', notes: '' });
    setFormErrors({ name: '', slug: '', assignedRoles: '' });
  }, []);

  const handleManagePermission = useCallback((permission: Permission) => {
    setNewPermission(permission);
    setOpenManagePermissionDialog(permission);
    setOpenAddDialog(false);
  }, []);

  const handleDelete = useCallback((permission: Permission) => {
    setData(prevData => prevData.map((item) => (item.id === permission.id ? { ...item, trashed: true } : item)));
  }, []);

  const handleRestore = useCallback((permission: Permission) => {
    setData(prevData => prevData.map((item) => (item.id === permission.id ? { ...item, trashed: false } : item)));
  }, []);

  const handlePermanentDelete = useCallback((permission: Permission) => {
    setData(prevData => prevData.filter((item) => item.id !== permission.id));
  }, []);
    
  const ActionButtons = memo(({ rowOriginal }: { rowOriginal: Permission }) => {
    return (
      <Box>
        {!rowOriginal.trashed ? (
          <>
            <IconButton onClick={() => handleManagePermission(rowOriginal)}>
              <Settings fontSize="small" sx={{ color: theme.palette.primary.main }} />
            </IconButton>
            <IconButton onClick={() => handleDelete(rowOriginal)}>
              <DeleteForever fontSize="small" sx={{ color: theme.palette.error.main }} />
            </IconButton>
          </>
        ) : (
          <>
            <IconButton onClick={() => handleRestore(rowOriginal)}>
              <Restore fontSize="small" sx={{ color: theme.palette.success.main }} />
            </IconButton>
            <IconButton onClick={() => handlePermanentDelete(rowOriginal)}>
              <DeleteForever fontSize="small" sx={{ color: theme.palette.error.main }} />
            </IconButton>
          </>
        )}
      </Box>
    );
  });
  ActionButtons.displayName = 'ActionButtons';

  const columns = useMemo(
    () => [
      columnHelper.accessor('id', { header: 'ID', cell: (info) => info.getValue() }),
      columnHelper.accessor('name', { header: 'Name', cell: (info) => info.getValue() }),
      columnHelper.accessor('slug', { header: 'Slug', cell: (info) => <SlugChip slug={info.getValue()} /> }),
      columnHelper.accessor('assignedRoles', {
        header: 'Assigned Roles',
        cell: (info) => <RoleChips roles={info.getValue()} />,
        filterFn: (row, _id, filterValue) => {
          return filterValue === 'All Roles' ? true : row.getValue('assignedRoles').includes(filterValue);
        },
      }),
      columnHelper.accessor('status', {
        header: 'Status',
        cell: (info) => <StatusChip status={info.getValue()} trashed={info.row.original.trashed} />,
        filterFn: (row, _id, filterValue) => {
          if (filterValue === 'All Statuses') return true;
          if (filterValue === 'Trashed') return row.original.trashed;
          return !row.original.trashed && row.getValue('status') === filterValue;
        },
      }),
      columnHelper.accessor('privilegeLevel', { header: 'Privilege Level', cell: (info) => info.getValue() }),
      columnHelper.accessor('notes', { header: 'Notes', cell: (info) => info.getValue() || '-' }),
      columnHelper.display({
        id: 'actions',
        header: 'Actions',
        cell: ({ row }) => <ActionButtons rowOriginal={row.original} />,
      }),
    ],
    [handleManagePermission, handleDelete, handleRestore, handlePermanentDelete, theme]
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
        { id: 'assignedRoles', value: roleFilter },
      ],
    } as any,
    initialState: {
      pagination: { pageSize: 5, pageIndex: 0 },
    },
    autoResetPageIndex: false,
  });

  const handleFilterChange = useCallback((value: string) => {
    setDebouncedFilterValue(value);
    table.setPageIndex(0);
  }, [table]);

  const handleStatusFilterChange = useCallback((value: string) => {
    setStatusFilter(value);
    table.setPageIndex(0);
  }, [table]);

  const handleRoleFilterChange = useCallback((value: string) => {
    setRoleFilter(value);
    table.setPageIndex(0);
  }, [table]);

  const handleOpenAddPermissionDialog = useCallback(() => {
    setNewPermission({
      name: '',
      slug: '',
      assignedRoles: [],
      status: 'Active',
      privilegeLevel: 'Read',
      notes: '',
    });
    setOpenAddDialog(true);
    setOpenManagePermissionDialog(null);
  }, []);

  const handleSavePermission = useCallback(() => {
    let errors = { name: '', slug: '', assignedRoles: '' };
    if (!newPermission.name.trim()) {
      errors.name = 'Name is required';
    }
    if (!newPermission.slug.trim()) {
      errors.slug = 'Slug is required';
    } else if (
      !openManagePermissionDialog &&
      data.some((perm) => perm.slug === newPermission.slug.trim() && perm.id !== openManagePermissionDialog?.id)
    ) {
      errors.slug = 'Slug must be unique';
    }
    if (newPermission.assignedRoles.length === 0) {
      errors.assignedRoles = 'At least one role is required';
    }
    setFormErrors(errors);

    if (errors.name || errors.slug || errors.assignedRoles) return;

    const permissionData: Permission = {
      id: openManagePermissionDialog ? openManagePermissionDialog.id : Math.max(...data.map((perm) => perm.id), 0) + 1,
      name: newPermission.name.trim(),
      slug: newPermission.slug.trim(),
      assignedRoles: newPermission.assignedRoles,
      status: newPermission.status,
      privilegeLevel: newPermission.privilegeLevel,
      notes: newPermission.notes.trim() || '',
      trashed: false,
    };

    if (openManagePermissionDialog) {
      setData(data.map((item) => (item.id === permissionData.id ? permissionData : item)));
    } else {
      setData([...data, permissionData]);
    }
    handleCloseManagePermissionDialog();
  }, [newPermission, openManagePermissionDialog, data, handleCloseManagePermissionDialog]);


  const handleContextMenu = useCallback((event: React.MouseEvent, row: Permission) => {
    event.preventDefault();
    setContextMenu({
      mouseX: event.clientX - 2,
      mouseY: event.clientY - 4,
      row,
    });
  }, []);

  const handleCloseContextMenu = useCallback(() => {
    setContextMenu(null);
  }, []);


  return (
    <Box
      sx={{
        padding: theme.spacing(2),
        display: 'flex',
        flexDirection: 'column',
        gap: theme.spacing(2),
        minHeight: '100%',
        maxWidth: '1400px',
        margin: '0 auto',
        width: '100%',
        boxSizing: 'border-box',
      }}
    >
      <PermissionsDashboardAppHeader
        onFilterChange={handleFilterChange}
        onStatusFilterChange={handleStatusFilterChange}
        onRoleFilterChange={handleRoleFilterChange}
        onOpenAddPermissionDialog={handleOpenAddPermissionDialog}
      />
        <TableContainer
          component={Paper}
          sx={{
            borderRadius: theme.shape.borderRadius,
            boxShadow: theme.shadows[1],
            width: '100%',
            maxWidth: '100%',
            overflowX: 'auto',
            [theme.breakpoints.down('sm')]: {
              padding: theme.spacing(1),
            },
          }}
        >
          <Table>
            <TableHead>
              {table.getHeaderGroups().map((headerGroup) => (
                <TableRow key={headerGroup.id}>
                  {headerGroup.headers.map((header) => (
                    <TableCell
                      key={header.id}
                      onClick={header.column.getToggleSortingHandler()}
                      sx={{
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
                        cursor: header.column.getCanSort() ? 'pointer' : 'default',
                      }}
                    >
                      {flexRender(header.column.columnDef.header, header.getContext())}
                      {
                        {
                          asc: ' 🔼',
                          desc: ' 🔽',
                        }[header.column.getIsSorted() as string] ?? null
                      }
                    </TableCell>
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
                    <TableCell
                      key={cell.id}
                      sx={{
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
                      }}
                    >
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </TableCell>
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
            rowsPerPageOptions={[5, 10, 25]}
            showFirstButton
            showLastButton
          />
        </TableContainer>
        <Dialog
          open={openAddDialog || !!openManagePermissionDialog}
          onClose={handleCloseManagePermissionDialog}
          fullWidth
          maxWidth="sm"
          PaperProps={{
            sx: {
              backgroundColor: theme.palette.background.paper,
            },
          }}
        >
          <DialogTitle sx={{ fontWeight: 400, color: theme.palette.text.primary }}>
            {openManagePermissionDialog ? 'Manage Permission' : 'Add New Permission'}
          </DialogTitle>
          <DialogContent sx={{ backgroundColor: theme.palette.background.paper }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, mt: 1 }}>
              <TextField
                label="Name"
                variant="outlined"
                size="small"
                value={newPermission.name}
                onChange={(e) => setNewPermission({ ...newPermission, name: e.target.value })}
                error={!!formErrors.name}
                helperText={formErrors.name}
                sx={{
                  '& .MuiInputBase-root': { fontWeight: 400 },
                  '& .MuiInputLabel-root': {
                    fontWeight: 400,
                    color: theme.palette.text.primary,
                    backgroundColor: theme.palette.background.paper,
                    border: `1px solid ${theme.palette.divider}`,
                    px: 1,
                    borderRadius: 1,
                  },
                  '& .MuiInputLabel-shrink': {
                    transform: 'translate(14px, -6px) scale(0.75)',
                    backgroundColor: theme.palette.background.paper,
                    border: `1px solid ${theme.palette.divider}`,
                    px: 1,
                    borderRadius: 1,
                  },
                }}
              />
              <TextField
                label="Slug"
                variant="outlined"
                size="small"
                value={newPermission.slug}
                onChange={(e) => setNewPermission({ ...newPermission, slug: e.target.value })}
                error={!!formErrors.slug}
                helperText={formErrors.slug}
                sx={{
                  '& .MuiInputBase-root': { fontWeight: 400 },
                  '& .MuiInputLabel-root': {
                    fontWeight: 400,
                    color: theme.palette.text.primary,
                    backgroundColor: theme.palette.background.paper,
                    border: `1px solid ${theme.palette.divider}`,
                    px: 1,
                    borderRadius: 1,
                  },
                  '& .MuiInputLabel-shrink': {
                    transform: 'translate(14px, -6px) scale(0.75)',
                    backgroundColor: theme.palette.background.paper,
                    border: `1px solid ${theme.palette.divider}`,
                    px: 1,
                    borderRadius: 1,
                  },
                }}
              />
              <FormControl variant="outlined" size="small">
                <InputLabel
                  sx={{
                    fontWeight: 400,
                    color: theme.palette.text.primary,
                    backgroundColor: theme.palette.background.paper,
                    border: `1px solid ${theme.palette.divider}`,
                    px: 1,
                    borderRadius: 1,
                    '&.MuiInputLabel-shrink': {
                      transform: 'translate(14px, -6px) scale(0.75)',
                      backgroundColor: theme.palette.background.paper,
                      border: `1px solid ${theme.palette.divider}`,
                      px: 1,
                      borderRadius: 1,
                    },
                  }}
                >
                  Assigned Roles
                </InputLabel>
                <Select
                  label="Assigned Roles"
                  multiple
                  value={newPermission.assignedRoles}
                  onChange={(e) => setNewPermission({ ...newPermission, assignedRoles: e.target.value as string[] })}
                  renderValue={(selected) => (
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                      {(selected as string[]).map((value) => (
                        <Chip
                          key={value}
                          label={value}
                          sx={{
                            backgroundColor: theme.palette.mode === 'dark' ? theme.palette.grey[700] : theme.palette.grey[200],
                            color: theme.palette.text.primary,
                            fontWeight: 400,
                          }}
                        />
                      ))}
                    </Box>
                  )}
                  sx={{ fontWeight: 400 }}
                >
                  {['Administrator', 'Content Editor', 'Guest', 'Moderator', 'Analyst'].map((role) => (
                    <MenuItem key={role} value={role}>
                      {role}
                    </MenuItem>
                  ))}
                </Select>
                {!!formErrors.assignedRoles && (
                  <Typography variant="caption" color="error" sx={{ mt: 1 }}>
                    {formErrors.assignedRoles}
                  </Typography>
                )}
              </FormControl>
              <FormControl variant="outlined" size="small">
                <InputLabel
                  sx={{
                    fontWeight: 400,
                    color: theme.palette.text.primary,
                    backgroundColor: theme.palette.background.paper,
                    border: `1px solid ${theme.palette.divider}`,
                    px: 1,
                    borderRadius: 1,
                    '&.MuiInputLabel-shrink': {
                      transform: 'translate(14px, -6px) scale(0.75)',
                      backgroundColor: theme.palette.background.paper,
                      border: `1px solid ${theme.palette.divider}`,
                      px: 1,
                      borderRadius: 1,
                    },
                  }}
                >
                  Status
                </InputLabel>
                <Select
                  label="Status"
                  value={newPermission.status}
                  onChange={(e) => setNewPermission({ ...newPermission, status: e.target.value as 'Active' | 'Inactive' })}
                  sx={{ fontWeight: 400 }}
                >
                  <MenuItem value="Active">Active</MenuItem>
                  <MenuItem value="Inactive">Inactive</MenuItem>
                </Select>
              </FormControl>
              <FormControl variant="outlined" size="small">
                <InputLabel
                  sx={{
                    fontWeight: 400,
                    color: theme.palette.text.primary,
                    backgroundColor: theme.palette.background.paper,
                    border: `1px solid ${theme.palette.divider}`,
                    px: 1,
                    borderRadius: 1,
                    '&.MuiInputLabel-shrink': {
                      transform: 'translate(14px, -6px) scale(0.75)',
                      backgroundColor: theme.palette.background.paper,
                      border: `1px solid ${theme.palette.divider}`,
                      px: 1,
                      borderRadius: 1,
                    },
                  }}
                >
                  Privilege Level
                </InputLabel>
                <Select
                  label="Privilege Level"
                  value={newPermission.privilegeLevel}
                  onChange={(e) => setNewPermission({ ...newPermission, privilegeLevel: e.target.value as 'Read' | 'Write' | 'Admin' })}
                  sx={{ fontWeight: 400 }}
                >
                  <MenuItem value="Read">Read</MenuItem>
                  <MenuItem value="Write">Write</MenuItem>
                  <MenuItem value="Admin">Admin</MenuItem>
                </Select>
              </FormControl>
              <TextField
                label="Notes"
                variant="outlined"
                size="small"
                value={newPermission.notes}
                onChange={(e) => setNewPermission({ ...newPermission, notes: e.target.value })}
                multiline
                rows={3}
                sx={{
                  '& .MuiInputBase-root': { fontWeight: 400 },
                  '& .MuiInputLabel-root': {
                    fontWeight: 400,
                    color: theme.palette.text.primary,
                    backgroundColor: theme.palette.background.paper,
                    border: `1px solid ${theme.palette.divider}`,
                    px: 1,
                    borderRadius: 1,
                  },
                  '& .MuiInputLabel-shrink': {
                    transform: 'translate(14px, -6px) scale(0.75)',
                    backgroundColor: theme.palette.background.paper,
                    border: `1px solid ${theme.palette.divider}`,
                    px: 1,
                    borderRadius: 1,
                  },
                }}
              />
            </Box>
          </DialogContent>
          <DialogActions>
            <Button
              onClick={handleCloseManagePermissionDialog}
              sx={{ fontWeight: 400, color: theme.palette.text.secondary }}
            >
              Cancel
            </Button>
            <Button
              onClick={handleSavePermission}
              variant="contained"
              color="primary"
              sx={{ fontWeight: 400 }}
            >
              Save Permission
            </Button>
          </DialogActions>
        </Dialog>
      <PermissionsContextMenu
        contextMenu={contextMenu}
        handleClose={handleCloseContextMenu}
        handleManagePermission={handleManagePermission}
        handleDelete={handleDelete}
        handleRestore={handleRestore}
        handlePermanentDelete={handlePermanentDelete}
      />
    </Box>
  );
}

export default PermissionsDashboardApp;