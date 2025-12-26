'use client';

import SingularitySimpleLayout from '@singularity/core/SingularitySimpleLayout';
import Input from '@mui/material/Input';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { motion } from 'motion/react';
import { useEffect, useState } from 'react';
import { blue, green, grey } from '@mui/material/colors';
import { Pagination, Chip, Box, useTheme } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import WebIcon from '@mui/icons-material/Web';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import ArticleIcon from '@mui/icons-material/Article';
import PeopleIcon from '@mui/icons-material/People';
import PageBreadcrumb from 'src/components/PageBreadcrumb';
import exampleSearchResponse from '../constants/exampleSearchResponse';
import SearchItemType from '../types/SearchItemType';

/**
 * The modern search page.
 */
function ModernSearchPage() {
  const [data, setData] = useState<SearchItemType[]>([]);
  const theme = useTheme(); // Access the Material-UI theme

  useEffect(() => {
    setTimeout(() => {
      setData(exampleSearchResponse);
    }, 100);
  }, []);

  const container = {
    show: {
      transition: {
        staggerChildren: 0.04,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0 },
  };

  // Mock logos for search results (randomly assigned)
  const mockLogos = [WebIcon, VideoLibraryIcon, ArticleIcon, PeopleIcon];


  const labels = [
    'Trending Now',
    'Explore results by region',
    'YouTube Trends',
    'Trends TV',
    'Popular Searches',
    'Global Trends',
    'Social Media Buzz',
    'Top News',
  ];

  // Function to randomly select a logo
  const getRandomLogo = () => {
    const randomIndex = Math.floor(Math.random() * mockLogos.length);
    const IconComponent = mockLogos[randomIndex];
    return <IconComponent sx={{ fontSize: 16, mr: 1, color: 'text.secondary' }} />;
  };

  return (
    <SingularitySimpleLayout
      header={
        <div className="flex flex-col w-full max-w-xl flex-1 px-6 pt-6 sm:pt-8 sm:px-8">
          <PageBreadcrumb className="mb-3" />

          <Paper
            className="flex h-11 w-full items-center rounded-lg shadow-sm"
            sx={{ border: '1px solid var(--mui-palette-primary-main)' }}  
          >
            <Input
              placeholder="Search..."
              disableUnderline
              fullWidth
              slotProps={{
                input: {
                  'aria-label': 'Search',
                },
              }}
            />
            <SearchIcon className="mx-3" sx={{ color: 'var(--mui-palette-primary-main)' }} /> {}
          </Paper>
        </div>
      }
      content={
        <div className="flex h-full w-full max-w-xl flex-auto flex-col p-6 pt-0 sm:p-8 sm:pt-0">
          <div className="flex flex-1 flex-col">
            {data.length > 0 && (
              <motion.div variants={container} initial="hidden" animate="show">
                <motion.div variants={item}>
                  <Typography color="text.secondary" className="mx-3 my-3 text-md">
                    {data.length} results
                  </Typography>
                </motion.div>

                {data.map((_item, index) => (
                  <Paper
                    component={motion.div}
                    variants={item}
                    className="mb-4 overflow-hidden rounded-lg p-4 shadow-sm"
                    key={_item.id}
                  >
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      {getRandomLogo()}
                      <Typography
                        className="cursor-pointer font-medium"
                        sx={{
                          color: blue[800],
                          fontSize: '18px',
                        }}
                      >
                        {_item.title}
                      </Typography>
                    </Box>
                    <Typography
                      className="my-1"
                      sx={{
                        color: green[800],
                      }}
                    >
                      {_item.url}
                    </Typography>
                    <Typography sx={{ fontSize: '14px' }}>{_item.excerpt}</Typography>
                    {}
                    <Chip
                      label={labels[index % labels.length]}
                      sx={{
                        bgcolor: theme.palette.mode === 'dark' ? grey[800] : '#fff',
                        color: theme.palette.mode === 'dark' ? '#fff' : '#000',
                        border: '1px solid #e0e0e0',
                        borderRadius: '16px',
                        mt: 1,
                        fontSize: '12px',
                      }}
                    />
                  </Paper>
                ))}
              </motion.div>
            )}
          </div>

          <div className="mt-12 flex justify-center">
            <Pagination count={10} variant="outlined" color="secondary" />
          </div>
        </div>
      }
    />
  );
}

export default ModernSearchPage;