import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

export default function CustomSingleValueRendering() {
  return (
    <Stack spacing={3} sx={{ width: 500 }}>
      <Autocomplete
        options={top100Albums}
        getOptionLabel={(option) => option.title}
        renderValue={(value, getItemProps) => (
          <Chip label={value.title} {...getItemProps()} />
        )}
        renderInput={(params) => <TextField {...params} label="Movie" />}
      />
      <Autocomplete
        options={top100Albums.map((option) => option.title)}
        freeSolo
        renderValue={(value, getItemProps) => (
          <Chip label={value} {...getItemProps()} />
        )}
        renderInput={(params) => <TextField {...params} label="freeSolo" />}
      />
    </Stack>
  );
}

top100Albums