import * as React from 'react';
import useAutocomplete, {
  AutocompleteGetTagProps,
} from '@mui/material/useAutocomplete';
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';
import { styled } from '@mui/material/styles';
import { autocompleteClasses } from '@mui/material/Autocomplete';

const Root = styled('div')(({ theme }) => ({
  color: 'rgba(0,0,0,0.85)',
  fontSize: '14px',
  ...theme.applyStyles('dark', {
    color: 'rgba(255,255,255,0.65)',
  }),
}));

const Label = styled('label')`
  padding: 0 0 4px;
  line-height: 1.5;
  display: block;
`;

const InputWrapper = styled('div')(({ theme }) => ({
  width: '300px',
  border: '1px solid #d9d9d9',
  backgroundColor: '#fff',
  borderRadius: '4px',
  padding: '1px',
  display: 'flex',
  flexWrap: 'wrap',
  ...theme.applyStyles('dark', {
    borderColor: '#434343',
    backgroundColor: '#141414',
  }),
  '&:hover': {
    borderColor: '#40a9ff',
    ...theme.applyStyles('dark', {
      borderColor: '#177ddc',
    }),
  },
  '&.focused': {
    borderColor: '#40a9ff',
    boxShadow: '0 0 0 2px rgb(24 144 255 / 0.2)',
    ...theme.applyStyles('dark', {
      borderColor: '#177ddc',
    }),
  },
  '& input': {
    backgroundColor: '#fff',
    color: 'rgba(0,0,0,.85)',
    height: '30px',
    boxSizing: 'border-box',
    padding: '4px 6px',
    width: '0',
    minWidth: '30px',
    flexGrow: 1,
    border: 0,
    margin: 0,
    outline: 0,
    ...theme.applyStyles('dark', {
      color: 'rgba(255,255,255,0.65)',
      backgroundColor: '#141414',
    }),
  },
}));

interface TagProps extends ReturnType<AutocompleteGetTagProps> {
  label: string;
}

function Tag(props: TagProps) {
  const { label, onDelete, ...other } = props;
  return (
    <div {...other}>
      <span>{label}</span>
      <CloseIcon onClick={onDelete} />
    </div>
  );
}

const StyledTag = styled(Tag)<TagProps>(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  height: '24px',
  margin: '2px',
  lineHeight: '22px',
  backgroundColor: '#fafafa',
  border: `1px solid #e8e8e8`,
  borderRadius: '2px',
  boxSizing: 'content-box',
  padding: '0 4px 0 10px',
  outline: 0,
  overflow: 'hidden',
  ...theme.applyStyles('dark', {
    backgroundColor: 'rgba(255,255,255,0.08)',
    borderColor: '#303030',
  }),
  '&:focus': {
    borderColor: '#40a9ff',
    backgroundColor: '#e6f7ff',
    ...theme.applyStyles('dark', {
      backgroundColor: '#003b57',
      borderColor: '#177ddc',
    }),
  },
  '& span': {
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
  },
  '& svg': {
    fontSize: '12px',
    cursor: 'pointer',
    padding: '4px',
  },
}));

const Listbox = styled('ul')(({ theme }) => ({
  width: '300px',
  margin: '2px 0 0',
  padding: 0,
  position: 'absolute',
  listStyle: 'none',
  backgroundColor: '#fff',
  overflow: 'auto',
  maxHeight: '250px',
  borderRadius: '4px',
  boxShadow: '0 2px 8px rgb(0 0 0 / 0.15)',
  zIndex: 1,
  ...theme.applyStyles('dark', {
    backgroundColor: '#141414',
  }),
  '& li': {
    padding: '5px 12px',
    display: 'flex',
    '& span': {
      flexGrow: 1,
    },
    '& svg': {
      color: 'transparent',
    },
  },
  "& li[aria-selected='true']": {
    backgroundColor: '#fafafa',
    fontWeight: 600,
    ...theme.applyStyles('dark', {
      backgroundColor: '#2b2b2b',
    }),
    '& svg': {
      color: '#1890ff',
    },
  },
  [`& li.${autocompleteClasses.focused}`]: {
    backgroundColor: '#e6f7ff',
    cursor: 'pointer',
    ...theme.applyStyles('dark', {
      backgroundColor: '#003b57',
    }),
    '& svg': {
      color: 'currentColor',
    },
  },
}));

export default function CustomizedHook() {
  const {
    getRootProps,
    getInputLabelProps,
    getInputProps,
    getTagProps,
    getListboxProps,
    getOptionProps,
    groupedOptions,
    value,
    focused,
    setAnchorEl,
  } = useAutocomplete({
    id: 'customized-hook-demo',
    defaultValue: [top100Albums[1]],
    multiple: true,
    options: top100Albums,
    getOptionLabel: (option) => option.title,
  });

  return (
    <Root>
      <div {...getRootProps()}>
        <Label {...getInputLabelProps()}>Customized hook</Label>
        <InputWrapper ref={setAnchorEl} className={focused ? 'focused' : ''}>
          {value.map((option: FilmOptionType, index: number) => {
            const { key, ...tagProps } = getTagProps({ index });
            return <StyledTag key={key} {...tagProps} label={option.title} />;
          })}
          <input {...getInputProps()} />
        </InputWrapper>
      </div>
      {groupedOptions.length > 0 ? (
        <Listbox {...getListboxProps()}>
          {groupedOptions.map((option, index) => {
            const { key, ...optionProps } = getOptionProps({ option, index });
            return (
              <li key={key} {...optionProps}>
                <span>{option.title}</span>
                <CheckIcon fontSize="small" />
              </li>
            );
          })}
        </Listbox>
      ) : null}
    </Root>
  );
}

interface FilmOptionType {
  title: string;
  year: number;
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