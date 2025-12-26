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
  Chip,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from '@tanstack/react-table';
import Visibility from '@mui/icons-material/Visibility';
import Download from '@mui/icons-material/Download';
import DeleteForever from '@mui/icons-material/DeleteForever';
import Restore from '@mui/icons-material/Restore';
import { styled } from '@mui/material/styles';
import LogsContextMenu from './LogsContextMenu';
import LogsDashboardAppHeader from './LogsDashboardAppHeader';

// --- Styled Components ---

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

const ContentWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  gap: theme.spacing(2),
  width: '100%',
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column',
  },
}));

const TableWrapper = styled(Box)({
  flex: 1,
  width: '100%',
});

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

// --- Interfaces ---

interface Log {
  id: string;
  user: string;
  action: string;
  sessionDuration: string;
  status: 'Success' | 'Failure';
  activity: string;
  trashed: boolean;
}

const columnHelper = createColumnHelper<Log>();

// --- Helper Functions ---

const getActionColor = (action: string, theme: any) => {
  if (action.includes('Delete')) return theme.palette.error.main;
  if (action.includes('Elevated')) return theme.palette.warning.main;
  if (action.includes('Failed')) return theme.palette.error.dark;
  if (action.includes('Create')) return theme.palette.success.main;
  if (action.includes('Change')) return theme.palette.info.main;
  if (action.includes('Login')) return theme.palette.primary.main;
  return theme.palette.grey[600];
};

// --- Component ---

function LogsDashboardApp() {
  const theme = useTheme();

  const [data, setData] = useState<Log[]>([
    {
      id: 'LOG-20251006-001',
      user: 'admin.sofi',
      action: 'Elevated Privilege',
      sessionDuration: '1m 12s',
      status: 'Success',
      activity: 'Privilege escalated from standard to SuperUser access.',
      trashed: false,
    },
    {
      id: 'LOG-20251006-002',
      user: 'james.c',
      action: 'File Delete',
      sessionDuration: 'N/A',
      status: 'Success',
      activity: 'Deleted critical file: /var/www/html/config.php',
      trashed: false,
    },
    {
      id: 'LOG-20251006-003',
      user: 'emma.w',
      action: 'ACL Change',
      sessionDuration: 'N/A',
      status: 'Success',
      activity: 'Changed permissions on /srv/data to 777 (rwx).',
      trashed: true,
    },
    {
      id: 'LOG-20251006-004',
      user: 'liam.b',
      action: 'Failed SSH Login',
      sessionDuration: 'N/A',
      status: 'Failure',
      activity: 'Attempted to SSH from 10.0.0.5 with invalid key.',
      trashed: false,
    },
    {
      id: 'LOG-20251006-005',
      user: 'system',
      action: 'Service Restart',
      sessionDuration: 'N/A',
      status: 'Success',
      activity: 'Web service (nginx) successfully restarted.',
      trashed: false,
    },
    {
      id: 'LOG-20251006-006',
      user: 'olivia.d',
      action: 'Create Database',
      sessionDuration: '5m 30s',
      status: 'Success',
      activity: 'Created new database schema: temp_migration_db.',
      trashed: false,
    },
    {
      id: 'LOG-20251006-007',
      user: 'noah.l',
      action: 'Configuration Update',
      sessionDuration: 'N/A',
      status: 'Success',
      activity: 'Updated API rate limit from 100/min to 50/min.',
      trashed: false,
    },
    {
      id: 'LOG-20251006-008',
      user: 'ava.t',
      action: 'Download Data',
      sessionDuration: '2m 45s',
      status: 'Success',
      activity: 'Downloaded 50MB user financial report: report_Q3.csv',
      trashed: false,
    },
    {
      id: 'LOG-20251006-009',
      user: 'ethan.g',
      action: 'Elevated Privilege',
      sessionDuration: 'N/A',
      status: 'Failure',
      activity: 'Access denied attempting to run `sudo` command.',
      trashed: false,
    },
    {
      id: 'LOG-20251006-010',
      user: 'mia.r',
      action: 'Access Attempt',
      sessionDuration: 'N/A',
      status: 'Failure',
      activity: 'Attempted to access restricted directory /etc/private/keys.',
      trashed: false,
    },
  ]);

  const [filter, setFilter] = useState('');
  const [statusFilter, setStatusFilter] = useState('All Statuses');
  const [actionFilter, setActionFilter] = useState('All Actions');
  const [contextMenu, setContextMenu] = useState<{ mouseX: number; mouseY: number; row: Log | null } | null>(null);
  const [openViewDialog, setOpenViewDialog] = useState<Log | null>(null);

  // Debounced filter setter for TextField input
  const debouncedSetFilter = useCallback(
    (value: string) => {
      const timeout = setTimeout(() => {
        setFilter(value);
      }, 300);
      return () => clearTimeout(timeout);
    },
    []
  );

  // --- Columns Definition ---

  const columns = useMemo(
    () => [
      columnHelper.accessor('id', {
        header: 'Log ID',
        cell: (info) => info.getValue(),
      }),
      columnHelper.accessor('user', {
        header: 'User',
        cell: (info) => info.getValue(),
      }),
      columnHelper.accessor('action', {
        header: 'Action',
        cell: (info) => (
          <Chip
            label={info.getValue()}
            sx={{
              backgroundColor: getActionColor(info.getValue(), theme),
              color: theme.palette.common.white,
              fontWeight: 400,
              fontSize: '0.75rem',
            }}
          />
        ),
        filterFn: (row, _id, filterValue) => {
          return filterValue === 'All Actions' ? true : row.getValue('action') === filterValue;
        },
      }),
      columnHelper.accessor('sessionDuration', {
        header: 'Duration',
        cell: (info) => info.getValue(),
      }),
      columnHelper.accessor('status', {
        header: 'Status',
        cell: (info) => {
          const row = info.row.original;
          if (row.trashed) {
            return <Chip label="Trashed" sx={{ backgroundColor: theme.palette.grey[600], color: theme.palette.common.white, fontWeight: 400 }} />;
          }
          const status = info.getValue();
          return (
            <Chip
              label={status}
              sx={{
                // Green for Success, Red for Failure
                backgroundColor: status === 'Success' ? theme.palette.success.main : theme.palette.error.main,
                color: theme.palette.common.white,
                fontWeight: 400,
              }}
            />
          );
        },
        filterFn: (row, _id, filterValue) => {
          if (filterValue === 'All Statuses') return true;
          if (filterValue === 'Trashed') return row.original.trashed;
          return !row.original.trashed && row.getValue('status') === filterValue;
        },
      }),
      columnHelper.accessor('activity', {
        header: 'Activity Details',
        cell: (info) => info.getValue() || '-',
      }),
      columnHelper.display({
        id: 'actions',
        header: 'Actions',
        cell: ({ row }) => (
          <Box>
            <IconButton onClick={() => handleViewLog(row.original)}>
              <Visibility fontSize="small" sx={{ color: theme.palette.primary.main }} />
            </IconButton>
            <IconButton onClick={() => handleDownloadLog(row.original)}>
              <Download fontSize="small" sx={{ color: theme.palette.info.main }} />
            </IconButton>
            {!row.original.trashed ? (
              <IconButton onClick={() => handleDelete(row.original)}>
                <DeleteForever fontSize="small" sx={{ color: theme.palette.error.main }} />
              </IconButton>
            ) : (
              <>
                <IconButton onClick={() => handleRestore(row.original)}>
                  <Restore fontSize="small" sx={{ color: theme.palette.success.main }} />
                </IconButton>
                <IconButton onClick={() => handlePermanentDelete(row.original)}>
                  <DeleteForever fontSize="small" sx={{ color: theme.palette.error.main }} />
                </IconButton>
              </>
            )}
          </Box>
        ),
      }),
    ],
    [theme]
  );

  // --- TanStack Table Initialization ---

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
        { id: 'action', value: actionFilter },
      ],
    },
    onGlobalFilterChange: setFilter,
    initialState: {
      pagination: { pageSize: 5, pageIndex: 0 },
    },
    // Fix: Prevent infinite loop by disabling auto reset and manually handling it below
    autoResetPageIndex: false,
  });

  // --- Handlers ---

  const handleFilterChange = useCallback((value: string) => {
    debouncedSetFilter(value);
    // Fix: Manually reset page index when filter changes
    table.setPageIndex(0);
  }, [debouncedSetFilter, table]); // 'table' must be a dependency here

  const handleStatusFilterChange = useCallback((value: string) => {
    setStatusFilter(value);
    // Fix: Manually reset page index when filter changes
    table.setPageIndex(0);
  }, [table]); // 'table' must be a dependency here

  const handleActionFilterChange = useCallback((value: string) => {
    setActionFilter(value);
    // Fix: Manually reset page index when filter changes
    table.setPageIndex(0);
  }, [table]); // 'table' must be a dependency here

  const handleViewLog = (log: Log) => {
    setOpenViewDialog(log);
  };

  const handleDownloadLog = (log: Log) => {
    const dataStr = JSON.stringify(log, null, 2);
    const blob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `log-${log.id}.json`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const handleDelete = (log: Log) => {
    setData(data.map((item) => (item.id === log.id ? { ...item, trashed: true } : item)));
  };

  const handleRestore = (log: Log) => {
    setData(data.map((item) => (item.id === log.id ? { ...item, trashed: false } : item)));
  };

  const handlePermanentDelete = (log: Log) => {
    setData(data.filter((item) => item.id !== log.id));
  };

  const handleContextMenu = (event: React.MouseEvent, row: Log) => {
    event.preventDefault();
    setContextMenu({
      mouseX: event.clientX - 2,
      mouseY: event.clientY - 4,
      row,
    });
  };

  const handleCloseContextMenu = () => {
    setContextMenu(null);
  };

  const handleCloseViewDialog = () => {
    setOpenViewDialog(null);
  };

  // --- Render ---

  return (
    <Root>
      <LogsDashboardAppHeader
        onFilterChange={handleFilterChange}
        onStatusFilterChange={handleStatusFilterChange}
        onActionFilterChange={handleActionFilterChange}
      />
      <ContentWrapper>
        <TableWrapper>
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
              rowsPerPageOptions={[5, 10, 25]}
              showFirstButton
              showLastButton
            />
          </StyledTableContainer>
        </TableWrapper>
      </ContentWrapper>
      {}
      <Dialog
        open={!!openViewDialog}
        onClose={handleCloseViewDialog}
        fullWidth
        maxWidth="sm"
      >
        <DialogTitle sx={{ fontWeight: 400, color: theme.palette.text.primary }}>
          Log Details
        </DialogTitle>
        <DialogContent>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, mt: 1 }}>
            <TextField
              label="Log ID"
              variant="outlined"
              size="small"
              value={openViewDialog?.id || ''}
              InputProps={{ readOnly: true }}
              sx={{ '& .MuiInputBase-root': { fontWeight: 400 }, '& .MuiInputLabel-root': { fontWeight: 400 } }}
            />
            <TextField
              label="User"
              variant="outlined"
              size="small"
              value={openViewDialog?.user || ''}
              InputProps={{ readOnly: true }}
              sx={{ '& .MuiInputBase-root': { fontWeight: 400 }, '& .MuiInputLabel-root': { fontWeight: 400 } }}
            />
            <TextField
              label="Action"
              variant="outlined"
              size="small"
              value={openViewDialog?.action || ''}
              InputProps={{ readOnly: true }}
              sx={{ '& .MuiInputBase-root': { fontWeight: 400 }, '& .MuiInputLabel-root': { fontWeight: 400 } }}
            />
            <TextField
              label="Duration"
              variant="outlined"
              size="small"
              value={openViewDialog?.sessionDuration || ''}
              InputProps={{ readOnly: true }}
              sx={{ '& .MuiInputBase-root': { fontWeight: 400 }, '& .MuiInputLabel-root': { fontWeight: 400 } }}
            />
            <TextField
              label="Status"
              variant="outlined"
              size="small"
              value={openViewDialog?.trashed ? 'Trashed' : openViewDialog?.status || ''}
              InputProps={{ readOnly: true }}
              sx={{ '& .MuiInputBase-root': { fontWeight: 400 }, '& .MuiInputLabel-root': { fontWeight: 400 } }}
            />
            <TextField
              label="Activity Details"
              variant="outlined"
              size="small"
              value={openViewDialog?.activity || ''}
              InputProps={{ readOnly: true }}
              multiline
              rows={3}
              sx={{ '& .MuiInputBase-root': { fontWeight: 400 }, '& .MuiInputLabel-root': { fontWeight: 400 } }}
            />
          </Box>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={handleCloseViewDialog}
            sx={{ fontWeight: 400, color: theme.palette.text.secondary }}
          >
            Close
          </Button>
        </DialogActions>
      </Dialog>
      <LogsContextMenu
        contextMenu={contextMenu}
        handleClose={handleCloseContextMenu}
        handleViewLog={handleViewLog}
        handleDownloadLog={handleDownloadLog}
        handleDelete={handleDelete}
        handleRestore={handleRestore}
        handlePermanentDelete={handlePermanentDelete}
      />
    </Root>
  );
}

export default LogsDashboardApp;