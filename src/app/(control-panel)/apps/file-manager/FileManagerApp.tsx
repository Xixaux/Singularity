'use client';

import SingularityPageCardLayout from '@singularity/core/SingularityPageCardLayout';
import useThemeMediaQuery from '@singularity/hooks/useThemeMediaQuery';
import { useAppSelector } from 'src/store/hooks';
import DetailSidebarContent from './DetailSidebarContent';
import FileManagerHeader from './FileManagerHeader';
import { selectSelectedItemId } from './fileManagerAppSlice';

type FileManagerAppProps = {
  children: React.ReactNode;
};

/**
 * The file manager app.
 */
function FileManagerApp(props: FileManagerAppProps) {
  const { children } = props;
  const isMobile = useThemeMediaQuery((theme) => theme.breakpoints.down('lg'));

  const selectedItemId = useAppSelector(selectSelectedItemId);

  return (
    <SingularityPageCardLayout
      header={<FileManagerHeader />}
      content={children}
      rightSidebarOpen={!!selectedItemId}
      rightSidebarContent={<DetailSidebarContent />}
      rightSidebarWidth={400}
      scroll="content"
      sx={{ padding: '0' }}
    />
  );
}

export default FileManagerApp;