import { createSelector, WithSlice } from '@reduxjs/toolkit';
import { apiService as api } from 'src/store/apiService';
import ExpensesWidgetType from '../finance/widgets/types/ExpensesWidgetType';
import ExpensesDistributionDataType from './tabs/expenses/widgets/types/ExpensesDistributionDataType';
import ExpensesDataType from './tabs/expenses/widgets/types/ExpensesDataType';
import ExpensesDetailsDataType from './tabs/expenses/widgets/types/ExpensesDetailsDataType';
import WidgetDataType from './tabs/home/widgets/types/WidgetDataType';
import GithubIssuesDataType from './tabs/home/widgets/types/GithubIssuesDataType';
import ScheduleDataType from './tabs/home/widgets/types/ScheduleDataType';
import TaskAllocationDataType from './tabs/home/widgets/types/TaskAllocationDataType';
import TeamMemberType from './tabs/team/widgets/types/TeamMemberType';

export const addTagTypes = ['project_dashboard_widgets', 'project_dashboard_projects'] as const;
const ControlPanelDashboardApi = api
	.enhanceEndpoints({
		addTagTypes
	})
	.injectEndpoints({
		endpoints: (build) => ({
			getControlPanelDashboardWidgets: build.query<
				GetControlPanelDashboardWidgetsApiResponse,
				GetControlPanelDashboardWidgetsApiArg
			>({
				query: () => ({ url: `/api/mock/project-dashboard/widgets` }),
				providesTags: ['project_dashboard_widgets']
			}),
			getControlPanelDashboardControlPanels: build.query<
				GetControlPanelDashboardControlPanelsApiResponse,
				GetControlPanelDashboardControlPanelsApiArg
			>({
				query: () => ({ url: `/api/mock/project-dashboard/projects` }),
				providesTags: ['project_dashboard_projects']
			})
		}),
		overrideExisting: false
	});
export default ControlPanelDashboardApi;

export type ControlPanelDashboardWidgetType =
	| ExpensesWidgetType
	| ExpensesDetailsDataType
	| ExpensesDistributionDataType
	| ExpensesDataType
	| WidgetDataType
	| GithubIssuesDataType
	| ScheduleDataType
	| TaskAllocationDataType
	| TeamMemberType[];

export type GetControlPanelDashboardWidgetsApiResponse = Record<string, ControlPanelDashboardWidgetType>;

export type GetControlPanelDashboardWidgetsApiArg = void;

export type GetControlPanelDashboardControlPanelsApiResponse = /** status 200 OK */ ControlPanelType[];
export type GetControlPanelDashboardControlPanelsApiArg = void;

export type ControlPanelType = {
	id: number;
	name: string;
};

export const { useGetControlPanelDashboardWidgetsQuery, useGetControlPanelDashboardControlPanelsQuery } = ControlPanelDashboardApi;

export type ControlPanelDashboardApiType = {
	[ControlPanelDashboardApi.reducerPath]: ReturnType<typeof ControlPanelDashboardApi.reducer>;
};

/**
 * Lazy load
 * */
declare module '@/store/rootReducer' {
	export interface LazyLoadedSlices extends WithSlice<typeof ControlPanelDashboardApi> {}
}

export const selectControlPanelDashboardWidgets = createSelector(
	ControlPanelDashboardApi.endpoints.getControlPanelDashboardWidgets.select(),
	(results) => results.data
);

export const selectWidget = <T>(id: string) =>
	createSelector(selectControlPanelDashboardWidgets, (widgets) => {
		return widgets?.[id] as T;
	});
