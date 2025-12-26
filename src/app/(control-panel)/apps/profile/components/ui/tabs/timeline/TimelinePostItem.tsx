import CardHeader from '@mui/material/CardHeader';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import SingularitySvgIcon from '@singularity/core/SingularitySvgIcon';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { lighten } from '@mui/material/styles';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Paper from '@mui/material/Paper';
import Input from '@mui/material/Input';
import Card from '@mui/material/Card';
import { ProfilePost } from '../../../../api/types';

type PostProps = {
    item: ProfilePost;
};

function TimelinePostItem(props: PostProps) {
    const { item } = props;

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

    const commentInputShadow = {
        boxShadow: `
            0 4px 20px -8px rgba(0, 0, 0, 0.12),
            0 2px 8px -4px rgba(0, 0, 0, 0.08),
            0 0 0 1px rgba(255, 255, 255, 0.2)
        `,
        border: '1px solid rgba(0, 0, 0, 0.05)',
        transition: 'all 0.2s ease',
        '&:hover': {
            boxShadow: `
                0 6px 25px -10px rgba(0, 0, 0, 0.15),
                0 3px 12px -6px rgba(0, 0, 0, 0.1),
                0 0 0 1px rgba(255, 255, 255, 0.3)
            `,
        },
        '& .MuiInput-root': {
            backgroundColor: 'transparent',
        },
    };

    const articleCardShadow = {
        boxShadow: `
            0 8px 25px -10px rgba(0, 0, 0, 0.15),
            0 2px 10px -6px rgba(0, 0, 0, 0.1),
            0 0 0 1px rgba(255, 255, 255, 0.2)
        `,
        border: '1px solid rgba(0, 0, 0, 0.08)',
        transition: 'all 0.3s ease',
        '&:hover': {
            transform: 'translateY(-1px)',
            boxShadow: `
                0 12px 35px -12px rgba(0, 0, 0, 0.2),
                0 4px 15px -8px rgba(0, 0, 0, 0.15),
                0 0 0 1px rgba(255, 255, 255, 0.25)
            `,
        },
    };

    return (
        <Card 
            className="mb-4 md:mb-8 relative overflow-hidden"
            sx={modernBlurredShadow}
        >
            <CardHeader
                className="px-8 pt-6"
                avatar={
                    <Avatar
                        aria-label="Recipe"
                        src={item.user.avatar}
                        sx={{ 
                            boxShadow: '0 4px 12px -6px rgba(0, 0, 0, 0.15)',
                        }}
                    />
                }
                action={
                    <IconButton
                        aria-label="more"
                        size="large"
                        sx={{
                            '&:hover': {
                                backgroundColor: 'rgba(0, 0, 0, 0.04)',
                                transform: 'scale(1.1)',
                            },
                        }}
                    >
                        <SingularitySvgIcon>lucide:ellipsis-vertical</SingularitySvgIcon>
                    </IconButton>
                }
                title={
                    <span className="flex items-center gap-2">
                        <Typography
                            className="font-normal"
                            color="secondary.main"
                            component="span"
                        >
                            {item.user.name}
                        </Typography>
                        <span>
                            {item.type === 'post' && 'posted on your timeline'}
                            {item.type === 'something' && 'shared something with you'}
                            {item.type === 'video' && 'shared a video with you'}
                            {item.type === 'article' && 'shared an article with you'}
                        </span>
                    </span>
                }
                subheader={item.time}
            />
            <CardContent className="px-8">
                {item.message && (
                    <Typography
                        component="p"
                        className="mb-4"
                    >
                        {item.message}
                    </Typography>
                )}

                {item.media && (
                    <Paper sx={articleCardShadow}>
                        <img
                            src={item.media.preview}
                            alt="post"
                            className="rounded-lg w-full"
                        />
                    </Paper>
                )}

                {item.article && (
                    <Paper sx={articleCardShadow} className="overflow-hidden rounded-lg">
                        <img
                            className="w-full border-b"
                            src={item.article.media.preview}
                            alt="article"
                        />
                        <div className="p-4">
                            <Typography variant="subtitle1">{item.article.title}</Typography>
                            <Typography variant="caption">{item.article.subtitle}</Typography>
                            <Typography className="mt-4">{item.article.excerpt}</Typography>
                        </div>
                    </Paper>
                )}
            </CardContent>
            <CardActions
                disableSpacing
                className="px-8"
            >
                <Button
                    size="small"
                    aria-label="Add to favorites"
                    sx={{
                        '&:hover': {
                            backgroundColor: 'rgba(0, 0, 0, 0.04)',
                            transform: 'translateY(-1px)',
                        },
                    }}
                >
                    <SingularitySvgIcon
                        size={16}
                        color="action"
                    >
                        lucide:heart
                    </SingularitySvgIcon>
                    <Typography className="mx-1">Like</Typography>
                    <Typography>({item.like})</Typography>
                </Button>
                <Button 
                    aria-label="Share"
                    sx={{
                        '&:hover': {
                            backgroundColor: 'rgba(0, 0, 0, 0.04)',
                            transform: 'translateY(-1px)',
                        },
                    }}
                >
                    <SingularitySvgIcon
                        size={16}
                        color="action"
                    >
                        lucide:share
                    </SingularitySvgIcon>
                    <Typography className="mx-1">Share</Typography>
                    <Typography>({item.share})</Typography>
                </Button>
            </CardActions>
            <Box
                className="card-footer flex flex-col border-t px-8 py-6"
                sx={(theme) => ({
                    backgroundColor: lighten(theme.palette.background.default, 0.02),
                    ...theme.applyStyles('light', {
                        backgroundColor: lighten(theme.palette.background.default, 0.4)
                    }),
                    boxShadow: 'inset 0 1px 0 rgba(255, 255, 255, 0.2)',
                })}
            >
                {item.comments && item.comments.length > 0 && (
                    <div>
                        <div className="flex items-center">
                            <Typography>{item.comments.length} comments</Typography>
                            <SingularitySvgIcon
                                size={16}
                                className="mx-1"
                                color="action"
                            >
                                lucide:chevron-down
                            </SingularitySvgIcon>
                        </div>
                        <List>
                            {item.comments.map((comment) => (
                                <div key={comment.id}>
                                    <ListItem className="-mx-2 px-0">
                                        <Avatar
                                            alt={comment.user.name}
                                            src={comment.user.avatar}
                                            className="mx-2"
                                            sx={{ 
                                                boxShadow: '0 2px 8px -4px rgba(0, 0, 0, 0.1)',
                                            }}
                                        />
                                        <ListItemText
                                            className="px-1"
                                            primary={
                                                <div className="flex items-center gap-2">
                                                    <Typography
                                                        className="font-normal"
                                                        color="secondary"
                                                        component="span"
                                                    >
                                                        {comment.user.name}
                                                    </Typography>
                                                    <Typography variant="caption">{comment.time}</Typography>
                                                </div>
                                            }
                                            secondary={comment.message}
                                        />
                                    </ListItem>
                                    <div className="mx-13 mb-2 flex items-center">
                                        <Button endIcon={<SingularitySvgIcon size={14}>lucide:undo-2</SingularitySvgIcon>}>
                                            Reply
                                        </Button>
                                    </div>
                                </div>
                            ))}
                        </List>
                    </div>
                )}

                <div className="-mx-1 flex flex-auto">
                    <Avatar
                        className="mx-1"
                        src="/assets/images/avatars/profile.jpg"
                        sx={{ 
                            boxShadow: '0 4px 12px -6px rgba(0, 0, 0, 0.15)',
                        }}
                    />
                    <div className="mx-1 flex flex-1 flex-col items-end">
                        <Paper 
                            className="shadow-0 mb-4 w-full overflow-hidden border"
                            sx={commentInputShadow}
                        >
                            <Input
                                className="w-full p-3"
                                classes={{ root: 'text-md' }}
                                placeholder="Add a comment.."
                                multiline
                                rows="6"
                                margin="none"
                                disableUnderline
                            />
                        </Paper>
                        <div>
                            <Button
                                variant="contained"
                                color="secondary"
                                size="small"
                                sx={{
                                    '&:hover': {
                                        transform: 'translateY(-1px)',
                                        boxShadow: '0 4px 12px -6px rgba(0, 0, 0, 0.2)',
                                    },
                                }}
                            >
                                Post comment
                            </Button>
                        </div>
                    </div>
                </div>
            </Box>
        </Card>
    );
}

export default TimelinePostItem;