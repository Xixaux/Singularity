'use client';

import Typography from '@mui/material/Typography';
import { motion } from 'framer-motion';
import Box from '@mui/material/Box';
import { lighten, ThemeProvider } from '@mui/material/styles';
import { OutlinedInput } from '@mui/material';
import InputAdornment from '@mui/material/InputAdornment';
import Card from '@mui/material/Card';
import Link from '@singularity/core/Link';
import SingularitySvgIcon from '@singularity/core/SingularitySvgIcon';
import PageBreadcrumb from 'src/components/PageBreadcrumb';
import { useMainThemeDark } from '@singularity/core/SingularitySettings/hooks/SingularityThemeHooks';
import FaqList from '../faqs/FaqList';
import { useGetHelpCenterFaqCategoriesQuery, useGetHelpCenterFaqsByCategoryQuery } from '../HelpCenterApi';

/**
 * The help center home with card header font weight increased to 700, preserving colors and structure.
 */
function HelpCenterHome() {
  const mainThemeDark = useMainThemeDark();
  const { data: faqsCategories } = useGetHelpCenterFaqCategoriesQuery();
  const mostFaqCategoryId = faqsCategories?.[0]?.id;
  const { data: faqsMost } = useGetHelpCenterFaqsByCategoryQuery(
    { categoryId: mostFaqCategoryId },
    { skip: !mostFaqCategoryId }
  );

  // Limit FAQs to 5
  const limitedFaqs = faqsMost?.slice(0, 5);

  return (
    <div className="flex flex-col flex-auto min-w-0">
      <ThemeProvider theme={mainThemeDark}>
        <Box
          className="relative pt-4 pb-8 px-4 sm:pt-6 sm:pb-12 sm:px-8 overflow-hidden"
          sx={(theme) => ({
            backgroundColor: 'primary.dark',
            color: theme.palette.getContrastText(theme.palette.primary.main),
          })}
        >
          <div className="flex flex-col items-center justify-center mx-auto w-full">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { delay: 0 } }}
            >
              <PageBreadcrumb color="secondary" />
            </motion.div>
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1, transition: { delay: 0.2 } }}
            >
              <OutlinedInput
                sx={{ backgroundColor: 'transparent' }}
                className="flex flex-1 items-center px-4 mx-2 rounded-full h-11 max-w-full w-80 sm:w-sm mt-4 sm:mt-6"
                placeholder="Enter a question, topic or keyword"
                fullWidth
                startAdornment={
                  <InputAdornment position="start">
                    <SingularitySvgIcon color="disabled">heroicons-solid:magnifying-glass</SingularitySvgIcon>
                  </InputAdornment>
                }
                slotProps={{
                  input: {
                    'aria-label': 'Search',
                  },
                }}
              />
            </motion.div>
          </div>
          <svg
            className="absolute inset-0 pointer-events-none"
            viewBox="0 0 960 540"
            width="100%"
            height="100%"
            preserveAspectRatio="xMidYMax slice"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g
              className="opacity-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="100"
            >
              <circle r="234" cx="196" cy="23" />
              <circle r="234" cx="790" cy="491" />
            </g>
          </svg>
        </Box>
      </ThemeProvider>
      <div className="flex flex-col items-center px-6 sm:px-10">
        <div className="w-full max-w-[1200px] grid grid-cols-1 md:grid-cols-[400px_1fr] gap-x-8 gap-y-8 my-12">
          {/* Left Column: Vertically Stacked Cards */}
          <div className="flex flex-col gap-y-6">
            {[
              {
                to: '/apps/help-center/faqs',
                title: 'FAQs',
                description: 'Quick Answers to Common Questions',
                delay: 0.1,
              },
              {
                to: '/apps/help-center/guides',
                title: 'Guides',
                description: 'Step-by-Step Learning Guides',
                delay: 0.2,
              },
              {
                to: '/apps/help-center/support',
                title: 'Support',
                description: 'Personalized Help When You Need It',
                delay: 0.3,
              },
            ].map((item) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: item.delay }}
              >
                <Card
                  component={Link}
                  to={item.to}
                  role="button"
                  className="relative flex flex-col shadow-sm hover:shadow-lg overflow-hidden transition-shadow ease-in-out duration-150"
                  sx={(theme) => ({
                    backgroundColor: theme.palette.background.paper,
                  })}
                >
                  <div className="flex flex-col flex-auto items-center justify-center p-6 text-center">
                    <Typography
                      className="text-[16px] font-bold"
                      sx={{ color: theme => theme.palette.text.primary }}
                    >
                      {item.title}
                    </Typography>
                    <Typography
                      className="mt-1 text-[13px]"
                      color="text.secondary"
                    >
                      {item.description}
                    </Typography>
                  </div>
                  <Box
                    className="flex items-center justify-center py-3 px-6"
                    sx={(theme) => ({
                      backgroundColor: lighten(theme.palette.background.default, 0.02),
                      ...theme.applyStyles('light', {
                        backgroundColor: lighten(theme.palette.background.default, 0.4),
                      }),
                    })}
                  >
                    <Typography
                      color="secondary"
                      className="text-sm"
                    >
                      {item.title === 'FAQs' ? 'View FAQs' : item.title === 'Guides' ? 'Explore Guides' : 'Get Support'}
                    </Typography>
                    <SingularitySvgIcon
                      size={16}
                      color="secondary"
                      className="ml-1"
                    >
                      heroicons-solid:arrow-small-right
                    </SingularitySvgIcon>
                  </Box>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Right Column: FAQ List */}
          <div className="flex flex-col">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <FaqList
                className="w-full"
                list={limitedFaqs}
              />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HelpCenterHome;