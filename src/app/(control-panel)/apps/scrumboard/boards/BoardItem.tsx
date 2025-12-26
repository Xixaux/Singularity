'use client';

import Box from '@mui/material/Box';
import SingularitySvgIcon from '@singularity/core/SingularitySvgIcon';
import Card from '@mui/material/Card';
import { AvatarGroup } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { formatDistance } from 'date-fns';
import _ from 'lodash';
import SingularityNavLink from '@singularity/core/SingularityNavLink';
import { ScrumboardBoard, useGetScrumboardMembersQuery } from '../ScrumboardApi';

type BoardItemProps = {
  board: ScrumboardBoard;
};

function BoardItem(props: BoardItemProps) {
  const { board } = props;
  const { data: members } = useGetScrumboardMembersQuery();
  const boardMembers = board?.members?.map((id) => _.find(members, { id }));

  return (
    <Card
      component={SingularityNavLink}
      to={`/apps/scrumboard/boards/${board.id}`}
      role="button"
      sx={{
        borderRadius: 12,
        boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
        transition: 'all 0.3s ease',
        bgcolor: 'background.paper',
        border: '1px solid',
        borderColor: 'grey.200',
        p: 3,
        height: '100%',
        '&:hover': {
          boxShadow: '0 12px 40px rgba(0,0,0,0.15)',
          transform: 'translateY(-6px)',
          borderColor: 'primary.main',
        },
      }}
      className="flex flex-col items-start w-full h-full"
    >
      <div className="flex flex-col flex-auto justify-start items-start w-full">
        {/* Colorful Icon */}
        <Box
          sx={{
            width: 56,
            height: 56,
            borderRadius: '50%',
            bgcolor: 'primary.main',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            mb: 2,
            transition: 'all 0.3s ease',
            '&:hover': {
              transform: 'scale(1.1)',
              boxShadow: '0 6px 20px rgba(59,130,246,0.4)',
            },
          }}
        >
          <SingularitySvgIcon 
            sx={{ 
              fontSize: 28, 
              color: 'white',
            }}
          >
            {board.icon}
          </SingularitySvgIcon>
        </Box>

        {/* Bold Title */}
        <Typography
          sx={{
            fontSize: '18px',
            fontWeight: 700,
            color: 'text.primary',
            mb: 1,
          }}
        >
          {board.title}
        </Typography>

        {/* Description */}
        <Typography
          sx={{
            fontSize: '14px',
            color: 'text.secondary',
            lineHeight: 1.5,
            mb: 3,
          }}
        >
          {board.description}
        </Typography>
      </div>

      <div className="flex flex-col flex-auto justify-end w-full">
        {/* Avatars */}
        {Boolean(boardMembers?.length) && (
          <div className="flex items-center mb-3 -space-x-2">
            <AvatarGroup max={4}>
              {boardMembers.map((member, index) => (
                <Avatar
                  key={index}
                  alt="member"
                  src={member?.avatar}
                  sx={{
                    width: 40,
                    height: 40,
                    border: '2px solid',
                    borderColor: 'background.paper',
                  }}
                />
              ))}
            </AvatarGroup>
          </div>
        )}

        {/* Edited Info */}
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Box
            sx={{
              width: 6,
              height: 6,
              borderRadius: '50%',
              bgcolor: 'success.main',
              mr: 1.5,
            }}
          />
          <Typography sx={{ fontSize: '12px', color: 'text.secondary', fontWeight: 500 }}>
            {formatDistance(new Date(board.lastActivity), new Date(), { addSuffix: true })}
          </Typography>
        </Box>
      </div>
    </Card>
  );
}

export default BoardItem;