import * as React from 'react';
import Chip from '@mui/material/Chip';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

export default function FixedTags() {
  const fixedOptions = [top100Albums[6]];
  const [value, setValue] = React.useState([...fixedOptions, top100Albums[13]]);

  return (
    <Autocomplete
      multiple
      id="fixed-tags-demo"
      value={value}
      onChange={(event, newValue) => {
        setValue([
          ...fixedOptions,
          ...newValue.filter((option) => !fixedOptions.includes(option)),
        ]);
      }}
      options={top100Albums}
      getOptionLabel={(option) => option.title}
      renderValue={(values, getItemProps) =>
        values.map((option, index) => {
          const { key, ...itemProps } = getItemProps({ index });
          return (
            <Chip
              key={key}
              label={option.title}
              {...itemProps}
              disabled={fixedOptions.includes(option)}
            />
          );
        })
      }
      style={{ width: 500 }}
      renderInput={(params) => (
        <TextField {...params} label="Fixed tag" placeholder="Favorites" />
      )}
    />
  );
}

top100Albums