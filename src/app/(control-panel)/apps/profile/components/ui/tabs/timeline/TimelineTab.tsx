import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import Typography from '@mui/material/Typography';
import { motion } from 'motion/react';
import SingularitySvgIcon from '@singularity/core/SingularitySvgIcon';
import { lighten } from '@mui/material/styles';
import Box from '@mui/material/Box';
import TImelineActivities from './TImelineActivities';
import TimelinePosts from './TimelinePosts';

/**
 * The timeline tab.
 */
function TimelineTab() {
    const container = {
        show: {
            transition: {
                staggerChildren: 0.04
            }
        }
    };

    const item = {
        hidden: { opacity: 0, y: 40 },
        show: { opacity: 1, y: 0 }
    };

    const modernBlurredShadow = {
        boxShadow: `
            0 10px 30px -12px rgba(0, 0, 0, 0.25),
            0 4px 15px -8px rgba(0, 0, 0, 0.15),
            0 0 0 1px rgba(255, 255, 255, 0.1),
            inset 0 1px 0 rgba(255, 255, 255, 0.2)
        `,
        border: '1px solid rgba(255, 255, 255, 0.15)',
        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        backdropFilter: 'blur(10px)',
        backgroundColor: 'rgba(255, 255, 255, 0.95)',
        borderRadius: '12px',
        '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, transparent 50%)',
            zIndex: -1,
            borderRadius: 'inherit',
        },
        '&:hover': {
            transform: 'translateY(-2px)',
            boxShadow: `
                0 20px 40px -15px rgba(0, 0, 0, 0.3),
                0 8px 25px -10px rgba(0, 0, 0, 0.2),
                0 0 0 1px rgba(255, 255, 255, 0.2),
                inset 0 1px 0 rgba(255, 255, 255, 0.3)
            `,
        },
    };

    const inputShadow = {
        boxShadow: `
            0 4px 20px -8px rgba(0, 0, 0, 0.12),
            0 2px 8px -4px rgba(0, 0, 0, 0.08),
            0 0 0 1px rgba(255, 255, 255, 0.2)
        `,
        border: '1px solid rgba(0, 0, 0, 0.05)',
        transition: 'all 0.2s ease',
        borderRadius: '8px',
        overflow: 'hidden',
        '&:hover': {
            boxShadow: `
                0 6px 25px -10px rgba(0, 0, 0, 0.15),
                0 3px 12px -6px rgba(0, 0, 0, 0.1),
                0 0 0 1px rgba(255, 255, 255, 0.3)
            `,
        },
    };

    return (
        <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="w-full"
        >
            <div className="gap-4 md:flex md:gap-6">
                {}
                <div className="flex w-full flex-col pb-4 md:w-80">
                    <Card
                        component={motion.div}
                        variants={item}
                        className="flex w-full flex-col px-8 pt-6 relative overflow-hidden"
                        sx={modernBlurredShadow}
                    >
                        <div className="flex items-center justify-between pb-4">
                            <Typography className="text-2xl leading-[1.25] font-semibold">
                                Latest Activity
                            </Typography>
                            <Button
                                color="inherit"
                                size="small"
                                className="-mx-2 font-medium"
                                sx={{
                                    '&:hover': {
                                        transform: 'translateY(-1px)',
                                        backgroundColor: 'rgba(0, 0, 0, 0.04)',
                                    },
                                }}
                            >
                                See All
                            </Button>
                        </div>

                        <CardContent className="p-0">
                            <TImelineActivities />
                        </CardContent>
                    </Card>
                </div>

                {}
                <div className="flex flex-1 flex-col">
                    {}
                    <Card
                        component={motion.div}
                        variants={item}
                        className="mb-4 w-full overflow-hidden md:mb-8 relative"
                        sx={modernBlurredShadow}
                    >
                        <Box sx={inputShadow}>
                            <Input
                                className="w-full p-6"
                                classes={{ root: 'text-base' }}
                                placeholder="Write something.."
                                multiline
                                rows="6"
                                margin="none"
                                disableUnderline
                            />
                        </Box>
                        
                        <Box
                            className="card-footer flex flex-row items-center border-t px-6 py-3"
                            sx={(theme) => ({
                                backgroundColor: lighten(theme.palette.background.default, 0.02),
                                ...theme.applyStyles('light', {
                                    backgroundColor: lighten(theme.palette.background.default, 0.4)
                                }),
                                boxShadow: 'inset 0 1px 0 rgba(255, 255, 255, 0.2)',
                            })}
                        >
                            <div className="flex flex-1 items-center">
                                <IconButton 
                                    aria-label="Add photo"
                                    sx={{
                                        '&:hover': {
                                            backgroundColor: 'rgba(0, 0, 0, 0.04)',
                                            transform: 'scale(1.05)',
                                        },
                                    }}
                                >
                                    <SingularitySvgIcon>lucide:image</SingularitySvgIcon>
                                </IconButton>
                                <IconButton 
                                    aria-label="Mention somebody"
                                    sx={{
                                        '&:hover': {
                                            backgroundColor: 'rgba(0, 0, 0, 0.04)',
                                            transform: 'scale(1.05)',
                                        },
                                    }}
                                >
                                    <SingularitySvgIcon>lucide:user</SingularitySvgIcon>
                                </IconButton>
                                <IconButton 
                                    aria-label="Add location"
                                    sx={{
                                        '&:hover': {
                                            backgroundColor: 'rgba(0, 0, 0, 0.04)',
                                            transform: 'scale(1.05)',
                                        },
                                    }}
                                >
                                    <SingularitySvgIcon>lucide:map-pin</SingularitySvgIcon>
                                </IconButton>
                            </div>
                            <div>
                                <Button
                                    variant="contained"
                                    color="secondary"
                                    size="small"
                                    aria-label="post"
                                    sx={{
                                        '&:hover': {
                                            transform: 'translateY(-1px)',
                                            boxShadow: '0 4px 12px -6px rgba(0, 0, 0, 0.2)',
                                        },
                                    }}
                                >
                                    Post
                                </Button>
                            </div>
                        </Box>
                    </Card>
                    
                    {}
                    <TimelinePosts />
                </div>
            </div>
        </motion.div>
    );
}

export default TimelineTab;