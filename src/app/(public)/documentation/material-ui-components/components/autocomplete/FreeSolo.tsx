import * as React from 'react';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';

export default function FreeSolo() {
  return (
    <Stack spacing={2} sx={{ width: 300 }}>
      <Autocomplete
        id="free-solo-demo"
        freeSolo
        options={top100Albums.map((option) => option.title)}
        renderInput={(params) => <TextField {...params} label="freeSolo" />}
      />
      <Autocomplete
        freeSolo
        id="free-solo-2-demo"
        disableClearable
        options={top100Albums.map((option) => option.title)}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Search input"
            slotProps={{
              input: {
                ...params.InputProps,
                type: 'search',
              },
            }}
          />
        )}
      />
    </Stack>
  );
}

// Top 100 American music albums of all time, sourced from Rolling Stone, TIME, and Billboard
const top100Albums = [
  { title: 'Sgt. Pepper’s Lonely Hearts Club Band', year: 1967 },
  { title: 'Pet Sounds', year: 1966 },
  { title: 'Revolver', year: 1966 },
  { title: 'Highway 61 Revisited', year: 1965 },
  { title: 'Rubber Soul', year: 1965 },
  { title: 'What’s Going On', year: 1971 },
  { title: 'Exile on Main St.', year: 1972 },
  { title: 'Blonde on Blonde', year: 1966 },
  { title: 'The Beatles (White Album)', year: 1968 },
  { title: 'The Sun Sessions', year: 1976 },
  { title: 'Kind of Blue', year: 1959 },
  { title: 'The Velvet Underground & Nico', year: 1967 },
  { title: 'Abbey Road', year: 1969 },
  { title: 'Are You Experienced', year: 1967 },
  { title: 'Blood on the Tracks', year: 1975 },
  { title: 'Nevermind', year: 1991 },
  { title: 'Born to Run', year: 1975 },
  { title: 'Astral Weeks', year: 1968 },
  { title: 'Thriller', year: 1982 },
  { title: 'The Great Twenty-Eight', year: 1982 },
  { title: 'The Complete Recordings', year: 1990 },
  { title: 'John Lennon/Plastic Ono Band', year: 1970 },
  { title: 'Innervisions', year: 1973 },
  { title: 'Live at the Apollo', year: 1963 },
  { title: 'Rumours', year: 1977 },
  { title: 'The Joshua Tree', year: 1987 },
  { title: 'Who’s Next', year: 1971 },
  { title: 'Led Zeppelin', year: 1969 },
  { title: 'Blue', year: 1971 },
  { title: 'Bringing It All Back Home', year: 1965 },
  { title: 'Let It Bleed', year: 1969 },
  { title: 'Ramones', year: 1976 },
  { title: 'Music From Big Pink', year: 1968 },
  { title: 'Tapestry', year: 1971 },
  { title: 'Hotel California', year: 1976 },
  { title: 'The Anthology', year: 1972 },
  { title: 'Please Please Me', year: 1963 },
  { title: 'Forever Changes', year: 1967 },
  { title: 'Never Mind the Bollocks, Here’s the Sex Pistols', year: 1977 },
  { title: 'The Doors', year: 1967 },
  { title: 'The Dark Side of the Moon', year: 1973 },
  { title: 'Horses', year: 1975 },
  { title: 'The Band', year: 1969 },
  { title: 'Legend', year: 1984 },
  { title: 'A Love Supreme', year: 1965 },
  { title: 'It Takes a Nation of Millions to Hold Us Back', year: 1988 },
  { title: 'At Folsom Prison', year: 1968 },
  { title: 'Marquee Moon', year: 1977 },
  { title: 'Graceland', year: 1986 },
  { title: 'Back in Black', year: 1980 },
  { title: 'Appetite for Destruction', year: 1987 },
  { title: 'Moondance', year: 1970 },
  { title: 'Led Zeppelin IV', year: 1971 },
  { title: 'Songs in the Key of Life', year: 1976 },
  { title: 'The Wall', year: 1979 },
  { title: 'Bridge Over Troubled Water', year: 1970 },
  { title: 'Sticky Fingers', year: 1971 },
  { title: 'Purple Rain', year: 1984 },
  { title: 'The Chronic', year: 1992 },
  { title: 'The Low End Theory', year: 1991 },
  { title: 'Ready to Die', year: 1994 },
  { title: 'My Life', year: 1994 },
  { title: 'Live Through This', year: 1994 },
  { title: 'OK Computer', year: 1997 },
  { title: 'Time Out of Mind', year: 1997 },
  { title: 'The Marshall Mathers LP', year: 2000 },
  { title: 'Kid A', year: 2000 },
  { title: 'Stankonia', year: 2000 },
  { title: 'American Recordings', year: 1994 },
  { title: 'Car Wheels on a Gravel Road', year: 1998 },
  { title: 'Nebraska', year: 1982 },
  { title: 'Mermaid Avenue', year: 1998 },
  { title: 'Unchained', year: 1996 },
  { title: 'The College Dropout', year: 2004 },
  { title: 'Yankee Hotel Foxtrot', year: 2002 },
  { title: 'Speakerboxxx/The Love Below', year: 2003 },
  { title: 'Funeral', year: 2004 },
  { title: 'Illinois', year: 2005 },
  { title: 'In Rainbows', year: 2007 },
  { title: 'Vampire Weekend', year: 2008 },
  { title: 'Madvillainy', year: 2004 },
  { title: 'The Black Parade', year: 2007 },
  { title: 'Dookie', year: 1994 },
  { title: 'Rage Against the Machine', year: 1992 },
  { title: 'Slanted and Enchanted', year: 1992 },
  { title: 'Enter the Wu-Tang (36 Chambers)', year: 1993 },
  { title: 'The Miseducation of Lauryn Hill', year: 1998 },
  { title: 'Supa Dupa Fly', year: 1997 },
  { title: 'Aquemini', year: 1998 },
  { title: 'Master of Puppets', year: 1986 },
  { title: 'Red', year: 2012 },
  { title: 'Odelay', year: 1996 },
  { title: 'Californication', year: 1999 },
  { title: 'Illmatic', year: 1994 },
  { title: 'Bad', year: 1987 },
  { title: 'Jagged Little Pill', year: 1995 },
  { title: 'Born in the U.S.A.', year: 1984 },
  { title: 'Darkness on the Edge of Town', year: 1978 },
  { title: 'Harvest', year: 1972 },
  { title: 'Lady Soul', year: 1968 },
];