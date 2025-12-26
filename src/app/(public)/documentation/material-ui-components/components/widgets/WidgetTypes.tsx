import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import TextField from '@mui/material/TextField';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import NotificationsIcon from '@mui/icons-material/Notifications';
import BarChartIcon from '@mui/icons-material/BarChart';
import CloudIcon from '@mui/icons-material/Cloud';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';

export default function WidgetTypes() {
  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>
        Widget Types
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardHeader
              title="Task List Widget"
              subheader="Manages to-do items and tasks"
            />
            <CardContent>
              <List>
                {['Complete project proposal', 'Review design mockups', 'Schedule team meeting'].map((task) => (
                  <ListItem key={task} dense>
                    <Checkbox />
                    <ListItemText primary={task} />
                  </ListItem>
                ))}
                <ListItem>
                  <TextField
                    label="Add a new task"
                    variant="outlined"
                    size="small"
                    fullWidth
                  />
                </ListItem>
              </List>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardHeader
              title="Weather Widget"
              subheader="Displays current weather"
            />
            <CardContent>
              <TextField
                label="Enter city"
                defaultValue="London"
                variant="outlined"
                size="small"
                fullWidth
                sx={{ mb: 2 }}
              />
              <Typography variant="h6">London</Typography>
              <Typography variant="body1">15°C, Overcast Clouds</Typography>
              <Typography variant="body2" color="text.secondary">
                Feels like: 15°C
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Humidity: 78%
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Wind: 3.6 m/s
              </Typography>
              <CloudIcon sx={{ mt: 1 }} />
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardHeader
              title="Stats Widget"
              subheader="Displays key metrics and KPIs"
            />
            <CardContent>
              <Typography variant="body1">Active Users: 1,234</Typography>
              <Typography variant="body1">Revenue: $5,678</Typography>
              <Typography variant="body1">Orders: 89</Typography>
              <Button variant="text" sx={{ mt: 2 }} startIcon={<BarChartIcon />}>
                View Details
              </Button>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardHeader
              title="Chart Widget"
              subheader="Visualizes data trends with charts"
            />
            <CardContent>
              <Typography variant="body1" color="text.secondary">
                Displays trends for sales, users, or other metrics.
              </Typography>
              <Box sx={{ height: 100, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <TrendingUpIcon sx={{ fontSize: 40 }} />
              </Box>
              <Button variant="outlined" sx={{ mt: 2 }}>
                Customize Chart
              </Button>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardHeader
              title="User Profile Widget"
              subheader="Shows user information and avatar"
            />
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <Avatar sx={{ mr: 2 }}>JD</Avatar>
                <Typography variant="body1">John Doe</Typography>
              </Box>
              <Typography variant="body2" color="text.secondary">
                Email: john.doe@example.com
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Role: Administrator
              </Typography>
              <Button variant="contained" sx={{ mt: 2 }}>
                Edit Profile
              </Button>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardHeader
              title="Notification Widget"
              subheader="Displays recent notifications"
            />
            <CardContent>
              <Typography variant="body1">New message from Alice</Typography>
              <Typography variant="body2" color="text.secondary">
                2 minutes ago
              </Typography>
              <Typography variant="body1">System update available</Typography>
              <Typography variant="body2" color="text.secondary">
                1 hour ago
              </Typography>
              <IconButton sx={{ mt: 2 }}>
                <NotificationsIcon />
              </IconButton>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}