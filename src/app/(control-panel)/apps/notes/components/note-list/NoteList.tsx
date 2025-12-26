'use client';

import SingularityUtils from '@singularity/utils';
import Typography from '@mui/material/Typography';
import { useEffect, useState } from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import { useParams } from 'next/navigation';
import { useAppSelector } from 'src/store/hooks';
import SingularityLoading from '@singularity/core/SingularityLoading';
import NoteListItem from './NoteListItem';
import { NotesNote, RouteParams, useGetNotesListQuery } from '../../NotesApi';
import { selectSearchText } from '../../notesAppSlice';

function NoteList({ filter }: { filter?: string }) {
  const theme = useTheme();
  const routeParams = useParams<RouteParams>();
  const effectiveParams: RouteParams = {
    filter: filter || (routeParams?.filter as string) || 'all',
    id: routeParams?.id as string,
  };
  const { data: notes, isLoading } = useGetNotesListQuery(effectiveParams);
  const searchText = useAppSelector(selectSearchText);
  const [filteredData, setFilteredData] = useState<NotesNote[]>([]);

  useEffect(() => {
    function filterData() {
      let data = notes;
      if (searchText?.length === 0) {
        return data;
      }
      data = SingularityUtils.filterArrayByString(data, searchText);
      return data;
    }

    if (notes?.length > 0) {
      setFilteredData(filterData());
    }
  }, [notes, searchText]);

  if (isLoading) {
    return <SingularityLoading />;
  }

  if (!filteredData || filteredData.length === 0) {
    return (
      <div className="flex items-center justify-center h-full">
        <Typography color="text.secondary" variant="h5">
          There are no notes!
        </Typography>
      </div>
    );
  }

  return (
    <Box
      sx={{
        display: 'grid',
        gridTemplateColumns: {
          xs: '1fr',
          sm: 'repeat(2, 1fr)',
          md: 'repeat(3, 1fr)',
          lg: 'repeat(4, 1fr)',
          xl: 'repeat(4, 1fr)',
          xxl: 'repeat(4, 1fr)',
        },
        gap: '4px',
        width: '100%',
        maxWidth: '100%',
        overflowX: 'hidden',
        alignContent: 'start',
        boxSizing: 'border-box',
      }}
    >
      {filteredData.map((note) => (
        <Box
          key={note.id}
          sx={{
            backgroundColor: theme.palette.background.paper,
            minHeight: 'fit-content',
            display: 'flex',
            flexDirection: 'column',
            border: `1px solid ${theme.palette.divider}`,
            boxSizing: 'border-box',
          }}
        >
          <NoteListItem
            note={note}
            className="w-full"
            sx={{ flex: 1 }}
          />
        </Box>
      ))}
    </Box>
  );
}

export default NoteList;