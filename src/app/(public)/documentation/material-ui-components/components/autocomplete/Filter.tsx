import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete, { createFilterOptions } from '@mui/material/Autocomplete';

const filterOptions = createFilterOptions({
  matchFrom: 'start',
  stringify: (option: FilmOptionType) => option.title,
});

export default function Filter() {
  return (
    <Autocomplete
      options={top100Albums}
      getOptionLabel={(option) => option.title}
      filterOptions={filterOptions}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="Custom filter" />}
    />
  );
}

interface FilmOptionType {
  title: string;
  year: number;
}

top100Albums