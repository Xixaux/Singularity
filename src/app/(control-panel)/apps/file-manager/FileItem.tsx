import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useAppDispatch } from 'src/store/hooks';
import ItemIcon from './ItemIcon';
import { FileManagerItem } from './FileManagerApi';
import { setSelectedItemId } from './fileManagerAppSlice';

type FileItemProps = {
  item: FileManagerItem;
};

/**
 * The file item.
 */
function FileItem(props: FileItemProps) {
  const { item } = props;
  const dispatch = useAppDispatch();

  if (!item) {
    return null;
  }

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        backgroundColor: 'background.paper',
        border: '1px solid',
        borderColor: 'divider',
        borderRadius: '8px',
        padding: '8px',
        marginBottom: '8px',
        cursor: 'pointer',
        '&:hover': {
          backgroundColor: 'action.hover',
        },
      }}
      onClick={() => dispatch(setSelectedItemId(item.id))}
    >
      {/* Thumbnail/Icon */}
      <Box sx={{ marginRight: '16px' }}>
        <ItemIcon type={item.type} />
      </Box>

      {}
      <Box sx={{ flex: 1, minWidth: 0, display: 'flex', alignItems: 'center' }}>
        <Box sx={{ flex: 1, minWidth: 0 }}>
          <Typography
            sx={{
              fontSize: '1rem',
              fontWeight: 'medium',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              whiteSpace: 'nowrap',
            }}
          >
            {item.name}
          </Typography>
          <Typography
            sx={{
              fontSize: '0.875rem',
              color: 'text.secondary',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              whiteSpace: 'nowrap',
            }}
          >
            {item.type}
            {item.contents && ` | ${item.contents}`}
          </Typography>
        </Box>
        {item.description && (
          <Typography
            sx={{
              fontSize: '0.875rem',
              color: 'text.secondary',
              marginLeft: '16px',
              flex: 2,
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              whiteSpace: 'nowrap',
            }}
          >
            {item.description}
          </Typography>
        )}
      </Box>
    </Box>
  );
}

export default FileItem;