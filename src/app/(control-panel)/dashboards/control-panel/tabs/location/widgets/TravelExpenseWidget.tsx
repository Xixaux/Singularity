'use client';

import { memo, useState } from 'react';
import Paper from '@mui/material/Paper';
import SingularitySvgIcon from '@singularity/core/SingularitySvgIcon';
import IconButton from '@mui/material/IconButton';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import SingularityLoading from '@singularity/core/SingularityLoading';
import { useGetControlPanelDashboardWidgetsQuery } from '../../../ControlPanelDashboardApi';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import ExpensesDataType from './types/ExpensesDataType';

function TravelExpenseWidget() {
  const { data: widgets, isLoading } = useGetControlPanelDashboardWidgetsQuery();
  const widget = widgets?.yearlyExpenses as ExpensesDataType;
  const theme = useTheme();

  const [newExpense, setNewExpense] = useState({
    amount: '',
    category: 'Flight',
    date: '',
  });
  const [expenses, setExpenses] = useState(widget?.expenses || []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewExpense((prev) => ({ ...prev, [name]: value }));
  };

  const handleAddExpense = () => {
    if (newExpense.amount && newExpense.date) {
      const expense = {
        id: Date.now().toString(),
        amount: parseFloat(newExpense.amount),
        category: newExpense.category,
        date: newExpense.date,
        scheduleItemId: null,
      };
      setExpenses((prev) => [...prev, expense]);
      setNewExpense({ amount: '', category: 'Flight', date: '' });
    }
  };

  if (isLoading) {
    return <SingularityLoading />;
  }

  if (!widget) {
    return (
      <Paper
        className="flex flex-col flex-auto shadow-sm rounded-xl overflow-hidden"
        sx={{
          backgroundColor: 'background.paper',
          opacity: 1,
          boxShadow: '0 1px 2px rgba(0,0,0,0.1)',
          padding: theme.spacing(3),
          borderRadius: theme.shape.borderRadius * 2,
        }}
      >
        <Typography>No expense data available</Typography>
      </Paper>
    );
  }

  return (
    <Paper
      className="flex flex-col flex-auto shadow-sm rounded-xl overflow-hidden"
      sx={{
        backgroundColor: 'background.paper',
        opacity: 1,
        boxShadow: '0 1px 2px rgba(0,0,0,0.1)',
        padding: theme.spacing(3),
        borderRadius: theme.shape.borderRadius * 2,
      }}
    >
      <Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: 1 }}>
        <IconButton>
          <SingularitySvgIcon size={20}>heroicons-solid:ellipsis-vertical</SingularitySvgIcon>
        </IconButton>
      </Box>
      <Box sx={{ padding: 2 }}>
        <Typography
          className="text-lg font-medium tracking-tight leading-6 truncate"
          sx={{
            marginBottom: 2,
            color: theme.palette.text.primary,
          }}
        >
          Add Travel Expense
        </Typography>
        <Box sx={{ display: 'flex', gap: 2, marginBottom: 2 }}>
          <TextField
            label="Amount ($)"
            name="amount"
            type="number"
            value={newExpense.amount}
            onChange={handleInputChange}
            size="small"
          />
          <Select
            name="category"
            value={newExpense.category}
            onChange={handleInputChange}
            size="small"
          >
            <MenuItem value="Flight">Flight</MenuItem>
            <MenuItem value="Hotel">Hotel</MenuItem>
            <MenuItem value="Meal">Meal</MenuItem>
            <MenuItem value="Transport">Transport</MenuItem>
            <MenuItem value="Activity">Activity</MenuItem>
          </Select>
          <TextField
            label="Date"
            name="date"
            type="date"
            value={newExpense.date}
            onChange={handleInputChange}
            size="small"
            InputLabelProps={{ shrink: true }}
          />
          <Button
            variant="contained"
            onClick={handleAddExpense}
            disabled={!newExpense.amount || !newExpense.date}
          >
            Add
          </Button>
        </Box>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Category</TableCell>
              <TableCell>Amount</TableCell>
              <TableCell>Date</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {expenses.map((expense) => (
              <TableRow key={expense.id}>
                <TableCell>{expense.category}</TableCell>
                <TableCell>${expense.amount.toLocaleString('en-US')}</TableCell>
                <TableCell>{expense.date}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Box>
    </Paper>
  );
}

export default memo(TravelExpenseWidget);
