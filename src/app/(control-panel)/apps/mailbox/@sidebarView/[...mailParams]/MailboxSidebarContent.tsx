/**
 * The mailbox sidebar content.
 */
'use client';

import { useTranslation } from 'react-i18next';
import { motion } from 'motion/react';
import Typography from '@mui/material/Typography';
import SingularityNavigation from '@singularity/core/SingularityNavigation';
import SingularityNavItemModel from '@singularity/core/SingularityNavigation/models/SingularityNavItemModel';
import PageBreadcrumb from 'src/components/PageBreadcrumb';
import { useMemo } from 'react';
import { SingularityNavItemType } from '@singularity/core/SingularityNavigation/types/SingularityNavItemType';
import MailCompose from './MailCompose';
import { useGetMailboxFiltersQuery, useGetMailboxFoldersQuery, useGetMailboxLabelsQuery } from '../../MailboxApi';

function MailboxSidebarContent() {
  const { data: folders } = useGetMailboxFoldersQuery();
  const { data: labels } = useGetMailboxLabelsQuery();
  const { data: filters } = useGetMailboxFiltersQuery();

  const { t } = useTranslation('mailboxApp');

  const beautifulColors = [
    '#4CAF50',
    '#2196F3',
    '#9C27B0',
    '#00BCD4',
    '#E91E63',
    '#3F51B5',
    '#009688',
    '#8BC34A',
    '#673AB7',
    '#0288D1',
  ];

  const getRandomColor = () =>
    beautifulColors[Math.floor(Math.random() * beautifulColors.length)];

  console.log('Folders data:', folders);

  const getFolderIcon = (slug: string) => {
    const normalizedSlug = slug.toLowerCase();
    switch (normalizedSlug) {
      case 'inbox':
        return 'heroicons-outline:inbox';
      case 'sent':
        return 'heroicons-outline:paper-airplane';
      case 'spam':
        return 'heroicons-outline:exclamation-circle';
      case 'trash':
        return 'heroicons-outline:trash';
      case 'starred':
      case 'star':
        return 'heroicons-outline:star';
      case 'important':
      case 'priority':
        return 'heroicons-outline:exclamation';
      default:
        return 'heroicons-outline:folder';
    }
  };

  const navigationItems = useMemo(
    () => ({
      folders: folders?.map((item) => ({
        ...item,
        type: 'item',
        url: `/apps/mailbox/folders/${item.slug}`,
        icon: getFolderIcon(item.slug),
        sx: {
          '& > .singularity-list-item-icon': {
            color: `${getRandomColor()} `,
            opacity: 0.6,
          },
        },
      })),
      filters: filters?.map((item) => ({
        ...item,
        type: 'item',
        url: `/apps/mailbox/filters/${item.slug}`,
      })),
      labels: labels?.map((item) =>
        SingularityNavItemModel({
          ...item,
          type: 'item',
          url: `/apps/mailbox/labels/${item.slug}`,
          icon: 'heroicons-outline:tag',
          sx: {
            '& > .singularity-list-item-icon': {
              color: `${getRandomColor()} `,
              opacity: 0.6,
            },
          },
        })
      ),
    }),
    [folders, filters, labels]
  );

  return (
    <div className="flex-auto border-l-1">
      <div className="mb-6 mt-10 mx-6">
        <div className="h-6">
          <PageBreadcrumb maxItems={3} className="" />
        </div>

        <Typography className="text-4xl font-extrabold tracking-tight leading-none">
          Mailbox
        </Typography>
        <MailCompose className="mt-6" />
      </div>

      {['FOLDERS', 'FILTERS', 'LABELS'].map((section, index) => (
        <motion.div
          key={section}
          className="mb-6"
          initial={false}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1 * (index + 1) }}
        >
          <Typography
            className="px-7 py-2.5 uppercase text-md font-semibold"
            color="secondary.main"
          >
            {t(section)}
          </Typography>

          <SingularityNavigation
            navigation={navigationItems[section.toLowerCase()] as SingularityNavItemType[]}
            className="px-3"
          />
        </motion.div>
      ))}
    </div>
  );
}

export default MailboxSidebarContent;