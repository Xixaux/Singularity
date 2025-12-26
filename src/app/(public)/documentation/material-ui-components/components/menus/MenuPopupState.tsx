import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';

export default function MenuPopupState() {
  return (
    <PopupState variant="popover" popupId="demo-popup-menu">
      {(popupState) => (
        <React.Fragment>
          <Button variant="contained" {...bindTrigger(popupState)}>
            Dashboard
          </Button>
          <Menu {...bindMenu(popupState)}>
            <MenuItem onClick={popupState.close}>My Profile</MenuItem>
            <MenuItem onClick={popupState.close}>Account Settings</MenuItem>
            <MenuItem onClick={popupState.close}>Sign out</MenuItem>
          </Menu>
        </React.Fragment>
      )}
    </PopupState>
  );
}
