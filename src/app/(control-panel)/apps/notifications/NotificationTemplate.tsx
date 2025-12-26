'use client';

import { Box, Typography, Link } from '@mui/material';
import { Icon } from '@iconify/react';
import { styled } from '@mui/material/styles';
import { forwardRef } from 'react';
import { useTheme } from '@mui/material/styles';

const StyledBox = styled(Box)(({ theme }) => ({
  backgroundColor: '#6BC9F7',
  border: 'none',
  borderRadius: '6px',
  padding: '16px',
  display: 'flex',
  alignItems: 'center',
  gap: '12px',
  maxWidth: '320px',
  boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
}));

interface NotificationTemplateProps {
  item: {
    id: string;
    title: string;
    description: string;
    link?: string;
    variant?: string;
  };
  onClose: (id: string) => void;
}

const NotificationTemplate = forwardRef<HTMLDivElement, NotificationTemplateProps>(
  ({ item, onClose }, ref) => {
    const theme = useTheme();

    return (
      <StyledBox ref={ref}>
        <Icon icon="fluent-emoji:rocket" style={{ color: '#32639e', fontSize: '24px' }} />
        <Box>
          <Typography variant="subtitle2" style={{ color: theme.palette.common.white, fontWeight: 500 }}>
            {item.title}
          </Typography>
          <Typography variant="body2" style={{ color: theme.palette.common.white }}>
            {item.description}{' '}
            {item.link && (
              <Link href={item.link} style={{ color: theme.palette.common.white, textDecoration: 'underline' }}>
                Learn more
              </Link>
            )}
          </Typography>
        </Box>
      </StyledBox>
    );
  }
);

NotificationTemplate.displayName = 'NotificationTemplate';

export default NotificationTemplate;