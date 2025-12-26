'use client';

import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import SvgIcon from '@mui/material/SvgIcon';
import clsx from 'clsx';
import { memo, useCallback, useEffect, useMemo, useRef, useState } from 'react';
import Link from '@singularity/core/Link';
import _ from 'lodash';
import { useTheme } from '@mui/material/styles';
import useUser from '@auth/useUser';
import { useAppDispatch } from 'src/store/hooks';
import useThemeMediaQuery from '@singularity/hooks/useThemeMediaQuery';
import useSingularityLayoutSettings from '@singularity/core/SingularityLayout/useSingularityLayoutSettings';
import useSingularitySettings from '@singularity/core/SingularitySettings/hooks/useSingularitySettings';
import { NavigationBarSliceToggle, NavigationBarSliceToggleMobile } from 'src/components/theme-layouts/components/navigation-bar/NavigationBarSlice';
import {
  FolderOpenIcon,
  CalendarDaysIcon,
  EnvelopeIcon,
  ShieldCheckIcon,
  SquaresPlusIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from '@heroicons/react/24/outline';

type SingularityFlatNavItemType = {
  id: string;
  title: string;
  url: string;
  icon?: string;
};

type SingularityShortcutsProps = {
  className?: string;
  navigation: SingularityFlatNavItemType[];
  onChange: (T: string[]) => void;
  shortcuts?: string[];
  variant?: 'horizontal' | 'vertical';
};

function SingularityShortcuts(props: SingularityShortcutsProps) {
  const { navigation = [], shortcuts = [], onChange, variant = 'horizontal', className = '' } = props;
  const theme = useTheme();
  const { isGuest } = useUser();
  const dispatch = useAppDispatch();
  const isMobile = useThemeMediaQuery((theme) => theme.breakpoints.down('lg'));
  const { config } = useSingularityLayoutSettings();
  const { setSettings } = useSingularitySettings();
  const searchInputRef = useRef<HTMLInputElement>(null);
  const [addMenu, setAddMenu] = useState<HTMLElement | null>(null);
  const [searchText, setSearchText] = useState('');
  const [searchResults, setSearchResults] = useState<SingularityFlatNavItemType[]>([]);
  const [shortcutItems, setShortcutItems] = useState<SingularityFlatNavItemType[]>([]);

  useEffect(() => {
    let _shortcutItems = shortcuts
      .map((id) => _.find(navigation, { id }))
      .filter((item): item is SingularityFlatNavItemType => !!item);

    if (!_shortcutItems.find((item) => item.id === 'mail') && !isGuest) {
      const mailItem: SingularityFlatNavItemType = {
        id: 'mail',
        title: 'Mailbox',
        url: '/apps/mailbox/folders/inbox', // Updated URL
      };
      _shortcutItems.push(mailItem);
    }

    if (_shortcutItems.length === 0 && navigation.length > 0) {
      const defaultShortcuts = ['mail', 'calendar', 'users']
        .map((id) => _.find(navigation, { id }) || (id === 'mail' ? { id: 'mail', title: 'Mailbox', url: '/apps/mailbox/folders/inbox' } : null))
        .filter(Boolean) as SingularityFlatNavItemType[];
      if (defaultShortcuts.length > 0) {
        _shortcutItems = defaultShortcuts;
        onChange(defaultShortcuts.map((item) => item.id));
      }
    }

    const sortedShortcutItems = _shortcutItems.sort((a, b) => {
      const aIsMail = a?.id?.toLowerCase() === 'mail' || a?.title?.toLowerCase()?.includes('mail') || a?.id?.toLowerCase() === 'email' || a?.title?.toLowerCase()?.includes('email');
      const bIsMail = b?.id?.toLowerCase() === 'mail' || b?.title?.toLowerCase()?.includes('mail') || b?.id?.toLowerCase() === 'email' || b?.title?.toLowerCase()?.includes('email');
      const aIsCalendar = a?.id?.toLowerCase() === 'calendar' || a?.title?.toLowerCase()?.includes('calendar');
      const bIsCalendar = b?.id?.toLowerCase() === 'calendar' || b?.title?.toLowerCase()?.includes('calendar');
      const aIsUserManagement = a?.id?.toLowerCase() === 'user-management' || a?.title?.toLowerCase()?.includes('user-management');
      const bIsUserManagement = b?.id?.toLowerCase() === 'user-management' || b?.title?.toLowerCase()?.includes('user-management');
      if (aIsMail && (bIsCalendar || bIsUserManagement)) return -1;
      if (aIsCalendar && bIsUserManagement) return -1;
      if (aIsCalendar && bIsMail) return 1;
      if (aIsUserManagement && (bIsMail || bIsCalendar)) return 1;
      return 0;
    });

    setShortcutItems(sortedShortcutItems);
  }, [navigation, shortcuts, onChange, isGuest]);

  function addMenuClick(event: React.MouseEvent<HTMLElement>) {
    setAddMenu(event.currentTarget);
  }

  function addMenuClose() {
    setAddMenu(null);
  }

  function search(ev: React.ChangeEvent<HTMLInputElement>) {
    const newSearchText = ev.target.value;
    setSearchText(newSearchText);
    if (newSearchText.length !== 0 && navigation) {
      setSearchResults(navigation.filter((item) => item?.title?.toLowerCase()?.includes(newSearchText?.toLowerCase())));
      return;
    }
    setSearchResults([]);
  }

  const toggleInShortcuts = useCallback(
    (id: string) => {
      const newShortcuts = _.xor([...shortcuts], [id]);
      onChange(newShortcuts);
    },
    [onChange, shortcuts]
  );

  const getIconComponent = (item: SingularityFlatNavItemType) => {
    const id = item.id?.toLowerCase();
    const title = item.title?.toLowerCase();
    let iconType = 'default';

    if (id === 'mail' || title?.includes('mail') || id === 'email' || title?.includes('email')) {
      iconType = 'mail';
      return (
        <EnvelopeIcon
          className="shortcut-icon"
          data-icon-type={iconType}
          style={{
            width: 18,
            height: 18,
            shapeRendering: 'geometricPrecision',
          }}
        />
      );
    }
    if (id === 'calendar' || title?.includes('calendar')) {
      iconType = 'calendar';
      return (
        <CalendarDaysIcon
          className="shortcut-icon"
          data-icon-type={iconType}
          style={{
            width: 18,
            height: 18,
            shapeRendering: 'geometricPrecision',
          }}
        />
      );
    }
    if (id === 'users' || title?.includes('users') || id === 'user-management' || title?.includes('user-management')) {
      iconType = 'users';
      return (
        <ShieldCheckIcon
          className="shortcut-icon"
          data-icon-type={iconType}
          style={{
            width: 18,
            height: 18,
            shapeRendering: 'geometricPrecision',
          }}
        />
      );
    }
    return (
      <SquaresPlusIcon
        className="shortcut-icon"
        data-icon-type={iconType}
        style={{
          width: 18,
          height: 18,
          shapeRendering: 'geometricPrecision',
        }}
      />
    );
  };

  if (isGuest) {
    return null;
  }
  
  // Determine which icon to show for the navigation toggle
  const showChevronRight = isMobile 
    ? false
    : config?.NavigationBarSlice?.folded;
    
  const ToggleIcon = showChevronRight ? ChevronRightIcon : ChevronLeftIcon;

  return (
    <Box className={clsx('flex shrink overflow-hidden', variant === 'vertical' ? 'flex-col' : '', className)}>
      <style>
        {`
          .shortcut-icon {
            stroke: ${theme?.vars?.palette?.text?.primary || 'var(--text-color)'};
          }
          .shortcut-icon:hover {
            stroke: var(--hover-color);
          }
          .shortcut-icon[data-icon-type="mail"]:hover {
            stroke: #FF5733;
          }
          .shortcut-icon[data-icon-type="calendar"]:hover {
            stroke: #33FF57;
          }
          .shortcut-icon[data-icon-type="users"]:hover {
            stroke: #3357FF;
          }
          .shortcut-icon[data-icon-type="default"]:hover {
            stroke: #FF33A1;
          }
          .shortcut-icon[data-icon-type="folder"]:hover {
            stroke: #FFC107;
          }
          .navigation-toggle-icon {
              stroke: ${theme?.vars?.palette?.text?.primary || 'var(--text-color)'};
              width: 18px;
              height: 18px;
          }
          .navigation-toggle-icon:hover {
            stroke: ${theme?.vars?.palette?.text?.primary || 'var(--text-color)'};
          }
        `}
      </style>
      {useMemo(() => (
        <Box
          className={clsx('flex flex-1 items-center', variant === 'vertical' ? 'flex-col' : 'max-h-9')}
          sx={{ backgroundColor: 'transparent' }}
        >
          <Tooltip title="Toggle Navigation" placement={variant === 'horizontal' ? 'bottom' : 'left'}>
            <IconButton
              onClick={() => {
                if (isMobile) {
                  dispatch(NavigationBarSliceToggleMobile());
                } else if (config?.NavigationBarSlice?.style === 'style-2') {
                  setSettings(_.set({}, 'layout.config.NavigationBarSlice.folded', !config?.NavigationBarSlice?.folded));
                } else {
                  dispatch(NavigationBarSliceToggle());
                }
              }}
              className="h-9 w-9 p-0 rounded-none"
              sx={{
                color: (theme) => theme?.vars?.palette?.text?.primary || 'var(--text-color)',
                backgroundColor: 'transparent',
                '&:hover': {
                  backgroundColor: 'transparent',
                },
              }}
            >
              <ToggleIcon 
                className="navigation-toggle-icon" 
                style={{
                  width: 18,
                  height: 18,
                  shapeRendering: 'geometricPrecision',
                }}
              />
            </IconButton>
          </Tooltip>
          {shortcutItems.map(
            (_item) =>
              _item && (
                <Link to={_item.url} key={_item.id}>
                  <Tooltip title={_item.title} placement={variant === 'horizontal' ? 'bottom' : 'left'}>
                    <IconButton
                      className="h-9 w-9 p-0 rounded-none"
                      sx={{
                        color: (theme) => theme?.vars?.palette?.text?.primary || 'var(--text-color)',
                        backgroundColor: 'transparent',
                        '&:hover': {
                          backgroundColor: 'transparent',
                        },
                      }}
                      data-icon-type={
                        _item.id.toLowerCase() === 'mail' ||
                        _item.title.toLowerCase().includes('mail') ||
                        _item.id.toLowerCase() === 'email' ||
                        _item.title.toLowerCase().includes('email')
                          ? 'mail'
                          : _item.id.toLowerCase() === 'calendar' || _item.title.toLowerCase().includes('calendar')
                          ? 'calendar'
                          : _item.id.toLowerCase() === 'users' ||
                            _item.title.toLowerCase().includes('users') ||
                            _item.id.toLowerCase() === 'user-management' ||
                            _item.title.toLowerCase().includes('user-management')
                          ? 'users'
                          : 'default'
                      }
                    >
                      {getIconComponent(_item)}
                    </IconButton>
                  </Tooltip>
                </Link>
              )
          )}
          <Tooltip title="Click to add/remove shortcut" placement={variant === 'horizontal' ? 'bottom' : 'left'}>
            <IconButton
              className="h-9 w-9 p-0 rounded-none"
              aria-haspopup="true"
              onClick={addMenuClick}
              sx={{
                color: (theme) => theme?.vars?.palette?.text?.primary || 'var(--text-color)',
                backgroundColor: 'transparent',
                '&:hover': {
                  backgroundColor: 'transparent',
                },
              }}
              data-icon-type="folder"
            >
              <FolderOpenIcon
                className="shortcut-icon"
                data-icon-type="folder"
                style={{
                  width: 18,
                  height: 18,
                  shapeRendering: 'geometricPrecision',
                }}
              />
            </IconButton>
          </Tooltip>
        </Box>
      ), [variant, shortcutItems, isMobile, config?.NavigationBarSlice?.folded])}
      <Menu
        id="add-menu"
        anchorEl={addMenu}
        open={Boolean(addMenu)}
        onClose={addMenuClose}
        classes={{ paper: 'min-w-64' }}
        TransitionProps={{
          onEntered: () => searchInputRef?.current?.focus(),
          onExited: () => setSearchText(''),
        }}
      >
        <div className="p-4 pt-2">
          <Input
            inputRef={searchInputRef}
            value={searchText}
            onChange={search}
            placeholder="Search for an app or page"
            fullWidth
            slotProps={{ input: { 'aria-label': 'Search' } }}
            disableUnderline
          />
        </div>
        <Divider />
        {useMemo(() => {
          if (searchText.length === 0 || !searchResults || searchResults.length === 0) return null;
          return searchResults.map((_item) => (
            <ShortcutMenuItem shortcuts={shortcuts} key={_item.id} item={_item} onToggle={() => toggleInShortcuts(_item.id)} />
          ));
        }, [searchText.length, searchResults, shortcuts, toggleInShortcuts])}
        {searchText.length !== 0 && searchResults.length === 0 && (
          <Typography color="text.secondary" className="p-4 pb-2">
            No results..
          </Typography>
        )}
        {useMemo(() => {
          if (searchText.length !== 0) return null;
          return shortcutItems.map(
            (_item) =>
              _item && (
                <ShortcutMenuItem shortcuts={shortcuts} key={_item.id} item={_item} onToggle={() => toggleInShortcuts(_item.id)} />
              )
          );
        }, [searchText.length, shortcutItems, shortcuts, toggleInShortcuts])}
      </Menu>
    </Box>
  );
}

function ShortcutMenuItem(props: {
  shortcuts: SingularityShortcutsProps['shortcuts'];
  item: SingularityFlatNavItemType;
  onToggle: (T: string) => void;
}) {
  const { item, onToggle, shortcuts = [] } = props;
  const theme = useTheme();
  const dispatch = useAppDispatch();
  const isMobile = useThemeMediaQuery((theme) => theme.breakpoints.down('lg'));
  const { config } = useSingularityLayoutSettings();
  const { setSettings } = useSingularitySettings();

  if (!item || !item.id) return null;

  const getIconComponent = (item: SingularityFlatNavItemType) => {
    const id = item.id?.toLowerCase();
    const title = item.title?.toLowerCase();
    let iconType = 'default';

    if (id === 'mail' || title?.includes('mail') || id === 'email' || title?.includes('email')) {
      iconType = 'mail';
      return (
        <EnvelopeIcon
          className="shortcut-icon"
          data-icon-type={iconType}
          style={{
            width: 18,
            height: 18,
            shapeRendering: 'geometricPrecision',
          }}
        />
      );
    }
    if (id === 'calendar' || title?.includes('calendar')) {
      iconType = 'calendar';
      return (
        <CalendarDaysIcon
          className="shortcut-icon"
          data-icon-type={iconType}
          style={{
            width: 18,
            height: 18,
            shapeRendering: 'geometricPrecision',
          }}
        />
      );
    }
    if (id === 'users' || title?.includes('users') || id === 'user-management' || title?.includes('user-management')) {
      iconType = 'users';
      return (
        <ShieldCheckIcon
          className="shortcut-icon"
          data-icon-type={iconType}
          style={{
            width: 18,
            height: 18,
            shapeRendering: 'geometricPrecision',
          }}
        />
      );
    }
    return (
      <SquaresPlusIcon
        className="shortcut-icon"
        data-icon-type={iconType}
        style={{
          width: 18,
          height: 18,
          shapeRendering: 'geometricPrecision',
        }}
      />
    );
  };

  return (
    <Link to={item.url || ''}>
      <MenuItem key={item.id} component="div">
        <ListItemIcon
          className="min-w-9"
          sx={{
            color: (theme) => theme?.vars?.palette?.text?.primary || 'var(--text-color)',
          }}
          data-icon-type={
            item.id.toLowerCase() === 'mail' ||
            item.title.toLowerCase().includes('mail') ||
            item.id.toLowerCase() === 'email' ||
            item.title.toLowerCase().includes('email')
              ? 'mail'
              : item.id.toLowerCase() === 'calendar' || item.title.toLowerCase().includes('calendar')
              ? 'calendar'
              : item.id.toLowerCase() === 'users' ||
                item.title.toLowerCase().includes('users') ||
                item.id.toLowerCase() === 'user-management' ||
                item.title.toLowerCase().includes('user-management')
              ? 'users'
              : 'default'
          }
        >
          {getIconComponent(item)}
        </ListItemIcon>
        <ListItemText primary={item.title} />
        <IconButton
          onClick={(ev) => {
            ev.preventDefault();
            ev.stopPropagation();
            onToggle(item.id);
          }}
          size="large"
          sx={{
            color: (theme) => theme?.vars?.palette?.text?.primary || 'var(--text-color)',
            backgroundColor: 'transparent',
            '&:hover': {
              backgroundColor: 'transparent',
            },
          }}
          data-icon-type="folder"
        >
          <FolderOpenIcon
            className="shortcut-icon"
            data-icon-type="folder"
            style={{
              width: 18,
              height: 18,
              shapeRendering: 'geometricPrecision',
            }}
          />
        </IconButton>
      </MenuItem>
    </Link>
  );
}

export default memo(SingularityShortcuts);