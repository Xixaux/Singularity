import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { lighten } from '@mui/material/styles';
import { motion } from 'motion/react';
import SingularityLoading from '@singularity/core/SingularityLoading';
import FolderItem from './FolderItem';
import FileItem from './FileItem';
import useFileManagerData from './hooks/useFileManagerData';

/**
 * The file manager list.
 */
function FileManagerList() {
  const { folders, files, isLoading } = useFileManagerData();

  if (isLoading) {
    return <SingularityLoading />;
  }

  if (files.length === 0 && folders.length === 0) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { delay: 0.1 } }}
        className="flex flex-1 items-center justify-center h-full"
      >
        <Typography color="text.secondary" variant="h5">
          There are no items!
        </Typography>
      </motion.div>
    );
  }

  return (
    <Box sx={{ padding: '16px', overflowY: 'auto', height: '100%' }}>
      {folders?.length > 0 && (
        <Box
          sx={{
            marginBottom: '24px',
            backgroundColor: (theme) =>
              lighten(theme.palette.background.default, theme.palette.mode === 'light' ? 0.4 : 0.02),
            border: '1px solid',
            borderColor: 'divider',
            borderRadius: '8px',
            padding: '16px',
          }}
        >
          <Typography sx={{ fontWeight: 'medium', marginBottom: '8px' }}>Folders</Typography>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              gap: '16px',
              overflowX: 'auto',
              paddingBottom: '8px',
              '&::-webkit-scrollbar': {
                height: '8px',
              },
              '&::-webkit-scrollbar-thumb': {
                backgroundColor: 'action.disabled',
                borderRadius: '4px',
              },
            }}
          >
            {folders.map((item) => (
              <FolderItem key={item.id} item={item} />
            ))}
          </Box>
        </Box>
      )}
      {files.length > 0 && (
        <Box
          sx={{
            backgroundColor: (theme) =>
              lighten(theme.palette.background.default, theme.palette.mode === 'light' ? 0.4 : 0.02),
            border: '1px solid',
            borderColor: 'divider',
            borderRadius: '8px',
            padding: '16px',
          }}
        >
          <Typography sx={{ fontWeight: 'medium', marginBottom: '8px' }}>Files</Typography>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {files.map((item) => (
              <FileItem key={item.id} item={item} />
            ))}
          </Box>
        </Box>
      )}
    </Box>
  );
}

export default FileManagerList;