'use client';

import Typography from '@mui/material/Typography';
import { motion } from 'framer-motion';
import Link from '@singularity/core/Link';
import Box from '@mui/material/Box';

/**
 * The error 500 page.
 */
function Error500Page() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center p-4">
      <div className="w-full max-w-5xl text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 1, scale: 1, transition: { delay: 0.1 } }}
        >
          <Box
            component="svg"
            width="100%"
            maxWidth="400px" 
            height="auto"
            viewBox="0 0 60 60"
            fill="none"
            preserveAspectRatio="xMidYMid meet" 
            xmlns="http://www.w3.org/2000/svg"
            sx={{
              color: 'secondary.main',
              mx: 'auto', 
              display: 'block', 
            }}
          >
            <path
              d="m53 9v39a5 5 0 0 1 -5 5h-42a5 5 0 0 1 -5-5v-39l2-1h48z"
              fill="#2a2a49"
            />
            <path
              d="m53 6v3h-52v-3a5 5 0 0 1 5-5h42a5 5 0 0 1 5 5z"
              fill="#447"
            />
            <path
              d="m55.443 59h-22.886a3.535 3.535 0 0 1 -3.084-5.289l11.443-19.93a3.56 3.56 0 0 1 6.168 0l11.443 19.93a3.535 3.535 0 0 1 -3.084 5.289z"
              fill="#f49e21"
            />
            <path
              d="m7 6h-1a1 1 0 0 1 0-2h1a1 1 0 0 1 0 2z"
              fill="#ff4d4d"
            />
            <path
              d="m12 6h-1a1 1 0 0 1 0-2h1a1 1 0 0 1 0 2z"
              fill="#f7bb26"
            />
            <path
              d="m17 6h-1a1 1 0 0 1 0-2h1a1 1 0 0 1 0 2z"
              fill="#25e572"
            />
            <path
              d="m43 6h-16a1 1 0 0 1 0-2h16a1 1 0 0 1 0 2z"
              fill="#2a2a49"
            />
            <path
              d="m21 22a.994.994 0 0 1 -.6-.2l-4-3a1 1 0 0 1 0-1.6l4-3a1 1 0 1 1 1.2 1.6l-2.933 2.2 2.933 2.2a1 1 0 0 1 -.6 1.8z"
              fill="#25e572"
            />
            <path
              d="m33 22a1 1 0 0 1 -.6-1.8l2.933-2.2-2.933-2.2a1 1 0 0 1 1.2-1.6l4 3a1 1 0 0 1 0 1.6l-4 3a.994.994 0 0 1 -.6.2z"
              fill="#25e572"
            />
            <path
              d="m26 23a1.017 1.017 0 0 1 -.243-.03 1 1 0 0 1 -.728-1.212l2-8a1 1 0 0 1 1.94.484l-2 8a1 1 0 0 1 -.969.758z"
              fill="#25e572"
            />
            <path
              d="m7 29h-1a1 1 0 0 1 0-2h1a1 1 0 0 1 0 2z"
              fill="#ff4d4d"
            />
            <path
              d="m35 29h-24a1 1 0 0 1 0-2h24a1 1 0 0 1 0 2z"
              fill="#f7bb26"
            />
            <path
              d="m7 41h-1a1 1 0 0 1 0-2h1a1 1 0 0 1 0 2z"
              fill="#ff4d4d"
            />
            <path
              d="m9 33h-1a1 1 0 0 1 0-2h1a1 1 0 0 1 0 2z"
              fill="#ff4d4d"
            />
            <path
              d="m31 33h-9a1 1 0 0 1 0-2h9a1 1 0 0 1 0 2z"
              fill="#fff"
            />
            <path
              d="m18 33h-5a1 1 0 0 1 0-2h5a1 1 0 0 1 0 2z"
              fill="#2074ef"
            />
            <path
              d="m9 37h-1a1 1 0 0 1 0-2h1a1 1 0 0 1 0 2z"
              fill="#ff4d4d"
            />
            <path
              d="m18 37h-5a1 1 0 0 1 0-2h5a1 1 0 0 1 0 2z"
              fill="#2074ef"
            />
            <path
              d="m9 45h-1a1 1 0 0 1 0-2h1a1 1 0 0 1 0 2z"
              fill="#ff4d4d"
            />
            <path
              d="m18 45h-5a1 1 0 0 1 0-2h5a1 1 0 0 1 0 2z"
              fill="#2074ef"
            />
            <path
              d="m9 49h-1a1 1 0 0 1 0-2h1a1 1 0 0 1 0 2z"
              fill="#ff4d4d"
            />
            <path
              d="m18 49h-5a1 1 0 0 1 0-2h5a1 1 0 0 1 0 2z"
              fill="#2074ef"
            />
            <path
              d="m48 29h-9a1 1 0 0 1 0-2h9a1 1 0 0 1 0 2z"
              fill="#fff"
            />
            <path
              d="m37 33h-2a1 1 0 0 1 0-2h2a1 1 0 0 1 0 2z"
              fill="#ff4d4d"
            />
            <path
              d="m32 41h-21a1 1 0 0 1 0-2h21a1 1 0 0 1 0 2z"
              fill="#f7bb26"
            />
            <g fill="#fff">
              <path
                d="m35 37h-13a1 1 0 0 1 0-2h13a1 1 0 0 1 0 2z"
              />
              <path
                d="m30 45.031-7.048-.031a1 1 0 0 1 0-2l7.043.031a1 1 0 0 1 0 2z"
              />
              <path
                d="m28 49h-6a1 1 0 0 1 0-2h6a1 1 0 0 1 0 2z"
              />
              <path
                d="m44 51a1 1 0 0 1 -1-1v-11a1 1 0 0 1 2 0v11a1 1 0 0 1 -1 1z"
              />
              <path
                d="m44 54.989a.99.99 0 0 1 -1-.989v-.021a1 1 0 1 1 1 1.01z"
              />
            </g>
          </Box>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0, transition: { delay: 0.2 } }}
        >
          <Typography
            variant="h1"
            className="mt-8 text-center text-3xl font-extrabold leading-[1.25] tracking-tight sm:mt-12 md:text-5xl md:leading-tight"
          >
            Internal Server Error 5 0 0
          </Typography>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0, transition: { delay: 0.3 } }}
        >
          <Typography
            variant="h5"
            color="text.secondary"
            className="mt-4 text-center text-base font-medium tracking-tight md:text-lg"
          >
            We've been notified, our team will work on it right away.
          </Typography>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0, transition: { delay: 0.4 } }}
        >
          <Link
            className="mt-4 block font-normal text-base md:text-lg"
            to="/apps/dashboards/control-panel"
          >
            Back to Dashboard
          </Link>
        </motion.div>
      </div>
    </div>
  );
}

export default Error500Page;