import { createSlice } from '@reduxjs/toolkit';
import type { WithSlice } from '@reduxjs/toolkit';
import rootReducer from '@/store/rootReducer';

const exampleData = {
  notes: [
    {
      id: 1,
      title: 'Best songs to listen while working',
      detail: 'Last edit: May 8th, 2015',
    },
    {
      id: 2,
      title: 'Useful subreddits',
      detail: 'Last edit: January 12th, 2015',
    },
  ],
  events: [
    {
      id: 1,
      title: 'Group Meeting',
      detail: 'In 32 Minutes, Room 1B',
    },
    {
      id: 2,
      title: 'Public Beta Release',
      detail: '11:00 PM',
    },
    {
      id: 3,
      title: 'Dinner with David',
      detail: '17:30 PM',
    },
    {
      id: 4,
      title: 'Q&A Session',
      detail: '20:30 PM',
    },
  ],
};

interface OverlayPanelState {
  data: typeof exampleData;
  open: boolean;
  fontSize: number;
}

const initialState: OverlayPanelState = {
  data: exampleData,
  open: false,
  fontSize: 16,
};

/**
 * Quick Panel data slice.
 */
export const OverlayPanelSlice = createSlice({
  name: 'overlayPanel',
  initialState,
  reducers: {
    removeEvents: (state) => {
      state.data.events = [];
    },
    toggleOverlayPanel: (state) => {
      state.open = !state.open;
    },
    openOverlayPanel: (state) => {
      state.open = true;
    },
    closeOverlayPanel: (state) => {
      state.open = false;
    },
    setFontSize: (state, action) => {
      state.fontSize = action.payload;
    },
  },
  selectors: {
    selectOverlayPanelData: (state) => state.data,
    selectOverlayPanelOpen: (state) => state.open,
    selectFontSize: (state) => state.fontSize,
  },
});

/**
 * Lazy loading
 */
rootReducer.inject(OverlayPanelSlice);
const injectedSlice = OverlayPanelSlice.injectInto(rootReducer);
declare module '@/store/rootReducer' {
  export interface LazyLoadedSlices extends WithSlice<typeof OverlayPanelSlice> {}
}

export const { selectOverlayPanelData, selectOverlayPanelOpen, selectFontSize } = injectedSlice.selectors;

export const { removeEvents, toggleOverlayPanel, openOverlayPanel, closeOverlayPanel, setFontSize } = OverlayPanelSlice.actions;

export type dataSliceType = typeof OverlayPanelSlice;

export default OverlayPanelSlice.reducer;