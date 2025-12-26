'use client';

import { format } from 'date-fns/format';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from '@singularity/core/Link';
import Avatar from '@mui/material/Avatar';
import ActivityItemType from './ActivityItemType';
import { styled, useTheme } from '@mui/material/styles';
import {
  Star,
  Email,
  GroupAdd,
  CloudDownload,
  Chat,
  TaskAlt,
  People,
  Notifications,
  Assignment,
  Sync,
} from '@mui/icons-material';

type ActivityTimelineItemProps = {
  last: boolean;
  item: ActivityItemType;
  side: 'left' | 'right';
};

const IconWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '3rem',
  height: '3rem',
  borderRadius: '12px',
  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
  boxShadow: `
    0 4px 15px -8px rgba(0, 0, 0, 0.2),
    0 2px 8px -4px rgba(0, 0, 0, 0.1),
    0 0 0 1px rgba(255, 255, 255, 0.2)
  `,
  backdropFilter: 'blur(10px)',
  '&:hover': {
    transform: 'scale(1.1) translateY(-2px)',
    boxShadow: `
      0 8px 25px -10px rgba(0, 0, 0, 0.25),
      0 4px 12px -6px rgba(0, 0, 0, 0.15),
      0 0 0 1px rgba(255, 255, 255, 0.3)
    `,
  },
}));

const ConnectorLine = styled(Box)(({ theme }) => ({
  position: 'absolute',
  height: '2px',
  backgroundColor: theme.palette.divider,
  top: '50%',
  transform: 'translateY(-50%)',
  zIndex: -1,
}));

const timelineCardShadow = {
  boxShadow: `
    0 8px 25px -10px rgba(0, 0, 0, 0.15),
    0 4px 15px -8px rgba(0, 0, 0, 0.1),
    0 0 0 1px rgba(255, 255, 255, 0.1),
    inset 0 1px 0 rgba(255, 255, 255, 0.2)
  `,
  border: '1px solid rgba(255, 255, 255, 0.15)',
  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
  backdropFilter: 'blur(10px)',
  backgroundColor: 'rgba(255, 255, 255, 0.95)',
  borderRadius: '12px',
  overflow: 'hidden',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, transparent 50%)',
    zIndex: -1,
  },
  '&:hover': {
    transform: 'translateY(-2px)',
    boxShadow: `
      0 16px 35px -12px rgba(0, 0, 0, 0.2),
      0 8px 20px -10px rgba(0, 0, 0, 0.15),
      0 0 0 1px rgba(255, 255, 255, 0.2),
      inset 0 1px 0 rgba(255, 255, 255, 0.3)
    `,
  },
};

const extraContentShadow = {
  boxShadow: `
    0 4px 15px -8px rgba(0, 0, 0, 0.12),
    0 2px 8px -4px rgba(0, 0, 0, 0.08),
    0 0 0 1px rgba(255, 255, 255, 0.2)
  `,
  border: '1px solid rgba(0, 0, 0, 0.05)',
  transition: 'all 0.2s ease',
  borderRadius: '8px',
  '&:hover': {
    boxShadow: `
      0 6px 20px -10px rgba(0, 0, 0, 0.15),
      0 3px 12px -6px rgba(0, 0, 0, 0.1),
      0 0 0 1px rgba(255, 255, 255, 0.3)
    `,
  },
};

function ActivityTimelineItem({ item, last, side }: ActivityTimelineItemProps) {
  const theme = useTheme();
  const isDarkMode = theme.palette.mode === 'dark';

  const getIcon = () => {
    switch (item.icon) {
      case 'star':
        return <Star sx={{ fontSize: '1.75rem', color: theme.palette.common.white }} />;
      case 'email':
        return <Email sx={{ fontSize: '1.75rem', color: theme.palette.common.white }} />;
      case 'group-add':
        return <GroupAdd sx={{ fontSize: '1.75rem', color: theme.palette.common.white }} />;
      case 'cloud-download':
        return <CloudDownload sx={{ fontSize: '1.75rem', color: theme.palette.common.white }} />;
      case 'chat':
        return <Chat sx={{ fontSize: '1.75rem', color: theme.palette.common.white }} />;
      case 'task-alt':
        return <TaskAlt sx={{ fontSize: '1.75rem', color: theme.palette.common.white }} />;
      case 'people':
        return <People sx={{ fontSize: '1.75rem', color: theme.palette.common.white }} />;
      case 'notifications':
        return <Notifications sx={{ fontSize: '1.75rem', color: theme.palette.common.white }} />;
      case 'assignment':
        return <Assignment sx={{ fontSize: '1.75rem', color: theme.palette.common.white }} />;
      case 'sync':
        return <Sync sx={{ fontSize: '1.75rem', color: theme.palette.common.white }} />;
      default:
        return <Star sx={{ fontSize: '1.75rem', color: theme.palette.common.white }} />;
    }
  };

  const getBackgroundColor = () => {
    switch (item.icon) {
      case 'star':
        return '#4B8CFF';
      case 'email':
        return '#40C4FF';
      case 'group-add':
        return '#FFD700';
      case 'cloud-download':
        return '#EC0C8E';
      case 'chat':
        return '#FF4081';
      case 'task-alt':
        return '#00C853';
      case 'people':
        return '#4B8CFF';
      case 'notifications':
        return '#40C4FF';
      case 'assignment':
        return '#FFD700';
      case 'sync':
        return '#EC0C8E';
      default:
        return '#FF4081';
    }
  };

  return (
    <Box sx={{ position: 'relative', mb: last ? 0 : 4 }}>
      <Card
        sx={{
          ...timelineCardShadow,
          maxWidth: { xs: '100%', md: '400px' },
          marginLeft: side === 'left' ? { xs: 0, md: 'auto' } : 0,
          marginRight: side === 'right' ? { xs: 0, md: 'auto' } : 0,
        }}
      >
        <CardContent sx={{ display: 'flex', alignItems: 'flex-start', gap: 2, p: 3 }}>
          {item.image ? (
            <Avatar 
              src={item.image} 
              sx={{ 
                width: '3rem', 
                height: '3rem', 
                borderRadius: '12px',
                boxShadow: '0 4px 12px -6px rgba(0, 0, 0, 0.15)',
                transition: 'all 0.2s ease',
                '&:hover': {
                  transform: 'scale(1.05)',
                },
              }} 
            />
          ) : (
            <IconWrapper sx={{ bgcolor: getBackgroundColor() }}>
              {getIcon()}
            </IconWrapper>
          )}
          <Box sx={{ flex: 1 }}>
            <Typography
              variant="h6"
              sx={{ 
                fontWeight: 400, 
                color: theme.palette.text.primary, 
                mb: 1,
                fontSize: '0.875rem',
              }}
            >
              {format(new Date(item.date), 'MMM dd, yyyy')}
            </Typography>
            {item.description && (
              <Box
                sx={{
                  '& p, & span, & div': {
                    fontSize: '0.875rem !important',
                    fontWeight: 400,
                  },
                }}
              >
                <div dangerouslySetInnerHTML={{ __html: item.description }} />
              </Box>
            )}
            <Box sx={{ mt: 1, display: 'flex', alignItems: 'center', gap: 1, flexWrap: 'wrap' }}>
              <Typography
                variant="body1"
                sx={{ 
                  fontSize: '0.78125rem',
                  color: isDarkMode ? '#B0B0B0' : 'text.secondary',
                  fontWeight: 400,
                }}
              >
                {format(new Date(item.date), 'h:mm a')}
              </Typography>
              {item.linkedContent && (
                <>
                  <Typography 
                    sx={{ 
                      color: isDarkMode ? '#B0B0B0' : 'text.secondary',
                      fontSize: '0.875rem',
                      fontWeight: 400,
                    }}
                  >
                    •
                  </Typography>
                  {item.useRouter ? (
                    <Link 
                      to={item.link} 
                      sx={{ 
                        color: 'primary.main', 
                        textDecoration: 'none',
                        fontSize: '0.875rem',
                        fontWeight: 400,
                        transition: 'all 0.2s ease',
                        '&:hover': {
                          color: 'primary.dark',
                          transform: 'translateX(2px)',
                        },
                      }}
                    >
                      {item.linkedContent}
                    </Link>
                  ) : (
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noreferrer"
                      style={{ 
                        color: '#1976d2', 
                        textDecoration: 'none', 
                        fontSize: '0.875rem',
                        fontWeight: 400,
                        transition: 'all 0.2s ease',
                      }}
                      onMouseEnter={(e) => e.target.style.transform = 'translateX(2px)'}
                      onMouseLeave={(e) => e.target.style.transform = 'translateX(0)'}
                    >
                      {item.linkedContent}
                    </a>
                  )}
                </>
              )}
            </Box>
            {item.extraContent && (
              <Box sx={extraContentShadow}>
                <div 
                  sx={{
                    mt: 2,
                    p: 2,
                    '& p, & span, & div': {
                      fontSize: '0.875rem',
                      fontWeight: 400,
                    },
                  }}
                  dangerouslySetInnerHTML={{ __html: item.extraContent }} 
                />
              </Box>
            )}
          </Box>
        </CardContent>
      </Card>
      <ConnectorLine
        sx={{
          width: { xs: '1.25rem', md: '3.125rem' },
          [side === 'left' ? 'right' : 'left']: { xs: 'calc(50% - 1.25rem)', md: '-3.125rem' },
          [side === 'left' ? 'left' : 'right']: '100%',
        }}
      />
    </Box>
  );
}

export default ActivityTimelineItem;