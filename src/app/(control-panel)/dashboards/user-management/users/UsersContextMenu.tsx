'use client';

import { Menu, MenuItem, ListItemIcon, Typography } from '@mui/material';
import Edit from '@mui/icons-material/Edit';
import DeleteForever from '@mui/icons-material/DeleteForever';
import Restore from '@mui/icons-material/Restore';
import { User } from './UsersDashboardApp';

interface UsersContextMenuProps {
  contextMenu: { mouseX: number; mouseY: number; row: User | null } | null;
  handleClose: () => void;
  handleEdit: (user: User) => void;
  handleDelete: (user: User) => void;
  handleRestore: (user: User) => void;
  handlePermanentDelete: (user: User) => void;
}

function UsersContextMenu({
  contextMenu,
  handleClose,
  handleEdit,
  handleDelete,
  handleRestore,
  handlePermanentDelete,
}: UsersContextMenuProps) {
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
      {!row.trashed ? (
        <>
          <MenuItem
            onClick={() => {
              handleEdit(row);
              handleClose();
            }}
          >
            <ListItemIcon>
              <Edit fontSize="small" sx={{ color: theme => theme.palette.primary.main }} />
            </ListItemIcon>
            <Typography variant="body2" sx={{ fontWeight: 400 }}>
              Edit User
            </Typography>
          </MenuItem>
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
              Delete User
            </Typography>
          </MenuItem>
        </>
      ) : (
        <>
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
              Restore User
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
      )}
    </Menu>
  );
}

export default UsersContextMenu;