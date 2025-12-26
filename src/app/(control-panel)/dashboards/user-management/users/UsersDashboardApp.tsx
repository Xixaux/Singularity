'use client';

import { useState, useMemo, useCallback } from 'react';
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
  Typography,
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
import { styled } from '@mui/material/styles';
import UsersContextMenu from '../users/UsersContextMenu';
import UsersDashboardAppHeader from '../users/UsersDashboardAppHeader';

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

interface User {
  id: number;
  name: string;
  email: string;
  role: string;
  status: 'Active' | 'Inactive';
  lastLogin: string;
  trashed: boolean;
}

interface FormErrors {
  name: string;
  email: string;
}

interface ContextMenu {
  mouseX: number;
  mouseY: number;
  row: User | null;
}

const columnHelper = createColumnHelper<User>();

function UsersDashboardApp() {
  const [data, setData] = useState<User[]>([
 { id: 1, name: 'Sofia Martinez', email: 'sofia.martinez@example.ca', role: 'Admin', status: 'Active', lastLogin: '2025-08-05 14:30', trashed: false },
    { id: 2, name: 'Liam Chen', email: 'liam.chen.work@example.ca', role: 'User', status: 'Active', lastLogin: '2025-08-04 09:15', trashed: false },
    { id: 3, name: 'Aisha Khan', email: 'aisha.khan@example.ca', role: 'Editor', status: 'Inactive', lastLogin: '2025-07-30 16:45', trashed: false },
    { id: 4, name: 'Mateo Rodriguez', email: 'mateo.rdz@example.ca', role: 'User', status: 'Active', lastLogin: '2025-08-06 08:00', trashed: false },
    { id: 5, name: 'Priya Sharma', email: 'priya.sharma@example.ca', role: 'Admin', status: 'Inactive', lastLogin: '2025-07-28 12:20', trashed: false },
    { id: 6, name: 'Noah Kim', email: 'noah.kim@example.ca', role: 'User', status: 'Active', lastLogin: '2025-08-06 10:10', trashed: false },
    { id: 7, name: 'Fatima Al-Sayed', email: 'fatima.alsayed@example.ca', role: 'Editor', status: 'Active', lastLogin: '2025-08-05 17:50', trashed: false },
  ]);

  const [filter, setFilter] = useState<string>('');
  const [roleFilter, setRoleFilter] = useState<string>('All Roles');
  const [statusFilter, setStatusFilter] = useState<string>('All Statuses');
  const [contextMenu, setContextMenu] = useState<ContextMenu | null>(null);
  const [openAddUserDialog, setOpenAddUserDialog] = useState<boolean>(false);
  const [newUser, setNewUser] = useState<User>({ name: '', email: '', role: 'User', status: 'Active', id: 0, lastLogin: '', trashed: false });
  const [formErrors, setFormErrors] = useState<FormErrors>({ name: '', email: '' });

  const handleFilterChange = useCallback((value: string) => {
    setFilter(value);
  }, []);

  const handleRoleFilterChange = useCallback((value: string) => {
    setRoleFilter(value);
  }, []);

  const handleStatusFilterChange = useCallback((value: string) => {
    setStatusFilter(value);
  }, []);

  const columns = useMemo(
    () => [
      columnHelper.accessor('id', {
        header: 'ID',
        cell: (info) => info.getValue(),
      }),
      columnHelper.accessor('name', {
        header: 'Name',
        cell: (info) => info.getValue(),
      }),
      columnHelper.accessor('email', {
        header: 'Email',
        cell: (info) => info.getValue(),
      }),
      columnHelper.accessor('role', {
        header: 'Role',
        cell: (info) => (
          <Chip
            label={info.getValue()}
            sx={{ backgroundColor: '#6BC9F7', color: 'var(--mui-palette-secondary-contrastText)', fontWeight: 400 }}
          />
        ),
        filterFn: (row, _id, filterValue: string) => {
          return filterValue === 'All Roles' ? true : row.getValue('role') === filterValue;
        },
      }),
      columnHelper.accessor('status', {
        header: 'Status',
        cell: (info) => {
          const row = info.row.original;
          if (row.trashed) {
            return <Chip label="Trashed" sx={{ backgroundColor: '#757575', color: 'var(--mui-palette-secondary-contrastText)', fontWeight: 400 }} />;
          }
          return (
            <Chip
              label={info.getValue()}
              sx={{
                backgroundColor: info.getValue() === 'Active' ? '#36D900' : '#FF2621',
                color: 'var(--mui-palette-secondary-contrastText)',
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
      columnHelper.accessor('lastLogin', {
        header: 'Last Login',
        cell: (info) => info.getValue(),
      }),
      columnHelper.display({
        id: 'actions',
        header: 'Actions',
        cell: ({ row }) => (
          <Box>
            {!row.original.trashed ? (
              <>
                <IconButton onClick={() => handleEdit(row.original)}>
                  <Edit fontSize="small" sx={{ color: theme => theme.palette.primary.main }} />
                </IconButton>
                <IconButton onClick={() => handleDelete(row.original)}>
                  <DeleteForever fontSize="small" sx={{ color: theme => theme.palette.error.main }} />
                </IconButton>
              </>
            ) : (
              <>
                <IconButton onClick={() => handleRestore(row.original)}>
                  <Restore fontSize="small" sx={{ color: theme => theme.palette.success.main }} />
                </IconButton>
                <IconButton onClick={() => handlePermanentDelete(row.original)}>
                  <DeleteForever fontSize="small" sx={{ color: theme => theme.palette.error.main }} />
                </IconButton>
              </>
            )}
          </Box>
        ),
      }),
    ],
    [],
  );

  const [pagination, setPagination] = useState({
    pageIndex: 0,
    pageSize: 5,
  });

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
        { id: 'role', value: roleFilter },
        { id: 'status', value: statusFilter },
      ],
      pagination,
    },
    onGlobalFilterChange: handleFilterChange,
    onPaginationChange: setPagination,
    globalFilterFn: (row, _columnIds, filterValue: string) => {
      const search = filterValue.toLowerCase();
      return (
        row.original.name.toLowerCase().includes(search) ||
        row.original.email.toLowerCase().includes(search) ||
        row.original.role.toLowerCase().includes(search)
      );
    },
    manualPagination: false,
  });

  const handleOpenAddUserDialog = useCallback(() => {
    setOpenAddUserDialog(true);
  }, []);

  const handleCloseAddUserDialog = useCallback(() => {
    setOpenAddUserDialog(false);
    setNewUser({ name: '', email: '', role: 'User', status: 'Active', id: 0, lastLogin: '', trashed: false });
    setFormErrors({ name: '', email: '' });
  }, []);

  const handleAddUser = useCallback(() => {
    let errors: FormErrors = { name: '', email: '' };
    if (!newUser.name.trim()) {
      errors.name = 'Name is required';
    }
    if (!newUser.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/.+@.+\..+/.test(newUser.email)) {
      errors.email = 'Invalid email format';
    }
    setFormErrors(errors);

    if (errors.name || errors.email) return;

    const newId = data.length ? Math.max(...data.map((user) => user.id)) + 1 : 1;
    const newUserData: User = {
      id: newId,
      name: newUser.name.trim(),
      email: newUser.email.trim(),
      role: newUser.role,
      status: newUser.status,
      lastLogin: new Date().toISOString().slice(0, 16).replace('T', ' '),
      trashed: false,
    };
    setData([...data, newUserData]);
    handleCloseAddUserDialog();
    setPagination({ pageIndex: 0, pageSize: pagination.pageSize });
  }, [data, newUser, handleCloseAddUserDialog, pagination.pageSize]);

  const handleEdit = useCallback((user: User) => {
    console.log('Edit user:', user);
  }, []);

  const handleDelete = useCallback((user: User) => {
    setData((prev) => prev.map((item) => (item.id === user.id ? { ...item, trashed: true } : item)));
    if (table.getRowModel().rows.length === 1 && pagination.pageIndex > 0) {
      setPagination({ pageIndex: 0, pageSize: pagination.pageSize });
    }
  }, [pagination.pageIndex, pagination.pageSize, table]);

  const handleRestore = useCallback((user: User) => {
    setData((prev) => prev.map((item) => (item.id === user.id ? { ...item, trashed: false } : item)));
  }, []);

  const handlePermanentDelete = useCallback((user: User) => {
    setData((prev) => prev.filter((item) => item.id !== user.id));
    if (table.getRowModel().rows.length === 1 && pagination.pageIndex > 0) {
      setPagination({ pageIndex: 0, pageSize: pagination.pageSize });
    }
  }, [pagination.pageIndex, pagination.pageSize, table]);

  const handleContextMenu = useCallback((event: React.MouseEvent, row: User) => {
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
    <Root>
      <UsersDashboardAppHeader
        onFilterChange={handleFilterChange}
        onRoleFilterChange={handleRoleFilterChange}
        onStatusFilterChange={handleStatusFilterChange}
        onOpenAddUserDialog={handleOpenAddUserDialog}
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
                    {{
                      asc: ' 🔼',
                      desc: ' 🔽',
                    }[header.column.getIsSorted() as string] ?? null}
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
                sx={{ '&:hover': { backgroundColor: theme => theme.palette.action.hover } }}
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
          rowsPerPage={pagination.pageSize}
          page={pagination.pageIndex}
          onPageChange={(_, page) => setPagination((prev) => ({ ...prev, pageIndex: page }))}
          onRowsPerPageChange={(e) => setPagination((prev) => ({ ...prev, pageSize: Number(e.target.value), pageIndex: 0 }))}
          rowsPerPageOptions={[5, 10, 25]}
          showFirstButton
          showLastButton
        />
      </StyledTableContainer>
      <Dialog
        open={openAddUserDialog}
        onClose={handleCloseAddUserDialog}
        fullWidth
        maxWidth="sm"
      >
        <DialogTitle sx={{ fontWeight: 400, color: theme => theme.palette.text.primary }}>
          Add New User
        </DialogTitle>
        <DialogContent>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, mt: 1 }}>
            <TextField
              label="Name"
              variant="outlined"
              size="small"
              value={newUser.name}
              onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
              error={!!formErrors.name}
              helperText={formErrors.name}
              sx={{ '& .MuiInputBase-root': { fontWeight: 400 }, '& .MuiInputLabel-root': { fontWeight: 400 } }}
            />
            <TextField
              label="Email"
              variant="outlined"
              size="small"
              value={newUser.email}
              onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
              error={!!formErrors.email}
              helperText={formErrors.email}
              sx={{ '& .MuiInputBase-root': { fontWeight: 400 }, '& .MuiInputLabel-root': { fontWeight: 400 } }}
            />
            <FormControl variant="outlined" size="small">
              <InputLabel sx={{ fontWeight: 400 }}>Role</InputLabel>
              <Select
                label="Role"
                value={newUser.role}
                onChange={(e) => setNewUser({ ...newUser, role: e.target.value })}
                sx={{ fontWeight: 400 }}
              >
                <MenuItem value="Admin">Admin</MenuItem>
                <MenuItem value="User">User</MenuItem>
                <MenuItem value="Editor">Editor</MenuItem>
              </Select>
            </FormControl>
            <FormControl variant="outlined" size="small">
              <InputLabel sx={{ fontWeight: 400 }}>Status</InputLabel>
              <Select
                label="Status"
                value={newUser.status}
                onChange={(e) => setNewUser({ ...newUser, status: e.target.value as 'Active' | 'Inactive' })}
                sx={{ fontWeight: 400 }}
              >
                <MenuItem value="Active">Active</MenuItem>
                <MenuItem value="Inactive">Inactive</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={handleCloseAddUserDialog}
            sx={{ fontWeight: 400, color: theme => theme.palette.text.secondary }}
          >
            Cancel
          </Button>
          <Button
            onClick={handleAddUser}
            variant="contained"
            color="primary"
            sx={{ fontWeight: 400 }}
          >
            Add User
          </Button>
        </DialogActions>
      </Dialog>
      <UsersContextMenu
        contextMenu={contextMenu}
        handleClose={handleCloseContextMenu}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
        handleRestore={handleRestore}
        handlePermanentDelete={handlePermanentDelete}
      />
    </Root>
  );
}

export default UsersDashboardApp;