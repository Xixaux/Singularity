import Divider from '@mui/material/Divider';
import { Draggable } from '@hello-pangea/dnd';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import useNavigate from '@singularity/hooks/useNavigate';
import { Task } from '../TasksApi';
import { DragHandle } from '@mui/icons-material';

type SectionListItemProps = {
  data: Task;
};

const IconWrapper = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: 40,
  height: 40,
  borderRadius: '50%',
  backgroundColor: 'teal',
  color: 'white',
  transition: 'transform 0.2s',
  '&:hover': {
    transform: 'scale(1.1)',
  },
}));

/**
 * The section list item.
 */
function SectionListItem(props: SectionListItemProps) {
  const { data } = props;
  const navigate = useNavigate();

  return (
    <Draggable draggableId={data.id} index={data.order}>
      {(provided) => (
        <>
          <Card
            sx={{
              borderRadius: 2,
              boxShadow: 3,
              transition: 'box-shadow 0.3s',
              '&:hover': { boxShadow: 6 },
              bgcolor: 'background.default',
              m: 2,
            }}
            ref={provided.innerRef}
            {...provided.draggableProps}
            onClick={() => {
              navigate(`/apps/tasks/${data.id}`);
            }}
          >
            <CardContent sx={{ display: 'flex', alignItems: 'center', gap: 2, py: 2 }}>
              <IconWrapper {...provided.dragHandleProps}>
                <DragHandle sx={{ fontSize: 18 }} />
              </IconWrapper>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 'bold',
                  flex: 1,
                  color: data.completed ? 'text.disabled' : 'text.primary',
                  textDecoration: data.completed ? 'line-through' : 'none',
                }}
              >
                {data.title}
              </Typography>
            </CardContent>
          </Card>
          <Divider sx={{ mx: 2 }} />
        </>
      )}
    </Draggable>
  );
}

export default SectionListItem;