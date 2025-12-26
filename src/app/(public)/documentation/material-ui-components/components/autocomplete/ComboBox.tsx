import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import top100Albums from './top100Albums';

export default function ComboBox() {
  return (
    <Autocomplete
      disablePortal
      options={top100Albums}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="Movie" />}
    />
  );
}
