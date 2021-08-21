import React from 'react';
import AdvertsList from '../Adverts/AdvertsPage/AdvertsList';
import FiltersForm from './FiltersForm';
import { minAndMaxRange } from './minAndMaxRange';

const FiltersAdverts = ({ adverts }) => {
    
    const { min: minPrice, max: maxPrice } = minAndMaxRange(adverts);

    const [filteredAdverts,setFilteredAdverts] = React.useState([]);
    const [priceRange,setPriceRange] = React.useState({
        min: minPrice,
        max: maxPrice
    });

    const filteredRange = selectedRange =>{
        setFilteredAdverts(selectedRange);
    };
    

    
    return (
        <React.Fragment>
            <FiltersForm
                filteredRange={filteredRange}
                minPrice={minPrice}
                maxPrice={maxPrice}
            />
            <AdvertsList
                adverts={adverts}
            />
        </React.Fragment>
    );
}

export default FiltersAdverts;
