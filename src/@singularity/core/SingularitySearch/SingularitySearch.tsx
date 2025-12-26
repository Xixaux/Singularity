'use client';

import React, { memo, useEffect, useReducer, useRef, ReactNode } from 'react';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import { styled, useTheme } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MenuItem from '@mui/material/MenuItem';
import Paper from '@mui/material/Paper';
import Popper from '@mui/material/Popper';
import TextField from '@mui/material/TextField';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import SvgIcon from '@mui/material/SvgIcon';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import match from 'autosuggest-highlight/match';
import parse from 'autosuggest-highlight/parse';
import clsx from 'clsx';
import _ from 'lodash';
import Autosuggest, { RenderInputComponentProps, RenderSuggestionParams, ChangeEvent } from 'react-autosuggest';
import useNavigate from '@singularity/hooks/useNavigate';
import SingularitySvgIcon from '../SingularitySvgIcon';
import { SingularityFlatNavItemType } from '../SingularityNavigation/types/SingularityNavItemType';

const Root = styled('div')(({ theme }) => ({
  '& .SingularitySearch-container': {
    position: 'relative',
  },
  '& .SingularitySearch-suggestionsContainerOpen': {
    position: 'absolute',
    zIndex: 1,
    marginTop: theme.spacing(),
    left: 0,
    right: 0,
  },
  '& .SingularitySearch-suggestion': {
    display: 'block',
  },
  '& .SingularitySearch-suggestionsList': {
    margin: 0,
    padding: 0,
    listStyleType: 'none',
  },
  '& .SingularitySearch-input': {
    transition: theme.transitions.create(['background-color'], {
      easing: theme.transitions.easing.easeInOut,
      duration: theme.transitions.duration.short,
    }),
    '&:focus': {
      backgroundColor: theme.palette.background.paper,
    },
  },
  '& .search-icon': {
    transition: theme.transitions.create(['stroke', 'color'], {
      easing: theme.transitions.easing.easeInOut,
      duration: theme.transitions.duration.short,
    }),
  },
  '& [data-icon-type="search"] .search-icon:hover': {
    stroke: '#2196F3 ',
    color: '#2196F3 ',
  },
}));

type RenderInputComponentType = {
  variant?: 'basic' | 'standard';
  inputRef?: (node: HTMLInputElement) => void;
  ref?: (node: HTMLInputElement) => void;
  key?: string;
  iconColor: string;
};

function renderInputComponent(props: RenderInputComponentProps & { iconColor: string }) {
  const { variant, ref, inputRef = () => {}, key, iconColor, ...other } = props as RenderInputComponentType;

  return (
    <div className="relative w-full" key={key}>
      {variant === 'basic' ? (
        <>
          <TextField
            fullWidth
            autoComplete="off"
            slotProps={{
              input: {
                name: 'auto-complete-search',
                role: 'search',
                inputRef: (node: HTMLInputElement) => {
                  ref?.(node);
                  inputRef(node);
                },
                classes: {
                  input: 'SingularitySearch-input py-0 px-4 h-9 md:h-9 ltr:pr-9 rtl:pl-9',
                  notchedOutline: 'rounded-lg',
                },
              },
            }}
            variant="outlined"
            {...other}
          />
          <SvgIcon
            className="search-icon pointer-events-none absolute top-0 h-9 w-9 p-2 ltr:right-0 rtl:left-0"
            sx={{
              color: iconColor,
              fontSize: 18,
            }}
            data-icon-type="search"
          >
            <MagnifyingGlassIcon
              className="search-icon"
              style={{
                width: 18,
                height: 18,
                stroke: iconColor,
                fill: 'none',
              }}
              data-icon-type="search"
            />
          </SvgIcon>
        </>
      ) : (
        <TextField
          fullWidth
          slotProps={{
            input: {
              disableUnderline: true,
              inputRef: (node: HTMLInputElement) => {
                ref?.(node);
                inputRef(node);
              },
              classes: {
                input: 'SingularitySearch-input py-0 px-4 h-9',
              },
            },
          }}
          variant="standard"
          {...other}
        />
      )}
    </div>
  );
}

function renderSuggestionContent(
  suggestion: SingularityFlatNavItemType,
  { query, isHighlighted }: RenderSuggestionParams,
  iconColor: string
) {
  if (!suggestion || typeof suggestion.title !== 'string') {
    return (
      <MenuItem selected={Boolean(isHighlighted)} component="div" disabled>
        <ListItemText primary="[Invalid Item - Data Error]" />
      </MenuItem>
    );
  }

  const matches = match(suggestion.title, query);
  const parts = parse(suggestion.title, matches);

  return (
    <MenuItem selected={Boolean(isHighlighted)} component="div">
      <ListItemIcon className="min-w-9">
        {suggestion.icon ? (
          <SingularitySvgIcon sx={{ color: iconColor }}>{suggestion.icon}</SingularitySvgIcon>
        ) : (
          <span className="w-6 text-center text-2xl font-semibold uppercase" style={{ color: iconColor }}>
            {suggestion.title ? suggestion.title[0] : ''}
          </span>
        )}
      </ListItemIcon>
      <ListItemText
        primary={parts?.map((part: { text: string; highlight?: boolean }, index: number) =>
          part.highlight ? (
            <span key={index} style={{ fontWeight: 600 }}>
              {part.text}
            </span>
          ) : (
            <strong key={index} style={{ fontWeight: 300 }}>
              {part.text}
            </strong>
          )
        )}
      />
    </MenuItem>
  );
}

function getSuggestions(value: string, data: SingularityFlatNavItemType[]): SingularityFlatNavItemType[] {
  const inputValue = _.deburr(value.trim()).toLowerCase();
  const inputLength = inputValue.length;
  let count = 0;

  if (inputLength === 0) {
    return [];
  }

  return data.filter((suggestion) => {
    const isValidTitle = suggestion?.title && typeof suggestion.title === 'string' && suggestion.title.length > 0;
    
    if (!isValidTitle) {
        return false;
    }
    
    const keep = count < 10 && match(suggestion.title, inputValue)?.length > 0;

    if (keep) {
      count += 1;
    }

    return keep;
  });
}

function getSuggestionValue(suggestion: SingularityFlatNavItemType) {
  return suggestion?.title || '';
}

type StateType = {
  searchText: string;
  search: boolean;
  navigation: SingularityFlatNavItemType[];
  suggestions: SingularityFlatNavItemType[];
  noSuggestions: boolean;
  opened: boolean;
};

const initialState: StateType = {
  searchText: '',
  search: false,
  navigation: [],
  suggestions: [],
  noSuggestions: false,
  opened: false,
};

type ActionType =
  | { type: 'setSearchText'; value: string }
  | { type: 'setNavigation'; data: SingularityFlatNavItemType[] }
  | { type: 'updateSuggestions'; value: string }
  | { type: 'clearSuggestions' }
  | { type: 'open' }
  | { type: 'close' };

function reducer(state: StateType, action: ActionType): StateType {
  switch (action.type) {
    case 'open': {
      return {
        ...state,
        opened: true,
      };
    }
    case 'close': {
      return {
        ...state,
        opened: false,
        searchText: '',
      };
    }
    case 'setSearchText': {
      return {
        ...state,
        searchText: action.value,
      };
    }
    case 'setNavigation': {
      return {
        ...state,
        navigation: action.data,
      };
    }
    case 'updateSuggestions': {
      const suggestions = getSuggestions(action.value, state.navigation);
      const isInputBlank = typeof action.value === 'string' && action.value.trim() === '';
      const noSuggestions = !isInputBlank && suggestions.length === 0;

      return {
        ...state,
        suggestions,
        noSuggestions,
      };
    }
    case 'clearSuggestions': {
      return {
        ...state,
        suggestions: [],
        noSuggestions: false,
      };
    }
    default: {
      throw new Error();
    }
  }
}


type SingularitySearchProps = {
  className?: string;
  navigation: SingularityFlatNavItemType[];
  variant?: 'basic' | 'full';
  placeholder?: string;
  noResults?: string;
  trigger?: ReactNode;
};

function SingularitySearch(props: SingularitySearchProps) {
  const {
    navigation = [],
    className,
    variant = 'full',
    placeholder = 'Search',
    noResults = 'No results..',
  } = props;
  
  const navigate = useNavigate();
  const theme = useTheme(); 
  const iconColor = theme.palette.mode === 'light' ? '#1C1C1C' : theme.palette?.icon?.primary || theme.palette.text.primary;
  
  const getRenderSuggestion = (
    suggestion: SingularityFlatNavItemType, 
    params: RenderSuggestionParams
  ) => renderSuggestionContent(suggestion, params, iconColor);


  const defaultTrigger = (
    <IconButton
      sx={{
        color: iconColor,
        backgroundColor: 'transparent ',
        '& svg': {
          color: iconColor,
          stroke: iconColor,
          fill: 'none',
        },
      }}
      onMouseEnter={() => console.log('Hovering search icon')}
      data-icon-type="search"
    >
      <SvgIcon
        className="search-icon"
        sx={{
          color: iconColor,
          fontSize: 18,
        }}
        data-icon-type="search"
      >
        <MagnifyingGlassIcon
          className="search-icon"
          style={{
            width: 18,
            height: 18,
            stroke: iconColor,
            fill: 'none',
          }}
          data-icon-type="search"
        />
      </SvgIcon>
    </IconButton>
  );

  const trigger = props.trigger || defaultTrigger;

  const [state, dispatch] = useReducer(reducer, initialState);

  const suggestionsNode = useRef<HTMLDivElement>(null);
  const popperNode = useRef<HTMLDivElement>(null);
  const buttonNode = useRef(null);

  useEffect(() => {
    dispatch({
      type: 'setNavigation',
      data: navigation,
    });
  }, [navigation]);

  function showSearch() {
    dispatch({ type: 'open' });
    document.addEventListener('keydown', escFunction, false);
  }

  function hideSearch() {
    dispatch({ type: 'close' });
    document.removeEventListener('keydown', escFunction, false);
  }

  function escFunction(event: KeyboardEvent) {
    if (event.key === 'Esc' || event.key === 'Escape') {
      hideSearch();
    }
  }

  function handleSuggestionsFetchRequested({ value }: { value: string }) {
    dispatch({
      type: 'updateSuggestions',
      value,
    });
  }

  function handleSuggestionSelected(
    event: React.FormEvent<unknown>,
    { suggestion }: { suggestion: SingularityFlatNavItemType }
  ) {
    event.preventDefault();
    event.stopPropagation();

    if (!suggestion || !suggestion.url) {
      return;
    }

    hideSearch();

    navigate(suggestion.url);
  }

  function handleSuggestionsClearRequested() {
    dispatch({
      type: 'clearSuggestions',
    });
  }

  function handleChange(_event: React.FormEvent<HTMLElement>, { newValue }: ChangeEvent) {
    dispatch({
      type: 'setSearchText',
      value: newValue,
    });
  }

  function handleClickAway(event: MouseEvent | TouchEvent) {
    if (
      state.opened &&
      (!suggestionsNode.current ||
        !(event.target instanceof Node && suggestionsNode.current.contains(event.target)))
    ) {
      hideSearch();
    }
  }

  switch (variant) {
    case 'basic': {
      return (
        <div className={clsx('flex w-full items-center', className)} ref={popperNode}>
          <Autosuggest
            renderInputComponent={(props: RenderInputComponentProps) => renderInputComponent({ ...props, iconColor })}
            highlightFirstSuggestion
            suggestions={state.suggestions}
            onSuggestionsFetchRequested={handleSuggestionsFetchRequested}
            onSuggestionsClearRequested={handleSuggestionsClearRequested}
            onSuggestionSelected={handleSuggestionSelected}
            getSuggestionValue={getSuggestionValue}
            renderSuggestion={getRenderSuggestion}
            inputProps={{
              // eslint-disable-next-line @typescript-eslint/ban-ts-comment
              // @ts-ignore
              variant,
              placeholder,
              role: 'search',
              value: state.searchText,
              onChange: handleChange,
              onFocus: showSearch,
              InputLabelProps: {
                shrink: true,
              },
              autoFocus: false,
            }}
            theme={{
              container: 'flex flex-1 w-full',
              suggestionsList: 'SingularitySearch-suggestionsList',
              suggestion: 'SingularitySearch-suggestion',
            }}
            renderSuggestionsContainer={(options) => {
              const { containerProps } = options;
              const { key, ...restContainerProps } = containerProps;

              return (
                <Popper
                  anchorEl={popperNode.current}
                  open={Boolean(options.children) || state.noSuggestions}
                  className="z-9999"
                >
                  <div ref={suggestionsNode}>
                    <Paper
                      key={key}
                      {...restContainerProps}
                      style={{
                        width: popperNode.current ? popperNode.current.clientWidth : '',
                      }}
                      className="overflow-hidden rounded-lg shadow-lg"
                    >
                      {options.children}
                      {state.noSuggestions && <Typography className="px-4 py-3">{noResults}</Typography>}
                    </Paper>
                  </div>
                </Popper>
              );
            }}
          />
        </div>
      );
    }
    case 'full': {
      return (
        <Root className={clsx('flex', className)}>
          <Tooltip title="Click to search" placement="bottom">
            <div
              onClick={showSearch}
              onKeyDown={showSearch}
              role="button"
              tabIndex={0}
              ref={buttonNode}
            >
              {React.cloneElement(trigger as React.ReactElement, {
                children: React.cloneElement((trigger as React.ReactElement).props.children, {
                  className: 'search-icon',
                  sx: { color: iconColor, fontSize: 18 },
                  children: (
                    <MagnifyingGlassIcon
                      className="search-icon"
                      style={{
                        width: 18,
                        height: 18,
                        stroke: iconColor,
                        fill: 'none',
                      }}
                      data-icon-type="search"
                    />
                  ),
                }),
              })}
            </div>
          </Tooltip>

          {state.opened && (
            <ClickAwayListener onClickAway={handleClickAway}>
              <Paper className="absolute inset-x-0 top-0 z-9999 h-full shadow-0" square>
                <div className="flex h-full w-full items-center" ref={popperNode}>
                  <Autosuggest
                    renderInputComponent={(props: RenderInputComponentProps) => renderInputComponent({ ...props, iconColor })}
                    highlightFirstSuggestion
                    suggestions={state.suggestions}
                    onSuggestionsFetchRequested={handleSuggestionsFetchRequested}
                    onSuggestionsClearRequested={handleSuggestionsClearRequested}
                    onSuggestionSelected={handleSuggestionSelected}
                    getSuggestionValue={getSuggestionValue}
                    renderSuggestion={getRenderSuggestion}
                    inputProps={{
                      placeholder,
                      value: state.searchText,
                      onChange: handleChange,
                      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                      // @ts-ignore
                      InputLabelProps: {
                        shrink: true,
                      },
                      autoFocus: true,
                    }}
                    theme={{
                      container: 'flex flex-1 w-full',
                      suggestionsList: 'SingularitySearch-suggestionsList',
                      suggestion: 'SingularitySearch-suggestion',
                    }}
                    renderSuggestionsContainer={(options) => {
                      const { containerProps } = options;
                      const { key, ...restContainerProps } = containerProps;

                      return (
                        <Popper
                          anchorEl={popperNode.current}
                          open={Boolean(options.children) || state.noSuggestions}
                          className="z-9999"
                        >
                          <div ref={suggestionsNode}>
                            <Paper
                              square
                              key={key}
                              {...restContainerProps}
                              className="shadow-lg"
                              style={{
                                width: popperNode.current ? popperNode.current.clientWidth : 'auto',
                              }}
                            >
                              {options.children}
                              {state.noSuggestions && (
                                <Typography className="px-4 py-3">{noResults}</Typography>
                              )}
                            </Paper>
                          </div>
                        </Popper>
                      );
                    }}
                  />
                  <IconButton
                    onClick={hideSearch}
                    className="mx-2"
                    size="large"
                    sx={{
                      color: iconColor,
                      backgroundColor: 'transparent ',
                      '& svg': {
                        color: iconColor,
                        stroke: iconColor,
                        fill: 'none',
                      },
                    }}
                    onMouseEnter={() => console.log('Hovering search close icon')}
                    data-icon-type="search"
                  >
                    <SvgIcon
                      className="search-icon"
                      sx={{
                        color: iconColor,
                        fontSize: 18,
                      }}
                      data-icon-type="search"
                    >
                      <MagnifyingGlassIcon
                        className="search-icon"
                        style={{
                          width: 18,
                          height: 18,
                          stroke: iconColor,
                          fill: 'none',
                        }}
                        data-icon-type="search"
                      />
                    </SvgIcon>
                  </IconButton>
                </div>
              </Paper>
            </ClickAwayListener>
          )}
        </Root>
      );
    }
    default: {
      return null;
    }
  }
}

export default memo(SingularitySearch);