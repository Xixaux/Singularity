import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

interface Album {
  label: string;
  year: number;
}

export default function AutocompleteHint() {
  const hint = React.useRef('');
  const [inputValue, setInputValue] = React.useState('');
  return (
    <Autocomplete
      onKeyDown={(event) => {
        if (event.key === 'Tab') {
          if (hint.current) {
            setInputValue(hint.current);
            event.preventDefault();
          }
        }
      }}
      onClose={() => {
        hint.current = '';
      }}
      onChange={(event, newValue) => {
        setInputValue(newValue && newValue.label ? newValue.label : '');
      }}
      disablePortal
      inputValue={inputValue}
      id="combo-box-hint-demo"
      options={top100Albums}
      sx={{ width: 300 }}
      renderInput={(params) => {
        return (
          <Box sx={{ position: 'relative' }}>
            <Typography
              sx={{
                position: 'absolute',
                opacity: 0.5,
                left: 14,
                top: 16,
                overflow: 'hidden',
                whiteSpace: 'nowrap',
                width: 'calc(100% - 75px)',
              }}
            >
              {hint.current}
            </Typography>
            <TextField
              {...params}
              onChange={(event) => {
                const newValue = event.target.value;
                setInputValue(newValue);
                const matchingOption = top100Albums.find((option) =>
                  option.label.startsWith(newValue),
                );

                if (newValue && matchingOption) {
                  hint.current = matchingOption.label;
                } else {
                  hint.current = '';
                }
              }}
              label="Album"
            />
          </Box>
        );
      }}
    />
  );
}

// Top 100 American music albums of all time, sourced from Rolling Stone, TIME, and Billboard
const top100Albums = [
  { label: 'Sgt. Pepper’s Lonely Hearts Club Band', year: 1967 },
  { label: 'Pet Sounds', year: 1966 },
  { label: 'Revolver', year: 1966 },
  { label: 'Highway 61 Revisited', year: 1965 },
  { label: 'Rubber Soul', year: 1965 },
  { label: 'What’s Going On', year: 1971 },
  { label: 'Exile on Main St.', year: 1972 },
  { label: 'Blonde on Blonde', year: 1966 },
  { label: 'The Beatles (White Album)', year: 1968 },
  { label: 'The Sun Sessions', year: 1976 },
  { label: 'Kind of Blue', year: 1959 },
  { label: 'The Velvet Underground & Nico', year: 1967 },
  { label: 'Abbey Road', year: 1969 },
  { label: 'Are You Experienced', year: 1967 },
  { label: 'Blood on the Tracks', year: 1975 },
  { label: 'Nevermind', year: 1991 },
  { label: 'Born to Run', year: 1975 },
  { label: 'Astral Weeks', year: 1968 },
  { label: 'Thriller', year: 1982 },
  { label: 'The Great Twenty-Eight', year: 1982 },
  { label: 'The Complete Recordings', year: 1990 },
  { label: 'John Lennon/Plastic Ono Band', year: 1970 },
  { label: 'Innervisions', year: 1973 },
  { label: 'Live at the Apollo', year: 1963 },
  { label: 'Rumours', year: 1977 },
  { label: 'The Joshua Tree', year: 1987 },
  { label: 'Who’s Next', year: 1971 },
  { label: 'Led Zeppelin', year: 1969 },
  { label: 'Blue', year: 1971 },
  { label: 'Bringing It All Back Home', year: 1965 },
  { label: 'Let It Bleed', year: 1969 },
  { label: 'Ramones', year: 1976 },
  { label: 'Music From Big Pink', year: 1968 },
  { label: 'Tapestry', year: 1971 },
  { label: 'Hotel California', year: 1976 },
  { label: 'The Anthology', year: 1972 },
  { label: 'Please Please Me', year: 1963 },
  { label: 'Forever Changes', year: 1967 },
  { label: 'Never Mind the Bollocks, Here’s the Sex Pistols', year: 1977 },
  { label: 'The Doors', year: 1967 },
  { label: 'The Dark Side of the Moon', year: 1973 },
  { label: 'Horses', year: 1975 },
  { label: 'The Band', year: 1969 },
  { label: 'Legend', year: 1984 },
  { label: 'A Love Supreme', year: 1965 },
  { label: 'It Takes a Nation of Millions to Hold Us Back', year: 1988 },
  { label: 'At Folsom Prison', year: 1968 },
  { label: 'Marquee Moon', year: 1977 },
  { label: 'Graceland', year: 1986 },
  { label: 'Back in Black', year: 1980 },
  { label: 'Appetite for Destruction', year: 1987 },
  { label: 'Moondance', year: 1970 },
  { label: 'Led Zeppelin IV', year: 1971 },
  { label: 'Songs in the Key of Life', year: 1976 },
  { label: 'The Wall', year: 1979 },
  { label: 'Bridge Over Troubled Water', year: 1970 },
  { label: 'Sticky Fingers', year: 1971 },
  { label: 'Purple Rain', year: 1984 },
  { label: 'The Chronic', year: 1992 },
  { label: 'The Low End Theory', year: 1991 },
  { label: 'Ready to Die', year: 1994 },
  { label: 'My Life', year: 1994 },
  { label: 'Live Through This', year: 1994 },
  { label: 'OK Computer', year: 1997 },
  { label: 'Time Out of Mind', year: 1997 },
  { label: 'The Marshall Mathers LP', year: 2000 },
  { label: 'Kid A', year: 2000 },
  { label: 'Stankonia', year: 2000 },
  { label: 'American Recordings', year: 1994 },
  { label: 'Car Wheels on a Gravel Road', year: 1998 },
  { label: 'Nebraska', year: 1982 },
  { label: 'Mermaid Avenue', year: 1998 },
  { label: 'Unchained', year: 1996 },
  { label: 'The College Dropout', year: 2004 },
  { label: 'Yankee Hotel Foxtrot', year: 2002 },
  { label: 'Speakerboxxx/The Love Below', year: 2003 },
  { label: 'Funeral', year: 2004 },
  { label: 'Illinois', year: 2005 },
  { label: 'In Rainbows', year: 2007 },
  { label: 'Vampire Weekend', year: 2008 },
  { label: 'Madvillainy', year: 2004 },
  { label: 'The Black Parade', year: 2007 },
  { label: 'Dookie', year: 1994 },
  { label: 'Rage Against the Machine', year: 1992 },
  { label: 'Slanted and Enchanted', year: 1992 },
  { label: 'Enter the Wu-Tang (36 Chambers)', year: 1993 },
  { label: 'The Miseducation of Lauryn Hill', year: 1998 },
  { label: 'Supa Dupa Fly', year: 1997 },
  { label: 'Aquemini', year: 1998 },
  { label: 'Master of Puppets', year: 1986 },
  { label: 'Red', year: 2012 },
  { label: 'Odelay', year: 1996 },
  { label: 'Californication', year: 1999 },
  { label: 'Illmatic', year: 1994 },
  { label: 'Bad', year: 1987 },
  { label: 'Jagged Little Pill', year: 1995 },
  { label: 'Born in the U.S.A.', year: 1984 },
  { label: 'Darkness on the Edge of Town', year: 1978 },
  { label: 'Harvest', year: 1972 },
  { label: 'Lady Soul', year: 1968 },
];