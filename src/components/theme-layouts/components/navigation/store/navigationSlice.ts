import { createEntityAdapter, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppThunk, RootState } from 'src/store/store';
import { PartialDeep } from 'type-fest';
import { SingularityFlatNavItemType, SingularityNavItemType } from '@singularity/core/SingularityNavigation/types/SingularityNavItemType';
import SingularityNavigationHelper from '@singularity/utils/SingularityNavigationHelper';
import SingularityNavItemModel from '@singularity/core/SingularityNavigation/models/SingularityNavItemModel';
import navigationConfig from 'src/configs/navigationConfig';

const navigationAdapter = createEntityAdapter<SingularityFlatNavItemType>();

const emptyInitialState = navigationAdapter.getInitialState([]);

const initialState = navigationAdapter.upsertMany(
	emptyInitialState,
	SingularityNavigationHelper.flattenNavigation(navigationConfig)
);

/**
 * Redux Thunk actions related to the navigation store state
 */
/**
 * Appends a navigation item to the navigation store state.
 */
export const appendNavigationItem =
	(item: SingularityNavItemType, parentId?: string | null): AppThunk =>
	async (dispatch, getState) => {
		const AppState = getState();
		const navigation = SingularityNavigationHelper.unflattenNavigation(selectNavigationAll(AppState));

		dispatch(setNavigation(SingularityNavigationHelper.appendNavItem(navigation, SingularityNavItemModel(item), parentId)));

		return Promise.resolve();
	};

/**
 * Prepends a navigation item to the navigation store state.
 */
export const prependNavigationItem =
	(item: SingularityNavItemType, parentId?: string | null): AppThunk =>
	async (dispatch, getState) => {
		const AppState = getState();
		const navigation = SingularityNavigationHelper.unflattenNavigation(selectNavigationAll(AppState));

		dispatch(setNavigation(SingularityNavigationHelper.prependNavItem(navigation, SingularityNavItemModel(item), parentId)));

		return Promise.resolve();
	};

/**
 * Adds a navigation item to the navigation store state at the specified index.
 */
export const updateNavigationItem =
	(id: string, item: PartialDeep<SingularityNavItemType>): AppThunk =>
	async (dispatch, getState) => {
		const AppState = getState();
		const navigation = SingularityNavigationHelper.unflattenNavigation(selectNavigationAll(AppState));

		dispatch(setNavigation(SingularityNavigationHelper.updateNavItem(navigation, id, item)));

		return Promise.resolve();
	};

/**
 * Removes a navigation item from the navigation store state.
 */
export const removeNavigationItem =
	(id: string): AppThunk =>
	async (dispatch, getState) => {
		const AppState = getState();
		const navigation = SingularityNavigationHelper.unflattenNavigation(selectNavigationAll(AppState));

		dispatch(setNavigation(SingularityNavigationHelper.removeNavItem(navigation, id)));

		return Promise.resolve();
	};

export const {
	selectAll: selectNavigationAll,
	selectIds: selectNavigationIds,
	selectById: selectNavigationItemById
} = navigationAdapter.getSelectors<RootState>((state) => state.navigation);

/**
 * The navigation slice
 */
export const navigationSlice = createSlice({
	name: 'navigation',
	initialState,
	reducers: {
		setNavigation(state, action: PayloadAction<SingularityNavItemType[]>) {
			return navigationAdapter.setAll(state, SingularityNavigationHelper.flattenNavigation(action.payload));
		},
		resetNavigation: () => initialState
	}
});

export const { setNavigation, resetNavigation } = navigationSlice.actions;

export type navigationSliceType = typeof navigationSlice;

export default navigationSlice.reducer;
