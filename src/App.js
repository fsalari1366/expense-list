import React, { useState } from 'react';
import NewExpense from './components/NewExpense/NewExpense';
import Expenses from '../src/components/expenses/Expenses'

const DUMMY_EXPENSES = [
  {
    id: 'e1',
    title: 'Toilet paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  {
    id: 'e2',
    title: 'New TV',
    amount: 799.45,
    date: new Date(2021, 2, 12),
  },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 594.12,
    date: new Date(2021, 7, 10),
  },
  {
    id: 'e4',
    title: 'New Desk',
    amount: 450,
    date: new Date(2021, 5, 11),
  },
];

export const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);
  const addExpenseHandler = expense => {
  setExpenses((prevExpenses) => {
    return [expense, ...prevExpenses];
  });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
     <Expenses items={expenses} />
    </div>
  )
}

export default App;