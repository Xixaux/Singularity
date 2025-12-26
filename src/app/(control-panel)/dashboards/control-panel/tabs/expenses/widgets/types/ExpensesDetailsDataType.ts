/**
 * The type definition for a row in the expenses details table.
 */
type ExpensesDetailsRow = {
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
type ExpensesDetailsDataType = {
	columns: string[];
	rows: ExpensesDetailsRow[];
};

export default ExpensesDetailsDataType;
