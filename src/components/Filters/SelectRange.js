import React from 'react';
import T from 'prop-types';
import Slider from '@material-ui/core/Slider';
//import { rangeMinAndMax } from './rangeMinAndMax';



function SelectRange() {
  
  function valuetext(value) {
    return `${value}`;
  }
 
  const [value, setValue] = React.useState([0,10]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    //filteredRange(newValue);
   
  };

  return (

      <Slider
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        getAriaValueText={valuetext}
      />
    
  );
}

SelectRange.propTypes = {
  filteredRange: T.func.isRequired,
  
};
export default SelectRange;