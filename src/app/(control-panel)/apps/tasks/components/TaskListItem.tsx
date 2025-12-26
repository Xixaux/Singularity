'use client';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import { Draggable } from '@hello-pangea/dnd';
import { format } from 'date-fns/format';
import useNavigate from '@singularity/hooks/useNavigate';
import { Task, useUpdateTasksItemMutation } from '../TasksApi';
import { DragHandle, Circle, CircleOutlined } from '@mui/icons-material';

type TaskListItemProps = {
  data?: Task;
};

/**
 * The task list item.
 */
function TaskListItem(props: TaskListItemProps) {
  const { data } = props;
  const [updateTask] = useUpdateTasksItemMutation();
  const navigate = useNavigate();

  if (!data || !data.id) {
    return null;
  }

  // Define the custom box shadows for a modern, blurred look
  const customShadows = {
    // Subtle, modern default shadow
    default: '0px 2px 8px rgba(0, 0, 0, 0.05)',
    // Slightly more pronounced on hover
    hover: '0px 4px 12px rgba(0, 0, 0, 0.1)',
    // Stronger, floating shadow when dragging
    dragging: '0px 8px 20px rgba(0, 0, 0, 0.15)',
  };

  return (
    <Draggable draggableId={data.id} index={data.order}>
      {(provided, snapshot) => (
        <Card
          sx={{
            borderRadius: 2,
            // Replaced MUI box shadow levels (1, 3, 6) with custom, blurred shadows
            boxShadow: snapshot.isDragging ? customShadows.dragging : customShadows.default,
            transition: 'box-shadow 0.3s',
            '&:hover': { boxShadow: customShadows.hover },
            bgcolor: data.completed
              ? 'background.paper'
              : data.priority === 0
              ? 'success.light'
              : data.priority === 1
              ? 'info.light'
              : data.priority === 2
              ? 'error.light'
              : 'background.paper',
            m: 2,
          }}
          ref={provided.innerRef}
          {...provided.draggableProps}
          onClick={() => {
            navigate(`/apps/tasks/${data.id}`);
          }}
        >
          <CardContent sx={{ display: 'flex', alignItems: 'center', gap: 2, py: 2 }}>
            <Box {...provided.dragHandleProps}>
              <DragHandle sx={{ fontSize: 20, color: 'text.secondary' }} />
            </Box>
            <IconButton
              onClick={(ev) => {
                ev.preventDefault();
                ev.stopPropagation();
                updateTask({ ...data, completed: !data.completed });
              }}
            >
              {data.completed ? (
                <Circle
                  sx={{
                    fontSize: 20,
                    color: data.priority === 0 ? 'success.main' : data.priority === 1 ? 'info.main' : data.priority === 2 ? 'error.main' : 'secondary.main',
                  }}
                />
              ) : (
                <CircleOutlined
                  sx={{
                    fontSize: 20,
                    color: data.priority === 0 ? 'success.main' : data.priority === 1 ? 'info.main' : data.priority === 2 ? 'error.main' : 'text.disabled',
                  }}
                />
              )}
            </IconButton>
            <Typography
              variant="body1"
              sx={{
                fontWeight: 400,
                fontSize: '0.90rem',
                flex: 1,
                color: data.completed ? 'text.disabled' : 'text.primary',
                textDecoration: data.completed ? 'line-through' : 'none',
              }}
            >
              {data.title || 'Untitled Task'}
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <Typography
                variant="body2"
                sx={{
                  fontWeight: 400,
                  fontSize: '0.90rem',
                  color: 'text.secondary',
                  whiteSpace: 'nowrap',
                }}
              >
                {data.dueDate ? format(new Date(data.dueDate), 'LLL dd') : 'No due date'}
              </Typography>
            </Box>
          </CardContent>
        </Card>
      )}
    </Draggable>
  );
}

export default TaskListItem;