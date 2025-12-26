'use client';

import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import SingularityNavLink from '@singularity/core/SingularityNavLink';
import ListItemButton from '@mui/material/ListItemButton';
import Grid from '@mui/material/Grid';
import MessageIcon from '@mui/icons-material/Message';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import ShareIcon from '@mui/icons-material/Share';
import useThemeMediaQuery from '@singularity/hooks/useThemeMediaQuery';
import { useTheme } from '@mui/material/styles';
import { Contact } from '../ContactsApi';

type ContactListItemPropsType = {
  contact: Contact;
};

function ContactListItem(props: ContactListItemPropsType) {
  const { contact } = props;
  const isMobile = useThemeMediaQuery((theme) => theme.breakpoints.down('md'));
  const theme = useTheme();

  const contactWithFallback = {
    ...contact,
    email: contact.email || 'mailto:test@example.com',
    linkedin: contact.linkedin || 'https://linkedin.com/in/test',
  };

  return (
    <ListItemButton
      className="px-8 py-4"
      sx={{
        bgcolor: theme.palette.background.default,
        border: 'none',
        width: '100%',
        '&:hover, &:focus, &:active': { backgroundColor: theme.palette.action.hover },
        '&:nth-of-type(odd)': { bgcolor: theme.palette.background.paper },
      }}
      component={SingularityNavLink}
      to={`/apps/contacts/${contact.id}`}
      disableRipple
      disableTouchRipple
    >
      <Grid
        container
        spacing={4}
        sx={{
          alignItems: 'center',
          flexDirection: isMobile ? 'column' : 'row',
          width: '100%',
        }}
      >
        <Grid
          item
          xs={12}
          md={5}
          sx={{
            display: 'flex',
            alignItems: 'center',
            minWidth: '500px',
          }}
        >
          <ListItemAvatar>
            <Avatar
              alt={contact.name}
              src={contact.avatar}
              sx={{
                width: isMobile ? 40 : 48,
                height: isMobile ? 40 : 48,
                borderRadius: '8px',
              }}
            />
          </ListItemAvatar>
          <ListItemText
            classes={{ root: 'm-0' }}
            primary={
              <Typography
                variant="body1"
                sx={{
                  fontSize: '13px',
                  fontWeight: 500,
                  lineHeight: '1.5',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                }}
              >
                {contact.name}
              </Typography>
            }
            secondary={
              <Typography
                component="span"
                variant="body2"
                color="text.secondary"
                sx={{ fontWeight: 500 }}
              >
                {contact.title}
              </Typography>
            }
          />
        </Grid>

        {/* Column 2: Message Icon */}
        <Grid
          item
          xs={12}
          md={3}
          sx={{
            display: 'flex',
            justifyContent: 'flex-start',
            gap: 1,
            paddingLeft: '48px',
          }}
        >
          {contactWithFallback.email && (
            <MessageIcon
              sx={{
                fontSize: 20,
                color: theme.palette.text.secondary,
                position: 'relative',
                '&::after': {
                  content: '""',
                  position: 'absolute',
                  bottom: '-4px',
                  left: 0,
                  width: '100%',
                  height: '2px',
                  backgroundColor: theme.palette.text.secondary,
                },
              }}
            />
          )}
        </Grid>

        {/* Column 3: Social Media Icons */}
        <Grid
          item
          xs={12}
          md={4}
          sx={{
            display: 'flex',
            justifyContent: 'flex-start',
            gap: 1,
            paddingLeft: '48px',
          }}
        >
          {contactWithFallback.linkedin && (
            <LinkedInIcon
              sx={{
                fontSize: 20,
                color: theme.palette.text.secondary,
                position: 'relative',
                '&::after': {
                  content: '""',
                  position: 'absolute',
                  bottom: '-4px',
                  left: 0,
                  width: '100%',
                  height: '2px',
                  backgroundColor: theme.palette.text.secondary,
                },
              }}
            />
          )}
          {contactWithFallback.twitter && (
            <ShareIcon
              sx={{
                fontSize: 20,
                color: theme.palette.text.secondary,
                position: 'relative',
                '&::after': {
                  content: '""',
                  position: 'absolute',
                  bottom: '-4px',
                  left: 0,
                  width: '100%',
                  height: '2px',
                  backgroundColor: theme.palette.text.secondary,
                },
              }}
            />
          )}
        </Grid>
      </Grid>
    </ListItemButton>
  );
}

export default ContactListItem;