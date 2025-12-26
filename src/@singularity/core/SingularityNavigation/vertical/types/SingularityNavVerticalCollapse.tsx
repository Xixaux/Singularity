'use client';

import SingularityNavLink from '@singularity/core/SingularityNavLink';
import { styled, useTheme } from '@mui/material/styles';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import ListItemText from '@mui/material/ListItemText';
import clsx from 'clsx';
import { useMemo, useState } from 'react';
import List, { ListProps } from '@mui/material/List';
import isUrlInChildren from '@singularity/core/SingularityNavigation/isUrlInChildren';
import { ListItemButton } from '@mui/material';
import usePathname from '@singularity/hooks/usePathname';
import SingularityNavBadge from '../../SingularityNavBadge';
import SingularityNavItem, { SingularityNavItemComponentProps } from '../../SingularityNavItem';
import SingularitySvgIcon from '../../../SingularitySvgIcon';
import { SingularityNavItemType } from '../../types/SingularityNavItemType';
import { Icon } from '@iconify/react';
import {
  HomeIcon,
  ChartBarIcon,
  Squares2X2Icon,
  SquaresPlusIcon,
  PhotoIcon,
  ChatBubbleLeftIcon,
  UserGroupIcon,
  AcademicCapIcon,
  ShoppingCartIcon,
  FolderIcon,
  QuestionMarkCircleIcon,
  ExclamationTriangleIcon,
  ChatBubbleOvalLeftIcon,
  BookOpenIcon,
  LifebuoyIcon,
  EnvelopeIcon,
  ViewColumnsIcon as KanbanIcon,
  CheckCircleIcon,
  DocumentTextIcon,
  UserIcon,
  BellIcon,
  Cog6ToothIcon,
  GlobeAltIcon,
  CalendarIcon,
  LockClosedIcon,
  ClockIcon as HourglassIcon,
  ReceiptPercentIcon,
  WrenchIcon,
  CurrencyDollarIcon as MoneyIcon,
  ChartBarIcon as BarChartIcon,
  TableCellsIcon,
  SwatchIcon,
  ChartPieIcon as InsertChartIcon,
  HandRaisedIcon,
  FaceSmileIcon,
  DocumentCheckIcon,
  TableCellsIcon as TableViewIcon,
  MagnifyingGlassIcon,
  CurrencyDollarIcon as PaidIcon,
  CalendarDaysIcon,
  ListBulletIcon,
  DocumentTextIcon as TextSnippetIcon,
  PhotoIcon as ImageSearchIcon,
  BoltIcon,
  UsersIcon as RecentActorsIcon,
  ViewColumnsIcon as ViewCarouselIcon,
  ShieldCheckIcon,
  UsersIcon,
  IdentificationIcon,
  LockOpenIcon,
  ClockIcon as HistoryIcon,
  ChevronRightIcon,
  ChevronDownIcon,
} from '@heroicons/react/24/outline';
import { FontIcon, RobotIcon, ColorLensIcon } from '@heroicons/react/24/outline';

const heroIcons = {
  HomeOutlined: HomeIcon,
  AnalyticsOutlined: ChartBarIcon,
  DashboardOutlined: Squares2X2Icon,
  AppsOutlined: SquaresPlusIcon,
  ImageOutlined: PhotoIcon,
  ChatOutlined: ChatBubbleLeftIcon,
  ContactsOutlined: UserGroupIcon,
  SchoolOutlined: AcademicCapIcon,
  ShoppingCartOutlined: ShoppingCartIcon,
  FolderOutlined: FolderIcon,
  HelpOutlineOutlined: QuestionMarkCircleIcon,
  ErrorOutlineOutlined: ExclamationTriangleIcon,
  QuestionAnswerOutlined: ChatBubbleOvalLeftIcon,
  MenuBookOutlined: BookOpenIcon,
  SupportAgentOutlined: LifebuoyIcon,
  EmailOutlined: EnvelopeIcon,
  ViewKanbanOutlined: KanbanIcon,
  TaskOutlined: CheckCircleIcon,
  NoteOutlined: DocumentTextIcon,
  PersonOutlined: UserIcon,
  NotificationsOutlined: BellIcon,
  SettingsOutlined: Cog6ToothIcon,
  WebOutlined: GlobeAltIcon,
  EventOutlined: CalendarIcon,
  LockOutlined: LockClosedIcon,
  HourglassEmptyOutlined: HourglassIcon,
  ReceiptOutlined: ReceiptPercentIcon,
  BuildOutlined: WrenchIcon,
  AttachMoneyOutlined: MoneyIcon,
  WidgetsOutlined: Squares2X2Icon,
  BarChartOutlined: BarChartIcon,
  TableChartOutlined: TableCellsIcon,
  PaletteOutlined: SwatchIcon,
  FontDownloadOutlined: FontIcon,
  InsertChartOutlined: InsertChartIcon,
  TouchAppOutlined: HandRaisedIcon,
  InsertEmoticonOutlined: FaceSmileIcon,
  AssignmentOutlined: DocumentCheckIcon,
  TableViewOutlined: TableViewIcon,
  NavigateNextOutlined: ChevronRightIcon,
  SmartToyOutlined: RobotIcon,
  ColorLensOutlined: ColorLensIcon,
  SearchOutlined: MagnifyingGlassIcon,
  PaidOutlined: PaidIcon,
  CalendarTodayOutlined: CalendarDaysIcon,
  FormatListBulletedOutlined: ListBulletIcon,
  TextSnippetOutlined: TextSnippetIcon,
  ImageSearchOutlined: ImageSearchIcon,
  PowerOutlined: BoltIcon,
  RecentActorsOutlined: RecentActorsIcon,
  ViewCarouselOutlinedIcon: ViewCarouselIcon,
  AdminPanelSettingsOutlined: ShieldCheckIcon,
  GroupOutlined: UsersIcon,
  AssignmentIndOutlined: IdentificationIcon,
  LockOpenOutlined: LockOpenIcon,
  HistoryOutlined: HistoryIcon,
};

type ListComponentProps = ListProps & {
  itempadding: number;
};

const Root = styled(List)<ListComponentProps>(({ theme, ...props }) => ({
  padding: 0,
  '&.open': {},
  '& > .singularity-list-item': {
    minHeight: 36,
    width: '100%',
    borderRadius: '8px',
    margin: '0 0 4px 0',
    paddingRight: 16,
    paddingLeft: props.itempadding > 80 ? 80 : props.itempadding,
    paddingTop: 10,
    paddingBottom: 10,
    color: `rgba(${theme.vars.palette.text.primaryChannel} / 0.7)`,
    position: 'relative',
    overflow: 'hidden',
    transition: theme.transitions.create(['background-color', 'color'], {
      duration: theme.transitions.duration.short,
      easing: theme.transitions.easing.easeInOut,
    }),

    '&:hover': {
      color: theme.vars.palette.text.primary,
      backgroundColor: theme.palette.action.hover,
    },

    '&.active': {
      color: theme.vars.palette.text.primary,
      backgroundColor:
        theme.palette.mode === 'light' ? 'rgba(255, 255, 255, 0.05)' : 'rgba(255, 255, 255, 0.1)',
      '& > .singularity-list-item-text-primary': {
        color: theme.vars.palette.text.primary,
      },
      '& > .singularity-list-item-icon': {
        color: theme.palette.mode === 'dark' ? theme.palette.primary.main : '#0571D1',
      },
    },

    '& > .singularity-list-item-icon': {
      marginRight: 8,
      color: theme.palette.mode === 'dark' ? theme.palette.primary.main : '#0571D1',
      width: 20,
      height: 20,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },

    '&::before': {
      content: '""',
      position: 'absolute',
      left: 0,
      top: 0,
      bottom: 0,
      width: 4,
      backgroundColor: theme.palette.primary.main,
      borderTopRightRadius: '4px',
      borderBottomRightRadius: '4px',
      transform: 'scaleY(0)',
      transformOrigin: 'left',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
        easing: theme.transitions.easing.easeOut,
      }),
    },

    '&:hover::before': {
      transform: 'scaleY(1)',
    },

    '&.active::before': {
      transform: 'scaleY(1)',
    },
  },
}));

function needsToBeOpened(pathname: string, item: SingularityNavItemType) {
  return pathname && isUrlInChildren(item, pathname);
}

function SingularityNavVerticalCollapse(props: SingularityNavItemComponentProps) {
  const theme = useTheme();
  const pathname = usePathname();
  const { item, nestedLevel = 0, onItemClick, checkPermission } = props;
  const [open, setOpen] = useState(() => needsToBeOpened(pathname, item));
  const itempadding = nestedLevel > 0 ? 38 + nestedLevel * 16 : 16;
  const component = item.url ? SingularityNavLink : 'li';

  const itemProps = useMemo(
    () => ({
      ...(component !== 'li' && {
        disabled: item.disabled,
        to: item.url,
        end: item.end,
        role: 'button',
        exact: item?.exact,
      }),
    }),
    [item, component],
  );

  const memoizedContent = useMemo(
    () => (
      <Root
        className={clsx(open && 'open')}
        itempadding={itempadding}
        sx={item.sx}
      >
        <ListItemButton
          component={component}
          className={clsx('singularity-list-item', item.active && 'active')}
          onClick={() => {
            setOpen(!open);
            if (onItemClick) onItemClick(item);
          }}
          {...itemProps}
        >
          {item.icon && (
            <>
              {item.icon.startsWith('material-icon-theme') || item.icon.startsWith('fluent-emoji') ? (
                <Icon
                  icon={item.icon}
                  width="20"
                  height="20"
                  className={clsx('singularity-list-item-icon shrink-0', item.iconClass)}
                  style={{
                    color: theme.palette.mode === 'dark' ? theme.palette.primary.main : '#0571D1',
                  }}
                />
              ) : item.icon.startsWith('material-filled') ||
                item.icon.startsWith('material-outlined') ||
                item.icon.startsWith('material-rounded') ||
                item.icon.startsWith('material-sharp') ? (
                (() => {
                  const [prefix, iconName] = item.icon.split(':');
                  const IconComponent = heroIcons[iconName];
                  if (!IconComponent) {
                    console.error(`Icon not found: ${item.icon}`);
                    return <span>Icon Missing: {iconName}</span>;
                  }
                  return (
                    <IconComponent
                      className={clsx('singularity-list-item-icon shrink-0', item.iconClass)}
                      sx={{
                        width: 20,
                        height: 20,
                        shapeRendering: 'crispEdges',
                        color: theme.palette.mode === 'dark' ? theme.palette.primary.main : '#0571D1',
                      }}
                    />
                  );
                })()
              ) : (
                <SingularitySvgIcon
                  className={clsx('singularity-list-item-icon shrink-0', item.iconClass)}
                  sx={{
                    width: 20,
                    height: 20,
                    color: theme.palette.mode === 'dark' ? theme.palette.primary.main : '#0571D1',
                  }}
                >
                  {item.icon}
                </SingularitySvgIcon>
              )}
            </>
          )}

          <ListItemText
            className="singularity-list-item-text"
            primary={item.title}
            secondary={item.subtitle}
            classes={{
              primary: 'singularity-list-item-text-primary truncate',
              secondary: 'singularity-list-item-text-secondary leading-[1.5] truncate',
            }}
            sx={{
              '& .MuiListItemText-primary': {
                fontSize: '0.870rem',
                fontWeight: 500,
                color: theme.palette.text.primary,
                lineHeight: '26px',
              },
              '& .MuiListItemText-secondary': {
                fontSize: '0.870rem',
                fontWeight: 500,
                color: theme.palette.text.primary,
                lineHeight: '26px',
              },
            }}
          />

          {item.badge && (
            <SingularityNavBadge
              className="mx-1"
              badge={item.badge}
            />
          )}

          <IconButton
            disableRipple
            className="-mx-3 h-5 w-5 p-0 hover:bg-transparent focus:bg-transparent"
            onClick={(ev) => {
              ev.preventDefault();
              ev.stopPropagation();
              setOpen(!open);
            }}
          >
            <Icon
              icon={open ? 'heroicons-solid:chevron-down' : 'heroicons-solid:chevron-right'}
              width="13"
              height="13"
              className="arrow-icon"
              style={{ color: theme.palette.mode === 'dark' ? theme.palette.primary.main : '#0571D1' }}
            />
          </IconButton>
        </ListItemButton>

        {item.children && (
          <Collapse in={open} className="collapse-children">
            {item.children.map((_item) => {
              if (!_item.id) {
                console.warn(`Missing id for navigation item: ${JSON.stringify(_item)}`);
              }
              return (
                <SingularityNavItem
                  key={_item.id || _item.title}
                  type={`vertical-${_item.type}`}
                  item={_item}
                  nestedLevel={nestedLevel + 1}
                  onItemClick={onItemClick}
                  checkPermission={checkPermission}
                />
              );
            })}
          </Collapse>
        )}
      </Root>
    ),
    [
      checkPermission,
      component,
      item.badge,
      item.children,
      item.icon,
      item.iconClass,
      item.subtitle,
      item.sx,
      item.title,
      itemProps,
      itempadding,
      nestedLevel,
      onItemClick,
      open,
      theme,
    ],
  );

  if (checkPermission && !item?.hasPermission) {
    return null;
  }

  return memoizedContent;
}

const NavVerticalCollapse = SingularityNavVerticalCollapse;

export default NavVerticalCollapse;