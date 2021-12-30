import React from 'react';
import MonthPicker from '../../components/MonthPicker';
import Panel from '../../components/Panel';
import GainsChart from './GainsChart';

export default function GainsChartSelector(): JSX.Element {
  const [selectedDate, handleDateChange] = React.useState(new Date());

  return (
    <Panel>
      <MonthPicker
        selectedDate={selectedDate}
        handleDateChange={handleDateChange}
      />
      <GainsChart
        month={selectedDate.getMonth()}
        year={selectedDate.getFullYear()}
      />
    </Panel>
  );
}
