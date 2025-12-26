import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import NotificationsSharpIcon from '@mui/icons-material/NotificationsSharp';
import { useTheme } from '@mui/material/styles';
import { useSnackbar } from 'notistack';
import PageBreadcrumb from 'src/components/PageBreadcrumb';
import {
    useCreateNotificationMutation,
    useDeleteNotificationsMutation,
    useGetAllNotificationsQuery,
} from './NotificationApi';
import NotificationModel from './models/NotificationModel';
import NotificationTemplate from './NotificationTemplate';

/**
 * The Notifications app header.
 */
function NotificationsAppHeader() {
    const [addNotification] = useCreateNotificationMutation();
    const { enqueueSnackbar, closeSnackbar } = useSnackbar();
    const [deleteNotifications] = useDeleteNotificationsMutation();
    const { data: notifications } = useGetAllNotificationsQuery();
    const theme = useTheme();

    function handleDismissAll() {
        deleteNotifications(notifications.map((notification) => notification.id));
    }

    function demoNotification() {
        const item = NotificationModel({ title: 'Great Job, this is awesome!' });

        enqueueSnackbar(item.title, {
            key: item.id,
            content: (
                <NotificationTemplate
                    item={item}
                    onClose={() => {
                        closeSnackbar(item.id);
                    }}
                />
            ),
        });

        addNotification(item);
    }

    return (
        <div className="flex w-full container">
            <div className="flex flex-col sm:flex-row flex-auto sm:items-center min-w-0 p-6 pb-0">
                <div className="flex flex-col flex-auto">
                    <PageBreadcrumb className="mb-2" />
                    <Typography
                        variant="h2"
                        sx={{
                            fontWeight: 600,
                            fontSize: '22px',
                            mb: 1,
                            color: 'text.primary',
                        }}
                    >
                        Notifications
                    </Typography>
                    <Typography className="font-medium tracking-tight" color="text.secondary">
                        Lists all notifications
                    </Typography>
                </div>
                <div className="flex items-center mt-6 sm:mt-0 sm:mx-2 space-x-2">
                    <Button
                        className="whitespace-nowrap"
                        onClick={demoNotification}
                        variant="contained"
                        color="primary"
                    >
                        Example notification
                    </Button>
                    <Button
                        className="whitespace-nowrap"
                        variant="contained"
                        color="secondary"
                        onClick={handleDismissAll}
                        startIcon={
                            <NotificationsSharpIcon
                                sx={{
                                    color: '#FFFFFF ',
                                    fontSize: 20,
                                }}
                            />
                        }
                    >
                        Dismiss All
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default NotificationsAppHeader;