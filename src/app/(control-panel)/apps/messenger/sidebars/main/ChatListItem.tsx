import { styled } from '@mui/material/styles';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import { format } from 'date-fns/format';
import Box from '@mui/material/Box';
import SingularitySvgIcon from '@singularity/core/SingularitySvgIcon';
import SingularityNavLink from '@singularity/core/SingularityNavLink';
import ListItemButton from '@mui/material/ListItemButton';
import { SingularityNavLinkPropsType } from '@singularity/core/SingularityNavLink/SingularityNavLink';
import UserAvatar from '../../components/UserAvatar';
import { Chat, Contact, useGetMessengerContactsQuery, useGetMessengerUserProfileQuery } from '../../MessengerApi';

type ExtendedListItemProps = SingularityNavLinkPropsType & {
  component: React.ElementType<SingularityNavLinkPropsType>;
};

const StyledListItem = styled(ListItemButton)<ExtendedListItemProps>(({ theme }) => ({
  '&.active': {
    backgroundColor: theme.vars.palette.background.default,
  },
}));

type ChatListItemProps = {
  item: Partial<Contact & Chat>;
};

/**
 * The chat list item in the messenger sidebar's "Chats" section.
 */
function ChatListItem(props: ChatListItemProps) {
  const { item } = props;
  const { data: user } = useGetMessengerUserProfileQuery();
  const { data: contacts } = useGetMessengerContactsQuery();

  const contactId = item.contactIds.find((id) => id !== user?.id);
  const contact = contacts?.find((contact) => contact.id === contactId);

  return (
    <StyledListItem
      component={SingularityNavLink}
      className="px-6 py-3 min-h-20"
      to={`/apps/messenger/${item.id}`}
      activeClassName="active"
    >
      <UserAvatar user={contact} />
      <ListItemText
        classes={{
          root: 'min-w-px px-4',
          secondary: 'truncate',
        }}
        primary={
          <Typography
            sx={{
              fontSize: '13px ',
              fontWeight: '700 ', 
              lineHeight: '1.5',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              color: 'text.primary ', // Avoid theme overrides
            }}
          >
            {contact?.name || 'Unknown Contact'}
          </Typography>
        }
        secondary={item.lastMessage}
      />
      {contactId && (
        <div className="flex flex-col justify-center items-end">
          {item?.lastMessageAt && (
            <Typography
              className="whitespace-nowrap mb-2 font-medium text-md"
              color="text.secondary"
            >
              {format(new Date(item.lastMessageAt), 'PP')}
            </Typography>
          )}
          <div className="items-center">
            {item.muted && (
              <SingularitySvgIcon size={20} color="disabled">
                heroicons-solid:volume-off
              </SingularitySvgIcon>
            )}
            {Boolean(item.unreadCount) && (
              <Box
                sx={{
                  backgroundColor: 'secondary.main',
                  color: 'secondary.contrastText',
                }}
                className="flex items-center justify-center min-w-5 h-5 rounded-full font-medium text-xs text-center"
              >
                {item.unreadCount}
              </Box>
            )}
          </div>
        </div>
      )}
    </StyledListItem>
  );
}

export default ChatListItem;