'use client';

import React, { useState } from 'react';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box'; // Explicitly import Box to resolve "Box is not defined"
import AddIcon from '@mui/icons-material/Add';

type Task = {
  id: number;
  text: string;
  completed: boolean;
};

function TaskListWidget() {
  const [tasks, setTasks] = useState<Task[]>([
    { id: 1, text: 'Complete project proposal', completed: false },
    { id: 2, text: 'Review design mockups', completed: true },
    { id: 3, text: 'Schedule team meeting', completed: false },
  ]);
  const [newTask, setNewTask] = useState('');

  const handleAddTask = () => {
    if (newTask.trim()) {
      setTasks([...tasks, { id: tasks.length + 1, text: newTask, completed: false }]);
      setNewTask('');
    }
  };

  const handleToggleTask = (id: number) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <Paper
      sx={{
        borderRadius: '8px',
        boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
        p: 3,
        backgroundColor: 'theme.vars.palette.background.default',
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
      }}
    >
      <Typography variant="h6" className="font-bold">
        Task List Widget
      </Typography>
      <Typography variant="body2" color="text.secondary" className="mb-2">
        Manages to-do items and tasks
      </Typography>
      <List sx={{ flexGrow: 1, maxHeight: 200, overflowY: 'auto' }}>
        {tasks.map((task) => (
          <ListItem key={task.id} dense>
            <Checkbox
              edge="start"
              checked={task.completed}
              onChange={() => handleToggleTask(task.id)}
            />
            <ListItemText
              primary={task.text}
              sx={{ textDecoration: task.completed ? 'line-through' : 'none' }}
            />
          </ListItem>
        ))}
      </List>
      <Box sx={{ display: 'flex', gap: 1 }}>
        <TextField
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Add a new task"
          size="small"
          fullWidth
        />
        <Button
          variant="contained"
          color="primary"
          onClick={handleAddTask}
          disabled={!newTask.trim()}
          startIcon={<AddIcon />}
        >
          Add
        </Button>
      </Box>
    </Paper>
  );
}

export default TaskListWidget;