import React from 'react';
import AdvertsList from '../Adverts/AdvertsPage/AdvertsList';
import FiltersForm from './FiltersForm';

const FiltersAdverts = ({ adverts }) => {
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
