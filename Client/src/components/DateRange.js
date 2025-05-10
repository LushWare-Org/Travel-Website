import React, { useEffect, useState } from 'react';
import { DatePicker, Space, Input } from 'antd';

const { RangePicker } = DatePicker;

const DateRange = ({ onDateChange }) => {
  const [dateRange, setDateRange] = useState([]);

  const handleDateChange = (dates) => {
    setDateRange(dates);
    onDateChange([dates[0].format('YYYY-MM-DD'), dates[1].format('YYYY-MM-DD')]);
  };

  useEffect(() => {
    let fromDateString = dateRange[0] ? dateRange[0].format('YYYY-MM-DD') : localStorage.getItem('fromDate');
    let toDateString = dateRange[1] ? dateRange[1].format('YYYY-MM-DD') : localStorage.getItem('toDate');
    
    console.log(fromDateString);
    console.log(toDateString);
  }, [dateRange]);

  return (
    <Space direction="vertical" style={{ width: '100%' }}>
      <RangePicker onChange={handleDateChange} />
      <Input
        placeholder="From Date"
        type="date"
        value={dateRange[0] ? dateRange[0].format('YYYY-MM-DD') : localStorage.getItem('fromDate')}
        style={{ width: '100%' }}
      />
      <Input
        placeholder="To Date"
        type="date"
        value={dateRange[1] ? dateRange[1].format('YYYY-MM-DD') : localStorage.getItem('toDate')}
        style={{ width: '100%' }}
      />
    </Space>
  );
};

export default DateRange;
