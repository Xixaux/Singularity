'use client';

import { motion } from 'motion/react';
import { Checkbox, FormLabel, Box } from '@mui/material';
import Typography from '@mui/material/Typography';
import { useAppDispatch, useAppSelector } from 'src/store/hooks';
import PageBreadcrumb from 'src/components/PageBreadcrumb';
import { selectSelectedLabels, toggleSelectedLabels } from './calendarAppSlice';
import { useGetCalendarLabelsQuery } from './CalendarApi';
import LabelsDialog from './dialogs/labels/LabelsDialog';
import { useTheme, lighten } from '@mui/material/styles';

function CalendarAppSidebar() {
    const selectedLabels = useAppSelector(selectSelectedLabels);
    const dispatch = useAppDispatch();
    const { data: labels } = useGetCalendarLabelsQuery();
    const theme = useTheme();

    return (
        <Box
            sx={{
                backgroundColor: 'theme.vars.palette.background.default',
                minHeight: '100vh',
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                flex: '1 0 auto',
            }}
        >
            <div className="flex flex-col flex-auto min-h-full py-6 px-4">
                <Box
                    sx={{
                        mb: 2,
                        '& .MuiBreadcrumbs-root a': {
                            color: theme.palette.primary.main,
                            textDecoration: 'none',
                            transition: 'color 0.2s ease',
                            '&:hover': {
                                color: lighten(theme.palette.primary.main, 0.2),
                            },
                        },
                        '& .MuiBreadcrumbs-separator': {
                            color: theme.palette.primary.main,
                        },
                        '& .MuiBreadcrumbs-root p': {
                            color: theme.palette.text.primary,
                        },
                    }}
                >
                    <PageBreadcrumb />
                </Box>

                <motion.span
                    initial={{ x: -20 }}
                    animate={{ x: 0, transition: { delay: 0.2 } }}
                >
                    <Typography
                        variant="h2"
                        sx={{
                            fontWeight: 600,
                            fontSize: '22px',
                            color: 'text.primary',
                            pb: 3,
                        }}
                    >
                        Calendar
                    </Typography>
                </motion.span>

                <div className="group flex items-center justify-between mb-3">
                    <Typography
                        className="text-lg font-semibold leading-none"
                        color="secondary.main"
                    >
                        LABELS
                    </Typography>

                    <LabelsDialog />
                </div>

                {labels?.map((label) => (
                    <FormLabel
                        htmlFor={label.id}
                        key={label.id}
                        className="group flex items-center mt-2 space-x-2 h-6 w-full cursor-pointer"
                    >
                        <Checkbox
                            id={label.id}
                            color="secondary"
                            className="p-0"
                            checked={selectedLabels.includes(label.id)}
                            onChange={() => {
                                dispatch(toggleSelectedLabels(label.id));
                            }}
                        />

                        <Box
                            className="w-3 h-3 shrink-0 rounded-full"
                            sx={{ backgroundColor: label.color }}
                        />

                        <Typography className="flex flex-1 leading-none">{label.title}</Typography>
                    </FormLabel>
                ))}
            </div>
        </Box>
    );
}

export default CalendarAppSidebar;