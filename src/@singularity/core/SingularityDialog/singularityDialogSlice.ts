import { createSlice, PayloadAction, WithSlice } from '@reduxjs/toolkit';
import { ReactElement } from 'react';
import rootReducer from '@/store/rootReducer';

type InitialStateProps = {
	open: boolean;
	children: ReactElement | string;
};

/**
 * The initial state of the dialog slice.
 */
const initialState: InitialStateProps = {
	open: false,
	children: ''
};

/**
 * The Singularity Dialog slice
 */
export const singularityDialogSlice = createSlice({
	name: 'singularityDialog',
	initialState,
	reducers: {
		openDialog: (state, action: PayloadAction<{ children: InitialStateProps['children'] }>) => {
			state.open = true;
			state.children = action.payload.children;
		},
		closeDialog: () => initialState
	},
	selectors: {
		selectSingularityDialogState: (singularityDialog) => singularityDialog.open,
		selectSingularityDialogProps: (singularityDialog) => singularityDialog
	}
});

/**
 * Lazy load
 * */
rootReducer.inject(singularityDialogSlice);
const injectedSlice = singularityDialogSlice.injectInto(rootReducer);
declare module '@/store/rootReducer' {
	export interface LazyLoadedSlices extends WithSlice<typeof singularityDialogSlice> {}
}

export const { closeDialog, openDialog } = singularityDialogSlice.actions;

export const { selectSingularityDialogState, selectSingularityDialogProps } = injectedSlice.selectors;

export type dialogSliceType = typeof singularityDialogSlice;

export default singularityDialogSlice.reducer;
