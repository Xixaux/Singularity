'use client';

import { Menu, MenuItem, ListItemIcon, Typography, Divider } from '@mui/material';
import Edit from '@mui/icons-material/Edit';
import DeleteForever from '@mui/icons-material/DeleteForever';
import Restore from '@mui/icons-material/Restore';
import Star from '@mui/icons-material/Star';
import { Role } from './RolesDashboardApp';

interface RolesContextMenuProps {
  contextMenu: { mouseX: number; mouseY: number; row: Role | null } | null;
  handleClose: () => void;
  handleEdit: (role: Role) => void;
  handleSetDefault: (role: Role) => void;
  handleDelete: (role: Role) => void;
  handleRestore: (role: Role) => void;
  handlePermanentDelete: (role: Role) => void;
}

function RolesContextMenu({
  contextMenu,
  handleClose,
  handleEdit,
  handleSetDefault,
  handleDelete,
  handleRestore,
  handlePermanentDelete,
}: RolesContextMenuProps) {
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
              Edit Role
            </Typography>
          </MenuItem>
          <MenuItem
            onClick={() => {
              handleSetDefault(row);
              handleClose();
            }}
          >
            <ListItemIcon>
              <Star fontSize="small" sx={{ color: theme => theme.palette.warning.main }} />
            </ListItemIcon>
            <Typography variant="body2" sx={{ fontWeight: 400 }}>
              Set as Default
            </Typography>
          </MenuItem>
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
              Delete Role
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
              Restore Role
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

export default RolesContextMenu;