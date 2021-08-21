import React from 'react';
import T from 'prop-types';
import Slider from '@material-ui/core/Slider';

function SelectRange({ filteredRange,minPrice,maxPrice }) {
  function valuetext(value) {
    return `${value}`;
  }
 
  const [value, setValue] = React.useState([minPrice,maxPrice]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    filteredRange(newValue);
   
  };

  return (

      <Slider
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        getAriaValueText={valuetext}
        min={minPrice}
        max={maxPrice}
      />
    
  );
}

SelectRange.propTypes = {
  filteredRange: T.func.isRequired,
  minPrice: T.number,
  maxPrice: T.number,

}; 

SelectRange.defaultProps = {
  minPrice: 0,
  maxPrice: 0,
};

export default SelectRange;