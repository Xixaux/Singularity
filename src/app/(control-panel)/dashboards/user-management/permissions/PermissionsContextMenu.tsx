'use client';

import { Menu, MenuItem, ListItemIcon, Typography, Divider } from '@mui/material';
import Settings from '@mui/icons-material/Settings';
import DeleteForever from '@mui/icons-material/DeleteForever';
import Restore from '@mui/icons-material/Restore';
import { Permission } from './PermissionsDashboardApp';

interface PermissionsContextMenuProps {
  contextMenu: { mouseX: number; mouseY: number; row: Permission | null } | null;
  handleClose: () => void;
  handleManagePermission: (permission: Permission) => void;
  handleDelete: (permission: Permission) => void;
  handleRestore: (permission: Permission) => void;
  handlePermanentDelete: (permission: Permission) => void;
}

function PermissionsContextMenu({
  contextMenu,
  handleClose,
  handleManagePermission,
  handleDelete,
  handleRestore,
  handlePermanentDelete,
}: PermissionsContextMenuProps) {
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
              handleManagePermission(row);
              handleClose();
            }}
          >
            <ListItemIcon>
              <Settings fontSize="small" sx={{ color: theme => theme.palette.primary.main }} />
            </ListItemIcon>
            <Typography variant="body2" sx={{ fontWeight: 400 }}>
              Manage Permission
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
              Delete All Permissions
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
              Restore Permission
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

export default PermissionsContextMenu;