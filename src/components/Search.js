import React, { useState } from 'react';
import './Search.css';
import { DateRangePicker } from 'react-date-range';
import PeopleIcon from '@material-ui/icons/People';
import { Button } from '@material-ui/core'
import 'react-date-range/dist/styles.css'
import 'react-date-range/dist/theme/default.css';

//DATE PICKER COMPONENT
const Search = () => {
   const [startDate, setStartDate] = useState(new Date());
   const [endDate, setEndDate] = useState(new Date());

   const selectionRange = {
      startDate,
      endDate,
      key: 'selection'
   };

   function onSelect(ranges) {
      setStartDate(ranges.selection.startDate);
      setEndDate(ranges.selection.endDate);

   }

   return (
      <div className="search">
         <DateRangePicker ranges={[selectionRange]} onChange={onSelect} />
         <h2>
            Number of Guests
            <PeopleIcon />
         </h2>
         <input min={0} defaultValue={2} type='number' />
         <Button>Search Airbnb</Button>
      </div>
   );
};

export default Search;
