import ListItemText from '@mui/material/ListItemText';
import ListItemButton from '@mui/material/ListItemButton';
import useNavigate from '@singularity/hooks/useNavigate';
import UserAvatar from '../../components/UserAvatar';
import {
  Contact,
  useCreateMessengerChatMutation,
  useGetMessengerChatsQuery,
  useGetMessengerUserProfileQuery,
} from '../../MessengerApi';
import Typography from '@mui/material/Typography';

type ContactListItemProps = {
  item: Contact;
};

/**
 * The contact list item in the messenger sidebar.
 */
function ContactListItem(props: ContactListItemProps) {
  const { item } = props;
  const { data: chatList } = useGetMessengerChatsQuery();
  const [createChat] = useCreateMessengerChatMutation();
  const { data: user } = useGetMessengerUserProfileQuery();
  const navigate = useNavigate();

  function handleClick() {
    const chat = chatList?.find((chat) => chat.contactIds.includes(item.id));

    if (chat) {
      navigate(`/apps/messenger/${chat.id}`);
    } else {
      createChat({ contactIds: [item.id, user.id] }).then((res) => {
        const chatId = res.data.id;
        navigate(`/apps/messenger/${chatId}`);
      });
    }
  }

  return (
    <ListItemButton
      className="px-6 py-3 min-h-20"
      onClick={handleClick}
    >
      <UserAvatar user={item} />
      <ListItemText
        classes={{
          root: 'min-w-px px-4',
          secondary: 'truncate',
        }}
        primary={
          <Typography
            sx={{
              fontSize: '13px',
              fontWeight: '500',
              lineHeight: '1.5',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              color: 'text.primary',
            }}
          >
            {item.name}
          </Typography>
        }
      />
    </ListItemButton>
  );
}

export default ContactListItem;