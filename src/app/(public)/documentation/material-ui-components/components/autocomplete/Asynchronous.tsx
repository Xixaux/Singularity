import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import CircularProgress from '@mui/material/CircularProgress';

interface Album {
  title: string;
  year: number;
}

function sleep(duration: number): Promise<void> {
  return new Promise<void>((resolve) => {
    setTimeout(() => {
      resolve();
    }, duration);
  });
}

export default function Asynchronous() {
  const [open, setOpen] = React.useState(false);
  const [options, setOptions] = React.useState<readonly Album[]>([]);
  const [loading, setLoading] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
    (async () => {
      setLoading(true);
      await sleep(1e3);
      setLoading(false);

      setOptions([...topAlbums]);
    })();
  };

  const handleClose = () => {
    setOpen(false);
    setOptions([]);
  };

  return (
    <Autocomplete
      sx={{ width: 300 }}
      open={open}
      onOpen={handleOpen}
      onClose={handleClose}
      isOptionEqualToValue={(option, value) => option.title === value.title}
      getOptionLabel={(option) => option.title}
      options={options}
      loading={loading}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Asynchronous"
          slotProps={{
            input: {
              ...params.InputProps,
              endAdornment: (
                <React.Fragment>
                  {loading ? <CircularProgress color="inherit" size={20} /> : null}
                  {params.InputProps.endAdornment}
                </React.Fragment>
              ),
            },
          }}
        />
      )}
    />
  );
}

// Top albums from 2000-2010
const topAlbums = [
  { title: 'Stankonia', year: 2000 },
  { title: 'Voodoo', year: 2000 },
  { title: 'Kid A', year: 2000 },
  { title: 'The Sophtware Slump', year: 2000 },
  { title: 'Since I Left You', year: 2000 },
  { title: 'Relationship of Command', year: 2000 },
  { title: 'Lift Your Skinny Fists Like Antennas to Heaven', year: 2000 },
  { title: 'Vespertine', year: 2001 },
  { title: 'The Sinister Urge', year: 2001 },
  { title: 'Love and Theft', year: 2001 },
  { title: 'Ten New Songs', year: 2001 },
  { title: 'O', year: 2002 },
  { title: 'Yankee Hotel Foxtrot', year: 2002 },
  { title: 'A Rush of Blood to the Head', year: 2002 },
  { title: 'The Rising', year: 2002 },
  { title: 'Up The Bracket', year: 2002 },
  { title: 'Yoshimi Battles the Pink Robots', year: 2002 },
  { title: 'Faceless', year: 2003 },
  { title: 'Absolution', year: 2003 },
  { title: 'Speakerboxxx/The Love Below', year: 2003 },
  { title: 'Come Away With Me', year: 2002 },
  { title: 'The Eminem Show', year: 2002 },
  { title: 'Funeral', year: 2004 },
  { title: 'Madvillainy', year: 2004 },
  { title: 'Hot Fuss', year: 2004 },
  { title: 'Our Endless Numbered Days', year: 2004 },
  { title: 'Scissor Sisters', year: 2004 },
  { title: 'The Lyre of Orpheus/Abattoir Blues', year: 2004 },
  { title: 'Illinois', year: 2005 },
  { title: 'Takk...', year: 2005 },
  { title: 'Demon Days', year: 2005 },
  { title: 'Mezmerize', year: 2005 },
  { title: 'The Undisputed Truth', year: 2005 },
  { title: '10,000 Days', year: 2006 },
  { title: 'St. Elsewhere', year: 2006 },
  { title: 'Boys and Girls in America', year: 2006 },
  { title: 'Real Gone', year: 2006 },
  { title: 'In Rainbows', year: 2007 },
  { title: 'Graduation', year: 2007 },
  { title: 'The Black Parade', year: 2007 },
  { title: 'Boxer', year: 2007 },
  { title: 'We Were Dead Before the Ship Even Sank', year: 2007 },
  { title: 'Attack & Release', year: 2008 },
  { title: 'Vampire Weekend', year: 2008 },
  { title: 'Dig, Lazarus, Dig!!!', year: 2008 },
  { title: 'xx', year: 2009 },
  { title: 'Leviathan', year: 2004 },
  { title: 'Unearthed', year: 2003 },
  { title: 'Blackwater Park', year: 2001 },
  { title: 'The Blueprint', year: 2001 },
];