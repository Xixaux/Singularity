import { createSlice, type WithSlice } from '@reduxjs/toolkit';
import rootReducer from '@/store/rootReducer';

/**
 * The type definition for the initial state of the NavigationBarSlice slice.
 */
type initialStateProps = {
	open: boolean;
	mobileOpen: boolean;
	foldedOpen: boolean;
};

/**
 * The initial state of the NavigationBarSlice slice.
 */
const initialState: initialStateProps = {
	open: true,
	mobileOpen: false,
	foldedOpen: false
};

/**
 * The NavigationBarSlice slice.
 */
export const NavigationBarSlice = createSlice({
	name: 'NavigationBarSlice',
	initialState,
	reducers: {
		NavigationBarSliceToggleFolded: (state) => {
			state.foldedOpen = !state.foldedOpen;
		},
		NavigationBarSliceOpenFolded: (state) => {
			state.foldedOpen = true;
		},
		NavigationBarSliceCloseFolded: (state) => {
			state.foldedOpen = false;
		},
		NavigationBarSliceToggleMobile: (state) => {
			state.mobileOpen = !state.mobileOpen;
		},
		NavigationBarSliceOpenMobile: (state) => {
			state.mobileOpen = true;
		},
		NavigationBarSliceCloseMobile: (state) => {
			state.mobileOpen = false;
		},
		NavigationBarSliceClose: (state) => {
			state.open = false;
		},
		NavigationBarSliceOpen: (state) => {
			state.open = true;
		},
		NavigationBarSliceToggle: (state) => {
			state.open = !state.open;
		},
		resetNavigationBar: () => initialState
	},
	selectors: {
		selectSingularityNavigationBar: (NavigationBarSlice) => NavigationBarSlice
	}
});

/**
 * Lazy loading
 */
rootReducer.inject(NavigationBarSlice);
const injectedSlice = NavigationBarSlice.injectInto(rootReducer);
declare module '@/store/rootReducer' {
	export interface LazyLoadedSlices extends WithSlice<typeof NavigationBarSlice> {}
}

export const {
	NavigationBarSliceToggleFolded,
	NavigationBarSliceOpenFolded,
	NavigationBarSliceCloseFolded,
	NavigationBarSliceOpen,
	NavigationBarSliceClose,
	NavigationBarSliceToggle,
	NavigationBarSliceOpenMobile,
	NavigationBarSliceCloseMobile,
	NavigationBarSliceToggleMobile,
	resetNavigationBar
} = NavigationBarSlice.actions;

export const { selectSingularityNavigationBar } = injectedSlice.selectors;

export type NavigationBarSliceType = typeof NavigationBarSlice;

export default NavigationBarSlice.reducer;
