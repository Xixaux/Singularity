'use client';

import SingularitySvgIcon from '@singularity/core/SingularitySvgIcon';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useCreateScrumboardBoardMutation } from '../ScrumboardApi';

function NewBoardItem() {
  const [createNewBoard] = useCreateScrumboardBoardMutation();

  function handleNewBoard() {
    createNewBoard({});
  }

  return (
    <Box
      sx={{
        borderRadius: 6,
        boxShadow: '0 2px 4px rgba(0,0,0,0.05) ',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        '&:hover': {
          boxShadow: '0 4px 8px rgba(0,0,0,0.1) ',
          transform: 'translateY(-4px)',
        },
        bgcolor: 'background.paper', 
        border: '1px dotted',
        borderColor: theme => theme.palette.mode === 'dark' ? 'grey.300' : 'grey.100',
        position: 'relative',
        overflow: 'hidden',
        p: 3,
      }}
      className="flex flex-col items-center justify-center w-full h-full cursor-pointer"
      onClick={handleNewBoard}
      onKeyDown={handleNewBoard}
      role="button"
      tabIndex={0}
    >
      {}
      
      <Typography
        sx={{
          fontSize: '64px',
          fontWeight: 400,
          color: theme => theme.palette.mode === 'dark' ? 'var(--mui-palette-text-primary)' : 'var(--mui-palette-primary-main)',
          transition: 'transform 0.2s ease',
          '&:hover': {
            transform: 'scale(1.2)',
          },
          zIndex: 1,
        }}
      >
        +
      </Typography>
    </Box>
  );
}

export default NewBoardItem;