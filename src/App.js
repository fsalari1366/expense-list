import React from 'react';
import Expenses from './components/expenses/Expenses';

export const App = () => {
  const expenses = [
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

  return (
    <div>
      <h2>Get started!</h2>
     <Expenses items={expenses} />
    </div>
  )
}

export default App;