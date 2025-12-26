import Typography from '@mui/material/Typography';
import { motion } from 'motion/react';
import Link from '@singularity/core/Link';
import Box from '@mui/material/Box';
import { useSession } from 'next-auth/react';

/**
 * The Error404Page component renders a custom 404 error page.
 */
function Error404Page() {
    const { status } = useSession();
    const isAuthenticated = status === 'authenticated';

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
                        viewBox="0 0 32 32"
                        fill="none"
                        preserveAspectRatio="xMidYMid meet" 
                        xmlns="http://www.w3.org/2000/svg"
                        clipRule="evenodd"
                        fillRule="evenodd"
                        strokeLinejoin="round"
                        strokeMiterlimit="2"
                        sx={{
                            color: 'secondary.main',
                            mx: 'auto', 
                            display: 'block', 
                        }}
                    >
                        <g id="FLAT">
                            <g transform="matrix(1 0 0 1.1 0 -1.6)">
                                <path
                                    d="m30 7.091c0-.289-.126-.567-.351-.771-.226-.205-.531-.32-.849-.32-4.591 0-21.009 0-25.6 0-.318 0-.623.115-.849.32-.225.204-.351.482-.351.771v17.818c0 .289.126.567.351.771.226.205.531.32.849.32h25.6c.318 0 .623-.115.849-.32.225-.204.351-.482.351-.771 0-3.486 0-14.332 0-17.818z"
                                    fill="#d3dcfb"
                                />
                            </g>
                            <path
                                d="m2 9h17.717c.186 0 .37.043.536.127.384.192 1.11.554 1.494.746.166.084.35.127.536.127h7.717v-3.8c0-.318-.126-.623-.351-.849-.226-.225-.531-.351-.849-.351-4.591 0-21.009 0-25.6 0-.318 0-.623.126-.849.351-.225.226-.351.531-.351.849z"
                                fill="#1886ea"
                            />
                            <path
                                d="m9.086 16.5-.793.793c-.39.39-.39 1.024 0 1.414s1.024.39 1.414 0l.793-.793.793.793c.39.39 1.024.39 1.414 0s.39-1.024 0-1.414l-.793-.793.793-.793c.39-.39.39-1.024 0-1.414s-1.024-.39-1.414 0l-.793.793-.793-.793c-.39-.39-1.024-.39-1.414 0s-.39 1.024 0 1.414z"
                                fill="#1c2e7a"
                            />
                            <path
                                d="m20.086 16.5-.793.793c-.39.39-.39 1.024 0 1.414s1.024.39 1.414 0l.793-.793.793.793c.39.39 1.024.39 1.414 0s.39-1.024 0-1.414l-.793-.793.793-.793c.39-.39.39-1.024 0-1.414s-1.024-.39-1.414 0l-.793.793-.793-.793c-.39-.39-1.024-.39-1.414 0s-.39 1.024 0 1.414z"
                                fill="#1c2e7a"
                            />
                            <g transform="matrix(1 0 0 -1 0 44)">
                                <path
                                    d="m11.553 21.106s.871-.436 1.463-.732c.619-.31 1.349-.31 1.968 0l.927.463c.056.028.122.028.178 0l.927-.463c.619-.31 1.349-.31 1.968 0 .592.296 1.463.732 1.463.732.494.246.694.848.447 1.341-.246.494-.848.694-1.341.447l-1.464-.731c-.056-.028-.122-.028-.178 0l-.927.463c-.619.31-1.349.31-1.968 0l-.927-.463c-.056-.028-.122-.028-.178 0l-1.464.731c-.493.247-1.095.047-1.341-.447-.247-.493-.047-1.095.447-1.341z"
                                    fill="#1c2e7a"
                                />
                            </g>
                        </g>
                    </Box>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0, transition: { delay: 0.2 } }}
                >
                    <Typography
                        variant="h1"
                        className="mt-12 text-center text-4xl font-extrabold leading-[1.25] tracking-tight sm:mt-24 md:text-7xl md:leading-none"
                    >
                        404
                    </Typography>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0, transition: { delay: 0.2 } }}
                >
                    <Typography
                        variant="h5"
                        color="text.secondary"
                        className="mt-2 text-center text-lg font-medium tracking-tight md:text-xl"
                    >
                        The URL you requested could not be found.
                    </Typography>
                </motion.div>
                {isAuthenticated ? (
                    <Link
                        className="mt-12 block font-normal"
                        to="/"
                    >
                        Back to Home
                    </Link>
                ) : (
                    <Link
                        className="mt-12 block font-normal"
                        to="/sign-in"
                    >
                        Back to sign-in
                    </Link>
                )}
            </div>
        </div>
    );
}

export default Error404Page;