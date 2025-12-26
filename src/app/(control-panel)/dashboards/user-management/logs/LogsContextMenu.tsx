'use client';

import { Menu, MenuItem, ListItemIcon, Typography, Divider } from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import Download from '@mui/icons-material/Download';
import DeleteForever from '@mui/icons-material/DeleteForever';
import Restore from '@mui/icons-material/Restore';
import { Log } from './LogsDashboardApp';

interface LogsContextMenuProps {
  contextMenu: { mouseX: number; mouseY: number; row: Log | null } | null;
  handleClose: () => void;
  handleViewLog: (log: Log) => void;
  handleDownloadLog: (log: Log) => void;
  handleDelete: (log: Log) => void;
  handleRestore: (log: Log) => void;
  handlePermanentDelete: (log: Log) => void;
}

function LogsContextMenu({
  contextMenu,
  handleClose,
  handleViewLog,
  handleDownloadLog,
  handleDelete,
  handleRestore,
  handlePermanentDelete,
}: LogsContextMenuProps) {
  if (!contextMenu || !contextMenu.row) return null;

  const { row } = contextMenu;

  return (
    <Menu
      open={contextMenu !== null}
      onClose={handleClose}
      anchorReference="anchorPosition"
      anchorPosition={
        contextMenu ? { top: contextMenu.mouseY, left: contextMenu.mouseX } : undefined
      }
      PaperProps={{
        style: {
          backgroundColor: theme => theme.palette.background.paper,
          color: theme => theme.palette.text.primary,
        },
      }}
    >
      <MenuItem
        onClick={() => {
          handleViewLog(row);
          handleClose();
        }}
      >
        <ListItemIcon>
          <Visibility fontSize="small" sx={{ color: theme => theme.palette.primary.main }} />
        </ListItemIcon>
        <Typography variant="body2" sx={{ fontWeight: 400 }}>
          View Details
        </Typography>
      </MenuItem>
      <MenuItem
        onClick={() => {
          handleDownloadLog(row);
          handleClose();
        }}
      >
        <ListItemIcon>
          <Download fontSize="small" sx={{ color: theme => theme.palette.info.main }} />
        </ListItemIcon>
        <Typography variant="body2" sx={{ fontWeight: 400 }}>
          Download Log
        </Typography>
      </MenuItem>
      {row.trashed ? (
        <>
          <Divider sx={{ my: 0.5, borderWidth: '1px' }} />
          <MenuItem
            onClick={() => {
              handleRestore(row);
              handleClose();
            }}
          >
            <ListItemIcon>
              <Restore fontSize="small" sx={{ color: theme => theme.palette.success.main }} />
            </ListItemIcon>
            <Typography variant="body2" sx={{ fontWeight: 400 }}>
              Restore Log
            </Typography>
          </MenuItem>
          <MenuItem
            onClick={() => {
              handlePermanentDelete(row);
              handleClose();
            }}
          >
            <ListItemIcon>
              <DeleteForever fontSize="small" sx={{ color: theme => theme.palette.error.main }} />
            </ListItemIcon>
            <Typography variant="body2" sx={{ fontWeight: 400 }}>
              Permanently Delete
            </Typography>
          </MenuItem>
        </>
      ) : (
        <>
          <Divider sx={{ my: 0.5, borderWidth: '1px' }} />
          <MenuItem
            onClick={() => {
              handleDelete(row);
              handleClose();
            }}
          >
            <ListItemIcon>
              <DeleteForever fontSize="small" sx={{ color: theme => theme.palette.error.main }} />
            </ListItemIcon>
            <Typography variant="body2" sx={{ fontWeight: 400 }}>
              Delete Log
            </Typography>
          </MenuItem>
        </>
      )}
    </Menu>
  );
}

export default LogsContextMenu;