'use client';

import { DragDropContext, Droppable } from '@hello-pangea/dnd';
import TaskListItem from './TaskListItem';
import { useGetTasksQuery } from '../TasksApi';
import { Box, CircularProgress, Typography } from '@mui/material';

function TasksList() {
  const { data: tasks, isLoading, isError } = useGetTasksQuery();

  if (isLoading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', p: 4 }}>
        <CircularProgress />
      </Box>
    );
  }

  if (isError || !tasks) {
    return (
      <Box sx={{ p: 4 }}>
        <Typography color="error">Failed to load tasks.</Typography>
      </Box>
    );
  }

  // Filter out invalid tasks
  const validTasks = tasks.filter((task) => task && task.id);

  if (validTasks.length === 0) {
    return (
      <Box sx={{ p: 4 }}>
        <Typography>No tasks available.</Typography>
      </Box>
    );
  }

  return (
    <DragDropContext onDragEnd={() => {}}>
      <Droppable droppableId="tasks">
        {(provided) => (
          <Box {...provided.droppableProps} ref={provided.innerRef}>
            {validTasks.map((task, index) => (
              <TaskListItem key={task.id} data={task} />
            ))}
            {provided.placeholder}
          </Box>
        )}
      </Droppable>
    </DragDropContext>
  );
}

export default TasksList;