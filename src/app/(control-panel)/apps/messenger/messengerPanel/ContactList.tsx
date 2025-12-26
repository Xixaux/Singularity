'use client';

import React, { memo, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { useAppDispatch, useAppSelector } from 'src/store/hooks';
import clsx from 'clsx';
import {
  Box,
  CircularProgress,
  IconButton,
  Tooltip,
  ClickAwayListener,
} from '@mui/material';
import SingularitySvgIcon from '@singularity/core/SingularitySvgIcon';
import { selectSelectedChatId, setSelectedChatId, openChatPanel } from './messengerPanelSlice';
import ContactButton from './ContactButton';
import {
  useCreateMessengerChatMutation,
  useGetMessengerChatsQuery,
  useGetMessengerContactsQuery,
  useGetMessengerUserProfileQuery,
} from '../MessengerApi';
import SingularityScrollbars from '@singularity/core/SingularityScrollbars';
import { useTheme } from '@mui/material/styles';

const container = {
  show: { transition: { staggerChildren: 0.025 } },
};
const item = {
  hidden: { opacity: 0, scale: 0.6 },
  show: { opacity: 1, scale: 1 },
};

type ContactListProps = {
  className?: string;
};

function ContactList(props: ContactListProps) {
  const { className } = props;
  const dispatch = useAppDispatch();
  const selectedChatId = useAppSelector(selectSelectedChatId);
  const contactListScroll = useRef<HTMLDivElement>(null);
  const { data: user } = useGetMessengerUserProfileQuery();
  const [createChat] = useCreateMessengerChatMutation();
  const { data: chats, isLoading: isChatsLoading } = useGetMessengerChatsQuery();
  const { data: contacts, isLoading: isContactsLoading } = useGetMessengerContactsQuery();
  const { data: chatList } = useGetMessengerChatsQuery();
  const [addedContactIds, setAddedContactIds] = useState<string[]>([]);
  const [openTooltip, setOpenTooltip] = useState(false);
  const theme = useTheme();

  const chatListContacts = contacts?.length > 0 && chats?.length > 0
    ? chats.map((_chat) => ({
        ..._chat,
        ...contacts.find((_contact) => _chat.contactIds.includes(_contact.id)),
      }))
    : [];

  const scrollToTop = () => {
    if (!contactListScroll.current) return;
    contactListScroll.current.scrollTop = 0;
  };

  const handleContactClick = (contactId: string) => {
    dispatch(openChatPanel());
    const chat = chatList?.find((chat) => chat.contactIds.includes(contactId));
    if (chat) {
      dispatch(setSelectedChatId(chat.id));
      scrollToTop();
    } else {
      createChat({ contactIds: [contactId, user.id] }).then((res) => {
        const chatId = res.data.id;
        dispatch(setSelectedChatId(chatId));
        scrollToTop();
      });
    }
  };

  // Handle clicking the plus icon to add a new contact to the quickbar
  const handleAddContact = () => {
    // Limit quickbar to 10 contacts
    if (limitedContacts.length >= 10) {
      setOpenTooltip(true);
      setTimeout(() => setOpenTooltip(false), 3000);
      return;
    }

    // Select the last available contact from the contacts array
    // - Filters out contacts already in chats (chatListContacts) or recently added (addedContactIds)
    // - Picks the LAST contact in the filtered array (based on JSON order, e.g., src/mock/contacts.json)
    // - JSON order may be by creation time, name, or manual; check mock data for sorting details
    const availableContact = contacts
      ?.filter(
        (contact) =>
          !chatListContacts.some((c) => c.id === contact.id) &&
          !addedContactIds.includes(contact.id)
      )
      .slice(-1)[0];
    if (availableContact) {
      setAddedContactIds((prev) => [...prev, availableContact.id]);
      createChat({ contactIds: [availableContact.id, user.id] }).then((res) => {
        dispatch(setSelectedChatId(res.data.id));
        scrollToTop();
      });
    }
  };

  const handleTooltipClose = () => {
    setOpenTooltip(false);
  };

  if (isContactsLoading || isChatsLoading) {
    return (
      <Box className="flex justify-center py-3" sx={{ width: 70, minWidth: 70 }}>
        <CircularProgress color="secondary" />
      </Box>
    );
  }

  const limitedContacts = [
    ...chatListContacts,
    ...contacts.filter(
      (contact) =>
        !chats.some((chat) => chat.contactIds.includes(contact.id)) &&
        addedContactIds.includes(contact.id)
    ),
  ].slice(0, chatListContacts.length === 0 ? 5 : 10);

  return (
    <SingularityScrollbars
      className={clsx('flex shrink-0 flex-col overflow-y-auto overscroll-contain', className)}
      ref={contactListScroll}
      option={{ suppressScrollX: true, wheelPropagation: false }}
      sx={{
        width: 70,
        minWidth: 70,
        position: 'fixed',
        right: 0,
        top: 0,
        height: '100vh',
        py: 2,
        borderRadius: '0px ',
      }}
    >
      {limitedContacts.length > 0 && (
        <motion.div variants={container} initial="hidden" animate="show" className="flex flex-col shrink-0">
          {limitedContacts.map((contact) => (
            <motion.div variants={item} key={contact.id}>
              <ContactButton
                contact={contact}
                selectedChatId={selectedChatId}
                onClick={handleContactClick}
              />
            </motion.div>
          ))}
          <ClickAwayListener onClickAway={handleTooltipClose}>
            <Tooltip
              title={
                limitedContacts.length >= 10
                  ? 'The maximum amount of contacts you can add to the quickbar is 10'
                  : 'Add Contact'
              }
              open={openTooltip}
              disableFocusListener
              disableHoverListener={limitedContacts.length >= 10}
              disableTouchListener
              PopperProps={{
                sx: {
                  '& .MuiTooltip-tooltip': {
                    backgroundColor: 'grey.800',
                    color: 'white',
                    borderRadius: '8px',
                    padding: '8px 12px',
                    fontSize: '12px',
                  },
                },
              }}
            >
              <IconButton
                sx={{ mt: 2, mx: 'auto' }}
                onClick={handleAddContact}
              >
                <SingularitySvgIcon size={24}>heroicons-solid:plus</SingularitySvgIcon>
              </IconButton>
            </Tooltip>
          </ClickAwayListener>
        </motion.div>
      )}
    </SingularityScrollbars>
  );
}

export default memo(ContactList);