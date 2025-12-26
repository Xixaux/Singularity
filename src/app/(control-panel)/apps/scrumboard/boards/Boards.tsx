'use client';
import Typography from '@mui/material/Typography';
import { motion } from 'motion/react';
import SingularityLoading from '@singularity/core/SingularityLoading';
import PageBreadcrumb from 'src/components/PageBreadcrumb';
import BoardItem from './BoardItem';
import NewBoardItem from './NewBoardItem';
import { useGetScrumboardBoardsQuery } from '../ScrumboardApi';
import Box from '@mui/material/Box';

function Boards() {
  const { data: boards, isLoading, isError } = useGetScrumboardBoardsQuery();

  const container = {
    show: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  if (isLoading) {
    return <SingularityLoading />;
  }

  if (isError || !boards || boards.length === 0) {
    return (
      <Box
        sx={{
          bgcolor: 'background.default',
          p: { xs: 1.5, sm: 3, md: 4 },
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          maxWidth: '960px',
          mx: 'auto',
        }}
      >
        <PageBreadcrumb sx={{ mb: 1.5 }} />
        <Typography
          variant="h2"
          sx={{
            fontWeight: 600,
            fontSize: '22px',
            mb: 1,
            color: 'text.primary', 
          }}
        >
          Scrumboard Boards
        </Typography>
        <Typography
          sx={{
            fontWeight: 500,
            fontSize: '13px',
            mb: 3,
            color: 'text.secondary',
          }}
        >
          No boards available. Create a new board to get started!
        </Typography>
      </Box>
    );
  }

  return (
    <Box
      sx={{
        bgcolor: 'background.default',
        p: { xs: 1.5, sm: 3, md: 4 },
        minHeight: '100vh',
        maxWidth: '960px',
        mx: 'auto',
      }}
    >
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { delay: 0.1 } }}>
        <PageBreadcrumb sx={{ mb: 1.5 }} />
        <Typography
          variant="h2"
          sx={{
            fontWeight: 600,
            fontSize: '22px',
            mb: 1,
            color: 'text.primary',
          }}
        >
          Scrumboard Boards
        </Typography>
        <Typography
          sx={{
            fontWeight: 500,
            fontSize: '13px',
            mb: 3,
            color: 'text.secondary',
          }}
        >
          Manage your projects and tasks with our interactive scrumboard interface.
        </Typography>
      </motion.div>
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-6"
      >
        {boards.map((board) => (
          <motion.div variants={item} className="min-w-full sm:min-w-36 min-h-80" key={board.id}>
            <BoardItem board={board} key={board.id} />
          </motion.div>
        ))}
        <motion.div variants={item} className="min-w-full sm:min-w-36 min-h-80">
          <NewBoardItem />
        </motion.div>
      </motion.div>
    </Box>
  );
}

export default Boards;