import Chip from '@mui/material/Chip';
import clsx from 'clsx';
import Link from '@singularity/core/Link';
import { MouseEvent } from 'react';
import _ from 'lodash';
import { useGetNotesLabelsQuery } from '../NotesApi';

type NoteLabelProps = {
  id: string;
  linkable?: boolean;
  onDelete?: () => void;
  className?: string;
  classes?: {
    root?: string;
    label?: string;
    deleteIcon?: string;
  };
};

/**
 * The note label.
 */
function NoteLabel(props: NoteLabelProps) {
  const { id, linkable, onDelete, className, classes } = props;
  const { data: labels } = useGetNotesLabelsQuery();

  if (!labels) {
    return null;
  }

  const label = _.find(labels, { id });

  if (!label) {
    return null;
  }

  const linkProps = linkable
    ? {
        component: Link,
        onClick: (ev: MouseEvent) => {
          ev.stopPropagation();
        },
        to: `/apps/notes/labels/${label.id}`,
      }
    : {};

  return (
    <Chip
      {...linkProps}
      label={label.title}
      classes={{
        root: clsx('h-6 border-0', className),
        label: 'px-3 py-1 text-sm font-medium leading-none',
        deleteIcon: 'w-4',
        ...classes,
      }}
      sx={{
        color: (theme) => theme.palette.text.primary,
        backgroundColor: (theme) => theme.palette.background.paper,
        border: (theme) => `1px solid ${theme.palette.divider}`,
        '&:hover': {
          backgroundColor: (theme) => theme.palette.action.hover,
        },
      }}
      variant="outlined"
      onDelete={onDelete}
    />
  );
}

export default NoteLabel;