import { SingularityNavItemType } from '@singularity/core/SingularityNavigation/types/SingularityNavItemType';

const SettingsAppNavigation: SingularityNavItemType = {
  id: 'apps.settings',
  title: 'Settings',
  type: 'collapse',
  url: '/apps/settings',
  icon: 'heroicons-outline:cog',
  sx: {
    '& .singularity-list-item-icon': {
      color: 'inherit',
      width: '20px',
      height: '20px',
      '[data-mui-color-scheme="dark"] &': {
        color: '#40C4FF',
        opacity: 1,
      },
    },
  },
  children: [
    {
      id: 'apps.settings.account',
      title: 'Account',
      type: 'item',
      url: '/apps/settings/account',
      icon: 'heroicons-outline:user',
      subtitle: 'Manage your public profile and private information',
      sx: {
        '& .singularity-list-item-icon': {
          color: 'inherit',
          width: '20px',
          height: '20px',
          '[data-mui-color-scheme="dark"] &': {
            color: '#40C4FF',
            opacity: 1,
          },
        },
      },
    },
    {
      id: 'apps.settings.security',
      title: 'Security',
      type: 'item',
      url: '/apps/settings/security',
      icon: 'heroicons-outline:shield-check',
      subtitle: 'Manage your password and 2-step verification preferences',
      sx: {
        '& .singularity-list-item-icon': {
          color: 'inherit',
          width: '20px',
          height: '20px',
          '[data-mui-color-scheme="dark"] &': {
            color: '#40C4FF',
            opacity: 1,
          },
        },
      },
    },
    {
      id: 'apps.settings.planBilling',
      title: 'Plan & Billing',
      type: 'item',
      url: '/apps/settings/plan-billing',
      icon: 'heroicons-outline:credit-card',
      subtitle: 'Manage your subscription plan, payment method and billing information',
      sx: {
        '& .singularity-list-item-icon': {
          color: 'inherit',
          width: '20px',
          height: '20px',
          '[data-mui-color-scheme="dark"] &': {
            color: '#40C4FF',
            opacity: 1,
          },
        },
      },
    },
    {
      id: 'apps.settings.notifications',
      title: 'Notifications',
      type: 'item',
      url: '/apps/settings/notifications',
      icon: 'heroicons-outline:bell',
      subtitle: "Manage when you'll be notified on which channels",
      sx: {
        '& .singularity-list-item-icon': {
          color: 'inherit',
          width: '20px',
          height: '20px',
          '[data-mui-color-scheme="dark"] &': {
            color: '#40C4FF',
            opacity: 1,
          },
        },
      },
    },
    {
      id: 'apps.settings.team',
      title: 'Team',
      type: 'item',
      url: '/apps/settings/team',
      icon: 'heroicons-outline:users',
      subtitle: 'Manage your existing team and change roles/permissions',
      sx: {
        '& .singularity-list-item-icon': {
          color: 'inherit',
          width: '20px',
          height: '20px',
          '[data-mui-color-scheme="dark"] &': {
            color: '#40C4FF',
            opacity: 1,
          },
        },
      },
    },
  ],
};

export default SettingsAppNavigation;