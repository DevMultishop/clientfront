import React from 'react';
import { DatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
// import ptBr from 'date-fns/locale/pt-BR';

interface IProps {
  selectedDate: Date;
  handleDateChange: (date: Date) => void;
}

export default function MonthPicker({
  selectedDate,
  handleDateChange,
}: IProps): JSX.Element {
  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <DatePicker
        autoOk
        views={['year', 'month']}
        label="Pick a month"
        minDate={new Date(2021, 1)}
        maxDate={new Date()}
        value={selectedDate}
        onChange={date => {
          const selected = date;
          const monthSelected = selected?.getMonth();
          const currentMont = selectedDate.getMonth();
          if (monthSelected === currentMont) return;
          handleDateChange(date || new Date());
        }}
        variant="inline"
        inputVariant="filled"
        fullWidth
      />
    </MuiPickersUtilsProvider>
  );
}
