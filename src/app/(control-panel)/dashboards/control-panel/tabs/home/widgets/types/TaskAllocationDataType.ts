/**
 * The type definition for the data used to populate the task distribution chart.
 */
type TaskAllocationOverviewData = {
	new: number;
	completed: number;
};

/**
 * The type definition for the data used to populate the task distribution chart.
 */
type TaskAllocationDataType = {
	ranges: Record<string, string>;
	overview: Record<string, TaskAllocationOverviewData>;
	labels: string[];
	series: Record<string, number[]>;
};

export default TaskAllocationDataType;
