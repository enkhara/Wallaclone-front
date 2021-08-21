import React from 'react';
import AdvertsList from '../Adverts/AdvertsPage/AdvertsList';
import FiltersForm from './FiltersForm';
import { minAndMaxRange } from './minAndMaxRange';

const FiltersAdverts = ({ adverts }) => {
    
    const { min, max } = minAndMaxRange(adverts);

    const [filteredAdverts,setFilteredAdverts] = React.useState(adverts);
    const [priceRange,setPriceRange] = React.useState({
        min:0,
        max:25000
    })

    
    
    return (
        <React.Fragment>
            <FiltersForm/>
            <AdvertsList
                adverts={adverts}
            />
        </React.Fragment>
    );
}

export default FiltersAdverts;
