import SingularitySvgIcon from '@singularity/core/SingularitySvgIcon';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import { amber, blue, green, grey, red } from '@mui/material/colors';

const TypeBadge = styled(Box)(({ ...props }) => ({
  backgroundColor: {
    PDF: red[600],
    DOC: blue[600],
    XLS: green[600],
    TXT: grey[600],
    JPG: amber[600],
    PNG: amber[600],
  }[props.color as string],
}));

type ItemIconProps = {
  type: string;
  thumbnailUrl?: string; // Optional thumbnail URL for image files
};

/**
 * The item icon component.
 */
function ItemIcon(props: ItemIconProps) {
  const { type, thumbnailUrl } = props;

  if (['JPG', 'PNG'].includes(type) && thumbnailUrl) {
    return (
      <Box
        component="img"
        src={thumbnailUrl}
        alt={`${type} thumbnail`}
        sx={{
          width: 48,
          height: 48,
          objectFit: 'cover',
          borderRadius: '4px',
          border: '1px solid',
          borderColor: 'divider',
        }}
      />
    );
  }

  if (type === 'folder') {
    return (
      <SingularitySvgIcon size={48} color="disabled">
        heroicons-outline:folder
      </SingularitySvgIcon>
    );
  }

  // Render document icon with type badge for non-image files
  return (
    <Box sx={{ position: 'relative', width: 48, height: 48 }}>
      <SingularitySvgIcon size={48} color="disabled">
        heroicons-outline:document
      </SingularitySvgIcon>
      <TypeBadge
        color={type}
        className="absolute left-0 bottom-0 px-1.5 rounded-sm text-xs font-semibold leading-normal text-white"
      >
        {type}
      </TypeBadge>
    </Box>
  );
}

export default ItemIcon;