// src/app/(control-panel)/apps/notes/components/note-list/NoteListItem.tsx
'use client';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import clsx from 'clsx';
import { motion } from 'motion/react';
import { useAppDispatch, useAppSelector } from 'src/store/hooks';
import SingularitySvgIcon from '@singularity/core/SingularitySvgIcon';
import NoteLabel from '../NoteLabel';
import NoteReminderLabel from '../NoteReminderLabel';
import setDescriptionStyle from '../../utils/setDescriptionStyle';
import { openNoteDialog, selectVariateDescSize } from '../../notesAppSlice';
import { NotesNote } from '../../NotesApi';

type NoteListItemProps = {
  note: NotesNote;
  className?: string;
  sx?: any;
};

function NoteListItem({ note, className, sx }: NoteListItemProps) {
  const variateDescSize = useAppSelector(selectVariateDescSize);
  const dispatch = useAppDispatch();

  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1, transition: { delay: 0.1 } }}
    >
      <Box
        className={clsx('cursor-pointer p-2', className)}
        onClick={() => dispatch(openNoteDialog(note.id))}
        sx={{ ...sx }} // Apply background from parent
      >
        {note.image && note.image !== '' && (
          <img src={note.image} className="w-full block" alt="note" />
        )}

        {note.title && note.title !== '' && (
          <Typography className="px-2 my-2 text-base font-semibold">{note.title}</Typography>
        )}

        {note.content && note.content !== '' && (
          <Typography className="px-2 my-2" component="div">
            <div
              className={clsx('w-full break-words', variateDescSize ? 'font-medium' : 'text-base')}
              ref={(el) => {
                setTimeout(() => setDescriptionStyle(note.content, el, Boolean(variateDescSize)));
              }}
            >
              {note.content}
            </div>
          </Typography>
        )}

        {note.tasks && note.tasks.length > 0 && (
          <ul className="px-2 my-2 flex flex-wrap">
            {note.tasks.map((item) => (
              <li key={item.id} className="flex items-center w-full">
                <SingularitySvgIcon color={item.completed ? 'secondary' : 'disabled'} size={16}>
                  heroicons-solid:check-circle
                </SingularitySvgIcon>
                <Typography
                  className={clsx('truncate text-md mx-2', item.completed && 'line-through')}
                  color={item.completed ? 'text.secondary' : 'inherit'}
                >
                  {item.content}
                </Typography>
              </li>
            ))}
          </ul>
        )}

        {(note.labels.length > 0 || note.reminder) && (
          <div className="px-2 my-2 flex flex-wrap w-full -mx-0.5">
            {note.reminder && (
              <NoteReminderLabel className="mt-1 mx-0.5 max-w-full" date={note.reminder} />
            )}
            {note.labels.map((id) => (
              <NoteLabel id={id} key={id} className="mt-1 mx-0.5 max-w-full" linkable />
            ))}
          </div>
        )}
      </Box>
    </motion.div>
  );
}

export default NoteListItem;