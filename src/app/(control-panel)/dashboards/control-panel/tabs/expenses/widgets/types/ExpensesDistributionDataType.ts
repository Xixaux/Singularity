/**
 * The type definition for the data used to populate the expenses distribution chart series.
 */
type ExpensesDistributionSeriesData = {
	name: string;
	data: number[];
};

/**
 * The type definition for the data used to populate the expenses distribution chart.
 */
type ExpensesDistributionDataType = {
	categories: string[];
	series: ExpensesDistributionSeriesData[];
};

export default ExpensesDistributionDataType;
