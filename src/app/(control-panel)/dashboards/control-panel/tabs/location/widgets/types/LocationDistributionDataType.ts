/**
 * The type definition for the data used to populate the expenses distribution chart series.
 */
type AppsDistributionSeriesData = {
	name: string;
	data: number[];
};

/**
 * The type definition for the data used to populate the expenses distribution chart.
 */
type AppsDistributionDataType = {
	categories: string[];
	series: AppsDistributionSeriesData[];
};

export default AppsDistributionDataType;
