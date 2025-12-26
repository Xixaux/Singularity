import * as React from 'react';
import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Paper from '@mui/material/Paper';
import Fab from '@mui/material/Fab';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import Avatar from '@mui/material/Avatar';
import MenuIcon from '@mui/icons-material/Menu';
import AddIcon from '@mui/icons-material/Add';
import SearchIcon from '@mui/icons-material/Search';
import MoreIcon from '@mui/icons-material/MoreVert';

const messages = [
  {
    id: 1,
    primary: 'Lunch plans this week?',
    secondary: "I'm visiting the area soon. Want to meet up for a meal?",
    person: '/material-ui-static/images/avatar/5.jpg',
  },
  {
    id: 2,
    primary: 'Gift Ideas',
    secondary: "Can you recommend a great gift for John's work milestone? I'm stumped and would appreciate your input.",
    person: '/material-ui-static/images/avatar/1.jpg',
  },
  {
    id: 3,
    primary: 'New Dish to Test',
    secondary: "I'm experimenting with a new grilling recipe that I think could be fantastic.",
    person: '/material-ui-static/images/avatar/2.jpg',
  },
  {
    id: 4,
    primary: 'Got Them!',
    secondary: "I secured passes for this year's ReactConf event.",
    person: '/material-ui-static/images/avatar/3.jpg',
  },
  {
    id: 5,
    primary: 'Medical Visit Update',
    secondary: "My doctor's visit has been moved to next Saturday.",
    person: '/material-ui-static/images/avatar/4.jpg',
  },
  {
    id: 6,
    primary: 'Interface Talk',
    secondary: "Menus triggered by the bottom app bar, like navigation drawers or overflow menus, appear as bottom sheets at a higher elevation than the bar itself.",
    person: '/material-ui-static/images/avatar/5.jpg',
  },
  {
    id: 7,
    primary: 'Backyard Party',
    secondary: "Anyone up for a barbecue this weekend? I just got new outdoor furniture and I'm eager to start grilling.",
    person: '/material-ui-static/images/avatar/1.jpg',
  },
];

const StyledFab = styled(Fab)({
  position: 'absolute',
  zIndex: 1,
  top: -30,
  left: 0,
  right: 0,
  margin: '0 auto',
});

export default function BottomAppBar() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Paper square sx={{ pb: '50px' }}>
        <Typography variant="h5" gutterBottom component="div" sx={{ p: 2, pb: 0 }}>
          Inbox
        </Typography>
        <List sx={{ mb: 2 }}>
          {messages.map(({ id, primary, secondary, person }) => (
            <React.Fragment key={id}>
              {id === 1 && (
                <ListSubheader sx={{ bgcolor: 'background.paper' }}>
                  Today
                </ListSubheader>
              )}
              {id === 3 && (
                <ListSubheader sx={{ bgcolor: 'background.paper' }}>
                  Yesterday
                </ListSubheader>
              )}
              <ListItemButton>
                <ListItemAvatar>
                  <Avatar alt="Profile Picture" src={person} />
                </ListItemAvatar>
                <ListItemText primary={primary} secondary={secondary} />
              </ListItemButton>
            </React.Fragment>
          ))}
        </List>
      </Paper>
      <AppBar position="fixed" color="primary" sx={{ top: 'auto', bottom: 0 }}>
        <Toolbar>
          <IconButton color="inherit" aria-label="open drawer">
            <MenuIcon />
          </IconButton>
          <StyledFab color="secondary" aria-label="add">
            <AddIcon />
          </StyledFab>
          <Box sx={{ flexGrow: 1 }} />
          <IconButton color="inherit">
            <SearchIcon />
          </IconButton>
          <IconButton color="inherit">
            <MoreIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}
