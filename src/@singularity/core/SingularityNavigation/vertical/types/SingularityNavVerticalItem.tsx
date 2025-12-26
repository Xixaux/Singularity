'use client';

import SingularityNavLink from '@singularity/core/SingularityNavLink';
import { styled, useTheme } from '@mui/material/styles';
import ListItemText from '@mui/material/ListItemText';
import clsx from 'clsx';
import { useMemo, memo } from 'react';
import { ListItemButton, ListItemButtonProps } from '@mui/material';
import SingularityNavBadge from '../../SingularityNavBadge';
import SingularitySvgIcon from '../../../SingularitySvgIcon';
import { SingularityNavItemComponentProps } from '../../SingularityNavItem';
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
  Cog8ToothIcon,
  MagnifyingGlassIcon,
  CurrencyDollarIcon as PaidIcon,
  CalendarDaysIcon,
  ListBulletIcon,
  DocumentTextIcon as TextSnippetIcon,
  PhotoIcon as ImageSearchIcon,
  BoltIcon,
  ViewColumnsIcon as ViewCarouselIcon,
  ShieldCheckIcon,
  UsersIcon,
  IdentificationIcon,
  LockOpenIcon,
  ClockIcon as HistoryIcon,
  AdjustmentsHorizontalIcon,
  WalletIcon,
} from '@heroicons/react/24/outline';

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
  FontDownloadOutlined: SwatchIcon,
  InsertChartOutlined: InsertChartIcon,
  TouchAppOutlined: HandRaisedIcon,
  InsertEmoticonOutlined: FaceSmileIcon,
  AssignmentOutlined: DocumentCheckIcon,
  TableViewOutlined: TableViewIcon,
  SmartToyOutlined: Cog8ToothIcon,
  SearchOutlined: MagnifyingGlassIcon,
  PaidOutlined: PaidIcon,
  CalendarTodayOutlined: CalendarDaysIcon,
  FormatListBulletedOutlined: ListBulletIcon,
  TextSnippetOutlined: TextSnippetIcon,
  ImageSearchOutlined: ImageSearchIcon,
  PowerOutlined: BoltIcon,
  RecentActorsOutlined: UsersIcon,
  ViewCarouselOutlined: ViewCarouselIcon,
  AdminPanelSettingsOutlined: ShieldCheckIcon,
  GroupOutlined: UsersIcon,
  AssignmentIndOutlined: IdentificationIcon,
  LockOpenOutlined: LockOpenIcon,
  HistoryOutlined: HistoryIcon,
  Home: HomeIcon,
  Analytics: ChartBarIcon,
  Dashboard: Squares2X2Icon,
  LocalFireDepartment: HourglassIcon,
  HomeRounded: HomeIcon,
  AnalyticsRounded: ChartBarIcon,
  DashboardRounded: Squares2X2Icon,
  AccessAlarms: HourglassIcon,
  AccessAlarmsOutlined: HourglassIcon,
  SpaceDashboardOutlined: Squares2X2Icon,
  AssessmentOutlined: ChartBarIcon,
  TuneOutlined: AdjustmentsHorizontalIcon,
  AccountBalanceWalletOutlined: WalletIcon,
};

type ListItemButtonStyleProps = ListItemButtonProps & {
  itempadding: number;
};

const Root = styled(ListItemButton)<ListItemButtonStyleProps>(({ theme, ...props }) => ({
  minHeight: 36,
  width: '100%',
  borderRadius: '8px',
  margin: '0 0 4px 0',
  paddingRight: 16,
  paddingLeft: props.itempadding > 80 ? 80 : props.itempadding,
  paddingTop: 6,
  paddingBottom: 6,
  backgroundColor: theme.palette.background.default,
  position: 'relative',
  overflow: 'hidden',
  transition: theme.transitions.create(['background-color', 'transform'], {
    duration: theme.transitions.duration.short,
    easing: theme.transitions.easing.easeInOut,
  }),

  '&:hover': {
    backgroundColor: theme.palette.action.hover,
    transform: 'scale(1.02)',
  },

  '&.singularity-list-item.active': {
    fontWeight: 600,
    backgroundColor: theme.palette.background.paper,
    '& > .singularity-list-item-text-primary': {
      fontWeight: 700,
      color: theme.palette.text.primary,
    },
    '& > .singularity-list-item-icon': {
      color: theme.palette.mode === 'dark' ? theme.palette.text.secondary : theme.palette.text.primary,
    },
  },

  '& > .singularity-list-item-icon': {
    marginRight: 8,
    color: theme.palette.mode === 'dark' ? theme.palette.primary.main : theme.palette.primary.main,
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

  '&.singularity-list-item.active::before': {
    transform: 'scaleY(1)',
  },
}));

function SingularityNavVerticalItem(props: SingularityNavItemComponentProps) {
  const { item, nestedLevel = 0, onItemClick, checkPermission } = props;
  const theme = useTheme();
  console.log('Rendering SingularityNavVerticalItem:', {
    title: item.title,
    active: item.active,
    themeMode: theme?.palette?.mode || 'unknown',
    url: item.url,
    icon: item.icon,
    type: item.type,
  });
  const itempadding = nestedLevel > 0 ? 38 + nestedLevel * 16 : 16;
  const component = item.url ? SingularityNavLink : 'li';

  const itemProps = useMemo(
    () => ({
      ...(component !== 'li' && {
        disabled: item.disabled,
        to: item.url || '',
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
        component={component}
        className={clsx('singularity-list-item', { active: item.active })}
        onClick={() => {
          console.log('Clicked item:', {
            title: item.title,
            active: item.active,
            url: item.url,
            icon: item.icon,
            type: item.type,
          });
          onItemClick && onItemClick(item);
        }}
        itempadding={itempadding}
        sx={item.sx}
        {...itemProps}
      >
        {item.icon && (
          <>
            {typeof item.icon === 'string' && (item.icon.startsWith('material-icon-theme') || item.icon.startsWith('fluent-emoji')) ? (
              <Icon
                icon={item.icon}
                width="20"
                height="20"
                className={clsx('singularity-list-item-icon shrink-0', item.iconClass)}
                style={{
                  shapeRendering: 'crispEdges',
                  color: theme.palette.mode === 'dark' ? theme.palette.primary.main : theme.palette.primary.main,
                }}
              />
            ) : typeof item.icon === 'string' && (
                item.icon.startsWith('material-filled') ||
                item.icon.startsWith('material-outlined') ||
                item.icon.startsWith('material-rounded') ||
                item.icon.startsWith('material-sharp')
              ) ? (
              (() => {
                const [prefix, iconName] = item.icon.split(':');
                const IconComponent = heroIcons[iconName];
                if (!IconComponent) {
                  console.error(`Icon not found: ${item.icon}`, {
                    iconName,
                    availableIcons: Object.keys(heroIcons),
                  });
                  return <span>Icon Missing: {iconName}</span>;
                }
                return (
                  <IconComponent
                    className={clsx('singularity-list-item-icon shrink-0', item.iconClass)}
                    sx={{
                      width: 20,
                      height: 20,
                      shapeRendering: 'crispEdges',
                      color: theme.palette.mode === 'dark' ? theme.palette.primary.main : theme.palette.primary.main,
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
                  shapeRendering: 'crispEdges',
                  color: theme.palette.mode === 'dark' ? theme.palette.primary.main : theme.palette.primary.main,
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
          sx={(theme) => ({
            '& .MuiListItemText-primary': {
              fontSize: '0.870rem',
              fontWeight: 500,
              color: theme.vars.palette.text.primary,
              lineHeight: '26px',
            },
            '& .MuiListItemText-secondary': {
              fontSize: '0.870rem',
              fontWeight: 500,
              color: theme.vars.palette.text.secondary,
              lineHeight: '26px',
            },
          })}
        />
        {item.badge && (
          <SingularityNavBadge
            badge={item.badge}
            sx={{
              '& .MuiBadge-root .MuiBadge-badge, & .singularity-nav-badge': {
                backgroundColor: theme.palette.primary.light,
                color: theme.palette.common.white,
              },
            }}
          />
        )}
      </Root>
    ),
    [component, item, itemProps, itempadding, onItemClick, theme],
  );

  if (checkPermission && !item?.hasPermission) {
    return null;
  }

  return memoizedContent;
}

export default memo(SingularityNavVerticalItem);