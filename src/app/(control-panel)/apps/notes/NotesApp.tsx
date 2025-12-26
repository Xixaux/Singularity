'use client';

import { useEffect, useState } from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import SingularityPageCardLayout from '@singularity/core/SingularityPageCardLayout';
import useThemeMediaQuery from '@singularity/hooks/useThemeMediaQuery';
import LabelsDialog from './dialogs/labels/LabelsDialog';
import NoteDialog from './dialogs/note/NoteDialog';
import NewNote from './components/NewNote';
import NotesHeader from './components/NotesHeader';
import NotesSidebarContent from './components/NotesSidebarContent';
import NoteList from './components/note-list/NoteList';

const Root = styled(SingularityPageCardLayout)(({ theme }) => ({
  '& .MuiTypography-root': {
    color: theme.palette.text.primary,
  },
}));

type NotesAppProps = {
  children?: React.ReactNode;
};

function NotesApp({ children }: NotesAppProps) {
  const isMobile = useThemeMediaQuery((theme) => theme.breakpoints.down('lg'));
  const [leftSidebarOpen, setLeftSidebarOpen] = useState(!isMobile);

  useEffect(() => {
    setLeftSidebarOpen(!isMobile);
  }, [isMobile]);

  return (
    <Root
      header={<NotesHeader onSetSidebarOpen={setLeftSidebarOpen} />}
      content={
        <Box className="flex flex-col w-full items-center p-0 md:p-6" sx={{ minHeight: '100%' }}>
          <Box className="w-full flex flex-col items-center" sx={{ boxShadow: 'none' }}>
            <Box className="flex justify-center p-2 pb-4 w-full">
              <NewNote />
            </Box>
            {children || <NoteList filter="all" />}
          </Box>
          <NoteDialog />
          <LabelsDialog />
        </Box>
      }
      leftSidebarOpen={leftSidebarOpen}
      leftSidebarOnClose={() => {
        setLeftSidebarOpen(false);
      }}
      leftSidebarContent={<NotesSidebarContent />}
      scroll={isMobile ? 'normal' : 'content'}
    />
  );
}

export default NotesApp;