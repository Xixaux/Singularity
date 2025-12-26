import SingularityScrollbars from '@singularity/core/SingularityScrollbars';
import { styled } from '@mui/material/styles';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemSecondaryAction from '@mui/material/ListItemSecondaryAction';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Switch from '@mui/material/Switch';
import Typography from '@mui/material/Typography';
import FormatSizeSharpIcon from '@mui/icons-material/FormatSizeSharp';
import { format } from 'date-fns/format';
import { useState } from 'react';
import { useAppDispatch, useAppSelector } from 'src/store/hooks';
import SingularitySvgIcon from '@singularity/core/SingularitySvgIcon';
import { selectOverlayPanelData, selectOverlayPanelOpen, toggleOverlayPanel, setFontSize, selectFontSize } from './OverlayPanelSlice';
import AdjustFontSize from '../AdjustFontSize';

const StyledSwipeableDrawer = styled(SwipeableDrawer)(() => ({
  '& .MuiDrawer-paper': {
    width: 280,
  },
}));

function OverlayPanel() {
  const dispatch = useAppDispatch();
  const data = useAppSelector(selectOverlayPanelData);
  const open = useAppSelector(selectOverlayPanelOpen);
  const fontSize = useAppSelector(selectFontSize);
  const [checked, setChecked] = useState<string[]>(['notifications']);

  const handleToggle = (value: string) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];
    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }
    setChecked(newChecked);
  };

  const handleFontSizeChange = (size: number) => {
    console.log('Font size changed to:', size);
    dispatch(setFontSize(size)); // Update Redux state
    document.body.style.fontSize = `${size}px`;
  };

  return (
    <StyledSwipeableDrawer
      open={open}
      anchor="right"
      onOpen={() => {}}
      onClose={() => dispatch(toggleOverlayPanel())}
      disableSwipeToOpen
    >
      <SingularityScrollbars>
        <ListSubheader component="div">Today</ListSubheader>
        <div className="mb-0 px-6 py-4">
          <Typography className="mb-3 text-5xl" color="text.secondary">
            {format(new Date(), 'eeee')}
          </Typography>
          <div className="flex">
            <Typography className="text-5xl leading-none" color="text.secondary">
              {format(new Date(), 'dd')}
            </Typography>
            <Typography className="text-lg leading-none" color="text.secondary">
              th
            </Typography>
            <Typography className="text-5xl leading-none" color="text.secondary">
              {format(new Date(), 'MMMM')}
            </Typography>
          </div>
        </div>
        <Divider />
        <List>
          <ListSubheader component="div">Events</ListSubheader>
          {data &&
            data.events.map((event) => (
              <ListItem key={event.id}>
                <ListItemText primary={event.title} secondary={event.detail} />
              </ListItem>
            ))}
        </List>
        <Divider />
        <List>
          <ListSubheader component="div">Notes</ListSubheader>
          {data &&
            data.notes.map((note) => (
              <ListItem key={note.id}>
                <ListItemText primary={note.title} secondary={note.detail} />
              </ListItem>
            ))}
        </List>
        <Divider />
        <List>
          <ListSubheader component="div">Quick Settings</ListSubheader>
          <ListItem>
            <ListItemIcon className="min-w-9">
              <SingularitySvgIcon>material-outline:notifications</SingularitySvgIcon>
            </ListItemIcon>
            <ListItemText primary="Notifications" />
            <ListItemSecondaryAction>
              <Switch
                color="primary"
                onChange={handleToggle('notifications')}
                checked={checked.indexOf('notifications') !== -1}
              />
            </ListItemSecondaryAction>
          </ListItem>
          <ListItem>
            <ListItemIcon className="min-w-9">
              <SingularitySvgIcon>material-outline:cloud</SingularitySvgIcon>
            </ListItemIcon>
            <ListItemText primary="Cloud Sync" />
            <ListItemSecondaryAction>
              <Switch
                color="secondary"
                onChange={handleToggle('cloudSync')}
                checked={checked.indexOf('cloudSync') !== -1}
              />
            </ListItemSecondaryAction>
          </ListItem>
          <ListItem>
            <ListItemIcon className="min-w-9">
              <SingularitySvgIcon>material-outline:brightness_high</SingularitySvgIcon>
            </ListItemIcon>
            <ListItemText primary="Retro Thrusters" />
            <ListItemSecondaryAction>
              <Switch
                color="primary"
                onChange={handleToggle('retroThrusters')}
                checked={checked.indexOf('retroThrusters') !== -1}
              />
            </ListItemSecondaryAction>
          </ListItem>
          <ListItem>
            <ListItemIcon className="min-w-9">
              <FormatSizeSharpIcon sx={{ color: 'var(--mui-palette-icon-primary)', fontSize: 20 }} />
            </ListItemIcon>
            <ListItemText primary="Font Size" />
            <ListItemSecondaryAction>
              <AdjustFontSize onFontSizeChange={handleFontSizeChange} />
            </ListItemSecondaryAction>
          </ListItem>
        </List>
      </SingularityScrollbars>
    </StyledSwipeableDrawer>
  );
}

export default OverlayPanel;