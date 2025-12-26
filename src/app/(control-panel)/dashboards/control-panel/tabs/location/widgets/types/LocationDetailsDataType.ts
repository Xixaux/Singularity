/**
 * The type definition for a row in the expenses details table.
 */
type AppsDetailsRow = {
	type: string;
	total: number;
	expensesAmount: number;
	expensesPercentage: number;
	remainingAmount: number;
	remainingPercentage: number;
};

/**
 * The type definition for the data used to populate the expenses details table.
 */
type AppsDetailsDataType = {
	columns: string[];
	rows: AppsDetailsRow[];
};

export default AppsDetailsDataType;
