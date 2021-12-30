import React from 'react';
import IncomeChart from './components/IncomeChart';
import Plans from './components/Plans';

export default function Dashboard(): JSX.Element {
  return (
    <div>
      <Plans />
      <IncomeChart />
    </div>
  );
}
