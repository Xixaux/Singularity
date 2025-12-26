/* The calendar app. */
'use client';

import { styled } from '@mui/material/styles';
import { useEffect, useMemo, useRef, useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import SingularitySimpleLayout from '@singularity/core/SingularitySimpleLayout';
import useThemeMediaQuery from '@singularity/hooks/useThemeMediaQuery';
import { useAppDispatch, useAppSelector } from 'src/store/hooks';
import {
  DateSelectArg,
  DatesSetArg,
  EventAddArg,
  EventChangeArg,
  EventClickArg,
  EventContentArg,
  EventDropArg,
  EventRemoveArg,
} from '@fullcalendar/core';
import SingularityLoading from '@singularity/core/SingularityLoading';
import CalendarHeader from './CalendarHeader';
import EventDialog from './dialogs/event/EventDialog';
import { openEditEventDialog, openNewEventDialog, selectSelectedLabels, setSelectedLabels } from './calendarAppSlice';
import CalendarAppSidebar from './CalendarAppSidebar';
import CalendarAppEventContent from './CalendarAppEventContent';
import {
  Event,
  useGetCalendarEventsQuery,
  useCreateCalendarEventMutation,
  useCreateCalendarLabelMutation,
  useUpdateCalendarEventMutation,
} from './CalendarApi';

const Root = styled(SingularitySimpleLayout)(({ theme }) => ({
  '& .container': {
    maxWidth: '100%',
  },
  '& a': {
    color: `${theme.vars.palette.text.primary}`,
    textDecoration: 'none',
  },
  '& .fc-media-screen': {
    minHeight: '100%',
    width: '100%',
  },
  '& .fc-scrollgrid, & .fc-theme-standard td, & .fc-theme-standard th': {
    borderColor: `${theme.vars.palette.divider}`,
  },
  '& .fc-scrollgrid-section > td': {
    border: 0,
  },
  '& .fc-daygrid-day': {
    '&:last-child': {
      borderRight: 0,
    },
  },
  '& .fc-col-header-cell': {
    borderWidth: '0 1px 0 1px',
    padding: '8px 0 0 0',
    '& .fc-col-header-cell-cushion': {
      color: theme.vars.palette.text.secondary,
      fontWeight: 500,
      fontSize: 12,
      textTransform: 'uppercase',
    },
  },
  '& .fc-view ': {
    '& > .fc-scrollgrid': {
      border: 0,
    },
  },
  '& .fc-daygrid-day.fc-day-today': {
    backgroundColor: 'transparent',
    '& .fc-daygrid-day-number': {
      borderRadius: '100%',
      backgroundColor: `${theme.vars.palette.secondary.main}`,
      color: `${theme.vars.palette.secondary.contrastText}`,
    },
  },
  '& .fc-daygrid-day-top': {
    justifyContent: 'center',
    '& .fc-daygrid-day-number': {
      color: theme.vars.palette.text.secondary,
      fontWeight: 500,
      fontSize: 12,
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: 26,
      height: 26,
      margin: '4px 0',
      borderRadius: '50%',
      float: 'none',
      lineHeight: 1,
    },
  },
  '& .fc-h-event': {
    border: '0',
    background: 'initial',
  },
  '& .fc-event': {
    border: 0,
    padding: '0 ',
    fontSize: 12,
    margin: '0 6px 4px 6px',
  },
}));

function CalendarApp() {
  const [currentDate, setCurrentDate] = useState<DatesSetArg>();
  const dispatch = useAppDispatch();
  const { data, isLoading } = useGetCalendarEventsQuery();
  const selectedLabels = useAppSelector(selectSelectedLabels);
  const [createEvent] = useCreateCalendarEventMutation();
  const [createLabel] = useCreateCalendarLabelMutation();
  const [updateEvent] = useUpdateCalendarEventMutation();
  const calendarRef = useRef<FullCalendar>(null);
  const isMobile = useThemeMediaQuery((theme) => theme.breakpoints.down('lg'));
  const [leftSidebarOpen, setLeftSidebarOpen] = useState(!isMobile);

  const mockLabels = [
    { id: 'streaming', title: 'Streaming', color: '#1E88E5' },
    { id: 'broadcasting', title: 'Broadcasting', color: '#D81B60' },
    { id: 'travel', title: 'Travel', color: '#4CAF50' },
  ];

  const getCurrentMonthDate = (day: number, hours?: number, minutes?: number) => {
    const now = new Date();
    const year = now.getFullYear();
    const month = now.getMonth();
    const date = new Date(year, month, day, hours || 0, minutes || 0);
    return date.toISOString();
  };

  const mockEvents = [
    {
      id: 'mock1',
      title: 'Live Stream: Tech Talk',
      start: getCurrentMonthDate(15, 14, 0),
      end: getCurrentMonthDate(15, 15, 30),
      allDay: false,
      extendedProps: { label: 'streaming' },
    },
    {
      id: 'mock2',
      title: 'Broadcast: News Segment',
      start: getCurrentMonthDate(17, 9, 0),
      end: getCurrentMonthDate(17, 10, 0),
      allDay: false,
      extendedProps: { label: 'broadcasting' },
    },
    {
      id: 'mock3',
      title: 'Travel: Conference in NYC',
      start: getCurrentMonthDate(20),
      end: getCurrentMonthDate(22),
      allDay: true,
      extendedProps: { label: 'travel' },
    },
    {
      id: 'mock4',
      title: 'Streaming: Gaming Marathon',
      start: getCurrentMonthDate(25, 18, 0),
      end: getCurrentMonthDate(25, 22, 0),
      allDay: false,
      extendedProps: { label: 'streaming' },
    },
    {
      id: 'mock5',
      title: 'Broadcast: Live Podcast',
      start: getCurrentMonthDate(27, 16, 0),
      end: getCurrentMonthDate(27, 17, 30),
      allDay: false,
      extendedProps: { label: 'broadcasting' },
    },
    {
      id: 'mock6',
      title: 'Travel: Team Retreat in LA',
      start: getCurrentMonthDate(28),
      end: getCurrentMonthDate(30),
      allDay: true,
      extendedProps: { label: 'travel' },
    },
  ];

  useEffect(() => {
    mockLabels.forEach(async (label) => {
      try {
        await createLabel(label).unwrap();
      } catch (error) {
        console.error('Failed to create label:', error);
      }
    });

    mockEvents.forEach(async (event) => {
      try {
        await createEvent({ Event: event }).unwrap();
      } catch (error) {
        console.error('Failed to create event:', error);
      }
    });

    dispatch(setSelectedLabels(mockLabels.map((label) => label.id)));
  }, [createLabel, createEvent, dispatch]);

  const events = useMemo(() => data || [], [data]);

  useEffect(() => {
    setLeftSidebarOpen(!isMobile);
  }, [isMobile]);

  useEffect(() => {
    setTimeout(() => {
      calendarRef.current?.getApi()?.updateSize();
    }, 300);
  }, [leftSidebarOpen]);

  const handleDateSelect = (selectInfo: DateSelectArg) => {
    dispatch(openNewEventDialog(selectInfo));
  };

  const handleEventDrop = (eventDropInfo: EventDropArg): void => {
    const { id, title, allDay, start, end, extendedProps } = eventDropInfo.event;
    updateEvent({
      id,
      title,
      allDay,
      start: start?.toISOString() ?? '',
      end: end?.toISOString() ?? '',
      extendedProps,
    });
  };

  const handleEventClick = (clickInfo: EventClickArg) => {
    clickInfo.jsEvent.preventDefault();
    dispatch(openEditEventDialog(clickInfo));
  };

  const handleDates = (rangeInfo: DatesSetArg) => {
    setCurrentDate(rangeInfo);
  };

  const handleEventAdd = (addInfo: EventAddArg) => {
    console.info(addInfo);
  };

  const handleEventChange = (changeInfo: EventChangeArg) => {
    console.info(changeInfo);
  };

  const handleEventRemove = (removeInfo: EventRemoveArg) => {
    console.info(removeInfo);
  };

  function handleToggleLeftSidebar() {
    setLeftSidebarOpen(!leftSidebarOpen);
  }

  if (isLoading) {
    return <SingularityLoading />;
  }

  return (
    <>
      <Root
        header={
          <CalendarHeader
            calendarRef={calendarRef}
            currentDate={currentDate}
            onToggleLeftSidebar={handleToggleLeftSidebar}
          />
        }
        content={
          <FullCalendar
            plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
            headerToolbar={false}
            initialView="dayGridMonth"
            editable
            selectable
            selectMirror
            dayMaxEvents
            weekends
            datesSet={handleDates}
            select={handleDateSelect}
            events={events}
            eventContent={(eventInfo: EventContentArg & { event: Event }) => (
              <CalendarAppEventContent eventInfo={eventInfo} />
            )}
            eventClick={handleEventClick}
            eventAdd={handleEventAdd}
            eventChange={handleEventChange}
            eventRemove={handleEventRemove}
            eventDrop={handleEventDrop}
            initialDate={new Date()}
            ref={calendarRef}
          />
        }
        leftSidebarContent={<CalendarAppSidebar />}
        leftSidebarOpen={leftSidebarOpen}
        leftSidebarOnClose={() => setLeftSidebarOpen(false)}
        leftSidebarWidth={256}
        scroll="content"
      />
      <EventDialog />
    </>
  );
}

export default CalendarApp;