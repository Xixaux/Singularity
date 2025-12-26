import SingularityLoading from '@singularity/core/SingularityLoading';
import { motion } from 'motion/react';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';
import SingularitySvgIcon from '@singularity/core/SingularitySvgIcon';
import { ProfileAlbum } from '../../../../api/types';
import { useProfileMediaItems } from '../../../../api/hooks/useProfileMediaItems';

type AlbumProps = {
  album: ProfileAlbum;
};

function Album(props: AlbumProps) {
  const { album } = props;

  const { data, isLoading } = useProfileMediaItems();

  const mediaItems = data?.filter((item) => item.album_id === album.id);

  const item = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0 },
  };

  if (isLoading) {
    return <SingularityLoading />;
  }

  return mediaItems?.map((media) => (
    <div
      className="w-full p-2 sm:w-1/2 md:w-1/4"
      key={media.preview}
    >
      <ImageListItem
        component={motion.div}
        variants={item}
        className="w-full overflow-hidden rounded-xl shadow-sm"
      >
        <img
          src={`/${media.preview}`} // Prepend '/' to match public folder
          alt={media.title}
        />
        <ImageListItemBar
          title={media.title}
          actionIcon={
            <IconButton size="large">
              <SingularitySvgIcon className="text-white opacity-75">lucide:info</SingularitySvgIcon>
            </IconButton>
          }
        />
      </ImageListItem>
    </div>
  ));
}

export default Album;